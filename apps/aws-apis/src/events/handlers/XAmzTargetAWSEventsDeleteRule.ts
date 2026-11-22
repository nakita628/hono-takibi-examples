import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSEventsDeleteRuleRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSEventsDeleteRuleHandler = app.openapi(
  postXAmzTargetAWSEventsDeleteRuleRoute,
  (c) => {},
)
