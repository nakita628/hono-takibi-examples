import { OpenAPIHono } from '@hono/zod-openapi'
import { getLivezRoute } from '../routes'

const app = new OpenAPIHono()

export const livezHandler = app.openapi(getLivezRoute, (c) => {
  throw new Error('Not implemented')
})
