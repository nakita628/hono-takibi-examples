import { OpenAPIHono } from '@hono/zod-openapi'
import { getSipRoute } from '../routes'

const app = new OpenAPIHono()

export const sipHandler = app.openapi(getSipRoute, (c) => {
  throw new Error('Not implemented')
})
