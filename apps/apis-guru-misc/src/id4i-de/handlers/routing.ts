import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1RoutingfilesId4nRoute,
  getApiV1RoutingfilesId4nRoutesTypeRoute,
  getApiV1RoutingfilesId4nRouteTypeRoute,
  putApiV1RoutingfilesId4nRoute,
} from '../routes'

const app = new OpenAPIHono()

export const routingHandler = app
  .openapi(getApiV1RoutingfilesId4nRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1RoutingfilesId4nRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RoutingfilesId4nRouteTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RoutingfilesId4nRoutesTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
