import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypeSoundingWyomingRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypeSoundingWyomingHandler = app.openapi(
  getRepositorySearchTypeTypeSoundingWyomingRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
