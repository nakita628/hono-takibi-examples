import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueGetUnfilteredTableMetadataRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueGetUnfilteredTableMetadataHandler = app.openapi(
  postXAmzTargetAWSGlueGetUnfilteredTableMetadataRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
