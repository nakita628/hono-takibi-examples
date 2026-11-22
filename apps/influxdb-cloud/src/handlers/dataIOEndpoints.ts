import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTasksRoute,
  getTasksTaskIDRoute,
  postDeleteRoute,
  postQueryRoute,
  postTasksRoute,
  postTasksTaskIDRunsRoute,
  postWriteRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dataIOEndpointsHandler = app
  .openapi(postWriteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTasksTaskIDRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTasksTaskIDRoute, (c) => {
    throw new Error('Not implemented')
  })
