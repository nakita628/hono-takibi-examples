import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postOrganizationMicrosoftGraphGetAvailableExtensionPropertiesRoute,
  postOrganizationMicrosoftGraphGetByIdsRoute,
  postOrganizationMicrosoftGraphValidatePropertiesRoute,
  postOrganizationOrganizationIdMicrosoftGraphCheckMemberGroupsRoute,
  postOrganizationOrganizationIdMicrosoftGraphCheckMemberObjectsRoute,
  postOrganizationOrganizationIdMicrosoftGraphGetMemberGroupsRoute,
  postOrganizationOrganizationIdMicrosoftGraphGetMemberObjectsRoute,
  postOrganizationOrganizationIdMicrosoftGraphRestoreRoute,
  postOrganizationOrganizationIdMicrosoftGraphSetMobileDeviceManagementAuthorityRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organizationActionsHandler = app
  .openapi(postOrganizationMicrosoftGraphGetAvailableExtensionPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationMicrosoftGraphGetByIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationMicrosoftGraphValidatePropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationOrganizationIdMicrosoftGraphCheckMemberGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationOrganizationIdMicrosoftGraphCheckMemberObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationOrganizationIdMicrosoftGraphGetMemberGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationOrganizationIdMicrosoftGraphGetMemberObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationOrganizationIdMicrosoftGraphRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postOrganizationOrganizationIdMicrosoftGraphSetMobileDeviceManagementAuthorityRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
