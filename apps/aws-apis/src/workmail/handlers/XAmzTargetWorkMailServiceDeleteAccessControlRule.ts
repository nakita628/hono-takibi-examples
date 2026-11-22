import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceDeleteAccessControlRuleRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkMailServiceDeleteAccessControlRuleHandler = app.openapi(
  postXAmzTargetWorkMailServiceDeleteAccessControlRuleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
