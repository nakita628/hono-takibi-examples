import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSIESnowballJobManagementServiceUpdateJobShipmentStateRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSIESnowballJobManagementServiceUpdateJobShipmentStateHandler = app.openapi(
  postXAmzTargetAWSIESnowballJobManagementServiceUpdateJobShipmentStateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
