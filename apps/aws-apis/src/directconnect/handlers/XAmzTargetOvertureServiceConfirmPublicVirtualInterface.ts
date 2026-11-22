import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOvertureServiceConfirmPublicVirtualInterfaceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOvertureServiceConfirmPublicVirtualInterfaceHandler = app.openapi(
  postXAmzTargetOvertureServiceConfirmPublicVirtualInterfaceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
