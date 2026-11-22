import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiTransportTurboSmsIdRoute,
  getApiTransportTurboSmsIdRoute,
  getApiTransportTurboSmsRoute,
  postApiTransportTurboSmsRoute,
  putApiTransportTurboSmsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transportTurboSmsHandler = app
  .openapi(getApiTransportTurboSmsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportTurboSmsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportTurboSmsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportTurboSmsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportTurboSmsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
