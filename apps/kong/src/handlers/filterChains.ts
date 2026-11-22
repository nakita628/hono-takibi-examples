import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFilterChainsFilterChainIdRoute,
  deleteRoutesRouteIdOrNameFilterChainIdRoute,
  deleteServicesServiceIdOrNameFilterChainsFilterChainIdRoute,
  getFilterChainsFilterChainIdRoute,
  getFilterChainsRoute,
  getRoutesRouteIdOrNameFilterChainsFilterChainIdRoute,
  getRoutesRouteIdOrNameFilterChainsRoute,
  getServicesServiceIdOrNameFilterChainsRoute,
  patchFilterChainsFilterChainIdRoute,
  patchRoutesRouteIdOrNameFilterChainsRoute,
  postFilterChainsRoute,
  postRoutesRouteIdOrNameFilterChainsRoute,
  postServicesServiceIdOrNameFilterChainsRoute,
  putFilterChainsFilterChainIdRoute,
  putRoutesRouteIdOrNameFilterChainsFilterChainIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const filterChainsHandler = app
  .openapi(postFilterChainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFilterChainsRoute, (c) => {
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
  .openapi(postServicesServiceIdOrNameFilterChainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesServiceIdOrNameFilterChainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFilterChainsFilterChainIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchFilterChainsFilterChainIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putFilterChainsFilterChainIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFilterChainsFilterChainIdRoute, (c) => {
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
  .openapi(deleteServicesServiceIdOrNameFilterChainsFilterChainIdRoute, (c) => {
    throw new Error('Not implemented')
  })
