import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSInsightsIndexServiceGetTagsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsInsightsIndexServiceGetTagsHandler = app.openapi(
  postXAmzTargetAWSInsightsIndexServiceGetTagsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
