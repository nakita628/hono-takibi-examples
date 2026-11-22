import { OpenAPIHono } from '@hono/zod-openapi'
import { getIndexPhpAppsOauth2AuthorizeRoute } from '../routes'

const app = new OpenAPIHono()

export const loginRedirectorHandler = app.openapi(getIndexPhpAppsOauth2AuthorizeRoute, (c) => {
  throw new Error('Not implemented')
})
