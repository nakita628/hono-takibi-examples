import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiTransportPushoverIdRoute,
  getApiTransportPushoverIdRoute,
  getApiTransportPushoverRoute,
  postApiTransportPushoverRoute,
  putApiTransportPushoverIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transportPushoverHandler = app
  .openapi(getApiTransportPushoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportPushoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportPushoverIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportPushoverIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportPushoverIdRoute, (c) => {
    throw new Error('Not implemented')
  })
