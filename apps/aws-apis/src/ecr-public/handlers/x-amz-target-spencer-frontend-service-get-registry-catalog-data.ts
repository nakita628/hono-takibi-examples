import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSpencerFrontendServiceGetRegistryCatalogDataRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSpencerFrontendServiceGetRegistryCatalogDataHandler = app.openapi(
  postXAmzTargetSpencerFrontendServiceGetRegistryCatalogDataRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
