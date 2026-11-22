import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCancelMessageMoveTaskRoute,
  postActionCancelMessageMoveTaskRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionCancelMessageMoveTaskHandler = app
  .openapi(getActionCancelMessageMoveTaskRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCancelMessageMoveTaskRoute, (c) => {
    throw new Error('Not implemented')
  })
