import FormGroup from "./FormGroup";

const fields = [
  {
    name: "name",
    type: "text",
    placeholder: "Enter your full name",
    error: "name-error",
  },
  {
    name: "email",
    type: "email",
    placeholder: "Enter your email",
    error: "email-error",
  },
  {
    name: "subject",
    type: "text",
    placeholder: "Subject",
    error: "subject-error",
  },
  {
    name: "message",
    type: "textarea",
    placeholder: "Enter your message",
    error: "message-error",
  },
];

function Contact() {
  return (
    <section className="contact" id="contact">
      <h1 className="section-title text-center">Contact Me</h1>
      <div className="container" id="containerForms">
        <form id="contactForm">
          {fields.map((field) => (
            <FormGroup key={field.name} formlabel={field} />
          ))}
          <button
            type="submit"
            className="btn btn-primary contactFormBtn"
            style={{ borderColor: "var(--primary-color)" }}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
