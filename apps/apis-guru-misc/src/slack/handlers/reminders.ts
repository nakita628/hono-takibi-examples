import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRemindersInfoRoute,
  getRemindersListRoute,
  postRemindersAddRoute,
  postRemindersCompleteRoute,
  postRemindersDeleteRoute,
} from '../routes'

const app = new OpenAPIHono()

export const remindersHandler = app
  .openapi(postRemindersAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRemindersCompleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRemindersDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRemindersInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRemindersListRoute, (c) => {
    throw new Error('Not implemented')
  })
