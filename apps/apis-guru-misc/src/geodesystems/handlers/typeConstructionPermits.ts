import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeConstructionPermitsRoute } from '../routes'

const app = new OpenAPIHono()

export const typeConstructionPermitsHandler = app.openapi(
  getRepositorySearchTypeConstructionPermitsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
