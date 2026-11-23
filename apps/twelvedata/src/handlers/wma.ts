import { OpenAPIHono } from '@hono/zod-openapi'
import { getWmaRoute } from '../routes'

const app = new OpenAPIHono()

export const wmaHandler = app.openapi(getWmaRoute, (c) => {
  throw new Error('Not implemented')
})
