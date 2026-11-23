import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueQuerySchemaVersionMetadataRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueQuerySchemaVersionMetadataHandler = app.openapi(
  postXAmzTargetAWSGlueQuerySchemaVersionMetadataRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
