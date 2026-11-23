import { OpenAPIHono } from '@hono/zod-openapi'
import { getCatalogRoute } from '../routes'

const app = new OpenAPIHono()

export const catalogHandler = app.openapi(getCatalogRoute, (c) => {
  throw new Error('Not implemented')
})
