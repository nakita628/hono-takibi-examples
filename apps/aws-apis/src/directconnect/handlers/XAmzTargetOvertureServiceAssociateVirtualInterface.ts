import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOvertureServiceAssociateVirtualInterfaceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOvertureServiceAssociateVirtualInterfaceHandler = app.openapi(
  postXAmzTargetOvertureServiceAssociateVirtualInterfaceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
