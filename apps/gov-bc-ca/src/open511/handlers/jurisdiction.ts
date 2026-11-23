import { OpenAPIHono } from '@hono/zod-openapi'
import { getJurisdictionRoute } from '../routes'

const app = new OpenAPIHono()

export const jurisdictionHandler = app.openapi(getJurisdictionRoute, (c) => {
  throw new Error('Not implemented')
})
