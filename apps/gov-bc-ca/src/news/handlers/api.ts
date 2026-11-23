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
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApiFacebookPostsByUriRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiHomeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMinistriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMinistriesKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMinistriesKeyMinisterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiNewslettersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiNewslettersImagesGuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiNewslettersNewsletterKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiNewslettersNewsletterKeyEditionsEditionKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiNewslettersNewsletterKeyEditionsEditionKeyArticlesArticleKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPostsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPostsKeysIndexKindIndexKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPostsKeysReferenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPostsLatestIndexKindIndexKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPostsLatestMediaUriMediaTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPostsKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiResourceLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSectorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSectorsKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiServicesKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSlidesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSlidesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTagsKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiThemesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiThemesKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
