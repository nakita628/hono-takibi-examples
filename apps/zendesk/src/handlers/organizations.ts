import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2OrganizationsDestroyManyRoute,
  deleteApiV2OrganizationsOrganizationIdRoute,
  getApiV2OrganizationMergesOrganizationMergeIdRoute,
  getApiV2OrganizationsAutocompleteRoute,
  getApiV2OrganizationsCountRoute,
  getApiV2OrganizationsOrganizationIdMergesRoute,
  getApiV2OrganizationsOrganizationIdRelatedRoute,
  getApiV2OrganizationsOrganizationIdRoute,
  getApiV2OrganizationsRoute,
  getApiV2OrganizationsSearchRoute,
  getApiV2OrganizationsShowManyRoute,
  getApiV2UsersUserIdOrganizationsCountRoute,
  getApiV2UsersUserIdOrganizationsRoute,
  postApiV2OrganizationsCreateManyRoute,
  postApiV2OrganizationsCreateOrUpdateRoute,
  postApiV2OrganizationsOrganizationIdMergeRoute,
  postApiV2OrganizationsRoute,
  putApiV2OrganizationsOrganizationIdRoute,
  putApiV2OrganizationsUpdateManyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organizationsHandler = app
  .openapi(getApiV2OrganizationMergesOrganizationMergeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2OrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2OrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2OrganizationsOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2OrganizationsOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2OrganizationsOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2OrganizationsOrganizationIdMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2OrganizationsOrganizationIdMergesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2OrganizationsOrganizationIdRelatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2OrganizationsAutocompleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2OrganizationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2OrganizationsCreateManyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2OrganizationsCreateOrUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2OrganizationsDestroyManyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2OrganizationsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2OrganizationsShowManyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2OrganizationsUpdateManyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersUserIdOrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersUserIdOrganizationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
