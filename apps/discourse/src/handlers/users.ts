import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminUsersIdJsonRoute,
  getAdminUsersIdJsonRoute,
  getAdminUsersJsonRoute,
  getAdminUsersListFlagJsonRoute,
  getDirectoryItemsJsonRoute,
  getUByExternalExternalIdJsonRoute,
  getUByExternalProviderExternalIdJsonRoute,
  getUserActionsJsonRoute,
  getUUsernameEmailsJsonRoute,
  getUUsernameJsonRoute,
  postAdminUsersIdLogOutJsonRoute,
  postAdminUsersIdMergeJsonRoute,
  postSessionForgotPasswordJsonRoute,
  postUserAvatarUsernameRefreshGravatarJsonRoute,
  postUsersJsonRoute,
  putAdminUsersIdActivateJsonRoute,
  putAdminUsersIdAnonymizeJsonRoute,
  putAdminUsersIdDeactivateJsonRoute,
  putAdminUsersIdSilenceJsonRoute,
  putAdminUsersIdSuspendJsonRoute,
  putUsersPasswordResetTokenJsonRoute,
  putUUsernameJsonRoute,
  putUUsernamePreferencesAvatarPickJsonRoute,
  putUUsernamePreferencesEmailJsonRoute,
  putUUsernamePreferencesUsernameJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(postUsersJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUUsernameJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUUsernameJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUByExternalExternalIdJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUByExternalProviderExternalIdJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUUsernamePreferencesAvatarPickJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUUsernamePreferencesEmailJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUUsernamePreferencesUsernameJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryItemsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminUsersIdJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminUsersIdJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminUsersIdActivateJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminUsersIdDeactivateJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminUsersIdSuspendJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminUsersIdSilenceJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminUsersIdAnonymizeJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminUsersIdMergeJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminUsersIdLogOutJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserAvatarUsernameRefreshGravatarJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminUsersJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminUsersListFlagJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserActionsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSessionForgotPasswordJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersPasswordResetTokenJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUUsernameEmailsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
