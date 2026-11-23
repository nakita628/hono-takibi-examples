import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMDeleteInventoryRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmDeleteInventoryHandler = app.openapi(
  postXAmzTargetAmazonSSMDeleteInventoryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
