import { OpenAPIHono } from '@hono/zod-openapi'
import { getBrandingRoute, postBrandingReloadRoute, postBrandingRoute } from '../routes'

const app = new OpenAPIHono()

export const brandingHandler = app
  .openapi(getBrandingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBrandingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBrandingReloadRoute, (c) => {
    throw new Error('Not implemented')
  })
