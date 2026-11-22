import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiTransportPlivoIdRoute,
  getApiTransportPlivoIdRoute,
  getApiTransportPlivoRoute,
  postApiTransportPlivoRoute,
  putApiTransportPlivoIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transportPlivoHandler = app
  .openapi(getApiTransportPlivoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportPlivoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportPlivoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportPlivoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportPlivoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
