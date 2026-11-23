import { OpenAPIHono } from '@hono/zod-openapi'
import { postAddToCollectionRoute } from '../routes'

const app = new OpenAPIHono()

export const addToCollectionHandler = app.openapi(postAddToCollectionRoute, (c) => {
  throw new Error('Not implemented')
})
