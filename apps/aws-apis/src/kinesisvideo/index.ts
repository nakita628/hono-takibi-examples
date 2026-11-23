import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCreateSignalingChannelRoute,
  postCreateStreamRoute,
  postDeleteSignalingChannelRoute,
  postDeleteStreamRoute,
  postDescribeEdgeConfigurationRoute,
  postDescribeImageGenerationConfigurationRoute,
  postDescribeMappedResourceConfigurationRoute,
  postDescribeMediaStorageConfigurationRoute,
  postDescribeNotificationConfigurationRoute,
  postDescribeSignalingChannelRoute,
  postDescribeStreamRoute,
  postGetDataEndpointRoute,
  postGetSignalingChannelEndpointRoute,
  postListSignalingChannelsRoute,
  postListStreamsRoute,
  postListTagsForResourceRoute,
  postListTagsForStreamRoute,
  postStartEdgeConfigurationUpdateRoute,
  postTagResourceRoute,
  postTagStreamRoute,
  postUntagResourceRoute,
  postUntagStreamRoute,
  postUpdateDataRetentionRoute,
  postUpdateImageGenerationConfigurationRoute,
  postUpdateMediaStorageConfigurationRoute,
  postUpdateNotificationConfigurationRoute,
  postUpdateSignalingChannelRoute,
  postUpdateStreamRoute,
} from './routes'
import {
  postCreateSignalingChannelRouteHandler,
  postCreateStreamRouteHandler,
  postDeleteSignalingChannelRouteHandler,
  postDeleteStreamRouteHandler,
  postDescribeEdgeConfigurationRouteHandler,
  postDescribeImageGenerationConfigurationRouteHandler,
  postDescribeMappedResourceConfigurationRouteHandler,
  postDescribeMediaStorageConfigurationRouteHandler,
  postDescribeNotificationConfigurationRouteHandler,
  postDescribeSignalingChannelRouteHandler,
  postDescribeStreamRouteHandler,
  postGetDataEndpointRouteHandler,
  postGetSignalingChannelEndpointRouteHandler,
  postListSignalingChannelsRouteHandler,
  postListStreamsRouteHandler,
  postListTagsForResourceRouteHandler,
  postListTagsForStreamRouteHandler,
  postStartEdgeConfigurationUpdateRouteHandler,
  postTagResourceRouteHandler,
  postTagStreamRouteHandler,
  postUntagResourceRouteHandler,
  postUntagStreamRouteHandler,
  postUpdateDataRetentionRouteHandler,
  postUpdateImageGenerationConfigurationRouteHandler,
  postUpdateMediaStorageConfigurationRouteHandler,
  postUpdateNotificationConfigurationRouteHandler,
  postUpdateSignalingChannelRouteHandler,
  postUpdateStreamRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postCreateSignalingChannelRoute, postCreateSignalingChannelRouteHandler)
  .openapi(postCreateStreamRoute, postCreateStreamRouteHandler)
  .openapi(postDeleteSignalingChannelRoute, postDeleteSignalingChannelRouteHandler)
  .openapi(postDeleteStreamRoute, postDeleteStreamRouteHandler)
  .openapi(postDescribeEdgeConfigurationRoute, postDescribeEdgeConfigurationRouteHandler)
  .openapi(
    postDescribeImageGenerationConfigurationRoute,
    postDescribeImageGenerationConfigurationRouteHandler,
  )
  .openapi(
    postDescribeMappedResourceConfigurationRoute,
    postDescribeMappedResourceConfigurationRouteHandler,
  )
  .openapi(
    postDescribeMediaStorageConfigurationRoute,
    postDescribeMediaStorageConfigurationRouteHandler,
  )
  .openapi(
    postDescribeNotificationConfigurationRoute,
    postDescribeNotificationConfigurationRouteHandler,
  )
  .openapi(postDescribeSignalingChannelRoute, postDescribeSignalingChannelRouteHandler)
  .openapi(postDescribeStreamRoute, postDescribeStreamRouteHandler)
  .openapi(postGetDataEndpointRoute, postGetDataEndpointRouteHandler)
  .openapi(postGetSignalingChannelEndpointRoute, postGetSignalingChannelEndpointRouteHandler)
  .openapi(postListSignalingChannelsRoute, postListSignalingChannelsRouteHandler)
  .openapi(postListStreamsRoute, postListStreamsRouteHandler)
  .openapi(postListTagsForResourceRoute, postListTagsForResourceRouteHandler)
  .openapi(postListTagsForStreamRoute, postListTagsForStreamRouteHandler)
  .openapi(postStartEdgeConfigurationUpdateRoute, postStartEdgeConfigurationUpdateRouteHandler)
  .openapi(postTagResourceRoute, postTagResourceRouteHandler)
  .openapi(postTagStreamRoute, postTagStreamRouteHandler)
  .openapi(postUntagResourceRoute, postUntagResourceRouteHandler)
  .openapi(postUntagStreamRoute, postUntagStreamRouteHandler)
  .openapi(postUpdateDataRetentionRoute, postUpdateDataRetentionRouteHandler)
  .openapi(
    postUpdateImageGenerationConfigurationRoute,
    postUpdateImageGenerationConfigurationRouteHandler,
  )
  .openapi(
    postUpdateMediaStorageConfigurationRoute,
    postUpdateMediaStorageConfigurationRouteHandler,
  )
  .openapi(
    postUpdateNotificationConfigurationRoute,
    postUpdateNotificationConfigurationRouteHandler,
  )
  .openapi(postUpdateSignalingChannelRoute, postUpdateSignalingChannelRouteHandler)
  .openapi(postUpdateStreamRoute, postUpdateStreamRouteHandler)

export default app
