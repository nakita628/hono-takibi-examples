import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceBatchGetAggregateResourceConfigRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStarlingDoveServiceBatchGetAggregateResourceConfigHandler = app.openapi(
  postXAmzTargetStarlingDoveServiceBatchGetAggregateResourceConfigRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
