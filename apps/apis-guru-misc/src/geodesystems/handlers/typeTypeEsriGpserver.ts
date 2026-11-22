import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypeEsriGpserverRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypeEsriGpserverHandler = app.openapi(
  getRepositorySearchTypeTypeEsriGpserverRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
