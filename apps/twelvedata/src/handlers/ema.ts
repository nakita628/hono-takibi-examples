import { OpenAPIHono } from '@hono/zod-openapi'
import { getEmaRoute } from '../routes'

const app = new OpenAPIHono()

export const emaHandler = app.openapi(getEmaRoute, (c) => {
  throw new Error('Not implemented')
})
