import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTasksSchedulesIdIndexRoute,
  getTasksSchedulesIndexRoute,
  getTasksTasksIndexRoute,
  getTasksTasksMessageIdIndexRoute,
  getTasksTasksStatusIndexRoute,
  getTasksWorkersIndexRoute,
  patchTasksSchedulesIdIndexRoute,
  postTasksSchedulesIdSendIndexRoute,
  postTasksTasksMessageIdRetryIndexRoute,
  putTasksSchedulesIdIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tasksHandler = app
  .openapi(getTasksSchedulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTasksSchedulesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTasksSchedulesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTasksSchedulesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTasksSchedulesIdSendIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTasksTasksIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTasksTasksMessageIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTasksTasksMessageIdRetryIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTasksTasksStatusIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTasksWorkersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
