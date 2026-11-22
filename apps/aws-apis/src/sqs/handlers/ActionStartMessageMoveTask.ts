import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionStartMessageMoveTaskRoute, postActionStartMessageMoveTaskRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionStartMessageMoveTaskHandler = app
  .openapi(getActionStartMessageMoveTaskRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionStartMessageMoveTaskRoute, (c) => {
    throw new Error('Not implemented')
  })
