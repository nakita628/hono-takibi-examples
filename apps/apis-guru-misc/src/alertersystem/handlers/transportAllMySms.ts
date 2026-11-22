import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiTransportAllMySmsIdRoute,
  getApiTransportAllMySmsIdRoute,
  getApiTransportAllMySmsRoute,
  postApiTransportAllMySmsRoute,
  putApiTransportAllMySmsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transportAllMySmsHandler = app
  .openapi(getApiTransportAllMySmsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportAllMySmsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportAllMySmsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportAllMySmsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportAllMySmsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
