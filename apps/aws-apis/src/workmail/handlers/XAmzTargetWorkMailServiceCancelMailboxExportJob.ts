import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceCancelMailboxExportJobRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkMailServiceCancelMailboxExportJobHandler = app.openapi(
  postXAmzTargetWorkMailServiceCancelMailboxExportJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
