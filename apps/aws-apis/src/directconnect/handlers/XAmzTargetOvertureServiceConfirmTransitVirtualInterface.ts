import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOvertureServiceConfirmTransitVirtualInterfaceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOvertureServiceConfirmTransitVirtualInterfaceHandler = app.openapi(
  postXAmzTargetOvertureServiceConfirmTransitVirtualInterfaceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
