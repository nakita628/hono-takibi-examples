import { OpenAPIHono } from '@hono/zod-openapi'
import { postCreateFromSourceDestRoute, putCreateFromSourceDestRoute } from '../routes'

const app = new OpenAPIHono()

export const createFromHandler = app
  .openapi(putCreateFromSourceDestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCreateFromSourceDestRoute, (c) => {
    throw new Error('Not implemented')
  })
