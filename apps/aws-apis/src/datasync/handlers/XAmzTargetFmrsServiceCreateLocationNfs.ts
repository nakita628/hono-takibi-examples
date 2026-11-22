import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetFmrsServiceCreateLocationNfsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetFmrsServiceCreateLocationNfsHandler = app.openapi(
  postXAmzTargetFmrsServiceCreateLocationNfsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
