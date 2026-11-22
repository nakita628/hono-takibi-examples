import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTenantRelationshipsDelegatedAdminRelationshipsDelegatedAdminRelationshipIdAccessAssignmentsDelegatedAdminAccessAssignmentIdRoute,
  deleteTenantRelationshipsDelegatedAdminRelationshipsDelegatedAdminRelationshipIdOperationsDelegatedAdminRelationshipOperationIdRoute,
  deleteTenantRelationshipsDelegatedAdminRelationshipsDelegatedAdminRelationshipIdRequestsDelegatedAdminRelationshipRequestIdRoute,
  deleteTenantRelationshipsDelegatedAdminRelationshipsDelegatedAdminRelationshipIdRoute,
  getTenantRelationshipsDelegatedAdminRelationshipsCountRoute,
  getTenantRelationshipsDelegatedAdminRelationshipsDelegatedAdminRelationshipIdAccessAssignmentsCountRoute,
  getTenantRelationshipsDelegatedAdminRelationshipsDelegatedAdminRelationshipIdAccessAssignmentsDelegatedAdminAccessAssignmentIdRoute,
  getTenantRelationshipsDelegatedAdminRelationshipsDelegatedAdminRelationshipIdAccessAssignmentsRoute,
  getTenantRelationshipsDelegatedAdminRelationshipsDelegatedAdminRelationshipIdOperationsCountRoute,
  getTenantRelationshipsDelegatedAdminRelationshipsDelegatedAdminRelationshipIdOperationsDelegatedAdminRelationshipOperationIdRoute,
  getTenantRelationshipsDelegatedAdminRelationshipsDelegatedAdminRelationshipIdOperationsRoute,
  getTenantRelationshipsDelegatedAdminRelationshipsDelegatedAdminRelationshipIdRequestsCountRoute,
  getTenantRelationshipsDelegatedAdminRelationshipsDelegatedAdminRelationshipIdRequestsDelegatedAdminRelationshipRequestIdRoute,
  getTenantRelationshipsDelegatedAdminRelationshipsDelegatedAdminRelationshipIdRequestsRoute,
  getTenantRelationshipsDelegatedAdminRelationshipsDelegatedAdminRelationshipIdRoute,
  getTenantRelationshipsDelegatedAdminRelationshipsRoute,
  patchTenantRelationshipsDelegatedAdminRelationshipsDelegatedAdminRelationshipIdAccessAssignmentsDelegatedAdminAccessAssignmentIdRoute,
  patchTenantRelationshipsDelegatedAdminRelationshipsDelegatedAdminRelationshipIdOperationsDelegatedAdminRelationshipOperationIdRoute,
  patchTenantRelationshipsDelegatedAdminRelationshipsDelegatedAdminRelationshipIdRequestsDelegatedAdminRelationshipRequestIdRoute,
  patchTenantRelationshipsDelegatedAdminRelationshipsDelegatedAdminRelationshipIdRoute,
  postTenantRelationshipsDelegatedAdminRelationshipsDelegatedAdminRelationshipIdAccessAssignmentsRoute,
  postTenantRelationshipsDelegatedAdminRelationshipsDelegatedAdminRelationshipIdOperationsRoute,
  postTenantRelationshipsDelegatedAdminRelationshipsDelegatedAdminRelationshipIdRequestsRoute,
  postTenantRelationshipsDelegatedAdminRelationshipsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tenantRelationshipsDelegatedAdminRelationshipHandler = app
  .openapi(getTenantRelationshipsDelegatedAdminRelationshipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTenantRelationshipsDelegatedAdminRelationshipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getTenantRelationshipsDelegatedAdminRelationshipsDelegatedAdminRelationshipIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchTenantRelationshipsDelegatedAdminRelationshipsDelegatedAdminRelationshipIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteTenantRelationshipsDelegatedAdminRelationshipsDelegatedAdminRelationshipIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getTenantRelationshipsDelegatedAdminRelationshipsDelegatedAdminRelationshipIdAccessAssignmentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postTenantRelationshipsDelegatedAdminRelationshipsDelegatedAdminRelationshipIdAccessAssignmentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getTenantRelationshipsDelegatedAdminRelationshipsDelegatedAdminRelationshipIdAccessAssignmentsDelegatedAdminAccessAssignmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchTenantRelationshipsDelegatedAdminRelationshipsDelegatedAdminRelationshipIdAccessAssignmentsDelegatedAdminAccessAssignmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteTenantRelationshipsDelegatedAdminRelationshipsDelegatedAdminRelationshipIdAccessAssignmentsDelegatedAdminAccessAssignmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getTenantRelationshipsDelegatedAdminRelationshipsDelegatedAdminRelationshipIdAccessAssignmentsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getTenantRelationshipsDelegatedAdminRelationshipsDelegatedAdminRelationshipIdOperationsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postTenantRelationshipsDelegatedAdminRelationshipsDelegatedAdminRelationshipIdOperationsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getTenantRelationshipsDelegatedAdminRelationshipsDelegatedAdminRelationshipIdOperationsDelegatedAdminRelationshipOperationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchTenantRelationshipsDelegatedAdminRelationshipsDelegatedAdminRelationshipIdOperationsDelegatedAdminRelationshipOperationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteTenantRelationshipsDelegatedAdminRelationshipsDelegatedAdminRelationshipIdOperationsDelegatedAdminRelationshipOperationIdRoute,
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
    getTenantRelationshipsDelegatedAdminRelationshipsDelegatedAdminRelationshipIdRequestsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postTenantRelationshipsDelegatedAdminRelationshipsDelegatedAdminRelationshipIdRequestsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getTenantRelationshipsDelegatedAdminRelationshipsDelegatedAdminRelationshipIdRequestsDelegatedAdminRelationshipRequestIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchTenantRelationshipsDelegatedAdminRelationshipsDelegatedAdminRelationshipIdRequestsDelegatedAdminRelationshipRequestIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteTenantRelationshipsDelegatedAdminRelationshipsDelegatedAdminRelationshipIdRequestsDelegatedAdminRelationshipRequestIdRoute,
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
  .openapi(getTenantRelationshipsDelegatedAdminRelationshipsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
