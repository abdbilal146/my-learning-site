import { useDisclosure } from "@mantine/hooks";
import classes from "./Header.module.scss";
import { useState } from "react";
import { Burger, Container, Group } from "@mantine/core";
import { useNavigate } from "react-router-dom";

const links = [
  { link: "/", label: "Mes Videos" },
  { link: "/contact", label: "Contact Moi" },
  { link: "/learn", label: "Apprendre" },
];

export default function Header() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const navigate = useNavigate()

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
        navigate(link.link)
      }}
    >
      {link.label}
    </a>
  ));
  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}
