import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEnterprisesIdAdminsIdMemberRoute,
  deleteEnterprisesIdOrganizationsIdOrgRoute,
  getEnterprisesIdAdminsRoute,
  getEnterprisesIdAuditlogRoute,
  getEnterprisesIdClaimableOrganizationsRoute,
  getEnterprisesIdMembersIdMemberRoute,
  getEnterprisesIdMembersQueryRoute,
  getEnterprisesIdMembersRoute,
  getEnterprisesIdOrganizationsBulkIdOrganizationsRoute,
  getEnterprisesIdOrganizationsRoute,
  getEnterprisesIdPendingOrganizationsRoute,
  getEnterprisesIdRoute,
  getEnterprisesIdSignupUrlRoute,
  getEnterprisesIdTransferrableBulkIdOrganizationsRoute,
  getEnterprisesIdTransferrableOrganizationIdOrganizationRoute,
  postEnterprisesIdTokensRoute,
  putEnterprisesIdAdminsIdMemberRoute,
  putEnterprisesIdEnterpriseJoinRequestBulkRoute,
  putEnterprisesIdMembersIdMemberDeactivatedRoute,
  putEnterprisesIdMembersIdMemberLicensedRoute,
  putEnterprisesIdOrganizationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const enterprisesHandler = app
  .openapi(getEnterprisesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnterprisesIdAuditlogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnterprisesIdAdminsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnterprisesIdSignupUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnterprisesIdMembersQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnterprisesIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnterprisesIdMembersIdMemberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnterprisesIdTransferrableOrganizationIdOrganizationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnterprisesIdTransferrableBulkIdOrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEnterprisesIdEnterpriseJoinRequestBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnterprisesIdClaimableOrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnterprisesIdPendingOrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEnterprisesIdTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnterprisesIdOrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEnterprisesIdOrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEnterprisesIdMembersIdMemberLicensedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEnterprisesIdMembersIdMemberDeactivatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEnterprisesIdAdminsIdMemberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEnterprisesIdAdminsIdMemberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEnterprisesIdOrganizationsIdOrgRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnterprisesIdOrganizationsBulkIdOrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
