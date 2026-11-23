import { OpenAPIHono } from '@hono/zod-openapi'
import { getUvRoute } from '../routes'

const app = new OpenAPIHono()

export const uvHandler = app.openapi(getUvRoute, (c) => {
  throw new Error('Not implemented')
})
