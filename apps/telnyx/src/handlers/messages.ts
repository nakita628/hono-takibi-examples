import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMessagesIdRoute,
  getMessagesGroupMessageIdRoute,
  getMessagesIdRoute,
  postMessagesAlphanumericSenderId2Route,
  postMessagesAlphanumericSenderIdRoute,
  postMessagesGroupMmsRoute,
  postMessagesLongCodeRoute,
  postMessagesNumberPoolRoute,
  postMessagesRoute,
  postMessagesScheduleRoute,
  postMessagesShortCodeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const messagesHandler = app
  .openapi(postMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMessagesAlphanumericSenderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMessagesAlphanumericSenderId2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMessagesGroupMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMessagesGroupMmsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMessagesLongCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMessagesNumberPoolRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMessagesScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMessagesShortCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMessagesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMessagesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
