import { OpenAPIHono } from '@hono/zod-openapi'
import { getClassificationsLicenseLifecycleStatesRoute } from '../routes'

const app = new OpenAPIHono()

export const licenseLifecycleStatesHandler = app.openapi(
  getClassificationsLicenseLifecycleStatesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
