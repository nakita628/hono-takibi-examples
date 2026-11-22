import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypeMetametaDictionaryRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypeMetametaDictionaryHandler = app.openapi(
  getRepositorySearchTypeTypeMetametaDictionaryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
