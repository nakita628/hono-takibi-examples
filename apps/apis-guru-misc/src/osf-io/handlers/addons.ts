import { OpenAPIHono } from '@hono/zod-openapi'
import { getAddonsIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const addonsHandler = app.openapi(getAddonsIndexRoute, (c) => {
  throw new Error('Not implemented')
})
