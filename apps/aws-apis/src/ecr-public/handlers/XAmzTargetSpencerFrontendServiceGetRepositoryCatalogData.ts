import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSpencerFrontendServiceGetRepositoryCatalogDataRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSpencerFrontendServiceGetRepositoryCatalogDataHandler = app.openapi(
  postXAmzTargetSpencerFrontendServiceGetRepositoryCatalogDataRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
