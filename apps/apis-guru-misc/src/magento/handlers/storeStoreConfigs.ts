import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1StoreStoreConfigsRoute } from '../routes'

const app = new OpenAPIHono()

export const storeStoreConfigsHandler = app.openapi(getV1StoreStoreConfigsRoute, (c) => {
  throw new Error('Not implemented')
})
