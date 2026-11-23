import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSpencerFrontendServicePutRegistryCatalogDataRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSpencerFrontendServicePutRegistryCatalogDataHandler = app.openapi(
  postXAmzTargetSpencerFrontendServicePutRegistryCatalogDataRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
