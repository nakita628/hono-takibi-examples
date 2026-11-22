import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTenantRelationshipsMultiTenantOrganizationTenantsMultiTenantOrganizationMemberIdRoute,
  getTenantRelationshipsMultiTenantOrganizationJoinRequestRoute,
  getTenantRelationshipsMultiTenantOrganizationRoute,
  getTenantRelationshipsMultiTenantOrganizationTenantsCountRoute,
  getTenantRelationshipsMultiTenantOrganizationTenantsMultiTenantOrganizationMemberIdRoute,
  getTenantRelationshipsMultiTenantOrganizationTenantsRoute,
  patchTenantRelationshipsMultiTenantOrganizationJoinRequestRoute,
  patchTenantRelationshipsMultiTenantOrganizationRoute,
  patchTenantRelationshipsMultiTenantOrganizationTenantsMultiTenantOrganizationMemberIdRoute,
  postTenantRelationshipsMultiTenantOrganizationTenantsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tenantRelationshipsMultiTenantOrganizationHandler = app
  .openapi(getTenantRelationshipsMultiTenantOrganizationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTenantRelationshipsMultiTenantOrganizationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTenantRelationshipsMultiTenantOrganizationJoinRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTenantRelationshipsMultiTenantOrganizationJoinRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTenantRelationshipsMultiTenantOrganizationTenantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTenantRelationshipsMultiTenantOrganizationTenantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getTenantRelationshipsMultiTenantOrganizationTenantsMultiTenantOrganizationMemberIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchTenantRelationshipsMultiTenantOrganizationTenantsMultiTenantOrganizationMemberIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteTenantRelationshipsMultiTenantOrganizationTenantsMultiTenantOrganizationMemberIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getTenantRelationshipsMultiTenantOrganizationTenantsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
