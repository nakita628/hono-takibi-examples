import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCorporateGroupIdRoute,
  deleteCorporateSubAccountIdRoute,
  deleteCorporateUserRevokeEmailRoute,
  getCorporateGroupIdRoute,
  getCorporateGroupsRoute,
  getCorporateInvitedUsersRoute,
  getCorporateIpRoute,
  getCorporateMasterAccountRoute,
  getCorporateSubAccountIdRoute,
  getCorporateSubAccountRoute,
  getCorporateUserEmailPermissionsRoute,
  postCorporateGroupRoute,
  postCorporateSsoTokenRoute,
  postCorporateSubAccountIpAssociateRoute,
  postCorporateSubAccountKeyRoute,
  postCorporateSubAccountRoute,
  postCorporateSubAccountSsoTokenRoute,
  postCorporateUserInvitationSendRoute,
  putCorporateGroupIdRoute,
  putCorporateGroupUnlinkGroupIdSubAccountsRoute,
  putCorporateSubAccountIdApplicationsToggleRoute,
  putCorporateSubAccountIdPlanRoute,
  putCorporateSubAccountIpDissociateRoute,
  putCorporateSubAccountsPlanRoute,
  putCorporateUserEmailPermissionsRoute,
  putCorporateUserInvitationActionEmailRoute,
} from '../routes'

const app = new OpenAPIHono()

export const corporateHandler = app
  .openapi(postCorporateGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCorporateGroupUnlinkGroupIdSubAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCorporateGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCorporateGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCorporateGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCorporateGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCorporateInvitedUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCorporateIpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCorporateMasterAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCorporateSsoTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCorporateSubAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCorporateSubAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCorporateSubAccountIpAssociateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCorporateSubAccountIpDissociateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCorporateSubAccountKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCorporateSubAccountSsoTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCorporateSubAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCorporateSubAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCorporateSubAccountIdApplicationsToggleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCorporateSubAccountIdPlanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCorporateSubAccountsPlanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCorporateUserInvitationSendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCorporateUserInvitationActionEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCorporateUserRevokeEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCorporateUserEmailPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCorporateUserEmailPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
