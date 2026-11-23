import { OpenAPIHono } from '@hono/zod-openapi'
import { postStoreDetailRoute } from '../routes'

const app = new OpenAPIHono()

export const storeDetailHandler = app.openapi(postStoreDetailRoute, (c) => {
  throw new Error('Not implemented')
})
