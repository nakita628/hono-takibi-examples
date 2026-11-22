import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDynamoDB20120810UpdateContributorInsightsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDynamoDB20120810UpdateContributorInsightsHandler = app.openapi(
  postXAmzTargetDynamoDB20120810UpdateContributorInsightsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
