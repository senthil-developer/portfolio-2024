"use client";

import EarthCanva from "@/components/EarthCanva";
import toast from "react-hot-toast";
import { sendMail } from "@/server/email";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserFormValues, userSchema } from "@/schema/userSchema";

const ContactPage = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<UserFormValues>({
    defaultValues: { name: "", email: "", message: "" },
    resolver: zodResolver(userSchema),
  });

  const onSubmit = async (data: UserFormValues) => {
    try {
      await sendMail(data);
      toast.success("Message sent successfully!");
    } catch (error) {
      toast.error("Failed to send message");
    }
  };

  return (
    <div className="flex h-full w-full items-center justify-center overflow-y-hidden pt-0">
      <div className="flex h-screen w-full items-center justify-center px-4 pt-8">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="glass-blur relative flex w-full max-w-[600px] flex-col rounded-2xl p-2 after:rounded-inherit"
        >
          <div className="pt-8">
            <h1 className="group flex w-fit flex-col rounded-md text-2xl hover:transition-all hover:duration-300">
              Contact
              <span className="w-[20%] rounded-md border-b-4 border-green-400 duration-300 group-hover:w-[80%] group-hover:transition-all group-hover:duration-300" />
            </h1>

            <p className="py-4 text-lg">
              Submit the form below or shoot me{" "}
              <a
                className="inline-block bg-gradient-to-r from-[#D9AFD9] from-10% to-[#97D9E1] to-100% bg-clip-text font-bold text-transparent"
                href="mailto:senthildeveloper4@gmail.com"
              >
                E-mail
              </a>
            </p>
          </div>
          <input
            {...register("name")}
            className="bg-[rgba(255,255,255,0.1)] p-2"
            placeholder="Name"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}

          <input
            {...register("email")}
            className="my-4 bg-[rgba(255,255,255,0.1)] p-2"
            placeholder="E-mail"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}

          <textarea
            {...register("message")}
            placeholder="Message"
            className="min-h-20 bg-[rgba(255,255,255,0.1)] p-2"
            rows={10}
          ></textarea>
          {errors.message && (
            <p className="text-red-500">{errors.message.message}</p>
          )}

          <SubmitBtn isSubmitting={isSubmitting} />
        </form>
      </div>
      <div className="absolute inset-0 -z-10 h-full w-[100%]">
        <EarthCanva />
      </div>
    </div>
  );
};

export default ContactPage;

const SubmitBtn = ({ isSubmitting }: { isSubmitting: boolean }) => {
  return (
    <button
      className="w-30 mx-auto my-8 rounded-full bg-green-300 p-2 px-4 text-black hover:bg-green-400/50 hover:transition-all hover:duration-300"
      disabled={isSubmitting}
    >
      {isSubmitting ? "Sending..." : "Contact me"}
    </button>
  );
};
