import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128GetKeyPairRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLightsail20161128GetKeyPairHandler = app.openapi(
  postXAmzTargetLightsail20161128GetKeyPairRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
