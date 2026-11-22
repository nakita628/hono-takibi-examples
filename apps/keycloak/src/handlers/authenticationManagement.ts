import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminRealmsRealmAuthenticationConfigIdRoute,
  deleteAdminRealmsRealmAuthenticationExecutionsExecutionIdRoute,
  deleteAdminRealmsRealmAuthenticationFlowsIdRoute,
  deleteAdminRealmsRealmAuthenticationRequiredActionsAliasConfigRoute,
  deleteAdminRealmsRealmAuthenticationRequiredActionsAliasRoute,
  getAdminRealmsRealmAuthenticationAuthenticatorProvidersRoute,
  getAdminRealmsRealmAuthenticationClientAuthenticatorProvidersRoute,
  getAdminRealmsRealmAuthenticationConfigDescriptionProviderIdRoute,
  getAdminRealmsRealmAuthenticationConfigIdRoute,
  getAdminRealmsRealmAuthenticationExecutionsExecutionIdConfigIdRoute,
  getAdminRealmsRealmAuthenticationExecutionsExecutionIdRoute,
  getAdminRealmsRealmAuthenticationFlowsFlowAliasExecutionsRoute,
  getAdminRealmsRealmAuthenticationFlowsIdRoute,
  getAdminRealmsRealmAuthenticationFlowsRoute,
  getAdminRealmsRealmAuthenticationFormActionProvidersRoute,
  getAdminRealmsRealmAuthenticationFormProvidersRoute,
  getAdminRealmsRealmAuthenticationPerClientConfigDescriptionRoute,
  getAdminRealmsRealmAuthenticationRequiredActionsAliasConfigDescriptionRoute,
  getAdminRealmsRealmAuthenticationRequiredActionsAliasConfigRoute,
  getAdminRealmsRealmAuthenticationRequiredActionsAliasRoute,
  getAdminRealmsRealmAuthenticationRequiredActionsRoute,
  getAdminRealmsRealmAuthenticationUnregisteredRequiredActionsRoute,
  postAdminRealmsRealmAuthenticationConfigRoute,
  postAdminRealmsRealmAuthenticationExecutionsExecutionIdConfigRoute,
  postAdminRealmsRealmAuthenticationExecutionsExecutionIdLowerPriorityRoute,
  postAdminRealmsRealmAuthenticationExecutionsExecutionIdRaisePriorityRoute,
  postAdminRealmsRealmAuthenticationExecutionsRoute,
  postAdminRealmsRealmAuthenticationFlowsFlowAliasCopyRoute,
  postAdminRealmsRealmAuthenticationFlowsFlowAliasExecutionsExecutionRoute,
  postAdminRealmsRealmAuthenticationFlowsFlowAliasExecutionsFlowRoute,
  postAdminRealmsRealmAuthenticationFlowsRoute,
  postAdminRealmsRealmAuthenticationRegisterRequiredActionRoute,
  postAdminRealmsRealmAuthenticationRequiredActionsAliasLowerPriorityRoute,
  postAdminRealmsRealmAuthenticationRequiredActionsAliasRaisePriorityRoute,
  putAdminRealmsRealmAuthenticationConfigIdRoute,
  putAdminRealmsRealmAuthenticationFlowsFlowAliasExecutionsRoute,
  putAdminRealmsRealmAuthenticationFlowsIdRoute,
  putAdminRealmsRealmAuthenticationRequiredActionsAliasConfigRoute,
  putAdminRealmsRealmAuthenticationRequiredActionsAliasRoute,
} from '../routes'

const app = new OpenAPIHono()

export const authenticationManagementHandler = app
  .openapi(getAdminRealmsRealmAuthenticationAuthenticatorProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmAuthenticationClientAuthenticatorProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmAuthenticationConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmAuthenticationConfigDescriptionProviderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmAuthenticationConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmAuthenticationConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmAuthenticationConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmAuthenticationExecutionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmAuthenticationExecutionsExecutionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmAuthenticationExecutionsExecutionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmAuthenticationExecutionsExecutionIdConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmAuthenticationExecutionsExecutionIdConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmAuthenticationExecutionsExecutionIdLowerPriorityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmAuthenticationExecutionsExecutionIdRaisePriorityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmAuthenticationFlowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmAuthenticationFlowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmAuthenticationFlowsFlowAliasCopyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmAuthenticationFlowsFlowAliasExecutionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmAuthenticationFlowsFlowAliasExecutionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmAuthenticationFlowsFlowAliasExecutionsExecutionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmAuthenticationFlowsFlowAliasExecutionsFlowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmAuthenticationFlowsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmAuthenticationFlowsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmAuthenticationFlowsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmAuthenticationFormActionProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmAuthenticationFormProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmAuthenticationPerClientConfigDescriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmAuthenticationRegisterRequiredActionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmAuthenticationRequiredActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmAuthenticationRequiredActionsAliasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmAuthenticationRequiredActionsAliasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmAuthenticationRequiredActionsAliasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmAuthenticationRequiredActionsAliasConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmAuthenticationRequiredActionsAliasConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmAuthenticationRequiredActionsAliasConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmAuthenticationRequiredActionsAliasConfigDescriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmAuthenticationRequiredActionsAliasLowerPriorityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmAuthenticationRequiredActionsAliasRaisePriorityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmAuthenticationUnregisteredRequiredActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
