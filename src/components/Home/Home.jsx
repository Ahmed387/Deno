import Ourbranches from "../Ourbranches/Ourbranches";
import Ourservice from "../Ourservice/Ourservice";
import Teamslider from "../Sliders/Teamslider/Teamslider";
import Mainslider from "../Sliders/Mainslider/Mainslider";
import Reservation from "../Reservation/Reservation";
import Cases from "../Cases/Cases";
import ContactUs from "../ContactUs/ContactUs";

export default function Home() {
  return (
    <>
      <Mainslider />
      <div className="container mx-auto">
        <Ourservice />
        <Reservation />
        <Teamslider />
        <Ourbranches />
        <Cases />
        <ContactUs />
      </div>
    </>
  );
}
