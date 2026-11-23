import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20150824DeleteSqlInjectionMatchSetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswaf20150824DeleteSqlInjectionMatchSetHandler = app.openapi(
  postXAmzTargetAWSWAF20150824DeleteSqlInjectionMatchSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
