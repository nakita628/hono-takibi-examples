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
  postV2SpeakRoute,
  putV1ProjectsProjectIdAgentsAgentIdRoute,
  putV1ProjectsProjectIdMembersMemberIdScopesRoute,
} from './routes'
import {
  deleteV1ProjectsProjectIdAgentsAgentIdRouteHandler,
  deleteV1ProjectsProjectIdAgentVariablesVariableIdRouteHandler,
  deleteV1ProjectsProjectIdInvitesEmailRouteHandler,
  deleteV1ProjectsProjectIdKeysKeyIdRouteHandler,
  deleteV1ProjectsProjectIdLeaveRouteHandler,
  deleteV1ProjectsProjectIdMembersMemberIdRouteHandler,
  deleteV1ProjectsProjectIdRouteHandler,
  deleteV1ProjectsProjectIdSelfHostedDistributionCredentialsDistributionCredentialsIdRouteHandler,
  getV1AgentSettingsThinkModelsRouteHandler,
  getV1ModelsModelIdRouteHandler,
  getV1ModelsRouteHandler,
  getV1ProjectsProjectIdAgentsAgentIdRouteHandler,
  getV1ProjectsProjectIdAgentsRouteHandler,
  getV1ProjectsProjectIdAgentVariablesRouteHandler,
  getV1ProjectsProjectIdAgentVariablesVariableIdRouteHandler,
  getV1ProjectsProjectIdBalancesBalanceIdRouteHandler,
  getV1ProjectsProjectIdBalancesRouteHandler,
  getV1ProjectsProjectIdBillingBreakdownRouteHandler,
  getV1ProjectsProjectIdBillingFieldsRouteHandler,
  getV1ProjectsProjectIdInvitesRouteHandler,
  getV1ProjectsProjectIdKeysKeyIdRouteHandler,
  getV1ProjectsProjectIdKeysRouteHandler,
  getV1ProjectsProjectIdMembersMemberIdScopesRouteHandler,
  getV1ProjectsProjectIdMembersRouteHandler,
  getV1ProjectsProjectIdModelsModelIdRouteHandler,
  getV1ProjectsProjectIdModelsRouteHandler,
  getV1ProjectsProjectIdPurchasesRouteHandler,
  getV1ProjectsProjectIdRequestsRequestIdRouteHandler,
  getV1ProjectsProjectIdRequestsRouteHandler,
  getV1ProjectsProjectIdRouteHandler,
  getV1ProjectsProjectIdSelfHostedDistributionCredentialsDistributionCredentialsIdRouteHandler,
  getV1ProjectsProjectIdSelfHostedDistributionCredentialsRouteHandler,
  getV1ProjectsProjectIdUsageBreakdownRouteHandler,
  getV1ProjectsProjectIdUsageFieldsRouteHandler,
  getV1ProjectsProjectIdUsageRouteHandler,
  getV1ProjectsRouteHandler,
  patchV1ProjectsProjectIdAgentVariablesVariableIdRouteHandler,
  patchV1ProjectsProjectIdRouteHandler,
  postV1AuthGrantRouteHandler,
  postV1ListenRouteHandler,
  postV1ProjectsProjectIdAgentsRouteHandler,
  postV1ProjectsProjectIdAgentVariablesRouteHandler,
  postV1ProjectsProjectIdInvitesRouteHandler,
  postV1ProjectsProjectIdKeysRouteHandler,
  postV1ProjectsProjectIdSelfHostedDistributionCredentialsRouteHandler,
  postV1ReadRouteHandler,
  postV1SpeakRouteHandler,
  postV2SpeakRouteHandler,
  putV1ProjectsProjectIdAgentsAgentIdRouteHandler,
  putV1ProjectsProjectIdMembersMemberIdScopesRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV1AgentSettingsThinkModelsRoute, getV1AgentSettingsThinkModelsRouteHandler)
  .openapi(postV1ProjectsProjectIdAgentsRoute, postV1ProjectsProjectIdAgentsRouteHandler)
  .openapi(getV1ProjectsProjectIdAgentsRoute, getV1ProjectsProjectIdAgentsRouteHandler)
  .openapi(
    getV1ProjectsProjectIdAgentsAgentIdRoute,
    getV1ProjectsProjectIdAgentsAgentIdRouteHandler,
  )
  .openapi(
    putV1ProjectsProjectIdAgentsAgentIdRoute,
    putV1ProjectsProjectIdAgentsAgentIdRouteHandler,
  )
  .openapi(
    deleteV1ProjectsProjectIdAgentsAgentIdRoute,
    deleteV1ProjectsProjectIdAgentsAgentIdRouteHandler,
  )
  .openapi(
    postV1ProjectsProjectIdAgentVariablesRoute,
    postV1ProjectsProjectIdAgentVariablesRouteHandler,
  )
  .openapi(
    getV1ProjectsProjectIdAgentVariablesRoute,
    getV1ProjectsProjectIdAgentVariablesRouteHandler,
  )
  .openapi(
    getV1ProjectsProjectIdAgentVariablesVariableIdRoute,
    getV1ProjectsProjectIdAgentVariablesVariableIdRouteHandler,
  )
  .openapi(
    patchV1ProjectsProjectIdAgentVariablesVariableIdRoute,
    patchV1ProjectsProjectIdAgentVariablesVariableIdRouteHandler,
  )
  .openapi(
    deleteV1ProjectsProjectIdAgentVariablesVariableIdRoute,
    deleteV1ProjectsProjectIdAgentVariablesVariableIdRouteHandler,
  )
  .openapi(postV1ListenRoute, postV1ListenRouteHandler)
  .openapi(postV1SpeakRoute, postV1SpeakRouteHandler)
  .openapi(postV1ReadRoute, postV1ReadRouteHandler)
  .openapi(getV1ProjectsRoute, getV1ProjectsRouteHandler)
  .openapi(getV1ProjectsProjectIdRoute, getV1ProjectsProjectIdRouteHandler)
  .openapi(patchV1ProjectsProjectIdRoute, patchV1ProjectsProjectIdRouteHandler)
  .openapi(deleteV1ProjectsProjectIdRoute, deleteV1ProjectsProjectIdRouteHandler)
  .openapi(deleteV1ProjectsProjectIdLeaveRoute, deleteV1ProjectsProjectIdLeaveRouteHandler)
  .openapi(getV1ProjectsProjectIdModelsRoute, getV1ProjectsProjectIdModelsRouteHandler)
  .openapi(
    getV1ProjectsProjectIdModelsModelIdRoute,
    getV1ProjectsProjectIdModelsModelIdRouteHandler,
  )
  .openapi(getV1ModelsRoute, getV1ModelsRouteHandler)
  .openapi(getV1ModelsModelIdRoute, getV1ModelsModelIdRouteHandler)
  .openapi(getV1ProjectsProjectIdKeysRoute, getV1ProjectsProjectIdKeysRouteHandler)
  .openapi(postV1ProjectsProjectIdKeysRoute, postV1ProjectsProjectIdKeysRouteHandler)
  .openapi(getV1ProjectsProjectIdKeysKeyIdRoute, getV1ProjectsProjectIdKeysKeyIdRouteHandler)
  .openapi(deleteV1ProjectsProjectIdKeysKeyIdRoute, deleteV1ProjectsProjectIdKeysKeyIdRouteHandler)
  .openapi(getV1ProjectsProjectIdMembersRoute, getV1ProjectsProjectIdMembersRouteHandler)
  .openapi(
    deleteV1ProjectsProjectIdMembersMemberIdRoute,
    deleteV1ProjectsProjectIdMembersMemberIdRouteHandler,
  )
  .openapi(
    getV1ProjectsProjectIdMembersMemberIdScopesRoute,
    getV1ProjectsProjectIdMembersMemberIdScopesRouteHandler,
  )
  .openapi(
    putV1ProjectsProjectIdMembersMemberIdScopesRoute,
    putV1ProjectsProjectIdMembersMemberIdScopesRouteHandler,
  )
  .openapi(getV1ProjectsProjectIdInvitesRoute, getV1ProjectsProjectIdInvitesRouteHandler)
  .openapi(postV1ProjectsProjectIdInvitesRoute, postV1ProjectsProjectIdInvitesRouteHandler)
  .openapi(
    deleteV1ProjectsProjectIdInvitesEmailRoute,
    deleteV1ProjectsProjectIdInvitesEmailRouteHandler,
  )
  .openapi(getV1ProjectsProjectIdRequestsRoute, getV1ProjectsProjectIdRequestsRouteHandler)
  .openapi(
    getV1ProjectsProjectIdRequestsRequestIdRoute,
    getV1ProjectsProjectIdRequestsRequestIdRouteHandler,
  )
  .openapi(getV1ProjectsProjectIdUsageRoute, getV1ProjectsProjectIdUsageRouteHandler)
  .openapi(getV1ProjectsProjectIdUsageFieldsRoute, getV1ProjectsProjectIdUsageFieldsRouteHandler)
  .openapi(
    getV1ProjectsProjectIdUsageBreakdownRoute,
    getV1ProjectsProjectIdUsageBreakdownRouteHandler,
  )
  .openapi(getV1ProjectsProjectIdBalancesRoute, getV1ProjectsProjectIdBalancesRouteHandler)
  .openapi(
    getV1ProjectsProjectIdBalancesBalanceIdRoute,
    getV1ProjectsProjectIdBalancesBalanceIdRouteHandler,
  )
  .openapi(
    getV1ProjectsProjectIdBillingBreakdownRoute,
    getV1ProjectsProjectIdBillingBreakdownRouteHandler,
  )
  .openapi(
    getV1ProjectsProjectIdBillingFieldsRoute,
    getV1ProjectsProjectIdBillingFieldsRouteHandler,
  )
  .openapi(getV1ProjectsProjectIdPurchasesRoute, getV1ProjectsProjectIdPurchasesRouteHandler)
  .openapi(
    getV1ProjectsProjectIdSelfHostedDistributionCredentialsRoute,
    getV1ProjectsProjectIdSelfHostedDistributionCredentialsRouteHandler,
  )
  .openapi(
    postV1ProjectsProjectIdSelfHostedDistributionCredentialsRoute,
    postV1ProjectsProjectIdSelfHostedDistributionCredentialsRouteHandler,
  )
  .openapi(
    getV1ProjectsProjectIdSelfHostedDistributionCredentialsDistributionCredentialsIdRoute,
    getV1ProjectsProjectIdSelfHostedDistributionCredentialsDistributionCredentialsIdRouteHandler,
  )
  .openapi(
    deleteV1ProjectsProjectIdSelfHostedDistributionCredentialsDistributionCredentialsIdRoute,
    deleteV1ProjectsProjectIdSelfHostedDistributionCredentialsDistributionCredentialsIdRouteHandler,
  )
  .openapi(postV1AuthGrantRoute, postV1AuthGrantRouteHandler)
  .openapi(postV2SpeakRoute, postV2SpeakRouteHandler)

export default app
