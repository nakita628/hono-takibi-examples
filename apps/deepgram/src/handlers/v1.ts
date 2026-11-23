import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ProjectsProjectIdAgentsAgentIdRoute,
  deleteV1ProjectsProjectIdAgentVariablesVariableIdRoute,
  deleteV1ProjectsProjectIdInvitesEmailRoute,
  deleteV1ProjectsProjectIdKeysKeyIdRoute,
  deleteV1ProjectsProjectIdLeaveRoute,
  deleteV1ProjectsProjectIdMembersMemberIdRoute,
  deleteV1ProjectsProjectIdRoute,
  deleteV1ProjectsProjectIdSelfHostedDistributionCredentialsDistributionCredentialsIdRoute,
  getV1AgentSettingsThinkModelsRoute,
  getV1ModelsModelIdRoute,
  getV1ModelsRoute,
  getV1ProjectsProjectIdAgentsAgentIdRoute,
  getV1ProjectsProjectIdAgentsRoute,
  getV1ProjectsProjectIdAgentVariablesRoute,
  getV1ProjectsProjectIdAgentVariablesVariableIdRoute,
  getV1ProjectsProjectIdBalancesBalanceIdRoute,
  getV1ProjectsProjectIdBalancesRoute,
  getV1ProjectsProjectIdBillingBreakdownRoute,
  getV1ProjectsProjectIdBillingFieldsRoute,
  getV1ProjectsProjectIdInvitesRoute,
  getV1ProjectsProjectIdKeysKeyIdRoute,
  getV1ProjectsProjectIdKeysRoute,
  getV1ProjectsProjectIdMembersMemberIdScopesRoute,
  getV1ProjectsProjectIdMembersRoute,
  getV1ProjectsProjectIdModelsModelIdRoute,
  getV1ProjectsProjectIdModelsRoute,
  getV1ProjectsProjectIdPurchasesRoute,
  getV1ProjectsProjectIdRequestsRequestIdRoute,
  getV1ProjectsProjectIdRequestsRoute,
  getV1ProjectsProjectIdRoute,
  getV1ProjectsProjectIdSelfHostedDistributionCredentialsDistributionCredentialsIdRoute,
  getV1ProjectsProjectIdSelfHostedDistributionCredentialsRoute,
  getV1ProjectsProjectIdUsageBreakdownRoute,
  getV1ProjectsProjectIdUsageFieldsRoute,
  getV1ProjectsProjectIdUsageRoute,
  getV1ProjectsRoute,
  patchV1ProjectsProjectIdAgentVariablesVariableIdRoute,
  patchV1ProjectsProjectIdRoute,
  postV1AuthGrantRoute,
  postV1ListenRoute,
  postV1ProjectsProjectIdAgentsRoute,
  postV1ProjectsProjectIdAgentVariablesRoute,
  postV1ProjectsProjectIdInvitesRoute,
  postV1ProjectsProjectIdKeysRoute,
  postV1ProjectsProjectIdSelfHostedDistributionCredentialsRoute,
  postV1ReadRoute,
  postV1SpeakRoute,
  putV1ProjectsProjectIdAgentsAgentIdRoute,
  putV1ProjectsProjectIdMembersMemberIdScopesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(getV1AgentSettingsThinkModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsProjectIdAgentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectIdAgentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectIdAgentsAgentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ProjectsProjectIdAgentsAgentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProjectsProjectIdAgentsAgentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsProjectIdAgentVariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectIdAgentVariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectIdAgentVariablesVariableIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ProjectsProjectIdAgentVariablesVariableIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProjectsProjectIdAgentVariablesVariableIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ListenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SpeakRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProjectsProjectIdLeaveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectIdModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectIdModelsModelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ModelsModelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectIdKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsProjectIdKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectIdKeysKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProjectsProjectIdKeysKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProjectsProjectIdMembersMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectIdMembersMemberIdScopesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ProjectsProjectIdMembersMemberIdScopesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectIdInvitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsProjectIdInvitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProjectsProjectIdInvitesEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectIdRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectIdRequestsRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectIdUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectIdUsageFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectIdUsageBreakdownRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectIdBalancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectIdBalancesBalanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectIdBillingBreakdownRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectIdBillingFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectIdPurchasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectIdSelfHostedDistributionCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsProjectIdSelfHostedDistributionCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getV1ProjectsProjectIdSelfHostedDistributionCredentialsDistributionCredentialsIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteV1ProjectsProjectIdSelfHostedDistributionCredentialsDistributionCredentialsIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postV1AuthGrantRoute, (c) => {
    throw new Error('Not implemented')
  })
