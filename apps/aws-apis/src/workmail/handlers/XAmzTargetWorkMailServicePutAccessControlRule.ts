import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServicePutAccessControlRuleRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkMailServicePutAccessControlRuleHandler = app.openapi(
  postXAmzTargetWorkMailServicePutAccessControlRuleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
