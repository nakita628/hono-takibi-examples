import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTeamsIdEscalationPoliciesEscalationPolicyIdRoute,
  deleteTeamsIdRoute,
  deleteTeamsIdUsersUserIdRoute,
  getTeamsIdAuditRecordsRoute,
  getTeamsIdMembersRoute,
  getTeamsIdNotificationSubscriptionsRoute,
  getTeamsIdRoute,
  getTeamsRoute,
  postTeamsIdNotificationSubscriptionsRoute,
  postTeamsIdNotificationSubscriptionsUnsubscribeRoute,
  postTeamsRoute,
  putTeamsIdEscalationPoliciesEscalationPolicyIdRoute,
  putTeamsIdRoute,
  putTeamsIdUsersUserIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const teamsHandler = app
  .openapi(postTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTeamsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTeamsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsIdAuditRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTeamsIdEscalationPoliciesEscalationPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTeamsIdEscalationPoliciesEscalationPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsIdNotificationSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsIdNotificationSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsIdNotificationSubscriptionsUnsubscribeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTeamsIdUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTeamsIdUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
