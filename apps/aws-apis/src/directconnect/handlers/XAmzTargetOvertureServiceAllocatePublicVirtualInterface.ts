import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOvertureServiceAllocatePublicVirtualInterfaceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOvertureServiceAllocatePublicVirtualInterfaceHandler = app.openapi(
  postXAmzTargetOvertureServiceAllocatePublicVirtualInterfaceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
