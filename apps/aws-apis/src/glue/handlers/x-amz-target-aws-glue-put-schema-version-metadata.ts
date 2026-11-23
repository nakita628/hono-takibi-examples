import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGluePutSchemaVersionMetadataRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGluePutSchemaVersionMetadataHandler = app.openapi(
  postXAmzTargetAWSGluePutSchemaVersionMetadataRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
