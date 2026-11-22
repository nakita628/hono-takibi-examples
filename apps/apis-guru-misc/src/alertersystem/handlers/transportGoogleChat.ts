import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiTransportGoogleChatIdRoute,
  getApiTransportGoogleChatIdRoute,
  getApiTransportGoogleChatRoute,
  postApiTransportGoogleChatRoute,
  putApiTransportGoogleChatIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transportGoogleChatHandler = app
  .openapi(getApiTransportGoogleChatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportGoogleChatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportGoogleChatIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportGoogleChatIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportGoogleChatIdRoute, (c) => {
    throw new Error('Not implemented')
  })
