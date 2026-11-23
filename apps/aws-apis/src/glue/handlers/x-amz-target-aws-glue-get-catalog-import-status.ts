import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueGetCatalogImportStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueGetCatalogImportStatusHandler = app.openapi(
  postXAmzTargetAWSGlueGetCatalogImportStatusRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
