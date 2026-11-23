import { OpenAPIHono } from '@hono/zod-openapi'
import { getDndInfoRoute } from '../routes'

const app = new OpenAPIHono()

export const dndInfoHandler = app.openapi(getDndInfoRoute, (c) => {
  throw new Error('Not implemented')
})
