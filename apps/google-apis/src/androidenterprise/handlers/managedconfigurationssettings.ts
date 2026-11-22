import { OpenAPIHono } from '@hono/zod-openapi'
import { getAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdManagedConfigurationsSettingsRoute } from '../routes'

const app = new OpenAPIHono()

export const managedconfigurationssettingsHandler = app.openapi(
  getAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdManagedConfigurationsSettingsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
