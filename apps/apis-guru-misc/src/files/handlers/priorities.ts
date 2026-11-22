import { OpenAPIHono } from '@hono/zod-openapi'
import { getPrioritiesRoute } from '../routes'

const app = new OpenAPIHono()

export const prioritiesHandler = app.openapi(getPrioritiesRoute, (c) => {
  throw new Error('Not implemented')
})
