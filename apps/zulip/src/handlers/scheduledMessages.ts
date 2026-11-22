import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteScheduledMessagesScheduledMessageIdRoute,
  getScheduledMessagesRoute,
  patchScheduledMessagesScheduledMessageIdRoute,
  postScheduledMessagesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const scheduledMessagesHandler = app
  .openapi(getScheduledMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postScheduledMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchScheduledMessagesScheduledMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteScheduledMessagesScheduledMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
