import { OpenAPIHono } from '@hono/zod-openapi'
import { postIndexesIndexUidFacetSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const facetSearchHandler = app.openapi(postIndexesIndexUidFacetSearchRoute, (c) => {
  throw new Error('Not implemented')
})
