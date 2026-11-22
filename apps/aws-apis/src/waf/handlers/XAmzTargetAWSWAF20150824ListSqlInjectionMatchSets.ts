import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20150824ListSqlInjectionMatchSetsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAF20150824ListSqlInjectionMatchSetsHandler = app.openapi(
  postXAmzTargetAWSWAF20150824ListSqlInjectionMatchSetsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
