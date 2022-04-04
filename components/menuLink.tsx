import React from "react";
import NextLink from "next/link";
import { ListItem, ListIcon, LinkBox, LinkOverlay } from "@chakra-ui/react";

interface props {
  name: string;
  icon?: any;
  route: string;
}

const MenuLink: React.FC<props> = ({ name, icon, route }) => {
  return (
    <ListItem key={name} paddingX="5px" fontSize="16px">
      <LinkBox>
        <NextLink href={route} passHref>
          <LinkOverlay>
            {icon && <ListIcon as={icon} color="white" marginRight="20px" />}
            {name}
          </LinkOverlay>
        </NextLink>
      </LinkBox>
    </ListItem>
  );
};

export default MenuLink;
