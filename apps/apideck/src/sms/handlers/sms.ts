import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSmsMessagesIdRoute,
  getSmsMessagesIdRoute,
  getSmsMessagesRoute,
  patchSmsMessagesIdRoute,
  postSmsMessagesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const smsHandler = app
  .openapi(getSmsMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSmsMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSmsMessagesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSmsMessagesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSmsMessagesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
