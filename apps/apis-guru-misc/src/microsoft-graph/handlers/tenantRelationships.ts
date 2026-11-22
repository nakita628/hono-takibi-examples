import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTenantRelationshipsDelegatedAdminCustomersCountRoute,
  getTenantRelationshipsDelegatedAdminCustomersDelegatedAdminCustomerIdServiceManagementDetailsCountRoute,
  getTenantRelationshipsDelegatedAdminRelationshipsCountRoute,
  getTenantRelationshipsDelegatedAdminRelationshipsDelegatedAdminRelationshipIdAccessAssignmentsCountRoute,
  getTenantRelationshipsDelegatedAdminRelationshipsDelegatedAdminRelationshipIdOperationsCountRoute,
  getTenantRelationshipsDelegatedAdminRelationshipsDelegatedAdminRelationshipIdRequestsCountRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tenantRelationshipsHandler = app
  .openapi(getTenantRelationshipsDelegatedAdminCustomersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getTenantRelationshipsDelegatedAdminCustomersDelegatedAdminCustomerIdServiceManagementDetailsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getTenantRelationshipsDelegatedAdminRelationshipsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getTenantRelationshipsDelegatedAdminRelationshipsDelegatedAdminRelationshipIdAccessAssignmentsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getTenantRelationshipsDelegatedAdminRelationshipsDelegatedAdminRelationshipIdOperationsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getTenantRelationshipsDelegatedAdminRelationshipsDelegatedAdminRelationshipIdRequestsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
