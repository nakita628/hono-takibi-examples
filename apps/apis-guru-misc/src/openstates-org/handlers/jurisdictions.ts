import { OpenAPIHono } from '@hono/zod-openapi'
import { getJurisdictionsJurisdictionIdRoute, getJurisdictionsRoute } from '../routes'

const app = new OpenAPIHono()

export const jurisdictionsHandler = app
  .openapi(getJurisdictionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getJurisdictionsJurisdictionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
