import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDirectoryService20150416ListSchemaExtensionsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDirectoryService20150416ListSchemaExtensionsHandler = app.openapi(
  postXAmzTargetDirectoryService20150416ListSchemaExtensionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
