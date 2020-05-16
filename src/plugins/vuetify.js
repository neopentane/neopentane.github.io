import "material-design-icons-iconfont/dist/material-design-icons.css"; // Ensure you are using css-loader
import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true
    },
    icons: {
      iconfont: "md"
    },
    themes: {
      light: {
        primary: "#000000",
        secondary: "#424242",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#c7ddeb",
        success: "#4CAF50",
        warning: "#FFC107"
      }
    }
  }
});
