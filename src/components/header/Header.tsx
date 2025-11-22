import { useDisclosure } from "@mantine/hooks";
import classes from "./Header.module.scss";
import { useState } from "react";
import { Burger, Container, Group } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import {motion} from "motion/react"

const links = [
  { link: "/", label: "Mes Videos" },
  { link: "/contact-me", label: "Contactez-Moi" },
  { link: "/learn", label: "Apprendre" },
  /* { link: "/canvas", label: "canvas" }, */
];

const welcomeMessage:string = "Bienvenue sur mon espace d'apprentissage"
const slogan:string = "Apprenez sans limites"

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
      <Container>
        <motion.h1
          className={classes.welcome_message}
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {welcomeMessage}
        </motion.h1>
        <motion.p
          className={classes.slogan}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {slogan}
        </motion.p>
      </Container>
    </header>
  );
}
