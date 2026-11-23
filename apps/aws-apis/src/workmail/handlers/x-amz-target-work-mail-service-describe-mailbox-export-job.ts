import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceDescribeMailboxExportJobRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkMailServiceDescribeMailboxExportJobHandler = app.openapi(
  postXAmzTargetWorkMailServiceDescribeMailboxExportJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
