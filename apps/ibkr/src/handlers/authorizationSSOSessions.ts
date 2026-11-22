import { OpenAPIHono } from '@hono/zod-openapi'
import { postGwApiV1SsoSessionsRoute } from '../routes'

const app = new OpenAPIHono()

export const authorizationSSOSessionsHandler = app.openapi(postGwApiV1SsoSessionsRoute, (c) => {
  throw new Error('Not implemented')
})
