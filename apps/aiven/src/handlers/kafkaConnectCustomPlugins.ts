import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrganizationOrganizationIdKafkaConnectCustomPluginFilesPluginFileIdRoute,
  deleteOrganizationOrganizationIdKafkaConnectCustomPluginsPluginNameRoute,
  getOrganizationOrganizationIdKafkaConnectCustomConnectorsRoute,
  getOrganizationOrganizationIdKafkaConnectCustomPluginClassesPluginClassNameRoute,
  getOrganizationOrganizationIdKafkaConnectCustomPluginClassesRoute,
  getOrganizationOrganizationIdKafkaConnectCustomPluginFilesPluginFileIdClassesRoute,
  getOrganizationOrganizationIdKafkaConnectCustomPluginFilesPluginFileIdRoute,
  getOrganizationOrganizationIdKafkaConnectCustomPluginFilesRoute,
  getOrganizationOrganizationIdKafkaConnectCustomPluginsPluginNameClassesRoute,
  getOrganizationOrganizationIdKafkaConnectCustomPluginsPluginNameFilesLatestRoute,
  getOrganizationOrganizationIdKafkaConnectCustomPluginsPluginNameFilesRoute,
  getOrganizationOrganizationIdKafkaConnectCustomPluginsPluginNameRoute,
  getOrganizationOrganizationIdKafkaConnectCustomPluginsRoute,
  getOrganizationOrganizationIdKafkaConnectPluginDeploymentsRoute,
  postOrganizationOrganizationIdKafkaConnectCustomPluginFilesRoute,
  putOrganizationOrganizationIdKafkaConnectCustomPluginClassesPluginClassNameRoute,
  putOrganizationOrganizationIdKafkaConnectCustomPluginFilesPluginFileIdRoute,
  putOrganizationOrganizationIdKafkaConnectCustomPluginsPluginNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const kafkaConnectCustomPluginsHandler = app
  .openapi(getOrganizationOrganizationIdKafkaConnectCustomConnectorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getOrganizationOrganizationIdKafkaConnectCustomPluginClassesPluginClassNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putOrganizationOrganizationIdKafkaConnectCustomPluginClassesPluginClassNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getOrganizationOrganizationIdKafkaConnectCustomPluginClassesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdKafkaConnectCustomPluginsPluginNameClassesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationOrganizationIdKafkaConnectCustomPluginsPluginNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdKafkaConnectCustomPluginsPluginNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationOrganizationIdKafkaConnectCustomPluginsPluginNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getOrganizationOrganizationIdKafkaConnectCustomPluginFilesPluginFileIdClassesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postOrganizationOrganizationIdKafkaConnectCustomPluginFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdKafkaConnectCustomPluginFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationOrganizationIdKafkaConnectCustomPluginFilesPluginFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdKafkaConnectCustomPluginFilesPluginFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationOrganizationIdKafkaConnectCustomPluginFilesPluginFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getOrganizationOrganizationIdKafkaConnectCustomPluginsPluginNameFilesLatestRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getOrganizationOrganizationIdKafkaConnectCustomPluginsPluginNameFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdKafkaConnectCustomPluginsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdKafkaConnectPluginDeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
