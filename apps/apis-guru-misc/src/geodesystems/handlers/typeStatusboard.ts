import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeStatusboardRoute } from '../routes'

const app = new OpenAPIHono()

export const typeStatusboardHandler = app.openapi(getRepositorySearchTypeStatusboardRoute, (c) => {
  throw new Error('Not implemented')
})
