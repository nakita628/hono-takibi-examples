import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeFileRoute } from '../routes'

const app = new OpenAPIHono()

export const typeFileHandler = app.openapi(getRepositorySearchTypeFileRoute, (c) => {
  throw new Error('Not implemented')
})
