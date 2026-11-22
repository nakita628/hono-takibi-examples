import { OpenAPIHono } from '@hono/zod-openapi'
import { getAuthinfoRoute } from '../routes'

const app = new OpenAPIHono()

export const authinfoHandler = app.openapi(getAuthinfoRoute, (c) => {
  throw new Error('Not implemented')
})
