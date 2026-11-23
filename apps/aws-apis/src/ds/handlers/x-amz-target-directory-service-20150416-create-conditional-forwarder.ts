import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDirectoryService20150416CreateConditionalForwarderRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDirectoryService20150416CreateConditionalForwarderHandler = app.openapi(
  postXAmzTargetDirectoryService20150416CreateConditionalForwarderRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
