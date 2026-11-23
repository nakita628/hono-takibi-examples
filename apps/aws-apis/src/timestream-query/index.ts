import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetTimestream20181101CancelQueryHandler,
  xAmzTargetTimestream20181101CreateScheduledQueryHandler,
  xAmzTargetTimestream20181101DeleteScheduledQueryHandler,
  xAmzTargetTimestream20181101DescribeEndpointsHandler,
  xAmzTargetTimestream20181101DescribeScheduledQueryHandler,
  xAmzTargetTimestream20181101ExecuteScheduledQueryHandler,
  xAmzTargetTimestream20181101ListScheduledQueriesHandler,
  xAmzTargetTimestream20181101ListTagsForResourceHandler,
  xAmzTargetTimestream20181101PrepareQueryHandler,
  xAmzTargetTimestream20181101QueryHandler,
  xAmzTargetTimestream20181101TagResourceHandler,
  xAmzTargetTimestream20181101UntagResourceHandler,
  xAmzTargetTimestream20181101UpdateScheduledQueryHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetTimestream20181101CancelQueryHandler)
  .route('/', xAmzTargetTimestream20181101CreateScheduledQueryHandler)
  .route('/', xAmzTargetTimestream20181101DeleteScheduledQueryHandler)
  .route('/', xAmzTargetTimestream20181101DescribeEndpointsHandler)
  .route('/', xAmzTargetTimestream20181101DescribeScheduledQueryHandler)
  .route('/', xAmzTargetTimestream20181101ExecuteScheduledQueryHandler)
  .route('/', xAmzTargetTimestream20181101ListScheduledQueriesHandler)
  .route('/', xAmzTargetTimestream20181101ListTagsForResourceHandler)
  .route('/', xAmzTargetTimestream20181101PrepareQueryHandler)
  .route('/', xAmzTargetTimestream20181101QueryHandler)
  .route('/', xAmzTargetTimestream20181101TagResourceHandler)
  .route('/', xAmzTargetTimestream20181101UntagResourceHandler)
  .route('/', xAmzTargetTimestream20181101UpdateScheduledQueryHandler)

export default app
