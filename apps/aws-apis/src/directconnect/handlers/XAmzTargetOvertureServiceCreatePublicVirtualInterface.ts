import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOvertureServiceCreatePublicVirtualInterfaceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOvertureServiceCreatePublicVirtualInterfaceHandler = app.openapi(
  postXAmzTargetOvertureServiceCreatePublicVirtualInterfaceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
