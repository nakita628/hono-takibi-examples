import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetFmrsServiceCreateLocationEfsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetFmrsServiceCreateLocationEfsHandler = app.openapi(
  postXAmzTargetFmrsServiceCreateLocationEfsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
