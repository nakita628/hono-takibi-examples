import { OpenAPIHono } from '@hono/zod-openapi'
import { getCollectionCollectionIdRoute } from '../routes'

const app = new OpenAPIHono()

export const collectionHandler = app.openapi(getCollectionCollectionIdRoute, (c) => {
  throw new Error('Not implemented')
})
