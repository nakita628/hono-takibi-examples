import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueDeleteDataQualityRulesetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueDeleteDataQualityRulesetHandler = app.openapi(
  postXAmzTargetAWSGlueDeleteDataQualityRulesetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
