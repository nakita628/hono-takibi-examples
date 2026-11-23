import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOvertureServiceDeleteBGPPeerRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetOvertureServiceDeleteBgpPeerHandler = app.openapi(
  postXAmzTargetOvertureServiceDeleteBGPPeerRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
