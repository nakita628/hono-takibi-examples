import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV2Actors(
  args: InferRequestType<typeof client.v2.actors.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.actors.$get(args, options))
}

export async function postV2Actors(
  args: InferRequestType<typeof client.v2.actors.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.actors.$post(args, options))
}

export async function getV2ActorsActorId(
  args: InferRequestType<(typeof client.v2.actors)[':actorId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.actors[':actorId'].$get(args, options))
}

export async function putV2ActorsActorId(
  args: InferRequestType<(typeof client.v2.actors)[':actorId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.actors[':actorId'].$put(args, options))
}

export async function deleteV2ActorsActorId(
  args: InferRequestType<(typeof client.v2.actors)[':actorId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.actors[':actorId'].$delete(args, options))
}

export async function getV2ActorsActorIdVersions(
  args: InferRequestType<(typeof client.v2.actors)[':actorId']['versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.actors[':actorId'].versions.$get(args, options))
}

export async function postV2ActorsActorIdVersions(
  args: InferRequestType<(typeof client.v2.actors)[':actorId']['versions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.actors[':actorId'].versions.$post(args, options))
}

export async function getV2ActorsActorIdVersionsVersionNumber(
  args: InferRequestType<
    (typeof client.v2.actors)[':actorId']['versions'][':versionNumber']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.actors[':actorId'].versions[':versionNumber'].$get(args, options),
  )
}

export async function deleteV2ActorsActorIdVersionsVersionNumber(
  args: InferRequestType<
    (typeof client.v2.actors)[':actorId']['versions'][':versionNumber']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.actors[':actorId'].versions[':versionNumber'].$delete(args, options),
  )
}

export async function putV2ActorsActorIdVersionsVersionNumberBuildOnPush(
  args: InferRequestType<
    (typeof client.v2.actors)[':actorId']['versions'][':versionNumber']['build-on-push']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.actors[':actorId'].versions[':versionNumber']['build-on-push'].$put(args, options),
  )
}

export async function getV2ActorsActorIdVersionsVersionNumberEnvVars(
  args: InferRequestType<
    (typeof client.v2.actors)[':actorId']['versions'][':versionNumber']['env-vars']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.actors[':actorId'].versions[':versionNumber']['env-vars'].$get(args, options),
  )
}

export async function postV2ActorsActorIdVersionsVersionNumberEnvVars(
  args: InferRequestType<
    (typeof client.v2.actors)[':actorId']['versions'][':versionNumber']['env-vars']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.actors[':actorId'].versions[':versionNumber']['env-vars'].$post(args, options),
  )
}

export async function getV2ActorsActorIdVersionsVersionNumberEnvVarsEnvVarName(
  args: InferRequestType<
    (typeof client.v2.actors)[':actorId']['versions'][':versionNumber']['env-vars'][':envVarName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.actors[':actorId'].versions[':versionNumber']['env-vars'][':envVarName'].$get(
      args,
      options,
    ),
  )
}

export async function deleteV2ActorsActorIdVersionsVersionNumberEnvVarsEnvVarName(
  args: InferRequestType<
    (typeof client.v2.actors)[':actorId']['versions'][':versionNumber']['env-vars'][':envVarName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.actors[':actorId'].versions[':versionNumber']['env-vars'][':envVarName'].$delete(
      args,
      options,
    ),
  )
}

export async function getV2ActorsActorIdWebhooks(
  args: InferRequestType<(typeof client.v2.actors)[':actorId']['webhooks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.actors[':actorId'].webhooks.$get(args, options))
}

export async function getV2ActorsActorIdOauthConnections(
  args: InferRequestType<(typeof client.v2.actors)[':actorId']['oauth-connections']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.actors[':actorId']['oauth-connections'].$get(args, options))
}

export async function getV2ActorsActorIdBuilds(
  args: InferRequestType<(typeof client.v2.actors)[':actorId']['builds']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.actors[':actorId'].builds.$get(args, options))
}

