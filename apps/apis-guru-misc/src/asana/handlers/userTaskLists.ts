import { OpenAPIHono } from '@hono/zod-openapi'
import { getUsersUserGidUserTaskListRoute, getUserTaskListsUserTaskListGidRoute } from '../routes'

const app = new OpenAPIHono()

export const userTaskListsHandler = app
  .openapi(getUserTaskListsUserTaskListGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserGidUserTaskListRoute, (c) => {
    throw new Error('Not implemented')
  })
