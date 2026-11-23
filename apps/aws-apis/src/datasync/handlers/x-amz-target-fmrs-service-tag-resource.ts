import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetFmrsServiceTagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetFmrsServiceTagResourceHandler = app.openapi(
  postXAmzTargetFmrsServiceTagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
