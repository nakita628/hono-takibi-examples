import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiTransportRocketChatIdRoute,
  getApiTransportRocketChatIdRoute,
  getApiTransportRocketChatRoute,
  postApiTransportRocketChatRoute,
  putApiTransportRocketChatIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transportRocketChatHandler = app
  .openapi(getApiTransportRocketChatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportRocketChatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportRocketChatIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportRocketChatIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportRocketChatIdRoute, (c) => {
    throw new Error('Not implemented')
  })
