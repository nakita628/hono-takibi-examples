import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTopicsPrivateMessagesSentUsernameJsonRoute,
  getTopicsPrivateMessagesUsernameJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const topicsHandler = app
  .openapi(getTopicsPrivateMessagesUsernameJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTopicsPrivateMessagesSentUsernameJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
