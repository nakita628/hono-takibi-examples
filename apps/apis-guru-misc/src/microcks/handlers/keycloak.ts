import { OpenAPIHono } from '@hono/zod-openapi'
import { getKeycloakConfigRoute } from '../routes'

const app = new OpenAPIHono()

export const keycloakHandler = app.openapi(getKeycloakConfigRoute, (c) => {
  throw new Error('Not implemented')
})
