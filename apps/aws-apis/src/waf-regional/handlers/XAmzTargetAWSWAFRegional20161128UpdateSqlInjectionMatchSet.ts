import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAFRegional20161128UpdateSqlInjectionMatchSetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAFRegional20161128UpdateSqlInjectionMatchSetHandler = app.openapi(
  postXAmzTargetAWSWAFRegional20161128UpdateSqlInjectionMatchSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
