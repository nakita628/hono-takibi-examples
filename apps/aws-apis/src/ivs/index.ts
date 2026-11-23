import { OpenAPIHono } from '@hono/zod-openapi'
import {
  batchGetChannelHandler,
  batchGetStreamKeyHandler,
  createChannelHandler,
  createRecordingConfigurationHandler,
  createStreamKeyHandler,
  deleteChannelHandler,
  deletePlaybackKeyPairHandler,
  deleteRecordingConfigurationHandler,
  deleteStreamKeyHandler,
  getChannelHandler,
  getPlaybackKeyPairHandler,
  getRecordingConfigurationHandler,
  getStreamHandler,
  getStreamKeyHandler,
  getStreamSessionHandler,
  importPlaybackKeyPairHandler,
  listChannelsHandler,
  listPlaybackKeyPairsHandler,
  listRecordingConfigurationsHandler,
  listStreamKeysHandler,
  listStreamSessionsHandler,
  listStreamsHandler,
  putMetadataHandler,
  stopStreamHandler,
  tagsHandler,
  updateChannelHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', batchGetChannelHandler)
  .route('/', batchGetStreamKeyHandler)
  .route('/', createChannelHandler)
  .route('/', createRecordingConfigurationHandler)
  .route('/', createStreamKeyHandler)
  .route('/', deleteChannelHandler)
  .route('/', deletePlaybackKeyPairHandler)
  .route('/', deleteRecordingConfigurationHandler)
  .route('/', deleteStreamKeyHandler)
  .route('/', getChannelHandler)
  .route('/', getPlaybackKeyPairHandler)
  .route('/', getRecordingConfigurationHandler)
  .route('/', getStreamHandler)
  .route('/', getStreamKeyHandler)
  .route('/', getStreamSessionHandler)
  .route('/', importPlaybackKeyPairHandler)
  .route('/', listChannelsHandler)
  .route('/', listPlaybackKeyPairsHandler)
  .route('/', listRecordingConfigurationsHandler)
  .route('/', listStreamKeysHandler)
  .route('/', listStreamSessionsHandler)
  .route('/', listStreamsHandler)
  .route('/', tagsHandler)
  .route('/', putMetadataHandler)
  .route('/', stopStreamHandler)
  .route('/', updateChannelHandler)

export default app
