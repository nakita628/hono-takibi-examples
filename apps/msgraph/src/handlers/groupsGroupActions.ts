import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postGroupsGetAvailableExtensionPropertiesRoute,
  postGroupsGetByIdsRoute,
  postGroupsGroupIdAddFavoriteRoute,
  postGroupsGroupIdAssignLicenseRoute,
  postGroupsGroupIdCheckGrantedPermissionsForAppRoute,
  postGroupsGroupIdCheckMemberGroupsRoute,
  postGroupsGroupIdCheckMemberObjectsRoute,
  postGroupsGroupIdGetMemberGroupsRoute,
  postGroupsGroupIdGetMemberObjectsRoute,
  postGroupsGroupIdRemoveFavoriteRoute,
  postGroupsGroupIdRenewRoute,
  postGroupsGroupIdResetUnseenCountRoute,
  postGroupsGroupIdRestoreRoute,
  postGroupsGroupIdRetryServiceProvisioningRoute,
  postGroupsGroupIdSubscribeByMailRoute,
  postGroupsGroupIdUnsubscribeByMailRoute,
  postGroupsGroupIdValidatePropertiesRoute,
  postGroupsValidatePropertiesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupsGroupActionsHandler = app
  .openapi(postGroupsGroupIdAddFavoriteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdAssignLicenseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdCheckGrantedPermissionsForAppRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdCheckMemberGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdCheckMemberObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdGetMemberGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdGetMemberObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdRemoveFavoriteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdRenewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdResetUnseenCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdRetryServiceProvisioningRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdSubscribeByMailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdUnsubscribeByMailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdValidatePropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGetAvailableExtensionPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGetByIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsValidatePropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
