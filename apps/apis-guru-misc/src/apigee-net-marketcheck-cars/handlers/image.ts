import { OpenAPIHono } from '@hono/zod-openapi'
import { getImageCacheCarListingIDImageIDRoute } from '../routes'

const app = new OpenAPIHono()

export const imageHandler = app.openapi(getImageCacheCarListingIDImageIDRoute, (c) => {
  throw new Error('Not implemented')
})
