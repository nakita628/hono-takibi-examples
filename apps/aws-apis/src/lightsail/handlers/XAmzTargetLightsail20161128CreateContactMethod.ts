import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128CreateContactMethodRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLightsail20161128CreateContactMethodHandler = app.openapi(
  postXAmzTargetLightsail20161128CreateContactMethodRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
