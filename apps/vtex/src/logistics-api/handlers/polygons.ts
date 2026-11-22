import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiLogisticsPvtConfigurationGeoshapePolygonNameRoute,
  getApiLogisticsPvtConfigurationGeoshapePolygonNameRoute,
  getApiLogisticsPvtConfigurationGeoshapeRoute,
  putApiLogisticsPvtConfigurationGeoshapeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const polygonsHandler = app
  .openapi(getApiLogisticsPvtConfigurationGeoshapeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiLogisticsPvtConfigurationGeoshapeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiLogisticsPvtConfigurationGeoshapePolygonNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLogisticsPvtConfigurationGeoshapePolygonNameRoute, (c) => {
    throw new Error('Not implemented')
  })
