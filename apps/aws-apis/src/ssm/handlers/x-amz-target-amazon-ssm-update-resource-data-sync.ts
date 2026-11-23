import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMUpdateResourceDataSyncRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmUpdateResourceDataSyncHandler = app.openapi(
  postXAmzTargetAmazonSSMUpdateResourceDataSyncRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
