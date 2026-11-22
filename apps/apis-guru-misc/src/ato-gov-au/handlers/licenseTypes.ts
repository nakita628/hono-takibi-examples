import { OpenAPIHono } from '@hono/zod-openapi'
import { getClassificationsLicenseTypesRoute } from '../routes'

const app = new OpenAPIHono()

export const licenseTypesHandler = app.openapi(getClassificationsLicenseTypesRoute, (c) => {
  throw new Error('Not implemented')
})
