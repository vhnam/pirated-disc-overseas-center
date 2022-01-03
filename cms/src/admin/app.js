import AuthLogo from "./extensions/logo.jpg";
import MenuLogo from "./extensions/logo.jpg";
import favicon from "./extensions/favicon.ico";

export default {
  config: {
    auth: {
      logo: AuthLogo,
    },
    head: {
      favicon: favicon,
    },
    menu: {
      logo: MenuLogo,
    },
    notifications: {
      release: false,
    },
    tutorials: false,
    translations: {
      en: {
        "Auth.form.welcome.subtitle": "Login to your Trung Tam account",
      },
    },
  },
  bootstrap(app) {},
};
