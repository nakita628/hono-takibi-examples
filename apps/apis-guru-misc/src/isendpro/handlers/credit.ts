import { OpenAPIHono } from '@hono/zod-openapi'
import { getCreditRoute } from '../routes'

const app = new OpenAPIHono()

export const creditHandler = app.openapi(getCreditRoute, (c) => {
  throw new Error('Not implemented')
})
