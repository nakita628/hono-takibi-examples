import { OpenAPIHono } from '@hono/zod-openapi'
import { getSmaRoute } from '../routes'

const app = new OpenAPIHono()

export const smaHandler = app.openapi(getSmaRoute, (c) => {
  throw new Error('Not implemented')
})
