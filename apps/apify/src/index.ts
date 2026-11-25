import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2ActorsRoute,
  postV2ActorsRoute,
  getV2ActorsActorIdRoute,
  putV2ActorsActorIdRoute,
  deleteV2ActorsActorIdRoute,
  getV2ActorsActorIdVersionsRoute,
  postV2ActorsActorIdVersionsRoute,
  getV2ActorsActorIdVersionsVersionNumberRoute,
  deleteV2ActorsActorIdVersionsVersionNumberRoute,
  putV2ActorsActorIdVersionsVersionNumberBuildOnPushRoute,
  getV2ActorsActorIdVersionsVersionNumberEnvVarsRoute,
  postV2ActorsActorIdVersionsVersionNumberEnvVarsRoute,
  getV2ActorsActorIdVersionsVersionNumberEnvVarsEnvVarNameRoute,
  deleteV2ActorsActorIdVersionsVersionNumberEnvVarsEnvVarNameRoute,
  getV2ActorsActorIdWebhooksRoute,
  getV2ActorsActorIdOauthConnectionsRoute,
  getV2ActorsActorIdBuildsRoute,
  postV2ActorsActorIdBuildsRoute,
  getV2ActorsActorIdBuildsDefaultRoute,
  getV2ActorsActorIdBuildsBuildIdOpenapiJsonRoute,
  getV2ActorsActorIdBuildsBuildIdRoute,
  postV2ActorsActorIdBuildsBuildIdAbortRoute,
  getV2ActorsActorIdRunsRoute,
  postV2ActorsActorIdRunsRoute,
  postV2ActorsActorIdRunSyncRoute,
  getV2ActorsActorIdRunSyncRoute,
  postV2ActorsActorIdRunSyncGetDatasetItemsRoute,
  getV2ActorsActorIdRunSyncGetDatasetItemsRoute,
  postV2ActorsActorIdValidateInputRoute,
  getV2ActorsActorIdRunsLastRoute,
  getV2ActorsActorIdRunsRunIdRoute,
  getV2ActorTasksRoute,
  postV2ActorTasksRoute,
  getV2ActorTasksActorTaskIdRoute,
  putV2ActorTasksActorTaskIdRoute,
  deleteV2ActorTasksActorTaskIdRoute,
  getV2ActorTasksActorTaskIdInputRoute,
  putV2ActorTasksActorTaskIdInputRoute,
  getV2ActorTasksActorTaskIdWebhooksRoute,
  getV2ActorTasksActorTaskIdRunsRoute,
  postV2ActorTasksActorTaskIdRunsRoute,
  getV2ActorTasksActorTaskIdRunSyncRoute,
  postV2ActorTasksActorTaskIdRunSyncRoute,
  getV2ActorTasksActorTaskIdRunSyncGetDatasetItemsRoute,
  postV2ActorTasksActorTaskIdRunSyncGetDatasetItemsRoute,
  getV2ActorTasksActorTaskIdRunsLastRoute,
  getV2ActorRunsRoute,
  getV2ActorRunsRunIdRoute,
  putV2ActorRunsRunIdRoute,
  deleteV2ActorRunsRunIdRoute,
  postV2ActorRunsRunIdChargeRoute,
  getV2ActorBuildsRoute,
  getV2ActorBuildsBuildIdRoute,
  deleteV2ActorBuildsBuildIdRoute,
  postV2ActorBuildsBuildIdAbortRoute,
  getV2ActorBuildsBuildIdOpenapiJsonRoute,
  getV2ActorOauthAccountsConnectionIdAccountsRoute,
  getV2ActorOauthAccountsAccountIdRoute,
  getV2KeyValueStoresRoute,
  postV2KeyValueStoresRoute,
  headV2KeyValueStoresStoreIdRecordsRecordKeyRoute,
  getV2DatasetsRoute,
  postV2DatasetsRoute,
  headV2DatasetsDatasetIdItemsRoute,
  getV2RequestQueuesRoute,
  postV2RequestQueuesRoute,
  getV2WebhooksRoute,
  postV2WebhooksRoute,
  getV2WebhooksWebhookIdRoute,
  putV2WebhooksWebhookIdRoute,
  deleteV2WebhooksWebhookIdRoute,
  postV2WebhooksWebhookIdTestRoute,
  getV2WebhooksWebhookIdDispatchesRoute,
  getV2WebhookDispatchesRoute,
  getV2WebhookDispatchesDispatchIdRoute,
  getV2SchedulesRoute,
  postV2SchedulesRoute,
  getV2SchedulesScheduleIdRoute,
  putV2SchedulesScheduleIdRoute,
  deleteV2SchedulesScheduleIdRoute,
  postV2SchedulesScheduleIdInvokeRoute,
  getV2SchedulesScheduleIdLogRoute,
  getV2StoreRoute,
  getV2UsersUserIdRoute,
  getV2UsersMeRoute,
  getV2UsersMeUsageMonthlyRoute,
  getV2UsersMeLimitsRoute,
  putV2UsersMeLimitsRoute,
  getV2UsersUserIdUsageMonthlyRoute,
  getV2UsersUserIdLimitsRoute,
  putV2UsersUserIdLimitsRoute,
  getV2IntegrationsGitRoute,
  postV2IntegrationsGitProviderIdCreateRepoRoute,
  postV2IntegrationsGitProviderIdRegisterDeploymentKeyRoute,
  postV2ToolsEncodeAndSignRoute,
  postV2ToolsDecodeAndVerifyRoute,
} from './routes'
import {
  getV2ActorsRouteHandler,
  postV2ActorsRouteHandler,
  getV2ActorsActorIdRouteHandler,
  putV2ActorsActorIdRouteHandler,
  deleteV2ActorsActorIdRouteHandler,
  getV2ActorsActorIdVersionsRouteHandler,
  postV2ActorsActorIdVersionsRouteHandler,
  getV2ActorsActorIdVersionsVersionNumberRouteHandler,
  deleteV2ActorsActorIdVersionsVersionNumberRouteHandler,
  putV2ActorsActorIdVersionsVersionNumberBuildOnPushRouteHandler,
  getV2ActorsActorIdVersionsVersionNumberEnvVarsRouteHandler,
  postV2ActorsActorIdVersionsVersionNumberEnvVarsRouteHandler,
  getV2ActorsActorIdVersionsVersionNumberEnvVarsEnvVarNameRouteHandler,
  deleteV2ActorsActorIdVersionsVersionNumberEnvVarsEnvVarNameRouteHandler,
  getV2ActorsActorIdWebhooksRouteHandler,
  getV2ActorsActorIdOauthConnectionsRouteHandler,
  getV2ActorsActorIdBuildsRouteHandler,
  postV2ActorsActorIdBuildsRouteHandler,
  getV2ActorsActorIdBuildsDefaultRouteHandler,
  getV2ActorsActorIdBuildsBuildIdOpenapiJsonRouteHandler,
  getV2ActorsActorIdBuildsBuildIdRouteHandler,
  postV2ActorsActorIdBuildsBuildIdAbortRouteHandler,
  getV2ActorsActorIdRunsRouteHandler,
  postV2ActorsActorIdRunsRouteHandler,
  postV2ActorsActorIdRunSyncRouteHandler,
  getV2ActorsActorIdRunSyncRouteHandler,
  postV2ActorsActorIdRunSyncGetDatasetItemsRouteHandler,
  getV2ActorsActorIdRunSyncGetDatasetItemsRouteHandler,
  postV2ActorsActorIdValidateInputRouteHandler,
  getV2ActorsActorIdRunsLastRouteHandler,
  getV2ActorsActorIdRunsRunIdRouteHandler,
  getV2ActorTasksRouteHandler,
  postV2ActorTasksRouteHandler,
  getV2ActorTasksActorTaskIdRouteHandler,
  putV2ActorTasksActorTaskIdRouteHandler,
  deleteV2ActorTasksActorTaskIdRouteHandler,
  getV2ActorTasksActorTaskIdInputRouteHandler,
  putV2ActorTasksActorTaskIdInputRouteHandler,
  getV2ActorTasksActorTaskIdWebhooksRouteHandler,
  getV2ActorTasksActorTaskIdRunsRouteHandler,
  postV2ActorTasksActorTaskIdRunsRouteHandler,
  getV2ActorTasksActorTaskIdRunSyncRouteHandler,
  postV2ActorTasksActorTaskIdRunSyncRouteHandler,
  getV2ActorTasksActorTaskIdRunSyncGetDatasetItemsRouteHandler,
  postV2ActorTasksActorTaskIdRunSyncGetDatasetItemsRouteHandler,
  getV2ActorTasksActorTaskIdRunsLastRouteHandler,
  getV2ActorRunsRouteHandler,
  getV2ActorRunsRunIdRouteHandler,
  putV2ActorRunsRunIdRouteHandler,
  deleteV2ActorRunsRunIdRouteHandler,
  postV2ActorRunsRunIdChargeRouteHandler,
  getV2ActorBuildsRouteHandler,
  getV2ActorBuildsBuildIdRouteHandler,
  deleteV2ActorBuildsBuildIdRouteHandler,
  postV2ActorBuildsBuildIdAbortRouteHandler,
  getV2ActorBuildsBuildIdOpenapiJsonRouteHandler,
  getV2ActorOauthAccountsConnectionIdAccountsRouteHandler,
  getV2ActorOauthAccountsAccountIdRouteHandler,
  getV2KeyValueStoresRouteHandler,
  postV2KeyValueStoresRouteHandler,
  headV2KeyValueStoresStoreIdRecordsRecordKeyRouteHandler,
  getV2DatasetsRouteHandler,
  postV2DatasetsRouteHandler,
  headV2DatasetsDatasetIdItemsRouteHandler,
  getV2RequestQueuesRouteHandler,
  postV2RequestQueuesRouteHandler,
  getV2WebhooksRouteHandler,
  postV2WebhooksRouteHandler,
  getV2WebhooksWebhookIdRouteHandler,
  putV2WebhooksWebhookIdRouteHandler,
  deleteV2WebhooksWebhookIdRouteHandler,
  postV2WebhooksWebhookIdTestRouteHandler,
  getV2WebhooksWebhookIdDispatchesRouteHandler,
  getV2WebhookDispatchesRouteHandler,
  getV2WebhookDispatchesDispatchIdRouteHandler,
  getV2SchedulesRouteHandler,
  postV2SchedulesRouteHandler,
  getV2SchedulesScheduleIdRouteHandler,
  putV2SchedulesScheduleIdRouteHandler,
  deleteV2SchedulesScheduleIdRouteHandler,
  postV2SchedulesScheduleIdInvokeRouteHandler,
  getV2SchedulesScheduleIdLogRouteHandler,
  getV2StoreRouteHandler,
  getV2UsersUserIdRouteHandler,
  getV2UsersMeRouteHandler,
  getV2UsersMeUsageMonthlyRouteHandler,
  getV2UsersMeLimitsRouteHandler,
  putV2UsersMeLimitsRouteHandler,
  getV2UsersUserIdUsageMonthlyRouteHandler,
  getV2UsersUserIdLimitsRouteHandler,
  putV2UsersUserIdLimitsRouteHandler,
  getV2IntegrationsGitRouteHandler,
  postV2IntegrationsGitProviderIdCreateRepoRouteHandler,
  postV2IntegrationsGitProviderIdRegisterDeploymentKeyRouteHandler,
  postV2ToolsEncodeAndSignRouteHandler,
  postV2ToolsDecodeAndVerifyRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV2ActorsRoute, getV2ActorsRouteHandler)
  .openapi(postV2ActorsRoute, postV2ActorsRouteHandler)
  .openapi(getV2ActorsActorIdRoute, getV2ActorsActorIdRouteHandler)
  .openapi(putV2ActorsActorIdRoute, putV2ActorsActorIdRouteHandler)
  .openapi(deleteV2ActorsActorIdRoute, deleteV2ActorsActorIdRouteHandler)
  .openapi(getV2ActorsActorIdVersionsRoute, getV2ActorsActorIdVersionsRouteHandler)
  .openapi(postV2ActorsActorIdVersionsRoute, postV2ActorsActorIdVersionsRouteHandler)
  .openapi(
    getV2ActorsActorIdVersionsVersionNumberRoute,
    getV2ActorsActorIdVersionsVersionNumberRouteHandler,
  )
  .openapi(
    deleteV2ActorsActorIdVersionsVersionNumberRoute,
    deleteV2ActorsActorIdVersionsVersionNumberRouteHandler,
  )
  .openapi(
    putV2ActorsActorIdVersionsVersionNumberBuildOnPushRoute,
    putV2ActorsActorIdVersionsVersionNumberBuildOnPushRouteHandler,
  )
  .openapi(
    getV2ActorsActorIdVersionsVersionNumberEnvVarsRoute,
    getV2ActorsActorIdVersionsVersionNumberEnvVarsRouteHandler,
  )
  .openapi(
    postV2ActorsActorIdVersionsVersionNumberEnvVarsRoute,
    postV2ActorsActorIdVersionsVersionNumberEnvVarsRouteHandler,
  )
  .openapi(
    getV2ActorsActorIdVersionsVersionNumberEnvVarsEnvVarNameRoute,
    getV2ActorsActorIdVersionsVersionNumberEnvVarsEnvVarNameRouteHandler,
  )
  .openapi(
    deleteV2ActorsActorIdVersionsVersionNumberEnvVarsEnvVarNameRoute,
    deleteV2ActorsActorIdVersionsVersionNumberEnvVarsEnvVarNameRouteHandler,
  )
  .openapi(getV2ActorsActorIdWebhooksRoute, getV2ActorsActorIdWebhooksRouteHandler)
  .openapi(getV2ActorsActorIdOauthConnectionsRoute, getV2ActorsActorIdOauthConnectionsRouteHandler)
  .openapi(getV2ActorsActorIdBuildsRoute, getV2ActorsActorIdBuildsRouteHandler)
  .openapi(postV2ActorsActorIdBuildsRoute, postV2ActorsActorIdBuildsRouteHandler)
  .openapi(getV2ActorsActorIdBuildsDefaultRoute, getV2ActorsActorIdBuildsDefaultRouteHandler)
  .openapi(
    getV2ActorsActorIdBuildsBuildIdOpenapiJsonRoute,
    getV2ActorsActorIdBuildsBuildIdOpenapiJsonRouteHandler,
  )
  .openapi(getV2ActorsActorIdBuildsBuildIdRoute, getV2ActorsActorIdBuildsBuildIdRouteHandler)
  .openapi(
    postV2ActorsActorIdBuildsBuildIdAbortRoute,
    postV2ActorsActorIdBuildsBuildIdAbortRouteHandler,
  )
  .openapi(getV2ActorsActorIdRunsRoute, getV2ActorsActorIdRunsRouteHandler)
  .openapi(postV2ActorsActorIdRunsRoute, postV2ActorsActorIdRunsRouteHandler)
  .openapi(postV2ActorsActorIdRunSyncRoute, postV2ActorsActorIdRunSyncRouteHandler)
  .openapi(getV2ActorsActorIdRunSyncRoute, getV2ActorsActorIdRunSyncRouteHandler)
  .openapi(
    postV2ActorsActorIdRunSyncGetDatasetItemsRoute,
    postV2ActorsActorIdRunSyncGetDatasetItemsRouteHandler,
  )
  .openapi(
    getV2ActorsActorIdRunSyncGetDatasetItemsRoute,
    getV2ActorsActorIdRunSyncGetDatasetItemsRouteHandler,
  )
  .openapi(postV2ActorsActorIdValidateInputRoute, postV2ActorsActorIdValidateInputRouteHandler)
  .openapi(getV2ActorsActorIdRunsLastRoute, getV2ActorsActorIdRunsLastRouteHandler)
  .openapi(getV2ActorsActorIdRunsRunIdRoute, getV2ActorsActorIdRunsRunIdRouteHandler)
  .openapi(getV2ActorTasksRoute, getV2ActorTasksRouteHandler)
  .openapi(postV2ActorTasksRoute, postV2ActorTasksRouteHandler)
  .openapi(getV2ActorTasksActorTaskIdRoute, getV2ActorTasksActorTaskIdRouteHandler)
  .openapi(putV2ActorTasksActorTaskIdRoute, putV2ActorTasksActorTaskIdRouteHandler)
  .openapi(deleteV2ActorTasksActorTaskIdRoute, deleteV2ActorTasksActorTaskIdRouteHandler)
  .openapi(getV2ActorTasksActorTaskIdInputRoute, getV2ActorTasksActorTaskIdInputRouteHandler)
  .openapi(putV2ActorTasksActorTaskIdInputRoute, putV2ActorTasksActorTaskIdInputRouteHandler)
  .openapi(getV2ActorTasksActorTaskIdWebhooksRoute, getV2ActorTasksActorTaskIdWebhooksRouteHandler)
  .openapi(getV2ActorTasksActorTaskIdRunsRoute, getV2ActorTasksActorTaskIdRunsRouteHandler)
  .openapi(postV2ActorTasksActorTaskIdRunsRoute, postV2ActorTasksActorTaskIdRunsRouteHandler)
  .openapi(getV2ActorTasksActorTaskIdRunSyncRoute, getV2ActorTasksActorTaskIdRunSyncRouteHandler)
  .openapi(postV2ActorTasksActorTaskIdRunSyncRoute, postV2ActorTasksActorTaskIdRunSyncRouteHandler)
  .openapi(
    getV2ActorTasksActorTaskIdRunSyncGetDatasetItemsRoute,
    getV2ActorTasksActorTaskIdRunSyncGetDatasetItemsRouteHandler,
  )
  .openapi(
    postV2ActorTasksActorTaskIdRunSyncGetDatasetItemsRoute,
    postV2ActorTasksActorTaskIdRunSyncGetDatasetItemsRouteHandler,
  )
  .openapi(getV2ActorTasksActorTaskIdRunsLastRoute, getV2ActorTasksActorTaskIdRunsLastRouteHandler)
  .openapi(getV2ActorRunsRoute, getV2ActorRunsRouteHandler)
  .openapi(getV2ActorRunsRunIdRoute, getV2ActorRunsRunIdRouteHandler)
  .openapi(putV2ActorRunsRunIdRoute, putV2ActorRunsRunIdRouteHandler)
  .openapi(deleteV2ActorRunsRunIdRoute, deleteV2ActorRunsRunIdRouteHandler)
  .openapi(postV2ActorRunsRunIdChargeRoute, postV2ActorRunsRunIdChargeRouteHandler)
  .openapi(getV2ActorBuildsRoute, getV2ActorBuildsRouteHandler)
  .openapi(getV2ActorBuildsBuildIdRoute, getV2ActorBuildsBuildIdRouteHandler)
  .openapi(deleteV2ActorBuildsBuildIdRoute, deleteV2ActorBuildsBuildIdRouteHandler)
  .openapi(postV2ActorBuildsBuildIdAbortRoute, postV2ActorBuildsBuildIdAbortRouteHandler)
  .openapi(getV2ActorBuildsBuildIdOpenapiJsonRoute, getV2ActorBuildsBuildIdOpenapiJsonRouteHandler)
  .openapi(
    getV2ActorOauthAccountsConnectionIdAccountsRoute,
    getV2ActorOauthAccountsConnectionIdAccountsRouteHandler,
  )
  .openapi(getV2ActorOauthAccountsAccountIdRoute, getV2ActorOauthAccountsAccountIdRouteHandler)
  .openapi(getV2KeyValueStoresRoute, getV2KeyValueStoresRouteHandler)
  .openapi(postV2KeyValueStoresRoute, postV2KeyValueStoresRouteHandler)
  .openapi(
    headV2KeyValueStoresStoreIdRecordsRecordKeyRoute,
    headV2KeyValueStoresStoreIdRecordsRecordKeyRouteHandler,
  )
  .openapi(getV2DatasetsRoute, getV2DatasetsRouteHandler)
  .openapi(postV2DatasetsRoute, postV2DatasetsRouteHandler)
  .openapi(headV2DatasetsDatasetIdItemsRoute, headV2DatasetsDatasetIdItemsRouteHandler)
  .openapi(getV2RequestQueuesRoute, getV2RequestQueuesRouteHandler)
  .openapi(postV2RequestQueuesRoute, postV2RequestQueuesRouteHandler)
  .openapi(getV2WebhooksRoute, getV2WebhooksRouteHandler)
  .openapi(postV2WebhooksRoute, postV2WebhooksRouteHandler)
  .openapi(getV2WebhooksWebhookIdRoute, getV2WebhooksWebhookIdRouteHandler)
  .openapi(putV2WebhooksWebhookIdRoute, putV2WebhooksWebhookIdRouteHandler)
  .openapi(deleteV2WebhooksWebhookIdRoute, deleteV2WebhooksWebhookIdRouteHandler)
  .openapi(postV2WebhooksWebhookIdTestRoute, postV2WebhooksWebhookIdTestRouteHandler)
  .openapi(getV2WebhooksWebhookIdDispatchesRoute, getV2WebhooksWebhookIdDispatchesRouteHandler)
  .openapi(getV2WebhookDispatchesRoute, getV2WebhookDispatchesRouteHandler)
  .openapi(getV2WebhookDispatchesDispatchIdRoute, getV2WebhookDispatchesDispatchIdRouteHandler)
  .openapi(getV2SchedulesRoute, getV2SchedulesRouteHandler)
  .openapi(postV2SchedulesRoute, postV2SchedulesRouteHandler)
  .openapi(getV2SchedulesScheduleIdRoute, getV2SchedulesScheduleIdRouteHandler)
  .openapi(putV2SchedulesScheduleIdRoute, putV2SchedulesScheduleIdRouteHandler)
  .openapi(deleteV2SchedulesScheduleIdRoute, deleteV2SchedulesScheduleIdRouteHandler)
  .openapi(postV2SchedulesScheduleIdInvokeRoute, postV2SchedulesScheduleIdInvokeRouteHandler)
  .openapi(getV2SchedulesScheduleIdLogRoute, getV2SchedulesScheduleIdLogRouteHandler)
  .openapi(getV2StoreRoute, getV2StoreRouteHandler)
  .openapi(getV2UsersUserIdRoute, getV2UsersUserIdRouteHandler)
  .openapi(getV2UsersMeRoute, getV2UsersMeRouteHandler)
  .openapi(getV2UsersMeUsageMonthlyRoute, getV2UsersMeUsageMonthlyRouteHandler)
  .openapi(getV2UsersMeLimitsRoute, getV2UsersMeLimitsRouteHandler)
  .openapi(putV2UsersMeLimitsRoute, putV2UsersMeLimitsRouteHandler)
  .openapi(getV2UsersUserIdUsageMonthlyRoute, getV2UsersUserIdUsageMonthlyRouteHandler)
  .openapi(getV2UsersUserIdLimitsRoute, getV2UsersUserIdLimitsRouteHandler)
  .openapi(putV2UsersUserIdLimitsRoute, putV2UsersUserIdLimitsRouteHandler)
  .openapi(getV2IntegrationsGitRoute, getV2IntegrationsGitRouteHandler)
  .openapi(
    postV2IntegrationsGitProviderIdCreateRepoRoute,
    postV2IntegrationsGitProviderIdCreateRepoRouteHandler,
  )
  .openapi(
    postV2IntegrationsGitProviderIdRegisterDeploymentKeyRoute,
    postV2IntegrationsGitProviderIdRegisterDeploymentKeyRouteHandler,
  )
  .openapi(postV2ToolsEncodeAndSignRoute, postV2ToolsEncodeAndSignRouteHandler)
  .openapi(postV2ToolsDecodeAndVerifyRoute, postV2ToolsDecodeAndVerifyRouteHandler)

export default app
