import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceDeleteAccessControlRuleRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkMailServiceDeleteAccessControlRuleHandler = app.openapi(
  postXAmzTargetWorkMailServiceDeleteAccessControlRuleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
