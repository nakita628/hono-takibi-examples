import { OpenAPIHono } from '@hono/zod-openapi'
import { getKeycloakRoute } from '../routes'

const app = new OpenAPIHono()

export const keycloakHandler = app.openapi(getKeycloakRoute, (c) => {
  throw new Error('Not implemented')
})
