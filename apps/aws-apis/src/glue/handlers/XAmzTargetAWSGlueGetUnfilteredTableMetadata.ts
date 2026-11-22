import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueGetUnfilteredTableMetadataRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueGetUnfilteredTableMetadataHandler = app.openapi(
  postXAmzTargetAWSGlueGetUnfilteredTableMetadataRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
