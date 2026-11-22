import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2ActionsDatastoresDatastoreIdItemsBulkRoute,
  deleteApiV2ActionsDatastoresDatastoreIdItemsRoute,
  deleteApiV2ActionsDatastoresDatastoreIdRoute,
  getApiV2ActionsDatastoresDatastoreIdItemsRoute,
  getApiV2ActionsDatastoresDatastoreIdRoute,
  getApiV2ActionsDatastoresRoute,
  patchApiV2ActionsDatastoresDatastoreIdItemsRoute,
  patchApiV2ActionsDatastoresDatastoreIdRoute,
  postApiV2ActionsDatastoresDatastoreIdItemsBulkRoute,
  postApiV2ActionsDatastoresRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionsDatastoresHandler = app
  .openapi(getApiV2ActionsDatastoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ActionsDatastoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ActionsDatastoresDatastoreIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ActionsDatastoresDatastoreIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2ActionsDatastoresDatastoreIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ActionsDatastoresDatastoreIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ActionsDatastoresDatastoreIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2ActionsDatastoresDatastoreIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ActionsDatastoresDatastoreIdItemsBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ActionsDatastoresDatastoreIdItemsBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
