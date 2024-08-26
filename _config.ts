import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx.ts";
import lightningCss from "lume/plugins/lightningcss.ts";
import mdx from "lume/plugins/mdx.ts";

const site = lume({
    src: "./site",
    dest: "./output",
});

// Plugins
site.use(jsx());
site.use(lightningCss());
site.use(mdx());

site.copy("assets/fonts");
site.copy("assets/scripts");

export default site;