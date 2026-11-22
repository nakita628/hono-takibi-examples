import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypeEsriRestserverRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypeEsriRestserverHandler = app.openapi(
  getRepositorySearchTypeTypeEsriRestserverRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
