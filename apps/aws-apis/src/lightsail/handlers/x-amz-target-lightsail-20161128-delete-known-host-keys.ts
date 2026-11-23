import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128DeleteKnownHostKeysRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLightsail20161128DeleteKnownHostKeysHandler = app.openapi(
  postXAmzTargetLightsail20161128DeleteKnownHostKeysRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
