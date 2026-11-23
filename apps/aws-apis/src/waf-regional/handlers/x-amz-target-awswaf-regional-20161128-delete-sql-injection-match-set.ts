import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAFRegional20161128DeleteSqlInjectionMatchSetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswafRegional20161128DeleteSqlInjectionMatchSetHandler = app.openapi(
  postXAmzTargetAWSWAFRegional20161128DeleteSqlInjectionMatchSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
