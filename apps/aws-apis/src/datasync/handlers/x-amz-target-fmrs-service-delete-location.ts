import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetFmrsServiceDeleteLocationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetFmrsServiceDeleteLocationHandler = app.openapi(
  postXAmzTargetFmrsServiceDeleteLocationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
