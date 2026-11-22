import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128CreateKeyPairRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLightsail20161128CreateKeyPairHandler = app.openapi(
  postXAmzTargetLightsail20161128CreateKeyPairRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
