import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteConsumersConsumerUsernameOrIdPluginsPluginIdRoute,
  deletePluginsPluginIdRoute,
  deleteRoutesRouteIdOrNamePluginsPluginIdRoute,
  deleteServicesServiceIdOrNamePluginsPluginIdRoute,
  getConsumersConsumerUsernameOrIdPluginsPluginIdRoute,
  getConsumersConsumerUsernameOrIdPluginsRoute,
  getPluginsPluginIdRoute,
  getPluginsRoute,
  getRoutesRouteIdOrNamePluginsPluginIdRoute,
  getRoutesRouteIdOrNamePluginsRoute,
  getServicesServiceIdOrNamePluginsPluginIdRoute,
  getServicesServiceIdOrNamePluginsRoute,
  patchConsumersConsumerUsernameOrIdPluginsPluginIdRoute,
  patchPluginsPluginIdRoute,
  patchRoutesRouteIdOrNamePluginsPluginIdRoute,
  patchServicesServiceIdOrNamePluginsPluginIdRoute,
  postConsumersConsumerUsernameOrIdPluginsRoute,
  postPluginsRoute,
  postRoutesRouteIdOrNamePluginsRoute,
  postServicesServiceIdOrNamePluginsRoute,
  putConsumersConsumerUsernameOrIdPluginsPluginIdRoute,
  putPluginsPluginIdRoute,
  putRoutesRouteIdOrNamePluginsPluginIdRoute,
  putServicesServiceIdOrNamePluginsPluginIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const pluginsHandler = app
  .openapi(getConsumersConsumerUsernameOrIdPluginsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConsumersConsumerUsernameOrIdPluginsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteConsumersConsumerUsernameOrIdPluginsPluginIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConsumersConsumerUsernameOrIdPluginsPluginIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchConsumersConsumerUsernameOrIdPluginsPluginIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConsumersConsumerUsernameOrIdPluginsPluginIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPluginsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePluginsPluginIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsPluginIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPluginsPluginIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPluginsPluginIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRoutesRouteIdOrNamePluginsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRoutesRouteIdOrNamePluginsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRoutesRouteIdOrNamePluginsPluginIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRoutesRouteIdOrNamePluginsPluginIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchRoutesRouteIdOrNamePluginsPluginIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRoutesRouteIdOrNamePluginsPluginIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesServiceIdOrNamePluginsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesServiceIdOrNamePluginsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesServiceIdOrNamePluginsPluginIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesServiceIdOrNamePluginsPluginIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchServicesServiceIdOrNamePluginsPluginIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesServiceIdOrNamePluginsPluginIdRoute, (c) => {
    throw new Error('Not implemented')
  })
