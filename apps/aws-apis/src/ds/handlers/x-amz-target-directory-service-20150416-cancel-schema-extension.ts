import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDirectoryService20150416CancelSchemaExtensionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDirectoryService20150416CancelSchemaExtensionHandler = app.openapi(
  postXAmzTargetDirectoryService20150416CancelSchemaExtensionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
