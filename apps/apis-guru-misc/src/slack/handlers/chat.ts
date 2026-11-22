import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getChatGetPermalinkRoute,
  postChatDeleteRoute,
  postChatDeleteScheduledMessageRoute,
  postChatMeMessageRoute,
  postChatPostEphemeralRoute,
  postChatPostMessageRoute,
  postChatScheduleMessageRoute,
  postChatUnfurlRoute,
  postChatUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const chatHandler = app
  .openapi(postChatDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChatDeleteScheduledMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChatGetPermalinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChatMeMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChatPostEphemeralRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChatPostMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChatScheduleMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChatUnfurlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChatUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
