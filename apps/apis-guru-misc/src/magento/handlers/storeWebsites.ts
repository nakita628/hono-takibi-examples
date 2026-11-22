import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1StoreWebsitesRoute } from '../routes'

const app = new OpenAPIHono()

export const storeWebsitesHandler = app.openapi(getV1StoreWebsitesRoute, (c) => {
  throw new Error('Not implemented')
})
