import { Box, Divider, List, ListItem } from "@chakra-ui/react";
import NextImage from "next/image";
import {
  MdFavorite,
  MdHome,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdSearch,
} from "react-icons/md";
import MenuLink from "./menuLink";
import MenuSection from "./menuSection";

const navLinks = [
  { icon: MdHome, name: "Home", route: "/" },
  { icon: MdSearch, name: "Search", route: "/search" },
  { icon: MdLibraryMusic, name: "Library", route: "/library" },
];

const musicMenu = [
  { icon: MdPlaylistAdd, name: "Create Playlist", route: "/" },
  { icon: MdFavorite, name: "Liked Songs", route: "/" },
];

const playlists = new Array(50).fill(1).map((_, i) => `Playlist ${i}`);

const Sidebar = () => {
  return (
    <Box width="100%" height="100%" bg="black" paddingX="10px" color="grey">
      {/* Logo */}
      <Box paddingY="15px">
        <NextImage
          src="/logo.svg"
          height={50}
          width={120}
          alt="Trax Logo - a record player and the word Trax"
        />
      </Box>

      {/* Menu Links */}
      <MenuSection>
        {navLinks.map((link, i) => (
          <MenuLink
            // eslint-disable-next-line react/no-array-index-key
            key={`${link.name}-${i}`}
            name={link.name}
            icon={link.icon}
            route={link.route}
          />
        ))}
      </MenuSection>

      {/* Music Menu */}
      <MenuSection>
        {musicMenu.map((link, i) => (
          <MenuLink
            // eslint-disable-next-line react/no-array-index-key
            key={`${link.name}-${i}`}
            name={link.name}
            icon={link.icon}
            route={link.route}
          />
        ))}
      </MenuSection>

      <Divider color="gray.700" />

      <Box
        marginY="15px"
        height="70%"
        overflowY="auto"
        padding="10px 10px 10px 0"
        css={{
          "&::-webkit-scrollbar": {
            width: "4px",
          },
          "&::-webkit-scrollbar-track": {
            width: "6px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#9e9e9e",
            borderRadius: "24px",
          },
        }}
      >
        {/* Playlists */}
        <MenuSection>
          <List>
            {playlists.map((playlist, i) => (
              <MenuLink
                key={playlist}
                name={playlist}
                route={playlist.split(" ").join("-").toLocaleLowerCase()}
              />
            ))}
          </List>
        </MenuSection>
      </Box>
    </Box>
  );
};

export default Sidebar;
