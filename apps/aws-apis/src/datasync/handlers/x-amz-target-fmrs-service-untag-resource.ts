import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetFmrsServiceUntagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetFmrsServiceUntagResourceHandler = app.openapi(
  postXAmzTargetFmrsServiceUntagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
