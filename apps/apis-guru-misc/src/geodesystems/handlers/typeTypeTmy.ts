import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypeTmyRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypeTmyHandler = app.openapi(getRepositorySearchTypeTypeTmyRoute, (c) => {
  throw new Error('Not implemented')
})
