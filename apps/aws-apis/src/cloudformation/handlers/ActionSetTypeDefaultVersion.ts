import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionSetTypeDefaultVersionRoute,
  postActionSetTypeDefaultVersionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionSetTypeDefaultVersionHandler = app
  .openapi(getActionSetTypeDefaultVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionSetTypeDefaultVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
