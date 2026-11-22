import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueGetDataQualityRulesetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueGetDataQualityRulesetHandler = app.openapi(
  postXAmzTargetAWSGlueGetDataQualityRulesetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
