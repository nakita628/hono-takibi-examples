import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1GoogleLocationsSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const googleLocationsHandler = app.openapi(postV1GoogleLocationsSearchRoute, (c) => {
  throw new Error('Not implemented')
})
