import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMDeleteOpsMetadataRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMDeleteOpsMetadataHandler = app.openapi(
  postXAmzTargetAmazonSSMDeleteOpsMetadataRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
