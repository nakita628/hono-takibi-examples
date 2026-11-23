import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadeUpdateRuleMetadataRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsHawksNestServiceFacadeUpdateRuleMetadataHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadeUpdateRuleMetadataRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
