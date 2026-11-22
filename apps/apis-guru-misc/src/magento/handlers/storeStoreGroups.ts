import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1StoreStoreGroupsRoute } from '../routes'

const app = new OpenAPIHono()

export const storeStoreGroupsHandler = app.openapi(getV1StoreStoreGroupsRoute, (c) => {
  throw new Error('Not implemented')
})
