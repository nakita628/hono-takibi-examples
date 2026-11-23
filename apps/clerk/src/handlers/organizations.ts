import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrganizationsOrganizationIdDomainsDomainIdRoute,
  deleteOrganizationsOrganizationIdLogoRoute,
  deleteOrganizationsOrganizationIdMembershipsUserIdRoute,
  deleteOrganizationsOrganizationIdRoute,
  getOrganizationsOrganizationIdBillingCreditsRoute,
  getOrganizationsOrganizationIdBillingSubscriptionRoute,
  getOrganizationsOrganizationIdDomainsRoute,
  getOrganizationsOrganizationIdInvitationsInvitationIdRoute,
  getOrganizationsOrganizationIdInvitationsPendingRoute,
  getOrganizationsOrganizationIdInvitationsRoute,
  getOrganizationsOrganizationIdMembershipsRoute,
  getOrganizationsOrganizationIdRoute,
  getOrganizationsRoute,
  patchOrganizationsOrganizationIdDomainsDomainIdRoute,
  patchOrganizationsOrganizationIdMembershipsUserIdMetadataRoute,
  patchOrganizationsOrganizationIdMembershipsUserIdRoute,
  patchOrganizationsOrganizationIdMetadataRoute,
  patchOrganizationsOrganizationIdRoute,
  postOrganizationsOrganizationIdBillingCreditsRoute,
  postOrganizationsOrganizationIdDomainsDomainIdVerifyOwnershipRoute,
  postOrganizationsOrganizationIdDomainsRoute,
  postOrganizationsOrganizationIdInvitationsBulkRoute,
  postOrganizationsOrganizationIdInvitationsInvitationIdRevokeRoute,
  postOrganizationsOrganizationIdInvitationsRoute,
  postOrganizationsOrganizationIdMembershipsRoute,
  postOrganizationsRoute,
  putOrganizationsOrganizationIdLogoRoute,
  putOrganizationsOrganizationIdMetadataRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organizationsHandler = app
  .openapi(getOrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrganizationsOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrganizationsOrganizationIdMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdLogoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdLogoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdBillingSubscriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdBillingCreditsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdBillingCreditsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdInvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdInvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdInvitationsBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdInvitationsPendingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdInvitationsInvitationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdInvitationsInvitationIdRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrganizationsOrganizationIdMembershipsUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdMembershipsUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrganizationsOrganizationIdMembershipsUserIdMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrganizationsOrganizationIdDomainsDomainIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdDomainsDomainIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdDomainsDomainIdVerifyOwnershipRoute, (c) => {
    throw new Error('Not implemented')
  })
