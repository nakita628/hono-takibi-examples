import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiPublicSiteConfigPhpRoute } from '../routes'

const app = new OpenAPIHono()

export const configHandler = app.openapi(getApiPublicSiteConfigPhpRoute, (c) => {
  throw new Error('Not implemented')
})
