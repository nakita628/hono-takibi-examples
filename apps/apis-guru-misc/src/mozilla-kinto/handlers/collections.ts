import { OpenAPIHono } from '@hono/zod-openapi'
import { getBucketsBucketIdCollectionsIdRoute, getBucketsBucketIdCollectionsRoute } from '../routes'

const app = new OpenAPIHono()

export const collectionsHandler = app
  .openapi(getBucketsBucketIdCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBucketsBucketIdCollectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
