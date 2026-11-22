import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiTransportPushyIdRoute,
  getApiTransportPushyIdRoute,
  getApiTransportPushyRoute,
  postApiTransportPushyRoute,
  putApiTransportPushyIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transportPushyHandler = app
  .openapi(getApiTransportPushyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportPushyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportPushyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportPushyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportPushyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
