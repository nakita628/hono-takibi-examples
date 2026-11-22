import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueRemoveSchemaVersionMetadataRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueRemoveSchemaVersionMetadataHandler = app.openapi(
  postXAmzTargetAWSGlueRemoveSchemaVersionMetadataRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
