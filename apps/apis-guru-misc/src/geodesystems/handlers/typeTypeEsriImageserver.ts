import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypeEsriImageserverRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypeEsriImageserverHandler = app.openapi(
  getRepositorySearchTypeTypeEsriImageserverRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
