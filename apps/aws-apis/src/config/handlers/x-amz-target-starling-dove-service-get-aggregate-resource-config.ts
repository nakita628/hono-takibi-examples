import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceGetAggregateResourceConfigRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStarlingDoveServiceGetAggregateResourceConfigHandler = app.openapi(
  postXAmzTargetStarlingDoveServiceGetAggregateResourceConfigRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
