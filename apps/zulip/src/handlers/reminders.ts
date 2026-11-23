import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteRemindersReminderIdRoute, getRemindersRoute, postRemindersRoute } from '../routes'

const app = new OpenAPIHono()

export const remindersHandler = app
  .openapi(getRemindersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRemindersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRemindersReminderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
