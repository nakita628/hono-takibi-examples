import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadeUpdateRuleVersionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsHawksNestServiceFacadeUpdateRuleVersionHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadeUpdateRuleVersionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
