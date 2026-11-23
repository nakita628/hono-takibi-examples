import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserTaskListsUserTaskListGidRoute,
  getUserTaskListsUserTaskListGidTasksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userTaskListsHandler = app
  .openapi(getUserTaskListsUserTaskListGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserTaskListsUserTaskListGidTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
