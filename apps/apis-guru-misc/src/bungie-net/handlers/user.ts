import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserGetAvailableThemesIndexRoute,
  getUserGetBungieNetUserByIdIdIndexRoute,
  getUserGetCredentialTypesForTargetAccountMembershipIdIndexRoute,
  getUserGetMembershipFromHardLinkedCredentialCrTypeCredentialIndexRoute,
  getUserGetMembershipsByIdMembershipIdMembershipTypeIndexRoute,
  getUserGetMembershipsForCurrentUserIndexRoute,
  getUserGetSanitizedPlatformDisplayNamesMembershipIdIndexRoute,
  getUserSearchPrefixDisplayNamePrefixPageIndexRoute,
  postUserSearchGlobalNamePageIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userHandler = app
  .openapi(getUserGetAvailableThemesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserGetBungieNetUserByIdIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserGetCredentialTypesForTargetAccountMembershipIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserGetMembershipFromHardLinkedCredentialCrTypeCredentialIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserGetMembershipsByIdMembershipIdMembershipTypeIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserGetMembershipsForCurrentUserIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserGetSanitizedPlatformDisplayNamesMembershipIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserSearchGlobalNamePageIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserSearchPrefixDisplayNamePrefixPageIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