export async function postV2ActorsActorIdBuilds(
  args: InferRequestType<(typeof client.v2.actors)[':actorId']['builds']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.actors[':actorId'].builds.$post(args, options))
}

export async function getV2ActorsActorIdBuildsDefault(
  args: InferRequestType<(typeof client.v2.actors)[':actorId']['builds']['default']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.actors[':actorId'].builds.default.$get(args, options))
}

export async function getV2ActorsActorIdBuildsBuildIdOpenapiJson(
  args: InferRequestType<
    (typeof client.v2.actors)[':actorId']['builds'][':buildId']['openapi.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.actors[':actorId'].builds[':buildId']['openapi.json'].$get(args, options),
  )
}

export async function getV2ActorsActorIdBuildsBuildId(
  args: InferRequestType<(typeof client.v2.actors)[':actorId']['builds'][':buildId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.actors[':actorId'].builds[':buildId'].$get(args, options))
}

export async function postV2ActorsActorIdBuildsBuildIdAbort(
  args: InferRequestType<
    (typeof client.v2.actors)[':actorId']['builds'][':buildId']['abort']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.actors[':actorId'].builds[':buildId'].abort.$post(args, options),
  )
}

export async function getV2ActorsActorIdRuns(
  args: InferRequestType<(typeof client.v2.actors)[':actorId']['runs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.actors[':actorId'].runs.$get(args, options))
}

export async function postV2ActorsActorIdRuns(
  args: InferRequestType<(typeof client.v2.actors)[':actorId']['runs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.actors[':actorId'].runs.$post(args, options))
}

export async function getV2ActorsActorIdRunSync(
  args: InferRequestType<(typeof client.v2.actors)[':actorId']['run-sync']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.actors[':actorId']['run-sync'].$get(args, options))
}

export async function postV2ActorsActorIdRunSync(
  args: InferRequestType<(typeof client.v2.actors)[':actorId']['run-sync']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.actors[':actorId']['run-sync'].$post(args, options))
}

export async function getV2ActorsActorIdRunSyncGetDatasetItems(
  args: InferRequestType<
    (typeof client.v2.actors)[':actorId']['run-sync-get-dataset-items']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.actors[':actorId']['run-sync-get-dataset-items'].$get(args, options),
  )
}

export async function postV2ActorsActorIdRunSyncGetDatasetItems(
  args: InferRequestType<
    (typeof client.v2.actors)[':actorId']['run-sync-get-dataset-items']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.actors[':actorId']['run-sync-get-dataset-items'].$post(args, options),
  )
}

export async function postV2ActorsActorIdValidateInput(
  args: InferRequestType<(typeof client.v2.actors)[':actorId']['validate-input']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.actors[':actorId']['validate-input'].$post(args, options))
}

export async function getV2ActorsActorIdRunsLast(
  args: InferRequestType<(typeof client.v2.actors)[':actorId']['runs']['last']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.actors[':actorId'].runs.last.$get(args, options))
}

