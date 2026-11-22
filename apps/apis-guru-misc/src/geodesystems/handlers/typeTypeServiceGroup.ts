import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypeServiceGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypeServiceGroupHandler = app.openapi(
  getRepositorySearchTypeTypeServiceGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
