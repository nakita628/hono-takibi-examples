import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadeCreateRuleRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsHawksNestServiceFacadeCreateRuleHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadeCreateRuleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
