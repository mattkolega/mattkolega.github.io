import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx.ts";
import lightningCss from "lume/plugins/lightningcss.ts";

const site = lume({
    src: "./src",
});

site.use(jsx());
site.use(lightningCss());

export default site;
