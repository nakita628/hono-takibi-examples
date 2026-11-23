import { OpenAPIHono } from '@hono/zod-openapi'
import { getFacetsFacetsRoute } from '../routes'

const app = new OpenAPIHono()

export const facetsHandler = app.openapi(getFacetsFacetsRoute, (c) => {
  throw new Error('Not implemented')
})
