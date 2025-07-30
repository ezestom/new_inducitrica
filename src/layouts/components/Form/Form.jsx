import { useState, useEffect } from "react";
import { toast, Toaster } from "sonner";
import "./Form.css";
// import ReCAPTCHA from "react-google-recaptcha";

export function Form({
  name,
  name_placeholder,
  company,
  company_placeholder,
  email,
  email_placeholder,
  phone,
  phone_placeholder,
  message,
  message_placeholder,
  send,
  message_2,
}) {
  const [isLoading, setIsLoading] = useState(false);

  // const captcha = useRef(null);

  useEffect(() => {
    if (isMessageSuccess()) {
      toast("Information successfully submitted! Thank you for your trust.", {
        type: "success",
      });
    }
  }, []); // Agrega las dependencias aquí

  const isMessageSuccess = () => {
    return (
      new URLSearchParams(window.location.search).get("success") === "true"
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    setIsLoading(true);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `Server responded with ${response.status}: ${errorText}`,
        );
      }

      toast("Information successfully submitted! Thank you for your trust.", {
        type: "success",
      });

      setTimeout(() => {
        const isEnglish = window.location.pathname.startsWith("/en");
        const redirectTo = isEnglish ? "/en/home" : "/";

        window.location.href = redirectTo;
        setIsLoading(false);
      }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(
        `There was a problem submitting the form, please try again. (Error: ${error.message})`,
      );
      setIsLoading(false);
    }
  };

  // recaptcha v2 function

  // const onChange = () => {
  //   if (captcha.current.getValue()) {
  //     setIsDisabled(false);
  //   } else {
  //     setIsDisabled(true);
  //   }

  return (
    <div className="relative h-full w-full ">
      <Toaster />
      <form
        onSubmit={handleSubmit}
        method="POST"
        action="https://formsubmit.co/diemaxdecima@gmail.com"
        className="mt-2 mx-2"
      >
        {/* Indicador de carga */}
        {isLoading && (
          <div className="absolute top-0 left-0 right-0 bottom-0 backdrop-blur bg-white/10 opacity-50 flex justify-center items-center z-50 rounded-3xl">
            <span className="loader"></span>
          </div>
        )}

        {/* Campos ocultos necesarios para el backend */}
        <input type="hidden" name="_cc" value="ezequielstom@gmail.com" />
        <input
          type="hidden"
          name="_subject"
          value="🍋 Inducítrica | 📩 Nuevo Mensaje!"
        />
        <input
          type="hidden"
          name="_autoresponse"
          value="¡Gracias por tu mensaje! Nos pondremos en contacto pronto."
        />
        <input type="hidden" name="_captcha" value="false" />

        {/* Campo para Nombre */}
        <div className="col-span-6 mt-2 sm:col-span-3">
          <label
            htmlFor="name"
            className="block text-base font-medium text-gray-700"
          >
            {name}
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder={name_placeholder}
            required
            className="p-2 my-2 w-full rounded-md border-gray-200 bg-white text-base text-gray-700 shadow-sm"
          />
        </div>

        {/* Campo para Compañía */}
        <div className="col-span-6 mt-2 sm:col-span-3">
          <label
            htmlFor="company"
            className="block text-base font-medium text-gray-700"
          >
            {company}
          </label>
          <input
            type="text"
            name="company"
            id="company"
            placeholder={company_placeholder}
            required
            className="p-2 my-2 w-full rounded-md border-gray-200 bg-white text-base text-gray-700 shadow-sm"
          />
        </div>

        {/* Campo para Correo Electrónico */}
        <div className="col-span-6 mt-2 sm:col-span-3">
          <label
            htmlFor="email"
            className="block text-base font-medium text-gray-700"
          >
            {email}
          </label>
          <input
            className="p-2 my-2 w-full rounded-md border-gray-200 bg-white text-base text-gray-700 shadow-sm"
            type="email"
            name="email"
            id="email"
            required
            placeholder={email_placeholder}
          />
        </div>
        {/* Campo para Teléfono */}
        <div className="col-span-6 mt-2 sm:col-span-3">
          <label
            htmlFor="phone"
            className="block text-base font-medium text-gray-700"
          >
            {phone}
          </label>
          <input
            className="p-2 my-2 w-full rounded-md border-gray-200 bg-white text-base text-gray-700 shadow-sm"
            type="phone"
            name="phone"
            id="phone"
            required
            placeholder={phone_placeholder}
          />
        </div>

        {/* Campo para Mensaje */}
        <fieldset className="col-span-6 mt-2">
          <legend className="block  text-base font-medium text-gray-700">
            {message}
          </legend>
          <textarea
            name="message"
            id="message"
            required
            className="w-full border-gray-200 rounded-md bg-white text-base text-gray-700 shadow-sm p-2"
            placeholder={message_placeholder}
          ></textarea>
        </fieldset>

        {/* Botón de Envío */}
        <div className="flex flex-col items-center justify-center col-span-6 mt-2">
          <button
            className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-gradient-to-r bg-primary hover:shadow py-3 font-medium text-md text-gray-50 backdrop-blur-3xl  transition mt-2"
            type="submit"
          >
            {send}
          </button>

          <p className="text-sm text-gray-700 mt-4 text-center">{message_2}</p>
        </div>
      </form>
    </div>
  );
}
