import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20150824ListRateBasedRulesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAF20150824ListRateBasedRulesHandler = app.openapi(
  postXAmzTargetAWSWAF20150824ListRateBasedRulesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
