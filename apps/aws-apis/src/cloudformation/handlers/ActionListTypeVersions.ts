import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionListTypeVersionsRoute, postActionListTypeVersionsRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionListTypeVersionsHandler = app
  .openapi(getActionListTypeVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionListTypeVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
