import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSpencerFrontendServicePutRegistryCatalogDataRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSpencerFrontendServicePutRegistryCatalogDataHandler = app.openapi(
  postXAmzTargetSpencerFrontendServicePutRegistryCatalogDataRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
