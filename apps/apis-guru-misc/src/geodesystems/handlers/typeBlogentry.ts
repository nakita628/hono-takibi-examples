import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeBlogentryRoute } from '../routes'

const app = new OpenAPIHono()

export const typeBlogentryHandler = app.openapi(getRepositorySearchTypeBlogentryRoute, (c) => {
  throw new Error('Not implemented')
})
