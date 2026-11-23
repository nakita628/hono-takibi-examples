import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOvertureServiceAllocatePublicVirtualInterfaceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetOvertureServiceAllocatePublicVirtualInterfaceHandler = app.openapi(
  postXAmzTargetOvertureServiceAllocatePublicVirtualInterfaceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
