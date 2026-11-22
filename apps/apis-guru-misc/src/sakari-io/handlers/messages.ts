import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1AccountsAccountIdMessagesMessageIdRoute,
  getV1AccountsAccountIdMessagesRoute,
  postV1AccountsAccountIdMessagesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const messagesHandler = app
  .openapi(getV1AccountsAccountIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AccountsAccountIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountsAccountIdMessagesMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
