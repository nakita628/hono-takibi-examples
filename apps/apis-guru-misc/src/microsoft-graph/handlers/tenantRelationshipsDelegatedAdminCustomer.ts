import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTenantRelationshipsDelegatedAdminCustomersDelegatedAdminCustomerIdRoute,
  deleteTenantRelationshipsDelegatedAdminCustomersDelegatedAdminCustomerIdServiceManagementDetailsDelegatedAdminServiceManagementDetailIdRoute,
  getTenantRelationshipsDelegatedAdminCustomersDelegatedAdminCustomerIdRoute,
  getTenantRelationshipsDelegatedAdminCustomersDelegatedAdminCustomerIdServiceManagementDetailsDelegatedAdminServiceManagementDetailIdRoute,
  getTenantRelationshipsDelegatedAdminCustomersDelegatedAdminCustomerIdServiceManagementDetailsRoute,
  getTenantRelationshipsDelegatedAdminCustomersRoute,
  patchTenantRelationshipsDelegatedAdminCustomersDelegatedAdminCustomerIdRoute,
  patchTenantRelationshipsDelegatedAdminCustomersDelegatedAdminCustomerIdServiceManagementDetailsDelegatedAdminServiceManagementDetailIdRoute,
  postTenantRelationshipsDelegatedAdminCustomersDelegatedAdminCustomerIdServiceManagementDetailsRoute,
  postTenantRelationshipsDelegatedAdminCustomersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tenantRelationshipsDelegatedAdminCustomerHandler = app
  .openapi(getTenantRelationshipsDelegatedAdminCustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTenantRelationshipsDelegatedAdminCustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTenantRelationshipsDelegatedAdminCustomersDelegatedAdminCustomerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTenantRelationshipsDelegatedAdminCustomersDelegatedAdminCustomerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTenantRelationshipsDelegatedAdminCustomersDelegatedAdminCustomerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getTenantRelationshipsDelegatedAdminCustomersDelegatedAdminCustomerIdServiceManagementDetailsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postTenantRelationshipsDelegatedAdminCustomersDelegatedAdminCustomerIdServiceManagementDetailsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteTenantRelationshipsDelegatedAdminCustomersDelegatedAdminCustomerIdServiceManagementDetailsDelegatedAdminServiceManagementDetailIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getTenantRelationshipsDelegatedAdminCustomersDelegatedAdminCustomerIdServiceManagementDetailsDelegatedAdminServiceManagementDetailIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchTenantRelationshipsDelegatedAdminCustomersDelegatedAdminCustomerIdServiceManagementDetailsDelegatedAdminServiceManagementDetailIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
