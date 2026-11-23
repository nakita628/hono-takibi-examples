import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getResourcesCampaignsIdJsonRoute,
  getResourcesCampaignsIdMediaJsonRoute,
  getResourcesCampaignsIdSyndicateFormatRoute,
  getResourcesCampaignsJsonRoute,
  getResourcesJsonRoute,
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
} from './routes'
import {
  getResourcesCampaignsIdJsonRouteHandler,
  getResourcesCampaignsIdMediaJsonRouteHandler,
  getResourcesCampaignsIdSyndicateFormatRouteHandler,
  getResourcesCampaignsJsonRouteHandler,
  getResourcesJsonRouteHandler,
  getResourcesLanguagesIdJsonRouteHandler,
  getResourcesLanguagesJsonRouteHandler,
  getResourcesMediaFeaturedJsonRouteHandler,
  getResourcesMediaIdContentRouteHandler,
  getResourcesMediaIdEmbedJsonRouteHandler,
  getResourcesMediaIdJsonRouteHandler,
  getResourcesMediaIdPreviewJpgRouteHandler,
  getResourcesMediaIdRelatedMediaFormatRouteHandler,
  getResourcesMediaIdSyndicateFormatRouteHandler,
  getResourcesMediaIdThumbnailJpgRouteHandler,
  getResourcesMediaIdYoutubeMetaDataJsonRouteHandler,
  getResourcesMediaJsonRouteHandler,
  getResourcesMediaMostPopularMediaFormatRouteHandler,
  getResourcesMediaSearchResultsJsonRouteHandler,
  getResourcesMediaTypesFormatRouteHandler,
  getResourcesSourcesIdJsonRouteHandler,
  getResourcesSourcesIdSyndicateFormatRouteHandler,
  getResourcesSourcesJsonRouteHandler,
  getResourcesTagsFormatRouteHandler,
  getResourcesTagsIdFormatRouteHandler,
  getResourcesTagsIdMediaFormatRouteHandler,
  getResourcesTagsIdRelatedFormatRouteHandler,
  getResourcesTagsIdSyndicateFormatRouteHandler,
  getResourcesTagsTagLanguagesFormatRouteHandler,
  getResourcesTagsTagTypesFormatRouteHandler,
  getResourcesUserMediaListsIdJsonRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getResourcesJsonRoute, getResourcesJsonRouteHandler)
  .openapi(getResourcesCampaignsJsonRoute, getResourcesCampaignsJsonRouteHandler)
  .openapi(getResourcesCampaignsIdJsonRoute, getResourcesCampaignsIdJsonRouteHandler)
  .openapi(getResourcesCampaignsIdMediaJsonRoute, getResourcesCampaignsIdMediaJsonRouteHandler)
  .openapi(
    getResourcesCampaignsIdSyndicateFormatRoute,
    getResourcesCampaignsIdSyndicateFormatRouteHandler,
  )
  .openapi(getResourcesLanguagesJsonRoute, getResourcesLanguagesJsonRouteHandler)
  .openapi(getResourcesLanguagesIdJsonRoute, getResourcesLanguagesIdJsonRouteHandler)
  .openapi(getResourcesMediaJsonRoute, getResourcesMediaJsonRouteHandler)
  .openapi(getResourcesMediaFeaturedJsonRoute, getResourcesMediaFeaturedJsonRouteHandler)
  .openapi(
    getResourcesMediaMostPopularMediaFormatRoute,
    getResourcesMediaMostPopularMediaFormatRouteHandler,
  )
  .openapi(getResourcesMediaSearchResultsJsonRoute, getResourcesMediaSearchResultsJsonRouteHandler)
  .openapi(getResourcesMediaIdJsonRoute, getResourcesMediaIdJsonRouteHandler)
  .openapi(getResourcesMediaIdContentRoute, getResourcesMediaIdContentRouteHandler)
  .openapi(getResourcesMediaIdEmbedJsonRoute, getResourcesMediaIdEmbedJsonRouteHandler)
  .openapi(getResourcesMediaIdPreviewJpgRoute, getResourcesMediaIdPreviewJpgRouteHandler)
  .openapi(
    getResourcesMediaIdRelatedMediaFormatRoute,
    getResourcesMediaIdRelatedMediaFormatRouteHandler,
  )
  .openapi(getResourcesMediaIdSyndicateFormatRoute, getResourcesMediaIdSyndicateFormatRouteHandler)
  .openapi(getResourcesMediaIdThumbnailJpgRoute, getResourcesMediaIdThumbnailJpgRouteHandler)
  .openapi(
    getResourcesMediaIdYoutubeMetaDataJsonRoute,
    getResourcesMediaIdYoutubeMetaDataJsonRouteHandler,
  )
  .openapi(getResourcesMediaTypesFormatRoute, getResourcesMediaTypesFormatRouteHandler)
  .openapi(getResourcesSourcesJsonRoute, getResourcesSourcesJsonRouteHandler)
  .openapi(getResourcesSourcesIdJsonRoute, getResourcesSourcesIdJsonRouteHandler)
  .openapi(
    getResourcesSourcesIdSyndicateFormatRoute,
    getResourcesSourcesIdSyndicateFormatRouteHandler,
  )
  .openapi(getResourcesTagsFormatRoute, getResourcesTagsFormatRouteHandler)
  .openapi(getResourcesTagsTagLanguagesFormatRoute, getResourcesTagsTagLanguagesFormatRouteHandler)
  .openapi(getResourcesTagsTagTypesFormatRoute, getResourcesTagsTagTypesFormatRouteHandler)
  .openapi(getResourcesTagsIdFormatRoute, getResourcesTagsIdFormatRouteHandler)
  .openapi(getResourcesTagsIdMediaFormatRoute, getResourcesTagsIdMediaFormatRouteHandler)
  .openapi(getResourcesTagsIdRelatedFormatRoute, getResourcesTagsIdRelatedFormatRouteHandler)
  .openapi(getResourcesTagsIdSyndicateFormatRoute, getResourcesTagsIdSyndicateFormatRouteHandler)
  .openapi(getResourcesUserMediaListsIdJsonRoute, getResourcesUserMediaListsIdJsonRouteHandler)

export default app
