import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOvertureServiceUpdateVirtualInterfaceAttributesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOvertureServiceUpdateVirtualInterfaceAttributesHandler = app.openapi(
  postXAmzTargetOvertureServiceUpdateVirtualInterfaceAttributesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
