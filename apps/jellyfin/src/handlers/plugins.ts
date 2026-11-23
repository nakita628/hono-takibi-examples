import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePluginsPluginIdRoute,
  deletePluginsPluginIdVersionRoute,
  getPluginsPluginIdConfigurationRoute,
  getPluginsPluginIdVersionImageRoute,
  getPluginsRoute,
  postPluginsPluginIdConfigurationRoute,
  postPluginsPluginIdManifestRoute,
  postPluginsPluginIdVersionDisableRoute,
  postPluginsPluginIdVersionEnableRoute,
} from '../routes'

const app = new OpenAPIHono()

export const pluginsHandler = app
  .openapi(getPluginsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePluginsPluginIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePluginsPluginIdVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsPluginIdVersionDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsPluginIdVersionEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsPluginIdVersionImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsPluginIdConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsPluginIdConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsPluginIdManifestRoute, (c) => {
    throw new Error('Not implemented')
  })
