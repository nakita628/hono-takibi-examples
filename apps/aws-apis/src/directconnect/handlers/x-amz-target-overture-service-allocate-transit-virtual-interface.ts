import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOvertureServiceAllocateTransitVirtualInterfaceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetOvertureServiceAllocateTransitVirtualInterfaceHandler = app.openapi(
  postXAmzTargetOvertureServiceAllocateTransitVirtualInterfaceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
