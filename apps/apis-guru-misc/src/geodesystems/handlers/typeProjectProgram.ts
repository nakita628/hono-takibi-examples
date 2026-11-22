import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeProjectProgramRoute } from '../routes'

const app = new OpenAPIHono()

export const typeProjectProgramHandler = app.openapi(
  getRepositorySearchTypeProjectProgramRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
