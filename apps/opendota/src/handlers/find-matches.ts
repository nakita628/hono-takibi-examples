import { OpenAPIHono } from '@hono/zod-openapi'
import { getFindMatchesRoute } from '../routes'

const app = new OpenAPIHono()

export const findMatchesHandler = app.openapi(getFindMatchesRoute, (c) => {
  throw new Error('Not implemented')
})
