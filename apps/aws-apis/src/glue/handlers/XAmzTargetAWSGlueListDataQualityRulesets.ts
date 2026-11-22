import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueListDataQualityRulesetsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueListDataQualityRulesetsHandler = app.openapi(
  postXAmzTargetAWSGlueListDataQualityRulesetsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
