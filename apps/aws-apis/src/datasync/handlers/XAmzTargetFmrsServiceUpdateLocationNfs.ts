import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetFmrsServiceUpdateLocationNfsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetFmrsServiceUpdateLocationNfsHandler = app.openapi(
  postXAmzTargetFmrsServiceUpdateLocationNfsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
