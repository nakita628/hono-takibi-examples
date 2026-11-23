import { OpenAPIHono } from '@hono/zod-openapi'
import { getCciRoute } from '../routes'

const app = new OpenAPIHono()

export const cciHandler = app.openapi(getCciRoute, (c) => {
  throw new Error('Not implemented')
})
