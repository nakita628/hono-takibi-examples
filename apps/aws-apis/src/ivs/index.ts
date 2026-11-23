import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTagsResourceArnTagKeysRoute,
  getTagsResourceArnRoute,
  postBatchGetChannelRoute,
  postBatchGetStreamKeyRoute,
  postCreateChannelRoute,
  postCreateRecordingConfigurationRoute,
  postCreateStreamKeyRoute,
  postDeleteChannelRoute,
  postDeletePlaybackKeyPairRoute,
  postDeleteRecordingConfigurationRoute,
  postDeleteStreamKeyRoute,
  postGetChannelRoute,
  postGetPlaybackKeyPairRoute,
  postGetRecordingConfigurationRoute,
  postGetStreamKeyRoute,
  postGetStreamRoute,
  postGetStreamSessionRoute,
  postImportPlaybackKeyPairRoute,
  postListChannelsRoute,
  postListPlaybackKeyPairsRoute,
  postListRecordingConfigurationsRoute,
  postListStreamKeysRoute,
  postListStreamSessionsRoute,
  postListStreamsRoute,
  postPutMetadataRoute,
  postStopStreamRoute,
  postTagsResourceArnRoute,
  postUpdateChannelRoute,
} from './routes'
import {
  deleteTagsResourceArnTagKeysRouteHandler,
  getTagsResourceArnRouteHandler,
  postBatchGetChannelRouteHandler,
  postBatchGetStreamKeyRouteHandler,
  postCreateChannelRouteHandler,
  postCreateRecordingConfigurationRouteHandler,
  postCreateStreamKeyRouteHandler,
  postDeleteChannelRouteHandler,
  postDeletePlaybackKeyPairRouteHandler,
  postDeleteRecordingConfigurationRouteHandler,
  postDeleteStreamKeyRouteHandler,
  postGetChannelRouteHandler,
  postGetPlaybackKeyPairRouteHandler,
  postGetRecordingConfigurationRouteHandler,
  postGetStreamKeyRouteHandler,
  postGetStreamRouteHandler,
  postGetStreamSessionRouteHandler,
  postImportPlaybackKeyPairRouteHandler,
  postListChannelsRouteHandler,
  postListPlaybackKeyPairsRouteHandler,
  postListRecordingConfigurationsRouteHandler,
  postListStreamKeysRouteHandler,
  postListStreamSessionsRouteHandler,
  postListStreamsRouteHandler,
  postPutMetadataRouteHandler,
  postStopStreamRouteHandler,
  postTagsResourceArnRouteHandler,
  postUpdateChannelRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postBatchGetChannelRoute, postBatchGetChannelRouteHandler)
  .openapi(postBatchGetStreamKeyRoute, postBatchGetStreamKeyRouteHandler)
  .openapi(postCreateChannelRoute, postCreateChannelRouteHandler)
  .openapi(postCreateRecordingConfigurationRoute, postCreateRecordingConfigurationRouteHandler)
  .openapi(postCreateStreamKeyRoute, postCreateStreamKeyRouteHandler)
  .openapi(postDeleteChannelRoute, postDeleteChannelRouteHandler)
  .openapi(postDeletePlaybackKeyPairRoute, postDeletePlaybackKeyPairRouteHandler)
  .openapi(postDeleteRecordingConfigurationRoute, postDeleteRecordingConfigurationRouteHandler)
  .openapi(postDeleteStreamKeyRoute, postDeleteStreamKeyRouteHandler)
  .openapi(postGetChannelRoute, postGetChannelRouteHandler)
  .openapi(postGetPlaybackKeyPairRoute, postGetPlaybackKeyPairRouteHandler)
  .openapi(postGetRecordingConfigurationRoute, postGetRecordingConfigurationRouteHandler)
  .openapi(postGetStreamRoute, postGetStreamRouteHandler)
  .openapi(postGetStreamKeyRoute, postGetStreamKeyRouteHandler)
  .openapi(postGetStreamSessionRoute, postGetStreamSessionRouteHandler)
  .openapi(postImportPlaybackKeyPairRoute, postImportPlaybackKeyPairRouteHandler)
  .openapi(postListChannelsRoute, postListChannelsRouteHandler)
  .openapi(postListPlaybackKeyPairsRoute, postListPlaybackKeyPairsRouteHandler)
  .openapi(postListRecordingConfigurationsRoute, postListRecordingConfigurationsRouteHandler)
  .openapi(postListStreamKeysRoute, postListStreamKeysRouteHandler)
  .openapi(postListStreamSessionsRoute, postListStreamSessionsRouteHandler)
  .openapi(postListStreamsRoute, postListStreamsRouteHandler)
  .openapi(getTagsResourceArnRoute, getTagsResourceArnRouteHandler)
  .openapi(postTagsResourceArnRoute, postTagsResourceArnRouteHandler)
  .openapi(postPutMetadataRoute, postPutMetadataRouteHandler)
  .openapi(postStopStreamRoute, postStopStreamRouteHandler)
  .openapi(deleteTagsResourceArnTagKeysRoute, deleteTagsResourceArnTagKeysRouteHandler)
  .openapi(postUpdateChannelRoute, postUpdateChannelRouteHandler)

export default app
