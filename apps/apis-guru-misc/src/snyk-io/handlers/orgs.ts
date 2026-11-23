import { OpenAPIHono } from '@hono/zod-openapi'
import { getOrgsRoute } from '../routes'

const app = new OpenAPIHono()

export const orgsHandler = app.openapi(getOrgsRoute, (c) => {
  throw new Error('Not implemented')
})
