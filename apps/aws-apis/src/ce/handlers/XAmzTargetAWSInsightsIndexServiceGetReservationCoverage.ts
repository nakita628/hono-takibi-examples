import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSInsightsIndexServiceGetReservationCoverageRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSInsightsIndexServiceGetReservationCoverageHandler = app.openapi(
  postXAmzTargetAWSInsightsIndexServiceGetReservationCoverageRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
