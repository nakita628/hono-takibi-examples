import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20150824CreateXssMatchSetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAF20150824CreateXssMatchSetHandler = app.openapi(
  postXAmzTargetAWSWAF20150824CreateXssMatchSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
