import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSpencerFrontendServiceGetRegistryCatalogDataRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSpencerFrontendServiceGetRegistryCatalogDataHandler = app.openapi(
  postXAmzTargetSpencerFrontendServiceGetRegistryCatalogDataRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
