import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOvertureServiceCreatePrivateVirtualInterfaceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOvertureServiceCreatePrivateVirtualInterfaceHandler = app.openapi(
  postXAmzTargetOvertureServiceCreatePrivateVirtualInterfaceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
