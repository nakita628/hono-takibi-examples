import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1PluginsAvailableRoute,
  getApiV1PluginsNpmNamePublicSettingsRoute,
  getApiV1PluginsNpmNameRegisteredSettingsRoute,
  getApiV1PluginsNpmNameRoute,
  getApiV1PluginsRoute,
  postApiV1PluginsInstallRoute,
  postApiV1PluginsUninstallRoute,
  postApiV1PluginsUpdateRoute,
  putApiV1PluginsNpmNameSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const pluginsHandler = app
  .openapi(getApiV1PluginsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PluginsAvailableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1PluginsInstallRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1PluginsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1PluginsUninstallRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PluginsNpmNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1PluginsNpmNameSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PluginsNpmNamePublicSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PluginsNpmNameRegisteredSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
