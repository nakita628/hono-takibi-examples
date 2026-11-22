import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeColoradoWaterRightsRoute } from '../routes'

const app = new OpenAPIHono()

export const typeColoradoWaterRightsHandler = app.openapi(
  getRepositorySearchTypeColoradoWaterRightsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
