import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypeHazarddataRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypeHazarddataHandler = app.openapi(
  getRepositorySearchTypeTypeHazarddataRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
