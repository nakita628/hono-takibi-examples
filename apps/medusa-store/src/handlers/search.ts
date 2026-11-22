import { OpenAPIHono } from '@hono/zod-openapi'
import { postStoreSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app.openapi(postStoreSearchRoute, (c) => {
  throw new Error('Not implemented')
})
