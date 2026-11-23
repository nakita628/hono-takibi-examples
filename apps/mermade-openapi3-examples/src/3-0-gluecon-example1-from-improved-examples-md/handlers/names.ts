import { OpenAPIHono } from '@hono/zod-openapi'
import { getNamesRoute } from '../routes'

const app = new OpenAPIHono()

export const namesHandler = app.openapi(getNamesRoute, (c) => {
  throw new Error('Not implemented')
})
