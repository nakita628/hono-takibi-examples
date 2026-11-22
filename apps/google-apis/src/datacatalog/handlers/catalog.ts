import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1beta1CatalogSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const catalogHandler = app.openapi(postV1beta1CatalogSearchRoute, (c) => {
  throw new Error('Not implemented')
})
