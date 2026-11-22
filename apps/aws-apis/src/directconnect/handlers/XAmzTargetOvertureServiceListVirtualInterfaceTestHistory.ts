import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOvertureServiceListVirtualInterfaceTestHistoryRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOvertureServiceListVirtualInterfaceTestHistoryHandler = app.openapi(
  postXAmzTargetOvertureServiceListVirtualInterfaceTestHistoryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
