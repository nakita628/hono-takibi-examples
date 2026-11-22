import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMDeleteResourceDataSyncRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMDeleteResourceDataSyncHandler = app.openapi(
  postXAmzTargetAmazonSSMDeleteResourceDataSyncRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
