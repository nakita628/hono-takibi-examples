import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiTransportTelegramIdRoute,
  getApiTransportTelegramIdRoute,
  getApiTransportTelegramRoute,
  postApiTransportTelegramRoute,
  putApiTransportTelegramIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transportTelegramHandler = app
  .openapi(getApiTransportTelegramRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportTelegramRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportTelegramIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportTelegramIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportTelegramIdRoute, (c) => {
    throw new Error('Not implemented')
  })
