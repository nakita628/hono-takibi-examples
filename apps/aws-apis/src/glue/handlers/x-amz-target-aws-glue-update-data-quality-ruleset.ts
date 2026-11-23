import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueUpdateDataQualityRulesetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueUpdateDataQualityRulesetHandler = app.openapi(
  postXAmzTargetAWSGlueUpdateDataQualityRulesetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
