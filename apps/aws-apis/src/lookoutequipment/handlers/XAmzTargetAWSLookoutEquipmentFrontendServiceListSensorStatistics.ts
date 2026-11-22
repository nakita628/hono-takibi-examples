import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLookoutEquipmentFrontendServiceListSensorStatisticsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSLookoutEquipmentFrontendServiceListSensorStatisticsHandler = app.openapi(
  postXAmzTargetAWSLookoutEquipmentFrontendServiceListSensorStatisticsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
