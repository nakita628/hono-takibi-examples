import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTasksTaskIdRoute,
  getTasksTaskIdContactsRoute,
  getTasksTaskIdCustomFieldsRoute,
  getTasksTaskIdDatesRoute,
  getTasksTaskIdFilesRoute,
  getTasksTaskIdInstructionsRoute,
  getTasksTaskIdProgressRoute,
  postTasksTaskIdFilesInputRoute,
  postTasksTaskIdStartRoute,
  putTasksTaskIdClientTaskPONumberRoute,
  putTasksTaskIdContactsRoute,
  putTasksTaskIdCustomFieldsRoute,
  putTasksTaskIdDatesRoute,
  putTasksTaskIdInstructionsRoute,
  putTasksTaskIdNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tasksClassicHandler = app
  .openapi(deleteTasksTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTasksTaskIdClientTaskPONumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTasksTaskIdContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTasksTaskIdContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTasksTaskIdCustomFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTasksTaskIdCustomFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTasksTaskIdDatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTasksTaskIdDatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTasksTaskIdFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTasksTaskIdFilesInputRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTasksTaskIdInstructionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTasksTaskIdInstructionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTasksTaskIdNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTasksTaskIdProgressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTasksTaskIdStartRoute, (c) => {
    throw new Error('Not implemented')
  })
