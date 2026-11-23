import { OpenAPIHono } from '@hono/zod-openapi'
import { getAgeusdInfoRoute } from '../routes'

const app = new OpenAPIHono()

export const ageusdHandler = app.openapi(getAgeusdInfoRoute, (c) => {
  throw new Error('Not implemented')
})
