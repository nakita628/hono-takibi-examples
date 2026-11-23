import { OpenAPIHono } from '@hono/zod-openapi'
import { getJustListenRoute } from '../routes'

const app = new OpenAPIHono()

export const justListenHandler = app.openapi(getJustListenRoute, (c) => {
  throw new Error('Not implemented')
})
