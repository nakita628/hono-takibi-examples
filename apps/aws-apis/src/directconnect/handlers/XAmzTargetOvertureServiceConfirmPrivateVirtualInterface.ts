import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOvertureServiceConfirmPrivateVirtualInterfaceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOvertureServiceConfirmPrivateVirtualInterfaceHandler = app.openapi(
  postXAmzTargetOvertureServiceConfirmPrivateVirtualInterfaceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
