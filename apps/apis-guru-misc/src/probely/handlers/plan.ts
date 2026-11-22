import { OpenAPIHono } from '@hono/zod-openapi'
import { getPlansIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const planHandler = app.openapi(getPlansIndexRoute, (c) => {
  throw new Error('Not implemented')
})
