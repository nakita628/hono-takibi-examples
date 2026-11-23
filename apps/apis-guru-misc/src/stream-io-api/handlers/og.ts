import { OpenAPIHono } from '@hono/zod-openapi'
import { getOgRoute } from '../routes'

const app = new OpenAPIHono()

export const ogHandler = app.openapi(getOgRoute, (c) => {
  throw new Error('Not implemented')
})
