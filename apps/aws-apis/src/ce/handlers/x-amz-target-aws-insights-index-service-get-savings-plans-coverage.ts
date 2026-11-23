import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSInsightsIndexServiceGetSavingsPlansCoverageRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsInsightsIndexServiceGetSavingsPlansCoverageHandler = app.openapi(
  postXAmzTargetAWSInsightsIndexServiceGetSavingsPlansCoverageRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
