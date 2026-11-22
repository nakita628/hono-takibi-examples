import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV4SystemConfigSettingsAuthRoute,
  getV4SystemConfigSettingsDefaultsRoute,
  getV4SystemConfigSettingsEventlogRoute,
  getV4SystemConfigSettingsGeneralRoute,
  getV4SystemConfigSettingsInfrastructureRoute,
  getV4SystemConfigSettingsSyslogRoute,
  putV4SystemConfigSettingsAuthRoute,
  putV4SystemConfigSettingsDefaultsRoute,
  putV4SystemConfigSettingsEventlogRoute,
  putV4SystemConfigSettingsGeneralRoute,
  putV4SystemConfigSettingsSyslogRoute,
} from '../routes'

const app = new OpenAPIHono()

export const systemSettingsConfigHandler = app
  .openapi(getV4SystemConfigSettingsAuthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4SystemConfigSettingsAuthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4SystemConfigSettingsDefaultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4SystemConfigSettingsDefaultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4SystemConfigSettingsEventlogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4SystemConfigSettingsEventlogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4SystemConfigSettingsGeneralRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4SystemConfigSettingsGeneralRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4SystemConfigSettingsInfrastructureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4SystemConfigSettingsSyslogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4SystemConfigSettingsSyslogRoute, (c) => {
    throw new Error('Not implemented')
  })
