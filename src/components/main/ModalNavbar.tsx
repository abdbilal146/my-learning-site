import { useState } from "react";
import classes from "./MainContent.module.scss"
import { Group, Code, Button } from "@mantine/core";
import { IconSwitchHorizontal, IconLogout, IconVideo } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";


export default function ModalNavbar({data,onSendToParent,selectedSerieName}:any) {
  const [active, setActive] = useState("Billing");

  /* const navigate = useNavigate() */

  const links = data.map((item:any) => (
    <a
      className={classes.link}
      data-active={item.title === active || undefined}
      /* href={item.link} */
      
      key={item.title}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.title);
        onSendToParent(item)
      }}
    >
      <IconVideo className={classes.linkIcon} stroke={1.5} />
      <span>{item.title}</span>
    </a>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Group className={classes.header} justify="space-between">
          <Code fw={700} className={classes.version}>
            {selectedSerieName}
          </Code>
        </Group>
        {links}
      </div>

      {/* <div className={classes.footer}>
        <a
          href="#"
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
          <span>Change account</span>
        </a>

        <a
          href="#"
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>
      </div> */}
    </nav>
  );
}