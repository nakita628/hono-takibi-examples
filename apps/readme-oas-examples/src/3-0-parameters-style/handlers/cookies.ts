import { OpenAPIHono } from '@hono/zod-openapi'
import { getCookiesRoute } from '../routes'

const app = new OpenAPIHono()

export const cookiesHandler = app.openapi(getCookiesRoute, (c) => {
  throw new Error('Not implemented')
})
