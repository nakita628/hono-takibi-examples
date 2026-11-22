import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetFmrsServiceCreateTaskRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetFmrsServiceCreateTaskHandler = app.openapi(
  postXAmzTargetFmrsServiceCreateTaskRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
