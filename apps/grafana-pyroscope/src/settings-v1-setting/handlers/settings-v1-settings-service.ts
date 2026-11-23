import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postSettingsV1SettingsServiceDeleteRoute,
  postSettingsV1SettingsServiceGetRoute,
  postSettingsV1SettingsServiceSetRoute,
} from '../routes'

const app = new OpenAPIHono()

export const settingsV1SettingsServiceHandler = app
  .openapi(postSettingsV1SettingsServiceDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsV1SettingsServiceGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsV1SettingsServiceSetRoute, (c) => {
    throw new Error('Not implemented')
  })
