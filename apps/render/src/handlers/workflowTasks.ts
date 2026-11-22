import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTaskRunsTaskRunIdRoute,
  getTaskRunsEventsRoute,
  getTaskRunsRoute,
  getTaskRunsTaskRunIdRoute,
  getTasksRoute,
  getTasksTaskIdRoute,
  postTaskRunsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const workflowTasksHandler = app
  .openapi(getTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTasksTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTaskRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTaskRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTaskRunsEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTaskRunsTaskRunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTaskRunsTaskRunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
