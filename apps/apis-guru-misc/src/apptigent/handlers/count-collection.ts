import { OpenAPIHono } from '@hono/zod-openapi'
import { postCountCollectionRoute } from '../routes'

const app = new OpenAPIHono()

export const countCollectionHandler = app.openapi(postCountCollectionRoute, (c) => {
  throw new Error('Not implemented')
})
