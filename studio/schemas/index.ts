import about from "./documents/about";
import home from "./documents/home";
import project from "./documents/project";
import settings from "./documents/settings";
import imageGrid from "./modules/image-grid";
import slideshow from "./modules/slideshow";
import blockContent from "./objects/blockContent";
import image from "./objects/image";
import link from "./objects/link";
import seo from "./objects/seo";

export const schemaTypes = [
  // documents
  home,
  about,
  project,
  settings,

  // objects
  blockContent,
  image,
  link,
  seo,
  imageGrid,

  // modules
  slideshow,
]
