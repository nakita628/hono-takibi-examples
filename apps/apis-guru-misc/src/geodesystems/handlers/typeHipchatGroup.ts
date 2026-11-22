import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeHipchatGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const typeHipchatGroupHandler = app.openapi(
  getRepositorySearchTypeHipchatGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
