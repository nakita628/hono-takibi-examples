import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePackagesInstallingPackageIdRoute,
  deletePluginsPluginIdRoute,
  deletePluginsPluginIdVersionRoute,
  getPackagesNameRoute,
  getPackagesRoute,
  getPluginsPluginIdConfigurationRoute,
  getPluginsPluginIdVersionImageRoute,
  getPluginsRoute,
  getRepositoriesRoute,
  getWebConfigurationPageRoute,
  getWebConfigurationPagesRoute,
  postPackagesInstalledNameRoute,
  postPluginsPluginIdConfigurationRoute,
  postPluginsPluginIdManifestRoute,
  postPluginsPluginIdVersionDisableRoute,
  postPluginsPluginIdVersionEnableRoute,
  postRepositoriesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const pluginHandler = app
  .openapi(getWebConfigurationPageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebConfigurationPagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPackagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPackagesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPackagesInstalledNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePackagesInstallingPackageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
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
