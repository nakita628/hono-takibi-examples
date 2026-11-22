import { OpenAPIHono } from '@hono/zod-openapi'
import { getStoreProductTagsIdRoute, getStoreProductTagsRoute } from '../routes'

const app = new OpenAPIHono()

export const productTagsHandler = app
  .openapi(getStoreProductTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStoreProductTagsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
