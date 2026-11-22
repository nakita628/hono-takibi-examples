import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2RumApplicationsAppIdRetentionFiltersExclusionEfIdRoute,
  deleteApiV2RumApplicationsAppIdRetentionFiltersRfIdRoute,
  getApiV2RumApplicationsAppIdRetentionFiltersExclusionEfIdRoute,
  getApiV2RumApplicationsAppIdRetentionFiltersExclusionRoute,
  getApiV2RumApplicationsAppIdRetentionFiltersPermanentPermanentRfIdRoute,
  getApiV2RumApplicationsAppIdRetentionFiltersPermanentRoute,
  getApiV2RumApplicationsAppIdRetentionFiltersRfIdRoute,
  getApiV2RumApplicationsAppIdRetentionFiltersRoute,
  patchApiV2RumApplicationsAppIdRelationshipsRetentionFiltersRoute,
  patchApiV2RumApplicationsAppIdRetentionFiltersExclusionEfIdRoute,
  patchApiV2RumApplicationsAppIdRetentionFiltersPermanentPermanentRfIdRoute,
  patchApiV2RumApplicationsAppIdRetentionFiltersRfIdRoute,
  postApiV2RumApplicationsAppIdRetentionFiltersExclusionRoute,
  postApiV2RumApplicationsAppIdRetentionFiltersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const rumRetentionFiltersHandler = app
  .openapi(patchApiV2RumApplicationsAppIdRelationshipsRetentionFiltersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RumApplicationsAppIdRetentionFiltersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2RumApplicationsAppIdRetentionFiltersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RumApplicationsAppIdRetentionFiltersExclusionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2RumApplicationsAppIdRetentionFiltersExclusionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2RumApplicationsAppIdRetentionFiltersExclusionEfIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RumApplicationsAppIdRetentionFiltersExclusionEfIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2RumApplicationsAppIdRetentionFiltersExclusionEfIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RumApplicationsAppIdRetentionFiltersPermanentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RumApplicationsAppIdRetentionFiltersPermanentPermanentRfIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2RumApplicationsAppIdRetentionFiltersPermanentPermanentRfIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2RumApplicationsAppIdRetentionFiltersRfIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RumApplicationsAppIdRetentionFiltersRfIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2RumApplicationsAppIdRetentionFiltersRfIdRoute, (c) => {
    throw new Error('Not implemented')
  })
