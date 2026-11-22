import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMessagesIdRoute,
  postMessagesLongCodeRoute,
  postMessagesNumberPoolRoute,
  postMessagesRoute,
  postMessagesShortCodeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const messagesHandler = app
  .openapi(postMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMessagesLongCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMessagesNumberPoolRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMessagesShortCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMessagesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
