import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeBioDicomTestRoute } from '../routes'

const app = new OpenAPIHono()

export const typeBioDicomTestHandler = app.openapi(
  getRepositorySearchTypeBioDicomTestRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
