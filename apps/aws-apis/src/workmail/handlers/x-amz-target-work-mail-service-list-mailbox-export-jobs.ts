import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceListMailboxExportJobsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkMailServiceListMailboxExportJobsHandler = app.openapi(
  postXAmzTargetWorkMailServiceListMailboxExportJobsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
