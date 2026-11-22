import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypeSoundingCodRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypeSoundingCodHandler = app.openapi(
  getRepositorySearchTypeTypeSoundingCodRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
