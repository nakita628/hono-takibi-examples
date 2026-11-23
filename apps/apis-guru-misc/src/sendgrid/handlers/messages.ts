import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMessagesDownloadDownloadUuidRoute,
  getMessagesMsgIdRoute,
  getMessagesRoute,
  postMessagesDownloadRoute,
} from '../routes'

const app = new OpenAPIHono()

export const messagesHandler = app
  .openapi(getMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMessagesDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMessagesDownloadDownloadUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMessagesMsgIdRoute, (c) => {
    throw new Error('Not implemented')
  })
