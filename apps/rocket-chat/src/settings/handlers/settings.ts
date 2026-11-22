import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1ServiceConfigurationsRoute,
  getApiV1SettingsIdRoute,
  getApiV1SettingsOauthRoute,
  getApiV1SettingsPublicRoute,
  getApiV1SettingsRoute,
  getApiV1SetupWizardParametersRoute,
  postApiV1SettingsAddCustomOAuthRoute,
  postApiV1SettingsIdRoute,
  postApiV1SettingsRefreshOAuthServicesRoute,
  postApiV1SettingsRemoveCustomOAuthRoute,
  postApiV1SettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const settingsHandler = app
  .openapi(getApiV1SettingsPublicRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SettingsOauthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SettingsAddCustomOAuthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SettingsRemoveCustomOAuthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SettingsRefreshOAuthServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SettingsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SettingsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SetupWizardParametersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ServiceConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
