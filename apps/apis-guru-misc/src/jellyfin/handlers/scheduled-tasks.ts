import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteScheduledTasksRunningTaskIdRoute,
  getScheduledTasksRoute,
  getScheduledTasksTaskIdRoute,
  postScheduledTasksRunningTaskIdRoute,
  postScheduledTasksTaskIdTriggersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const scheduledTasksHandler = app
  .openapi(getScheduledTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteScheduledTasksRunningTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postScheduledTasksRunningTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getScheduledTasksTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postScheduledTasksTaskIdTriggersRoute, (c) => {
    throw new Error('Not implemented')
  })
