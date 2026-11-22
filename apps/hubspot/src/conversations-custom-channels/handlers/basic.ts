import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getConversationsCustomChannels202609Route,
  postConversationsCustomChannels202609Route,
} from '../routes'

const app = new OpenAPIHono()

export const basicHandler = app
  .openapi(getConversationsCustomChannels202609Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConversationsCustomChannels202609Route, (c) => {
    throw new Error('Not implemented')
  })
