import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2TasksRoute,
  getV2TasksTaskIdEventsRoute,
  getV2TasksTaskIdRoute,
  postV2TasksRoute,
  postV2TasksTaskIdCancelRoute,
  postV2TasksTaskIdRetryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tasksHandler = app
  .openapi(getV2TasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2TasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2TasksTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2TasksTaskIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2TasksTaskIdRetryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2TasksTaskIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
