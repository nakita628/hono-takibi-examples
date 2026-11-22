import { OpenAPIHono } from '@hono/zod-openapi'
import {
  BatchGetChannelHandler,
  BatchGetStreamKeyHandler,
  CreateChannelHandler,
  CreateRecordingConfigurationHandler,
  CreateStreamKeyHandler,
  DeleteChannelHandler,
  DeletePlaybackKeyPairHandler,
  DeleteRecordingConfigurationHandler,
  DeleteStreamKeyHandler,
  GetChannelHandler,
  GetPlaybackKeyPairHandler,
  GetRecordingConfigurationHandler,
  GetStreamHandler,
  GetStreamKeyHandler,
  GetStreamSessionHandler,
  ImportPlaybackKeyPairHandler,
  ListChannelsHandler,
  ListPlaybackKeyPairsHandler,
  ListRecordingConfigurationsHandler,
  ListStreamKeysHandler,
  ListStreamSessionsHandler,
  ListStreamsHandler,
  PutMetadataHandler,
  StopStreamHandler,
  tagsHandler,
  UpdateChannelHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', BatchGetChannelHandler)
  .route('/', BatchGetStreamKeyHandler)
  .route('/', CreateChannelHandler)
  .route('/', CreateRecordingConfigurationHandler)
  .route('/', CreateStreamKeyHandler)
  .route('/', DeleteChannelHandler)
  .route('/', DeletePlaybackKeyPairHandler)
  .route('/', DeleteRecordingConfigurationHandler)
  .route('/', DeleteStreamKeyHandler)
  .route('/', GetChannelHandler)
  .route('/', GetPlaybackKeyPairHandler)
  .route('/', GetRecordingConfigurationHandler)
  .route('/', GetStreamHandler)
  .route('/', GetStreamKeyHandler)
  .route('/', GetStreamSessionHandler)
  .route('/', ImportPlaybackKeyPairHandler)
  .route('/', ListChannelsHandler)
  .route('/', ListPlaybackKeyPairsHandler)
  .route('/', ListRecordingConfigurationsHandler)
  .route('/', ListStreamKeysHandler)
  .route('/', ListStreamSessionsHandler)
  .route('/', ListStreamsHandler)
  .route('/', tagsHandler)
  .route('/', PutMetadataHandler)
  .route('/', StopStreamHandler)
  .route('/', UpdateChannelHandler)

export default app
