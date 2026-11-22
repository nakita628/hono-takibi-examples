import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeBioHmmerIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const typeBioHmmerIndexHandler = app.openapi(
  getRepositorySearchTypeBioHmmerIndexRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
