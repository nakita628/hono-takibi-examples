import { OpenAPIHono } from '@hono/zod-openapi'
import { getProgrammesRoute } from '../routes'

const app = new OpenAPIHono()

export const programmesHandler = app.openapi(getProgrammesRoute, (c) => {
  throw new Error('Not implemented')
})
