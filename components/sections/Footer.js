
const Footer = () => {
  const footerLinks = [
    {
      href: "https://www.instagram.com/underscoreashie",
      text: "Instagram",
    },
    // {
    //   href: "https://500px.com/typicalmitul",
    //   text: "500px",
    // },
    {
      href: "photo@ashie.lol",
      text: "Mail",
    },
  ];

  const Item = ({ href, text, children }) => (
    <li className="underline underline-offset-2">
      <a
        href={href}
        target="_blank"
        rel="noreferrer noopener"
      >
        {children}
      </a>
    </li>
  );

  return (
    <footer className="flex flex-col px-6 py-6 text-sm border-t md:text-lg border-stone-light md:px-4">
      <ul className="flex gap-x-2">
        {footerLinks.map((link, index) => (
          <Item key={index} href={link.href} text={link.text}>
            {link.text}
          </Item>
        ))}
      </ul>
      <div className="mt-4 text-xs max-w-prose text-stone-blue">
        Source code can be found {" "}
        <a
          href="https://github.com/mitul-s/typicalmitul.com"
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-2"
        >
          here
        </a>
        . All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
