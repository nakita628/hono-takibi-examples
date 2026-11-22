import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypeHydroColoradoRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypeHydroColoradoHandler = app.openapi(
  getRepositorySearchTypeTypeHydroColoradoRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
