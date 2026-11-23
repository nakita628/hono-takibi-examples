import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSpencerFrontendServiceGetRepositoryCatalogDataRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSpencerFrontendServiceGetRepositoryCatalogDataHandler = app.openapi(
  postXAmzTargetSpencerFrontendServiceGetRepositoryCatalogDataRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
