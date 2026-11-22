import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetFmrsServiceDeleteTaskRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetFmrsServiceDeleteTaskHandler = app.openapi(
  postXAmzTargetFmrsServiceDeleteTaskRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
