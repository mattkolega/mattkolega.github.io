import lume from "lume/mod.ts";
import googleFonts from "lume/plugins/google_fonts.ts";
import jsx from "lume/plugins/jsx.ts";
import lightningCss from "lume/plugins/lightningcss.ts";
import mdx from "lume/plugins/mdx.ts";

const site = lume({
    src: "./site",
    dest: "./output",
});

// Plugins
site.use(googleFonts({
    fonts: "https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&family=Ubuntu+Mono:wght@400;700&display=swap"
}));
site.use(jsx());
site.use(lightningCss());
site.use(mdx());

site.copy("assets/scripts");

export default site;