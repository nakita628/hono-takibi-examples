import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSInsightsIndexServiceGetReservationCoverageRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsInsightsIndexServiceGetReservationCoverageHandler = app.openapi(
  postXAmzTargetAWSInsightsIndexServiceGetReservationCoverageRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
