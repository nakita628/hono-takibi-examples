import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteSessionRoute, getSessionRoute, postSessionRoute } from '../routes'

const app = new OpenAPIHono()

export const sessionHandler = app
  .openapi(deleteSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
