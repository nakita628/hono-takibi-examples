import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueGetUnfilteredPartitionMetadataRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueGetUnfilteredPartitionMetadataHandler = app.openapi(
  postXAmzTargetAWSGlueGetUnfilteredPartitionMetadataRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
