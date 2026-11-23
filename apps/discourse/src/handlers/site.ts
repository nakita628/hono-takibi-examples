import { OpenAPIHono } from '@hono/zod-openapi'
import { getSiteBasicInfoJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const siteHandler = app.openapi(getSiteBasicInfoJsonRoute, (c) => {
  throw new Error('Not implemented')
})