export async function getV2ActorsActorIdRunsRunId(
  args: InferRequestType<(typeof client.v2.actors)[':actorId']['runs'][':runId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.actors[':actorId'].runs[':runId'].$get(args, options))
}

export async function getV2ActorTasks(
  args: InferRequestType<(typeof client.v2)['actor-tasks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['actor-tasks'].$get(args, options))
}

export async function postV2ActorTasks(
  args: InferRequestType<(typeof client.v2)['actor-tasks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['actor-tasks'].$post(args, options))
}

export async function getV2ActorTasksActorTaskId(
  args: InferRequestType<(typeof client.v2)['actor-tasks'][':actorTaskId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['actor-tasks'][':actorTaskId'].$get(args, options))
}

export async function putV2ActorTasksActorTaskId(
  args: InferRequestType<(typeof client.v2)['actor-tasks'][':actorTaskId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['actor-tasks'][':actorTaskId'].$put(args, options))
}

export async function deleteV2ActorTasksActorTaskId(
  args: InferRequestType<(typeof client.v2)['actor-tasks'][':actorTaskId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['actor-tasks'][':actorTaskId'].$delete(args, options))
}

export async function getV2ActorTasksActorTaskIdInput(
  args: InferRequestType<(typeof client.v2)['actor-tasks'][':actorTaskId']['input']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['actor-tasks'][':actorTaskId'].input.$get(args, options))
}

export async function putV2ActorTasksActorTaskIdInput(
  args: InferRequestType<(typeof client.v2)['actor-tasks'][':actorTaskId']['input']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['actor-tasks'][':actorTaskId'].input.$put(args, options))
}

export async function getV2ActorTasksActorTaskIdWebhooks(
  args: InferRequestType<(typeof client.v2)['actor-tasks'][':actorTaskId']['webhooks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['actor-tasks'][':actorTaskId'].webhooks.$get(args, options))
}

export async function getV2ActorTasksActorTaskIdRuns(
  args: InferRequestType<(typeof client.v2)['actor-tasks'][':actorTaskId']['runs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['actor-tasks'][':actorTaskId'].runs.$get(args, options))
}

export async function postV2ActorTasksActorTaskIdRuns(
  args: InferRequestType<(typeof client.v2)['actor-tasks'][':actorTaskId']['runs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['actor-tasks'][':actorTaskId'].runs.$post(args, options))
}

export async function getV2ActorTasksActorTaskIdRunSync(
  args: InferRequestType<(typeof client.v2)['actor-tasks'][':actorTaskId']['run-sync']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['actor-tasks'][':actorTaskId']['run-sync'].$get(args, options),
  )
}

export async function postV2ActorTasksActorTaskIdRunSync(
  args: InferRequestType<(typeof client.v2)['actor-tasks'][':actorTaskId']['run-sync']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['actor-tasks'][':actorTaskId']['run-sync'].$post(args, options),
  )
}

export async function getV2ActorTasksActorTaskIdRunSyncGetDatasetItems(
  args: InferRequestType<
    (typeof client.v2)['actor-tasks'][':actorTaskId']['run-sync-get-dataset-items']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['actor-tasks'][':actorTaskId']['run-sync-get-dataset-items'].$get(args, options),
  )
}

export async function postV2ActorTasksActorTaskIdRunSyncGetDatasetItems(
  args: InferRequestType<
    (typeof client.v2)['actor-tasks'][':actorTaskId']['run-sync-get-dataset-items']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['actor-tasks'][':actorTaskId']['run-sync-get-dataset-items'].$post(args, options),
  )
}

export async function getV2ActorTasksActorTaskIdRunsLast(
  args: InferRequestType<(typeof client.v2)['actor-tasks'][':actorTaskId']['runs']['last']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['actor-tasks'][':actorTaskId'].runs.last.$get(args, options))
}

export async function getV2ActorRuns(
  args: InferRequestType<(typeof client.v2)['actor-runs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['actor-runs'].$get(args, options))
}

export async function getV2ActorRunsRunId(
  args: InferRequestType<(typeof client.v2)['actor-runs'][':runId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['actor-runs'][':runId'].$get(args, options))
}

export async function putV2ActorRunsRunId(
  args: InferRequestType<(typeof client.v2)['actor-runs'][':runId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['actor-runs'][':runId'].$put(args, options))
}

export async function deleteV2ActorRunsRunId(
  args: InferRequestType<(typeof client.v2)['actor-runs'][':runId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['actor-runs'][':runId'].$delete(args, options))
}

export async function postV2ActorRunsRunIdCharge(
  args: InferRequestType<(typeof client.v2)['actor-runs'][':runId']['charge']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['actor-runs'][':runId'].charge.$post(args, options))
}

export async function getV2ActorBuilds(
  args: InferRequestType<(typeof client.v2)['actor-builds']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['actor-builds'].$get(args, options))
}

export async function getV2ActorBuildsBuildId(
  args: InferRequestType<(typeof client.v2)['actor-builds'][':buildId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['actor-builds'][':buildId'].$get(args, options))
}

export async function deleteV2ActorBuildsBuildId(
  args: InferRequestType<(typeof client.v2)['actor-builds'][':buildId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['actor-builds'][':buildId'].$delete(args, options))
}

export async function postV2ActorBuildsBuildIdAbort(
  args: InferRequestType<(typeof client.v2)['actor-builds'][':buildId']['abort']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['actor-builds'][':buildId'].abort.$post(args, options))
}

export async function getV2ActorBuildsBuildIdOpenapiJson(
  args: InferRequestType<(typeof client.v2)['actor-builds'][':buildId']['openapi.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['actor-builds'][':buildId']['openapi.json'].$get(args, options),
  )
}

export async function getV2ActorOauthAccountsConnectionIdAccounts(
  args: InferRequestType<
    (typeof client.v2)['actor-oauth-accounts'][':connectionId']['accounts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['actor-oauth-accounts'][':connectionId'].accounts.$get(args, options),
  )
}

export async function getV2ActorOauthAccountsAccountId(
  args: InferRequestType<(typeof client.v2)['actor-oauth-accounts'][':accountId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['actor-oauth-accounts'][':accountId'].$get(args, options))
}

export async function getV2KeyValueStores(
  args: InferRequestType<(typeof client.v2)['key-value-stores']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['key-value-stores'].$get(args, options))
}

export async function postV2KeyValueStores(
  args: InferRequestType<(typeof client.v2)['key-value-stores']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['key-value-stores'].$post(args, options))
}

export async function headV2KeyValueStoresStoreIdRecordsRecordKey(
  args: InferRequestType<
    (typeof client.v2)['key-value-stores'][':storeId']['records'][':recordKey']['$head']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['key-value-stores'][':storeId'].records[':recordKey'].$head(args, options),
  )
}

export async function getV2Datasets(
  args: InferRequestType<typeof client.v2.datasets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.datasets.$get(args, options))
}

export async function postV2Datasets(
  args: InferRequestType<typeof client.v2.datasets.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.datasets.$post(args, options))
}

export async function headV2DatasetsDatasetIdItems(
  args: InferRequestType<(typeof client.v2.datasets)[':datasetId']['items']['$head']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.datasets[':datasetId'].items.$head(args, options))
}

