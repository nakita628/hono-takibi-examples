import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRoutesRouteIdOrNameRoute,
  deleteServicesServiceIdOrNameRoutesRouteIdOrNameRoute,
  getRoutesRoute,
  getRoutesRouteIdOrNameRoute,
  getServicesServiceIdOrNameRoutesRoute,
  getServicesServiceIdOrNameRoutesRouteIdOrNameRoute,
  patchRoutesRouteIdOrNameRoute,
  patchServicesServiceIdOrNameRoutesRouteIdOrNameRoute,
  postRoutesRoute,
  postServicesServiceIdOrNameRoutesRoute,
  putRoutesRouteIdOrNameRoute,
  putServicesServiceIdOrNameRoutesRouteIdOrNameRoute,
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
