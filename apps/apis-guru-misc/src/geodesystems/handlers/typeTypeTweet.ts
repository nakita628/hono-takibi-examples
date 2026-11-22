import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypeTweetRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypeTweetHandler = app.openapi(getRepositorySearchTypeTypeTweetRoute, (c) => {
  throw new Error('Not implemented')
})
