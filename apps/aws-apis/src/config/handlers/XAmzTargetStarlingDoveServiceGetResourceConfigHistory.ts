import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceGetResourceConfigHistoryRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStarlingDoveServiceGetResourceConfigHistoryHandler = app.openapi(
  postXAmzTargetStarlingDoveServiceGetResourceConfigHistoryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