export async function getV2RequestQueues(
  args: InferRequestType<(typeof client.v2)['request-queues']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['request-queues'].$get(args, options))
}

export async function postV2RequestQueues(
  args: InferRequestType<(typeof client.v2)['request-queues']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['request-queues'].$post(args, options))
}

export async function getV2Webhooks(
  args: InferRequestType<typeof client.v2.webhooks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.webhooks.$get(args, options))
}

export async function postV2Webhooks(
  args: InferRequestType<typeof client.v2.webhooks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.webhooks.$post(args, options))
}

export async function getV2WebhooksWebhookId(
  args: InferRequestType<(typeof client.v2.webhooks)[':webhookId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.webhooks[':webhookId'].$get(args, options))
}

export async function putV2WebhooksWebhookId(
  args: InferRequestType<(typeof client.v2.webhooks)[':webhookId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.webhooks[':webhookId'].$put(args, options))
}

export async function deleteV2WebhooksWebhookId(
  args: InferRequestType<(typeof client.v2.webhooks)[':webhookId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.webhooks[':webhookId'].$delete(args, options))
}

export async function postV2WebhooksWebhookIdTest(
  args: InferRequestType<(typeof client.v2.webhooks)[':webhookId']['test']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.webhooks[':webhookId'].test.$post(args, options))
}

export async function getV2WebhooksWebhookIdDispatches(
  args: InferRequestType<(typeof client.v2.webhooks)[':webhookId']['dispatches']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.webhooks[':webhookId'].dispatches.$get(args, options))
}

export async function getV2WebhookDispatches(
  args: InferRequestType<(typeof client.v2)['webhook-dispatches']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['webhook-dispatches'].$get(args, options))
}

