import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1StoreStoreViewsRoute } from '../routes'

const app = new OpenAPIHono()

export const storeStoreViewsHandler = app.openapi(getV1StoreStoreViewsRoute, (c) => {
  throw new Error('Not implemented')
})
