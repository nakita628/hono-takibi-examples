import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetFmrsServiceUpdateTaskRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetFmrsServiceUpdateTaskHandler = app.openapi(
  postXAmzTargetFmrsServiceUpdateTaskRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
