import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeProjectDataformatRoute } from '../routes'

const app = new OpenAPIHono()

export const typeProjectDataformatHandler = app.openapi(
  getRepositorySearchTypeProjectDataformatRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
