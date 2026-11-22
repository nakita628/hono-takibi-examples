import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeleteStackRoute, postActionDeleteStackRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteStackHandler = app
  .openapi(getActionDeleteStackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteStackRoute, (c) => {
    throw new Error('Not implemented')
  })
