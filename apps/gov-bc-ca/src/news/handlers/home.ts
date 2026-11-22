import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiHomeRoute } from '../routes'

const app = new OpenAPIHono()

export const homeHandler = app.openapi(getApiHomeRoute, (c) => {
  throw new Error('Not implemented')
})
