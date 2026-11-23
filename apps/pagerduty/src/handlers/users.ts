import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersIdContactMethodsContactMethodIdRoute,
  deleteUsersIdNotificationRulesNotificationRuleIdRoute,
  deleteUsersIdOncallHandoffNotificationRulesOncallHandoffNotificationRuleIdRoute,
  deleteUsersIdRoute,
  deleteUsersIdSessionsRoute,
  deleteUsersIdSessionsTypeSessionIdRoute,
  deleteUsersIdStatusUpdateNotificationRulesStatusUpdateNotificationRuleIdRoute,
  getUsersIdAuditRecordsRoute,
  getUsersIdContactMethodsContactMethodIdRoute,
  getUsersIdContactMethodsRoute,
  getUsersIdLicenseRoute,
  getUsersIdNotificationRulesNotificationRuleIdRoute,
  getUsersIdNotificationRulesRoute,
  getUsersIdNotificationSubscriptionsRoute,
  getUsersIdOauthDelegationsDelegationIdRoute,
  getUsersIdOauthDelegationsRoute,
  getUsersIdOncallHandoffNotificationRulesOncallHandoffNotificationRuleIdRoute,
  getUsersIdOncallHandoffNotificationRulesRoute,
  getUsersIdRoute,
  getUsersIdSessionsRoute,
  getUsersIdSessionsTypeSessionIdRoute,
  getUsersIdStatusUpdateNotificationRulesRoute,
  getUsersIdStatusUpdateNotificationRulesStatusUpdateNotificationRuleIdRoute,
  getUsersMeRoute,
  getUsersRoute,
  postUsersIdContactMethodsRoute,
  postUsersIdNotificationRulesRoute,
  postUsersIdNotificationSubscriptionsRoute,
  postUsersIdNotificationSubscriptionsUnsubscribeRoute,
  postUsersIdOncallHandoffNotificationRulesRoute,
  postUsersIdRegeneratePrivateUrlKeyRoute,
  postUsersIdStatusUpdateNotificationRulesRoute,
  postUsersRoute,
  putUsersIdContactMethodsContactMethodIdRoute,
  putUsersIdNotificationRulesNotificationRuleIdRoute,
  putUsersIdOncallHandoffNotificationRulesOncallHandoffNotificationRuleIdRoute,
  putUsersIdRoute,
  putUsersIdStatusUpdateNotificationRulesStatusUpdateNotificationRuleIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdAuditRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdContactMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersIdContactMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdContactMethodsContactMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersIdContactMethodsContactMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersIdContactMethodsContactMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdOauthDelegationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdOauthDelegationsDelegationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdLicenseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdNotificationRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersIdNotificationRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdNotificationRulesNotificationRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersIdNotificationRulesNotificationRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersIdNotificationRulesNotificationRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdNotificationSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersIdNotificationSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersIdNotificationSubscriptionsUnsubscribeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdOncallHandoffNotificationRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersIdOncallHandoffNotificationRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdOncallHandoffNotificationRulesOncallHandoffNotificationRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersIdOncallHandoffNotificationRulesOncallHandoffNotificationRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersIdOncallHandoffNotificationRulesOncallHandoffNotificationRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersIdSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdSessionsTypeSessionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersIdSessionsTypeSessionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdStatusUpdateNotificationRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersIdStatusUpdateNotificationRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdStatusUpdateNotificationRulesStatusUpdateNotificationRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersIdStatusUpdateNotificationRulesStatusUpdateNotificationRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersIdStatusUpdateNotificationRulesStatusUpdateNotificationRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersIdRegeneratePrivateUrlKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersMeRoute, (c) => {
    throw new Error('Not implemented')
  })
