import { OpenAPIHono } from '@hono/zod-openapi'
import { getStoreProductTypesIdRoute, getStoreProductTypesRoute } from '../routes'

const app = new OpenAPIHono()

export const productTypesHandler = app
  .openapi(getStoreProductTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStoreProductTypesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
