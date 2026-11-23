import { OpenAPIHono } from '@hono/zod-openapi'
import { getDbaasIntegrationTypesRoute } from '../routes'

const app = new OpenAPIHono()

export const dbaasIntegrationTypesHandler = app.openapi(getDbaasIntegrationTypesRoute, (c) => {
  throw new Error('Not implemented')
})
