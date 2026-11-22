import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypeSoundingFrdRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypeSoundingFrdHandler = app.openapi(
  getRepositorySearchTypeTypeSoundingFrdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
