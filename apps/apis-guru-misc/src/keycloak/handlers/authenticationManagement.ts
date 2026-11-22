import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRealmAuthenticationConfigIdRoute,
  deleteRealmAuthenticationExecutionsExecutionIdRoute,
  deleteRealmAuthenticationFlowsIdRoute,
  deleteRealmAuthenticationRequiredActionsAliasRoute,
  getRealmAuthenticationAuthenticatorProvidersRoute,
  getRealmAuthenticationClientAuthenticatorProvidersRoute,
  getRealmAuthenticationConfigDescriptionProviderIdRoute,
  getRealmAuthenticationConfigIdRoute,
  getRealmAuthenticationExecutionsExecutionIdRoute,
  getRealmAuthenticationFlowsFlowAliasExecutionsRoute,
  getRealmAuthenticationFlowsIdRoute,
  getRealmAuthenticationFlowsRoute,
  getRealmAuthenticationFormActionProvidersRoute,
  getRealmAuthenticationFormProvidersRoute,
  getRealmAuthenticationPerClientConfigDescriptionRoute,
  getRealmAuthenticationRequiredActionsAliasRoute,
  getRealmAuthenticationRequiredActionsRoute,
  getRealmAuthenticationUnregisteredRequiredActionsRoute,
  postRealmAuthenticationExecutionsExecutionIdConfigRoute,
  postRealmAuthenticationExecutionsExecutionIdLowerPriorityRoute,
  postRealmAuthenticationExecutionsExecutionIdRaisePriorityRoute,
  postRealmAuthenticationExecutionsRoute,
  postRealmAuthenticationFlowsFlowAliasCopyRoute,
  postRealmAuthenticationFlowsFlowAliasExecutionsExecutionRoute,
  postRealmAuthenticationFlowsFlowAliasExecutionsFlowRoute,
  postRealmAuthenticationFlowsRoute,
  postRealmAuthenticationRegisterRequiredActionRoute,
  postRealmAuthenticationRequiredActionsAliasLowerPriorityRoute,
  postRealmAuthenticationRequiredActionsAliasRaisePriorityRoute,
  putRealmAuthenticationConfigIdRoute,
  putRealmAuthenticationFlowsFlowAliasExecutionsRoute,
  putRealmAuthenticationFlowsIdRoute,
  putRealmAuthenticationRequiredActionsAliasRoute,
} from '../routes'

const app = new OpenAPIHono()

export const authenticationManagementHandler = app
  .openapi(getRealmAuthenticationAuthenticatorProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmAuthenticationClientAuthenticatorProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmAuthenticationConfigDescriptionProviderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRealmAuthenticationConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmAuthenticationConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRealmAuthenticationConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmAuthenticationExecutionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRealmAuthenticationExecutionsExecutionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmAuthenticationExecutionsExecutionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmAuthenticationExecutionsExecutionIdConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmAuthenticationExecutionsExecutionIdLowerPriorityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmAuthenticationExecutionsExecutionIdRaisePriorityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmAuthenticationFlowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmAuthenticationFlowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmAuthenticationFlowsFlowAliasCopyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmAuthenticationFlowsFlowAliasExecutionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRealmAuthenticationFlowsFlowAliasExecutionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmAuthenticationFlowsFlowAliasExecutionsExecutionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmAuthenticationFlowsFlowAliasExecutionsFlowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRealmAuthenticationFlowsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmAuthenticationFlowsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRealmAuthenticationFlowsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmAuthenticationFormActionProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmAuthenticationFormProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmAuthenticationPerClientConfigDescriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmAuthenticationRegisterRequiredActionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmAuthenticationRequiredActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRealmAuthenticationRequiredActionsAliasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmAuthenticationRequiredActionsAliasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRealmAuthenticationRequiredActionsAliasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmAuthenticationRequiredActionsAliasLowerPriorityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmAuthenticationRequiredActionsAliasRaisePriorityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmAuthenticationUnregisteredRequiredActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
