import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTaskRunsTaskRunIdRoute,
  getTaskRunsEventsRoute,
  getTaskRunsRoute,
  getTaskRunsTaskRunIdRoute,
  postTaskRunsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const taskRunsHandler = app
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
