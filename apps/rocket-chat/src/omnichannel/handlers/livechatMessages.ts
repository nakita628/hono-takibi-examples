import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1LivechatMessageIdRoute,
  getApiV1LivechatMessageIdRoute,
  getApiV1LivechatMessagesHistoryRidRoute,
  getApiV1LivechatRidMessagesRoute,
  postApiV1LivechatMessageRoute,
  postApiV1LivechatMessagesRoute,
  postApiV1LivechatOfflineMessageRoute,
  putApiV1LivechatMessageIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const livechatMessagesHandler = app
  .openapi(postApiV1LivechatMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LivechatMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1LivechatMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1LivechatMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatMessagesHistoryRidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LivechatOfflineMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatRidMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
