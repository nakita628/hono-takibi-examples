import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAFRegional20161128ListSqlInjectionMatchSetsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAFRegional20161128ListSqlInjectionMatchSetsHandler = app.openapi(
  postXAmzTargetAWSWAFRegional20161128ListSqlInjectionMatchSetsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
