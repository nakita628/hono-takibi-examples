import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postAccountsAccountIdCloudforceOneV2CollectionsCollectionIdItemsRoute,
  postAccountsAccountIdCloudforceOneV2CollectionsCollectionIdSearchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const collections__ItemsHandler = app
  .openapi(postAccountsAccountIdCloudforceOneV2CollectionsCollectionIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdCloudforceOneV2CollectionsCollectionIdSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
