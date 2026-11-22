import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1TasksNameRoute,
  getV1TasksNameRoute,
  getV1TasksRoute,
  postV1TasksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tasksHandler = app
  .openapi(postV1TasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1TasksNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TasksNameRoute, (c) => {
    throw new Error('Not implemented')
  })
