import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOvertureServiceCreatePublicVirtualInterfaceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetOvertureServiceCreatePublicVirtualInterfaceHandler = app.openapi(
  postXAmzTargetOvertureServiceCreatePublicVirtualInterfaceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
