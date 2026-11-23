import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAFRegional20161128CreateSqlInjectionMatchSetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswafRegional20161128CreateSqlInjectionMatchSetHandler = app.openapi(
  postXAmzTargetAWSWAFRegional20161128CreateSqlInjectionMatchSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
