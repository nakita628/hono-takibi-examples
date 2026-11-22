import { OpenAPIHono } from '@hono/zod-openapi'
import { getStoreLocalesRoute } from '../routes'

const app = new OpenAPIHono()

export const localesHandler = app.openapi(getStoreLocalesRoute, (c) => {
  throw new Error('Not implemented')
})
