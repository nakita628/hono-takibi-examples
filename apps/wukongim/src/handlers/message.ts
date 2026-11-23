import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postMessageEventRoute,
  postMessageEventsyncRoute,
  postMessageRoute,
  postMessageSendbatchRoute,
  postMessageSendRoute,
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
  .openapi(postMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMessageEventRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMessageEventsyncRoute, (c) => {
    throw new Error('Not implemented')
  })
