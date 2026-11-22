import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1SettingsNameRoute,
  getV1SettingsCustomerRoute,
  getV1SettingsDatasourcesRoute,
  getV1SettingsNameRoute,
  getV1SettingsSearchapplicationsRoute,
  patchV1SettingsCustomerRoute,
  patchV1SettingsNameRoute,
  postV1SettingsDatasourcesRoute,
  postV1SettingsNameResetRoute,
  postV1SettingsSearchapplicationsRoute,
  putV1SettingsNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const settingsHandler = app
  .openapi(getV1SettingsCustomerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1SettingsCustomerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SettingsDatasourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SettingsDatasourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SettingsSearchapplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SettingsSearchapplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1SettingsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SettingsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1SettingsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1SettingsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SettingsNameResetRoute, (c) => {
    throw new Error('Not implemented')
  })
