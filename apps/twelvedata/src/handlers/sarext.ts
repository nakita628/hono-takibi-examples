import { OpenAPIHono } from '@hono/zod-openapi'
import { getSarextRoute } from '../routes'

const app = new OpenAPIHono()

export const sarextHandler = app.openapi(getSarextRoute, (c) => {
  throw new Error('Not implemented')
})
