import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDirectoryService20150416StartSchemaExtensionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDirectoryService20150416StartSchemaExtensionHandler = app.openapi(
  postXAmzTargetDirectoryService20150416StartSchemaExtensionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
