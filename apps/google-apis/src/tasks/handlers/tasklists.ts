import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTasksV1UsersMeListsTasklistRoute,
  getTasksV1UsersMeListsRoute,
  getTasksV1UsersMeListsTasklistRoute,
  patchTasksV1UsersMeListsTasklistRoute,
  postTasksV1UsersMeListsRoute,
  putTasksV1UsersMeListsTasklistRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tasklistsHandler = app
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
