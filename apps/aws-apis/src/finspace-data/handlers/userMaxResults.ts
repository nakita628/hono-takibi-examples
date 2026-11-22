import { OpenAPIHono } from '@hono/zod-openapi'
import { getUserMaxResultsRoute } from '../routes'

const app = new OpenAPIHono()

export const userMaxResultsHandler = app.openapi(getUserMaxResultsRoute, (c) => {
  throw new Error('Not implemented')
})
