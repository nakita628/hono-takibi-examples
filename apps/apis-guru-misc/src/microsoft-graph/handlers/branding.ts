import { OpenAPIHono } from '@hono/zod-openapi'
import { getBrandingLocalizationsCountRoute } from '../routes'

const app = new OpenAPIHono()

export const brandingHandler = app.openapi(getBrandingLocalizationsCountRoute, (c) => {
  throw new Error('Not implemented')
})
