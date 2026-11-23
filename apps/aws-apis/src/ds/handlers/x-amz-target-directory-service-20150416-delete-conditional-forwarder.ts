import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDirectoryService20150416DeleteConditionalForwarderRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDirectoryService20150416DeleteConditionalForwarderHandler = app.openapi(
  postXAmzTargetDirectoryService20150416DeleteConditionalForwarderRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
