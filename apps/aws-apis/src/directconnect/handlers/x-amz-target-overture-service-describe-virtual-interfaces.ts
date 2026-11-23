import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOvertureServiceDescribeVirtualInterfacesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetOvertureServiceDescribeVirtualInterfacesHandler = app.openapi(
  postXAmzTargetOvertureServiceDescribeVirtualInterfacesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
