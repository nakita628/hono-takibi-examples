import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2ResourceCollectionsResourceCollectionIdRoute,
  getApiV2ResourceCollectionsResourceCollectionIdRoute,
  getApiV2ResourceCollectionsRoute,
  postApiV2ResourceCollectionsRoute,
  putApiV2ResourceCollectionsResourceCollectionIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const resourceCollectionsHandler = app
  .openapi(getApiV2ResourceCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ResourceCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ResourceCollectionsResourceCollectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2ResourceCollectionsResourceCollectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ResourceCollectionsResourceCollectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
