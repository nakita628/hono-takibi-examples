import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypeSoundingGsdRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypeSoundingGsdHandler = app.openapi(
  getRepositorySearchTypeTypeSoundingGsdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
