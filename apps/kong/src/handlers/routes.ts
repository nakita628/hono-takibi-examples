import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRoutesRouteIdOrNameFilterChainIdRoute,
  deleteRoutesRouteIdOrNamePluginsPluginIdRoute,
  deleteRoutesRouteIdOrNameRoute,
  getRoutesRoute,
  getRoutesRouteIdOrNameFilterChainsFilterChainIdRoute,
  getRoutesRouteIdOrNameFilterChainsRoute,
  getRoutesRouteIdOrNamePluginsPluginIdRoute,
  getRoutesRouteIdOrNamePluginsRoute,
  getRoutesRouteIdOrNameRoute,
  patchRoutesRouteIdOrNameFilterChainsRoute,
  patchRoutesRouteIdOrNamePluginsPluginIdRoute,
  patchRoutesRouteIdOrNameRoute,
  postRoutesRoute,
  postRoutesRouteIdOrNameFilterChainsRoute,
  postRoutesRouteIdOrNamePluginsRoute,
  putRoutesRouteIdOrNameFilterChainsFilterChainIdRoute,
  putRoutesRouteIdOrNamePluginsPluginIdRoute,
  putRoutesRouteIdOrNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const routesHandler = app
  .openapi(getRoutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRoutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRoutesRouteIdOrNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRoutesRouteIdOrNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchRoutesRouteIdOrNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRoutesRouteIdOrNameRoute, (c) => {
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
  .openapi(postRoutesRouteIdOrNameFilterChainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRoutesRouteIdOrNameFilterChainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchRoutesRouteIdOrNameFilterChainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRoutesRouteIdOrNameFilterChainsFilterChainIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRoutesRouteIdOrNameFilterChainsFilterChainIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRoutesRouteIdOrNameFilterChainIdRoute, (c) => {
    throw new Error('Not implemented')
  })
