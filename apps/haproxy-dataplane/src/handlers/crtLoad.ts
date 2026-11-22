import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteServicesHaproxyConfigurationCrtStoresCrtStoreCrtLoadsCertificateRoute,
  getServicesHaproxyConfigurationCrtStoresCrtStoreCrtLoadsCertificateRoute,
  getServicesHaproxyConfigurationCrtStoresCrtStoreCrtLoadsRoute,
  postServicesHaproxyConfigurationCrtStoresCrtStoreCrtLoadsRoute,
  putServicesHaproxyConfigurationCrtStoresCrtStoreCrtLoadsCertificateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const crtLoadHandler = app
  .openapi(getServicesHaproxyConfigurationCrtStoresCrtStoreCrtLoadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesHaproxyConfigurationCrtStoresCrtStoreCrtLoadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesHaproxyConfigurationCrtStoresCrtStoreCrtLoadsCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyConfigurationCrtStoresCrtStoreCrtLoadsCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationCrtStoresCrtStoreCrtLoadsCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
