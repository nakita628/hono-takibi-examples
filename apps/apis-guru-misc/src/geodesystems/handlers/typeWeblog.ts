import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeWeblogRoute } from '../routes'

const app = new OpenAPIHono()

export const typeWeblogHandler = app.openapi(getRepositorySearchTypeWeblogRoute, (c) => {
  throw new Error('Not implemented')
})
