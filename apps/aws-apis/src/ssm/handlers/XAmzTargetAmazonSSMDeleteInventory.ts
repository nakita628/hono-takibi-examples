import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMDeleteInventoryRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMDeleteInventoryHandler = app.openapi(
  postXAmzTargetAmazonSSMDeleteInventoryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
