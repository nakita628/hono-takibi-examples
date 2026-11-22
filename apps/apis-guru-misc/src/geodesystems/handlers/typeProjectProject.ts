import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeProjectProjectRoute } from '../routes'

const app = new OpenAPIHono()

export const typeProjectProjectHandler = app.openapi(
  getRepositorySearchTypeProjectProjectRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
