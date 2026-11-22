import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOvertureServiceDescribeVirtualInterfacesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOvertureServiceDescribeVirtualInterfacesHandler = app.openapi(
  postXAmzTargetOvertureServiceDescribeVirtualInterfacesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
