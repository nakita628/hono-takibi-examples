import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTripEventRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTripEventHandler = app.openapi(getRepositorySearchTypeTripEventRoute, (c) => {
  throw new Error('Not implemented')
})
