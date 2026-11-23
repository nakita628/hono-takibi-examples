import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postXAmzTargetTimestream20181101CancelQueryRoute,
  postXAmzTargetTimestream20181101CreateScheduledQueryRoute,
  postXAmzTargetTimestream20181101DeleteScheduledQueryRoute,
  postXAmzTargetTimestream20181101DescribeEndpointsRoute,
  postXAmzTargetTimestream20181101DescribeScheduledQueryRoute,
  postXAmzTargetTimestream20181101ExecuteScheduledQueryRoute,
  postXAmzTargetTimestream20181101ListScheduledQueriesRoute,
  postXAmzTargetTimestream20181101ListTagsForResourceRoute,
  postXAmzTargetTimestream20181101PrepareQueryRoute,
  postXAmzTargetTimestream20181101QueryRoute,
  postXAmzTargetTimestream20181101TagResourceRoute,
  postXAmzTargetTimestream20181101UntagResourceRoute,
  postXAmzTargetTimestream20181101UpdateScheduledQueryRoute,
} from './routes'
import {
  postXAmzTargetTimestream20181101CancelQueryRouteHandler,
  postXAmzTargetTimestream20181101CreateScheduledQueryRouteHandler,
  postXAmzTargetTimestream20181101DeleteScheduledQueryRouteHandler,
  postXAmzTargetTimestream20181101DescribeEndpointsRouteHandler,
  postXAmzTargetTimestream20181101DescribeScheduledQueryRouteHandler,
  postXAmzTargetTimestream20181101ExecuteScheduledQueryRouteHandler,
  postXAmzTargetTimestream20181101ListScheduledQueriesRouteHandler,
  postXAmzTargetTimestream20181101ListTagsForResourceRouteHandler,
  postXAmzTargetTimestream20181101PrepareQueryRouteHandler,
  postXAmzTargetTimestream20181101QueryRouteHandler,
  postXAmzTargetTimestream20181101TagResourceRouteHandler,
  postXAmzTargetTimestream20181101UntagResourceRouteHandler,
  postXAmzTargetTimestream20181101UpdateScheduledQueryRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postXAmzTargetTimestream20181101CancelQueryRoute,
    postXAmzTargetTimestream20181101CancelQueryRouteHandler,
  )
  .openapi(
    postXAmzTargetTimestream20181101CreateScheduledQueryRoute,
    postXAmzTargetTimestream20181101CreateScheduledQueryRouteHandler,
  )
  .openapi(
    postXAmzTargetTimestream20181101DeleteScheduledQueryRoute,
    postXAmzTargetTimestream20181101DeleteScheduledQueryRouteHandler,
  )
  .openapi(
    postXAmzTargetTimestream20181101DescribeEndpointsRoute,
    postXAmzTargetTimestream20181101DescribeEndpointsRouteHandler,
  )
  .openapi(
    postXAmzTargetTimestream20181101DescribeScheduledQueryRoute,
    postXAmzTargetTimestream20181101DescribeScheduledQueryRouteHandler,
  )
  .openapi(
    postXAmzTargetTimestream20181101ExecuteScheduledQueryRoute,
    postXAmzTargetTimestream20181101ExecuteScheduledQueryRouteHandler,
  )
  .openapi(
    postXAmzTargetTimestream20181101ListScheduledQueriesRoute,
    postXAmzTargetTimestream20181101ListScheduledQueriesRouteHandler,
  )
  .openapi(
    postXAmzTargetTimestream20181101ListTagsForResourceRoute,
    postXAmzTargetTimestream20181101ListTagsForResourceRouteHandler,
  )
  .openapi(
    postXAmzTargetTimestream20181101PrepareQueryRoute,
    postXAmzTargetTimestream20181101PrepareQueryRouteHandler,
  )
  .openapi(
    postXAmzTargetTimestream20181101QueryRoute,
    postXAmzTargetTimestream20181101QueryRouteHandler,
  )
  .openapi(
    postXAmzTargetTimestream20181101TagResourceRoute,
    postXAmzTargetTimestream20181101TagResourceRouteHandler,
  )
  .openapi(
    postXAmzTargetTimestream20181101UntagResourceRoute,
    postXAmzTargetTimestream20181101UntagResourceRouteHandler,
  )
  .openapi(
    postXAmzTargetTimestream20181101UpdateScheduledQueryRoute,
    postXAmzTargetTimestream20181101UpdateScheduledQueryRouteHandler,
  )

export default app
