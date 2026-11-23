import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMDeleteOpsMetadataRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmDeleteOpsMetadataHandler = app.openapi(
  postXAmzTargetAmazonSSMDeleteOpsMetadataRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
