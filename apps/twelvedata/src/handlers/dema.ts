import { OpenAPIHono } from '@hono/zod-openapi'
import { getDemaRoute } from '../routes'

const app = new OpenAPIHono()

export const demaHandler = app.openapi(getDemaRoute, (c) => {
  throw new Error('Not implemented')
})
