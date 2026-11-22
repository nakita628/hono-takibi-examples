import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2TaskListTemplatesTaskListTemplateIdRoute,
  getApiV2TaskListTemplatesRoute,
  getApiV2TaskListTemplatesTaskListTemplateIdRoute,
  getApiV2TaskListTemplatesTaskListTemplateIdTasksRoute,
  postApiV2TaskListTemplatesRoute,
  putApiV2TaskListTemplatesTaskListTemplateIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const taskListTemplatesHandler = app
  .openapi(getApiV2TaskListTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2TaskListTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TaskListTemplatesTaskListTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2TaskListTemplatesTaskListTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2TaskListTemplatesTaskListTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TaskListTemplatesTaskListTemplateIdTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
