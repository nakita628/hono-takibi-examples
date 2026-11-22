import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1MessagesMessageIdRoute,
  deleteV1MessagesTransactionTransactionIdRoute,
  getV1MessagesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const messagesHandler = app
  .openapi(getV1MessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1MessagesMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1MessagesTransactionTransactionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
