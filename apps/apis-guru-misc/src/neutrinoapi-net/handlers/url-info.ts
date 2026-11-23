import { OpenAPIHono } from '@hono/zod-openapi'
import { getUrlInfoRoute } from '../routes'

const app = new OpenAPIHono()

export const urlInfoHandler = app.openapi(getUrlInfoRoute, (c) => {
  throw new Error('Not implemented')
})
