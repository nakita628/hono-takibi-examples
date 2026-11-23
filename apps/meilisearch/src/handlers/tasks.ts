import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTasksRoute,
  getTasksRoute,
  getTasksTaskUidRoute,
  postTasksCancelRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tasksHandler = app
  .openapi(getTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTasksCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTasksTaskUidRoute, (c) => {
    throw new Error('Not implemented')
  })
