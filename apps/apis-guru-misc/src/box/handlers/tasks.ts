import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTasksTaskIdRoute,
  getTasksTaskIdAssignmentsRoute,
  getTasksTaskIdRoute,
  postTasksRoute,
  putTasksTaskIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tasksHandler = app
  .openapi(postTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTasksTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTasksTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTasksTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTasksTaskIdAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
