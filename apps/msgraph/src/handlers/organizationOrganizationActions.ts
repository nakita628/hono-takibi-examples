import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postOrganizationGetAvailableExtensionPropertiesRoute,
  postOrganizationGetByIdsRoute,
  postOrganizationOrganizationIdCheckMemberGroupsRoute,
  postOrganizationOrganizationIdCheckMemberObjectsRoute,
  postOrganizationOrganizationIdGetMemberGroupsRoute,
  postOrganizationOrganizationIdGetMemberObjectsRoute,
  postOrganizationOrganizationIdRestoreRoute,
  postOrganizationOrganizationIdSetMobileDeviceManagementAuthorityRoute,
  postOrganizationValidatePropertiesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organizationOrganizationActionsHandler = app
  .openapi(postOrganizationOrganizationIdCheckMemberGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationOrganizationIdCheckMemberObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationOrganizationIdGetMemberGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationOrganizationIdGetMemberObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationOrganizationIdRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationOrganizationIdSetMobileDeviceManagementAuthorityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationGetAvailableExtensionPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationGetByIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationValidatePropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
