import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2UsersUserIdRoute,
  getV2CurrenciesRoute,
  getV2FundingAccountsFundingAccountIdRoute,
  getV2FundingAccountsRoute,
  getV2PayorsPayorIdRoute,
  getV2SourceAccountsRoute,
  getV2SourceAccountsSourceAccountIdRoute,
  getV2SupportedCountriesRoute,
  getV2UsersRoute,
  getV2UsersSelfRoute,
  getV2UsersUserIdRoute,
  postV2FundingAccountsRoute,
  postV2SourceAccountsSourceAccountIdFundingRequestRoute,
  postV2SourceAccountsSourceAccountIdTransfersRoute,
  postV2UsersInviteRoute,
  postV2UsersRegistrationSmsRoute,
  postV2UsersSelfMfaUnregisterRoute,
  postV2UsersSelfPasswordRoute,
  postV2UsersSelfPasswordValidateRoute,
  postV2UsersSelfUserDetailsUpdateRoute,
  postV2UsersUserIdDisableRoute,
  postV2UsersUserIdEnableRoute,
  postV2UsersUserIdMfaUnregisterRoute,
  postV2UsersUserIdRoleUpdateRoute,
  postV2UsersUserIdTokensRoute,
  postV2UsersUserIdUnlockRoute,
  postV2UsersUserIdUserDetailsUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v2Handler = app
  .openapi(getV2CurrenciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2FundingAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2FundingAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2FundingAccountsFundingAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2PayorsPayorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SourceAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SourceAccountsSourceAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2SourceAccountsSourceAccountIdFundingRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2SourceAccountsSourceAccountIdTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SupportedCountriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UsersInviteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UsersRegistrationSmsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UsersSelfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UsersSelfMfaUnregisterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UsersSelfPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UsersSelfPasswordValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UsersSelfUserDetailsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2UsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UsersUserIdDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UsersUserIdEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UsersUserIdMfaUnregisterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UsersUserIdRoleUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UsersUserIdTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UsersUserIdUnlockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UsersUserIdUserDetailsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
