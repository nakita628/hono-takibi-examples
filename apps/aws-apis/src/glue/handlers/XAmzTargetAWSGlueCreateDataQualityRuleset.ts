import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueCreateDataQualityRulesetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueCreateDataQualityRulesetHandler = app.openapi(
  postXAmzTargetAWSGlueCreateDataQualityRulesetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
