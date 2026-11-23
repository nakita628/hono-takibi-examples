import { OpenAPIHono } from '@hono/zod-openapi'
import { getJwksRoute } from '../routes'

const app = new OpenAPIHono()

export const jwksHandler = app.openapi(getJwksRoute, (c) => {
  throw new Error('Not implemented')
})
