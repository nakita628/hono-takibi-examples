import { OpenAPIHono } from '@hono/zod-openapi'
import { getCollectionIdMetaRoute, getCollectionIdRoute } from '../routes'

const app = new OpenAPIHono()

export const collectionHandler = app
  .openapi(getCollectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCollectionIdMetaRoute, (c) => {
    throw new Error('Not implemented')
  })
