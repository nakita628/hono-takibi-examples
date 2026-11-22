import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOvertureServiceAllocatePrivateVirtualInterfaceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOvertureServiceAllocatePrivateVirtualInterfaceHandler = app.openapi(
  postXAmzTargetOvertureServiceAllocatePrivateVirtualInterfaceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
