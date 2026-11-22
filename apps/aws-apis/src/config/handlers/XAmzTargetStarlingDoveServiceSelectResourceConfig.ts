import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceSelectResourceConfigRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStarlingDoveServiceSelectResourceConfigHandler = app.openapi(
  postXAmzTargetStarlingDoveServiceSelectResourceConfigRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
