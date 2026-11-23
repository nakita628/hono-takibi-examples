import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128StartInstanceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLightsail20161128StartInstanceHandler = app.openapi(
  postXAmzTargetLightsail20161128StartInstanceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
