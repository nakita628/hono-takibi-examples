import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueRemoveSchemaVersionMetadataRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueRemoveSchemaVersionMetadataHandler = app.openapi(
  postXAmzTargetAWSGlueRemoveSchemaVersionMetadataRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
