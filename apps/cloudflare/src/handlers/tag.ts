import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdCloudforceOneEventsTagsTagUuidRelationshipsRelUuidRoute,
  deleteAccountsAccountIdCloudforceOneEventsTagsTagUuidRoute,
  getAccountsAccountIdCloudforceOneEventsDatasetDatasetIdTagsTagUuidIndicatorsRoute,
  getAccountsAccountIdCloudforceOneEventsTagsCategoriesActorsRoute,
  getAccountsAccountIdCloudforceOneEventsTagsRoute,
  getAccountsAccountIdCloudforceOneEventsTagsTagUuidIndicatorsRoute,
  getAccountsAccountIdCloudforceOneEventsTagsTagUuidRelationshipsRoute,
  getAccountsAccountIdCloudforceOneEventsTagsTagUuidRoute,
  patchAccountsAccountIdCloudforceOneEventsTagsTagUuidRelationshipsRelUuidRoute,
  patchAccountsAccountIdCloudforceOneEventsTagsTagUuidRoute,
  postAccountsAccountIdCloudforceOneEventsTagsCreateRoute,
  postAccountsAccountIdCloudforceOneEventsTagsTagUuidRelationshipsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tagHandler = app
  .openapi(
    getAccountsAccountIdCloudforceOneEventsDatasetDatasetIdTagsTagUuidIndicatorsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getAccountsAccountIdCloudforceOneEventsTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdCloudforceOneEventsTagsCategoriesActorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdCloudforceOneEventsTagsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdCloudforceOneEventsTagsTagUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdCloudforceOneEventsTagsTagUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdCloudforceOneEventsTagsTagUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdCloudforceOneEventsTagsTagUuidIndicatorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdCloudforceOneEventsTagsTagUuidRelationshipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdCloudforceOneEventsTagsTagUuidRelationshipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdCloudforceOneEventsTagsTagUuidRelationshipsRelUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdCloudforceOneEventsTagsTagUuidRelationshipsRelUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
