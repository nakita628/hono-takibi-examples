import { OpenAPIHono } from '@hono/zod-openapi'
import { postOcsV2PhpAppsSpreedApiApiVersionSignalingBackendRoute } from '../routes'

const app = new OpenAPIHono()

export const signalingHandler = app.openapi(
  postOcsV2PhpAppsSpreedApiApiVersionSignalingBackendRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
