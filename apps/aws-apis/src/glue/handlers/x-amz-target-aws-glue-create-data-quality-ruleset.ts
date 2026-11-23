import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueCreateDataQualityRulesetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueCreateDataQualityRulesetHandler = app.openapi(
  postXAmzTargetAWSGlueCreateDataQualityRulesetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
