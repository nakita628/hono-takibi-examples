import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postContactsGetAvailableExtensionPropertiesRoute,
  postContactsGetByIdsRoute,
  postContactsOrgContactIdCheckMemberGroupsRoute,
  postContactsOrgContactIdCheckMemberObjectsRoute,
  postContactsOrgContactIdGetMemberGroupsRoute,
  postContactsOrgContactIdGetMemberObjectsRoute,
  postContactsOrgContactIdRestoreRoute,
  postContactsOrgContactIdRetryServiceProvisioningRoute,
  postContactsValidatePropertiesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const contactsOrgContactActionsHandler = app
  .openapi(postContactsOrgContactIdCheckMemberGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContactsOrgContactIdCheckMemberObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContactsOrgContactIdGetMemberGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContactsOrgContactIdGetMemberObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContactsOrgContactIdRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContactsOrgContactIdRetryServiceProvisioningRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContactsGetAvailableExtensionPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContactsGetByIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContactsValidatePropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
