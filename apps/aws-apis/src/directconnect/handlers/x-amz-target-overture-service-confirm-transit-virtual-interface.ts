import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOvertureServiceConfirmTransitVirtualInterfaceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetOvertureServiceConfirmTransitVirtualInterfaceHandler = app.openapi(
  postXAmzTargetOvertureServiceConfirmTransitVirtualInterfaceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
