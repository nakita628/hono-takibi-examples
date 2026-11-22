import { OpenAPIHono } from '@hono/zod-openapi'
import { getEnterpriseConfigurationsEnterpriseIdRoute } from '../routes'

const app = new OpenAPIHono()

export const enterpriseConfigurationsHandler = app.openapi(
  getEnterpriseConfigurationsEnterpriseIdRoute,
  (c) => {},
)
