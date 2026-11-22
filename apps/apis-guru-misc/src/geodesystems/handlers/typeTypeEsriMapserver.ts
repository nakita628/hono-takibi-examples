import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypeEsriMapserverRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypeEsriMapserverHandler = app.openapi(
  getRepositorySearchTypeTypeEsriMapserverRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
