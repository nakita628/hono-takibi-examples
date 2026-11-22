import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getNetworksNetworkIdFirewalledServicesRoute,
  getNetworksNetworkIdFirewalledServicesServiceRoute,
  putNetworksNetworkIdFirewalledServicesServiceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const firewalledServicesHandler = app
  .openapi(getNetworksNetworkIdFirewalledServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdFirewalledServicesServiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdFirewalledServicesServiceRoute, (c) => {
    throw new Error('Not implemented')
  })
