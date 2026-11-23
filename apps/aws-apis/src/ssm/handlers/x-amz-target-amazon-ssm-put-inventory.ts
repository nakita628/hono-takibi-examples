import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMPutInventoryRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmPutInventoryHandler = app.openapi(
  postXAmzTargetAmazonSSMPutInventoryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
