import { OpenAPIHono } from '@hono/zod-openapi'
import { postDescribeNotificationRuleRoute } from '../routes'

const app = new OpenAPIHono()

export const describeNotificationRuleHandler = app.openapi(
  postDescribeNotificationRuleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
