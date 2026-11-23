import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getConversationsIDMessagesRoute,
  getConversationsIDRoute,
  getConversationsIDStatusesRoute,
  getConversationsStatusesRoute,
  patchConversationsIDStatusesRoute,
  postConversationsIDMessagesRoute,
  postConversationsIDSchedulesRoute,
  postConversationsIDSearchesRoute,
  postConversationsSchedulesRoute,
  postConversationsSearchesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const conversationsHandler = app
  .openapi(postConversationsSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConversationsSearchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConversationsStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConversationsIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConversationsIDMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConversationsIDMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConversationsIDSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConversationsIDSearchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConversationsIDStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchConversationsIDStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
