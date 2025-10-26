const config = {
  title: "Awais Shahzad | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Awais, a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Coding Ducks, The Booking Desk, Ghostchat, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Awais, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Awais Shahzad",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "Coding Ducks",
    "The Booking Desk",
    "Ghostchat",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Awais Shahzad",
  email: "awaisking1234567890@gmail.com",
  site: "https://sometthing.site",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/nothotchaddi",
    linkedin: "https://www.linkedin.com/in/awaisshahzad1/",
    instagram: "https://www.instagram.com/awaisshhh",
    facebook: "https://www.facebook.com/HotChaddi/",
    github: "https://github.com/codekrunch",
  },
};
export { config };
