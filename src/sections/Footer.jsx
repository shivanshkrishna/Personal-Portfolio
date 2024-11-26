const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <div className="social-icon flex items-center justify-center">
          <a
            href="https://github.com/ShivanshKrishna"
            className="flex items-center justify-center"
          >
            <img
              src="/assets/github.png"
              alt="github"
              className="w-1/2 h-1/2"
            />
          </a>
        </div>

        <div className="social-icon flex items-center justify-center">
          <a
            href="https://www.linkedin.com/in/shivanshkrishna/"
            className="flex items-center justify-center"
          >
            <img
              src="/assets/linkdin.png"
              alt="linkdin"
              className="w-1/2 h-1/2"
            />
          </a>
        </div>

        <div className="social-icon flex items-center justify-center">
          <a
            href="https://www.instagram.com/iamshivanshkrishna/"
            className="flex items-center justify-center"
          >
            <img
              src="/assets/instagram.svg"
              alt="instagram"
              className="w-1/2 h-1/2"
            />
          </a>
        </div>
      </div>

      <p className="text-white-500">
        © 2024 Shivansh Krishna. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
