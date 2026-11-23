import { OpenAPIHono } from '@hono/zod-openapi'
import { getStoresIdRoute, getStoresRoute } from '../routes'

const app = new OpenAPIHono()

export const storesHandler = app
  .openapi(getStoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStoresIdRoute, (c) => {
    throw new Error('Not implemented')
  })
