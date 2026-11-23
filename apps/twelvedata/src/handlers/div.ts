import { OpenAPIHono } from '@hono/zod-openapi'
import { getDivRoute } from '../routes'

const app = new OpenAPIHono()

export const divHandler = app.openapi(getDivRoute, (c) => {
  throw new Error('Not implemented')
})
