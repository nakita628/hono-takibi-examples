import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMessagesIdRoute,
  getMessagesIdRoute,
  getMessagesRoute,
  patchMessagesIdRoute,
  postMessagesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const messagesHandler = app
  .openapi(getMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMessagesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMessagesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMessagesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
