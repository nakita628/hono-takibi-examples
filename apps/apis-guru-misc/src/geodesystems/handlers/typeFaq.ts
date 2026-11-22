import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeFaqRoute } from '../routes'

const app = new OpenAPIHono()

export const typeFaqHandler = app.openapi(getRepositorySearchTypeFaqRoute, (c) => {
  throw new Error('Not implemented')
})
