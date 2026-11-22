import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1CatalogsDiffRoute } from '../routes'

const app = new OpenAPIHono()

export const catalogHandler = app.openapi(postV1CatalogsDiffRoute, (c) => {
  throw new Error('Not implemented')
})
