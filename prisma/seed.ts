import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { artistsData } from "./songsData";

const prisma = new PrismaClient();

const run = async () => {
  await Promise.all(
    artistsData.map(async (artist) => {
      return prisma.artist.upsert({
        where: { name: artist.name },
        update: {},
        create: {
          name: artist.name,
          songs: {
            create: artist.songs.map((song) => ({
              title: song.name,
              duration: song.duration,
              url: song.url,
            })),
          },
        },
      });
    })
  );
  const salt = await bcrypt.genSalt(10);
  const user = await prisma.user.upsert({
    where: { email: "test@example.com}" },
    update: {},
    create: {
      email: "test@example.com",
      name: "Test User",
      password: await bcrypt.hashSync("password", salt),
    },
  });
  const songs = await prisma.song.findMany({});
  await Promise.all(
    new Array(10).fill(0).map(async (_, i) => {
      return prisma.playlist.create({
        data: {
          name: `Playlist ${i + 1}`,
          user: {
            connect: { id: user.id },
          },
          songs: {
            connect: songs.map((song) => ({
              id: song.id,
            })),
          },
        },
      });
    })
  );
};

run()
  .catch((e) => {
    // eslint-disable-next-line no-console
    console.error("Error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
