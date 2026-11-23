import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMGetOpsMetadataRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmGetOpsMetadataHandler = app.openapi(
  postXAmzTargetAmazonSSMGetOpsMetadataRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
