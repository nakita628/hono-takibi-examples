import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSettingsAllowedNetworksNodeIdRoute,
  getSettingsRoute,
  getSettingsSettingIdRoute,
  postSettingsAllowedNetworksNodeIdDiffRoute,
  postSettingsAllowedNetworksNodeIdRoute,
  postSettingsSettingIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const settingsHandler = app
  .openapi(getSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsAllowedNetworksNodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsAllowedNetworksNodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsAllowedNetworksNodeIdDiffRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsSettingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsSettingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
