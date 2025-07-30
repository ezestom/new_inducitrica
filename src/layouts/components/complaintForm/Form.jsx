import { useState, useEffect } from "react";
import { toast, Toaster } from "sonner";
import "./Form.css";
// import ReCAPTCHA from "react-google-recaptcha";

export function Form({
  name,
  name_placeholder,
  direction,
  direction_placeholder,
  email,
  email_placeholder,
  phone,
  phone_placeholder,
  message,
  message_placeholder,
  send,
  message_2,
  point_1,
  point_1_placeholder,
  point_2,
  point_2_placeholder,
  point_3,
  point_3_placeholder,
  point_4,
  point_4_placeholder,
  point_5,
  point_5_placeholder,
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
        action="https://formsubmit.co/compliance@inducitrica.com"
        // action="https://formsubmit.co/ezequielstom@gmail.com"
        className="mt-2 mx-2"
      >
        {/* Indicador de carga */}
        {isLoading && (
          <div className="absolute top-0 left-0 right-0 bottom-0 backdrop-blur bg-white/10 opacity-50 flex justify-center items-center z-50 ">
            <span className="loader"></span>
          </div>
        )}

        {/* Campos ocultos necesarios para el backend */}
        <input type="hidden" name="_cc" value="ezequielstom@gmail.com" />
        <input
          type="hidden"
          name="_subject"
          value="🚨 Denuncia Inducítrica | 📩 Nuevo Mensaje!"
        />
        <input
          type="hidden"
          name="_autoresponse"
          value="¡Gracias por tu denuncia! Nos pondremos en contacto pronto."
        />
        <input type="hidden" name="_captcha" value="false" />

        {/* Campo para Nombre */}
        <div className="col-span-6 mt-2 sm:col-span-3">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            {name}
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder={name_placeholder}
            className="p-2 my-2 w-full border-gray-200 bg-white text-sm text-gray-700 opacity-75 shadow-sm"
          />
        </div>

        {/* Campo para Teléfono */}
        <div className="col-span-6 mt-2 sm:col-span-3">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            {phone}
          </label>
          <input
            className="p-2 my-2 w-full border-gray-200 bg-white text-sm text-gray-700 opacity-75 shadow-sm"
            type="phone"
            name="phone"
            id="phone"
            placeholder={phone_placeholder}
          />
        </div>

        {/* Dirección */}
        <div className="col-span-6 mt-2 sm:col-span-3">
          <label
            htmlFor="direction"
            className="block text-sm font-medium text-gray-700"
          >
            {direction}
          </label>
          <input
            type="text"
            name="direction"
            id="direction"
            placeholder={direction_placeholder}
            className="p-2 my-2 w-full border-gray-200 bg-white text-sm text-gray-700 opacity-75 shadow-sm"
          />
        </div>

        {/* Campo para Correo Electrónico */}
        <div className="col-span-6 mt-2 sm:col-span-3">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            {email}
          </label>
          <input
            className="p-2 my-2 w-full border-gray-200 bg-white text-sm text-gray-700 opacity-75 shadow-sm"
            type="email"
            name="email"
            id="email"
            placeholder={email_placeholder}
          />
        </div>
        <p className="text-sm my-4  font-semibold">
          <span class="text-primary pr-1">*</span>
          {message_2}
        </p>
        {/* Point 1 */}
        <div className="col-span-6 mt-2 sm:col-span-3">
          <label
            htmlFor="point_1"
            className="block text-sm font-medium text-gray-700"
          >
            {point_1}
          </label>
          <input
            type="text"
            name="point_1"
            id="point_1"
            placeholder={point_1_placeholder}
            className="p-2 my-2 w-full border-gray-200 bg-white text-sm text-gray-700 opacity-75 shadow-sm"
          />
        </div>

        {/* Point 2 */}
        <div className="col-span-6 mt-2 sm:col-span-3">
          <label
            htmlFor="point_2"
            className="block text-sm font-medium text-gray-700"
          >
            {point_2}
          </label>
          <input
            type="text"
            name="point_2"
            id="point_2"
            placeholder={point_2_placeholder}
            className="p-2 my-2 w-full border-gray-200 bg-white text-sm text-gray-700 opacity-75 shadow-sm"
          />
        </div>

        {/* Point 3 */}
        <div className="col-span-6 mt-2 sm:col-span-3">
          <label
            htmlFor="point_3"
            className="block text-sm font-medium text-gray-700"
          >
            {point_3}
          </label>
          <input
            type="text"
            name="point_3"
            id="point_3"
            placeholder={point_3_placeholder}
            className="p-2 my-2 w-full border-gray-200 bg-white text-sm text-gray-700 opacity-75 shadow-sm"
          />
        </div>

        {/* Point 4 */}
        <div className="col-span-6 mt-2 sm:col-span-3">
          <label
            htmlFor="point_4"
            className="block text-sm font-medium text-gray-700"
          >
            {point_4}
          </label>
          <input
            type="text"
            name="point_4"
            id="point_4"
            placeholder={point_4_placeholder}
            className="p-2 my-2 w-full border-gray-200 bg-white text-sm text-gray-700 opacity-75 shadow-sm"
          />
        </div>

        {/* Point 5 */}
        <div className="col-span-6 mt-2 sm:col-span-3">
          <label
            htmlFor="point_5"
            className="block text-sm font-medium text-gray-700"
          >
            {point_5}
          </label>
          <input
            type="text"
            name="point_5"
            id="point_5"
            placeholder={point_5_placeholder}
            className="p-2 my-2 w-full border-gray-200 bg-white text-sm text-gray-700 opacity-75 shadow-sm"
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
            className="w-full border-gray-200 bg-white text-sm text-gray-700 shadow-sm p-2"
            placeholder={message_placeholder}
          ></textarea>
        </fieldset>

        {/* Botón de Envío */}
        <div className="flex flex-col items-center justify-center col-span-6 mt-2">
          <button
            className="inline-flex h-full w-full cursor-pointer items-center justify-center bg-gradient-to-r bg-primary hover:shadow py-3 font-medium text-md text-gray-50 backdrop-blur-3xl  transition mt-2"
            type="submit"
          >
            {send}
          </button>
        </div>
      </form>
    </div>
  );
}
