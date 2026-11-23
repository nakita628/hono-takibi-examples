import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersDeleteEmailRoute,
  deleteUsersTokensDeleteTokenPrefixRoute,
  getUsersAllRunnablesRoute,
  getUsersCloudTrialOfferRoute,
  getUsersEmailRoute,
  getUsersExistsEmailRoute,
  getUsersExportRoute,
  getUsersExtJwtTokensRoute,
  getUsersGuestsRoute,
  getUsersListAsSuperAdminRoute,
  getUsersListInvitesRoute,
  getUsersOffboardPreviewEmailRoute,
  getUsersOnboardingProfileRoute,
  getUsersRefreshTokenRoute,
  getUsersTokensListRoute,
  getUsersTutorialProgressRoute,
  getUsersUsageRoute,
  getUsersUsernameInfoEmailRoute,
  getUsersWhoamiRoute,
  postUsersAcceptInviteRoute,
  postUsersChangeEmailEmailRoute,
  postUsersCloudTrialOfferGoRoute,
  postUsersCloudTrialOfferRoute,
  postUsersCreateRoute,
  postUsersDeclineInviteRoute,
  postUsersLeaveInstanceRoute,
  postUsersLoginLinksRoute,
  postUsersOffboardEmailRoute,
  postUsersOnboardingProfileRoute,
  postUsersOnboardingRoute,
  postUsersOverwriteRoute,
  postUsersRenameEmailRoute,
  postUsersSetLoginTypeUserRoute,
  postUsersSetPasswordOfUserRoute,
  postUsersSetpasswordRoute,
  postUsersTokensCreateRoute,
  postUsersTokensImpersonateRoute,
  postUsersTokensUpdateLabelTokenPrefixRoute,
  postUsersTokensUpdateScopesTokenPrefixRoute,
  postUsersTutorialProgressRoute,
  postUsersUpdateEmailRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(postUsersSetpasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersSetPasswordOfUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersSetLoginTypeUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUpdateEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameInfoEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersRenameEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersChangeEmailEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersDeleteEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersOverwriteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersExtJwtTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersGuestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersOnboardingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersOffboardPreviewEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersOffboardEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersRefreshTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersTutorialProgressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersTutorialProgressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersLeaveInstanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersAllRunnablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersWhoamiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersListInvitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersAcceptInviteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersDeclineInviteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersExistsEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersListAsSuperAdminRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersTokensCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersTokensImpersonateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersLoginLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersCloudTrialOfferRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersCloudTrialOfferRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersCloudTrialOfferGoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersOnboardingProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersOnboardingProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersTokensDeleteTokenPrefixRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersTokensUpdateScopesTokenPrefixRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersTokensUpdateLabelTokenPrefixRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersTokensListRoute, (c) => {
    throw new Error('Not implemented')
  })
