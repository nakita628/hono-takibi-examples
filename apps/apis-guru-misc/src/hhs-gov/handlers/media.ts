import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getResourcesMediaFeaturedJsonRoute,
  getResourcesMediaIdContentRoute,
  getResourcesMediaIdEmbedJsonRoute,
  getResourcesMediaIdJsonRoute,
  getResourcesMediaIdPreviewJpgRoute,
  getResourcesMediaIdRelatedMediaFormatRoute,
  getResourcesMediaIdSyndicateFormatRoute,
  getResourcesMediaIdThumbnailJpgRoute,
  getResourcesMediaIdYoutubeMetaDataJsonRoute,
  getResourcesMediaJsonRoute,
  getResourcesMediaMostPopularMediaFormatRoute,
  getResourcesMediaSearchResultsJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mediaHandler = app
  .openapi(getResourcesMediaJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getResourcesMediaFeaturedJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getResourcesMediaMostPopularMediaFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getResourcesMediaSearchResultsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getResourcesMediaIdJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getResourcesMediaIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getResourcesMediaIdEmbedJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getResourcesMediaIdPreviewJpgRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getResourcesMediaIdRelatedMediaFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getResourcesMediaIdSyndicateFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getResourcesMediaIdThumbnailJpgRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getResourcesMediaIdYoutubeMetaDataJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
