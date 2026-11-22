import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypeMetametaFieldRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypeMetametaFieldHandler = app.openapi(
  getRepositorySearchTypeTypeMetametaFieldRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
