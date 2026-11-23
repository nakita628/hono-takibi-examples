import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20150824CreateSqlInjectionMatchSetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswaf20150824CreateSqlInjectionMatchSetHandler = app.openapi(
  postXAmzTargetAWSWAF20150824CreateSqlInjectionMatchSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
