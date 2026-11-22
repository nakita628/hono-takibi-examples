import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteServicesHaproxyConfigurationCrtStoresNameRoute,
  getServicesHaproxyConfigurationCrtStoresNameRoute,
  getServicesHaproxyConfigurationCrtStoresRoute,
  postServicesHaproxyConfigurationCrtStoresRoute,
  putServicesHaproxyConfigurationCrtStoresNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const crtStoreHandler = app
  .openapi(getServicesHaproxyConfigurationCrtStoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesHaproxyConfigurationCrtStoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesHaproxyConfigurationCrtStoresNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyConfigurationCrtStoresNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationCrtStoresNameRoute, (c) => {
    throw new Error('Not implemented')
  })
