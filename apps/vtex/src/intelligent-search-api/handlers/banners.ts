import { OpenAPIHono } from '@hono/zod-openapi'
import { getBannersFacetsRoute } from '../routes'

const app = new OpenAPIHono()

export const bannersHandler = app.openapi(getBannersFacetsRoute, (c) => {
  throw new Error('Not implemented')
})
