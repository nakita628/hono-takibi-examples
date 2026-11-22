import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV4UserEmailsEmailIdRoute,
  deleteApiV4UsersIdEmailsEmailIdRoute,
  deleteApiV4UsersIdIdentitiesProviderRoute,
  deleteApiV4UsersIdRoute,
  getApiV4UserActivitiesRoute,
  getApiV4UserCountsRoute,
  getApiV4UserEmailsEmailIdRoute,
  getApiV4UserEmailsRoute,
  getApiV4UserPreferencesRoute,
  getApiV4UserRoute,
  getApiV4UsersIdAssociationsCountRoute,
  getApiV4UsersIdEmailsRoute,
  getApiV4UsersIdFollowersRoute,
  getApiV4UsersIdFollowingRoute,
  getApiV4UsersIdRoute,
  getApiV4UsersIdSupportPinRoute,
  getApiV4UsersRoute,
  getApiV4UserStatusRoute,
  getApiV4UserSupportPinRoute,
  getApiV4UsersUserIdMembershipsRoute,
  getApiV4UsersUserIdStatusRoute,
  patchApiV4UsersIdDisableTwoFactorRoute,
  patchApiV4UserStatusRoute,
  postApiV4UserEmailsRoute,
  postApiV4UserRunnersRoute,
  postApiV4UsersIdActivateRoute,
  postApiV4UsersIdApproveRoute,
  postApiV4UsersIdBanRoute,
  postApiV4UsersIdBlockRoute,
  postApiV4UsersIdDeactivateRoute,
  postApiV4UsersIdEmailsRoute,
  postApiV4UsersIdFollowRoute,
  postApiV4UsersIdRejectRoute,
  postApiV4UsersIdSupportPinRevokeRoute,
  postApiV4UsersIdUnbanRoute,
  postApiV4UsersIdUnblockRoute,
  postApiV4UsersIdUnfollowRoute,
  postApiV4UsersRoute,
  postApiV4UserSupportPinRoute,
  putApiV4UserPreferencesRoute,
  putApiV4UsersIdRoute,
  putApiV4UserStatusRoute,
  putApiV4UserUserIdCreditCardValidationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getApiV4UsersIdSupportPinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4UsersIdSupportPinRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4UsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4UsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4UsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4UsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4UsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4UsersUserIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4UsersIdFollowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4UsersIdUnfollowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4UsersIdFollowingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4UsersIdFollowersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV4UsersIdDisableTwoFactorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4UsersIdIdentitiesProviderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4UsersIdEmailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4UsersIdEmailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4UsersIdEmailsEmailIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4UsersIdActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4UsersIdApproveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4UsersIdRejectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4UsersIdDeactivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4UsersIdBlockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4UsersIdUnblockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4UsersIdBanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4UsersIdUnbanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4UsersUserIdMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4UsersIdAssociationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4UserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4UserEmailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4UserEmailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4UserUserIdCreditCardValidationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4UserSupportPinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4UserSupportPinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4UserPreferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4UserPreferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4UserEmailsEmailIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4UserEmailsEmailIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4UserActivitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4UserStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV4UserStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4UserStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4UserRunnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4UserCountsRoute, (c) => {
    throw new Error('Not implemented')
  })
