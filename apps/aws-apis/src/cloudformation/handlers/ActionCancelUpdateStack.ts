import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCancelUpdateStackRoute, postActionCancelUpdateStackRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionCancelUpdateStackHandler = app
  .openapi(getActionCancelUpdateStackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCancelUpdateStackRoute, (c) => {
    throw new Error('Not implemented')
  })
