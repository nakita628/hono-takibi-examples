import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceListAccessControlRulesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkMailServiceListAccessControlRulesHandler = app.openapi(
  postXAmzTargetWorkMailServiceListAccessControlRulesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
