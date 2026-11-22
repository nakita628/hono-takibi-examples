import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeFitsDataRoute } from '../routes'

const app = new OpenAPIHono()

export const typeFitsDataHandler = app.openapi(getRepositorySearchTypeFitsDataRoute, (c) => {
  throw new Error('Not implemented')
})
