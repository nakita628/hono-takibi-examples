import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeMapGooglemapRoute } from '../routes'

const app = new OpenAPIHono()

export const typeMapGooglemapHandler = app.openapi(
  getRepositorySearchTypeMapGooglemapRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
