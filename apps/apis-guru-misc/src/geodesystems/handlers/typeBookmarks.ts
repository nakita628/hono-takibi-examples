import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeBookmarksRoute } from '../routes'

const app = new OpenAPIHono()

export const typeBookmarksHandler = app.openapi(getRepositorySearchTypeBookmarksRoute, (c) => {
  throw new Error('Not implemented')
})
