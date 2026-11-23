import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTasksV1ListsTasklistTasksTaskRoute,
  deleteTasksV1UsersMeListsTasklistRoute,
  getTasksV1ListsTasklistTasksRoute,
  getTasksV1ListsTasklistTasksTaskRoute,
  getTasksV1UsersMeListsRoute,
  getTasksV1UsersMeListsTasklistRoute,
  patchTasksV1ListsTasklistTasksTaskRoute,
  patchTasksV1UsersMeListsTasklistRoute,
  postTasksV1ListsTasklistClearRoute,
  postTasksV1ListsTasklistTasksRoute,
  postTasksV1ListsTasklistTasksTaskMoveRoute,
  postTasksV1UsersMeListsRoute,
  putTasksV1ListsTasklistTasksTaskRoute,
  putTasksV1UsersMeListsTasklistRoute,
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
  .openapi(getTasksV1UsersMeListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTasksV1UsersMeListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTasksV1UsersMeListsTasklistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTasksV1UsersMeListsTasklistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTasksV1UsersMeListsTasklistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTasksV1UsersMeListsTasklistRoute, (c) => {
    throw new Error('Not implemented')
  })
