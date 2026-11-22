import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionListMessageMoveTasksRoute, postActionListMessageMoveTasksRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionListMessageMoveTasksHandler = app
  .openapi(getActionListMessageMoveTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionListMessageMoveTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
