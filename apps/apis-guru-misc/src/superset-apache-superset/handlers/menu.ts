import { OpenAPIHono } from '@hono/zod-openapi'
import { getMenuIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const menuHandler = app.openapi(getMenuIndexRoute, (c) => {
  throw new Error('Not implemented')
})
