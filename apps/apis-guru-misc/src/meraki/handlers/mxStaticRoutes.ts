import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteNetworksNetworkIdStaticRoutesStaticRouteIdRoute,
  getNetworksNetworkIdStaticRoutesRoute,
  getNetworksNetworkIdStaticRoutesStaticRouteIdRoute,
  postNetworksNetworkIdStaticRoutesRoute,
  putNetworksNetworkIdStaticRoutesStaticRouteIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mxStaticRoutesHandler = app
  .openapi(getNetworksNetworkIdStaticRoutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdStaticRoutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNetworksNetworkIdStaticRoutesStaticRouteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdStaticRoutesStaticRouteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdStaticRoutesStaticRouteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
