import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueGetUnfilteredPartitionMetadataRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueGetUnfilteredPartitionMetadataHandler = app.openapi(
  postXAmzTargetAWSGlueGetUnfilteredPartitionMetadataRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
