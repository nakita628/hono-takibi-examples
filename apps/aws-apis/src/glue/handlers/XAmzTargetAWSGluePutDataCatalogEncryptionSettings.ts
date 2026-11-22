import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGluePutDataCatalogEncryptionSettingsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGluePutDataCatalogEncryptionSettingsHandler = app.openapi(
  postXAmzTargetAWSGluePutDataCatalogEncryptionSettingsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
