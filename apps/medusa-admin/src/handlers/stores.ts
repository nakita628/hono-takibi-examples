import { OpenAPIHono } from '@hono/zod-openapi'
import { getAdminStoresIdRoute, getAdminStoresRoute, postAdminStoresIdRoute } from '../routes'

const app = new OpenAPIHono()

export const storesHandler = app
  .openapi(getAdminStoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminStoresIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminStoresIdRoute, (c) => {
    throw new Error('Not implemented')
  })
