import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMListOpsMetadataRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmListOpsMetadataHandler = app.openapi(
  postXAmzTargetAmazonSSMListOpsMetadataRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
