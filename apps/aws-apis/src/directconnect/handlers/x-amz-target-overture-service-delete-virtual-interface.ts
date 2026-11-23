import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOvertureServiceDeleteVirtualInterfaceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetOvertureServiceDeleteVirtualInterfaceHandler = app.openapi(
  postXAmzTargetOvertureServiceDeleteVirtualInterfaceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
