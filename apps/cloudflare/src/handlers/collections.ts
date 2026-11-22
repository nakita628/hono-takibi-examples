import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdCloudforceOneV2CollectionsCollectionIdColumnsColumnIdRoute,
  deleteAccountsAccountIdCloudforceOneV2CollectionsCollectionIdItemsItemIdRoute,
  deleteAccountsAccountIdCloudforceOneV2CollectionsCollectionIdRoute,
  getAccountsAccountIdCloudforceOneV2CollectionsCollectionIdExportRoute,
  getAccountsAccountIdCloudforceOneV2CollectionsCollectionIdItemsItemIdRoute,
  getAccountsAccountIdCloudforceOneV2CollectionsCollectionIdItemsRoute,
  getAccountsAccountIdCloudforceOneV2CollectionsCollectionIdRoute,
  getAccountsAccountIdCloudforceOneV2CollectionsRoute,
  patchAccountsAccountIdCloudforceOneV2CollectionsCollectionIdColumnsColumnIdRoute,
  patchAccountsAccountIdCloudforceOneV2CollectionsCollectionIdItemsItemIdRoute,
  patchAccountsAccountIdCloudforceOneV2CollectionsCollectionIdRoute,
  postAccountsAccountIdCloudforceOneV2CollectionsCollectionIdColumnsRoute,
  postAccountsAccountIdCloudforceOneV2CollectionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const collectionsHandler = app
  .openapi(getAccountsAccountIdCloudforceOneV2CollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdCloudforceOneV2CollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdCloudforceOneV2CollectionsCollectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdCloudforceOneV2CollectionsCollectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdCloudforceOneV2CollectionsCollectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdCloudforceOneV2CollectionsCollectionIdColumnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteAccountsAccountIdCloudforceOneV2CollectionsCollectionIdColumnsColumnIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchAccountsAccountIdCloudforceOneV2CollectionsCollectionIdColumnsColumnIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getAccountsAccountIdCloudforceOneV2CollectionsCollectionIdExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdCloudforceOneV2CollectionsCollectionIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdCloudforceOneV2CollectionsCollectionIdItemsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdCloudforceOneV2CollectionsCollectionIdItemsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdCloudforceOneV2CollectionsCollectionIdItemsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
