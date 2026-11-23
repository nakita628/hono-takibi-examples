import { OpenAPIHono } from '@hono/zod-openapi'
import { getLichessRoute } from '../routes'

const app = new OpenAPIHono()

export const lichessHandler = app.openapi(getLichessRoute, (c) => {
  throw new Error('Not implemented')
})
