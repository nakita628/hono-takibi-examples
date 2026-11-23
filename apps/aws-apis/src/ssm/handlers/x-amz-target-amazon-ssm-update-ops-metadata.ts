import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMUpdateOpsMetadataRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmUpdateOpsMetadataHandler = app.openapi(
  postXAmzTargetAmazonSSMUpdateOpsMetadataRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
