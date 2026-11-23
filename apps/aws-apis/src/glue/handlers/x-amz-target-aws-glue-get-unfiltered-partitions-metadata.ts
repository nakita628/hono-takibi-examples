import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueGetUnfilteredPartitionsMetadataRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueGetUnfilteredPartitionsMetadataHandler = app.openapi(
  postXAmzTargetAWSGlueGetUnfilteredPartitionsMetadataRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
