import { OpenAPIHono } from '@hono/zod-openapi'
import { getQueryRoute } from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app.openapi(getQueryRoute, (c) => {
  throw new Error('Not implemented')
})
