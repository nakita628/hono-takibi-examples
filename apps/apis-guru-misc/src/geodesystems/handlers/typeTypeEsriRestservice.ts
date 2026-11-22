import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypeEsriRestserviceRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypeEsriRestserviceHandler = app.openapi(
  getRepositorySearchTypeTypeEsriRestserviceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
