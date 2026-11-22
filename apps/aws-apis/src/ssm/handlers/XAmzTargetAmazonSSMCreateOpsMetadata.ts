import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMCreateOpsMetadataRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMCreateOpsMetadataHandler = app.openapi(
  postXAmzTargetAmazonSSMCreateOpsMetadataRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
