import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOvertureServiceDeleteBGPPeerRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOvertureServiceDeleteBGPPeerHandler = app.openapi(
  postXAmzTargetOvertureServiceDeleteBGPPeerRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
