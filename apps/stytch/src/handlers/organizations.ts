import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1B2bOrganizationsOrganizationIdMembersMemberIdExternalIdRoute,
  deleteV1B2bOrganizationsOrganizationIdMembersMemberIdRoute,
  deleteV1B2bOrganizationsOrganizationIdMembersMemberIdTotpRoute,
  deleteV1B2bOrganizationsOrganizationIdMembersMfaPhoneNumbersMemberIdRoute,
  deleteV1B2bOrganizationsOrganizationIdMembersPasswordsMemberPasswordIdRoute,
  getV1B2bOrganizationsMembersDangerouslyGetMemberIdRoute,
  getV1B2bOrganizationsOrganizationIdMemberRoute,
  getV1B2bOrganizationsOrganizationIdMembersMemberIdConnectedAppsRoute,
  getV1B2bOrganizationsOrganizationIdMembersMemberIdOidcProvidersRoute,
  postV1B2bOrganizationsMembersSearchRoute,
  postV1B2bOrganizationsOrganizationIdMembersMemberIdStartEmailUpdateRoute,
  postV1B2bOrganizationsOrganizationIdMembersMemberIdUnlinkRetiredEmailRoute,
  postV1B2bOrganizationsOrganizationIdMembersRoute,
  putV1B2bOrganizationsOrganizationIdMembersMemberIdReactivateRoute,
  putV1B2bOrganizationsOrganizationIdMembersMemberIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organizationsHandler = app
  .openapi(putV1B2bOrganizationsOrganizationIdMembersMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1B2bOrganizationsOrganizationIdMembersMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1B2bOrganizationsOrganizationIdMembersMemberIdReactivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1B2bOrganizationsOrganizationIdMembersMfaPhoneNumbersMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1B2bOrganizationsOrganizationIdMembersMemberIdTotpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bOrganizationsMembersSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1B2bOrganizationsOrganizationIdMembersPasswordsMemberPasswordIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1B2bOrganizationsMembersDangerouslyGetMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1B2bOrganizationsOrganizationIdMembersMemberIdOidcProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bOrganizationsOrganizationIdMembersMemberIdUnlinkRetiredEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bOrganizationsOrganizationIdMembersMemberIdStartEmailUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1B2bOrganizationsOrganizationIdMembersMemberIdConnectedAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1B2bOrganizationsOrganizationIdMembersMemberIdExternalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bOrganizationsOrganizationIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1B2bOrganizationsOrganizationIdMemberRoute, (c) => {
    throw new Error('Not implemented')
  })
