import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20150824GetByteMatchSetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswaf20150824GetByteMatchSetHandler = app.openapi(
  postXAmzTargetAWSWAF20150824GetByteMatchSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
