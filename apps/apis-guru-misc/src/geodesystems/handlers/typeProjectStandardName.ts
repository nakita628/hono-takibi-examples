import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeProjectStandardNameRoute } from '../routes'

const app = new OpenAPIHono()

export const typeProjectStandardNameHandler = app.openapi(
  getRepositorySearchTypeProjectStandardNameRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
