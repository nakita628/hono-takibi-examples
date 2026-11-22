import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceDeleteResourceConfigRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStarlingDoveServiceDeleteResourceConfigHandler = app.openapi(
  postXAmzTargetStarlingDoveServiceDeleteResourceConfigRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
