import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2ActorBuildsBuildIdRoute,
  deleteV2ActorRunsRunIdRoute,
  deleteV2ActorsActorIdRoute,
  deleteV2ActorsActorIdVersionsVersionNumberEnvVarsEnvVarNameRoute,
  deleteV2ActorsActorIdVersionsVersionNumberRoute,
  deleteV2ActorTasksActorTaskIdRoute,
  deleteV2SchedulesScheduleIdRoute,
  deleteV2WebhooksWebhookIdRoute,
  getV2ActorBuildsBuildIdOpenapiJsonRoute,
  getV2ActorBuildsBuildIdRoute,
  getV2ActorBuildsRoute,
  getV2ActorOauthAccountsAccountIdRoute,
  getV2ActorOauthAccountsConnectionIdAccountsRoute,
  getV2ActorRunsRoute,
  getV2ActorRunsRunIdRoute,
  getV2ActorsActorIdBuildsBuildIdOpenapiJsonRoute,
  getV2ActorsActorIdBuildsBuildIdRoute,
  getV2ActorsActorIdBuildsDefaultRoute,
  getV2ActorsActorIdBuildsRoute,
  getV2ActorsActorIdOauthConnectionsRoute,
  getV2ActorsActorIdRoute,
  getV2ActorsActorIdRunsLastRoute,
  getV2ActorsActorIdRunsRoute,
  getV2ActorsActorIdRunsRunIdRoute,
  getV2ActorsActorIdRunSyncGetDatasetItemsRoute,
  getV2ActorsActorIdRunSyncRoute,
  getV2ActorsActorIdVersionsRoute,
  getV2ActorsActorIdVersionsVersionNumberEnvVarsEnvVarNameRoute,
  getV2ActorsActorIdVersionsVersionNumberEnvVarsRoute,
  getV2ActorsActorIdVersionsVersionNumberRoute,
  getV2ActorsActorIdWebhooksRoute,
  getV2ActorsRoute,
  getV2ActorTasksActorTaskIdInputRoute,
  getV2ActorTasksActorTaskIdRoute,
  getV2ActorTasksActorTaskIdRunsLastRoute,
  getV2ActorTasksActorTaskIdRunsRoute,
  getV2ActorTasksActorTaskIdRunSyncGetDatasetItemsRoute,
  getV2ActorTasksActorTaskIdRunSyncRoute,
  getV2ActorTasksActorTaskIdWebhooksRoute,
  getV2ActorTasksRoute,
  getV2DatasetsRoute,
  getV2IntegrationsGitRoute,
  getV2KeyValueStoresRoute,
  getV2RequestQueuesRoute,
  getV2SchedulesRoute,
  getV2SchedulesScheduleIdLogRoute,
  getV2SchedulesScheduleIdRoute,
  getV2StoreRoute,
  getV2UsersMeLimitsRoute,
  getV2UsersMeRoute,
  getV2UsersMeUsageMonthlyRoute,
  getV2UsersUserIdLimitsRoute,
  getV2UsersUserIdRoute,
  getV2UsersUserIdUsageMonthlyRoute,
  getV2WebhookDispatchesDispatchIdRoute,
  getV2WebhookDispatchesRoute,
  getV2WebhooksRoute,
  getV2WebhooksWebhookIdDispatchesRoute,
  getV2WebhooksWebhookIdRoute,
  headV2DatasetsDatasetIdItemsRoute,
  headV2KeyValueStoresStoreIdRecordsRecordKeyRoute,
  postV2ActorBuildsBuildIdAbortRoute,
  postV2ActorRunsRunIdChargeRoute,
  postV2ActorsActorIdBuildsBuildIdAbortRoute,
  postV2ActorsActorIdBuildsRoute,
  postV2ActorsActorIdRunsRoute,
  postV2ActorsActorIdRunSyncGetDatasetItemsRoute,
  postV2ActorsActorIdRunSyncRoute,
  postV2ActorsActorIdValidateInputRoute,
  postV2ActorsActorIdVersionsRoute,
  postV2ActorsActorIdVersionsVersionNumberEnvVarsRoute,
  postV2ActorsRoute,
  postV2ActorTasksActorTaskIdRunsRoute,
  postV2ActorTasksActorTaskIdRunSyncGetDatasetItemsRoute,
  postV2ActorTasksActorTaskIdRunSyncRoute,
  postV2ActorTasksRoute,
  postV2DatasetsRoute,
  postV2IntegrationsGitProviderIdCreateRepoRoute,
  postV2IntegrationsGitProviderIdRegisterDeploymentKeyRoute,
  postV2KeyValueStoresRoute,
  postV2RequestQueuesRoute,
  postV2SchedulesRoute,
  postV2SchedulesScheduleIdInvokeRoute,
  postV2ToolsDecodeAndVerifyRoute,
  postV2ToolsEncodeAndSignRoute,
  postV2WebhooksRoute,
  postV2WebhooksWebhookIdTestRoute,
  putV2ActorRunsRunIdRoute,
  putV2ActorsActorIdRoute,
  putV2ActorsActorIdVersionsVersionNumberBuildOnPushRoute,
  putV2ActorTasksActorTaskIdInputRoute,
  putV2ActorTasksActorTaskIdRoute,
  putV2SchedulesScheduleIdRoute,
  putV2UsersMeLimitsRoute,
  putV2UsersUserIdLimitsRoute,
  putV2WebhooksWebhookIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v2Handler = app
  .openapi(getV2ActorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ActorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ActorsActorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2ActorsActorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2ActorsActorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ActorsActorIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ActorsActorIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ActorsActorIdVersionsVersionNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2ActorsActorIdVersionsVersionNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2ActorsActorIdVersionsVersionNumberBuildOnPushRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ActorsActorIdVersionsVersionNumberEnvVarsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ActorsActorIdVersionsVersionNumberEnvVarsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ActorsActorIdVersionsVersionNumberEnvVarsEnvVarNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2ActorsActorIdVersionsVersionNumberEnvVarsEnvVarNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ActorsActorIdWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ActorsActorIdOauthConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ActorsActorIdBuildsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ActorsActorIdBuildsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ActorsActorIdBuildsDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ActorsActorIdBuildsBuildIdOpenapiJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ActorsActorIdBuildsBuildIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ActorsActorIdBuildsBuildIdAbortRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ActorsActorIdRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ActorsActorIdRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ActorsActorIdRunSyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ActorsActorIdRunSyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ActorsActorIdRunSyncGetDatasetItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ActorsActorIdRunSyncGetDatasetItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ActorsActorIdValidateInputRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ActorsActorIdRunsLastRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ActorsActorIdRunsRunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ActorTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ActorTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ActorTasksActorTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2ActorTasksActorTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2ActorTasksActorTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ActorTasksActorTaskIdInputRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2ActorTasksActorTaskIdInputRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ActorTasksActorTaskIdWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ActorTasksActorTaskIdRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ActorTasksActorTaskIdRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ActorTasksActorTaskIdRunSyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ActorTasksActorTaskIdRunSyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ActorTasksActorTaskIdRunSyncGetDatasetItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ActorTasksActorTaskIdRunSyncGetDatasetItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ActorTasksActorTaskIdRunsLastRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ActorRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ActorRunsRunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2ActorRunsRunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2ActorRunsRunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ActorRunsRunIdChargeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ActorBuildsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ActorBuildsBuildIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2ActorBuildsBuildIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ActorBuildsBuildIdAbortRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ActorBuildsBuildIdOpenapiJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ActorOauthAccountsConnectionIdAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ActorOauthAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2KeyValueStoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2KeyValueStoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headV2KeyValueStoresStoreIdRecordsRecordKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2DatasetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2DatasetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headV2DatasetsDatasetIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2RequestQueuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2RequestQueuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2WebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2WebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2WebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2WebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2WebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2WebhooksWebhookIdTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2WebhooksWebhookIdDispatchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2WebhookDispatchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2WebhookDispatchesDispatchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2SchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SchedulesScheduleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2SchedulesScheduleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2SchedulesScheduleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2SchedulesScheduleIdInvokeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SchedulesScheduleIdLogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2StoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UsersMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UsersMeUsageMonthlyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UsersMeLimitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2UsersMeLimitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UsersUserIdUsageMonthlyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UsersUserIdLimitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2UsersUserIdLimitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2IntegrationsGitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2IntegrationsGitProviderIdCreateRepoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2IntegrationsGitProviderIdRegisterDeploymentKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ToolsEncodeAndSignRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ToolsDecodeAndVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
