import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeJeopardyRoute } from '../routes'

const app = new OpenAPIHono()

export const typeJeopardyHandler = app.openapi(getRepositorySearchTypeJeopardyRoute, (c) => {
  throw new Error('Not implemented')
})
