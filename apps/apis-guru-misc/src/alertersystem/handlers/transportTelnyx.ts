import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiTransportTelnyxIdRoute,
  getApiTransportTelnyxIdRoute,
  getApiTransportTelnyxRoute,
  postApiTransportTelnyxRoute,
  putApiTransportTelnyxIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transportTelnyxHandler = app
  .openapi(getApiTransportTelnyxRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportTelnyxRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportTelnyxIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportTelnyxIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportTelnyxIdRoute, (c) => {
    throw new Error('Not implemented')
  })
