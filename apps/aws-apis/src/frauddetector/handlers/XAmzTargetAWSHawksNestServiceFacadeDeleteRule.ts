import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadeDeleteRuleRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSHawksNestServiceFacadeDeleteRuleHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadeDeleteRuleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
