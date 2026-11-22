import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAFRegional20161128ListRateBasedRulesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAFRegional20161128ListRateBasedRulesHandler = app.openapi(
  postXAmzTargetAWSWAFRegional20161128ListRateBasedRulesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
