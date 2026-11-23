import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiFacebookPostsByUriRoute,
  getApiHomeRoute,
  getApiMinistriesKeyMinisterRoute,
  getApiMinistriesKeyRoute,
  getApiMinistriesRoute,
  getApiNewslettersImagesGuidRoute,
  getApiNewslettersNewsletterKeyEditionsEditionKeyArticlesArticleKeyRoute,
  getApiNewslettersNewsletterKeyEditionsEditionKeyRoute,
  getApiNewslettersNewsletterKeyRoute,
  getApiNewslettersRoute,
  getApiPostsKeyRoute,
  getApiPostsKeysIndexKindIndexKeyRoute,
  getApiPostsKeysReferenceRoute,
  getApiPostsLatestIndexKindIndexKeyRoute,
  getApiPostsLatestMediaUriMediaTypeRoute,
  getApiPostsRoute,
  getApiResourceLinksRoute,
  getApiSectorsKeyRoute,
  getApiSectorsRoute,
  getApiServicesKeyRoute,
  getApiServicesRoute,
  getApiSlidesIdRoute,
  getApiSlidesRoute,
  getApiTagsKeyRoute,
  getApiTagsRoute,
  getApiThemesKeyRoute,
  getApiThemesRoute,
} from './routes'
import {
  getApiFacebookPostsByUriRouteHandler,
  getApiHomeRouteHandler,
  getApiMinistriesKeyMinisterRouteHandler,
  getApiMinistriesKeyRouteHandler,
  getApiMinistriesRouteHandler,
  getApiNewslettersImagesGuidRouteHandler,
  getApiNewslettersNewsletterKeyEditionsEditionKeyArticlesArticleKeyRouteHandler,
  getApiNewslettersNewsletterKeyEditionsEditionKeyRouteHandler,
  getApiNewslettersNewsletterKeyRouteHandler,
  getApiNewslettersRouteHandler,
  getApiPostsKeyRouteHandler,
  getApiPostsKeysIndexKindIndexKeyRouteHandler,
  getApiPostsKeysReferenceRouteHandler,
  getApiPostsLatestIndexKindIndexKeyRouteHandler,
  getApiPostsLatestMediaUriMediaTypeRouteHandler,
  getApiPostsRouteHandler,
  getApiResourceLinksRouteHandler,
  getApiSectorsKeyRouteHandler,
  getApiSectorsRouteHandler,
  getApiServicesKeyRouteHandler,
  getApiServicesRouteHandler,
  getApiSlidesIdRouteHandler,
  getApiSlidesRouteHandler,
  getApiTagsKeyRouteHandler,
  getApiTagsRouteHandler,
  getApiThemesKeyRouteHandler,
  getApiThemesRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApiFacebookPostsByUriRoute, getApiFacebookPostsByUriRouteHandler)
  .openapi(getApiHomeRoute, getApiHomeRouteHandler)
  .openapi(getApiMinistriesRoute, getApiMinistriesRouteHandler)
  .openapi(getApiMinistriesKeyRoute, getApiMinistriesKeyRouteHandler)
  .openapi(getApiMinistriesKeyMinisterRoute, getApiMinistriesKeyMinisterRouteHandler)
  .openapi(getApiNewslettersRoute, getApiNewslettersRouteHandler)
  .openapi(getApiNewslettersImagesGuidRoute, getApiNewslettersImagesGuidRouteHandler)
  .openapi(getApiNewslettersNewsletterKeyRoute, getApiNewslettersNewsletterKeyRouteHandler)
  .openapi(
    getApiNewslettersNewsletterKeyEditionsEditionKeyRoute,
    getApiNewslettersNewsletterKeyEditionsEditionKeyRouteHandler,
  )
  .openapi(
    getApiNewslettersNewsletterKeyEditionsEditionKeyArticlesArticleKeyRoute,
    getApiNewslettersNewsletterKeyEditionsEditionKeyArticlesArticleKeyRouteHandler,
  )
  .openapi(getApiPostsRoute, getApiPostsRouteHandler)
  .openapi(getApiPostsKeysIndexKindIndexKeyRoute, getApiPostsKeysIndexKindIndexKeyRouteHandler)
  .openapi(getApiPostsKeysReferenceRoute, getApiPostsKeysReferenceRouteHandler)
  .openapi(getApiPostsLatestIndexKindIndexKeyRoute, getApiPostsLatestIndexKindIndexKeyRouteHandler)
  .openapi(getApiPostsLatestMediaUriMediaTypeRoute, getApiPostsLatestMediaUriMediaTypeRouteHandler)
  .openapi(getApiPostsKeyRoute, getApiPostsKeyRouteHandler)
  .openapi(getApiResourceLinksRoute, getApiResourceLinksRouteHandler)
  .openapi(getApiSectorsRoute, getApiSectorsRouteHandler)
  .openapi(getApiSectorsKeyRoute, getApiSectorsKeyRouteHandler)
  .openapi(getApiServicesRoute, getApiServicesRouteHandler)
  .openapi(getApiServicesKeyRoute, getApiServicesKeyRouteHandler)
  .openapi(getApiSlidesRoute, getApiSlidesRouteHandler)
  .openapi(getApiSlidesIdRoute, getApiSlidesIdRouteHandler)
  .openapi(getApiTagsRoute, getApiTagsRouteHandler)
  .openapi(getApiTagsKeyRoute, getApiTagsKeyRouteHandler)
  .openapi(getApiThemesRoute, getApiThemesRouteHandler)
  .openapi(getApiThemesKeyRoute, getApiThemesKeyRouteHandler)

export default app
