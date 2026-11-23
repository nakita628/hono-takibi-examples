import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRoutingActiveRoute,
  getRoutingDefaultProfileRoute,
  getRoutingDefaultRoute,
  getRoutingRoute,
  getRoutingRoutingAlgorithmIdRoute,
  postRoutingDeactivateRoute,
  postRoutingDefaultProfileProfileIdRoute,
  postRoutingDefaultRoute,
  postRoutingRoute,
  postRoutingRoutingAlgorithmIdActivateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const routingHandler = app
  .openapi(postRoutingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRoutingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRoutingRoutingAlgorithmIdActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRoutingRoutingAlgorithmIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRoutingDeactivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRoutingDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRoutingDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRoutingActiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRoutingDefaultProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRoutingDefaultProfileProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
