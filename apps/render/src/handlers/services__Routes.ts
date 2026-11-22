import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteServicesServiceIdRoutesRouteIdRoute,
  getServicesServiceIdRoutesRoute,
  patchServicesServiceIdRoutesRouteIdRoute,
  postServicesServiceIdRoutesRoute,
  putServicesServiceIdRoutesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const services__RoutesHandler = app
  .openapi(getServicesServiceIdRoutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesServiceIdRoutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesServiceIdRoutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchServicesServiceIdRoutesRouteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesServiceIdRoutesRouteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
