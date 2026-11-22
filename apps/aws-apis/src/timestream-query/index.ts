import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetTimestream20181101CancelQueryHandler,
  XAmzTargetTimestream20181101CreateScheduledQueryHandler,
  XAmzTargetTimestream20181101DeleteScheduledQueryHandler,
  XAmzTargetTimestream20181101DescribeEndpointsHandler,
  XAmzTargetTimestream20181101DescribeScheduledQueryHandler,
  XAmzTargetTimestream20181101ExecuteScheduledQueryHandler,
  XAmzTargetTimestream20181101ListScheduledQueriesHandler,
  XAmzTargetTimestream20181101ListTagsForResourceHandler,
  XAmzTargetTimestream20181101PrepareQueryHandler,
  XAmzTargetTimestream20181101QueryHandler,
  XAmzTargetTimestream20181101TagResourceHandler,
  XAmzTargetTimestream20181101UntagResourceHandler,
  XAmzTargetTimestream20181101UpdateScheduledQueryHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetTimestream20181101CancelQueryHandler)
  .route('/', XAmzTargetTimestream20181101CreateScheduledQueryHandler)
  .route('/', XAmzTargetTimestream20181101DeleteScheduledQueryHandler)
  .route('/', XAmzTargetTimestream20181101DescribeEndpointsHandler)
  .route('/', XAmzTargetTimestream20181101DescribeScheduledQueryHandler)
  .route('/', XAmzTargetTimestream20181101ExecuteScheduledQueryHandler)
  .route('/', XAmzTargetTimestream20181101ListScheduledQueriesHandler)
  .route('/', XAmzTargetTimestream20181101ListTagsForResourceHandler)
  .route('/', XAmzTargetTimestream20181101PrepareQueryHandler)
  .route('/', XAmzTargetTimestream20181101QueryHandler)
  .route('/', XAmzTargetTimestream20181101TagResourceHandler)
  .route('/', XAmzTargetTimestream20181101UntagResourceHandler)
  .route('/', XAmzTargetTimestream20181101UpdateScheduledQueryHandler)

export default app
