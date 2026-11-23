import { OpenAPIHono } from '@hono/zod-openapi'
import { getPointRoute } from '../routes'

const app = new OpenAPIHono()

export const pointHandler = app.openapi(getPointRoute, (c) => {
  throw new Error('Not implemented')
})
