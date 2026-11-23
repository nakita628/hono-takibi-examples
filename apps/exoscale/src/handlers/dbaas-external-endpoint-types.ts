import { OpenAPIHono } from '@hono/zod-openapi'
import { getDbaasExternalEndpointTypesRoute } from '../routes'

const app = new OpenAPIHono()

export const dbaasExternalEndpointTypesHandler = app.openapi(
  getDbaasExternalEndpointTypesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
