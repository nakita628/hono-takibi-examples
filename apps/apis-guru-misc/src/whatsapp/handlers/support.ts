import { OpenAPIHono } from '@hono/zod-openapi'
import { getSupportRoute } from '../routes'

const app = new OpenAPIHono()

export const supportHandler = app.openapi(getSupportRoute, (c) => {
  throw new Error('Not implemented')
})
