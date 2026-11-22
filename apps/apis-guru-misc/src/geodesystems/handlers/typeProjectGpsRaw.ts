import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeProjectGpsRawRoute } from '../routes'

const app = new OpenAPIHono()

export const typeProjectGpsRawHandler = app.openapi(
  getRepositorySearchTypeProjectGpsRawRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
