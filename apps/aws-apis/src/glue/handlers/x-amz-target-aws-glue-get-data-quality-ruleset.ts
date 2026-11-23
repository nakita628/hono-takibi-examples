import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueGetDataQualityRulesetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueGetDataQualityRulesetHandler = app.openapi(
  postXAmzTargetAWSGlueGetDataQualityRulesetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
