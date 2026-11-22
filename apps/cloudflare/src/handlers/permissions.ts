import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdCloudforceOneEventsDatasetDatasetIdPermissionsGrantIdRoute,
  getAccountsAccountIdCloudforceOneEventsDatasetDatasetIdPermissionsRoute,
  postAccountsAccountIdCloudforceOneEventsDatasetDatasetIdPermissionsRoute,
  putAccountsAccountIdCloudforceOneEventsDatasetDatasetIdPermissionsGrantIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const permissionsHandler = app
  .openapi(getAccountsAccountIdCloudforceOneEventsDatasetDatasetIdPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdCloudforceOneEventsDatasetDatasetIdPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteAccountsAccountIdCloudforceOneEventsDatasetDatasetIdPermissionsGrantIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(putAccountsAccountIdCloudforceOneEventsDatasetDatasetIdPermissionsGrantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
