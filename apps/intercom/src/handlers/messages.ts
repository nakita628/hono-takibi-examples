import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMessagesStatusRoute,
  getMessagesWhatsappStatusRoute,
  postMessagesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const messagesHandler = app
  .openapi(postMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMessagesWhatsappStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMessagesStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
