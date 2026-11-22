import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMGetParameterHistoryRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMGetParameterHistoryHandler = app.openapi(
  postXAmzTargetAmazonSSMGetParameterHistoryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
