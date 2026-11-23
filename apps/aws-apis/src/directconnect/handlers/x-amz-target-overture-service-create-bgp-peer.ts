import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOvertureServiceCreateBGPPeerRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetOvertureServiceCreateBgpPeerHandler = app.openapi(
  postXAmzTargetOvertureServiceCreateBGPPeerRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
