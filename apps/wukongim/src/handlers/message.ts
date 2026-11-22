import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getChannelLastMessageRoute,
  getChannelMaxMessageSeqRoute,
  postChannelMessagesyncRoute,
  postMessageRoute,
  postMessageSendbatchRoute,
  postMessageSendRoute,
  postMessagesRoute,
  postMessageSyncackRoute,
  postMessageSyncRoute,
} from '../routes'

const app = new OpenAPIHono()

export const messageHandler = app
  .openapi(postMessageSendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMessageSendbatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMessageSyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMessageSyncackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChannelMessagesyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChannelMaxMessageSeqRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChannelLastMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