export async function getV2WebhookDispatchesDispatchId(
  args: InferRequestType<(typeof client.v2)['webhook-dispatches'][':dispatchId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['webhook-dispatches'][':dispatchId'].$get(args, options))
}

export async function getV2Schedules(
  args: InferRequestType<typeof client.v2.schedules.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.schedules.$get(args, options))
}

export async function postV2Schedules(
  args: InferRequestType<typeof client.v2.schedules.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.schedules.$post(args, options))
}

export async function getV2SchedulesScheduleId(
  args: InferRequestType<(typeof client.v2.schedules)[':scheduleId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.schedules[':scheduleId'].$get(args, options))
}

export async function putV2SchedulesScheduleId(
  args: InferRequestType<(typeof client.v2.schedules)[':scheduleId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.schedules[':scheduleId'].$put(args, options))
}

export async function deleteV2SchedulesScheduleId(
  args: InferRequestType<(typeof client.v2.schedules)[':scheduleId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.schedules[':scheduleId'].$delete(args, options))
}

export async function postV2SchedulesScheduleIdInvoke(
  args: InferRequestType<(typeof client.v2.schedules)[':scheduleId']['invoke']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.schedules[':scheduleId'].invoke.$post(args, options))
}

export async function getV2SchedulesScheduleIdLog(
  args: InferRequestType<(typeof client.v2.schedules)[':scheduleId']['log']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.schedules[':scheduleId'].log.$get(args, options))
}

export async function getV2Store(
  args: InferRequestType<typeof client.v2.store.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.store.$get(args, options))
}

export async function getV2UsersUserId(
  args: InferRequestType<(typeof client.v2.users)[':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.users[':userId'].$get(args, options))
}

export async function getV2UsersMe(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.users.me.$get(undefined, options))
}

export async function getV2UsersMeUsageMonthly(
  args: InferRequestType<typeof client.v2.users.me.usage.monthly.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.users.me.usage.monthly.$get(args, options))
}

export async function getV2UsersMeLimits(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.users.me.limits.$get(undefined, options))
}

export async function putV2UsersMeLimits(
  args: InferRequestType<typeof client.v2.users.me.limits.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.users.me.limits.$put(args, options))
}

export async function getV2UsersUserIdUsageMonthly(
  args: InferRequestType<(typeof client.v2.users)[':userId']['usage']['monthly']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.users[':userId'].usage.monthly.$get(args, options))
}

export async function getV2UsersUserIdLimits(
  args: InferRequestType<(typeof client.v2.users)[':userId']['limits']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.users[':userId'].limits.$get(args, options))
}

export async function putV2UsersUserIdLimits(
  args: InferRequestType<(typeof client.v2.users)[':userId']['limits']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.users[':userId'].limits.$put(args, options))
}

export async function getV2IntegrationsGit(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.integrations.git.$get(undefined, options))
}

export async function postV2IntegrationsGitProviderIdCreateRepo(
  args: InferRequestType<
    (typeof client.v2.integrations.git)[':providerId']['create-repo']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.integrations.git[':providerId']['create-repo'].$post(args, options),
  )
}

export async function postV2IntegrationsGitProviderIdRegisterDeploymentKey(
  args: InferRequestType<
    (typeof client.v2.integrations.git)[':providerId']['register-deployment-key']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.integrations.git[':providerId']['register-deployment-key'].$post(args, options),
  )
}

export async function postV2ToolsEncodeAndSign(
  args: InferRequestType<(typeof client.v2.tools)['encode-and-sign']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.tools['encode-and-sign'].$post(args, options))
}

export async function postV2ToolsDecodeAndVerify(
  args: InferRequestType<(typeof client.v2.tools)['decode-and-verify']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.tools['decode-and-verify'].$post(args, options))
}
