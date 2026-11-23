import { OpenAPIHono } from '@hono/zod-openapi'
import { getWhoisId4nRoute } from '../routes'

const app = new OpenAPIHono()

export const whoisHandler = app.openapi(getWhoisId4nRoute, (c) => {
  throw new Error('Not implemented')
})
