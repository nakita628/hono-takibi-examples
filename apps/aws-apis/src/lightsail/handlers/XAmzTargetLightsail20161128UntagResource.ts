import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128UntagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLightsail20161128UntagResourceHandler = app.openapi(
  postXAmzTargetLightsail20161128UntagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
