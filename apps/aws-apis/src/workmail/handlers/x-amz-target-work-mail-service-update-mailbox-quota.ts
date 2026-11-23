import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceUpdateMailboxQuotaRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkMailServiceUpdateMailboxQuotaHandler = app.openapi(
  postXAmzTargetWorkMailServiceUpdateMailboxQuotaRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
