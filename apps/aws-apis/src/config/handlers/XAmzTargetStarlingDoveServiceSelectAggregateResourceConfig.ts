import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceSelectAggregateResourceConfigRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStarlingDoveServiceSelectAggregateResourceConfigHandler = app.openapi(
  postXAmzTargetStarlingDoveServiceSelectAggregateResourceConfigRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
