import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdCloudforceOneEventsDatasetDatasetIdRoute,
  deleteAccountsAccountIdCloudforceOneEventsDatasetsPreferencesRoute,
  getAccountsAccountIdCloudforceOneEventsDatasetDatasetIdRoute,
  getAccountsAccountIdCloudforceOneEventsDatasetRoute,
  getAccountsAccountIdCloudforceOneEventsDatasetsPreferencesRoute,
  patchAccountsAccountIdCloudforceOneEventsDatasetDatasetIdRoute,
  postAccountsAccountIdCloudforceOneEventsDatasetCreateRoute,
  postAccountsAccountIdCloudforceOneEventsDatasetDatasetIdRoute,
  putAccountsAccountIdCloudforceOneEventsDatasetsPreferencesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const datasetHandler = app
  .openapi(getAccountsAccountIdCloudforceOneEventsDatasetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdCloudforceOneEventsDatasetCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdCloudforceOneEventsDatasetDatasetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdCloudforceOneEventsDatasetDatasetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdCloudforceOneEventsDatasetDatasetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdCloudforceOneEventsDatasetDatasetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdCloudforceOneEventsDatasetsPreferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdCloudforceOneEventsDatasetsPreferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdCloudforceOneEventsDatasetsPreferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
