import { OpenAPIHono } from '@hono/zod-openapi'
import { getPublicMatchesRoute } from '../routes'

const app = new OpenAPIHono()

export const publicMatchesHandler = app.openapi(getPublicMatchesRoute, (c) => {
  throw new Error('Not implemented')
})
