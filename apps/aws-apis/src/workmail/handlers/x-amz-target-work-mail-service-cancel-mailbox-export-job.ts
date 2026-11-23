import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceCancelMailboxExportJobRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkMailServiceCancelMailboxExportJobHandler = app.openapi(
  postXAmzTargetWorkMailServiceCancelMailboxExportJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
