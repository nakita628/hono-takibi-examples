import { OpenAPIHono } from '@hono/zod-openapi'
import { getProMatchesRoute } from '../routes'

const app = new OpenAPIHono()

export const proMatchesHandler = app.openapi(getProMatchesRoute, (c) => {
  throw new Error('Not implemented')
})
