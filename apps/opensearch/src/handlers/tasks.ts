import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTasksRoute,
  getTasksTaskIdRoute,
  postTasksCancelRoute,
  postTasksTaskIdCancelRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tasksHandler = app
  .openapi(getTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTasksCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTasksTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTasksTaskIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
