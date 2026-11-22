import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceBatchGetResourceConfigRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStarlingDoveServiceBatchGetResourceConfigHandler = app.openapi(
  postXAmzTargetStarlingDoveServiceBatchGetResourceConfigRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
