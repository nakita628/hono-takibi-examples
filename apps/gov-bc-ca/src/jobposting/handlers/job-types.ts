import { OpenAPIHono } from '@hono/zod-openapi'
import { getJobTypesRoute } from '../routes'

const app = new OpenAPIHono()

export const jobTypesHandler = app.openapi(getJobTypesRoute, (c) => {
  throw new Error('Not implemented')
})
