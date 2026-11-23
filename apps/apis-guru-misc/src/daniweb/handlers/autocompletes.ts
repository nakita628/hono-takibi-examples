import { OpenAPIHono } from '@hono/zod-openapi'
import { getAutocompletesRoute } from '../routes'

const app = new OpenAPIHono()

export const autocompletesHandler = app.openapi(getAutocompletesRoute, (c) => {
  throw new Error('Not implemented')
})
