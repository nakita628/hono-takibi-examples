import { OpenAPIHono } from '@hono/zod-openapi'
import {
  createSignalingChannelHandler,
  createStreamHandler,
  deleteSignalingChannelHandler,
  deleteStreamHandler,
  describeEdgeConfigurationHandler,
  describeImageGenerationConfigurationHandler,
  describeMappedResourceConfigurationHandler,
  describeMediaStorageConfigurationHandler,
  describeNotificationConfigurationHandler,
  describeSignalingChannelHandler,
  describeStreamHandler,
  getDataEndpointHandler,
  getSignalingChannelEndpointHandler,
  listSignalingChannelsHandler,
  listStreamsHandler,
  listTagsForResourceHandler,
  listTagsForStreamHandler,
  startEdgeConfigurationUpdateHandler,
  tagResourceHandler,
  tagStreamHandler,
  untagResourceHandler,
  untagStreamHandler,
  updateDataRetentionHandler,
  updateImageGenerationConfigurationHandler,
  updateMediaStorageConfigurationHandler,
  updateNotificationConfigurationHandler,
  updateSignalingChannelHandler,
  updateStreamHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', createSignalingChannelHandler)
  .route('/', createStreamHandler)
  .route('/', deleteSignalingChannelHandler)
  .route('/', deleteStreamHandler)
  .route('/', describeEdgeConfigurationHandler)
  .route('/', describeImageGenerationConfigurationHandler)
  .route('/', describeMappedResourceConfigurationHandler)
  .route('/', describeMediaStorageConfigurationHandler)
  .route('/', describeNotificationConfigurationHandler)
  .route('/', describeSignalingChannelHandler)
  .route('/', describeStreamHandler)
  .route('/', getDataEndpointHandler)
  .route('/', getSignalingChannelEndpointHandler)
  .route('/', listSignalingChannelsHandler)
  .route('/', listStreamsHandler)
  .route('/', listTagsForResourceHandler)
  .route('/', listTagsForStreamHandler)
  .route('/', startEdgeConfigurationUpdateHandler)
  .route('/', tagResourceHandler)
  .route('/', tagStreamHandler)
  .route('/', untagResourceHandler)
  .route('/', untagStreamHandler)
  .route('/', updateDataRetentionHandler)
  .route('/', updateImageGenerationConfigurationHandler)
  .route('/', updateMediaStorageConfigurationHandler)
  .route('/', updateNotificationConfigurationHandler)
  .route('/', updateSignalingChannelHandler)
  .route('/', updateStreamHandler)

export default app
