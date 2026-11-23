import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionListStacksRoute, postActionListStacksRoute } from '../routes'

const app = new OpenAPIHono()

export const actionListStacksHandler = app
  .openapi(getActionListStacksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionListStacksRoute, (c) => {
    throw new Error('Not implemented')
  })
