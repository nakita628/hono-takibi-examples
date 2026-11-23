import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20150824UpdateSqlInjectionMatchSetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswaf20150824UpdateSqlInjectionMatchSetHandler = app.openapi(
  postXAmzTargetAWSWAF20150824UpdateSqlInjectionMatchSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
