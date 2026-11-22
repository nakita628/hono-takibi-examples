import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGluePutSchemaVersionMetadataRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGluePutSchemaVersionMetadataHandler = app.openapi(
  postXAmzTargetAWSGluePutSchemaVersionMetadataRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
