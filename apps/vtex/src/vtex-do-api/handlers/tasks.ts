import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTasksRoute,
  getTasksTaskIdRoute,
  postTasksRoute,
  postTasksTaskIdCommentsRoute,
  putTasksTaskIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tasksHandler = app
  .openapi(getTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTasksTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTasksTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTasksTaskIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
