import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOvertureServiceUpdateVirtualInterfaceAttributesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetOvertureServiceUpdateVirtualInterfaceAttributesHandler = app.openapi(
  postXAmzTargetOvertureServiceUpdateVirtualInterfaceAttributesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
