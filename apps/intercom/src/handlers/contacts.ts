import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteContactsContactIdCompaniesCompanyIdRoute,
  deleteContactsContactIdRoute,
  deleteContactsContactIdSubscriptionsSubscriptionIdRoute,
  deleteContactsContactIdTagsTagIdRoute,
  getContactsActivitiesRoute,
  getContactsBulkIdRoute,
  getContactsContactIdCompaniesRoute,
  getContactsContactIdNotesRoute,
  getContactsContactIdRoute,
  getContactsContactIdSegmentsRoute,
  getContactsContactIdSubscriptionsRoute,
  getContactsContactIdTagsRoute,
  getContactsDeletedRoute,
  getContactsFindByExternalIdExternalIdRoute,
  getContactsIdBannersRoute,
  getContactsIdMergeHistoriesRoute,
  getContactsRoute,
  postContactsBulkDeleteRoute,
  postContactsBulkRoute,
  postContactsContactIdArchiveRoute,
  postContactsContactIdBlockRoute,
  postContactsContactIdCompaniesRoute,
  postContactsContactIdNotesRoute,
  postContactsContactIdSubscriptionsRoute,
  postContactsContactIdTagsRoute,
  postContactsContactIdUnarchiveRoute,
  postContactsIdBannersViewIdDismissRoute,
  postContactsMergePreviewRoute,
  postContactsMergeRoute,
  postContactsRoute,
  postContactsSearchRoute,
  putContactsBulkRoute,
  putContactsContactIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const contactsHandler = app
  .openapi(postContactsContactIdCompaniesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsContactIdCompaniesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteContactsContactIdCompaniesCompanyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsContactIdNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContactsContactIdNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsContactIdSegmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsContactIdSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContactsContactIdSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteContactsContactIdSubscriptionsSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsContactIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContactsContactIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteContactsContactIdTagsTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsDeletedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putContactsContactIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsContactIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteContactsContactIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContactsMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContactsMergePreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContactsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsActivitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsFindByExternalIdExternalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContactsContactIdArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContactsContactIdUnarchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsIdBannersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContactsIdBannersViewIdDismissRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContactsContactIdBlockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsIdMergeHistoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContactsBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putContactsBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContactsBulkDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsBulkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
