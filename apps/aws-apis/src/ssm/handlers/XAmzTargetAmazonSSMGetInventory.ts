import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMGetInventoryRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMGetInventoryHandler = app.openapi(
  postXAmzTargetAmazonSSMGetInventoryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
