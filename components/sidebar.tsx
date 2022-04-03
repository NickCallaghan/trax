import NextImage from "next/image";
import NextLink from "next/link";
import MenuLink from "./menuLink";
import MenuSection from "./menuSection";

import {
  Box,
  List,
  ListItem,
  ListIcon,
  Divider,
  Center,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdFavorite,
  MdPlaylistAdd,
} from "react-icons/md";

const navLinks = [
  { icon: MdHome, name: "Home", route: "/" },
  { icon: MdSearch, name: "Search", route: "/search" },
  { icon: MdLibraryMusic, name: "Library", route: "/library" },
];

const musicMenu = [
  { icon: MdPlaylistAdd, name: "Create Playlist", route: "/" },
  { icon: MdFavorite, name: "Liked Songs", route: "/" },
];

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
        Labore laborum fugiat cupidatat commodo consectetur exercitation.
        Eiusmod dolore aliqua cillum ex aliqua occaecat exercitation. Nisi amet
        enim nulla occaecat. Sint velit proident dolor occaecat id excepteur
        adipisicing aliqua do exercitation. Minim magna ad in ipsum. Labore
        laborum fugiat cupidatat commodo consectetur exercitation. Eiusmod
        dolore aliqua cillum ex aliqua occaecat exercitation. Nisi amet enim
        nulla occaecat. Sint velit proident dolor occaecat id excepteur
        adipisicing aliqua do exercitation. Minim magna ad in ipsum. Labore
        laborum fugiat cupidatat commodo consectetur exercitation. Eiusmod
        dolore aliqua cillum ex aliqua occaecat exercitation. Nisi amet enim
        nulla occaecat. Sint velit proident dolor occaecat id excepteur
        adipisicing aliqua do exercitation. Minim magna ad in ipsum. Labore
        laborum fugiat cupidatat commodo consectetur exercitation. Eiusmod
        dolore aliqua cillum ex aliqua occaecat exercitation. Nisi amet enim
        nulla occaecat. Sint velit proident dolor occaecat id excepteur
        adipisicing aliqua do exercitation. Minim magna ad in ipsum. Labore
        laborum fugiat cupidatat commodo consectetur exercitation. Eiusmod
        dolore aliqua cillum ex aliqua occaecat exercitation. Nisi amet enim
        nulla occaecat. Sint velit proident dolor occaecat id excepteur
        adipisicing aliqua do exercitation. Minim magna ad in ipsum. Labore
        laborum fugiat cupidatat commodo consectetur exercitation. Eiusmod
        dolore aliqua cillum ex aliqua occaecat exercitation. Nisi amet enim
        nulla occaecat. Sint velit proident dolor occaecat id excepteur
        adipisicing aliqua do exercitation. Minim magna ad in ipsum. Labore
        laborum fugiat cupidatat commodo consectetur exercitation. Eiusmod
        dolore aliqua cillum ex aliqua occaecat exercitation. Nisi amet enim
        nulla occaecat. Sint velit proident dolor occaecat id excepteur
        adipisicing aliqua do exercitation. Minim magna ad in ipsum. Labore
        laborum fugiat cupidatat commodo consectetur exercitation. Eiusmod
        dolore aliqua cillum ex aliqua occaecat exercitation. Nisi amet enim
        nulla occaecat. Sint velit proident dolor occaecat id excepteur
        adipisicing aliqua do exercitation. Minim magna ad in ipsum. Labore
        laborum fugiat cupidatat commodo consectetur exercitation. Eiusmod
        dolore aliqua cillum ex aliqua occaecat exercitation. Nisi amet enim
        nulla occaecat. Sint velit proident dolor occaecat id excepteur
        adipisicing aliqua do exercitation. Minim magna ad in ipsum.
      </Box>
    </Box>
  );
};

export default Sidebar;
