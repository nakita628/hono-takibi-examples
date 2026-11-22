import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetFmrsServiceDeleteLocationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetFmrsServiceDeleteLocationHandler = app.openapi(
  postXAmzTargetFmrsServiceDeleteLocationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
