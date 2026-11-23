import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getResourcesCampaignsIdJsonRoute,
  getResourcesCampaignsIdMediaJsonRoute,
  getResourcesCampaignsIdSyndicateFormatRoute,
  getResourcesCampaignsJsonRoute,
  getResourcesLanguagesIdJsonRoute,
  getResourcesLanguagesJsonRoute,
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
  getResourcesMediaTypesFormatRoute,
  getResourcesSourcesIdJsonRoute,
  getResourcesSourcesIdSyndicateFormatRoute,
  getResourcesSourcesJsonRoute,
  getResourcesTagsFormatRoute,
  getResourcesTagsIdFormatRoute,
  getResourcesTagsIdMediaFormatRoute,
  getResourcesTagsIdRelatedFormatRoute,
  getResourcesTagsIdSyndicateFormatRoute,
  getResourcesTagsTagLanguagesFormatRoute,
  getResourcesTagsTagTypesFormatRoute,
  getResourcesUserMediaListsIdJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const resourcesHandler = app
  .openapi(getResourcesCampaignsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getResourcesCampaignsIdJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getResourcesCampaignsIdMediaJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getResourcesCampaignsIdSyndicateFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getResourcesLanguagesJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getResourcesLanguagesIdJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
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
  .openapi(getResourcesMediaTypesFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getResourcesSourcesJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getResourcesSourcesIdJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getResourcesSourcesIdSyndicateFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getResourcesTagsFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getResourcesTagsTagLanguagesFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getResourcesTagsTagTypesFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getResourcesTagsIdFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getResourcesTagsIdMediaFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getResourcesTagsIdRelatedFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getResourcesTagsIdSyndicateFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getResourcesUserMediaListsIdJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
