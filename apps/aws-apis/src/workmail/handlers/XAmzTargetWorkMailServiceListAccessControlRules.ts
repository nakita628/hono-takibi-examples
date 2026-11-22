import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceListAccessControlRulesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkMailServiceListAccessControlRulesHandler = app.openapi(
  postXAmzTargetWorkMailServiceListAccessControlRulesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
