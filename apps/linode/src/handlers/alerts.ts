import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiVersionMonitorServicesServiceTypeAlertDefinitionsAlertIdRoute,
  getApiVersionMonitorAlertChannelsRoute,
  getApiVersionMonitorAlertDefinitionsRoute,
  getApiVersionMonitorServicesServiceTypeAlertDefinitionsAlertIdRoute,
  getApiVersionMonitorServicesServiceTypeAlertDefinitionsRoute,
  postApiVersionMonitorServicesServiceTypeAlertDefinitionsRoute,
  putApiVersionMonitorServicesServiceTypeAlertDefinitionsAlertIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const alertsHandler = app
  .openapi(getApiVersionMonitorAlertChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionMonitorAlertDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionMonitorServicesServiceTypeAlertDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionMonitorServicesServiceTypeAlertDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionMonitorServicesServiceTypeAlertDefinitionsAlertIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionMonitorServicesServiceTypeAlertDefinitionsAlertIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionMonitorServicesServiceTypeAlertDefinitionsAlertIdRoute, (c) => {
    throw new Error('Not implemented')
  })
