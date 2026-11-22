import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTasksV1ListsTasklistTasksTaskRoute,
  getTasksV1ListsTasklistTasksRoute,
  getTasksV1ListsTasklistTasksTaskRoute,
  patchTasksV1ListsTasklistTasksTaskRoute,
  postTasksV1ListsTasklistClearRoute,
  postTasksV1ListsTasklistTasksRoute,
  postTasksV1ListsTasklistTasksTaskMoveRoute,
  putTasksV1ListsTasklistTasksTaskRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tasksHandler = app
  .openapi(postTasksV1ListsTasklistClearRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTasksV1ListsTasklistTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTasksV1ListsTasklistTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTasksV1ListsTasklistTasksTaskRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTasksV1ListsTasklistTasksTaskRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTasksV1ListsTasklistTasksTaskRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTasksV1ListsTasklistTasksTaskRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTasksV1ListsTasklistTasksTaskMoveRoute, (c) => {
    throw new Error('Not implemented')
  })
