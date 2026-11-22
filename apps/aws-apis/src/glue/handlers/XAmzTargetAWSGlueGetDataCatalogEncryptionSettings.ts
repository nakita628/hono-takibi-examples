import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueGetDataCatalogEncryptionSettingsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueGetDataCatalogEncryptionSettingsHandler = app.openapi(
  postXAmzTargetAWSGlueGetDataCatalogEncryptionSettingsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
