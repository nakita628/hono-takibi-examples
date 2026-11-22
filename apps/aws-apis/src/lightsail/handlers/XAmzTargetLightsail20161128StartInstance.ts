import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128StartInstanceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLightsail20161128StartInstanceHandler = app.openapi(
  postXAmzTargetLightsail20161128StartInstanceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
