import { useRef, useState } from "react";
import MyImage from "../assets/20240808144402-Capture_a_confident_and_professional.png";
import emailjs from "@emailjs/browser";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Notification from "../components/Notification"; // Import the Notification component

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [notification, setNotification] = useState({
    visible: false,
    message: "",
    type: "",
  });
  const form = useRef();
  const { ref, inView } = useInView({
    triggerOnce: false, // Ensures the animation triggers only once
    threshold: 0.1,
  });

  const handleClick = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_grwysdb", "template_70lz98g", form.current, {
        publicKey: "pjKHbQEXxgGhZGFZp",
      })
      .then(
        () => {
          setNotification({
            visible: true,
            message: "Message sent successfully!",
            type: "success",
          });
        },
        (error) => {
          setNotification({
            visible: true,
            message: `Failed to send message: ${error.text}`,
            type: "error",
          });
        }
      );
    setEmail("");
    setMessage("");
    setName("");
  };

  const handleNotificationClose = () => {
    setNotification({ ...notification, visible: false });
  };

  return (
    <div className="relative flex  justify-center items-center w-full h-[100vh] bg-inherit xs:p-0 md:px-5 py-5 overflow-hidden">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1 }}
        className="absolute top-0 left-0 right-0 bottom-0 m-auto flex justify-center items-center w-full h-full"
      >
        <div className="xl:max-w-7xl drop-shadow-xl border-3 border-yellow-500 border-black/20 w-full rounded-md flex flex-col md:flex-row justify-between items-stretch xs:px-2 md:px-5 xl:px-5 py-5 bg-[#0c1327] mt-16">
          {/* Notification */}
          {notification.visible && (
            <div className="absolute top-0 left-0 right-0 flex justify-center p-4 bg-transparent">
              <Notification
                message={notification.message}
                type={notification.type}
                onClose={handleNotificationClose}
              />
            </div>
          )}
          <div className="sm:w-[60%] lg:w-[50%] bg-cover bg-center items-center justify-center hidden md:flex bg-[#0c1327]">
            <div className="rounded-full bg-[#0c1327] p-4 flex items-center justify-center">
              <img
                src={MyImage}
                alt="contact"
                className="h-[500px] w-[500px] rounded-full object-cover bg-[#0c1327]"
              />
            </div>
          </div>
          <div className="mx-auto h-full w-full lg:w-1/2 md:p-10 py-5 md:py-0 bg-[#0c1327]">
            <h1 className="text-center text-2xl sm:text-3xl font-semibold text-yellow-500 bg-[#0c1327]">
              Contact Me
            </h1>
            <div className="w-full mt-5 sm:mt-8 bg-[#0c1327]">
              <div className="mx-auto w-full sm:max-w-md md:max-w-lg flex flex-col gap-5 bg-[#0c1327]">
                <form onSubmit={handleClick} ref={form}>
                  <div className="flex flex-col gap-3 space-y-4">
                    <input
                      type="text"
                      value={name}
                      name="name"
                      placeholder="Enter Your Name"
                      onChange={(e) => setName(e.target.value)}
                      className="input input-bordered input-warning border-3 w-full text-black placeholder:text-black/70"
                    />
                    <input
                      type="email"
                      value={email}
                      name="email"
                      placeholder="Enter Your Email"
                      onChange={(e) => setEmail(e.target.value)}
                      className="input input-bordered input-warning border-3 w-full text-black placeholder:text-black/70"
                    />
                    <textarea
                      placeholder="Enter Your Message"
                      value={message}
                      name="message"
                      onChange={(e) => setMessage(e.target.value)}
                      className="input input-bordered input-warning p-3 border-3 w-full text-black placeholder:text-black h-52"
                    />
                  </div>
                  <div className="flex flex-col md:flex-row gap-2 md:gap-4 justify-center items-center pt-3 bg-[#0c1327]">
                    <button className="btn btn-outline btn-warning max-w-[200px]">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactForm;
