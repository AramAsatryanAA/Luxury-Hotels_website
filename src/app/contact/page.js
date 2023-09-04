import ContactTopSection from "@/components/ContactPage/ContactTopSection";
import ContactContentSection from "@/components/ContactPage/ContactContentSection";

export const metadata = {
  title: "Contact Us | Luxury Hotels",
  description:
    "Basic contact details and methods for feedback, as well as a link to open a map with the hotel's location. For your convenience, you can fill out and submit the form with the appropriate name, email and message.",
  keywords: [
    "Hotel",
    "Luxury",
    "Contacts",
    "Address",
    "Map",
    "Phone",
    "Email",
    "Form",
  ],
};

export default function ContactPage() {
  return (
    <>
      <ContactTopSection />
      <ContactContentSection />
    </>
  );
}
