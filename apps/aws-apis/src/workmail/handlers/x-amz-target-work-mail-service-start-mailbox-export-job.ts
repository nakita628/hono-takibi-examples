import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceStartMailboxExportJobRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkMailServiceStartMailboxExportJobHandler = app.openapi(
  postXAmzTargetWorkMailServiceStartMailboxExportJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
