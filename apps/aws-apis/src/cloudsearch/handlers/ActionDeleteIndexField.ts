import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeleteIndexFieldRoute, postActionDeleteIndexFieldRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteIndexFieldHandler = app
  .openapi(getActionDeleteIndexFieldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteIndexFieldRoute, (c) => {
    throw new Error('Not implemented')
  })
