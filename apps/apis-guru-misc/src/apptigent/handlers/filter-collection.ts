import { OpenAPIHono } from '@hono/zod-openapi'
import { postFilterCollectionRoute } from '../routes'

const app = new OpenAPIHono()

export const filterCollectionHandler = app.openapi(postFilterCollectionRoute, (c) => {
  throw new Error('Not implemented')
})
