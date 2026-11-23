import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2ActorBuildsBuildIdRoute,
  deleteV2ActorRunsRunIdDatasetRoute,
  deleteV2ActorRunsRunIdKeyValueStoreRecordsRecordKeyRoute,
  deleteV2ActorRunsRunIdKeyValueStoreRoute,
  deleteV2ActorRunsRunIdRequestQueueRequestsBatchRoute,
  deleteV2ActorRunsRunIdRequestQueueRequestsRequestIdLockRoute,
  deleteV2ActorRunsRunIdRequestQueueRequestsRequestIdRoute,
  deleteV2ActorRunsRunIdRequestQueueRoute,
  deleteV2ActorRunsRunIdRoute,
  deleteV2ActorsActorIdRoute,
  deleteV2ActorsActorIdRunsLastDatasetRoute,
  deleteV2ActorsActorIdRunsLastKeyValueStoreRecordsRecordKeyRoute,
  deleteV2ActorsActorIdRunsLastKeyValueStoreRoute,
  deleteV2ActorsActorIdRunsLastRequestQueueRequestsBatchRoute,
  deleteV2ActorsActorIdRunsLastRequestQueueRequestsRequestIdLockRoute,
  deleteV2ActorsActorIdRunsLastRequestQueueRequestsRequestIdRoute,
  deleteV2ActorsActorIdRunsLastRequestQueueRoute,
  deleteV2ActorsActorIdVersionsVersionNumberEnvVarsEnvVarNameRoute,
  deleteV2ActorsActorIdVersionsVersionNumberRoute,
  deleteV2ActorTasksActorTaskIdRoute,
  deleteV2ActorTasksActorTaskIdRunsLastDatasetRoute,
  deleteV2ActorTasksActorTaskIdRunsLastKeyValueStoreRecordsRecordKeyRoute,
  deleteV2ActorTasksActorTaskIdRunsLastKeyValueStoreRoute,
  deleteV2ActorTasksActorTaskIdRunsLastRequestQueueRequestsBatchRoute,
  deleteV2ActorTasksActorTaskIdRunsLastRequestQueueRequestsRequestIdLockRoute,
  deleteV2ActorTasksActorTaskIdRunsLastRequestQueueRequestsRequestIdRoute,
  deleteV2ActorTasksActorTaskIdRunsLastRequestQueueRoute,
  deleteV2BrowserInfoRoute,
  deleteV2DatasetsDatasetIdRoute,
  deleteV2KeyValueStoresStoreIdRecordsRecordKeyRoute,
  deleteV2KeyValueStoresStoreIdRoute,
  deleteV2RequestQueuesQueueIdRequestsBatchRoute,
  deleteV2RequestQueuesQueueIdRequestsRequestIdLockRoute,
  deleteV2RequestQueuesQueueIdRequestsRequestIdRoute,
  deleteV2RequestQueuesQueueIdRoute,
  deleteV2SchedulesScheduleIdRoute,
  deleteV2WebhooksWebhookIdRoute,
  getV2ActorBuildsBuildIdLogRoute,
  getV2ActorBuildsBuildIdOpenapiJsonRoute,
  getV2ActorBuildsBuildIdRoute,
  getV2ActorBuildsRoute,
  getV2ActorOauthAccountsAccountIdRoute,
  getV2ActorOauthAccountsConnectionIdAccountsRoute,
  getV2ActorRunsRoute,
  getV2ActorRunsRunIdDatasetItemsRoute,
  getV2ActorRunsRunIdDatasetRoute,
  getV2ActorRunsRunIdDatasetStatisticsRoute,
  getV2ActorRunsRunIdKeyValueStoreKeysRoute,
  getV2ActorRunsRunIdKeyValueStoreRecordsRecordKeyRoute,
  getV2ActorRunsRunIdKeyValueStoreRecordsRoute,
  getV2ActorRunsRunIdKeyValueStoreRoute,
  getV2ActorRunsRunIdLogRoute,
  getV2ActorRunsRunIdRequestQueueHeadRoute,
  getV2ActorRunsRunIdRequestQueueRequestsRequestIdRoute,
  getV2ActorRunsRunIdRequestQueueRequestsRoute,
  getV2ActorRunsRunIdRequestQueueRoute,
  getV2ActorRunsRunIdRoute,
  getV2ActorsActorIdBuildsBuildIdOpenapiJsonRoute,
  getV2ActorsActorIdBuildsBuildIdRoute,
  getV2ActorsActorIdBuildsDefaultRoute,
  getV2ActorsActorIdBuildsRoute,
  getV2ActorsActorIdOauthConnectionsRoute,
  getV2ActorsActorIdRoute,
  getV2ActorsActorIdRunsLastDatasetItemsRoute,
  getV2ActorsActorIdRunsLastDatasetRoute,
  getV2ActorsActorIdRunsLastDatasetStatisticsRoute,
  getV2ActorsActorIdRunsLastKeyValueStoreKeysRoute,
  getV2ActorsActorIdRunsLastKeyValueStoreRecordsRecordKeyRoute,
  getV2ActorsActorIdRunsLastKeyValueStoreRecordsRoute,
  getV2ActorsActorIdRunsLastKeyValueStoreRoute,
  getV2ActorsActorIdRunsLastLogRoute,
  getV2ActorsActorIdRunsLastRequestQueueHeadRoute,
  getV2ActorsActorIdRunsLastRequestQueueRequestsRequestIdRoute,
  getV2ActorsActorIdRunsLastRequestQueueRequestsRoute,
  getV2ActorsActorIdRunsLastRequestQueueRoute,
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
  getV2ActorTasksActorTaskIdRunsLastDatasetItemsRoute,
  getV2ActorTasksActorTaskIdRunsLastDatasetRoute,
  getV2ActorTasksActorTaskIdRunsLastDatasetStatisticsRoute,
  getV2ActorTasksActorTaskIdRunsLastKeyValueStoreKeysRoute,
  getV2ActorTasksActorTaskIdRunsLastKeyValueStoreRecordsRecordKeyRoute,
  getV2ActorTasksActorTaskIdRunsLastKeyValueStoreRecordsRoute,
  getV2ActorTasksActorTaskIdRunsLastKeyValueStoreRoute,
  getV2ActorTasksActorTaskIdRunsLastLogRoute,
  getV2ActorTasksActorTaskIdRunsLastRequestQueueHeadRoute,
  getV2ActorTasksActorTaskIdRunsLastRequestQueueRequestsRequestIdRoute,
  getV2ActorTasksActorTaskIdRunsLastRequestQueueRequestsRoute,
  getV2ActorTasksActorTaskIdRunsLastRequestQueueRoute,
  getV2ActorTasksActorTaskIdRunsLastRoute,
  getV2ActorTasksActorTaskIdRunsRoute,
  getV2ActorTasksActorTaskIdRunSyncGetDatasetItemsRoute,
  getV2ActorTasksActorTaskIdRunSyncRoute,
  getV2ActorTasksActorTaskIdWebhooksRoute,
  getV2ActorTasksRoute,
  getV2BrowserInfoRoute,
  getV2DatasetsDatasetIdItemsRoute,
  getV2DatasetsDatasetIdRoute,
  getV2DatasetsDatasetIdStatisticsRoute,
  getV2DatasetsRoute,
  getV2IntegrationsGitRoute,
  getV2KeyValueStoresRoute,
  getV2KeyValueStoresStoreIdKeysRoute,
  getV2KeyValueStoresStoreIdRecordsRecordKeyRoute,
  getV2KeyValueStoresStoreIdRecordsRoute,
  getV2KeyValueStoresStoreIdRoute,
  getV2LogsBuildOrRunIdRoute,
  getV2RequestQueuesQueueIdHeadRoute,
  getV2RequestQueuesQueueIdRequestsRequestIdRoute,
  getV2RequestQueuesQueueIdRequestsRoute,
  getV2RequestQueuesQueueIdRoute,
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
  postV2ActorRunsRunIdAbortRoute,
  postV2ActorRunsRunIdChargeRoute,
  postV2ActorRunsRunIdDatasetItemsRoute,
  postV2ActorRunsRunIdKeyValueStoreRecordsRecordKeyRoute,
  postV2ActorRunsRunIdMetamorphRoute,
  postV2ActorRunsRunIdRebootRoute,
  postV2ActorRunsRunIdRequestQueueHeadLockRoute,
  postV2ActorRunsRunIdRequestQueueRequestsBatchRoute,
  postV2ActorRunsRunIdRequestQueueRequestsRoute,
  postV2ActorRunsRunIdRequestQueueRequestsUnlockRoute,
  postV2ActorRunsRunIdResurrectRoute,
  postV2ActorsActorIdBuildsBuildIdAbortRoute,
  postV2ActorsActorIdBuildsRoute,
  postV2ActorsActorIdRunsLastAbortRoute,
  postV2ActorsActorIdRunsLastDatasetItemsRoute,
  postV2ActorsActorIdRunsLastKeyValueStoreRecordsRecordKeyRoute,
  postV2ActorsActorIdRunsLastMetamorphRoute,
  postV2ActorsActorIdRunsLastRebootRoute,
  postV2ActorsActorIdRunsLastRequestQueueHeadLockRoute,
  postV2ActorsActorIdRunsLastRequestQueueRequestsBatchRoute,
  postV2ActorsActorIdRunsLastRequestQueueRequestsRoute,
  postV2ActorsActorIdRunsLastRequestQueueRequestsUnlockRoute,
  postV2ActorsActorIdRunsRoute,
  postV2ActorsActorIdRunsRunIdAbortRoute,
  postV2ActorsActorIdRunsRunIdMetamorphRoute,
  postV2ActorsActorIdRunsRunIdResurrectRoute,
  postV2ActorsActorIdRunSyncGetDatasetItemsRoute,
  postV2ActorsActorIdRunSyncRoute,
  postV2ActorsActorIdValidateInputRoute,
  postV2ActorsActorIdVersionsRoute,
  postV2ActorsActorIdVersionsVersionNumberEnvVarsEnvVarNameRoute,
  postV2ActorsActorIdVersionsVersionNumberEnvVarsRoute,
  postV2ActorsActorIdVersionsVersionNumberRoute,
  postV2ActorsRoute,
  postV2ActorTasksActorTaskIdRunsLastAbortRoute,
  postV2ActorTasksActorTaskIdRunsLastDatasetItemsRoute,
  postV2ActorTasksActorTaskIdRunsLastKeyValueStoreRecordsRecordKeyRoute,
  postV2ActorTasksActorTaskIdRunsLastMetamorphRoute,
  postV2ActorTasksActorTaskIdRunsLastRebootRoute,
  postV2ActorTasksActorTaskIdRunsLastRequestQueueHeadLockRoute,
  postV2ActorTasksActorTaskIdRunsLastRequestQueueRequestsBatchRoute,
  postV2ActorTasksActorTaskIdRunsLastRequestQueueRequestsRoute,
  postV2ActorTasksActorTaskIdRunsLastRequestQueueRequestsUnlockRoute,
  postV2ActorTasksActorTaskIdRunsRoute,
  postV2ActorTasksActorTaskIdRunSyncGetDatasetItemsRoute,
  postV2ActorTasksActorTaskIdRunSyncRoute,
  postV2ActorTasksRoute,
  postV2BrowserInfoRoute,
  postV2DatasetsDatasetIdItemsRoute,
  postV2DatasetsRoute,
  postV2IntegrationsGitProviderIdCreateRepoRoute,
  postV2IntegrationsGitProviderIdRegisterDeploymentKeyRoute,
  postV2KeyValueStoresRoute,
  postV2KeyValueStoresStoreIdRecordsRecordKeyRoute,
  postV2RequestQueuesQueueIdHeadLockRoute,
  postV2RequestQueuesQueueIdRequestsBatchRoute,
  postV2RequestQueuesQueueIdRequestsRoute,
  postV2RequestQueuesQueueIdRequestsUnlockRoute,
  postV2RequestQueuesRoute,
  postV2SchedulesRoute,
  postV2SchedulesScheduleIdInvokeRoute,
  postV2ToolsDecodeAndVerifyRoute,
  postV2ToolsEncodeAndSignRoute,
  postV2WebhooksRoute,
  postV2WebhooksWebhookIdTestRoute,
  putV2ActorRunsRunIdDatasetRoute,
  putV2ActorRunsRunIdKeyValueStoreRecordsRecordKeyRoute,
  putV2ActorRunsRunIdKeyValueStoreRoute,
  putV2ActorRunsRunIdRequestQueueRequestsRequestIdLockRoute,
  putV2ActorRunsRunIdRequestQueueRequestsRequestIdRoute,
  putV2ActorRunsRunIdRequestQueueRoute,
  putV2ActorRunsRunIdRoute,
  putV2ActorsActorIdRoute,
  putV2ActorsActorIdRunsLastDatasetRoute,
  putV2ActorsActorIdRunsLastKeyValueStoreRecordsRecordKeyRoute,
  putV2ActorsActorIdRunsLastKeyValueStoreRoute,
  putV2ActorsActorIdRunsLastRequestQueueRequestsRequestIdLockRoute,
  putV2ActorsActorIdRunsLastRequestQueueRequestsRequestIdRoute,
  putV2ActorsActorIdRunsLastRequestQueueRoute,
  putV2ActorsActorIdVersionsVersionNumberBuildOnPushRoute,
  putV2ActorsActorIdVersionsVersionNumberEnvVarsEnvVarNameRoute,
  putV2ActorsActorIdVersionsVersionNumberRoute,
  putV2ActorTasksActorTaskIdInputRoute,
  putV2ActorTasksActorTaskIdRoute,
  putV2ActorTasksActorTaskIdRunsLastDatasetRoute,
  putV2ActorTasksActorTaskIdRunsLastKeyValueStoreRecordsRecordKeyRoute,
  putV2ActorTasksActorTaskIdRunsLastKeyValueStoreRoute,
  putV2ActorTasksActorTaskIdRunsLastRequestQueueRequestsRequestIdLockRoute,
  putV2ActorTasksActorTaskIdRunsLastRequestQueueRequestsRequestIdRoute,
  putV2ActorTasksActorTaskIdRunsLastRequestQueueRoute,
  putV2BrowserInfoRoute,
  putV2DatasetsDatasetIdRoute,
  putV2KeyValueStoresStoreIdRecordsRecordKeyRoute,
  putV2KeyValueStoresStoreIdRoute,
  putV2RequestQueuesQueueIdRequestsRequestIdLockRoute,
  putV2RequestQueuesQueueIdRequestsRequestIdRoute,
  putV2RequestQueuesQueueIdRoute,
  putV2SchedulesScheduleIdRoute,
  putV2UsersMeLimitsRoute,
  putV2UsersUserIdLimitsRoute,
  putV2WebhooksWebhookIdRoute,
} from './routes'
import {
  deleteV2ActorBuildsBuildIdRouteHandler,
  deleteV2ActorRunsRunIdDatasetRouteHandler,
  deleteV2ActorRunsRunIdKeyValueStoreRecordsRecordKeyRouteHandler,
  deleteV2ActorRunsRunIdKeyValueStoreRouteHandler,
  deleteV2ActorRunsRunIdRequestQueueRequestsBatchRouteHandler,
  deleteV2ActorRunsRunIdRequestQueueRequestsRequestIdLockRouteHandler,
  deleteV2ActorRunsRunIdRequestQueueRequestsRequestIdRouteHandler,
  deleteV2ActorRunsRunIdRequestQueueRouteHandler,
  deleteV2ActorRunsRunIdRouteHandler,
  deleteV2ActorsActorIdRouteHandler,
  deleteV2ActorsActorIdRunsLastDatasetRouteHandler,
  deleteV2ActorsActorIdRunsLastKeyValueStoreRecordsRecordKeyRouteHandler,
  deleteV2ActorsActorIdRunsLastKeyValueStoreRouteHandler,
  deleteV2ActorsActorIdRunsLastRequestQueueRequestsBatchRouteHandler,
  deleteV2ActorsActorIdRunsLastRequestQueueRequestsRequestIdLockRouteHandler,
  deleteV2ActorsActorIdRunsLastRequestQueueRequestsRequestIdRouteHandler,
  deleteV2ActorsActorIdRunsLastRequestQueueRouteHandler,
  deleteV2ActorsActorIdVersionsVersionNumberEnvVarsEnvVarNameRouteHandler,
  deleteV2ActorsActorIdVersionsVersionNumberRouteHandler,
  deleteV2ActorTasksActorTaskIdRouteHandler,
  deleteV2ActorTasksActorTaskIdRunsLastDatasetRouteHandler,
  deleteV2ActorTasksActorTaskIdRunsLastKeyValueStoreRecordsRecordKeyRouteHandler,
  deleteV2ActorTasksActorTaskIdRunsLastKeyValueStoreRouteHandler,
  deleteV2ActorTasksActorTaskIdRunsLastRequestQueueRequestsBatchRouteHandler,
  deleteV2ActorTasksActorTaskIdRunsLastRequestQueueRequestsRequestIdLockRouteHandler,
  deleteV2ActorTasksActorTaskIdRunsLastRequestQueueRequestsRequestIdRouteHandler,
  deleteV2ActorTasksActorTaskIdRunsLastRequestQueueRouteHandler,
  deleteV2BrowserInfoRouteHandler,
  deleteV2DatasetsDatasetIdRouteHandler,
  deleteV2KeyValueStoresStoreIdRecordsRecordKeyRouteHandler,
  deleteV2KeyValueStoresStoreIdRouteHandler,
  deleteV2RequestQueuesQueueIdRequestsBatchRouteHandler,
  deleteV2RequestQueuesQueueIdRequestsRequestIdLockRouteHandler,
  deleteV2RequestQueuesQueueIdRequestsRequestIdRouteHandler,
  deleteV2RequestQueuesQueueIdRouteHandler,
  deleteV2SchedulesScheduleIdRouteHandler,
  deleteV2WebhooksWebhookIdRouteHandler,
  getV2ActorBuildsBuildIdLogRouteHandler,
  getV2ActorBuildsBuildIdOpenapiJsonRouteHandler,
  getV2ActorBuildsBuildIdRouteHandler,
  getV2ActorBuildsRouteHandler,
  getV2ActorOauthAccountsAccountIdRouteHandler,
  getV2ActorOauthAccountsConnectionIdAccountsRouteHandler,
  getV2ActorRunsRouteHandler,
  getV2ActorRunsRunIdDatasetItemsRouteHandler,
  getV2ActorRunsRunIdDatasetRouteHandler,
  getV2ActorRunsRunIdDatasetStatisticsRouteHandler,
  getV2ActorRunsRunIdKeyValueStoreKeysRouteHandler,
  getV2ActorRunsRunIdKeyValueStoreRecordsRecordKeyRouteHandler,
  getV2ActorRunsRunIdKeyValueStoreRecordsRouteHandler,
  getV2ActorRunsRunIdKeyValueStoreRouteHandler,
  getV2ActorRunsRunIdLogRouteHandler,
  getV2ActorRunsRunIdRequestQueueHeadRouteHandler,
  getV2ActorRunsRunIdRequestQueueRequestsRequestIdRouteHandler,
  getV2ActorRunsRunIdRequestQueueRequestsRouteHandler,
  getV2ActorRunsRunIdRequestQueueRouteHandler,
  getV2ActorRunsRunIdRouteHandler,
  getV2ActorsActorIdBuildsBuildIdOpenapiJsonRouteHandler,
  getV2ActorsActorIdBuildsBuildIdRouteHandler,
  getV2ActorsActorIdBuildsDefaultRouteHandler,
  getV2ActorsActorIdBuildsRouteHandler,
  getV2ActorsActorIdOauthConnectionsRouteHandler,
  getV2ActorsActorIdRouteHandler,
  getV2ActorsActorIdRunsLastDatasetItemsRouteHandler,
  getV2ActorsActorIdRunsLastDatasetRouteHandler,
  getV2ActorsActorIdRunsLastDatasetStatisticsRouteHandler,
  getV2ActorsActorIdRunsLastKeyValueStoreKeysRouteHandler,
  getV2ActorsActorIdRunsLastKeyValueStoreRecordsRecordKeyRouteHandler,
  getV2ActorsActorIdRunsLastKeyValueStoreRecordsRouteHandler,
  getV2ActorsActorIdRunsLastKeyValueStoreRouteHandler,
  getV2ActorsActorIdRunsLastLogRouteHandler,
  getV2ActorsActorIdRunsLastRequestQueueHeadRouteHandler,
  getV2ActorsActorIdRunsLastRequestQueueRequestsRequestIdRouteHandler,
  getV2ActorsActorIdRunsLastRequestQueueRequestsRouteHandler,
  getV2ActorsActorIdRunsLastRequestQueueRouteHandler,
  getV2ActorsActorIdRunsLastRouteHandler,
  getV2ActorsActorIdRunsRouteHandler,
  getV2ActorsActorIdRunsRunIdRouteHandler,
  getV2ActorsActorIdRunSyncGetDatasetItemsRouteHandler,
  getV2ActorsActorIdRunSyncRouteHandler,
  getV2ActorsActorIdVersionsRouteHandler,
  getV2ActorsActorIdVersionsVersionNumberEnvVarsEnvVarNameRouteHandler,
  getV2ActorsActorIdVersionsVersionNumberEnvVarsRouteHandler,
  getV2ActorsActorIdVersionsVersionNumberRouteHandler,
  getV2ActorsActorIdWebhooksRouteHandler,
  getV2ActorsRouteHandler,
  getV2ActorTasksActorTaskIdInputRouteHandler,
  getV2ActorTasksActorTaskIdRouteHandler,
  getV2ActorTasksActorTaskIdRunsLastDatasetItemsRouteHandler,
  getV2ActorTasksActorTaskIdRunsLastDatasetRouteHandler,
  getV2ActorTasksActorTaskIdRunsLastDatasetStatisticsRouteHandler,
  getV2ActorTasksActorTaskIdRunsLastKeyValueStoreKeysRouteHandler,
  getV2ActorTasksActorTaskIdRunsLastKeyValueStoreRecordsRecordKeyRouteHandler,
  getV2ActorTasksActorTaskIdRunsLastKeyValueStoreRecordsRouteHandler,
  getV2ActorTasksActorTaskIdRunsLastKeyValueStoreRouteHandler,
  getV2ActorTasksActorTaskIdRunsLastLogRouteHandler,
  getV2ActorTasksActorTaskIdRunsLastRequestQueueHeadRouteHandler,
  getV2ActorTasksActorTaskIdRunsLastRequestQueueRequestsRequestIdRouteHandler,
  getV2ActorTasksActorTaskIdRunsLastRequestQueueRequestsRouteHandler,
  getV2ActorTasksActorTaskIdRunsLastRequestQueueRouteHandler,
  getV2ActorTasksActorTaskIdRunsLastRouteHandler,
  getV2ActorTasksActorTaskIdRunsRouteHandler,
  getV2ActorTasksActorTaskIdRunSyncGetDatasetItemsRouteHandler,
  getV2ActorTasksActorTaskIdRunSyncRouteHandler,
  getV2ActorTasksActorTaskIdWebhooksRouteHandler,
  getV2ActorTasksRouteHandler,
  getV2BrowserInfoRouteHandler,
  getV2DatasetsDatasetIdItemsRouteHandler,
  getV2DatasetsDatasetIdRouteHandler,
  getV2DatasetsDatasetIdStatisticsRouteHandler,
  getV2DatasetsRouteHandler,
  getV2IntegrationsGitRouteHandler,
  getV2KeyValueStoresRouteHandler,
  getV2KeyValueStoresStoreIdKeysRouteHandler,
  getV2KeyValueStoresStoreIdRecordsRecordKeyRouteHandler,
  getV2KeyValueStoresStoreIdRecordsRouteHandler,
  getV2KeyValueStoresStoreIdRouteHandler,
  getV2LogsBuildOrRunIdRouteHandler,
  getV2RequestQueuesQueueIdHeadRouteHandler,
  getV2RequestQueuesQueueIdRequestsRequestIdRouteHandler,
  getV2RequestQueuesQueueIdRequestsRouteHandler,
  getV2RequestQueuesQueueIdRouteHandler,
  getV2RequestQueuesRouteHandler,
  getV2SchedulesRouteHandler,
  getV2SchedulesScheduleIdLogRouteHandler,
  getV2SchedulesScheduleIdRouteHandler,
  getV2StoreRouteHandler,
  getV2UsersMeLimitsRouteHandler,
  getV2UsersMeRouteHandler,
  getV2UsersMeUsageMonthlyRouteHandler,
  getV2UsersUserIdLimitsRouteHandler,
  getV2UsersUserIdRouteHandler,
  getV2UsersUserIdUsageMonthlyRouteHandler,
  getV2WebhookDispatchesDispatchIdRouteHandler,
  getV2WebhookDispatchesRouteHandler,
  getV2WebhooksRouteHandler,
  getV2WebhooksWebhookIdDispatchesRouteHandler,
  getV2WebhooksWebhookIdRouteHandler,
  headV2DatasetsDatasetIdItemsRouteHandler,
  headV2KeyValueStoresStoreIdRecordsRecordKeyRouteHandler,
  postV2ActorBuildsBuildIdAbortRouteHandler,
  postV2ActorRunsRunIdAbortRouteHandler,
  postV2ActorRunsRunIdChargeRouteHandler,
  postV2ActorRunsRunIdDatasetItemsRouteHandler,
  postV2ActorRunsRunIdKeyValueStoreRecordsRecordKeyRouteHandler,
  postV2ActorRunsRunIdMetamorphRouteHandler,
  postV2ActorRunsRunIdRebootRouteHandler,
  postV2ActorRunsRunIdRequestQueueHeadLockRouteHandler,
  postV2ActorRunsRunIdRequestQueueRequestsBatchRouteHandler,
  postV2ActorRunsRunIdRequestQueueRequestsRouteHandler,
  postV2ActorRunsRunIdRequestQueueRequestsUnlockRouteHandler,
  postV2ActorRunsRunIdResurrectRouteHandler,
  postV2ActorsActorIdBuildsBuildIdAbortRouteHandler,
  postV2ActorsActorIdBuildsRouteHandler,
  postV2ActorsActorIdRunsLastAbortRouteHandler,
  postV2ActorsActorIdRunsLastDatasetItemsRouteHandler,
  postV2ActorsActorIdRunsLastKeyValueStoreRecordsRecordKeyRouteHandler,
  postV2ActorsActorIdRunsLastMetamorphRouteHandler,
  postV2ActorsActorIdRunsLastRebootRouteHandler,
  postV2ActorsActorIdRunsLastRequestQueueHeadLockRouteHandler,
  postV2ActorsActorIdRunsLastRequestQueueRequestsBatchRouteHandler,
  postV2ActorsActorIdRunsLastRequestQueueRequestsRouteHandler,
  postV2ActorsActorIdRunsLastRequestQueueRequestsUnlockRouteHandler,
  postV2ActorsActorIdRunsRouteHandler,
  postV2ActorsActorIdRunsRunIdAbortRouteHandler,
  postV2ActorsActorIdRunsRunIdMetamorphRouteHandler,
  postV2ActorsActorIdRunsRunIdResurrectRouteHandler,
  postV2ActorsActorIdRunSyncGetDatasetItemsRouteHandler,
  postV2ActorsActorIdRunSyncRouteHandler,
  postV2ActorsActorIdValidateInputRouteHandler,
  postV2ActorsActorIdVersionsRouteHandler,
  postV2ActorsActorIdVersionsVersionNumberEnvVarsEnvVarNameRouteHandler,
  postV2ActorsActorIdVersionsVersionNumberEnvVarsRouteHandler,
  postV2ActorsActorIdVersionsVersionNumberRouteHandler,
  postV2ActorsRouteHandler,
  postV2ActorTasksActorTaskIdRunsLastAbortRouteHandler,
  postV2ActorTasksActorTaskIdRunsLastDatasetItemsRouteHandler,
  postV2ActorTasksActorTaskIdRunsLastKeyValueStoreRecordsRecordKeyRouteHandler,
  postV2ActorTasksActorTaskIdRunsLastMetamorphRouteHandler,
  postV2ActorTasksActorTaskIdRunsLastRebootRouteHandler,
  postV2ActorTasksActorTaskIdRunsLastRequestQueueHeadLockRouteHandler,
  postV2ActorTasksActorTaskIdRunsLastRequestQueueRequestsBatchRouteHandler,
  postV2ActorTasksActorTaskIdRunsLastRequestQueueRequestsRouteHandler,
  postV2ActorTasksActorTaskIdRunsLastRequestQueueRequestsUnlockRouteHandler,
  postV2ActorTasksActorTaskIdRunsRouteHandler,
  postV2ActorTasksActorTaskIdRunSyncGetDatasetItemsRouteHandler,
  postV2ActorTasksActorTaskIdRunSyncRouteHandler,
  postV2ActorTasksRouteHandler,
  postV2BrowserInfoRouteHandler,
  postV2DatasetsDatasetIdItemsRouteHandler,
  postV2DatasetsRouteHandler,
  postV2IntegrationsGitProviderIdCreateRepoRouteHandler,
  postV2IntegrationsGitProviderIdRegisterDeploymentKeyRouteHandler,
  postV2KeyValueStoresRouteHandler,
  postV2KeyValueStoresStoreIdRecordsRecordKeyRouteHandler,
  postV2RequestQueuesQueueIdHeadLockRouteHandler,
  postV2RequestQueuesQueueIdRequestsBatchRouteHandler,
  postV2RequestQueuesQueueIdRequestsRouteHandler,
  postV2RequestQueuesQueueIdRequestsUnlockRouteHandler,
  postV2RequestQueuesRouteHandler,
  postV2SchedulesRouteHandler,
  postV2SchedulesScheduleIdInvokeRouteHandler,
  postV2ToolsDecodeAndVerifyRouteHandler,
  postV2ToolsEncodeAndSignRouteHandler,
  postV2WebhooksRouteHandler,
  postV2WebhooksWebhookIdTestRouteHandler,
  putV2ActorRunsRunIdDatasetRouteHandler,
  putV2ActorRunsRunIdKeyValueStoreRecordsRecordKeyRouteHandler,
  putV2ActorRunsRunIdKeyValueStoreRouteHandler,
  putV2ActorRunsRunIdRequestQueueRequestsRequestIdLockRouteHandler,
  putV2ActorRunsRunIdRequestQueueRequestsRequestIdRouteHandler,
  putV2ActorRunsRunIdRequestQueueRouteHandler,
  putV2ActorRunsRunIdRouteHandler,
  putV2ActorsActorIdRouteHandler,
  putV2ActorsActorIdRunsLastDatasetRouteHandler,
  putV2ActorsActorIdRunsLastKeyValueStoreRecordsRecordKeyRouteHandler,
  putV2ActorsActorIdRunsLastKeyValueStoreRouteHandler,
  putV2ActorsActorIdRunsLastRequestQueueRequestsRequestIdLockRouteHandler,
  putV2ActorsActorIdRunsLastRequestQueueRequestsRequestIdRouteHandler,
  putV2ActorsActorIdRunsLastRequestQueueRouteHandler,
  putV2ActorsActorIdVersionsVersionNumberBuildOnPushRouteHandler,
  putV2ActorsActorIdVersionsVersionNumberEnvVarsEnvVarNameRouteHandler,
  putV2ActorsActorIdVersionsVersionNumberRouteHandler,
  putV2ActorTasksActorTaskIdInputRouteHandler,
  putV2ActorTasksActorTaskIdRouteHandler,
  putV2ActorTasksActorTaskIdRunsLastDatasetRouteHandler,
  putV2ActorTasksActorTaskIdRunsLastKeyValueStoreRecordsRecordKeyRouteHandler,
  putV2ActorTasksActorTaskIdRunsLastKeyValueStoreRouteHandler,
  putV2ActorTasksActorTaskIdRunsLastRequestQueueRequestsRequestIdLockRouteHandler,
  putV2ActorTasksActorTaskIdRunsLastRequestQueueRequestsRequestIdRouteHandler,
  putV2ActorTasksActorTaskIdRunsLastRequestQueueRouteHandler,
  putV2BrowserInfoRouteHandler,
  putV2DatasetsDatasetIdRouteHandler,
  putV2KeyValueStoresStoreIdRecordsRecordKeyRouteHandler,
  putV2KeyValueStoresStoreIdRouteHandler,
  putV2RequestQueuesQueueIdRequestsRequestIdLockRouteHandler,
  putV2RequestQueuesQueueIdRequestsRequestIdRouteHandler,
  putV2RequestQueuesQueueIdRouteHandler,
  putV2SchedulesScheduleIdRouteHandler,
  putV2UsersMeLimitsRouteHandler,
  putV2UsersUserIdLimitsRouteHandler,
  putV2WebhooksWebhookIdRouteHandler,
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
    putV2ActorsActorIdVersionsVersionNumberRoute,
    putV2ActorsActorIdVersionsVersionNumberRouteHandler,
  )
  .openapi(
    postV2ActorsActorIdVersionsVersionNumberRoute,
    postV2ActorsActorIdVersionsVersionNumberRouteHandler,
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
    putV2ActorsActorIdVersionsVersionNumberEnvVarsEnvVarNameRoute,
    putV2ActorsActorIdVersionsVersionNumberEnvVarsEnvVarNameRouteHandler,
  )
  .openapi(
    postV2ActorsActorIdVersionsVersionNumberEnvVarsEnvVarNameRoute,
    postV2ActorsActorIdVersionsVersionNumberEnvVarsEnvVarNameRouteHandler,
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
  .openapi(
    postV2ActorsActorIdRunsRunIdResurrectRoute,
    postV2ActorsActorIdRunsRunIdResurrectRouteHandler,
  )
  .openapi(getV2ActorsActorIdRunsLastRoute, getV2ActorsActorIdRunsLastRouteHandler)
  .openapi(getV2ActorsActorIdRunsLastDatasetRoute, getV2ActorsActorIdRunsLastDatasetRouteHandler)
  .openapi(putV2ActorsActorIdRunsLastDatasetRoute, putV2ActorsActorIdRunsLastDatasetRouteHandler)
  .openapi(
    deleteV2ActorsActorIdRunsLastDatasetRoute,
    deleteV2ActorsActorIdRunsLastDatasetRouteHandler,
  )
  .openapi(
    getV2ActorsActorIdRunsLastDatasetItemsRoute,
    getV2ActorsActorIdRunsLastDatasetItemsRouteHandler,
  )
  .openapi(
    postV2ActorsActorIdRunsLastDatasetItemsRoute,
    postV2ActorsActorIdRunsLastDatasetItemsRouteHandler,
  )
  .openapi(
    getV2ActorsActorIdRunsLastDatasetStatisticsRoute,
    getV2ActorsActorIdRunsLastDatasetStatisticsRouteHandler,
  )
  .openapi(
    getV2ActorsActorIdRunsLastKeyValueStoreRoute,
    getV2ActorsActorIdRunsLastKeyValueStoreRouteHandler,
  )
  .openapi(
    putV2ActorsActorIdRunsLastKeyValueStoreRoute,
    putV2ActorsActorIdRunsLastKeyValueStoreRouteHandler,
  )
  .openapi(
    deleteV2ActorsActorIdRunsLastKeyValueStoreRoute,
    deleteV2ActorsActorIdRunsLastKeyValueStoreRouteHandler,
  )
  .openapi(
    getV2ActorsActorIdRunsLastKeyValueStoreKeysRoute,
    getV2ActorsActorIdRunsLastKeyValueStoreKeysRouteHandler,
  )
  .openapi(
    getV2ActorsActorIdRunsLastKeyValueStoreRecordsRoute,
    getV2ActorsActorIdRunsLastKeyValueStoreRecordsRouteHandler,
  )
  .openapi(
    getV2ActorsActorIdRunsLastKeyValueStoreRecordsRecordKeyRoute,
    getV2ActorsActorIdRunsLastKeyValueStoreRecordsRecordKeyRouteHandler,
  )
  .openapi(
    putV2ActorsActorIdRunsLastKeyValueStoreRecordsRecordKeyRoute,
    putV2ActorsActorIdRunsLastKeyValueStoreRecordsRecordKeyRouteHandler,
  )
  .openapi(
    postV2ActorsActorIdRunsLastKeyValueStoreRecordsRecordKeyRoute,
    postV2ActorsActorIdRunsLastKeyValueStoreRecordsRecordKeyRouteHandler,
  )
  .openapi(
    deleteV2ActorsActorIdRunsLastKeyValueStoreRecordsRecordKeyRoute,
    deleteV2ActorsActorIdRunsLastKeyValueStoreRecordsRecordKeyRouteHandler,
  )
  .openapi(
    getV2ActorsActorIdRunsLastRequestQueueRoute,
    getV2ActorsActorIdRunsLastRequestQueueRouteHandler,
  )
  .openapi(
    putV2ActorsActorIdRunsLastRequestQueueRoute,
    putV2ActorsActorIdRunsLastRequestQueueRouteHandler,
  )
  .openapi(
    deleteV2ActorsActorIdRunsLastRequestQueueRoute,
    deleteV2ActorsActorIdRunsLastRequestQueueRouteHandler,
  )
  .openapi(
    getV2ActorsActorIdRunsLastRequestQueueRequestsRoute,
    getV2ActorsActorIdRunsLastRequestQueueRequestsRouteHandler,
  )
  .openapi(
    postV2ActorsActorIdRunsLastRequestQueueRequestsRoute,
    postV2ActorsActorIdRunsLastRequestQueueRequestsRouteHandler,
  )
  .openapi(
    postV2ActorsActorIdRunsLastRequestQueueRequestsBatchRoute,
    postV2ActorsActorIdRunsLastRequestQueueRequestsBatchRouteHandler,
  )
  .openapi(
    deleteV2ActorsActorIdRunsLastRequestQueueRequestsBatchRoute,
    deleteV2ActorsActorIdRunsLastRequestQueueRequestsBatchRouteHandler,
  )
  .openapi(
    postV2ActorsActorIdRunsLastRequestQueueRequestsUnlockRoute,
    postV2ActorsActorIdRunsLastRequestQueueRequestsUnlockRouteHandler,
  )
  .openapi(
    getV2ActorsActorIdRunsLastRequestQueueRequestsRequestIdRoute,
    getV2ActorsActorIdRunsLastRequestQueueRequestsRequestIdRouteHandler,
  )
  .openapi(
    putV2ActorsActorIdRunsLastRequestQueueRequestsRequestIdRoute,
    putV2ActorsActorIdRunsLastRequestQueueRequestsRequestIdRouteHandler,
  )
  .openapi(
    deleteV2ActorsActorIdRunsLastRequestQueueRequestsRequestIdRoute,
    deleteV2ActorsActorIdRunsLastRequestQueueRequestsRequestIdRouteHandler,
  )
  .openapi(
    putV2ActorsActorIdRunsLastRequestQueueRequestsRequestIdLockRoute,
    putV2ActorsActorIdRunsLastRequestQueueRequestsRequestIdLockRouteHandler,
  )
  .openapi(
    deleteV2ActorsActorIdRunsLastRequestQueueRequestsRequestIdLockRoute,
    deleteV2ActorsActorIdRunsLastRequestQueueRequestsRequestIdLockRouteHandler,
  )
  .openapi(
    getV2ActorsActorIdRunsLastRequestQueueHeadRoute,
    getV2ActorsActorIdRunsLastRequestQueueHeadRouteHandler,
  )
  .openapi(
    postV2ActorsActorIdRunsLastRequestQueueHeadLockRoute,
    postV2ActorsActorIdRunsLastRequestQueueHeadLockRouteHandler,
  )
  .openapi(getV2ActorsActorIdRunsLastLogRoute, getV2ActorsActorIdRunsLastLogRouteHandler)
  .openapi(postV2ActorsActorIdRunsLastAbortRoute, postV2ActorsActorIdRunsLastAbortRouteHandler)
  .openapi(
    postV2ActorsActorIdRunsLastMetamorphRoute,
    postV2ActorsActorIdRunsLastMetamorphRouteHandler,
  )
  .openapi(postV2ActorsActorIdRunsLastRebootRoute, postV2ActorsActorIdRunsLastRebootRouteHandler)
  .openapi(getV2ActorsActorIdRunsRunIdRoute, getV2ActorsActorIdRunsRunIdRouteHandler)
  .openapi(postV2ActorsActorIdRunsRunIdAbortRoute, postV2ActorsActorIdRunsRunIdAbortRouteHandler)
  .openapi(
    postV2ActorsActorIdRunsRunIdMetamorphRoute,
    postV2ActorsActorIdRunsRunIdMetamorphRouteHandler,
  )
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
  .openapi(
    getV2ActorTasksActorTaskIdRunsLastLogRoute,
    getV2ActorTasksActorTaskIdRunsLastLogRouteHandler,
  )
  .openapi(
    postV2ActorTasksActorTaskIdRunsLastAbortRoute,
    postV2ActorTasksActorTaskIdRunsLastAbortRouteHandler,
  )
  .openapi(
    postV2ActorTasksActorTaskIdRunsLastMetamorphRoute,
    postV2ActorTasksActorTaskIdRunsLastMetamorphRouteHandler,
  )
  .openapi(
    postV2ActorTasksActorTaskIdRunsLastRebootRoute,
    postV2ActorTasksActorTaskIdRunsLastRebootRouteHandler,
  )
  .openapi(
    getV2ActorTasksActorTaskIdRunsLastDatasetRoute,
    getV2ActorTasksActorTaskIdRunsLastDatasetRouteHandler,
  )
  .openapi(
    putV2ActorTasksActorTaskIdRunsLastDatasetRoute,
    putV2ActorTasksActorTaskIdRunsLastDatasetRouteHandler,
  )
  .openapi(
    deleteV2ActorTasksActorTaskIdRunsLastDatasetRoute,
    deleteV2ActorTasksActorTaskIdRunsLastDatasetRouteHandler,
  )
  .openapi(
    getV2ActorTasksActorTaskIdRunsLastDatasetItemsRoute,
    getV2ActorTasksActorTaskIdRunsLastDatasetItemsRouteHandler,
  )
  .openapi(
    postV2ActorTasksActorTaskIdRunsLastDatasetItemsRoute,
    postV2ActorTasksActorTaskIdRunsLastDatasetItemsRouteHandler,
  )
  .openapi(
    getV2ActorTasksActorTaskIdRunsLastDatasetStatisticsRoute,
    getV2ActorTasksActorTaskIdRunsLastDatasetStatisticsRouteHandler,
  )
  .openapi(
    getV2ActorTasksActorTaskIdRunsLastKeyValueStoreRoute,
    getV2ActorTasksActorTaskIdRunsLastKeyValueStoreRouteHandler,
  )
  .openapi(
    putV2ActorTasksActorTaskIdRunsLastKeyValueStoreRoute,
    putV2ActorTasksActorTaskIdRunsLastKeyValueStoreRouteHandler,
  )
  .openapi(
    deleteV2ActorTasksActorTaskIdRunsLastKeyValueStoreRoute,
    deleteV2ActorTasksActorTaskIdRunsLastKeyValueStoreRouteHandler,
  )
  .openapi(
    getV2ActorTasksActorTaskIdRunsLastKeyValueStoreKeysRoute,
    getV2ActorTasksActorTaskIdRunsLastKeyValueStoreKeysRouteHandler,
  )
  .openapi(
    getV2ActorTasksActorTaskIdRunsLastKeyValueStoreRecordsRoute,
    getV2ActorTasksActorTaskIdRunsLastKeyValueStoreRecordsRouteHandler,
  )
  .openapi(
    getV2ActorTasksActorTaskIdRunsLastKeyValueStoreRecordsRecordKeyRoute,
    getV2ActorTasksActorTaskIdRunsLastKeyValueStoreRecordsRecordKeyRouteHandler,
  )
  .openapi(
    putV2ActorTasksActorTaskIdRunsLastKeyValueStoreRecordsRecordKeyRoute,
    putV2ActorTasksActorTaskIdRunsLastKeyValueStoreRecordsRecordKeyRouteHandler,
  )
  .openapi(
    postV2ActorTasksActorTaskIdRunsLastKeyValueStoreRecordsRecordKeyRoute,
    postV2ActorTasksActorTaskIdRunsLastKeyValueStoreRecordsRecordKeyRouteHandler,
  )
  .openapi(
    deleteV2ActorTasksActorTaskIdRunsLastKeyValueStoreRecordsRecordKeyRoute,
    deleteV2ActorTasksActorTaskIdRunsLastKeyValueStoreRecordsRecordKeyRouteHandler,
  )
  .openapi(
    getV2ActorTasksActorTaskIdRunsLastRequestQueueRoute,
    getV2ActorTasksActorTaskIdRunsLastRequestQueueRouteHandler,
  )
  .openapi(
    putV2ActorTasksActorTaskIdRunsLastRequestQueueRoute,
    putV2ActorTasksActorTaskIdRunsLastRequestQueueRouteHandler,
  )
  .openapi(
    deleteV2ActorTasksActorTaskIdRunsLastRequestQueueRoute,
    deleteV2ActorTasksActorTaskIdRunsLastRequestQueueRouteHandler,
  )
  .openapi(
    getV2ActorTasksActorTaskIdRunsLastRequestQueueHeadRoute,
    getV2ActorTasksActorTaskIdRunsLastRequestQueueHeadRouteHandler,
  )
  .openapi(
    postV2ActorTasksActorTaskIdRunsLastRequestQueueHeadLockRoute,
    postV2ActorTasksActorTaskIdRunsLastRequestQueueHeadLockRouteHandler,
  )
  .openapi(
    getV2ActorTasksActorTaskIdRunsLastRequestQueueRequestsRoute,
    getV2ActorTasksActorTaskIdRunsLastRequestQueueRequestsRouteHandler,
  )
  .openapi(
    postV2ActorTasksActorTaskIdRunsLastRequestQueueRequestsRoute,
    postV2ActorTasksActorTaskIdRunsLastRequestQueueRequestsRouteHandler,
  )
  .openapi(
    postV2ActorTasksActorTaskIdRunsLastRequestQueueRequestsBatchRoute,
    postV2ActorTasksActorTaskIdRunsLastRequestQueueRequestsBatchRouteHandler,
  )
  .openapi(
    deleteV2ActorTasksActorTaskIdRunsLastRequestQueueRequestsBatchRoute,
    deleteV2ActorTasksActorTaskIdRunsLastRequestQueueRequestsBatchRouteHandler,
  )
  .openapi(
    postV2ActorTasksActorTaskIdRunsLastRequestQueueRequestsUnlockRoute,
    postV2ActorTasksActorTaskIdRunsLastRequestQueueRequestsUnlockRouteHandler,
  )
  .openapi(
    getV2ActorTasksActorTaskIdRunsLastRequestQueueRequestsRequestIdRoute,
    getV2ActorTasksActorTaskIdRunsLastRequestQueueRequestsRequestIdRouteHandler,
  )
  .openapi(
    putV2ActorTasksActorTaskIdRunsLastRequestQueueRequestsRequestIdRoute,
    putV2ActorTasksActorTaskIdRunsLastRequestQueueRequestsRequestIdRouteHandler,
  )
  .openapi(
    deleteV2ActorTasksActorTaskIdRunsLastRequestQueueRequestsRequestIdRoute,
    deleteV2ActorTasksActorTaskIdRunsLastRequestQueueRequestsRequestIdRouteHandler,
  )
  .openapi(
    putV2ActorTasksActorTaskIdRunsLastRequestQueueRequestsRequestIdLockRoute,
    putV2ActorTasksActorTaskIdRunsLastRequestQueueRequestsRequestIdLockRouteHandler,
  )
  .openapi(
    deleteV2ActorTasksActorTaskIdRunsLastRequestQueueRequestsRequestIdLockRoute,
    deleteV2ActorTasksActorTaskIdRunsLastRequestQueueRequestsRequestIdLockRouteHandler,
  )
  .openapi(getV2ActorRunsRoute, getV2ActorRunsRouteHandler)
  .openapi(getV2ActorRunsRunIdRoute, getV2ActorRunsRunIdRouteHandler)
  .openapi(putV2ActorRunsRunIdRoute, putV2ActorRunsRunIdRouteHandler)
  .openapi(deleteV2ActorRunsRunIdRoute, deleteV2ActorRunsRunIdRouteHandler)
  .openapi(postV2ActorRunsRunIdAbortRoute, postV2ActorRunsRunIdAbortRouteHandler)
  .openapi(postV2ActorRunsRunIdMetamorphRoute, postV2ActorRunsRunIdMetamorphRouteHandler)
  .openapi(postV2ActorRunsRunIdRebootRoute, postV2ActorRunsRunIdRebootRouteHandler)
  .openapi(postV2ActorRunsRunIdResurrectRoute, postV2ActorRunsRunIdResurrectRouteHandler)
  .openapi(postV2ActorRunsRunIdChargeRoute, postV2ActorRunsRunIdChargeRouteHandler)
  .openapi(getV2ActorRunsRunIdDatasetRoute, getV2ActorRunsRunIdDatasetRouteHandler)
  .openapi(putV2ActorRunsRunIdDatasetRoute, putV2ActorRunsRunIdDatasetRouteHandler)
  .openapi(deleteV2ActorRunsRunIdDatasetRoute, deleteV2ActorRunsRunIdDatasetRouteHandler)
  .openapi(getV2ActorRunsRunIdDatasetItemsRoute, getV2ActorRunsRunIdDatasetItemsRouteHandler)
  .openapi(postV2ActorRunsRunIdDatasetItemsRoute, postV2ActorRunsRunIdDatasetItemsRouteHandler)
  .openapi(
    getV2ActorRunsRunIdDatasetStatisticsRoute,
    getV2ActorRunsRunIdDatasetStatisticsRouteHandler,
  )
  .openapi(getV2ActorRunsRunIdKeyValueStoreRoute, getV2ActorRunsRunIdKeyValueStoreRouteHandler)
  .openapi(putV2ActorRunsRunIdKeyValueStoreRoute, putV2ActorRunsRunIdKeyValueStoreRouteHandler)
  .openapi(
    deleteV2ActorRunsRunIdKeyValueStoreRoute,
    deleteV2ActorRunsRunIdKeyValueStoreRouteHandler,
  )
  .openapi(
    getV2ActorRunsRunIdKeyValueStoreKeysRoute,
    getV2ActorRunsRunIdKeyValueStoreKeysRouteHandler,
  )
  .openapi(
    getV2ActorRunsRunIdKeyValueStoreRecordsRoute,
    getV2ActorRunsRunIdKeyValueStoreRecordsRouteHandler,
  )
  .openapi(
    getV2ActorRunsRunIdKeyValueStoreRecordsRecordKeyRoute,
    getV2ActorRunsRunIdKeyValueStoreRecordsRecordKeyRouteHandler,
  )
  .openapi(
    putV2ActorRunsRunIdKeyValueStoreRecordsRecordKeyRoute,
    putV2ActorRunsRunIdKeyValueStoreRecordsRecordKeyRouteHandler,
  )
  .openapi(
    postV2ActorRunsRunIdKeyValueStoreRecordsRecordKeyRoute,
    postV2ActorRunsRunIdKeyValueStoreRecordsRecordKeyRouteHandler,
  )
  .openapi(
    deleteV2ActorRunsRunIdKeyValueStoreRecordsRecordKeyRoute,
    deleteV2ActorRunsRunIdKeyValueStoreRecordsRecordKeyRouteHandler,
  )
  .openapi(getV2ActorRunsRunIdRequestQueueRoute, getV2ActorRunsRunIdRequestQueueRouteHandler)
  .openapi(putV2ActorRunsRunIdRequestQueueRoute, putV2ActorRunsRunIdRequestQueueRouteHandler)
  .openapi(deleteV2ActorRunsRunIdRequestQueueRoute, deleteV2ActorRunsRunIdRequestQueueRouteHandler)
  .openapi(
    getV2ActorRunsRunIdRequestQueueRequestsRoute,
    getV2ActorRunsRunIdRequestQueueRequestsRouteHandler,
  )
  .openapi(
    postV2ActorRunsRunIdRequestQueueRequestsRoute,
    postV2ActorRunsRunIdRequestQueueRequestsRouteHandler,
  )
  .openapi(
    postV2ActorRunsRunIdRequestQueueRequestsBatchRoute,
    postV2ActorRunsRunIdRequestQueueRequestsBatchRouteHandler,
  )
  .openapi(
    deleteV2ActorRunsRunIdRequestQueueRequestsBatchRoute,
    deleteV2ActorRunsRunIdRequestQueueRequestsBatchRouteHandler,
  )
  .openapi(
    postV2ActorRunsRunIdRequestQueueRequestsUnlockRoute,
    postV2ActorRunsRunIdRequestQueueRequestsUnlockRouteHandler,
  )
  .openapi(
    getV2ActorRunsRunIdRequestQueueRequestsRequestIdRoute,
    getV2ActorRunsRunIdRequestQueueRequestsRequestIdRouteHandler,
  )
  .openapi(
    putV2ActorRunsRunIdRequestQueueRequestsRequestIdRoute,
    putV2ActorRunsRunIdRequestQueueRequestsRequestIdRouteHandler,
  )
  .openapi(
    deleteV2ActorRunsRunIdRequestQueueRequestsRequestIdRoute,
    deleteV2ActorRunsRunIdRequestQueueRequestsRequestIdRouteHandler,
  )
  .openapi(
    putV2ActorRunsRunIdRequestQueueRequestsRequestIdLockRoute,
    putV2ActorRunsRunIdRequestQueueRequestsRequestIdLockRouteHandler,
  )
  .openapi(
    deleteV2ActorRunsRunIdRequestQueueRequestsRequestIdLockRoute,
    deleteV2ActorRunsRunIdRequestQueueRequestsRequestIdLockRouteHandler,
  )
  .openapi(
    getV2ActorRunsRunIdRequestQueueHeadRoute,
    getV2ActorRunsRunIdRequestQueueHeadRouteHandler,
  )
  .openapi(
    postV2ActorRunsRunIdRequestQueueHeadLockRoute,
    postV2ActorRunsRunIdRequestQueueHeadLockRouteHandler,
  )
  .openapi(getV2ActorRunsRunIdLogRoute, getV2ActorRunsRunIdLogRouteHandler)
  .openapi(getV2ActorBuildsRoute, getV2ActorBuildsRouteHandler)
  .openapi(getV2ActorBuildsBuildIdRoute, getV2ActorBuildsBuildIdRouteHandler)
  .openapi(deleteV2ActorBuildsBuildIdRoute, deleteV2ActorBuildsBuildIdRouteHandler)
  .openapi(postV2ActorBuildsBuildIdAbortRoute, postV2ActorBuildsBuildIdAbortRouteHandler)
  .openapi(getV2ActorBuildsBuildIdLogRoute, getV2ActorBuildsBuildIdLogRouteHandler)
  .openapi(getV2ActorBuildsBuildIdOpenapiJsonRoute, getV2ActorBuildsBuildIdOpenapiJsonRouteHandler)
  .openapi(
    getV2ActorOauthAccountsConnectionIdAccountsRoute,
    getV2ActorOauthAccountsConnectionIdAccountsRouteHandler,
  )
  .openapi(getV2ActorOauthAccountsAccountIdRoute, getV2ActorOauthAccountsAccountIdRouteHandler)
  .openapi(getV2KeyValueStoresRoute, getV2KeyValueStoresRouteHandler)
  .openapi(postV2KeyValueStoresRoute, postV2KeyValueStoresRouteHandler)
  .openapi(getV2KeyValueStoresStoreIdRoute, getV2KeyValueStoresStoreIdRouteHandler)
  .openapi(putV2KeyValueStoresStoreIdRoute, putV2KeyValueStoresStoreIdRouteHandler)
  .openapi(deleteV2KeyValueStoresStoreIdRoute, deleteV2KeyValueStoresStoreIdRouteHandler)
  .openapi(getV2KeyValueStoresStoreIdKeysRoute, getV2KeyValueStoresStoreIdKeysRouteHandler)
  .openapi(getV2KeyValueStoresStoreIdRecordsRoute, getV2KeyValueStoresStoreIdRecordsRouteHandler)
  .openapi(
    getV2KeyValueStoresStoreIdRecordsRecordKeyRoute,
    getV2KeyValueStoresStoreIdRecordsRecordKeyRouteHandler,
  )
  .openapi(
    headV2KeyValueStoresStoreIdRecordsRecordKeyRoute,
    headV2KeyValueStoresStoreIdRecordsRecordKeyRouteHandler,
  )
  .openapi(
    putV2KeyValueStoresStoreIdRecordsRecordKeyRoute,
    putV2KeyValueStoresStoreIdRecordsRecordKeyRouteHandler,
  )
  .openapi(
    postV2KeyValueStoresStoreIdRecordsRecordKeyRoute,
    postV2KeyValueStoresStoreIdRecordsRecordKeyRouteHandler,
  )
  .openapi(
    deleteV2KeyValueStoresStoreIdRecordsRecordKeyRoute,
    deleteV2KeyValueStoresStoreIdRecordsRecordKeyRouteHandler,
  )
  .openapi(getV2DatasetsRoute, getV2DatasetsRouteHandler)
  .openapi(postV2DatasetsRoute, postV2DatasetsRouteHandler)
  .openapi(getV2DatasetsDatasetIdRoute, getV2DatasetsDatasetIdRouteHandler)
  .openapi(putV2DatasetsDatasetIdRoute, putV2DatasetsDatasetIdRouteHandler)
  .openapi(deleteV2DatasetsDatasetIdRoute, deleteV2DatasetsDatasetIdRouteHandler)
  .openapi(getV2DatasetsDatasetIdItemsRoute, getV2DatasetsDatasetIdItemsRouteHandler)
  .openapi(headV2DatasetsDatasetIdItemsRoute, headV2DatasetsDatasetIdItemsRouteHandler)
  .openapi(postV2DatasetsDatasetIdItemsRoute, postV2DatasetsDatasetIdItemsRouteHandler)
  .openapi(getV2DatasetsDatasetIdStatisticsRoute, getV2DatasetsDatasetIdStatisticsRouteHandler)
  .openapi(getV2RequestQueuesRoute, getV2RequestQueuesRouteHandler)
  .openapi(postV2RequestQueuesRoute, postV2RequestQueuesRouteHandler)
  .openapi(getV2RequestQueuesQueueIdRoute, getV2RequestQueuesQueueIdRouteHandler)
  .openapi(putV2RequestQueuesQueueIdRoute, putV2RequestQueuesQueueIdRouteHandler)
  .openapi(deleteV2RequestQueuesQueueIdRoute, deleteV2RequestQueuesQueueIdRouteHandler)
  .openapi(
    postV2RequestQueuesQueueIdRequestsBatchRoute,
    postV2RequestQueuesQueueIdRequestsBatchRouteHandler,
  )
  .openapi(
    deleteV2RequestQueuesQueueIdRequestsBatchRoute,
    deleteV2RequestQueuesQueueIdRequestsBatchRouteHandler,
  )
  .openapi(
    postV2RequestQueuesQueueIdRequestsUnlockRoute,
    postV2RequestQueuesQueueIdRequestsUnlockRouteHandler,
  )
  .openapi(getV2RequestQueuesQueueIdRequestsRoute, getV2RequestQueuesQueueIdRequestsRouteHandler)
  .openapi(postV2RequestQueuesQueueIdRequestsRoute, postV2RequestQueuesQueueIdRequestsRouteHandler)
  .openapi(
    getV2RequestQueuesQueueIdRequestsRequestIdRoute,
    getV2RequestQueuesQueueIdRequestsRequestIdRouteHandler,
  )
  .openapi(
    putV2RequestQueuesQueueIdRequestsRequestIdRoute,
    putV2RequestQueuesQueueIdRequestsRequestIdRouteHandler,
  )
  .openapi(
    deleteV2RequestQueuesQueueIdRequestsRequestIdRoute,
    deleteV2RequestQueuesQueueIdRequestsRequestIdRouteHandler,
  )
  .openapi(getV2RequestQueuesQueueIdHeadRoute, getV2RequestQueuesQueueIdHeadRouteHandler)
  .openapi(postV2RequestQueuesQueueIdHeadLockRoute, postV2RequestQueuesQueueIdHeadLockRouteHandler)
  .openapi(
    putV2RequestQueuesQueueIdRequestsRequestIdLockRoute,
    putV2RequestQueuesQueueIdRequestsRequestIdLockRouteHandler,
  )
  .openapi(
    deleteV2RequestQueuesQueueIdRequestsRequestIdLockRoute,
    deleteV2RequestQueuesQueueIdRequestsRequestIdLockRouteHandler,
  )
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
  .openapi(getV2LogsBuildOrRunIdRoute, getV2LogsBuildOrRunIdRouteHandler)
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
  .openapi(getV2BrowserInfoRoute, getV2BrowserInfoRouteHandler)
  .openapi(postV2BrowserInfoRoute, postV2BrowserInfoRouteHandler)
  .openapi(putV2BrowserInfoRoute, putV2BrowserInfoRouteHandler)
  .openapi(deleteV2BrowserInfoRoute, deleteV2BrowserInfoRouteHandler)
  .openapi(postV2ToolsEncodeAndSignRoute, postV2ToolsEncodeAndSignRouteHandler)
  .openapi(postV2ToolsDecodeAndVerifyRoute, postV2ToolsDecodeAndVerifyRouteHandler)

export default app
