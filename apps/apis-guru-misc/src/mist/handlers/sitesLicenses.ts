import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1SitesSiteIdLicensesUsagesRoute } from '../routes'

const app = new OpenAPIHono()

export const sitesLicensesHandler = app.openapi(getApiV1SitesSiteIdLicensesUsagesRoute, (c) => {
  throw new Error('Not implemented')
})
