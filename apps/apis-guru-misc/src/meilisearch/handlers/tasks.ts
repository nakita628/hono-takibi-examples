import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteTasksRoute, getTasks0Route, getTasksRoute, postTasksCancelRoute } from '../routes'

const app = new OpenAPIHono()

export const tasksHandler = app
  .openapi(deleteTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTasks0Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTasksCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
