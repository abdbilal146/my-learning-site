import { IconBrandInstagram, IconBrandTiktok, IconBrandTwitter, IconBrandX, IconBrandYoutube } from '@tabler/icons-react';
import { ActionIcon, Anchor, Group } from '@mantine/core';
import classes from './Footer.module.scss';
import { useNavigate } from 'react-router-dom';

const links = [
  { link: '#', label: 'Contact' },
  { link: '#', label: 'Privacy' },
  { link: '#', label: 'Blog' },
  { link: '#', label: 'Store' },
  { link: '#', label: 'Careers' },
];

const socialLinks = [
  { link: 'https://x.com/', label: 'X', icon: IconBrandX },
  { link: 'https://youtube.com/bilal_mancer', label: 'Youtube', icon: IconBrandYoutube },
  { link: 'https://instagram.com/bilal_mancer', label: 'Instagram', icon: IconBrandInstagram },
  {link: 'https://tiktok.com/bilal_mancer', label: 'Instagram', icon: IconBrandTiktok },
]

export default function Footer() {
  const navigate = useNavigate()

  function navigateTo(url:string){
    navigate(url)
  }

  const socialLinksItems = socialLinks.map((link) => (
    <ActionIcon onClick={()=>{
      navigateTo(link.link)
    }} size="lg" variant="default" radius="xl">
      <link.icon size={18} stroke={1.5} />
    </ActionIcon>
  ))
  const items = links.map((link) => (

    <Anchor
      c="dimmed"
      key={link.label}
      href={link.link}
      lh={1}
      onClick={(event:any) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <div className={classes.inner}>

        <Group className={classes.links}>{items}</Group>

        <Group gap="xs" justify="flex-end" wrap="nowrap">
          {socialLinksItems}
        </Group>
      </div>
    </div>
  );
}