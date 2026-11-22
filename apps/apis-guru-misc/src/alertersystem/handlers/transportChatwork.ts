import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiTransportChatworkIdRoute,
  getApiTransportChatworkIdRoute,
  getApiTransportChatworkRoute,
  postApiTransportChatworkRoute,
  putApiTransportChatworkIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transportChatworkHandler = app
  .openapi(getApiTransportChatworkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportChatworkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportChatworkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportChatworkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportChatworkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
