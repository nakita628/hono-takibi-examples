import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTasksTaskIdRoute,
  getFilesFileIdTasksRoute,
  getTasksTaskIdRoute,
  postTasksRoute,
  putTasksTaskIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tasksHandler = app
  .openapi(getFilesFileIdTasksRoute, (c) => {
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
  .openapi(deleteTasksTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
