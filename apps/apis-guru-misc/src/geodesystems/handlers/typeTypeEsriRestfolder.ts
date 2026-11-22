import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypeEsriRestfolderRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypeEsriRestfolderHandler = app.openapi(
  getRepositorySearchTypeTypeEsriRestfolderRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
