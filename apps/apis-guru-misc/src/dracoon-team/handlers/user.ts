import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV4UserAccountAvatarRoute,
  deleteV4UserAccountKeypairRoute,
  deleteV4UserAccountMfaRoute,
  deleteV4UserAccountMfaTotpIdRoute,
  deleteV4UserOauthApprovalsClientIdRoute,
  deleteV4UserOauthAuthorizationsClientIdAuthorizationIdRoute,
  deleteV4UserOauthAuthorizationsClientIdRoute,
  deleteV4UserProfileAttributesKeyRoute,
  deleteV4UserSubscriptionsDownloadSharesShareIdRoute,
  deleteV4UserSubscriptionsNodesNodeIdRoute,
  deleteV4UserSubscriptionsUploadSharesShareIdRoute,
  getV4UserAccountAvatarRoute,
  getV4UserAccountCustomerKeypairRoute,
  getV4UserAccountCustomerRoute,
  getV4UserAccountKeypairRoute,
  getV4UserAccountKeypairsRoute,
  getV4UserAccountMfaRoute,
  getV4UserAccountMfaTotpRoute,
  getV4UserAccountRoute,
  getV4UserNotificationsConfigRoute,
  getV4UserOauthApprovalsRoute,
  getV4UserOauthAuthorizationsRoute,
  getV4UserPingRoute,
  getV4UserProfileAttributesRoute,
  getV4UserSubscriptionsDownloadSharesRoute,
  getV4UserSubscriptionsNodesRoute,
  getV4UserSubscriptionsUploadSharesRoute,
  postV4UserAccountAvatarRoute,
  postV4UserAccountKeypairRoute,
  postV4UserAccountKeypairsRoute,
  postV4UserAccountMfaTotpRoute,
  postV4UserLogoutRoute,
  postV4UserProfileAttributesRoute,
  postV4UserSubscriptionsDownloadSharesShareIdRoute,
  postV4UserSubscriptionsNodesNodeIdRoute,
  postV4UserSubscriptionsUploadSharesShareIdRoute,
  putV4UserAccountCustomerRoute,
  putV4UserAccountPasswordRoute,
  putV4UserAccountRoute,
  putV4UserNotificationsConfigIdRoute,
  putV4UserProfileAttributesRoute,
  putV4UserSubscriptionsDownloadSharesRoute,
  putV4UserSubscriptionsNodesRoute,
  putV4UserSubscriptionsUploadSharesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userHandler = app
  .openapi(getV4UserAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4UserAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV4UserAccountAvatarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4UserAccountAvatarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4UserAccountAvatarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4UserAccountCustomerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4UserAccountCustomerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4UserAccountCustomerKeypairRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV4UserAccountKeypairRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4UserAccountKeypairRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4UserAccountKeypairRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4UserAccountKeypairsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4UserAccountKeypairsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV4UserAccountMfaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4UserAccountMfaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4UserAccountMfaTotpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4UserAccountMfaTotpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV4UserAccountMfaTotpIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4UserAccountPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4UserLogoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4UserNotificationsConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4UserNotificationsConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4UserOauthApprovalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV4UserOauthApprovalsClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4UserOauthAuthorizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV4UserOauthAuthorizationsClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV4UserOauthAuthorizationsClientIdAuthorizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4UserPingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4UserProfileAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4UserProfileAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4UserProfileAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV4UserProfileAttributesKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4UserSubscriptionsDownloadSharesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4UserSubscriptionsDownloadSharesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV4UserSubscriptionsDownloadSharesShareIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4UserSubscriptionsDownloadSharesShareIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4UserSubscriptionsNodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4UserSubscriptionsNodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV4UserSubscriptionsNodesNodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4UserSubscriptionsNodesNodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4UserSubscriptionsUploadSharesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4UserSubscriptionsUploadSharesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV4UserSubscriptionsUploadSharesShareIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4UserSubscriptionsUploadSharesShareIdRoute, (c) => {
    throw new Error('Not implemented')
  })
