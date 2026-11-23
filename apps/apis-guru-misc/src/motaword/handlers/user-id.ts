import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUserIdDeleteAccountRoute,
  getUserIdDocumentsRoute,
  getUserIdEarningsRoute,
  getUserIdPaymentRoute,
  getUserIdPermissionsRoute,
  getUserIdProjectsVendorRoute,
  getUserIdResponsivityRoute,
  getUserIdRoute,
  getUserIdStatsPopularPairsRoute,
  getUserIdStatsProjectsRoute,
  getUserIdStatsRoute,
  getUserIdUserGroupsRoute,
  postUserIdApproveRoute,
  postUserIdDowngradeProofreaderRoute,
  postUserIdFreezeAccountRoute,
  postUserIdMakeProofreaderRoute,
  postUserIdNotificationsSubscribeRoute,
  postUserIdNotificationsUnsubscribeRoute,
  postUserIdPaymentRoute,
  postUserIdProfilePictureRoute,
  postUserIdRejectRoute,
  postUserIdResendEmailConfirmationRoute,
  postUserIdRoute,
  postUserIdSuspendRoute,
  postUserIdUnfreezeAccountRoute,
  postUserIdUserGroupsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userIdHandler = app
  .openapi(getUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserIdApproveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserIdDeleteAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserIdDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserIdDowngradeProofreaderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserIdEarningsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserIdFreezeAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserIdMakeProofreaderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserIdNotificationsSubscribeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserIdNotificationsUnsubscribeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserIdPaymentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserIdPaymentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserIdPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserIdProfilePictureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserIdProjectsVendorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserIdRejectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserIdResendEmailConfirmationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserIdResponsivityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserIdStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserIdStatsPopularPairsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserIdStatsProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserIdSuspendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserIdUnfreezeAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserIdUserGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserIdUserGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
