import { OpenAPIHono } from '@hono/zod-openapi'
import { getCookiesFormNonExplodedRoute } from '../routes'

const app = new OpenAPIHono()

export const cookiesFormNonExplodedHandler = app.openapi(getCookiesFormNonExplodedRoute, (c) => {
  throw new Error('Not implemented')
})
