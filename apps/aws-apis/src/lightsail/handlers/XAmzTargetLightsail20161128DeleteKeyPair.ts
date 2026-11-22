import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128DeleteKeyPairRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLightsail20161128DeleteKeyPairHandler = app.openapi(
  postXAmzTargetLightsail20161128DeleteKeyPairRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
