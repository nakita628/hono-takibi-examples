import { OpenAPIHono } from '@hono/zod-openapi'
import { getCookiesFormExplodedRoute } from '../routes'

const app = new OpenAPIHono()

export const cookiesFormExplodedHandler = app.openapi(getCookiesFormExplodedRoute, (c) => {
  throw new Error('Not implemented')
})
