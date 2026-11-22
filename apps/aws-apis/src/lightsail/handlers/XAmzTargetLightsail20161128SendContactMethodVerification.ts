import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128SendContactMethodVerificationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLightsail20161128SendContactMethodVerificationHandler = app.openapi(
  postXAmzTargetLightsail20161128SendContactMethodVerificationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
