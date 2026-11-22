import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypePointTextRoute } from '../routes'

const app = new OpenAPIHono()

export const typePointTextHandler = app.openapi(getRepositorySearchTypePointTextRoute, (c) => {
  throw new Error('Not implemented')
})
