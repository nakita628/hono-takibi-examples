import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOvertureServiceCreateBGPPeerRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOvertureServiceCreateBGPPeerHandler = app.openapi(
  postXAmzTargetOvertureServiceCreateBGPPeerRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
