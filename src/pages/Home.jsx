import css from "./Home.module.css";

const Home = () => {
  return (
    <div className={css.home_container}>
      <h1 className={css.home_title}>Welcome to Contacts Manager!</h1>
      <p className={css.home_description}>
        Contacts Manager is an intuitive application that empowers you to create
        an account and conveniently organize your contacts in one secure place.
        With Contacts Manager, you can effortlessly add, edit, and delete
        contacts, ensuring that your address book remains up-to-date and
        accessible whenever you need it.
      </p>
      <h2 className={css.feature_title}>Key Features:</h2>
      <ul className={css.feature_list}>
        <li>
          User-Friendly Interface: Navigate through Contacts Manager with ease,
          thanks to its intuitive design and streamlined user experience.
        </li>
        <li>
          Secure Account Creation: Create your account securely to safeguard
          your contact information.
        </li>
        <li>
          Effortless Contact Management: Add new contacts, or delete entries
          with just a few clicks.
        </li>
        <li>
          Search and Filter: Quickly find the contacts you need by utilizing
          powerful search and filter functionalities.
        </li>
        <li>
          Responsive Design: Access Contacts Manager on any device, whether it
          your desktop, tablet, or smartphone.
        </li>
        <li>
          Data Encryption: Rest assured knowing that your contact data is
          encrypted and protected to ensure confidentiality and privacy.
        </li>
      </ul>
      <p className={css.get_started}>
        Get Started Today!
        <br />
        Join Contacts Manager now and take control of your contacts like never
        before. Sign up for free and start organizing your contacts
        effortlessly!
      </p>
    </div>
  );
};

export default Home;
