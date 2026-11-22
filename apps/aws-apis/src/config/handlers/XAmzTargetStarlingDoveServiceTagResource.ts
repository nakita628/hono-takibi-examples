import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceTagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStarlingDoveServiceTagResourceHandler = app.openapi(
  postXAmzTargetStarlingDoveServiceTagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
