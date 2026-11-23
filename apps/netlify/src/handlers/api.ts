import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1SitesSiteIdEnvRoute } from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app.openapi(getApiV1SitesSiteIdEnvRoute, (c) => {
  throw new Error('Not implemented')
})
