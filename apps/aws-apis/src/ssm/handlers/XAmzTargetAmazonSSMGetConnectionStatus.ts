import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMGetConnectionStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMGetConnectionStatusHandler = app.openapi(
  postXAmzTargetAmazonSSMGetConnectionStatusRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
