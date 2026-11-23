import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLookoutEquipmentFrontendServiceListSensorStatisticsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsLookoutEquipmentFrontendServiceListSensorStatisticsHandler = app.openapi(
  postXAmzTargetAWSLookoutEquipmentFrontendServiceListSensorStatisticsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
