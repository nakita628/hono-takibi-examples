import { OpenAPIHono } from '@hono/zod-openapi'
import { getContentratingsRoute } from '../routes'

const app = new OpenAPIHono()

export const contentratingsHandler = app.openapi(getContentratingsRoute, (c) => {
  throw new Error('Not implemented')
})
