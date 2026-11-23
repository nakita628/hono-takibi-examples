import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMDeleteResourceDataSyncRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmDeleteResourceDataSyncHandler = app.openapi(
  postXAmzTargetAmazonSSMDeleteResourceDataSyncRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
