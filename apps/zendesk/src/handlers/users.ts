import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2DeletedUsersDeletedUserIdRoute,
  deleteApiV2UsersDestroyManyRoute,
  deleteApiV2UsersUserIdRoute,
  deleteApiV2UsersUserIdSuspensionRoute,
  getApiV2DeletedUsersCountRoute,
  getApiV2DeletedUsersDeletedUserIdRoute,
  getApiV2DeletedUsersRoute,
  getApiV2GroupsGroupIdUsersCountRoute,
  getApiV2GroupsGroupIdUsersRoute,
  getApiV2OrganizationsOrganizationIdUsersCountRoute,
  getApiV2OrganizationsOrganizationIdUsersRoute,
  getApiV2UsersAutocompleteRoute,
  getApiV2UsersCountRoute,
  getApiV2UsersMeRoute,
  getApiV2UsersMeSettingsRoute,
  getApiV2UsersRoute,
  getApiV2UsersSearchRoute,
  getApiV2UsersShowManyRoute,
  getApiV2UsersUserIdComplianceDeletionStatusesRoute,
  getApiV2UsersUserIdEntitlementsFullRoute,
  getApiV2UsersUserIdRelatedRoute,
  getApiV2UsersUserIdRoute,
  getApiV2UsersUserIdSuspensionRoute,
  postApiV2UsersAutocompleteRoute,
  postApiV2UsersCreateManyRoute,
  postApiV2UsersCreateOrUpdateManyRoute,
  postApiV2UsersCreateOrUpdateRoute,
  postApiV2UsersLogoutManyRoute,
  postApiV2UsersRequestCreateRoute,
  postApiV2UsersRoute,
  postApiV2UsersUserIdSuspensionRoute,
  putApiV2UsersMeSettingsRoute,
  putApiV2UsersUpdateManyRoute,
  putApiV2UsersUserIdMergeRoute,
  putApiV2UsersUserIdRoute,
  putApiV2UsersUserIdSuspensionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getApiV2DeletedUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DeletedUsersDeletedUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2DeletedUsersDeletedUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DeletedUsersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2GroupsGroupIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2GroupsGroupIdUsersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2OrganizationsOrganizationIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2OrganizationsOrganizationIdUsersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2UsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2UsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2UsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersUserIdComplianceDeletionStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersUserIdEntitlementsFullRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2UsersUserIdMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersUserIdRelatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersUserIdSuspensionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2UsersUserIdSuspensionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2UsersUserIdSuspensionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2UsersUserIdSuspensionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersAutocompleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2UsersAutocompleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2UsersCreateManyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2UsersCreateOrUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2UsersCreateOrUpdateManyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2UsersDestroyManyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2UsersLogoutManyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersMeSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2UsersMeSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2UsersRequestCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersShowManyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2UsersUpdateManyRoute, (c) => {
    throw new Error('Not implemented')
  })
