import { Button, TextInput , Textarea} from "@mantine/core";
import { Form } from "react-router-dom";



export default function ContactMe() {
    return (
        <div>
            <h1>Contact Me</h1>
            <Form>
                <TextInput></TextInput>
                <TextInput></TextInput>
                <Textarea></Textarea>
                <Button></Button>
            </Form>
        </div>

        
    )
}