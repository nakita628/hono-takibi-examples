import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteServicesServiceIdOrNameFilterChainsFilterChainIdRoute,
  deleteServicesServiceIdOrNamePluginsPluginIdRoute,
  deleteServicesServiceIdOrNameRoute,
  deleteServicesServiceIdOrNameRoutesRouteIdOrNameRoute,
  getServicesRoute,
  getServicesServiceIdOrNameFilterChainsRoute,
  getServicesServiceIdOrNamePluginsPluginIdRoute,
  getServicesServiceIdOrNamePluginsRoute,
  getServicesServiceIdOrNameRoute,
  getServicesServiceIdOrNameRoutesRoute,
  getServicesServiceIdOrNameRoutesRouteIdOrNameRoute,
  patchServicesServiceIdOrNamePluginsPluginIdRoute,
  patchServicesServiceIdOrNameRoute,
  patchServicesServiceIdOrNameRoutesRouteIdOrNameRoute,
  postServicesRoute,
  postServicesServiceIdOrNameFilterChainsRoute,
  postServicesServiceIdOrNamePluginsRoute,
  postServicesServiceIdOrNameRoutesRoute,
  putServicesServiceIdOrNamePluginsPluginIdRoute,
  putServicesServiceIdOrNameRoute,
  putServicesServiceIdOrNameRoutesRouteIdOrNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const servicesHandler = app
  .openapi(getServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesServiceIdOrNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesServiceIdOrNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchServicesServiceIdOrNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesServiceIdOrNameRoute, (c) => {
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
  .openapi(getServicesServiceIdOrNameRoutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesServiceIdOrNameRoutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesServiceIdOrNameRoutesRouteIdOrNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesServiceIdOrNameRoutesRouteIdOrNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchServicesServiceIdOrNameRoutesRouteIdOrNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesServiceIdOrNameRoutesRouteIdOrNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesServiceIdOrNameFilterChainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesServiceIdOrNameFilterChainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesServiceIdOrNameFilterChainsFilterChainIdRoute, (c) => {
    throw new Error('Not implemented')
  })
