import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiLogisticsPvtConfigurationPickuppointsPickupPointIdRoute,
  getApiLogisticsPvtConfigurationPickuppointsPickupPointIdRoute,
  getApiLogisticsPvtConfigurationPickuppointsRoute,
  getApiLogisticsPvtConfigurationPickuppointsSearchRoute,
  putApiLogisticsPvtConfigurationPickuppointsPickupPointIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const pickupPointsHandler = app
  .openapi(getApiLogisticsPvtConfigurationPickuppointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLogisticsPvtConfigurationPickuppointsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiLogisticsPvtConfigurationPickuppointsPickupPointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLogisticsPvtConfigurationPickuppointsPickupPointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiLogisticsPvtConfigurationPickuppointsPickupPointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
