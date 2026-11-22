import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1CompanySettingsRoute } from '../routes'

const app = new OpenAPIHono()

export const companySettingsHandler = app.openapi(getV1CompanySettingsRoute, (c) => {
  throw new Error('Not implemented')
})
