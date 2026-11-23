import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOvertureServiceCreateTransitVirtualInterfaceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetOvertureServiceCreateTransitVirtualInterfaceHandler = app.openapi(
  postXAmzTargetOvertureServiceCreateTransitVirtualInterfaceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
