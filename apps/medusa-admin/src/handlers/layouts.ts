import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminLayoutsZoneConfigurationRoute,
  getAdminLayoutsConfigurationsRoute,
  getAdminLayoutsZoneConfigurationRoute,
  postAdminLayoutsZoneConfigurationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const layoutsHandler = app
  .openapi(getAdminLayoutsConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminLayoutsZoneConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminLayoutsZoneConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminLayoutsZoneConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
