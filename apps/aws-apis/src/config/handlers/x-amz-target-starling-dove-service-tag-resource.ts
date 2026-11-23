import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceTagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStarlingDoveServiceTagResourceHandler = app.openapi(
  postXAmzTargetStarlingDoveServiceTagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
