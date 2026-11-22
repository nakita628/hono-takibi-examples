import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiVersionManagedServicesServiceIdRoute,
  getApiVersionManagedServicesRoute,
  getApiVersionManagedServicesServiceIdRoute,
  postApiVersionManagedServicesRoute,
  postApiVersionManagedServicesServiceIdDisableRoute,
  postApiVersionManagedServicesServiceIdEnableRoute,
  putApiVersionManagedServicesServiceIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const managedServiceMonitorsHandler = app
  .openapi(postApiVersionManagedServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionManagedServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionManagedServicesServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionManagedServicesServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionManagedServicesServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionManagedServicesServiceIdDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionManagedServicesServiceIdEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
