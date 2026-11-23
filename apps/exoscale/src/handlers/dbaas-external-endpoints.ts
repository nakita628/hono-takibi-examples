import { OpenAPIHono } from '@hono/zod-openapi'
import { getDbaasExternalEndpointsRoute } from '../routes'

const app = new OpenAPIHono()

export const dbaasExternalEndpointsHandler = app.openapi(getDbaasExternalEndpointsRoute, (c) => {
  throw new Error('Not implemented')
})
