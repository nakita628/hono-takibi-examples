import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20150824UpdateXssMatchSetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAF20150824UpdateXssMatchSetHandler = app.openapi(
  postXAmzTargetAWSWAF20150824UpdateXssMatchSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
