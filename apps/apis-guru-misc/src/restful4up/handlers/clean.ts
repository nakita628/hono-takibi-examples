import { OpenAPIHono } from '@hono/zod-openapi'
import { headCleanRoute } from '../routes'

const app = new OpenAPIHono()

export const cleanHandler = app.openapi(headCleanRoute, (c) => {
  throw new Error('Not implemented')
})
