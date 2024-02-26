import { FaPhone } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
const ContactUs = () => {
  // 1. Define your form.
  // const form = useForm<z.infer<typeof formSchema>>({
  //   resolver: zodResolver(formSchema),
  //   defaultValues: {
  //     username: "",
  //   },
  // });

  // // 2. Define a submit handler.
  // function onSubmit(values: z.infer<typeof formSchema>) {
  //   // Do something with the form values.
  //   // ✅ This will be type-safe and validated.
  //   console.log(values);
  // }
  return (
    <section>
      <div className="flex justify-center items-center py-[100px] min-h-screen gap-[32px]">
        <div className=" rounded-md bg-slate-900 pb-[32px]">
          <div
            className="w-[450px] h-[250px] relative mb-[32px]"
            style={{ backgroundImage: `url('/assets/images/googleMap.jpeg')` }}
          >
            <h4 className="text-[14px] font-sans font-semibold p-[16px]">
              NewEdge
            </h4>
            <div className="h-[76px] w-[40px] bg-slate-400 rounded-md absolute right-2 bottom-1">
              <p className="text-[24px] font-bold font-roboto text-center text-white">
                +
              </p>
              <p className="text-[24px] font-bold font-roboto text-center text-white">
                -
              </p>
            </div>
          </div>
          <div className="px-[16px]">
            <h2 className="text-[24px] leading-normal font-roboto font-semibold text-white">
              Location of Newedge
            </h2>
            <p className="text-[14px] font-sans font-normal leading-normal text-[#717171] py-[8px]">
              2nd Floor, City mall, Chubachu, Thimphu, Bhutan
            </p>
            <div className="flex justify-start items-center my-[16px]">
              <div className="flex justify-center items-center w-[46px] h-[46px] bg-slate-200 rounded-full">
                <FaPhone className="w-[24px] h-[24px] " color="#53dbdb" />
                <div></div>
              </div>
              <div className="px-[16px]">
                <h2 className="text-[16px] font-roboto leading-normal  font-sembold text-white">
                  Phone
                </h2>
                <p className="text-[16px] font-sans leading-normal text-[#717171]">
                  +97512345
                </p>
              </div>
            </div>
            <div className="flex justify-start items-center my-[16px]">
              <div className="flex justify-center items-center w-[46px] h-[46px] bg-slate-200 rounded-full">
                <FaGlobe className="w-[24px] h-[24px] " color="#53dbdb" />
              </div>
              <div className="px-[16px]">
                <h2 className="text-[16px] font-roboto leading-normal  font-sembold text-white">
                  Visit us
                </h2>
                <p className="text-[16px] font-sans leading-normal text-[#717171]">
                  www.newedge.bt
                </p>
              </div>
            </div>
            <div className="flex justify-start items-center my-[16px]">
              <div className="flex justify-center items-center w-[46px] h-[46px] bg-slate-200 rounded-full">
                <FaMailBulk className="w-[24px] h-[24px] " color="#53dbdb" />
              </div>
              <div className="px-[16px]">
                <h2 className="text-[16px] font-roboto leading-normal  font-sembold text-white">
                  EMail
                </h2>
                <p className="text-[16px] font-sans leading-normal text-[#717171]">
                  info@newegde.bt
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          {/* === SHADCN FORM, CONTACT-US FORM === */}
          {/* <Form {...form}>
            <div className="sm:w-420 flex-container flex-col">
              <img src="/assets/images/logo.svg" alt="" />

              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-5 w-full mt-4"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Email</FormLabel>
                      <FormControl>
                        <Input type="text" {...field} className="shad-input" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input type="text" {...field} className="shad-input" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="text"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your message</FormLabel>
                      <FormControl>
                        <Textarea
                          type="text"
                          {...field}
                          className="shad-input min-h-[250px]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex justify-center items-center ">
                  <Button
                    type="submit"
                    className="shad-button_primary max-md:w-full"
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </Form> */}
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
