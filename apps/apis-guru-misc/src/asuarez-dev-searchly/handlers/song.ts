import { OpenAPIHono } from '@hono/zod-openapi'
import { getSongSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const songHandler = app.openapi(getSongSearchRoute, (c) => {
  throw new Error('Not implemented')
})
