import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDynamoDB20120810ListContributorInsightsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDynamoDB20120810ListContributorInsightsHandler = app.openapi(
  postXAmzTargetDynamoDB20120810ListContributorInsightsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
