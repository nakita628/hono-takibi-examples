import { OpenAPIHono } from '@hono/zod-openapi'
import { getJurisdictiongeographyRoute } from '../routes'

const app = new OpenAPIHono()

export const jurisdictiongeographyHandler = app.openapi(getJurisdictiongeographyRoute, (c) => {
  throw new Error('Not implemented')
})
