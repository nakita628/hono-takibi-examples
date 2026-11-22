import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypeEsriGeometryserverRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypeEsriGeometryserverHandler = app.openapi(
  getRepositorySearchTypeTypeEsriGeometryserverRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
