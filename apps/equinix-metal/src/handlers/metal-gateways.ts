import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMetalGatewaysIdRoute,
  getMetalGatewaysIdBgpDynamicNeighborsRoute,
  getMetalGatewaysIdIpsRoute,
  getMetalGatewaysIdRoute,
  postMetalGatewaysIdBgpDynamicNeighborsRoute,
  postMetalGatewaysIdIpsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const metalGatewaysHandler = app
  .openapi(deleteMetalGatewaysIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetalGatewaysIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetalGatewaysIdBgpDynamicNeighborsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMetalGatewaysIdBgpDynamicNeighborsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetalGatewaysIdIpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMetalGatewaysIdIpsRoute, (c) => {
    throw new Error('Not implemented')
  })
