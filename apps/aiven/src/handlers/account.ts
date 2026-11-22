import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountAccountIdAuthenticationAccountAuthenticationMethodIdRoute,
  deleteAccountAccountIdPaymentMethodCardIdRoute,
  deleteAccountAccountIdRoute,
  deleteAccountAccountIdTeamTeamIdInvitesUserEmailRoute,
  deleteAccountAccountIdTeamTeamIdMemberUserIdRoute,
  deleteAccountAccountIdTeamTeamIdProjectProjectRoute,
  deleteAccountAccountIdTeamTeamIdRoute,
  getAccountAccountIdAuthenticationAccountAuthenticationMethodIdRoute,
  getAccountAccountIdAuthenticationRoute,
  getAccountAccountIdBillingGroupRoute,
  getAccountAccountIdEventsRoute,
  getAccountAccountIdPaymentMethodsRoute,
  getAccountAccountIdProjectProjectNameTeamsRoute,
  getAccountAccountIdProjectsRoute,
  getAccountAccountIdRoute,
  getAccountAccountIdTeamsRoute,
  getAccountAccountIdTeamTeamIdInvitesRoute,
  getAccountAccountIdTeamTeamIdMembersRoute,
  getAccountAccountIdTeamTeamIdProjectsRoute,
  getAccountAccountIdTeamTeamIdRoute,
  getAccountAccountIdUserUserIdProjectsRoute,
  getAccountAccountIdUserUserIdTeamsRoute,
  getAccountRoute,
  postAccountAccountIdAuthenticationRoute,
  postAccountAccountIdInviteInviteVerificationCodeRoute,
  postAccountAccountIdPaymentMethodsRoute,
  postAccountAccountIdTeamsRoute,
  postAccountAccountIdTeamTeamIdMembersRoute,
  postAccountAccountIdTeamTeamIdProjectProjectRoute,
  postAccountAccountIdUsersSearchRoute,
  postAccountRoute,
  putAccountAccountIdAuthenticationAccountAuthenticationMethodIdRoute,
  putAccountAccountIdParentAccountRoute,
  putAccountAccountIdRoute,
  putAccountAccountIdTeamTeamIdProjectProjectRoute,
  putAccountAccountIdTeamTeamIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountHandler = app
  .openapi(postAccountAccountIdPaymentMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountAccountIdPaymentMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountAccountIdAuthenticationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountAccountIdAuthenticationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountAccountIdAuthenticationAccountAuthenticationMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountAccountIdAuthenticationAccountAuthenticationMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountAccountIdAuthenticationAccountAuthenticationMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountAccountIdBillingGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountAccountIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountAccountIdParentAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountAccountIdPaymentMethodCardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountAccountIdProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountAccountIdProjectProjectNameTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountAccountIdTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountAccountIdTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountAccountIdTeamTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountAccountIdTeamTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountAccountIdTeamTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountAccountIdTeamTeamIdInvitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountAccountIdTeamTeamIdInvitesUserEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountAccountIdInviteInviteVerificationCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountAccountIdTeamTeamIdMemberUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountAccountIdTeamTeamIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountAccountIdTeamTeamIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountAccountIdTeamTeamIdProjectProjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountAccountIdTeamTeamIdProjectProjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountAccountIdTeamTeamIdProjectProjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountAccountIdTeamTeamIdProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountAccountIdUserUserIdProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountAccountIdUserUserIdTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountAccountIdUsersSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
