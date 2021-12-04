import React from "react";
import { useState } from "react";
import emailjs from 'emailjs-com';


function Contact() {
   const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] =useState("");


  const submit = () => {
    if (name && email && message) {
      const serviceId = 'service_nje4dse';
      const templateId = 'template_e5bdjg9';
      const userId = 'user_X7haSbu0YLZflZIkW6jL6';
      const templateParams = {
          name,
          email,
          message
      };

      emailjs.send(serviceId, templateId, templateParams, userId)
          .then(response => console.log(response))
          .then(error => console.log(error));
          alert("Message sent!")

        setName('');
        setEmail('');
        setMessage('');
        (true);
    } else {
        alert('Please fill in all fields.');
    }
}

const isValidEmail = email => {
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
};


  return (
    <section id="contact" className="bg-purple-700">
      <div className="container py-10 mx-auto flex sm:flex-nowrap">
        <form
        
          name="contact"
          className="flex mx-auto flex-col md:ml-auto md:py-8 mt-8 md:mt-0"
        >
          <h2 className="text-white flex justify-center sm:text-4xl text-3xl m-4 font-medium title-font">
            GET IN TOUCH !
          </h2>
          <p className="leading-relaxed mb-5 text-lg font-Fira text-white">
            Whether to just say hello or talk about work feel free to reach out
            to me
          </p>

          <div className="px-5">
            <div className="relative mb-4">
              <label
                htmlFor="name"
                className="leading-7 text-lg text-white"
              >
                NAME
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value = {name}
                className="w-full bg-purple-300 rounded border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-900 text-base outline-none font-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-lg text-white"
              >
                EMAIL
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value = {email}
                className="w-full bg-purple-300 rounded border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none font-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-lg text-white"
              >
                MESSAGE
              </label>
              <textarea
                id="message"
                name="message"
                value = {message}
                className="w-full mx-auto bg-purple-300  rounded border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none font-gray-900 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </div>
          <button
            type="submit"
            onClick = {submit}
            className="w-96 mx-auto text-black bg-purple-300 border-0 py-2 focus:outline-none hover:bg-purple-500 rounded text-lg transition ease-in-out duration-500 hover:text-white"
          >
            SEND
          </button>
          
        </form>
      </div> 

      </section>
  );
}

export default Contact;
