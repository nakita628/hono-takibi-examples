import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSpencerFrontendServicePutRepositoryCatalogDataRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSpencerFrontendServicePutRepositoryCatalogDataHandler = app.openapi(
  postXAmzTargetSpencerFrontendServicePutRepositoryCatalogDataRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
