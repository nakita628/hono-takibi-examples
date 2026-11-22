import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const typeGroupHandler = app.openapi(getRepositorySearchTypeGroupRoute, (c) => {
  throw new Error('Not implemented')
})
