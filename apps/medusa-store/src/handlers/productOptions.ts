import { OpenAPIHono } from '@hono/zod-openapi'
import { getStoreProductOptionsIdRoute, getStoreProductOptionsRoute } from '../routes'

const app = new OpenAPIHono()

export const productOptionsHandler = app
  .openapi(getStoreProductOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStoreProductOptionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
