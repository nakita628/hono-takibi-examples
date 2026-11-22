import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20150824GetSqlInjectionMatchSetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAF20150824GetSqlInjectionMatchSetHandler = app.openapi(
  postXAmzTargetAWSWAF20150824GetSqlInjectionMatchSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
