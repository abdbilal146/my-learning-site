import { Button, TextInput , Textarea} from "@mantine/core";
import { Form } from "react-router-dom";
import emailjs from '@emailjs/browser'
import { useRef, useState } from "react";
import classes from "./Contact.module.scss"

export default function ContactMe() {
    const form = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);

    const sendEmail = (e:React.FormEvent) =>{
        setLoading(true);
        e.preventDefault();
        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE,
            import.meta.env.VITE_EMAILJS_TEMPLATE,
            form.current!,
            import.meta.env.VITE_EMAILJS_PUBLIC
            
        ).then((result) => {
            console.log(result.text);
            setLoading(false);
        }, (error) => {
            console.log(error.text);
            setLoading(false);
        })

        form.current?.reset();
        
    }
    return (
        <div className={classes.contact_container}>
            <h1>Contact Me</h1>
            <Form className={classes.form} ref={form} onSubmit={sendEmail}>
                <TextInput className={classes.input} required size="md"  placeholder="Nom" name="name" label="Nom"></TextInput>
                <TextInput className={classes.input} required size="md" placeholder="Email" name="email" label="Email"></TextInput>
                <Textarea className={classes.input} required size="md" placeholder="Message" name="message" label="Message"></Textarea>
                <Button loading={loading} type="submit">Envoyer</Button>
            </Form>
        </div>

        
    )
}