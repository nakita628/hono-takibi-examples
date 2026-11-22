import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueImportCatalogToGlueRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueImportCatalogToGlueHandler = app.openapi(
  postXAmzTargetAWSGlueImportCatalogToGlueRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
