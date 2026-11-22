import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueGetCatalogImportStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueGetCatalogImportStatusHandler = app.openapi(
  postXAmzTargetAWSGlueGetCatalogImportStatusRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
