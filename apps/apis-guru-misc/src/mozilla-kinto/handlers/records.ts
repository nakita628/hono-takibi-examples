import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBucketsBucketIdCollectionsCollectionIdRecordsIdRoute,
  getBucketsBucketIdCollectionsCollectionIdRecordsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const recordsHandler = app
  .openapi(getBucketsBucketIdCollectionsCollectionIdRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBucketsBucketIdCollectionsCollectionIdRecordsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
