import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueGetDataCatalogEncryptionSettingsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueGetDataCatalogEncryptionSettingsHandler = app.openapi(
  postXAmzTargetAWSGlueGetDataCatalogEncryptionSettingsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
