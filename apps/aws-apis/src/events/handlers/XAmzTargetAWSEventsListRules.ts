import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSEventsListRulesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSEventsListRulesHandler = app.openapi(
  postXAmzTargetAWSEventsListRulesRoute,
  (c) => {},
)
