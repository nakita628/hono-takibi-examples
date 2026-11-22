import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMGetCalendarStateRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMGetCalendarStateHandler = app.openapi(
  postXAmzTargetAmazonSSMGetCalendarStateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
