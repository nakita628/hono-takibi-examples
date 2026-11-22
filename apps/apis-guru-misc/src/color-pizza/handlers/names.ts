import { OpenAPIHono } from '@hono/zod-openapi'
import { getNamesIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const namesHandler = app.openapi(getNamesIndexRoute, (c) => {
  throw new Error('Not implemented')
})
