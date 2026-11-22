import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMGetOpsMetadataRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMGetOpsMetadataHandler = app.openapi(
  postXAmzTargetAmazonSSMGetOpsMetadataRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
