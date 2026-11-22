import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypeMbPointBasicRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypeMbPointBasicHandler = app.openapi(
  getRepositorySearchTypeTypeMbPointBasicRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
