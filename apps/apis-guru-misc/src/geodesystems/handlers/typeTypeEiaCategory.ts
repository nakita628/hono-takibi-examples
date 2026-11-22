import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypeEiaCategoryRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypeEiaCategoryHandler = app.openapi(
  getRepositorySearchTypeTypeEiaCategoryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
