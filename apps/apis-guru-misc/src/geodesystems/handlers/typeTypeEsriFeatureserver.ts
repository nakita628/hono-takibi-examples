import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypeEsriFeatureserverRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypeEsriFeatureserverHandler = app.openapi(
  getRepositorySearchTypeTypeEsriFeatureserverRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
