import { OpenAPIHono } from '@hono/zod-openapi'
import { postDeleteStreamRoute } from '../routes'

const app = new OpenAPIHono()

export const deleteStreamHandler = app.openapi(postDeleteStreamRoute, (c) => {
  throw new Error('Not implemented')
})
