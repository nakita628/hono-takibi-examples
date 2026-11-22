import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiTransportMercureIdRoute,
  getApiTransportMercureIdRoute,
  getApiTransportMercureRoute,
  postApiTransportMercureRoute,
  putApiTransportMercureIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transportMercureHandler = app
  .openapi(getApiTransportMercureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportMercureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportMercureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportMercureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportMercureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
