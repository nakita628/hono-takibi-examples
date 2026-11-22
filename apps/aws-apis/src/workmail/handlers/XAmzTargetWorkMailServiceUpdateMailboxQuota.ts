import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceUpdateMailboxQuotaRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkMailServiceUpdateMailboxQuotaHandler = app.openapi(
  postXAmzTargetWorkMailServiceUpdateMailboxQuotaRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
