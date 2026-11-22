import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV4BroadcastMessagesIdRoute,
  getApiV4BroadcastMessagesIdRoute,
  getApiV4BroadcastMessagesRoute,
  postApiV4BroadcastMessagesRoute,
  putApiV4BroadcastMessagesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const broadcastMessagesHandler = app
  .openapi(getApiV4BroadcastMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4BroadcastMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4BroadcastMessagesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4BroadcastMessagesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4BroadcastMessagesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
