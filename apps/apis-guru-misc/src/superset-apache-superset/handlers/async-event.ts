import { OpenAPIHono } from '@hono/zod-openapi'
import { getAsyncEventIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const asyncEventHandler = app.openapi(getAsyncEventIndexRoute, (c) => {
  throw new Error('Not implemented')
})
