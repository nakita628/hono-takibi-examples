import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeContactRoute } from '../routes'

const app = new OpenAPIHono()

export const typeContactHandler = app.openapi(getRepositorySearchTypeContactRoute, (c) => {
  throw new Error('Not implemented')
})
