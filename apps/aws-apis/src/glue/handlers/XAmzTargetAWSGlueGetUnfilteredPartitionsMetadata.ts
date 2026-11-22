import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueGetUnfilteredPartitionsMetadataRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueGetUnfilteredPartitionsMetadataHandler = app.openapi(
  postXAmzTargetAWSGlueGetUnfilteredPartitionsMetadataRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
