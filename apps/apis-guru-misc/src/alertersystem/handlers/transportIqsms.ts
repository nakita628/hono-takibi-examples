import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiTransportIqsmsIdRoute,
  getApiTransportIqsmsIdRoute,
  getApiTransportIqsmsRoute,
  postApiTransportIqsmsRoute,
  putApiTransportIqsmsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transportIqsmsHandler = app
  .openapi(getApiTransportIqsmsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportIqsmsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportIqsmsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportIqsmsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportIqsmsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
