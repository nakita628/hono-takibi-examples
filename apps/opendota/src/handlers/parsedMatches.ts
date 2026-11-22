import { OpenAPIHono } from '@hono/zod-openapi'
import { getParsedMatchesRoute } from '../routes'

const app = new OpenAPIHono()

export const parsedMatchesHandler = app.openapi(getParsedMatchesRoute, (c) => {
  throw new Error('Not implemented')
})
