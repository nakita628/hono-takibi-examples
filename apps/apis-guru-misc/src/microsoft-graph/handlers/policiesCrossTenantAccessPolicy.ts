import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePoliciesCrossTenantAccessPolicyDefaultRoute,
  deletePoliciesCrossTenantAccessPolicyPartnersCrossTenantAccessPolicyConfigurationPartnerTenantIdRoute,
  deletePoliciesCrossTenantAccessPolicyRoute,
  getPoliciesCrossTenantAccessPolicyDefaultRoute,
  getPoliciesCrossTenantAccessPolicyPartnersCrossTenantAccessPolicyConfigurationPartnerTenantIdRoute,
  getPoliciesCrossTenantAccessPolicyPartnersRoute,
  getPoliciesCrossTenantAccessPolicyRoute,
  patchPoliciesCrossTenantAccessPolicyDefaultRoute,
  patchPoliciesCrossTenantAccessPolicyPartnersCrossTenantAccessPolicyConfigurationPartnerTenantIdRoute,
  patchPoliciesCrossTenantAccessPolicyRoute,
  postPoliciesCrossTenantAccessPolicyPartnersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const policiesCrossTenantAccessPolicyHandler = app
  .openapi(deletePoliciesCrossTenantAccessPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoliciesCrossTenantAccessPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPoliciesCrossTenantAccessPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePoliciesCrossTenantAccessPolicyDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoliciesCrossTenantAccessPolicyDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPoliciesCrossTenantAccessPolicyDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoliciesCrossTenantAccessPolicyPartnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPoliciesCrossTenantAccessPolicyPartnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deletePoliciesCrossTenantAccessPolicyPartnersCrossTenantAccessPolicyConfigurationPartnerTenantIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getPoliciesCrossTenantAccessPolicyPartnersCrossTenantAccessPolicyConfigurationPartnerTenantIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchPoliciesCrossTenantAccessPolicyPartnersCrossTenantAccessPolicyConfigurationPartnerTenantIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
