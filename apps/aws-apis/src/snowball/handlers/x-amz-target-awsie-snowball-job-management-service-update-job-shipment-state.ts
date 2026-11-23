import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSIESnowballJobManagementServiceUpdateJobShipmentStateRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsieSnowballJobManagementServiceUpdateJobShipmentStateHandler = app.openapi(
  postXAmzTargetAWSIESnowballJobManagementServiceUpdateJobShipmentStateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
