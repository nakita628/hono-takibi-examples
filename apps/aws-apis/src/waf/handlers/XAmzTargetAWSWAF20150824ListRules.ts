import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20150824ListRulesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAF20150824ListRulesHandler = app.openapi(
  postXAmzTargetAWSWAF20150824ListRulesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
