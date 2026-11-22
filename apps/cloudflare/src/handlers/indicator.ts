import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdCloudforceOneEventsDatasetDatasetIdIndicatorsIndicatorIdRelationshipsRelUuidRoute,
  deleteAccountsAccountIdCloudforceOneEventsDatasetDatasetIdIndicatorsIndicatorIdRoute,
  deleteAccountsAccountIdCloudforceOneEventsDatasetDatasetIdIndicatorsRoute,
  getAccountsAccountIdCloudforceOneEventsDatasetDatasetIdIndicatorsIndicatorIdRelationshipsRoute,
  getAccountsAccountIdCloudforceOneEventsDatasetDatasetIdIndicatorsIndicatorIdRoute,
  getAccountsAccountIdCloudforceOneEventsDatasetDatasetIdIndicatorsRoute,
  getAccountsAccountIdCloudforceOneEventsDatasetDatasetIdIndicatorsTagsRoute,
  getAccountsAccountIdCloudforceOneEventsIndicatorsAggregateRoute,
  getAccountsAccountIdCloudforceOneEventsIndicatorsRoute,
  patchAccountsAccountIdCloudforceOneEventsDatasetDatasetIdIndicatorsIndicatorIdRelationshipsRelUuidRoute,
  patchAccountsAccountIdCloudforceOneEventsDatasetDatasetIdIndicatorsIndicatorIdRoute,
  postAccountsAccountIdCloudforceOneEventsDatasetDatasetIdIndicatorsBulkRoute,
  postAccountsAccountIdCloudforceOneEventsDatasetDatasetIdIndicatorsCreateRoute,
  postAccountsAccountIdCloudforceOneEventsDatasetDatasetIdIndicatorsIndicatorIdRelationshipsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const indicatorHandler = app
  .openapi(deleteAccountsAccountIdCloudforceOneEventsDatasetDatasetIdIndicatorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdCloudforceOneEventsDatasetDatasetIdIndicatorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdCloudforceOneEventsDatasetDatasetIdIndicatorsBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdCloudforceOneEventsDatasetDatasetIdIndicatorsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdCloudforceOneEventsDatasetDatasetIdIndicatorsTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteAccountsAccountIdCloudforceOneEventsDatasetDatasetIdIndicatorsIndicatorIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getAccountsAccountIdCloudforceOneEventsDatasetDatasetIdIndicatorsIndicatorIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchAccountsAccountIdCloudforceOneEventsDatasetDatasetIdIndicatorsIndicatorIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getAccountsAccountIdCloudforceOneEventsDatasetDatasetIdIndicatorsIndicatorIdRelationshipsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postAccountsAccountIdCloudforceOneEventsDatasetDatasetIdIndicatorsIndicatorIdRelationshipsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteAccountsAccountIdCloudforceOneEventsDatasetDatasetIdIndicatorsIndicatorIdRelationshipsRelUuidRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchAccountsAccountIdCloudforceOneEventsDatasetDatasetIdIndicatorsIndicatorIdRelationshipsRelUuidRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getAccountsAccountIdCloudforceOneEventsIndicatorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdCloudforceOneEventsIndicatorsAggregateRoute, (c) => {
    throw new Error('Not implemented')
  })
