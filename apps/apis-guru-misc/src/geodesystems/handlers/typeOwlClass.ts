import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeOwlClassRoute } from '../routes'

const app = new OpenAPIHono()

export const typeOwlClassHandler = app.openapi(getRepositorySearchTypeOwlClassRoute, (c) => {
  throw new Error('Not implemented')
})
