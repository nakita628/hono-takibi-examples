import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceBatchGetAggregateResourceConfigRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStarlingDoveServiceBatchGetAggregateResourceConfigHandler = app.openapi(
  postXAmzTargetStarlingDoveServiceBatchGetAggregateResourceConfigRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
