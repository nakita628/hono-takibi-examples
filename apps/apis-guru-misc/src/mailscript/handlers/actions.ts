import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteActionsActionRoute,
  getActionsRoute,
  postActionsRoute,
  putActionsActionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionsHandler = app
  .openapi(getActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteActionsActionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putActionsActionRoute, (c) => {
    throw new Error('Not implemented')
  })
