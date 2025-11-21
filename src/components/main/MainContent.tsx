import {
  Button,
  Card,
  Container,
  Image,
} from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import classes from "./MainContent.module.scss";
import { Carousel } from "@mantine/carousel";
import { Outlet, useNavigate } from "react-router-dom"; // Import useNavigate

export default function MainContent() {
  const firstSectionTitle: string = "Mes Cours";
  const navigate = useNavigate(); // Initialize hook

  const { data, isLoading, isError } = useQuery({
    queryKey: ['toddo'],
    queryFn: async () => {
      const res = await fetch(import.meta.env.VITE_SANITY_API)
      return res.json()
    }
  })

  if (isLoading) return <div>Loading videos...</div>
  if (isError || !data) return <div>Error loading data</div>

  const series: { imageUrl: string, name: string, sessions: any[] }[] = data.result


  function onClick(sessions: any[], serieName:string) {
    navigate('/courses', { state: { sessions: sessions, serieName: serieName } });
  }

  const videosElements = series.map((serie) => {
    return (
      <VideoCard
        key={serie.name}
        videoBackground={serie.imageUrl}
        videoName={serie.name}
        onClick={() => { onClick(serie.sessions, serie.name) }}
      ></VideoCard>
    );
  });

  return (
    <main>
      <section className={classes.first_section}>
        <h1>{firstSectionTitle}</h1>
        <Container fluid>
          <Carousel
            withIndicators
            slideSize={{ base: "100%", sm: "50%", md: "33.333333%" }}
            slideGap={{ base: 0, sm: "md" }}
            emblaOptions={{ loop: true, align: "start" }}
          >
            {videosElements.map((el) => (
              // Add key here directly to the slide
              <Carousel.Slide key={el.key}>{el}</Carousel.Slide>
            ))}
          </Carousel>
        </Container>
        
        <Outlet />

      </section>
    </main>
  );
}

function VideoCard({
  videoBackground,
  videoName,
  onClick,
}: VideoElementsProps) {
  return (
    <Card w="30rem" p="1rem" shadow="sm" radius="md" withBorder>
      <Card.Section>
        <Image src={videoBackground}></Image>
      </Card.Section>

      <div className={classes.card_title_container}>
        <h3>{videoName}</h3>
      </div>
      <div className={classes.card_btn_container}>
        <Button onClick={onClick}>Regarder</Button>
      </div>
    </Card>
  );
}

interface VideoElementsProps {
  readonly videoBackground: string;
  readonly videoName: string;
  readonly onClick: () => void;
}