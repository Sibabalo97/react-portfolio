import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {

  const date = new Date();
  const year = date.getFullYear(); // Gets the 4-digit year


  return (
    <footer className="h-64 bg-red pt-10">
      <div className="w-10/12 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center ">
          <p className="font-playfair font-semibold text-2xl text-yellow">
            Sibabalo Maqiyane
          </p>
          <p className="font-playfair text-md text-yellow">
            ©{year} Sibabalo Maqiyane. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
