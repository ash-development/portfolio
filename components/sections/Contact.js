import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Text, Button, Heading } from "@components";
import useCopyToClipboard from "@/hooks/useCopyToClipboard";
import { ArrowRight } from "phosphor-react";
import { Input, TextArea } from "@/components/Field";
import { Sheet, SheetTrigger, SheetContent } from "@/components/Sheet";

const NotSure = () => {
  return (
    <div className="mt-auto mb-4">
      {/* <div className="text-stone">Other places:</div> */}
      <div className="flex gap-x-2">
        <a
          href="https://instagram.com/underscoreashie"
          target="_blank"
          className="border bg-eggshell rounded px-2 py-1.5 shadow-sm transition betterhover:hover:bg-yolk/20 betterhover:hover:border-yolk betterhover:hover:shadow"
        >
          Instagram
        </a>
        <a
          href="mailto:photo@ashie.lol"
          target="_blank"
          className="border bg-eggshell rounded px-2 py-1.5 shadow-sm transition betterhover:hover:bg-yolk/20 betterhover:hover:border-yolk betterhover:hover:shadow"
        >
          Mail
        </a>
      </div>
    </div>
  );
};

const Form = () => {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM);
  const [inputs, setInputs] = useState({
    email: "",
    message: "",
  });

  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  if (state.succeeded) {
    return <p>Thank you! I will get back to you soon.</p>;
  }

  return (
    <div>
      <form
        className="grid w-full grid-flow-row gap-4"
        name="contact"
        onSubmit={handleSubmit}
      >
        <Input
          label="Email Address"
          placeholder="Email Address"
          name="email"
          error={state.errors}
          type="email"
          onChange={handleOnChange}
          value={inputs.email}
          id="email"
          spellCheck={false}
          autoComplete="email"
        />
        <TextArea
          label="Message"
          placeholder="Leave me your thoughts..."
          name="message"
          id="message"
          // error={state.errors}
          value={inputs.message}
          onChange={handleOnChange}
          rows={4}
        />
        <Button
          type="submit"
          disabled={state.submitting}
          className="items-center"
        >
          Send
          <ArrowRight />
        </Button>
      </form>
    </div>
  );
};

const ContactDialog = ({ open, onOpenChange, children, ...props }) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange} {...props}>
      <SheetTrigger>{children}</SheetTrigger>
      <SheetContent open={open}>
        <div className="flex flex-col w-full h-full">
          <Heading className="text-2xl uppercase">Get in touch</Heading>
          <div className="mt-auto">
            <Form />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

const Contact = () => {
  const [value, copy] = useCopyToClipboard("photo@ashie.lol");

  return (
    <>
      <div style={{ height: "85vh", maxHeight: "900px" }}>
        <div className="grid w-full h-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8">
          <div className="flex flex-col px-6 md:px-4 gap-y-6">
            <div className="flex items-center leading-none uppercase gap-x-2">
              <span className="w-2.5 h-2.5 rounded bg-yolk border border-dark -mt-0.5" />
              <h2>Contact</h2>
            </div>
            <Text>
              {`i'd love to chat and possibly work together! feel free to contact me about any inquiries <3 you can email me, or use the form to the right.`}
            </Text>
          </div>
          <div className="pl-6 md:pl-0 lg:place-self-center">
            <div className="text-sm uppercase text-dark/50">
              {value ? "Copied!" : "Click to copy ⬎"}
            </div>
            <Button
              className="sm:py-1.5 text-lg normal-case md:text-2xl"
              onClick={copy}
            >
              photo<span className="hidden">null</span>@ashie.lol
            </Button>
          </div>
          <div className="flex flex-col justify-end col-span-1 p-6 -mt-10 md:pl-4 md:border-l">
            <Form />
          </div>
        </div>
      </div>
    </>
  );
};

export { Contact, ContactDialog };
