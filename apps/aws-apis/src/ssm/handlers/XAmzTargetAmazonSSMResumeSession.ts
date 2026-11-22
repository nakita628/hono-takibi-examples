import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMResumeSessionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMResumeSessionHandler = app.openapi(
  postXAmzTargetAmazonSSMResumeSessionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
