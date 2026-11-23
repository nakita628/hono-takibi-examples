import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDirectoryService20150416UpdateConditionalForwarderRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDirectoryService20150416UpdateConditionalForwarderHandler = app.openapi(
  postXAmzTargetDirectoryService20150416UpdateConditionalForwarderRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
