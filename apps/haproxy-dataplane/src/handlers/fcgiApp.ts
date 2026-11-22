import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteServicesHaproxyConfigurationFcgiAppsNameRoute,
  getServicesHaproxyConfigurationFcgiAppsNameRoute,
  getServicesHaproxyConfigurationFcgiAppsRoute,
  postServicesHaproxyConfigurationFcgiAppsRoute,
  putServicesHaproxyConfigurationFcgiAppsNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const fcgiAppHandler = app
  .openapi(getServicesHaproxyConfigurationFcgiAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesHaproxyConfigurationFcgiAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesHaproxyConfigurationFcgiAppsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyConfigurationFcgiAppsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationFcgiAppsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
