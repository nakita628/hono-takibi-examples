import { OpenAPIHono } from '@hono/zod-openapi'
import { getAuthorizersIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const authorizersHandler = app.openapi(getAuthorizersIndexRoute, (c) => {
  throw new Error('Not implemented')
})
