import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAFRegional20161128GetSqlInjectionMatchSetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswafRegional20161128GetSqlInjectionMatchSetHandler = app.openapi(
  postXAmzTargetAWSWAFRegional20161128GetSqlInjectionMatchSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
