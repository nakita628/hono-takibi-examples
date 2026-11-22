import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiTransportMessageBirdIdRoute,
  getApiTransportMessageBirdIdRoute,
  getApiTransportMessageBirdRoute,
  postApiTransportMessageBirdRoute,
  putApiTransportMessageBirdIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transportMessageBirdHandler = app
  .openapi(getApiTransportMessageBirdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportMessageBirdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportMessageBirdIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportMessageBirdIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportMessageBirdIdRoute, (c) => {
    throw new Error('Not implemented')
  })
