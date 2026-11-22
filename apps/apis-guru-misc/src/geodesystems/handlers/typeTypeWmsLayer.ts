import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypeWmsLayerRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypeWmsLayerHandler = app.openapi(
  getRepositorySearchTypeTypeWmsLayerRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
