import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128GetKeyPairsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLightsail20161128GetKeyPairsHandler = app.openapi(
  postXAmzTargetLightsail20161128GetKeyPairsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
