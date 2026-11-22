import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceUntagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStarlingDoveServiceUntagResourceHandler = app.openapi(
  postXAmzTargetStarlingDoveServiceUntagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
