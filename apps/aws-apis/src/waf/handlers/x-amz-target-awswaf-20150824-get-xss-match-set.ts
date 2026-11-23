import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20150824GetXssMatchSetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswaf20150824GetXssMatchSetHandler = app.openapi(
  postXAmzTargetAWSWAF20150824GetXssMatchSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
