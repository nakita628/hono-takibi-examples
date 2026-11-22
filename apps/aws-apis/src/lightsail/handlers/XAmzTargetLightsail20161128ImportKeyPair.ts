import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128ImportKeyPairRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLightsail20161128ImportKeyPairHandler = app.openapi(
  postXAmzTargetLightsail20161128ImportKeyPairRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
