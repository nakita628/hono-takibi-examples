import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAFRegional20161128ListRulesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswafRegional20161128ListRulesHandler = app.openapi(
  postXAmzTargetAWSWAFRegional20161128ListRulesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
