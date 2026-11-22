import { OpenAPIHono } from '@hono/zod-openapi'
import { getPublicHistoryRoute } from '../routes'

const app = new OpenAPIHono()

export const defaultHandler = app.openapi(getPublicHistoryRoute, (c) => {
  throw new Error('Not implemented')
})
