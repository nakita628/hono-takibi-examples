import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMListResourceDataSyncRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmListResourceDataSyncHandler = app.openapi(
  postXAmzTargetAmazonSSMListResourceDataSyncRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
