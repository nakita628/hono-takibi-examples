import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeHomepageRoute } from '../routes'

const app = new OpenAPIHono()

export const typeHomepageHandler = app.openapi(getRepositorySearchTypeHomepageRoute, (c) => {
  throw new Error('Not implemented')
})
