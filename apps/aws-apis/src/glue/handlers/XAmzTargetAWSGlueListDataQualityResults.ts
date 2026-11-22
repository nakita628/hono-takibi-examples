import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueListDataQualityResultsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueListDataQualityResultsHandler = app.openapi(
  postXAmzTargetAWSGlueListDataQualityResultsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
