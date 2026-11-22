import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMerchantIdCollectionsCollectionIdRoute,
  getMerchantIdCollectionsCollectionIdRoute,
  getMerchantIdCollectionsRoute,
  postMerchantIdCollectionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const collectionsHandler = app
  .openapi(getMerchantIdCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMerchantIdCollectionsCollectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdCollectionsCollectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
