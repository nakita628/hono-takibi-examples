import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOvertureServiceListVirtualInterfaceTestHistoryRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetOvertureServiceListVirtualInterfaceTestHistoryHandler = app.openapi(
  postXAmzTargetOvertureServiceListVirtualInterfaceTestHistoryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
