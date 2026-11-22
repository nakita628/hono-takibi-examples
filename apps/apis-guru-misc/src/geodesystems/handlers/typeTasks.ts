import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTasksRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTasksHandler = app.openapi(getRepositorySearchTypeTasksRoute, (c) => {
  throw new Error('Not implemented')
})
