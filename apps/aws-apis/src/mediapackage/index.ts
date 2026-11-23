import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteChannelsIdRoute,
  deleteOriginEndpointsIdRoute,
  deleteTagsResourceArnTagKeysRoute,
  getChannelsIdRoute,
  getChannelsRoute,
  getHarvestJobsIdRoute,
  getHarvestJobsRoute,
  getOriginEndpointsIdRoute,
  getOriginEndpointsRoute,
  getTagsResourceArnRoute,
  postChannelsRoute,
  postHarvestJobsRoute,
  postOriginEndpointsRoute,
  postTagsResourceArnRoute,
  putChannelsIdConfigureLogsRoute,
  putChannelsIdCredentialsRoute,
  putChannelsIdIngestEndpointsIngestEndpointIdCredentialsRoute,
  putChannelsIdRoute,
  putOriginEndpointsIdRoute,
} from './routes'
import {
  deleteChannelsIdRouteHandler,
  deleteOriginEndpointsIdRouteHandler,
  deleteTagsResourceArnTagKeysRouteHandler,
  getChannelsIdRouteHandler,
  getChannelsRouteHandler,
  getHarvestJobsIdRouteHandler,
  getHarvestJobsRouteHandler,
  getOriginEndpointsIdRouteHandler,
  getOriginEndpointsRouteHandler,
  getTagsResourceArnRouteHandler,
  postChannelsRouteHandler,
  postHarvestJobsRouteHandler,
  postOriginEndpointsRouteHandler,
  postTagsResourceArnRouteHandler,
  putChannelsIdConfigureLogsRouteHandler,
  putChannelsIdCredentialsRouteHandler,
  putChannelsIdIngestEndpointsIngestEndpointIdCredentialsRouteHandler,
  putChannelsIdRouteHandler,
  putOriginEndpointsIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(putChannelsIdConfigureLogsRoute, putChannelsIdConfigureLogsRouteHandler)
  .openapi(postChannelsRoute, postChannelsRouteHandler)
  .openapi(getChannelsRoute, getChannelsRouteHandler)
  .openapi(postHarvestJobsRoute, postHarvestJobsRouteHandler)
  .openapi(getHarvestJobsRoute, getHarvestJobsRouteHandler)
  .openapi(postOriginEndpointsRoute, postOriginEndpointsRouteHandler)
  .openapi(getOriginEndpointsRoute, getOriginEndpointsRouteHandler)
  .openapi(deleteChannelsIdRoute, deleteChannelsIdRouteHandler)
  .openapi(getChannelsIdRoute, getChannelsIdRouteHandler)
  .openapi(putChannelsIdRoute, putChannelsIdRouteHandler)
  .openapi(deleteOriginEndpointsIdRoute, deleteOriginEndpointsIdRouteHandler)
  .openapi(getOriginEndpointsIdRoute, getOriginEndpointsIdRouteHandler)
  .openapi(putOriginEndpointsIdRoute, putOriginEndpointsIdRouteHandler)
  .openapi(getHarvestJobsIdRoute, getHarvestJobsIdRouteHandler)
  .openapi(getTagsResourceArnRoute, getTagsResourceArnRouteHandler)
  .openapi(postTagsResourceArnRoute, postTagsResourceArnRouteHandler)
  .openapi(putChannelsIdCredentialsRoute, putChannelsIdCredentialsRouteHandler)
  .openapi(
    putChannelsIdIngestEndpointsIngestEndpointIdCredentialsRoute,
    putChannelsIdIngestEndpointsIngestEndpointIdCredentialsRouteHandler,
  )
  .openapi(deleteTagsResourceArnTagKeysRoute, deleteTagsResourceArnTagKeysRouteHandler)

export default app
