import { Card, Text } from "@mantine/core";




export default function ArticleCard(props: any) {
    return (
        <Card>
            <img src={props.image} alt="" />
            <Text>{props.title}</Text>
            <Text>{props.description}</Text>
        </Card>
    )
}




