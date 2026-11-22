import { OpenAPIHono } from '@hono/zod-openapi'
import { getStoreCollectionsIdRoute, getStoreCollectionsRoute } from '../routes'

const app = new OpenAPIHono()

export const collectionsHandler = app
  .openapi(getStoreCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStoreCollectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
