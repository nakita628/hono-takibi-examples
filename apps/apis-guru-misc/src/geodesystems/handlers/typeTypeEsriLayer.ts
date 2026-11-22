import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypeEsriLayerRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypeEsriLayerHandler = app.openapi(
  getRepositorySearchTypeTypeEsriLayerRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
