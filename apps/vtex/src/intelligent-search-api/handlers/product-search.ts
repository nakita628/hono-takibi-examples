import { OpenAPIHono } from '@hono/zod-openapi'
import { getProductSearchFacetsRoute } from '../routes'

const app = new OpenAPIHono()

export const productSearchHandler = app.openapi(getProductSearchFacetsRoute, (c) => {
  throw new Error('Not implemented')
})
