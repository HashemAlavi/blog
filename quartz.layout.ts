import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"


// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
    Component.Backlinks(),
    Component.Comments({
    provider: 'giscus',
    options: {
      // from data-repo
      repo: 'HashemAlavi/blog',
      // from data-repo-id
      repoId: 'R_kgDOPH3JGw',
      // from data-category
      category: 'Announcements',
      // from data-category-id
      categoryId: 'DIC_kwDOPH3JG84CsouK',
    }
  }),
  ],
  footer: Component.Footer({
    links: {
      "telegram": "https://t.me/Hashem_Alavi"
  }}),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
      Component.Flex({
      components: [
        { Component: Component.Explorer}
        { Component: Component.PageTitle() },
        { Component: Component.DesktopOnly(Component.Spacer),
          grow: true,
        },
        {
          Component: Component.Search(),
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.MobileOnly(Component.Spacer()),
    Component.Explorer(),
  ],
  right: [
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Graph(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [],
}
