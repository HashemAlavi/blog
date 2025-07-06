import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

// Define Color Palettes
const colorPalettes = {
  chrome: {
    lightMode: {
      light: "#eae9ff",
      lightgray: "#d6d3ff",
      gray: "#1d193d",
      darkgray: "#1d193d",
      dark: "#312d65",
      secondary: "#484390",
      tertiary: "#9a91fe",
      highlight: "#9a91fe26",
      textHighlight: "#9a91fe26",
    },
    darkMode: {
      light: "#0a0919",
      lightgray: "#1d193d",
      gray: "#6b62cb",
      darkgray: "#eae9ff",
      dark: "#d6d3ff",
      secondary: "#c3bdff",
      tertiary: "#6b62cb",
      highlight: "#ada6ff26",
      textHighlight: "#ada6ff26",
    },
  },
}

// Select your desired palette here
// Available palettes: chrome
// type PaletteName = keyof typeof colorPalettes; // This line might cause issues with older TS
const currentPaletteName: keyof typeof colorPalettes = "chrome"

const selectedPalette = colorPalettes[currentPaletteName]

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "بلاگ هاشم",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "fa-IR",
    baseUrl: "hashemalavi.ir",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Vazirmatn",
        body: "Vazirmatn",
        code: "IBM Plex Mono",
      },
      colors: selectedPalette,
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
