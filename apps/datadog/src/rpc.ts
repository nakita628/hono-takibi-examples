import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiUnstableFleetAgentsAgentKeyTracers(
  args: InferRequestType<
    (typeof client.api.unstable.fleet.agents)[':agent_key']['tracers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.unstable.fleet.agents[':agent_key'].tracers.$get(args, options),
  )
}

export async function postApiUnstableFleetSchedules(
  args: InferRequestType<typeof client.api.unstable.fleet.schedules.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.unstable.fleet.schedules.$post(args, options))
}

export async function deleteApiUnstableFleetSchedulesId(
  args: InferRequestType<(typeof client.api.unstable.fleet.schedules)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.unstable.fleet.schedules[':id'].$delete(args, options))
}

export async function patchApiUnstableFleetSchedulesId(
  args: InferRequestType<(typeof client.api.unstable.fleet.schedules)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.unstable.fleet.schedules[':id'].$patch(args, options))
}

export async function postApiUnstableFleetSchedulesIdTrigger(
  args: InferRequestType<(typeof client.api.unstable.fleet.schedules)[':id']['trigger']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.unstable.fleet.schedules[':id'].trigger.$post(args, options),
  )
}

export async function getApiUnstableFleetTracers(
  args: InferRequestType<typeof client.api.unstable.fleet.tracers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.unstable.fleet.tracers.$get(args, options))
}

export async function getApiUnstableLlmObsConfigEvaluatorsCustom(options?: ClientRequestOptions) {
  return await parseResponse(
    client.api.unstable['llm-obs'].config.evaluators.custom.$get(undefined, options),
  )
}

export async function getApiUnstableLlmObsConfigEvaluatorsCustomEvalName(
  args: InferRequestType<
    (typeof client.api.unstable)['llm-obs']['config']['evaluators']['custom'][':eval_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.unstable['llm-obs'].config.evaluators.custom[':eval_name'].$get(args, options),
  )
}

export async function putApiUnstableLlmObsConfigEvaluatorsCustomEvalName(
  args: InferRequestType<
    (typeof client.api.unstable)['llm-obs']['config']['evaluators']['custom'][':eval_name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.unstable['llm-obs'].config.evaluators.custom[':eval_name'].$put(args, options),
  )
}

export async function deleteApiUnstableLlmObsConfigEvaluatorsCustomEvalName(
  args: InferRequestType<
    (typeof client.api.unstable)['llm-obs']['config']['evaluators']['custom'][':eval_name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.unstable['llm-obs'].config.evaluators.custom[':eval_name'].$delete(args, options),
  )
}

export async function getApiV2ActionsDatastores(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2['actions-datastores'].$get(undefined, options))
}

export async function postApiV2ActionsDatastores(
  args: InferRequestType<(typeof client.api.v2)['actions-datastores']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['actions-datastores'].$post(args, options))
}

export async function getApiV2ActionsDatastoresDatastoreId(
  args: InferRequestType<(typeof client.api.v2)['actions-datastores'][':datastore_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['actions-datastores'][':datastore_id'].$get(args, options),
  )
}

export async function deleteApiV2ActionsDatastoresDatastoreId(
  args: InferRequestType<(typeof client.api.v2)['actions-datastores'][':datastore_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['actions-datastores'][':datastore_id'].$delete(args, options),
  )
}

export async function patchApiV2ActionsDatastoresDatastoreId(
  args: InferRequestType<(typeof client.api.v2)['actions-datastores'][':datastore_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['actions-datastores'][':datastore_id'].$patch(args, options),
  )
}

export async function getApiV2ActionsDatastoresDatastoreIdItems(
  args: InferRequestType<
    (typeof client.api.v2)['actions-datastores'][':datastore_id']['items']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['actions-datastores'][':datastore_id'].items.$get(args, options),
  )
}

export async function deleteApiV2ActionsDatastoresDatastoreIdItems(
  args: InferRequestType<
    (typeof client.api.v2)['actions-datastores'][':datastore_id']['items']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['actions-datastores'][':datastore_id'].items.$delete(args, options),
  )
}

export async function patchApiV2ActionsDatastoresDatastoreIdItems(
  args: InferRequestType<
    (typeof client.api.v2)['actions-datastores'][':datastore_id']['items']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['actions-datastores'][':datastore_id'].items.$patch(args, options),
  )
}

export async function postApiV2ActionsDatastoresDatastoreIdItemsBulk(
  args: InferRequestType<
    (typeof client.api.v2)['actions-datastores'][':datastore_id']['items']['bulk']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['actions-datastores'][':datastore_id'].items.bulk.$post(args, options),
  )
}

export async function deleteApiV2ActionsDatastoresDatastoreIdItemsBulk(
  args: InferRequestType<
    (typeof client.api.v2)['actions-datastores'][':datastore_id']['items']['bulk']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['actions-datastores'][':datastore_id'].items.bulk.$delete(args, options),
  )
}

export async function getApiV2ActionsAppKeyRegistrations(
  args: InferRequestType<typeof client.api.v2.actions.app_key_registrations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.actions.app_key_registrations.$get(args, options))
}

export async function getApiV2ActionsAppKeyRegistrationsAppKeyId(
  args: InferRequestType<
    (typeof client.api.v2.actions.app_key_registrations)[':app_key_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.actions.app_key_registrations[':app_key_id'].$get(args, options),
  )
}

export async function putApiV2ActionsAppKeyRegistrationsAppKeyId(
  args: InferRequestType<
    (typeof client.api.v2.actions.app_key_registrations)[':app_key_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.actions.app_key_registrations[':app_key_id'].$put(args, options),
  )
}

export async function deleteApiV2ActionsAppKeyRegistrationsAppKeyId(
  args: InferRequestType<
    (typeof client.api.v2.actions.app_key_registrations)[':app_key_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.actions.app_key_registrations[':app_key_id'].$delete(args, options),
  )
}

export async function postApiV2ActionsConnections(
  args: InferRequestType<typeof client.api.v2.actions.connections.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.actions.connections.$post(args, options))
}

export async function getApiV2ActionsConnectionsConnectionId(
  args: InferRequestType<(typeof client.api.v2.actions.connections)[':connection_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.actions.connections[':connection_id'].$get(args, options),
  )
}

export async function deleteApiV2ActionsConnectionsConnectionId(
  args: InferRequestType<(typeof client.api.v2.actions.connections)[':connection_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.actions.connections[':connection_id'].$delete(args, options),
  )
}

export async function patchApiV2ActionsConnectionsConnectionId(
  args: InferRequestType<(typeof client.api.v2.actions.connections)[':connection_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.actions.connections[':connection_id'].$patch(args, options),
  )
}

export async function getApiV2ActionsExecutionPolicies(
  args: InferRequestType<(typeof client.api.v2.actions)['execution-policies']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.actions['execution-policies'].$get(args, options))
}

export async function postApiV2ActionsExecutionPolicies(
  args: InferRequestType<(typeof client.api.v2.actions)['execution-policies']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.actions['execution-policies'].$post(args, options))
}

export async function getApiV2ActionsExecutionPoliciesPolicyId(
  args: InferRequestType<
    (typeof client.api.v2.actions)['execution-policies'][':policy_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.actions['execution-policies'][':policy_id'].$get(args, options),
  )
}

export async function putApiV2ActionsExecutionPoliciesPolicyId(
  args: InferRequestType<
    (typeof client.api.v2.actions)['execution-policies'][':policy_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.actions['execution-policies'][':policy_id'].$put(args, options),
  )
}

export async function deleteApiV2ActionsExecutionPoliciesPolicyId(
  args: InferRequestType<
    (typeof client.api.v2.actions)['execution-policies'][':policy_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.actions['execution-policies'][':policy_id'].$delete(args, options),
  )
}

export async function getApiV2AgenthealthHostsResourceIdIssues(
  args: InferRequestType<
    (typeof client.api.v2.agenthealth.hosts)[':resource_id']['issues']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.agenthealth.hosts[':resource_id'].issues.$get(args, options),
  )
}

export async function getApiV2AgenthealthIssues(
  args: InferRequestType<typeof client.api.v2.agenthealth.issues.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.agenthealth.issues.$get(args, options))
}

export async function getApiV2AgenthealthIssuesIssueId(
  args: InferRequestType<(typeof client.api.v2.agenthealth.issues)[':issue_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.agenthealth.issues[':issue_id'].$get(args, options))
}

export async function getApiV2AgentlessScanningAccountsAws(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.agentless_scanning.accounts.aws.$get(undefined, options))
}

export async function postApiV2AgentlessScanningAccountsAws(
  args: InferRequestType<typeof client.api.v2.agentless_scanning.accounts.aws.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.agentless_scanning.accounts.aws.$post(args, options))
}

export async function getApiV2AgentlessScanningAccountsAwsAccountId(
  args: InferRequestType<
    (typeof client.api.v2.agentless_scanning.accounts.aws)[':account_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.agentless_scanning.accounts.aws[':account_id'].$get(args, options),
  )
}

export async function deleteApiV2AgentlessScanningAccountsAwsAccountId(
  args: InferRequestType<
    (typeof client.api.v2.agentless_scanning.accounts.aws)[':account_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.agentless_scanning.accounts.aws[':account_id'].$delete(args, options),
  )
}

export async function patchApiV2AgentlessScanningAccountsAwsAccountId(
  args: InferRequestType<
    (typeof client.api.v2.agentless_scanning.accounts.aws)[':account_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.agentless_scanning.accounts.aws[':account_id'].$patch(args, options),
  )
}

export async function getApiV2AgentlessScanningAccountsAzure(options?: ClientRequestOptions) {
  return await parseResponse(
    client.api.v2.agentless_scanning.accounts.azure.$get(undefined, options),
  )
}

export async function postApiV2AgentlessScanningAccountsAzure(
  args: InferRequestType<typeof client.api.v2.agentless_scanning.accounts.azure.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.agentless_scanning.accounts.azure.$post(args, options))
}

export async function getApiV2AgentlessScanningAccountsAzureSubscriptionId(
  args: InferRequestType<
    (typeof client.api.v2.agentless_scanning.accounts.azure)[':subscription_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.agentless_scanning.accounts.azure[':subscription_id'].$get(args, options),
  )
}

export async function deleteApiV2AgentlessScanningAccountsAzureSubscriptionId(
  args: InferRequestType<
    (typeof client.api.v2.agentless_scanning.accounts.azure)[':subscription_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.agentless_scanning.accounts.azure[':subscription_id'].$delete(args, options),
  )
}

export async function patchApiV2AgentlessScanningAccountsAzureSubscriptionId(
  args: InferRequestType<
    (typeof client.api.v2.agentless_scanning.accounts.azure)[':subscription_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.agentless_scanning.accounts.azure[':subscription_id'].$patch(args, options),
  )
}

export async function getApiV2AgentlessScanningAccountsGcp(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.agentless_scanning.accounts.gcp.$get(undefined, options))
}

export async function postApiV2AgentlessScanningAccountsGcp(
  args: InferRequestType<typeof client.api.v2.agentless_scanning.accounts.gcp.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.agentless_scanning.accounts.gcp.$post(args, options))
}

export async function getApiV2AgentlessScanningAccountsGcpProjectId(
  args: InferRequestType<
    (typeof client.api.v2.agentless_scanning.accounts.gcp)[':project_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.agentless_scanning.accounts.gcp[':project_id'].$get(args, options),
  )
}

export async function deleteApiV2AgentlessScanningAccountsGcpProjectId(
  args: InferRequestType<
    (typeof client.api.v2.agentless_scanning.accounts.gcp)[':project_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.agentless_scanning.accounts.gcp[':project_id'].$delete(args, options),
  )
}

export async function patchApiV2AgentlessScanningAccountsGcpProjectId(
  args: InferRequestType<
    (typeof client.api.v2.agentless_scanning.accounts.gcp)[':project_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.agentless_scanning.accounts.gcp[':project_id'].$patch(args, options),
  )
}

export async function getApiV2AgentlessScanningOndemandAws(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.agentless_scanning.ondemand.aws.$get(undefined, options))
}

export async function postApiV2AgentlessScanningOndemandAws(
  args: InferRequestType<typeof client.api.v2.agentless_scanning.ondemand.aws.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.agentless_scanning.ondemand.aws.$post(args, options))
}

export async function getApiV2AgentlessScanningOndemandAwsTaskId(
  args: InferRequestType<
    (typeof client.api.v2.agentless_scanning.ondemand.aws)[':task_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.agentless_scanning.ondemand.aws[':task_id'].$get(args, options),
  )
}

export async function postApiV2AiGuardEvaluate(
  args: InferRequestType<(typeof client.api.v2)['ai-guard']['evaluate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['ai-guard'].evaluate.$post(args, options))
}

export async function postApiV2AiImpactUserActivity(
  args: InferRequestType<typeof client.api.v2.ai_impact.user_activity.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.ai_impact.user_activity.$post(args, options))
}

export async function getApiV2Annotation(
  args: InferRequestType<typeof client.api.v2.annotation.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.annotation.$get(args, options))
}

export async function postApiV2Annotation(
  args: InferRequestType<typeof client.api.v2.annotation.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.annotation.$post(args, options))
}

export async function getApiV2AnnotationPagePageId(
  args: InferRequestType<(typeof client.api.v2.annotation.page)[':page_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.annotation.page[':page_id'].$get(args, options))
}

export async function putApiV2AnnotationAnnotationId(
  args: InferRequestType<(typeof client.api.v2.annotation)[':annotation_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.annotation[':annotation_id'].$put(args, options))
}

export async function deleteApiV2AnnotationAnnotationId(
  args: InferRequestType<(typeof client.api.v2.annotation)[':annotation_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.annotation[':annotation_id'].$delete(args, options))
}

export async function putApiV2AnonymizeUsers(
  args: InferRequestType<typeof client.api.v2.anonymize_users.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.anonymize_users.$put(args, options))
}

export async function getApiV2ApiKeys(
  args: InferRequestType<typeof client.api.v2.api_keys.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.api_keys.$get(args, options))
}

export async function postApiV2ApiKeys(
  args: InferRequestType<typeof client.api.v2.api_keys.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.api_keys.$post(args, options))
}

export async function getApiV2ApiKeysApiKeyId(
  args: InferRequestType<(typeof client.api.v2.api_keys)[':api_key_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.api_keys[':api_key_id'].$get(args, options))
}

export async function deleteApiV2ApiKeysApiKeyId(
  args: InferRequestType<(typeof client.api.v2.api_keys)[':api_key_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.api_keys[':api_key_id'].$delete(args, options))
}

export async function patchApiV2ApiKeysApiKeyId(
  args: InferRequestType<(typeof client.api.v2.api_keys)[':api_key_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.api_keys[':api_key_id'].$patch(args, options))
}

export async function getApiV2ApicatalogApi(
  args: InferRequestType<typeof client.api.v2.apicatalog.api.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.apicatalog.api.$get(args, options))
}

export async function deleteApiV2ApicatalogApiId(
  args: InferRequestType<(typeof client.api.v2.apicatalog.api)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.apicatalog.api[':id'].$delete(args, options))
}

export async function getApiV2ApicatalogApiIdOpenapi(
  args: InferRequestType<(typeof client.api.v2.apicatalog.api)[':id']['openapi']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.apicatalog.api[':id'].openapi.$get(args, options))
}

export async function putApiV2ApicatalogApiIdOpenapi(
  args: InferRequestType<(typeof client.api.v2.apicatalog.api)[':id']['openapi']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.apicatalog.api[':id'].openapi.$put(args, options))
}

export async function postApiV2ApicatalogOpenapi(
  args: InferRequestType<typeof client.api.v2.apicatalog.openapi.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.apicatalog.openapi.$post(args, options))
}

export async function getApiV2ApmConfigMetrics(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.apm.config.metrics.$get(undefined, options))
}

export async function postApiV2ApmConfigMetrics(
  args: InferRequestType<typeof client.api.v2.apm.config.metrics.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.apm.config.metrics.$post(args, options))
}

export async function getApiV2ApmConfigMetricsMetricId(
  args: InferRequestType<(typeof client.api.v2.apm.config.metrics)[':metric_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.apm.config.metrics[':metric_id'].$get(args, options))
}

export async function deleteApiV2ApmConfigMetricsMetricId(
  args: InferRequestType<(typeof client.api.v2.apm.config.metrics)[':metric_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.apm.config.metrics[':metric_id'].$delete(args, options))
}

export async function patchApiV2ApmConfigMetricsMetricId(
  args: InferRequestType<(typeof client.api.v2.apm.config.metrics)[':metric_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.apm.config.metrics[':metric_id'].$patch(args, options))
}

export async function getApiV2ApmConfigRetentionFilters(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.apm.config['retention-filters'].$get(undefined, options))
}

export async function postApiV2ApmConfigRetentionFilters(
  args: InferRequestType<(typeof client.api.v2.apm.config)['retention-filters']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.apm.config['retention-filters'].$post(args, options))
}

export async function putApiV2ApmConfigRetentionFiltersExecutionOrder(
  args: InferRequestType<
    (typeof client.api.v2.apm.config)['retention-filters-execution-order']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.apm.config['retention-filters-execution-order'].$put(args, options),
  )
}

export async function getApiV2ApmConfigRetentionFiltersFilterId(
  args: InferRequestType<
    (typeof client.api.v2.apm.config)['retention-filters'][':filter_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.apm.config['retention-filters'][':filter_id'].$get(args, options),
  )
}

export async function putApiV2ApmConfigRetentionFiltersFilterId(
  args: InferRequestType<
    (typeof client.api.v2.apm.config)['retention-filters'][':filter_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.apm.config['retention-filters'][':filter_id'].$put(args, options),
  )
}

export async function deleteApiV2ApmConfigRetentionFiltersFilterId(
  args: InferRequestType<
    (typeof client.api.v2.apm.config)['retention-filters'][':filter_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.apm.config['retention-filters'][':filter_id'].$delete(args, options),
  )
}

export async function getApiV2ApmServices(
  args: InferRequestType<typeof client.api.v2.apm.services.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.apm.services.$get(args, options))
}

export async function getApiV2AppBuilderApps(
  args: InferRequestType<(typeof client.api.v2)['app-builder']['apps']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['app-builder'].apps.$get(args, options))
}

export async function postApiV2AppBuilderApps(
  args: InferRequestType<(typeof client.api.v2)['app-builder']['apps']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['app-builder'].apps.$post(args, options))
}

export async function deleteApiV2AppBuilderApps(
  args: InferRequestType<(typeof client.api.v2)['app-builder']['apps']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['app-builder'].apps.$delete(args, options))
}

export async function getApiV2AppBuilderAppsAppId(
  args: InferRequestType<(typeof client.api.v2)['app-builder']['apps'][':app_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['app-builder'].apps[':app_id'].$get(args, options))
}

export async function deleteApiV2AppBuilderAppsAppId(
  args: InferRequestType<(typeof client.api.v2)['app-builder']['apps'][':app_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['app-builder'].apps[':app_id'].$delete(args, options))
}

export async function patchApiV2AppBuilderAppsAppId(
  args: InferRequestType<(typeof client.api.v2)['app-builder']['apps'][':app_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['app-builder'].apps[':app_id'].$patch(args, options))
}

export async function postApiV2AppBuilderAppsAppIdDeployment(
  args: InferRequestType<
    (typeof client.api.v2)['app-builder']['apps'][':app_id']['deployment']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['app-builder'].apps[':app_id'].deployment.$post(args, options),
  )
}

export async function deleteApiV2AppBuilderAppsAppIdDeployment(
  args: InferRequestType<
    (typeof client.api.v2)['app-builder']['apps'][':app_id']['deployment']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['app-builder'].apps[':app_id'].deployment.$delete(args, options),
  )
}

export async function patchApiV2AppBuilderAppsAppIdFavorite(
  args: InferRequestType<
    (typeof client.api.v2)['app-builder']['apps'][':app_id']['favorite']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['app-builder'].apps[':app_id'].favorite.$patch(args, options),
  )
}

export async function patchApiV2AppBuilderAppsAppIdProtectionLevel(
  args: InferRequestType<
    (typeof client.api.v2)['app-builder']['apps'][':app_id']['protection-level']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['app-builder'].apps[':app_id']['protection-level'].$patch(args, options),
  )
}

export async function postApiV2AppBuilderAppsAppIdPublishRequest(
  args: InferRequestType<
    (typeof client.api.v2)['app-builder']['apps'][':app_id']['publish-request']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['app-builder'].apps[':app_id']['publish-request'].$post(args, options),
  )
}

export async function postApiV2AppBuilderAppsAppIdRevert(
  args: InferRequestType<
    (typeof client.api.v2)['app-builder']['apps'][':app_id']['revert']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['app-builder'].apps[':app_id'].revert.$post(args, options),
  )
}

export async function patchApiV2AppBuilderAppsAppIdSelfService(
  args: InferRequestType<
    (typeof client.api.v2)['app-builder']['apps'][':app_id']['self-service']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['app-builder'].apps[':app_id']['self-service'].$patch(args, options),
  )
}

export async function patchApiV2AppBuilderAppsAppIdTags(
  args: InferRequestType<
    (typeof client.api.v2)['app-builder']['apps'][':app_id']['tags']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['app-builder'].apps[':app_id'].tags.$patch(args, options),
  )
}

export async function patchApiV2AppBuilderAppsAppIdVersionName(
  args: InferRequestType<
    (typeof client.api.v2)['app-builder']['apps'][':app_id']['version-name']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['app-builder'].apps[':app_id']['version-name'].$patch(args, options),
  )
}

export async function getApiV2AppBuilderAppsAppIdVersions(
  args: InferRequestType<
    (typeof client.api.v2)['app-builder']['apps'][':app_id']['versions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['app-builder'].apps[':app_id'].versions.$get(args, options),
  )
}

export async function getApiV2AppBuilderBlueprintBlueprintId(
  args: InferRequestType<
    (typeof client.api.v2)['app-builder']['blueprint'][':blueprint_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['app-builder'].blueprint[':blueprint_id'].$get(args, options),
  )
}

export async function getApiV2AppBuilderBlueprints(
  args: InferRequestType<(typeof client.api.v2)['app-builder']['blueprints']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['app-builder'].blueprints.$get(args, options))
}

export async function getApiV2AppBuilderBlueprintsIntegrationIdIntegrationId(
  args: InferRequestType<
    (typeof client.api.v2)['app-builder']['blueprints']['integration-id'][':integration_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['app-builder'].blueprints['integration-id'][':integration_id'].$get(
      args,
      options,
    ),
  )
}

export async function getApiV2AppBuilderBlueprintsSlugsSlugs(
  args: InferRequestType<
    (typeof client.api.v2)['app-builder']['blueprints']['slugs'][':slugs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['app-builder'].blueprints.slugs[':slugs'].$get(args, options),
  )
}

export async function getApiV2AppBuilderTags(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2['app-builder'].tags.$get(undefined, options))
}

export async function getApiV2ApplicationKeys(
  args: InferRequestType<typeof client.api.v2.application_keys.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.application_keys.$get(args, options))
}

export async function getApiV2ApplicationKeysAppKeyId(
  args: InferRequestType<(typeof client.api.v2.application_keys)[':app_key_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.application_keys[':app_key_id'].$get(args, options))
}

export async function deleteApiV2ApplicationKeysAppKeyId(
  args: InferRequestType<(typeof client.api.v2.application_keys)[':app_key_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.application_keys[':app_key_id'].$delete(args, options))
}

export async function patchApiV2ApplicationKeysAppKeyId(
  args: InferRequestType<(typeof client.api.v2.application_keys)[':app_key_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.application_keys[':app_key_id'].$patch(args, options))
}

export async function getApiV2AuditEvents(
  args: InferRequestType<typeof client.api.v2.audit.events.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.audit.events.$get(args, options))
}

export async function postApiV2AuditEventsSearch(
  args: InferRequestType<typeof client.api.v2.audit.events.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.audit.events.search.$post(args, options))
}

export async function getApiV2AuthnMappings(
  args: InferRequestType<typeof client.api.v2.authn_mappings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.authn_mappings.$get(args, options))
}

export async function postApiV2AuthnMappings(
  args: InferRequestType<typeof client.api.v2.authn_mappings.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.authn_mappings.$post(args, options))
}

export async function getApiV2AuthnMappingsAuthnMappingId(
  args: InferRequestType<(typeof client.api.v2.authn_mappings)[':authn_mapping_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.authn_mappings[':authn_mapping_id'].$get(args, options))
}

export async function deleteApiV2AuthnMappingsAuthnMappingId(
  args: InferRequestType<(typeof client.api.v2.authn_mappings)[':authn_mapping_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.authn_mappings[':authn_mapping_id'].$delete(args, options),
  )
}

export async function patchApiV2AuthnMappingsAuthnMappingId(
  args: InferRequestType<(typeof client.api.v2.authn_mappings)[':authn_mapping_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.authn_mappings[':authn_mapping_id'].$patch(args, options),
  )
}

export async function getApiV2BitsAiInvestigations(
  args: InferRequestType<(typeof client.api.v2)['bits-ai']['investigations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['bits-ai'].investigations.$get(args, options))
}

export async function postApiV2BitsAiInvestigations(
  args: InferRequestType<(typeof client.api.v2)['bits-ai']['investigations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['bits-ai'].investigations.$post(args, options))
}

export async function getApiV2BitsAiInvestigationsId(
  args: InferRequestType<(typeof client.api.v2)['bits-ai']['investigations'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['bits-ai'].investigations[':id'].$get(args, options))
}

export async function getApiV2Budgets(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.budgets.$get(undefined, options))
}

export async function postApiV2Budgets(
  args: InferRequestType<typeof client.api.v2.budgets.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.budgets.$post(args, options))
}

export async function getApiV2BudgetsId(
  args: InferRequestType<(typeof client.api.v2.budgets)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.budgets[':id'].$get(args, options))
}

export async function deleteApiV2BudgetsId(
  args: InferRequestType<(typeof client.api.v2.budgets)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.budgets[':id'].$delete(args, options))
}

export async function patchApiV2BudgetsId(
  args: InferRequestType<(typeof client.api.v2.budgets)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.budgets[':id'].$patch(args, options))
}

export async function getApiV2BudgetsIdCurrentPeriod(
  args: InferRequestType<(typeof client.api.v2.budgets)[':id']['current-period']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.budgets[':id']['current-period'].$get(args, options))
}

export async function getApiV2BudgetsIdInstances(
  args: InferRequestType<(typeof client.api.v2.budgets)[':id']['instances']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.budgets[':id'].instances.$get(args, options))
}

export async function postApiV2BudgetsIdInstancesCapacity(
  args: InferRequestType<(typeof client.api.v2.budgets)[':id']['instances']['capacity']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.budgets[':id'].instances.capacity.$post(args, options))
}

export async function getApiV2BudgetsIdInstancesDimensions(
  args: InferRequestType<(typeof client.api.v2.budgets)[':id']['instances']['dimensions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.budgets[':id'].instances.dimensions.$get(args, options))
}

export async function postApiV2BudgetsIdInstancesReset(
  args: InferRequestType<(typeof client.api.v2.budgets)[':id']['instances']['reset']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.budgets[':id'].instances.reset.$post(args, options))
}

export async function getApiV2BudgetsIdInstancesSummary(
  args: InferRequestType<(typeof client.api.v2.budgets)[':id']['instances']['summary']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.budgets[':id'].instances.summary.$get(args, options))
}

export async function getApiV2Cases(
  args: InferRequestType<typeof client.api.v2.cases.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.cases.$get(args, options))
}

export async function postApiV2Cases(
  args: InferRequestType<typeof client.api.v2.cases.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.cases.$post(args, options))
}

export async function postApiV2CasesAggregate(
  args: InferRequestType<typeof client.api.v2.cases.aggregate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.cases.aggregate.$post(args, options))
}

export async function postApiV2CasesBulk(
  args: InferRequestType<typeof client.api.v2.cases.bulk.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.cases.bulk.$post(args, options))
}

export async function getApiV2CasesCount(
  args: InferRequestType<typeof client.api.v2.cases.count.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.cases.count.$get(args, options))
}

export async function getApiV2CasesLink(
  args: InferRequestType<typeof client.api.v2.cases.link.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.cases.link.$get(args, options))
}

export async function postApiV2CasesLink(
  args: InferRequestType<typeof client.api.v2.cases.link.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.cases.link.$post(args, options))
}

export async function deleteApiV2CasesLinkLinkId(
  args: InferRequestType<(typeof client.api.v2.cases.link)[':link_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.cases.link[':link_id'].$delete(args, options))
}

export async function getApiV2CasesProjects(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.cases.projects.$get(undefined, options))
}

export async function postApiV2CasesProjects(
  args: InferRequestType<typeof client.api.v2.cases.projects.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.cases.projects.$post(args, options))
}

export async function getApiV2CasesProjectsFavorites(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.cases.projects.favorites.$get(undefined, options))
}

export async function getApiV2CasesProjectsProjectId(
  args: InferRequestType<(typeof client.api.v2.cases.projects)[':project_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.cases.projects[':project_id'].$get(args, options))
}

export async function deleteApiV2CasesProjectsProjectId(
  args: InferRequestType<(typeof client.api.v2.cases.projects)[':project_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.cases.projects[':project_id'].$delete(args, options))
}

export async function patchApiV2CasesProjectsProjectId(
  args: InferRequestType<(typeof client.api.v2.cases.projects)[':project_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.cases.projects[':project_id'].$patch(args, options))
}

export async function postApiV2CasesProjectsProjectIdFavorites(
  args: InferRequestType<
    (typeof client.api.v2.cases.projects)[':project_id']['favorites']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.cases.projects[':project_id'].favorites.$post(args, options),
  )
}

export async function deleteApiV2CasesProjectsProjectIdFavorites(
  args: InferRequestType<
    (typeof client.api.v2.cases.projects)[':project_id']['favorites']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.cases.projects[':project_id'].favorites.$delete(args, options),
  )
}

export async function getApiV2CasesProjectsProjectIdNotificationRules(
  args: InferRequestType<
    (typeof client.api.v2.cases.projects)[':project_id']['notification_rules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.cases.projects[':project_id'].notification_rules.$get(args, options),
  )
}

export async function postApiV2CasesProjectsProjectIdNotificationRules(
  args: InferRequestType<
    (typeof client.api.v2.cases.projects)[':project_id']['notification_rules']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.cases.projects[':project_id'].notification_rules.$post(args, options),
  )
}

export async function putApiV2CasesProjectsProjectIdNotificationRulesNotificationRuleId(
  args: InferRequestType<
    (typeof client.api.v2.cases.projects)[':project_id']['notification_rules'][':notification_rule_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.cases.projects[':project_id'].notification_rules[':notification_rule_id'].$put(
      args,
      options,
    ),
  )
}

export async function deleteApiV2CasesProjectsProjectIdNotificationRulesNotificationRuleId(
  args: InferRequestType<
    (typeof client.api.v2.cases.projects)[':project_id']['notification_rules'][':notification_rule_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.cases.projects[':project_id'].notification_rules[':notification_rule_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getApiV2CasesProjectsProjectIdRules(
  args: InferRequestType<(typeof client.api.v2.cases.projects)[':project_id']['rules']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.cases.projects[':project_id'].rules.$get(args, options))
}

export async function postApiV2CasesProjectsProjectIdRules(
  args: InferRequestType<(typeof client.api.v2.cases.projects)[':project_id']['rules']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.cases.projects[':project_id'].rules.$post(args, options))
}

export async function getApiV2CasesProjectsProjectIdRulesRuleId(
  args: InferRequestType<
    (typeof client.api.v2.cases.projects)[':project_id']['rules'][':rule_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.cases.projects[':project_id'].rules[':rule_id'].$get(args, options),
  )
}

export async function putApiV2CasesProjectsProjectIdRulesRuleId(
  args: InferRequestType<
    (typeof client.api.v2.cases.projects)[':project_id']['rules'][':rule_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.cases.projects[':project_id'].rules[':rule_id'].$put(args, options),
  )
}

export async function deleteApiV2CasesProjectsProjectIdRulesRuleId(
  args: InferRequestType<
    (typeof client.api.v2.cases.projects)[':project_id']['rules'][':rule_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.cases.projects[':project_id'].rules[':rule_id'].$delete(args, options),
  )
}

export async function postApiV2CasesProjectsProjectIdRulesRuleIdDisable(
  args: InferRequestType<
    (typeof client.api.v2.cases.projects)[':project_id']['rules'][':rule_id']['disable']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.cases.projects[':project_id'].rules[':rule_id'].disable.$post(args, options),
  )
}

export async function postApiV2CasesProjectsProjectIdRulesRuleIdEnable(
  args: InferRequestType<
    (typeof client.api.v2.cases.projects)[':project_id']['rules'][':rule_id']['enable']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.cases.projects[':project_id'].rules[':rule_id'].enable.$post(args, options),
  )
}

export async function getApiV2CasesTypes(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.cases.types.$get(undefined, options))
}

export async function postApiV2CasesTypes(
  args: InferRequestType<typeof client.api.v2.cases.types.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.cases.types.$post(args, options))
}

export async function getApiV2CasesTypesCustomAttributes(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.cases.types.custom_attributes.$get(undefined, options))
}

export async function putApiV2CasesTypesCaseTypeId(
  args: InferRequestType<(typeof client.api.v2.cases.types)[':case_type_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.cases.types[':case_type_id'].$put(args, options))
}

export async function deleteApiV2CasesTypesCaseTypeId(
  args: InferRequestType<(typeof client.api.v2.cases.types)[':case_type_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.cases.types[':case_type_id'].$delete(args, options))
}

export async function getApiV2CasesTypesCaseTypeIdCustomAttributes(
  args: InferRequestType<
    (typeof client.api.v2.cases.types)[':case_type_id']['custom_attributes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.cases.types[':case_type_id'].custom_attributes.$get(args, options),
  )
}

export async function postApiV2CasesTypesCaseTypeIdCustomAttributes(
  args: InferRequestType<
    (typeof client.api.v2.cases.types)[':case_type_id']['custom_attributes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.cases.types[':case_type_id'].custom_attributes.$post(args, options),
  )
}

export async function putApiV2CasesTypesCaseTypeIdCustomAttributesCustomAttributeId(
  args: InferRequestType<
    (typeof client.api.v2.cases.types)[':case_type_id']['custom_attributes'][':custom_attribute_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.cases.types[':case_type_id'].custom_attributes[':custom_attribute_id'].$put(
      args,
      options,
    ),
  )
}

export async function deleteApiV2CasesTypesCaseTypeIdCustomAttributesCustomAttributeId(
  args: InferRequestType<
    (typeof client.api.v2.cases.types)[':case_type_id']['custom_attributes'][':custom_attribute_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.cases.types[':case_type_id'].custom_attributes[':custom_attribute_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getApiV2CasesViews(
  args: InferRequestType<typeof client.api.v2.cases.views.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.cases.views.$get(args, options))
}

export async function postApiV2CasesViews(
  args: InferRequestType<typeof client.api.v2.cases.views.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.cases.views.$post(args, options))
}

export async function getApiV2CasesViewsViewId(
  args: InferRequestType<(typeof client.api.v2.cases.views)[':view_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.cases.views[':view_id'].$get(args, options))
}

export async function putApiV2CasesViewsViewId(
  args: InferRequestType<(typeof client.api.v2.cases.views)[':view_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.cases.views[':view_id'].$put(args, options))
}

export async function deleteApiV2CasesViewsViewId(
  args: InferRequestType<(typeof client.api.v2.cases.views)[':view_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.cases.views[':view_id'].$delete(args, options))
}

export async function getApiV2CasesCaseId(
  args: InferRequestType<(typeof client.api.v2.cases)[':case_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.cases[':case_id'].$get(args, options))
}

export async function postApiV2CasesCaseIdArchive(
  args: InferRequestType<(typeof client.api.v2.cases)[':case_id']['archive']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.cases[':case_id'].archive.$post(args, options))
}

export async function postApiV2CasesCaseIdAssign(
  args: InferRequestType<(typeof client.api.v2.cases)[':case_id']['assign']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.cases[':case_id'].assign.$post(args, options))
}

export async function postApiV2CasesCaseIdAttributes(
  args: InferRequestType<(typeof client.api.v2.cases)[':case_id']['attributes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.cases[':case_id'].attributes.$post(args, options))
}

export async function postApiV2CasesCaseIdComment(
  args: InferRequestType<(typeof client.api.v2.cases)[':case_id']['comment']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.cases[':case_id'].comment.$post(args, options))
}

export async function putApiV2CasesCaseIdCommentCellId(
  args: InferRequestType<(typeof client.api.v2.cases)[':case_id']['comment'][':cell_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.cases[':case_id'].comment[':cell_id'].$put(args, options),
  )
}

export async function deleteApiV2CasesCaseIdCommentCellId(
  args: InferRequestType<
    (typeof client.api.v2.cases)[':case_id']['comment'][':cell_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.cases[':case_id'].comment[':cell_id'].$delete(args, options),
  )
}

export async function postApiV2CasesCaseIdCustomAttributesCustomAttributeKey(
  args: InferRequestType<
    (typeof client.api.v2.cases)[':case_id']['custom_attributes'][':custom_attribute_key']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.cases[':case_id'].custom_attributes[':custom_attribute_key'].$post(args, options),
  )
}

export async function deleteApiV2CasesCaseIdCustomAttributesCustomAttributeKey(
  args: InferRequestType<
    (typeof client.api.v2.cases)[':case_id']['custom_attributes'][':custom_attribute_key']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.cases[':case_id'].custom_attributes[':custom_attribute_key'].$delete(
      args,
      options,
    ),
  )
}

export async function postApiV2CasesCaseIdDescription(
  args: InferRequestType<(typeof client.api.v2.cases)[':case_id']['description']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.cases[':case_id'].description.$post(args, options))
}

export async function postApiV2CasesCaseIdDueDate(
  args: InferRequestType<(typeof client.api.v2.cases)[':case_id']['due_date']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.cases[':case_id'].due_date.$post(args, options))
}

export async function putApiV2CasesCaseIdInsights(
  args: InferRequestType<(typeof client.api.v2.cases)[':case_id']['insights']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.cases[':case_id'].insights.$put(args, options))
}

export async function deleteApiV2CasesCaseIdInsights(
  args: InferRequestType<(typeof client.api.v2.cases)[':case_id']['insights']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.cases[':case_id'].insights.$delete(args, options))
}

export async function postApiV2CasesCaseIdPriority(
  args: InferRequestType<(typeof client.api.v2.cases)[':case_id']['priority']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.cases[':case_id'].priority.$post(args, options))
}

export async function postApiV2CasesCaseIdRelationshipsIncidents(
  args: InferRequestType<
    (typeof client.api.v2.cases)[':case_id']['relationships']['incidents']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.cases[':case_id'].relationships.incidents.$post(args, options),
  )
}

export async function postApiV2CasesCaseIdRelationshipsJiraIssues(
  args: InferRequestType<
    (typeof client.api.v2.cases)[':case_id']['relationships']['jira_issues']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.cases[':case_id'].relationships.jira_issues.$post(args, options),
  )
}

export async function deleteApiV2CasesCaseIdRelationshipsJiraIssues(
  args: InferRequestType<
    (typeof client.api.v2.cases)[':case_id']['relationships']['jira_issues']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.cases[':case_id'].relationships.jira_issues.$delete(args, options),
  )
}

export async function patchApiV2CasesCaseIdRelationshipsJiraIssues(
  args: InferRequestType<
    (typeof client.api.v2.cases)[':case_id']['relationships']['jira_issues']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.cases[':case_id'].relationships.jira_issues.$patch(args, options),
  )
}

export async function postApiV2CasesCaseIdRelationshipsNotebook(
  args: InferRequestType<
    (typeof client.api.v2.cases)[':case_id']['relationships']['notebook']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.cases[':case_id'].relationships.notebook.$post(args, options),
  )
}

export async function patchApiV2CasesCaseIdRelationshipsProject(
  args: InferRequestType<
    (typeof client.api.v2.cases)[':case_id']['relationships']['project']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.cases[':case_id'].relationships.project.$patch(args, options),
  )
}

export async function postApiV2CasesCaseIdRelationshipsServicenowTickets(
  args: InferRequestType<
    (typeof client.api.v2.cases)[':case_id']['relationships']['servicenow_tickets']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.cases[':case_id'].relationships.servicenow_tickets.$post(args, options),
  )
}

export async function postApiV2CasesCaseIdResolvedReason(
  args: InferRequestType<(typeof client.api.v2.cases)[':case_id']['resolved_reason']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.cases[':case_id'].resolved_reason.$post(args, options))
}

export async function postApiV2CasesCaseIdStatus(
  args: InferRequestType<(typeof client.api.v2.cases)[':case_id']['status']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.cases[':case_id'].status.$post(args, options))
}

export async function getApiV2CasesCaseIdTimelines(
  args: InferRequestType<(typeof client.api.v2.cases)[':case_id']['timelines']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.cases[':case_id'].timelines.$get(args, options))
}

export async function postApiV2CasesCaseIdTitle(
  args: InferRequestType<(typeof client.api.v2.cases)[':case_id']['title']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.cases[':case_id'].title.$post(args, options))
}

export async function postApiV2CasesCaseIdUnarchive(
  args: InferRequestType<(typeof client.api.v2.cases)[':case_id']['unarchive']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.cases[':case_id'].unarchive.$post(args, options))
}

export async function postApiV2CasesCaseIdUnassign(
  args: InferRequestType<(typeof client.api.v2.cases)[':case_id']['unassign']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.cases[':case_id'].unassign.$post(args, options))
}

export async function getApiV2CasesCaseIdWatchers(
  args: InferRequestType<(typeof client.api.v2.cases)[':case_id']['watchers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.cases[':case_id'].watchers.$get(args, options))
}

export async function postApiV2CasesCaseIdWatchersUserUuid(
  args: InferRequestType<
    (typeof client.api.v2.cases)[':case_id']['watchers'][':user_uuid']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.cases[':case_id'].watchers[':user_uuid'].$post(args, options),
  )
}

export async function deleteApiV2CasesCaseIdWatchersUserUuid(
  args: InferRequestType<
    (typeof client.api.v2.cases)[':case_id']['watchers'][':user_uuid']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.cases[':case_id'].watchers[':user_uuid'].$delete(args, options),
  )
}

export async function getApiV2CatalogEntity(
  args: InferRequestType<typeof client.api.v2.catalog.entity.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.catalog.entity.$get(args, options))
}

export async function postApiV2CatalogEntity(
  args: InferRequestType<typeof client.api.v2.catalog.entity.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.catalog.entity.$post(args, options))
}

export async function postApiV2CatalogEntityPreview(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.catalog.entity.preview.$post(undefined, options))
}

export async function deleteApiV2CatalogEntityEntityId(
  args: InferRequestType<(typeof client.api.v2.catalog.entity)[':entity_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.catalog.entity[':entity_id'].$delete(args, options))
}

export async function getApiV2CatalogKind(
  args: InferRequestType<typeof client.api.v2.catalog.kind.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.catalog.kind.$get(args, options))
}

export async function postApiV2CatalogKind(
  args: InferRequestType<typeof client.api.v2.catalog.kind.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.catalog.kind.$post(args, options))
}

export async function deleteApiV2CatalogKindKindId(
  args: InferRequestType<(typeof client.api.v2.catalog.kind)[':kind_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.catalog.kind[':kind_id'].$delete(args, options))
}

export async function getApiV2CatalogRelation(
  args: InferRequestType<typeof client.api.v2.catalog.relation.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.catalog.relation.$get(args, options))
}

export async function postApiV2ChangeManagementChangeRequest(
  args: InferRequestType<(typeof client.api.v2)['change-management']['change-request']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['change-management']['change-request'].$post(args, options),
  )
}

export async function getApiV2ChangeManagementChangeRequestChangeRequestId(
  args: InferRequestType<
    (typeof client.api.v2)['change-management']['change-request'][':change_request_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['change-management']['change-request'][':change_request_id'].$get(args, options),
  )
}

export async function patchApiV2ChangeManagementChangeRequestChangeRequestId(
  args: InferRequestType<
    (typeof client.api.v2)['change-management']['change-request'][':change_request_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['change-management']['change-request'][':change_request_id'].$patch(
      args,
      options,
    ),
  )
}

export async function postApiV2ChangeManagementChangeRequestChangeRequestIdBranch(
  args: InferRequestType<
    (typeof client.api.v2)['change-management']['change-request'][':change_request_id']['branch']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['change-management']['change-request'][':change_request_id'].branch.$post(
      args,
      options,
    ),
  )
}

export async function deleteApiV2ChangeManagementChangeRequestChangeRequestIdDecisionsDecisionId(
  args: InferRequestType<
    (typeof client.api.v2)['change-management']['change-request'][':change_request_id']['decisions'][':decision_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['change-management']['change-request'][':change_request_id'].decisions[
      ':decision_id'
    ].$delete(args, options),
  )
}

export async function patchApiV2ChangeManagementChangeRequestChangeRequestIdDecisionsDecisionId(
  args: InferRequestType<
    (typeof client.api.v2)['change-management']['change-request'][':change_request_id']['decisions'][':decision_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['change-management']['change-request'][':change_request_id'].decisions[
      ':decision_id'
    ].$patch(args, options),
  )
}

export async function getApiV2CiGithubAccounts(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.ci.github.accounts.$get(undefined, options))
}

export async function patchApiV2CiGithubAccounts(
  args: InferRequestType<typeof client.api.v2.ci.github.accounts.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.ci.github.accounts.$patch(args, options))
}

export async function postApiV2CiPipeline(
  args: InferRequestType<typeof client.api.v2.ci.pipeline.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.ci.pipeline.$post(args, options))
}

export async function postApiV2CiPipelinesAnalyticsAggregate(
  args: InferRequestType<typeof client.api.v2.ci.pipelines.analytics.aggregate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.ci.pipelines.analytics.aggregate.$post(args, options))
}

export async function getApiV2CiPipelinesEvents(
  args: InferRequestType<typeof client.api.v2.ci.pipelines.events.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.ci.pipelines.events.$get(args, options))
}

export async function postApiV2CiPipelinesEventsSearch(
  args: InferRequestType<typeof client.api.v2.ci.pipelines.events.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.ci.pipelines.events.search.$post(args, options))
}

export async function postApiV2CiTestOptimizationSettingsPolicies(
  args: InferRequestType<
    (typeof client.api.v2.ci)['test-optimization']['settings']['policies']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.ci['test-optimization'].settings.policies.$post(args, options),
  )
}

export async function patchApiV2CiTestOptimizationSettingsPolicies(
  args: InferRequestType<
    (typeof client.api.v2.ci)['test-optimization']['settings']['policies']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.ci['test-optimization'].settings.policies.$patch(args, options),
  )
}

export async function postApiV2CiTestOptimizationSettingsService(
  args: InferRequestType<
    (typeof client.api.v2.ci)['test-optimization']['settings']['service']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.ci['test-optimization'].settings.service.$post(args, options),
  )
}

export async function deleteApiV2CiTestOptimizationSettingsService(
  args: InferRequestType<
    (typeof client.api.v2.ci)['test-optimization']['settings']['service']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.ci['test-optimization'].settings.service.$delete(args, options),
  )
}

export async function patchApiV2CiTestOptimizationSettingsService(
  args: InferRequestType<
    (typeof client.api.v2.ci)['test-optimization']['settings']['service']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.ci['test-optimization'].settings.service.$patch(args, options),
  )
}

export async function postApiV2CiTestsAnalyticsAggregate(
  args: InferRequestType<typeof client.api.v2.ci.tests.analytics.aggregate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.ci.tests.analytics.aggregate.$post(args, options))
}

export async function getApiV2CiTestsEvents(
  args: InferRequestType<typeof client.api.v2.ci.tests.events.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.ci.tests.events.$get(args, options))
}

export async function postApiV2CiTestsEventsSearch(
  args: InferRequestType<typeof client.api.v2.ci.tests.events.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.ci.tests.events.search.$post(args, options))
}

export async function postApiV2Cilogs(
  args: InferRequestType<typeof client.api.v2.cilogs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.cilogs.$post(args, options))
}

export async function postApiV2CloudSecurityManagementCustomFrameworks(
  args: InferRequestType<typeof client.api.v2.cloud_security_management.custom_frameworks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.cloud_security_management.custom_frameworks.$post(args, options),
  )
}

export async function getApiV2CloudSecurityManagementCustomFrameworksHandleVersion(
  args: InferRequestType<
    (typeof client.api.v2.cloud_security_management.custom_frameworks)[':handle'][':version']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.cloud_security_management.custom_frameworks[':handle'][':version'].$get(
      args,
      options,
    ),
  )
}

export async function putApiV2CloudSecurityManagementCustomFrameworksHandleVersion(
  args: InferRequestType<
    (typeof client.api.v2.cloud_security_management.custom_frameworks)[':handle'][':version']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.cloud_security_management.custom_frameworks[':handle'][':version'].$put(
      args,
      options,
    ),
  )
}

export async function deleteApiV2CloudSecurityManagementCustomFrameworksHandleVersion(
  args: InferRequestType<
    (typeof client.api.v2.cloud_security_management.custom_frameworks)[':handle'][':version']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.cloud_security_management.custom_frameworks[':handle'][':version'].$delete(
      args,
      options,
    ),
  )
}

export async function getApiV2CloudSecurityManagementResourceFilters(
  args: InferRequestType<typeof client.api.v2.cloud_security_management.resource_filters.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.cloud_security_management.resource_filters.$get(args, options),
  )
}

export async function putApiV2CloudSecurityManagementResourceFilters(
  args: InferRequestType<typeof client.api.v2.cloud_security_management.resource_filters.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.cloud_security_management.resource_filters.$put(args, options),
  )
}

export async function putApiV2CloudinventoryserviceSyncconfigs(
  args: InferRequestType<typeof client.api.v2.cloudinventoryservice.syncconfigs.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.cloudinventoryservice.syncconfigs.$put(args, options))
}

export async function deleteApiV2CloudinventoryserviceSyncconfigsId(
  args: InferRequestType<
    (typeof client.api.v2.cloudinventoryservice.syncconfigs)[':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.cloudinventoryservice.syncconfigs[':id'].$delete(args, options),
  )
}

export async function postApiV2CodeCoverageBranchSummary(
  args: InferRequestType<(typeof client.api.v2)['code-coverage']['branch']['summary']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['code-coverage'].branch.summary.$post(args, options))
}

export async function postApiV2CodeCoverageCommitSummary(
  args: InferRequestType<(typeof client.api.v2)['code-coverage']['commit']['summary']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['code-coverage'].commit.summary.$post(args, options))
}

export async function postApiV2CodeCoverageFiles(
  args: InferRequestType<(typeof client.api.v2)['code-coverage']['files']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['code-coverage'].files.$post(args, options))
}

export async function postApiV2CodeCoveragePrSummary(
  args: InferRequestType<(typeof client.api.v2)['code-coverage']['pr']['summary']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['code-coverage'].pr.summary.$post(args, options))
}

export async function getApiV2ComplianceFindingsRuleBasedView(
  args: InferRequestType<typeof client.api.v2.compliance_findings.rule_based_view.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.compliance_findings.rule_based_view.$get(args, options))
}

export async function getApiV2ContainerImages(
  args: InferRequestType<typeof client.api.v2.container_images.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.container_images.$get(args, options))
}

export async function getApiV2Containers(
  args: InferRequestType<typeof client.api.v2.containers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.containers.$get(args, options))
}

export async function getApiV2CostAccountFiltersCloudAccountId(
  args: InferRequestType<(typeof client.api.v2.cost.account_filters)[':cloud_account_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.cost.account_filters[':cloud_account_id'].$get(args, options),
  )
}

export async function patchApiV2CostAccountFiltersCloudAccountId(
  args: InferRequestType<
    (typeof client.api.v2.cost.account_filters)[':cloud_account_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.cost.account_filters[':cloud_account_id'].$patch(args, options),
  )
}

export async function getApiV2CostAnomalies(
  args: InferRequestType<typeof client.api.v2.cost.anomalies.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.cost.anomalies.$get(args, options))
}

export async function getApiV2CostAnomaliesAnomalyId(
  args: InferRequestType<(typeof client.api.v2.cost.anomalies)[':anomaly_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.cost.anomalies[':anomaly_id'].$get(args, options))
}

export async function getApiV2CostArbitraryRule(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.cost.arbitrary_rule.$get(undefined, options))
}

export async function postApiV2CostArbitraryRule(
  args: InferRequestType<typeof client.api.v2.cost.arbitrary_rule.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.cost.arbitrary_rule.$post(args, options))
}

export async function postApiV2CostArbitraryRuleReorder(
  args: InferRequestType<typeof client.api.v2.cost.arbitrary_rule.reorder.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.cost.arbitrary_rule.reorder.$post(args, options))
}

export async function getApiV2CostArbitraryRuleStatus(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.cost.arbitrary_rule.status.$get(undefined, options))
}

export async function getApiV2CostArbitraryRuleRuleId(
  args: InferRequestType<(typeof client.api.v2.cost.arbitrary_rule)[':rule_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.cost.arbitrary_rule[':rule_id'].$get(args, options))
}

export async function deleteApiV2CostArbitraryRuleRuleId(
  args: InferRequestType<(typeof client.api.v2.cost.arbitrary_rule)[':rule_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.cost.arbitrary_rule[':rule_id'].$delete(args, options))
}

export async function patchApiV2CostArbitraryRuleRuleId(
  args: InferRequestType<(typeof client.api.v2.cost.arbitrary_rule)[':rule_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.cost.arbitrary_rule[':rule_id'].$patch(args, options))
}

export async function getApiV2CostAwsCurConfig(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.cost.aws_cur_config.$get(undefined, options))
}

export async function postApiV2CostAwsCurConfig(
  args: InferRequestType<typeof client.api.v2.cost.aws_cur_config.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.cost.aws_cur_config.$post(args, options))
}

export async function getApiV2CostAwsCurConfigCloudAccountId(
  args: InferRequestType<(typeof client.api.v2.cost.aws_cur_config)[':cloud_account_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.cost.aws_cur_config[':cloud_account_id'].$get(args, options),
  )
}

export async function deleteApiV2CostAwsCurConfigCloudAccountId(
  args: InferRequestType<
    (typeof client.api.v2.cost.aws_cur_config)[':cloud_account_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.cost.aws_cur_config[':cloud_account_id'].$delete(args, options),
  )
}

export async function patchApiV2CostAwsCurConfigCloudAccountId(
  args: InferRequestType<(typeof client.api.v2.cost.aws_cur_config)[':cloud_account_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.cost.aws_cur_config[':cloud_account_id'].$patch(args, options),
  )
}

export async function getApiV2CostAzureUcConfig(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.cost.azure_uc_config.$get(undefined, options))
}

export async function postApiV2CostAzureUcConfig(
  args: InferRequestType<typeof client.api.v2.cost.azure_uc_config.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.cost.azure_uc_config.$post(args, options))
}

export async function getApiV2CostAzureUcConfigCloudAccountId(
  args: InferRequestType<(typeof client.api.v2.cost.azure_uc_config)[':cloud_account_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.cost.azure_uc_config[':cloud_account_id'].$get(args, options),
  )
}

export async function deleteApiV2CostAzureUcConfigCloudAccountId(
  args: InferRequestType<
    (typeof client.api.v2.cost.azure_uc_config)[':cloud_account_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.cost.azure_uc_config[':cloud_account_id'].$delete(args, options),
  )
}

export async function patchApiV2CostAzureUcConfigCloudAccountId(
  args: InferRequestType<
    (typeof client.api.v2.cost.azure_uc_config)[':cloud_account_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.cost.azure_uc_config[':cloud_account_id'].$patch(args, options),
  )
}

export async function putApiV2CostBudget(
  args: InferRequestType<typeof client.api.v2.cost.budget.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.cost.budget.$put(args, options))
}

export async function postApiV2CostBudgetCsvValidate(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.cost.budget.csv.validate.$post(undefined, options))
}

export async function putApiV2CostBudgetCustomForecast(
  args: InferRequestType<(typeof client.api.v2.cost.budget)['custom-forecast']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.cost.budget['custom-forecast'].$put(args, options))
}

export async function postApiV2CostBudgetValidate(
  args: InferRequestType<typeof client.api.v2.cost.budget.validate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.cost.budget.validate.$post(args, options))
}

export async function getApiV2CostBudgetBudgetId(
  args: InferRequestType<(typeof client.api.v2.cost.budget)[':budget_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.cost.budget[':budget_id'].$get(args, options))
}

export async function deleteApiV2CostBudgetBudgetId(
  args: InferRequestType<(typeof client.api.v2.cost.budget)[':budget_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.cost.budget[':budget_id'].$delete(args, options))
}

export async function getApiV2CostBudgetBudgetIdCustomForecast(
  args: InferRequestType<
    (typeof client.api.v2.cost.budget)[':budget_id']['custom-forecast']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.cost.budget[':budget_id']['custom-forecast'].$get(args, options),
  )
}

export async function deleteApiV2CostBudgetBudgetIdCustomForecast(
  args: InferRequestType<
    (typeof client.api.v2.cost.budget)[':budget_id']['custom-forecast']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.cost.budget[':budget_id']['custom-forecast'].$delete(args, options),
  )
}

export async function getApiV2CostBudgets(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.cost.budgets.$get(undefined, options))
}

export async function getApiV2CostCloudAccounts(
  args: InferRequestType<typeof client.api.v2.cost.cloud_accounts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.cost.cloud_accounts.$get(args, options))
}

export async function getApiV2CostCommitmentsCommitmentList(
  args: InferRequestType<(typeof client.api.v2.cost.commitments)['commitment-list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.cost.commitments['commitment-list'].$get(args, options))
}

export async function getApiV2CostCommitmentsCoverageScalar(
  args: InferRequestType<typeof client.api.v2.cost.commitments.coverage.scalar.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.cost.commitments.coverage.scalar.$get(args, options))
}

export async function getApiV2CostCommitmentsCoverageTimeseries(
  args: InferRequestType<typeof client.api.v2.cost.commitments.coverage.timeseries.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.cost.commitments.coverage.timeseries.$get(args, options))
}

export async function getApiV2CostCommitmentsOnDemandHotSpotsScalar(
  args: InferRequestType<
    (typeof client.api.v2.cost.commitments)['on-demand-hot-spots']['scalar']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.cost.commitments['on-demand-hot-spots'].scalar.$get(args, options),
  )
}

export async function getApiV2CostCommitmentsSavingsScalar(
  args: InferRequestType<typeof client.api.v2.cost.commitments.savings.scalar.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.cost.commitments.savings.scalar.$get(args, options))
}

export async function getApiV2CostCommitmentsSavingsTimeseries(
  args: InferRequestType<typeof client.api.v2.cost.commitments.savings.timeseries.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.cost.commitments.savings.timeseries.$get(args, options))
}

export async function getApiV2CostCommitmentsUtilizationScalar(
  args: InferRequestType<typeof client.api.v2.cost.commitments.utilization.scalar.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.cost.commitments.utilization.scalar.$get(args, options))
}

export async function getApiV2CostCommitmentsUtilizationTimeseries(
  args: InferRequestType<typeof client.api.v2.cost.commitments.utilization.timeseries.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.cost.commitments.utilization.timeseries.$get(args, options),
  )
}

export async function getApiV2CostCustomCosts(
  args: InferRequestType<typeof client.api.v2.cost.custom_costs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.cost.custom_costs.$get(args, options))
}

export async function putApiV2CostCustomCosts(
  args: InferRequestType<typeof client.api.v2.cost.custom_costs.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.cost.custom_costs.$put(args, options))
}

export async function getApiV2CostCustomCostsFileId(
  args: InferRequestType<(typeof client.api.v2.cost.custom_costs)[':file_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.cost.custom_costs[':file_id'].$get(args, options))
}

export async function deleteApiV2CostCustomCostsFileId(
  args: InferRequestType<(typeof client.api.v2.cost.custom_costs)[':file_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.cost.custom_costs[':file_id'].$delete(args, options))
}

export async function patchApiV2CostCustomCostsFileId(
  args: InferRequestType<(typeof client.api.v2.cost.custom_costs)[':file_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.cost.custom_costs[':file_id'].$patch(args, options))
}

export async function getApiV2CostGcpUcConfig(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.cost.gcp_uc_config.$get(undefined, options))
}

export async function postApiV2CostGcpUcConfig(
  args: InferRequestType<typeof client.api.v2.cost.gcp_uc_config.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.cost.gcp_uc_config.$post(args, options))
}

export async function getApiV2CostGcpUcConfigCloudAccountId(
  args: InferRequestType<(typeof client.api.v2.cost.gcp_uc_config)[':cloud_account_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.cost.gcp_uc_config[':cloud_account_id'].$get(args, options),
  )
}

export async function deleteApiV2CostGcpUcConfigCloudAccountId(
  args: InferRequestType<(typeof client.api.v2.cost.gcp_uc_config)[':cloud_account_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.cost.gcp_uc_config[':cloud_account_id'].$delete(args, options),
  )
}

export async function patchApiV2CostGcpUcConfigCloudAccountId(
  args: InferRequestType<(typeof client.api.v2.cost.gcp_uc_config)[':cloud_account_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.cost.gcp_uc_config[':cloud_account_id'].$patch(args, options),
  )
}

export async function getApiV2CostOciConfig(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.cost.oci_config.$get(undefined, options))
}

export async function postApiV2CostRecommendations(
  args: InferRequestType<typeof client.api.v2.cost.recommendations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.cost.recommendations.$post(args, options))
}

export async function getApiV2CostTagDescriptions(
  args: InferRequestType<typeof client.api.v2.cost.tag_descriptions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.cost.tag_descriptions.$get(args, options))
}

export async function getApiV2CostTagDescriptionsTagKey(
  args: InferRequestType<(typeof client.api.v2.cost.tag_descriptions)[':tag_key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.cost.tag_descriptions[':tag_key'].$get(args, options))
}

export async function putApiV2CostTagDescriptionsTagKey(
  args: InferRequestType<(typeof client.api.v2.cost.tag_descriptions)[':tag_key']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.cost.tag_descriptions[':tag_key'].$put(args, options))
}

export async function deleteApiV2CostTagDescriptionsTagKey(
  args: InferRequestType<(typeof client.api.v2.cost.tag_descriptions)[':tag_key']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.cost.tag_descriptions[':tag_key'].$delete(args, options))
}

export async function getApiV2CostTagDescriptionsTagKeyGenerate(
  args: InferRequestType<
    (typeof client.api.v2.cost.tag_descriptions)[':tag_key']['generate']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.cost.tag_descriptions[':tag_key'].generate.$get(args, options),
  )
}

export async function getApiV2CostTagKeys(
  args: InferRequestType<typeof client.api.v2.cost.tag_keys.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.cost.tag_keys.$get(args, options))
}

export async function getApiV2CostTagKeysTagKey(
  args: InferRequestType<(typeof client.api.v2.cost.tag_keys)[':tag_key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.cost.tag_keys[':tag_key'].$get(args, options))
}

export async function getApiV2CostTagMetadata(
  args: InferRequestType<typeof client.api.v2.cost.tag_metadata.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.cost.tag_metadata.$get(args, options))
}

export async function getApiV2CostTagMetadataCurrency(
  args: InferRequestType<typeof client.api.v2.cost.tag_metadata.currency.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.cost.tag_metadata.currency.$get(args, options))
}

export async function getApiV2CostTagMetadataMetrics(
  args: InferRequestType<typeof client.api.v2.cost.tag_metadata.metrics.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.cost.tag_metadata.metrics.$get(args, options))
}

export async function getApiV2CostTagMetadataMonths(
  args: InferRequestType<typeof client.api.v2.cost.tag_metadata.months.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.cost.tag_metadata.months.$get(args, options))
}

export async function getApiV2CostTagMetadataOrchestrators(
  args: InferRequestType<typeof client.api.v2.cost.tag_metadata.orchestrators.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.cost.tag_metadata.orchestrators.$get(args, options))
}

export async function getApiV2CostTagMetadataTagSources(
  args: InferRequestType<typeof client.api.v2.cost.tag_metadata.tag_sources.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.cost.tag_metadata.tag_sources.$get(args, options))
}

export async function getApiV2CostTags(
  args: InferRequestType<typeof client.api.v2.cost.tags.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.cost.tags.$get(args, options))
}

export async function getApiV2CostUnitCosts(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.cost.unit_costs.$get(undefined, options))
}

export async function postApiV2CostUnitCosts(
  args: InferRequestType<typeof client.api.v2.cost.unit_costs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.cost.unit_costs.$post(args, options))
}

export async function getApiV2CostUnitCostsUnitCostId(
  args: InferRequestType<(typeof client.api.v2.cost.unit_costs)[':unit_cost_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.cost.unit_costs[':unit_cost_id'].$get(args, options))
}

export async function putApiV2CostUnitCostsUnitCostId(
  args: InferRequestType<(typeof client.api.v2.cost.unit_costs)[':unit_cost_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.cost.unit_costs[':unit_cost_id'].$put(args, options))
}

export async function deleteApiV2CostUnitCostsUnitCostId(
  args: InferRequestType<(typeof client.api.v2.cost.unit_costs)[':unit_cost_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.cost.unit_costs[':unit_cost_id'].$delete(args, options))
}

export async function getApiV2CostByTagActiveBillingDimensions(options?: ClientRequestOptions) {
  return await parseResponse(
    client.api.v2.cost_by_tag.active_billing_dimensions.$get(undefined, options),
  )
}

export async function getApiV2CostByTagMonthlyCostAttribution(
  args: InferRequestType<typeof client.api.v2.cost_by_tag.monthly_cost_attribution.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.cost_by_tag.monthly_cost_attribution.$get(args, options))
}

export async function getApiV2CsmOnboardingAgents(
  args: InferRequestType<typeof client.api.v2.csm.onboarding.agents.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.csm.onboarding.agents.$get(args, options))
}

export async function getApiV2CsmOnboardingCoverageAnalysisCloudAccounts(
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.csm.onboarding.coverage_analysis.cloud_accounts.$get(undefined, options),
  )
}

export async function getApiV2CsmOnboardingCoverageAnalysisHostsAndContainers(
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.csm.onboarding.coverage_analysis.hosts_and_containers.$get(undefined, options),
  )
}

export async function getApiV2CsmOnboardingCoverageAnalysisServerless(
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.csm.onboarding.coverage_analysis.serverless.$get(undefined, options),
  )
}

export async function getApiV2CsmOnboardingServerlessAgents(
  args: InferRequestType<typeof client.api.v2.csm.onboarding.serverless.agents.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.csm.onboarding.serverless.agents.$get(args, options))
}

export async function getApiV2CsmOwnershipSettings(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.csm.ownership.settings.$get(undefined, options))
}

export async function postApiV2CsmOwnershipSettings(
  args: InferRequestType<typeof client.api.v2.csm.ownership.settings.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.csm.ownership.settings.$post(args, options))
}

export async function getApiV2CsmOwnershipSettingsUntagged(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.csm.ownership.settings.untagged.$get(undefined, options))
}

export async function getApiV2CsmSettingsAgentlessHosts(
  args: InferRequestType<typeof client.api.v2.csm.settings.agentless_hosts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.csm.settings.agentless_hosts.$get(args, options))
}

export async function getApiV2CsmSettingsAgentlessHostsFacetInfo(
  args: InferRequestType<typeof client.api.v2.csm.settings.agentless_hosts.facet_info.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.csm.settings.agentless_hosts.facet_info.$get(args, options),
  )
}

export async function getApiV2CsmSettingsAgentlessHostsFacets(options?: ClientRequestOptions) {
  return await parseResponse(
    client.api.v2.csm.settings.agentless_hosts.facets.$get(undefined, options),
  )
}

export async function getApiV2CsmSettingsHosts(
  args: InferRequestType<typeof client.api.v2.csm.settings.hosts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.csm.settings.hosts.$get(args, options))
}

export async function getApiV2CsmSettingsHostsFacetInfo(
  args: InferRequestType<typeof client.api.v2.csm.settings.hosts.facet_info.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.csm.settings.hosts.facet_info.$get(args, options))
}

export async function getApiV2CsmSettingsHostsFacets(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.csm.settings.hosts.facets.$get(undefined, options))
}

export async function getApiV2CurrentUser(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.current_user.$get(undefined, options))
}

export async function patchApiV2CurrentUser(
  args: InferRequestType<typeof client.api.v2.current_user.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.current_user.$patch(args, options))
}

export async function getApiV2CurrentUserApplicationKeys(
  args: InferRequestType<typeof client.api.v2.current_user.application_keys.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.current_user.application_keys.$get(args, options))
}

export async function postApiV2CurrentUserApplicationKeys(
  args: InferRequestType<typeof client.api.v2.current_user.application_keys.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.current_user.application_keys.$post(args, options))
}

export async function getApiV2CurrentUserApplicationKeysAppKeyId(
  args: InferRequestType<
    (typeof client.api.v2.current_user.application_keys)[':app_key_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.current_user.application_keys[':app_key_id'].$get(args, options),
  )
}

export async function deleteApiV2CurrentUserApplicationKeysAppKeyId(
  args: InferRequestType<
    (typeof client.api.v2.current_user.application_keys)[':app_key_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.current_user.application_keys[':app_key_id'].$delete(args, options),
  )
}

export async function patchApiV2CurrentUserApplicationKeysAppKeyId(
  args: InferRequestType<
    (typeof client.api.v2.current_user.application_keys)[':app_key_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.current_user.application_keys[':app_key_id'].$patch(args, options),
  )
}

export async function getApiV2DashboardListsManualDashboardListIdDashboards(
  args: InferRequestType<
    (typeof client.api.v2.dashboard.lists.manual)[':dashboard_list_id']['dashboards']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.dashboard.lists.manual[':dashboard_list_id'].dashboards.$get(args, options),
  )
}

export async function putApiV2DashboardListsManualDashboardListIdDashboards(
  args: InferRequestType<
    (typeof client.api.v2.dashboard.lists.manual)[':dashboard_list_id']['dashboards']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.dashboard.lists.manual[':dashboard_list_id'].dashboards.$put(args, options),
  )
}

export async function postApiV2DashboardListsManualDashboardListIdDashboards(
  args: InferRequestType<
    (typeof client.api.v2.dashboard.lists.manual)[':dashboard_list_id']['dashboards']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.dashboard.lists.manual[':dashboard_list_id'].dashboards.$post(args, options),
  )
}

export async function deleteApiV2DashboardListsManualDashboardListIdDashboards(
  args: InferRequestType<
    (typeof client.api.v2.dashboard.lists.manual)[':dashboard_list_id']['dashboards']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.dashboard.lists.manual[':dashboard_list_id'].dashboards.$delete(args, options),
  )
}

export async function getApiV2DashboardDashboardIdShared(
  args: InferRequestType<(typeof client.api.v2.dashboard)[':dashboard_id']['shared']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.dashboard[':dashboard_id'].shared.$get(args, options))
}

export async function postApiV2DashboardDashboardIdSharedSecureEmbed(
  args: InferRequestType<
    (typeof client.api.v2.dashboard)[':dashboard_id']['shared']['secure-embed']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.dashboard[':dashboard_id'].shared['secure-embed'].$post(args, options),
  )
}

export async function getApiV2DashboardDashboardIdSharedSecureEmbedToken(
  args: InferRequestType<
    (typeof client.api.v2.dashboard)[':dashboard_id']['shared']['secure-embed'][':token']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.dashboard[':dashboard_id'].shared['secure-embed'][':token'].$get(args, options),
  )
}

export async function deleteApiV2DashboardDashboardIdSharedSecureEmbedToken(
  args: InferRequestType<
    (typeof client.api.v2.dashboard)[':dashboard_id']['shared']['secure-embed'][':token']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.dashboard[':dashboard_id'].shared['secure-embed'][':token'].$delete(
      args,
      options,
    ),
  )
}

export async function patchApiV2DashboardDashboardIdSharedSecureEmbedToken(
  args: InferRequestType<
    (typeof client.api.v2.dashboard)[':dashboard_id']['shared']['secure-embed'][':token']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.dashboard[':dashboard_id'].shared['secure-embed'][':token'].$patch(args, options),
  )
}

export async function getApiV2DashboardsUsage(
  args: InferRequestType<typeof client.api.v2.dashboards.usage.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.dashboards.usage.$get(args, options))
}

export async function getApiV2DashboardsDashboardIdUsage(
  args: InferRequestType<(typeof client.api.v2.dashboards)[':dashboard_id']['usage']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.dashboards[':dashboard_id'].usage.$get(args, options))
}

export async function getApiV2DataCaptureConfiguration(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2['data-capture'].configuration.$get(undefined, options))
}

export async function postApiV2DataCaptureOverrides(
  args: InferRequestType<(typeof client.api.v2)['data-capture']['overrides']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['data-capture'].overrides.$post(args, options))
}

export async function putApiV2DataCaptureOverridesId(
  args: InferRequestType<(typeof client.api.v2)['data-capture']['overrides'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['data-capture'].overrides[':id'].$put(args, options))
}

export async function deleteApiV2DataCaptureOverridesId(
  args: InferRequestType<(typeof client.api.v2)['data-capture']['overrides'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['data-capture'].overrides[':id'].$delete(args, options))
}

export async function getApiV2DataObservabilityMonitorsRunsRunIdStatus(
  args: InferRequestType<
    (typeof client.api.v2)['data-observability']['monitors']['runs'][':run_id']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['data-observability'].monitors.runs[':run_id'].status.$get(args, options),
  )
}

export async function postApiV2DataObservabilityMonitorsMonitorIdRun(
  args: InferRequestType<
    (typeof client.api.v2)['data-observability']['monitors'][':monitor_id']['run']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['data-observability'].monitors[':monitor_id'].run.$post(args, options),
  )
}

export async function getApiV2Datasets(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.datasets.$get(undefined, options))
}

export async function postApiV2Datasets(
  args: InferRequestType<typeof client.api.v2.datasets.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.datasets.$post(args, options))
}

export async function getApiV2DatasetsDatasetId(
  args: InferRequestType<(typeof client.api.v2.datasets)[':dataset_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.datasets[':dataset_id'].$get(args, options))
}

export async function putApiV2DatasetsDatasetId(
  args: InferRequestType<(typeof client.api.v2.datasets)[':dataset_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.datasets[':dataset_id'].$put(args, options))
}

export async function deleteApiV2DatasetsDatasetId(
  args: InferRequestType<(typeof client.api.v2.datasets)[':dataset_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.datasets[':dataset_id'].$delete(args, options))
}

export async function postApiV2DdsqlQueryTabular(
  args: InferRequestType<typeof client.api.v2.ddsql.query.tabular.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.ddsql.query.tabular.$post(args, options))
}

export async function postApiV2DdsqlQueryTabularFetch(
  args: InferRequestType<typeof client.api.v2.ddsql.query.tabular.fetch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.ddsql.query.tabular.fetch.$post(args, options))
}

export async function postApiV2DeletionDataProduct(
  args: InferRequestType<(typeof client.api.v2.deletion.data)[':product']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.deletion.data[':product'].$post(args, options))
}

export async function getApiV2DeletionRequests(
  args: InferRequestType<typeof client.api.v2.deletion.requests.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.deletion.requests.$get(args, options))
}

export async function putApiV2DeletionRequestsIdCancel(
  args: InferRequestType<(typeof client.api.v2.deletion.requests)[':id']['cancel']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.deletion.requests[':id'].cancel.$put(args, options))
}

export async function postApiV2DemJourneys(
  args: InferRequestType<typeof client.api.v2.dem.journeys.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.dem.journeys.$post(args, options))
}

export async function deleteApiV2DemJourneysInferredIgnoredJourneyId(
  args: InferRequestType<
    (typeof client.api.v2.dem.journeys.inferred.ignored)[':journey_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.dem.journeys.inferred.ignored[':journey_id'].$delete(args, options),
  )
}

export async function getApiV2DemJourneysInferredSearch(
  args: InferRequestType<typeof client.api.v2.dem.journeys.inferred.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.dem.journeys.inferred.search.$get(args, options))
}

export async function postApiV2DemJourneysInferredJourneyIdIgnore(
  args: InferRequestType<
    (typeof client.api.v2.dem.journeys.inferred)[':journey_id']['ignore']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.dem.journeys.inferred[':journey_id'].ignore.$post(args, options),
  )
}

export async function getApiV2DemJourneysSearch(
  args: InferRequestType<typeof client.api.v2.dem.journeys.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.dem.journeys.search.$get(args, options))
}

export async function postApiV2DemJourneysSuitesBatch(
  args: InferRequestType<typeof client.api.v2.dem.journeys.suites.batch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.dem.journeys.suites.batch.$post(args, options))
}

export async function putApiV2DemJourneysVariantsVariantId(
  args: InferRequestType<(typeof client.api.v2.dem.journeys.variants)[':variant_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.dem.journeys.variants[':variant_id'].$put(args, options))
}

export async function deleteApiV2DemJourneysVariantsVariantId(
  args: InferRequestType<(typeof client.api.v2.dem.journeys.variants)[':variant_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.dem.journeys.variants[':variant_id'].$delete(args, options),
  )
}

export async function getApiV2DemJourneysJourneyId(
  args: InferRequestType<(typeof client.api.v2.dem.journeys)[':journey_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.dem.journeys[':journey_id'].$get(args, options))
}

export async function putApiV2DemJourneysJourneyId(
  args: InferRequestType<(typeof client.api.v2.dem.journeys)[':journey_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.dem.journeys[':journey_id'].$put(args, options))
}

export async function deleteApiV2DemJourneysJourneyId(
  args: InferRequestType<(typeof client.api.v2.dem.journeys)[':journey_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.dem.journeys[':journey_id'].$delete(args, options))
}

export async function getApiV2DemJourneysJourneyIdRecommendedTests(
  args: InferRequestType<
    (typeof client.api.v2.dem.journeys)[':journey_id']['recommended-tests']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.dem.journeys[':journey_id']['recommended-tests'].$get(args, options),
  )
}

export async function postApiV2DemJourneysJourneyIdVariants(
  args: InferRequestType<(typeof client.api.v2.dem.journeys)[':journey_id']['variants']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.dem.journeys[':journey_id'].variants.$post(args, options),
  )
}

export async function postApiV2DemJourneysPublicJourneyIdSuite(
  args: InferRequestType<
    (typeof client.api.v2.dem.journeys)[':public_journey_id']['suite']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.dem.journeys[':public_journey_id'].suite.$post(args, options),
  )
}

export async function getApiV2DeploymentGates(
  args: InferRequestType<typeof client.api.v2.deployment_gates.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.deployment_gates.$get(args, options))
}

export async function postApiV2DeploymentGates(
  args: InferRequestType<typeof client.api.v2.deployment_gates.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.deployment_gates.$post(args, options))
}

export async function getApiV2DeploymentGatesEvaluations(
  args: InferRequestType<typeof client.api.v2.deployment_gates.evaluations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.deployment_gates.evaluations.$get(args, options))
}

export async function getApiV2DeploymentGatesEvaluationsRules(
  args: InferRequestType<typeof client.api.v2.deployment_gates.evaluations.rules.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.deployment_gates.evaluations.rules.$get(args, options))
}

export async function getApiV2DeploymentGatesGateIdRules(
  args: InferRequestType<(typeof client.api.v2.deployment_gates)[':gate_id']['rules']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.deployment_gates[':gate_id'].rules.$get(args, options))
}

export async function postApiV2DeploymentGatesGateIdRules(
  args: InferRequestType<(typeof client.api.v2.deployment_gates)[':gate_id']['rules']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.deployment_gates[':gate_id'].rules.$post(args, options))
}

export async function getApiV2DeploymentGatesGateIdRulesId(
  args: InferRequestType<
    (typeof client.api.v2.deployment_gates)[':gate_id']['rules'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.deployment_gates[':gate_id'].rules[':id'].$get(args, options),
  )
}

export async function putApiV2DeploymentGatesGateIdRulesId(
  args: InferRequestType<
    (typeof client.api.v2.deployment_gates)[':gate_id']['rules'][':id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.deployment_gates[':gate_id'].rules[':id'].$put(args, options),
  )
}

export async function deleteApiV2DeploymentGatesGateIdRulesId(
  args: InferRequestType<
    (typeof client.api.v2.deployment_gates)[':gate_id']['rules'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.deployment_gates[':gate_id'].rules[':id'].$delete(args, options),
  )
}

export async function getApiV2DeploymentGatesId(
  args: InferRequestType<(typeof client.api.v2.deployment_gates)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.deployment_gates[':id'].$get(args, options))
}

export async function putApiV2DeploymentGatesId(
  args: InferRequestType<(typeof client.api.v2.deployment_gates)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.deployment_gates[':id'].$put(args, options))
}

export async function deleteApiV2DeploymentGatesId(
  args: InferRequestType<(typeof client.api.v2.deployment_gates)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.deployment_gates[':id'].$delete(args, options))
}

export async function postApiV2DeploymentsGatesEvaluation(
  args: InferRequestType<typeof client.api.v2.deployments.gates.evaluation.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.deployments.gates.evaluation.$post(args, options))
}

export async function getApiV2DeploymentsGatesEvaluationId(
  args: InferRequestType<(typeof client.api.v2.deployments.gates.evaluation)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.deployments.gates.evaluation[':id'].$get(args, options))
}

export async function getApiV2DomainAllowlist(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.domain_allowlist.$get(undefined, options))
}

export async function patchApiV2DomainAllowlist(
  args: InferRequestType<typeof client.api.v2.domain_allowlist.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.domain_allowlist.$patch(args, options))
}

export async function postApiV2DoraDeployment(
  args: InferRequestType<typeof client.api.v2.dora.deployment.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.dora.deployment.$post(args, options))
}

export async function deleteApiV2DoraDeploymentDeploymentId(
  args: InferRequestType<(typeof client.api.v2.dora.deployment)[':deployment_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.dora.deployment[':deployment_id'].$delete(args, options))
}

export async function postApiV2DoraDeployments(
  args: InferRequestType<typeof client.api.v2.dora.deployments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.dora.deployments.$post(args, options))
}

export async function patchApiV2DoraDeployments(
  args: InferRequestType<typeof client.api.v2.dora.deployments.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.dora.deployments.$patch(args, options))
}

export async function getApiV2DoraDeploymentsDeploymentId(
  args: InferRequestType<(typeof client.api.v2.dora.deployments)[':deployment_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.dora.deployments[':deployment_id'].$get(args, options))
}

export async function patchApiV2DoraDeploymentsDeploymentId(
  args: InferRequestType<(typeof client.api.v2.dora.deployments)[':deployment_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.dora.deployments[':deployment_id'].$patch(args, options))
}

export async function postApiV2DoraFailure(
  args: InferRequestType<typeof client.api.v2.dora.failure.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.dora.failure.$post(args, options))
}

export async function deleteApiV2DoraFailureFailureId(
  args: InferRequestType<(typeof client.api.v2.dora.failure)[':failure_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.dora.failure[':failure_id'].$delete(args, options))
}

export async function postApiV2DoraFailures(
  args: InferRequestType<typeof client.api.v2.dora.failures.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.dora.failures.$post(args, options))
}

export async function getApiV2DoraFailuresFailureId(
  args: InferRequestType<(typeof client.api.v2.dora.failures)[':failure_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.dora.failures[':failure_id'].$get(args, options))
}

export async function postApiV2DoraIncident(
  args: InferRequestType<typeof client.api.v2.dora.incident.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.dora.incident.$post(args, options))
}

export async function getApiV2Downtime(
  args: InferRequestType<typeof client.api.v2.downtime.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.downtime.$get(args, options))
}

export async function postApiV2Downtime(
  args: InferRequestType<typeof client.api.v2.downtime.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.downtime.$post(args, options))
}

export async function getApiV2DowntimeDowntimeId(
  args: InferRequestType<(typeof client.api.v2.downtime)[':downtime_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.downtime[':downtime_id'].$get(args, options))
}

export async function deleteApiV2DowntimeDowntimeId(
  args: InferRequestType<(typeof client.api.v2.downtime)[':downtime_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.downtime[':downtime_id'].$delete(args, options))
}

export async function patchApiV2DowntimeDowntimeId(
  args: InferRequestType<(typeof client.api.v2.downtime)[':downtime_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.downtime[':downtime_id'].$patch(args, options))
}

export async function postApiV2ErrorTrackingIssuesSearch(
  args: InferRequestType<(typeof client.api.v2)['error-tracking']['issues']['search']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['error-tracking'].issues.search.$post(args, options))
}

export async function getApiV2ErrorTrackingIssuesIssueId(
  args: InferRequestType<(typeof client.api.v2)['error-tracking']['issues'][':issue_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['error-tracking'].issues[':issue_id'].$get(args, options),
  )
}

export async function putApiV2ErrorTrackingIssuesIssueIdAssignee(
  args: InferRequestType<
    (typeof client.api.v2)['error-tracking']['issues'][':issue_id']['assignee']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['error-tracking'].issues[':issue_id'].assignee.$put(args, options),
  )
}

export async function deleteApiV2ErrorTrackingIssuesIssueIdAssignee(
  args: InferRequestType<
    (typeof client.api.v2)['error-tracking']['issues'][':issue_id']['assignee']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['error-tracking'].issues[':issue_id'].assignee.$delete(args, options),
  )
}

export async function getApiV2ErrorTrackingIssuesIssueIdImpact(
  args: InferRequestType<
    (typeof client.api.v2)['error-tracking']['issues'][':issue_id']['impact']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['error-tracking'].issues[':issue_id'].impact.$get(args, options),
  )
}

export async function postApiV2ErrorTrackingIssuesIssueIdSnooze(
  args: InferRequestType<
    (typeof client.api.v2)['error-tracking']['issues'][':issue_id']['snooze']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['error-tracking'].issues[':issue_id'].snooze.$post(args, options),
  )
}

export async function putApiV2ErrorTrackingIssuesIssueIdState(
  args: InferRequestType<
    (typeof client.api.v2)['error-tracking']['issues'][':issue_id']['state']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['error-tracking'].issues[':issue_id'].state.$put(args, options),
  )
}

export async function getApiV2EudmDevices(
  args: InferRequestType<typeof client.api.v2.eudm.devices.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.eudm.devices.$get(args, options))
}

export async function getApiV2EudmDevicesDeviceId(
  args: InferRequestType<(typeof client.api.v2.eudm.devices)[':device_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.eudm.devices[':device_id'].$get(args, options))
}

export async function getApiV2Events(
  args: InferRequestType<typeof client.api.v2.events.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.events.$get(args, options))
}

export async function postApiV2Events(
  args: InferRequestType<typeof client.api.v2.events.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.events.$post(args, options))
}

export async function postApiV2EventsSearch(
  args: InferRequestType<typeof client.api.v2.events.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.events.search.$post(args, options))
}

export async function getApiV2EventsEventId(
  args: InferRequestType<(typeof client.api.v2.events)[':event_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.events[':event_id'].$get(args, options))
}

export async function getApiV2Experiments(
  args: InferRequestType<typeof client.api.v2.experiments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.experiments.$get(args, options))
}

export async function postApiV2Experiments(
  args: InferRequestType<typeof client.api.v2.experiments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.experiments.$post(args, options))
}

export async function getApiV2ExperimentsBandits(
  args: InferRequestType<typeof client.api.v2.experiments.bandits.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.experiments.bandits.$get(args, options))
}

export async function postApiV2ExperimentsBandits(
  args: InferRequestType<typeof client.api.v2.experiments.bandits.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.experiments.bandits.$post(args, options))
}

export async function getApiV2ExperimentsBanditsBanditId(
  args: InferRequestType<(typeof client.api.v2.experiments.bandits)[':bandit_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.experiments.bandits[':bandit_id'].$get(args, options))
}

export async function deleteApiV2ExperimentsBanditsBanditId(
  args: InferRequestType<(typeof client.api.v2.experiments.bandits)[':bandit_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.experiments.bandits[':bandit_id'].$delete(args, options))
}

export async function patchApiV2ExperimentsBanditsBanditId(
  args: InferRequestType<(typeof client.api.v2.experiments.bandits)[':bandit_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.experiments.bandits[':bandit_id'].$patch(args, options))
}

export async function postApiV2ExperimentsBanditsBanditIdPause(
  args: InferRequestType<
    (typeof client.api.v2.experiments.bandits)[':bandit_id']['pause']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.experiments.bandits[':bandit_id'].pause.$post(args, options),
  )
}

export async function getApiV2ExperimentsBanditsBanditIdPolicies(
  args: InferRequestType<
    (typeof client.api.v2.experiments.bandits)[':bandit_id']['policies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.experiments.bandits[':bandit_id'].policies.$get(args, options),
  )
}

export async function postApiV2ExperimentsBanditsBanditIdRefresh(
  args: InferRequestType<
    (typeof client.api.v2.experiments.bandits)[':bandit_id']['refresh']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.experiments.bandits[':bandit_id'].refresh.$post(args, options),
  )
}

export async function getApiV2ExperimentsBanditsBanditIdResults(
  args: InferRequestType<
    (typeof client.api.v2.experiments.bandits)[':bandit_id']['results']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.experiments.bandits[':bandit_id'].results.$get(args, options),
  )
}

export async function postApiV2ExperimentsBanditsBanditIdResume(
  args: InferRequestType<
    (typeof client.api.v2.experiments.bandits)[':bandit_id']['resume']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.experiments.bandits[':bandit_id'].resume.$post(args, options),
  )
}

export async function postApiV2ExperimentsBanditsBanditIdStart(
  args: InferRequestType<
    (typeof client.api.v2.experiments.bandits)[':bandit_id']['start']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.experiments.bandits[':bandit_id'].start.$post(args, options),
  )
}

export async function postApiV2ExperimentsBanditsBanditIdStop(
  args: InferRequestType<(typeof client.api.v2.experiments.bandits)[':bandit_id']['stop']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.experiments.bandits[':bandit_id'].stop.$post(args, options),
  )
}

export async function getApiV2ExperimentsBanditsBanditIdTrafficSummary(
  args: InferRequestType<
    (typeof client.api.v2.experiments.bandits)[':bandit_id']['traffic-summary']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.experiments.bandits[':bandit_id']['traffic-summary'].$get(args, options),
  )
}

export async function getApiV2ExperimentsExposureSqlModels(
  args: InferRequestType<(typeof client.api.v2.experiments)['exposure-sql-models']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.experiments['exposure-sql-models'].$get(args, options))
}

export async function postApiV2ExperimentsExposureSqlModels(
  args: InferRequestType<(typeof client.api.v2.experiments)['exposure-sql-models']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.experiments['exposure-sql-models'].$post(args, options))
}

export async function getApiV2ExperimentsExposureSqlModelsExposureSqlModelId(
  args: InferRequestType<
    (typeof client.api.v2.experiments)['exposure-sql-models'][':exposure_sql_model_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.experiments['exposure-sql-models'][':exposure_sql_model_id'].$get(args, options),
  )
}

export async function putApiV2ExperimentsExposureSqlModelsExposureSqlModelId(
  args: InferRequestType<
    (typeof client.api.v2.experiments)['exposure-sql-models'][':exposure_sql_model_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.experiments['exposure-sql-models'][':exposure_sql_model_id'].$put(args, options),
  )
}

export async function postApiV2ExperimentsExposureSqlModelsExposureSqlModelIdArchive(
  args: InferRequestType<
    (typeof client.api.v2.experiments)['exposure-sql-models'][':exposure_sql_model_id']['archive']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.experiments['exposure-sql-models'][':exposure_sql_model_id'].archive.$post(
      args,
      options,
    ),
  )
}

export async function postApiV2ExperimentsExposureSqlModelsExposureSqlModelIdUnarchive(
  args: InferRequestType<
    (typeof client.api.v2.experiments)['exposure-sql-models'][':exposure_sql_model_id']['unarchive']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.experiments['exposure-sql-models'][':exposure_sql_model_id'].unarchive.$post(
      args,
      options,
    ),
  )
}

export async function getApiV2ExperimentsMetricCollections(
  args: InferRequestType<(typeof client.api.v2.experiments)['metric-collections']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.experiments['metric-collections'].$get(args, options))
}

export async function postApiV2ExperimentsMetricCollections(
  args: InferRequestType<(typeof client.api.v2.experiments)['metric-collections']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.experiments['metric-collections'].$post(args, options))
}

export async function getApiV2ExperimentsMetricCollectionsMetricCollectionId(
  args: InferRequestType<
    (typeof client.api.v2.experiments)['metric-collections'][':metric_collection_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.experiments['metric-collections'][':metric_collection_id'].$get(args, options),
  )
}

export async function deleteApiV2ExperimentsMetricCollectionsMetricCollectionId(
  args: InferRequestType<
    (typeof client.api.v2.experiments)['metric-collections'][':metric_collection_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.experiments['metric-collections'][':metric_collection_id'].$delete(args, options),
  )
}

export async function patchApiV2ExperimentsMetricCollectionsMetricCollectionId(
  args: InferRequestType<
    (typeof client.api.v2.experiments)['metric-collections'][':metric_collection_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.experiments['metric-collections'][':metric_collection_id'].$patch(args, options),
  )
}

export async function getApiV2ExperimentsMetricSqlModels(
  args: InferRequestType<(typeof client.api.v2.experiments)['metric-sql-models']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.experiments['metric-sql-models'].$get(args, options))
}

export async function postApiV2ExperimentsMetricSqlModels(
  args: InferRequestType<(typeof client.api.v2.experiments)['metric-sql-models']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.experiments['metric-sql-models'].$post(args, options))
}

export async function getApiV2ExperimentsMetricSqlModelsMetricSqlModelId(
  args: InferRequestType<
    (typeof client.api.v2.experiments)['metric-sql-models'][':metric_sql_model_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.experiments['metric-sql-models'][':metric_sql_model_id'].$get(args, options),
  )
}

export async function putApiV2ExperimentsMetricSqlModelsMetricSqlModelId(
  args: InferRequestType<
    (typeof client.api.v2.experiments)['metric-sql-models'][':metric_sql_model_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.experiments['metric-sql-models'][':metric_sql_model_id'].$put(args, options),
  )
}

export async function getApiV2ExperimentsMetrics(
  args: InferRequestType<typeof client.api.v2.experiments.metrics.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.experiments.metrics.$get(args, options))
}

export async function postApiV2ExperimentsMetrics(
  args: InferRequestType<typeof client.api.v2.experiments.metrics.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.experiments.metrics.$post(args, options))
}

export async function getApiV2ExperimentsMetricsMetricId(
  args: InferRequestType<(typeof client.api.v2.experiments.metrics)[':metric_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.experiments.metrics[':metric_id'].$get(args, options))
}

export async function deleteApiV2ExperimentsMetricsMetricId(
  args: InferRequestType<(typeof client.api.v2.experiments.metrics)[':metric_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.experiments.metrics[':metric_id'].$delete(args, options))
}

export async function patchApiV2ExperimentsMetricsMetricId(
  args: InferRequestType<(typeof client.api.v2.experiments.metrics)[':metric_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.experiments.metrics[':metric_id'].$patch(args, options))
}

export async function getApiV2ExperimentsProtocols(
  args: InferRequestType<typeof client.api.v2.experiments.protocols.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.experiments.protocols.$get(args, options))
}

export async function postApiV2ExperimentsProtocols(
  args: InferRequestType<typeof client.api.v2.experiments.protocols.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.experiments.protocols.$post(args, options))
}

export async function getApiV2ExperimentsProtocolsProtocolId(
  args: InferRequestType<(typeof client.api.v2.experiments.protocols)[':protocol_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.experiments.protocols[':protocol_id'].$get(args, options),
  )
}

export async function putApiV2ExperimentsProtocolsProtocolId(
  args: InferRequestType<(typeof client.api.v2.experiments.protocols)[':protocol_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.experiments.protocols[':protocol_id'].$put(args, options),
  )
}

export async function deleteApiV2ExperimentsProtocolsProtocolId(
  args: InferRequestType<(typeof client.api.v2.experiments.protocols)[':protocol_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.experiments.protocols[':protocol_id'].$delete(args, options),
  )
}

export async function patchApiV2ExperimentsProtocolsProtocolId(
  args: InferRequestType<(typeof client.api.v2.experiments.protocols)[':protocol_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.experiments.protocols[':protocol_id'].$patch(args, options),
  )
}

export async function postApiV2ExperimentsProtocolsProtocolIdArchive(
  args: InferRequestType<
    (typeof client.api.v2.experiments.protocols)[':protocol_id']['archive']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.experiments.protocols[':protocol_id'].archive.$post(args, options),
  )
}

export async function postApiV2ExperimentsProtocolsProtocolIdPublish(
  args: InferRequestType<
    (typeof client.api.v2.experiments.protocols)[':protocol_id']['publish']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.experiments.protocols[':protocol_id'].publish.$post(args, options),
  )
}

export async function postApiV2ExperimentsResultsRefresh(
  args: InferRequestType<typeof client.api.v2.experiments.results.refresh.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.experiments.results.refresh.$post(args, options))
}

export async function getApiV2ExperimentsSubjectTypes(
  args: InferRequestType<(typeof client.api.v2.experiments)['subject-types']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.experiments['subject-types'].$get(args, options))
}

export async function postApiV2ExperimentsSubjectTypes(
  args: InferRequestType<(typeof client.api.v2.experiments)['subject-types']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.experiments['subject-types'].$post(args, options))
}

export async function getApiV2ExperimentsSubjectTypesSubjectTypeId(
  args: InferRequestType<
    (typeof client.api.v2.experiments)['subject-types'][':subject_type_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.experiments['subject-types'][':subject_type_id'].$get(args, options),
  )
}

export async function deleteApiV2ExperimentsSubjectTypesSubjectTypeId(
  args: InferRequestType<
    (typeof client.api.v2.experiments)['subject-types'][':subject_type_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.experiments['subject-types'][':subject_type_id'].$delete(args, options),
  )
}

export async function patchApiV2ExperimentsSubjectTypesSubjectTypeId(
  args: InferRequestType<
    (typeof client.api.v2.experiments)['subject-types'][':subject_type_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.experiments['subject-types'][':subject_type_id'].$patch(args, options),
  )
}

export async function postApiV2ExperimentsSubjectTypesSubjectTypeIdDefault(
  args: InferRequestType<
    (typeof client.api.v2.experiments)['subject-types'][':subject_type_id']['default']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.experiments['subject-types'][':subject_type_id'].default.$post(args, options),
  )
}

export async function getApiV2ExperimentsExperimentId(
  args: InferRequestType<(typeof client.api.v2.experiments)[':experiment_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.experiments[':experiment_id'].$get(args, options))
}

export async function deleteApiV2ExperimentsExperimentId(
  args: InferRequestType<(typeof client.api.v2.experiments)[':experiment_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.experiments[':experiment_id'].$delete(args, options))
}

export async function patchApiV2ExperimentsExperimentId(
  args: InferRequestType<(typeof client.api.v2.experiments)[':experiment_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.experiments[':experiment_id'].$patch(args, options))
}

export async function getApiV2ExperimentsExperimentIdAnalysisPlan(
  args: InferRequestType<
    (typeof client.api.v2.experiments)[':experiment_id']['analysis-plan']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.experiments[':experiment_id']['analysis-plan'].$get(args, options),
  )
}

export async function patchApiV2ExperimentsExperimentIdAnalysisPlan(
  args: InferRequestType<
    (typeof client.api.v2.experiments)[':experiment_id']['analysis-plan']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.experiments[':experiment_id']['analysis-plan'].$patch(args, options),
  )
}

export async function postApiV2ExperimentsExperimentIdCancel(
  args: InferRequestType<(typeof client.api.v2.experiments)[':experiment_id']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.experiments[':experiment_id'].cancel.$post(args, options),
  )
}

export async function postApiV2ExperimentsExperimentIdConclude(
  args: InferRequestType<(typeof client.api.v2.experiments)[':experiment_id']['conclude']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.experiments[':experiment_id'].conclude.$post(args, options),
  )
}

export async function getApiV2ExperimentsExperimentIdDiagnostics(
  args: InferRequestType<
    (typeof client.api.v2.experiments)[':experiment_id']['diagnostics']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.experiments[':experiment_id'].diagnostics.$get(args, options),
  )
}

export async function getApiV2ExperimentsExperimentIdHoldouts(
  args: InferRequestType<(typeof client.api.v2.experiments)[':experiment_id']['holdouts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.experiments[':experiment_id'].holdouts.$get(args, options),
  )
}

export async function getApiV2ExperimentsExperimentIdMetricGroups(
  args: InferRequestType<
    (typeof client.api.v2.experiments)[':experiment_id']['metric-groups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.experiments[':experiment_id']['metric-groups'].$get(args, options),
  )
}

export async function postApiV2ExperimentsExperimentIdMetricGroups(
  args: InferRequestType<
    (typeof client.api.v2.experiments)[':experiment_id']['metric-groups']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.experiments[':experiment_id']['metric-groups'].$post(args, options),
  )
}

export async function postApiV2ExperimentsExperimentIdMetricGroupsFromCollectionMetricCollectionId(
  args: InferRequestType<
    (typeof client.api.v2.experiments)[':experiment_id']['metric-groups']['from-collection'][':metric_collection_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.experiments[':experiment_id']['metric-groups']['from-collection'][
      ':metric_collection_id'
    ].$post(args, options),
  )
}

export async function deleteApiV2ExperimentsExperimentIdMetricGroupsMetricGroupId(
  args: InferRequestType<
    (typeof client.api.v2.experiments)[':experiment_id']['metric-groups'][':metric_group_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.experiments[':experiment_id']['metric-groups'][':metric_group_id'].$delete(
      args,
      options,
    ),
  )
}

export async function patchApiV2ExperimentsExperimentIdMetricGroupsMetricGroupId(
  args: InferRequestType<
    (typeof client.api.v2.experiments)[':experiment_id']['metric-groups'][':metric_group_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.experiments[':experiment_id']['metric-groups'][':metric_group_id'].$patch(
      args,
      options,
    ),
  )
}

export async function getApiV2ExperimentsExperimentIdResults(
  args: InferRequestType<(typeof client.api.v2.experiments)[':experiment_id']['results']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.experiments[':experiment_id'].results.$get(args, options),
  )
}

export async function postApiV2ExperimentsExperimentIdResultsRefresh(
  args: InferRequestType<
    (typeof client.api.v2.experiments)[':experiment_id']['results']['refresh']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.experiments[':experiment_id'].results.refresh.$post(args, options),
  )
}

export async function postApiV2ExperimentsExperimentIdStart(
  args: InferRequestType<(typeof client.api.v2.experiments)[':experiment_id']['start']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.experiments[':experiment_id'].start.$post(args, options))
}

export async function getApiV2ExperimentsExperimentIdTrafficSummary(
  args: InferRequestType<
    (typeof client.api.v2.experiments)[':experiment_id']['traffic-summary']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.experiments[':experiment_id']['traffic-summary'].$get(args, options),
  )
}

export async function getApiV2FeatureFlags(
  args: InferRequestType<(typeof client.api.v2)['feature-flags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['feature-flags'].$get(args, options))
}

export async function postApiV2FeatureFlags(
  args: InferRequestType<(typeof client.api.v2)['feature-flags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['feature-flags'].$post(args, options))
}

export async function getApiV2FeatureFlagsEnvironments(
  args: InferRequestType<(typeof client.api.v2)['feature-flags']['environments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['feature-flags'].environments.$get(args, options))
}

export async function postApiV2FeatureFlagsEnvironments(
  args: InferRequestType<(typeof client.api.v2)['feature-flags']['environments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['feature-flags'].environments.$post(args, options))
}

export async function getApiV2FeatureFlagsEnvironmentsEnvironmentId(
  args: InferRequestType<
    (typeof client.api.v2)['feature-flags']['environments'][':environment_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['feature-flags'].environments[':environment_id'].$get(args, options),
  )
}

export async function putApiV2FeatureFlagsEnvironmentsEnvironmentId(
  args: InferRequestType<
    (typeof client.api.v2)['feature-flags']['environments'][':environment_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['feature-flags'].environments[':environment_id'].$put(args, options),
  )
}

export async function deleteApiV2FeatureFlagsEnvironmentsEnvironmentId(
  args: InferRequestType<
    (typeof client.api.v2)['feature-flags']['environments'][':environment_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['feature-flags'].environments[':environment_id'].$delete(args, options),
  )
}

export async function postApiV2FeatureFlagsExposureSchedulesExposureScheduleIdPause(
  args: InferRequestType<
    (typeof client.api.v2)['feature-flags']['exposure-schedules'][':exposure_schedule_id']['pause']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['feature-flags']['exposure-schedules'][':exposure_schedule_id'].pause.$post(
      args,
      options,
    ),
  )
}

export async function postApiV2FeatureFlagsExposureSchedulesExposureScheduleIdResume(
  args: InferRequestType<
    (typeof client.api.v2)['feature-flags']['exposure-schedules'][':exposure_schedule_id']['resume']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['feature-flags']['exposure-schedules'][':exposure_schedule_id'].resume.$post(
      args,
      options,
    ),
  )
}

export async function postApiV2FeatureFlagsExposureSchedulesExposureScheduleIdStart(
  args: InferRequestType<
    (typeof client.api.v2)['feature-flags']['exposure-schedules'][':exposure_schedule_id']['start']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['feature-flags']['exposure-schedules'][':exposure_schedule_id'].start.$post(
      args,
      options,
    ),
  )
}

export async function postApiV2FeatureFlagsExposureSchedulesExposureScheduleIdStop(
  args: InferRequestType<
    (typeof client.api.v2)['feature-flags']['exposure-schedules'][':exposure_schedule_id']['stop']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['feature-flags']['exposure-schedules'][':exposure_schedule_id'].stop.$post(
      args,
      options,
    ),
  )
}

export async function getApiV2FeatureFlagsHistory(
  args: InferRequestType<(typeof client.api.v2)['feature-flags']['history']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['feature-flags'].history.$get(args, options))
}

export async function getApiV2FeatureFlagsHistoryExport(
  args: InferRequestType<(typeof client.api.v2)['feature-flags']['history']['export']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['feature-flags'].history.export.$get(args, options))
}

export async function getApiV2FeatureFlagsSavedFiltersSavedFilterId(
  args: InferRequestType<
    (typeof client.api.v2)['feature-flags']['saved-filters'][':saved_filter_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['feature-flags']['saved-filters'][':saved_filter_id'].$get(args, options),
  )
}

export async function patchApiV2FeatureFlagsSavedFiltersSavedFilterId(
  args: InferRequestType<
    (typeof client.api.v2)['feature-flags']['saved-filters'][':saved_filter_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['feature-flags']['saved-filters'][':saved_filter_id'].$patch(args, options),
  )
}

export async function getApiV2FeatureFlagsFeatureFlagId(
  args: InferRequestType<(typeof client.api.v2)['feature-flags'][':feature_flag_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['feature-flags'][':feature_flag_id'].$get(args, options))
}

export async function putApiV2FeatureFlagsFeatureFlagId(
  args: InferRequestType<(typeof client.api.v2)['feature-flags'][':feature_flag_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['feature-flags'][':feature_flag_id'].$put(args, options))
}

export async function postApiV2FeatureFlagsFeatureFlagIdArchive(
  args: InferRequestType<
    (typeof client.api.v2)['feature-flags'][':feature_flag_id']['archive']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['feature-flags'][':feature_flag_id'].archive.$post(args, options),
  )
}

export async function putApiV2FeatureFlagsFeatureFlagIdEnvironmentsEnvironmentIdAllocations(
  args: InferRequestType<
    (typeof client.api.v2)['feature-flags'][':feature_flag_id']['environments'][':environment_id']['allocations']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['feature-flags'][':feature_flag_id'].environments[
      ':environment_id'
    ].allocations.$put(args, options),
  )
}

export async function postApiV2FeatureFlagsFeatureFlagIdEnvironmentsEnvironmentIdAllocations(
  args: InferRequestType<
    (typeof client.api.v2)['feature-flags'][':feature_flag_id']['environments'][':environment_id']['allocations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['feature-flags'][':feature_flag_id'].environments[
      ':environment_id'
    ].allocations.$post(args, options),
  )
}

export async function postApiV2FeatureFlagsFeatureFlagIdEnvironmentsEnvironmentIdDisable(
  args: InferRequestType<
    (typeof client.api.v2)['feature-flags'][':feature_flag_id']['environments'][':environment_id']['disable']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['feature-flags'][':feature_flag_id'].environments[
      ':environment_id'
    ].disable.$post(args, options),
  )
}

export async function postApiV2FeatureFlagsFeatureFlagIdEnvironmentsEnvironmentIdEnable(
  args: InferRequestType<
    (typeof client.api.v2)['feature-flags'][':feature_flag_id']['environments'][':environment_id']['enable']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['feature-flags'][':feature_flag_id'].environments[':environment_id'].enable.$post(
      args,
      options,
    ),
  )
}

export async function postApiV2FeatureFlagsFeatureFlagIdUnarchive(
  args: InferRequestType<
    (typeof client.api.v2)['feature-flags'][':feature_flag_id']['unarchive']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['feature-flags'][':feature_flag_id'].unarchive.$post(args, options),
  )
}

export async function postApiV2FeatureFlagsFeatureFlagIdVariants(
  args: InferRequestType<
    (typeof client.api.v2)['feature-flags'][':feature_flag_id']['variants']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['feature-flags'][':feature_flag_id'].variants.$post(args, options),
  )
}

export async function putApiV2FeatureFlagsFeatureFlagIdVariantsVariantId(
  args: InferRequestType<
    (typeof client.api.v2)['feature-flags'][':feature_flag_id']['variants'][':variant_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['feature-flags'][':feature_flag_id'].variants[':variant_id'].$put(args, options),
  )
}

export async function deleteApiV2FeatureFlagsFeatureFlagIdVariantsVariantId(
  args: InferRequestType<
    (typeof client.api.v2)['feature-flags'][':feature_flag_id']['variants'][':variant_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['feature-flags'][':feature_flag_id'].variants[':variant_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getApiV2FleetAgentVersions(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.fleet.agent_versions.$get(undefined, options))
}

export async function getApiV2FleetAgents(
  args: InferRequestType<typeof client.api.v2.fleet.agents.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.fleet.agents.$get(args, options))
}

export async function getApiV2FleetAgentsAgentKey(
  args: InferRequestType<(typeof client.api.v2.fleet.agents)[':agent_key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.fleet.agents[':agent_key'].$get(args, options))
}

export async function getApiV2FleetDeployments(
  args: InferRequestType<typeof client.api.v2.fleet.deployments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.fleet.deployments.$get(args, options))
}

export async function postApiV2FleetDeploymentsConfigure(
  args: InferRequestType<typeof client.api.v2.fleet.deployments.configure.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.fleet.deployments.configure.$post(args, options))
}

export async function postApiV2FleetDeploymentsUpgrade(
  args: InferRequestType<typeof client.api.v2.fleet.deployments.upgrade.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.fleet.deployments.upgrade.$post(args, options))
}

export async function getApiV2FleetDeploymentsDeploymentId(
  args: InferRequestType<(typeof client.api.v2.fleet.deployments)[':deployment_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.fleet.deployments[':deployment_id'].$get(args, options))
}

export async function postApiV2FleetDeploymentsDeploymentIdCancel(
  args: InferRequestType<
    (typeof client.api.v2.fleet.deployments)[':deployment_id']['cancel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.fleet.deployments[':deployment_id'].cancel.$post(args, options),
  )
}

export async function getApiV2FleetSchedules(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.fleet.schedules.$get(undefined, options))
}

export async function getApiV2FleetSchedulesId(
  args: InferRequestType<(typeof client.api.v2.fleet.schedules)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.fleet.schedules[':id'].$get(args, options))
}

export async function getApiV2Forms(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.forms.$get(undefined, options))
}

export async function postApiV2Forms(
  args: InferRequestType<typeof client.api.v2.forms.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.forms.$post(args, options))
}

export async function postApiV2FormsCreateAndPublish(
  args: InferRequestType<typeof client.api.v2.forms.create_and_publish.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.forms.create_and_publish.$post(args, options))
}

export async function getApiV2FormsFormId(
  args: InferRequestType<(typeof client.api.v2.forms)[':form_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.forms[':form_id'].$get(args, options))
}

export async function deleteApiV2FormsFormId(
  args: InferRequestType<(typeof client.api.v2.forms)[':form_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.forms[':form_id'].$delete(args, options))
}

export async function patchApiV2FormsFormId(
  args: InferRequestType<(typeof client.api.v2.forms)[':form_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.forms[':form_id'].$patch(args, options))
}

export async function postApiV2FormsFormIdClone(
  args: InferRequestType<(typeof client.api.v2.forms)[':form_id']['clone']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.forms[':form_id'].clone.$post(args, options))
}

export async function postApiV2FormsFormIdPublish(
  args: InferRequestType<(typeof client.api.v2.forms)[':form_id']['publish']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.forms[':form_id'].publish.$post(args, options))
}

export async function postApiV2FormsFormIdVersions(
  args: InferRequestType<(typeof client.api.v2.forms)[':form_id']['versions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.forms[':form_id'].versions.$post(args, options))
}

export async function postApiV2FormsFormIdVersionsUpsertAndPublish(
  args: InferRequestType<
    (typeof client.api.v2.forms)[':form_id']['versions']['upsert_and_publish']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.forms[':form_id'].versions.upsert_and_publish.$post(args, options),
  )
}

export async function getApiV2GlobalOrgs(
  args: InferRequestType<typeof client.api.v2.global_orgs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.global_orgs.$get(args, options))
}

export async function getApiV2Governance(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.governance.$get(undefined, options))
}

export async function putApiV2Governance(
  args: InferRequestType<typeof client.api.v2.governance.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.governance.$put(args, options))
}

export async function getApiV2GovernanceConfig(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.governance.config.$get(undefined, options))
}

export async function getApiV2GovernanceControl(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.governance.control.$get(undefined, options))
}

export async function getApiV2GovernanceControlDetectionType(
  args: InferRequestType<(typeof client.api.v2.governance.control)[':detection_type']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.governance.control[':detection_type'].$get(args, options),
  )
}

export async function patchApiV2GovernanceControlDetectionType(
  args: InferRequestType<(typeof client.api.v2.governance.control)[':detection_type']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.governance.control[':detection_type'].$patch(args, options),
  )
}

export async function getApiV2GovernanceControlDetectionTypeDetections(
  args: InferRequestType<
    (typeof client.api.v2.governance.control)[':detection_type']['detections']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.governance.control[':detection_type'].detections.$get(args, options),
  )
}

export async function getApiV2GovernanceControlDetectionTypeNotificationSettings(
  args: InferRequestType<
    (typeof client.api.v2.governance.control)[':detection_type']['notification_settings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.governance.control[':detection_type'].notification_settings.$get(args, options),
  )
}

export async function putApiV2GovernanceControlDetectionTypeNotificationSettings(
  args: InferRequestType<
    (typeof client.api.v2.governance.control)[':detection_type']['notification_settings']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.governance.control[':detection_type'].notification_settings.$put(args, options),
  )
}

export async function postApiV2GovernanceDetectionsMitigate(
  args: InferRequestType<typeof client.api.v2.governance.detections.mitigate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.governance.detections.mitigate.$post(args, options))
}

export async function getApiV2GovernanceDetectionsDetectionId(
  args: InferRequestType<(typeof client.api.v2.governance.detections)[':detection_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.governance.detections[':detection_id'].$get(args, options),
  )
}

export async function patchApiV2GovernanceDetectionsDetectionId(
  args: InferRequestType<(typeof client.api.v2.governance.detections)[':detection_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.governance.detections[':detection_id'].$patch(args, options),
  )
}

export async function getApiV2GovernanceInsights(
  args: InferRequestType<typeof client.api.v2.governance.insights.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.governance.insights.$get(args, options))
}

export async function getApiV2GovernanceNotificationSettings(options?: ClientRequestOptions) {
  return await parseResponse(
    client.api.v2.governance.notification_settings.$get(undefined, options),
  )
}

export async function patchApiV2GovernanceNotificationSettings(
  args: InferRequestType<typeof client.api.v2.governance.notification_settings.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.governance.notification_settings.$patch(args, options))
}

export async function getApiV2GovernanceTagRules(
  args: InferRequestType<typeof client.api.v2.governance.tag_rules.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.governance.tag_rules.$get(args, options))
}

export async function postApiV2GovernanceTagRules(
  args: InferRequestType<typeof client.api.v2.governance.tag_rules.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.governance.tag_rules.$post(args, options))
}

export async function getApiV2GovernanceTagRulesRuleId(
  args: InferRequestType<(typeof client.api.v2.governance.tag_rules)[':rule_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.governance.tag_rules[':rule_id'].$get(args, options))
}

export async function deleteApiV2GovernanceTagRulesRuleId(
  args: InferRequestType<(typeof client.api.v2.governance.tag_rules)[':rule_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.governance.tag_rules[':rule_id'].$delete(args, options))
}

export async function patchApiV2GovernanceTagRulesRuleId(
  args: InferRequestType<(typeof client.api.v2.governance.tag_rules)[':rule_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.governance.tag_rules[':rule_id'].$patch(args, options))
}

export async function getApiV2GovernanceTagRulesRuleIdScore(
  args: InferRequestType<(typeof client.api.v2.governance.tag_rules)[':rule_id']['score']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.governance.tag_rules[':rule_id'].score.$get(args, options),
  )
}

export async function getApiV2Hamr(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.hamr.$get(undefined, options))
}

export async function postApiV2Hamr(
  args: InferRequestType<typeof client.api.v2.hamr.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.hamr.$post(args, options))
}

export async function getApiV2IdentityProviders(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.identity_providers.$get(undefined, options))
}

export async function patchApiV2IdentityProvidersIdpId(
  args: InferRequestType<(typeof client.api.v2.identity_providers)[':idp_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.identity_providers[':idp_id'].$patch(args, options))
}

export async function getApiV2IdentityProvidersIdpIdUsers(
  args: InferRequestType<(typeof client.api.v2.identity_providers)[':idp_id']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.identity_providers[':idp_id'].users.$get(args, options))
}

export async function getApiV2IdpEntityIntegrationsIntegrationId(
  args: InferRequestType<(typeof client.api.v2.idp.entity_integrations)[':integration_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.idp.entity_integrations[':integration_id'].$get(args, options),
  )
}

export async function putApiV2IdpEntityIntegrationsIntegrationId(
  args: InferRequestType<(typeof client.api.v2.idp.entity_integrations)[':integration_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.idp.entity_integrations[':integration_id'].$put(args, options),
  )
}

export async function deleteApiV2IdpEntityIntegrationsIntegrationId(
  args: InferRequestType<
    (typeof client.api.v2.idp.entity_integrations)[':integration_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.idp.entity_integrations[':integration_id'].$delete(args, options),
  )
}

export async function getApiV2Incidents(
  args: InferRequestType<typeof client.api.v2.incidents.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.incidents.$get(args, options))
}

export async function postApiV2Incidents(
  args: InferRequestType<typeof client.api.v2.incidents.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.incidents.$post(args, options))
}

export async function getApiV2IncidentsConfigGlobalIncidentHandles(
  args: InferRequestType<
    (typeof client.api.v2.incidents.config.global)['incident-handles']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.incidents.config.global['incident-handles'].$get(args, options),
  )
}

export async function putApiV2IncidentsConfigGlobalIncidentHandles(
  args: InferRequestType<
    (typeof client.api.v2.incidents.config.global)['incident-handles']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.incidents.config.global['incident-handles'].$put(args, options),
  )
}

export async function postApiV2IncidentsConfigGlobalIncidentHandles(
  args: InferRequestType<
    (typeof client.api.v2.incidents.config.global)['incident-handles']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.incidents.config.global['incident-handles'].$post(args, options),
  )
}

export async function deleteApiV2IncidentsConfigGlobalIncidentHandles(
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.incidents.config.global['incident-handles'].$delete(undefined, options),
  )
}

export async function getApiV2IncidentsConfigGlobalSettings(options?: ClientRequestOptions) {
  return await parseResponse(
    client.api.v2.incidents.config.global.settings.$get(undefined, options),
  )
}

export async function patchApiV2IncidentsConfigGlobalSettings(
  args: InferRequestType<typeof client.api.v2.incidents.config.global.settings.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.incidents.config.global.settings.$patch(args, options))
}

export async function postApiV2IncidentsConfigGoogleChatConfigurations(
  args: InferRequestType<
    (typeof client.api.v2.incidents.config)['google-chat-configurations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.incidents.config['google-chat-configurations'].$post(args, options),
  )
}

export async function patchApiV2IncidentsConfigGoogleChatConfigurationsId(
  args: InferRequestType<
    (typeof client.api.v2.incidents.config)['google-chat-configurations'][':id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.incidents.config['google-chat-configurations'][':id'].$patch(args, options),
  )
}

export async function postApiV2IncidentsConfigGoogleMeetConfigurations(
  args: InferRequestType<
    (typeof client.api.v2.incidents.config)['google-meet-configurations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.incidents.config['google-meet-configurations'].$post(args, options),
  )
}

export async function patchApiV2IncidentsConfigGoogleMeetConfigurationsId(
  args: InferRequestType<
    (typeof client.api.v2.incidents.config)['google-meet-configurations'][':id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.incidents.config['google-meet-configurations'][':id'].$patch(args, options),
  )
}

export async function getApiV2IncidentsConfigImpactFields(options?: ClientRequestOptions) {
  return await parseResponse(
    client.api.v2.incidents.config['impact-fields'].$get(undefined, options),
  )
}

export async function postApiV2IncidentsConfigImpactFields(
  args: InferRequestType<(typeof client.api.v2.incidents.config)['impact-fields']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.incidents.config['impact-fields'].$post(args, options))
}

export async function putApiV2IncidentsConfigImpactFieldsFieldId(
  args: InferRequestType<
    (typeof client.api.v2.incidents.config)['impact-fields'][':field_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.incidents.config['impact-fields'][':field_id'].$put(args, options),
  )
}

export async function deleteApiV2IncidentsConfigImpactFieldsFieldId(
  args: InferRequestType<
    (typeof client.api.v2.incidents.config)['impact-fields'][':field_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.incidents.config['impact-fields'][':field_id'].$delete(args, options),
  )
}

export async function getApiV2IncidentsConfigNotificationRules(
  args: InferRequestType<(typeof client.api.v2.incidents.config)['notification-rules']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.incidents.config['notification-rules'].$get(args, options),
  )
}

export async function postApiV2IncidentsConfigNotificationRules(
  args: InferRequestType<(typeof client.api.v2.incidents.config)['notification-rules']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.incidents.config['notification-rules'].$post(args, options),
  )
}

export async function getApiV2IncidentsConfigNotificationRulesId(
  args: InferRequestType<
    (typeof client.api.v2.incidents.config)['notification-rules'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.incidents.config['notification-rules'][':id'].$get(args, options),
  )
}

export async function putApiV2IncidentsConfigNotificationRulesId(
  args: InferRequestType<
    (typeof client.api.v2.incidents.config)['notification-rules'][':id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.incidents.config['notification-rules'][':id'].$put(args, options),
  )
}

export async function deleteApiV2IncidentsConfigNotificationRulesId(
  args: InferRequestType<
    (typeof client.api.v2.incidents.config)['notification-rules'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.incidents.config['notification-rules'][':id'].$delete(args, options),
  )
}

export async function getApiV2IncidentsConfigNotificationTemplates(
  args: InferRequestType<(typeof client.api.v2.incidents.config)['notification-templates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.incidents.config['notification-templates'].$get(args, options),
  )
}

export async function postApiV2IncidentsConfigNotificationTemplates(
  args: InferRequestType<
    (typeof client.api.v2.incidents.config)['notification-templates']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.incidents.config['notification-templates'].$post(args, options),
  )
}

export async function getApiV2IncidentsConfigNotificationTemplatesId(
  args: InferRequestType<
    (typeof client.api.v2.incidents.config)['notification-templates'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.incidents.config['notification-templates'][':id'].$get(args, options),
  )
}

export async function deleteApiV2IncidentsConfigNotificationTemplatesId(
  args: InferRequestType<
    (typeof client.api.v2.incidents.config)['notification-templates'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.incidents.config['notification-templates'][':id'].$delete(args, options),
  )
}

export async function patchApiV2IncidentsConfigNotificationTemplatesId(
  args: InferRequestType<
    (typeof client.api.v2.incidents.config)['notification-templates'][':id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.incidents.config['notification-templates'][':id'].$patch(args, options),
  )
}

export async function getApiV2IncidentsConfigPostmortemTemplates(
  args: InferRequestType<(typeof client.api.v2.incidents.config)['postmortem-templates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.incidents.config['postmortem-templates'].$get(args, options),
  )
}

export async function postApiV2IncidentsConfigPostmortemTemplates(
  args: InferRequestType<(typeof client.api.v2.incidents.config)['postmortem-templates']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.incidents.config['postmortem-templates'].$post(args, options),
  )
}

export async function getApiV2IncidentsConfigPostmortemTemplatesTemplateId(
  args: InferRequestType<
    (typeof client.api.v2.incidents.config)['postmortem-templates'][':template_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.incidents.config['postmortem-templates'][':template_id'].$get(args, options),
  )
}

export async function deleteApiV2IncidentsConfigPostmortemTemplatesTemplateId(
  args: InferRequestType<
    (typeof client.api.v2.incidents.config)['postmortem-templates'][':template_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.incidents.config['postmortem-templates'][':template_id'].$delete(args, options),
  )
}

export async function patchApiV2IncidentsConfigPostmortemTemplatesTemplateId(
  args: InferRequestType<
    (typeof client.api.v2.incidents.config)['postmortem-templates'][':template_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.incidents.config['postmortem-templates'][':template_id'].$patch(args, options),
  )
}

export async function getApiV2IncidentsConfigRules(
  args: InferRequestType<typeof client.api.v2.incidents.config.rules.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.incidents.config.rules.$get(args, options))
}

export async function postApiV2IncidentsConfigRules(
  args: InferRequestType<typeof client.api.v2.incidents.config.rules.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.incidents.config.rules.$post(args, options))
}

export async function getApiV2IncidentsConfigRulesRuleId(
  args: InferRequestType<(typeof client.api.v2.incidents.config.rules)[':rule_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.incidents.config.rules[':rule_id'].$get(args, options))
}

export async function deleteApiV2IncidentsConfigRulesRuleId(
  args: InferRequestType<(typeof client.api.v2.incidents.config.rules)[':rule_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.incidents.config.rules[':rule_id'].$delete(args, options),
  )
}

export async function patchApiV2IncidentsConfigRulesRuleId(
  args: InferRequestType<(typeof client.api.v2.incidents.config.rules)[':rule_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.incidents.config.rules[':rule_id'].$patch(args, options))
}

export async function getApiV2IncidentsConfigTypes(
  args: InferRequestType<typeof client.api.v2.incidents.config.types.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.incidents.config.types.$get(args, options))
}

export async function postApiV2IncidentsConfigTypes(
  args: InferRequestType<typeof client.api.v2.incidents.config.types.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.incidents.config.types.$post(args, options))
}

export async function getApiV2IncidentsConfigTypesOrgSettings(
  args: InferRequestType<(typeof client.api.v2.incidents.config.types)['org-settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.incidents.config.types['org-settings'].$get(args, options),
  )
}

export async function getApiV2IncidentsConfigTypesIncidentTypeId(
  args: InferRequestType<
    (typeof client.api.v2.incidents.config.types)[':incident_type_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.incidents.config.types[':incident_type_id'].$get(args, options),
  )
}

export async function deleteApiV2IncidentsConfigTypesIncidentTypeId(
  args: InferRequestType<
    (typeof client.api.v2.incidents.config.types)[':incident_type_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.incidents.config.types[':incident_type_id'].$delete(args, options),
  )
}

export async function patchApiV2IncidentsConfigTypesIncidentTypeId(
  args: InferRequestType<
    (typeof client.api.v2.incidents.config.types)[':incident_type_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.incidents.config.types[':incident_type_id'].$patch(args, options),
  )
}

export async function getApiV2IncidentsConfigTypesIncidentTypeIdOrgSettings(
  args: InferRequestType<
    (typeof client.api.v2.incidents.config.types)[':incident_type_id']['org-settings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.incidents.config.types[':incident_type_id']['org-settings'].$get(args, options),
  )
}

export async function getApiV2IncidentsConfigUserDefinedFields(
  args: InferRequestType<(typeof client.api.v2.incidents.config)['user-defined-fields']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.incidents.config['user-defined-fields'].$get(args, options),
  )
}

export async function postApiV2IncidentsConfigUserDefinedFields(
  args: InferRequestType<(typeof client.api.v2.incidents.config)['user-defined-fields']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.incidents.config['user-defined-fields'].$post(args, options),
  )
}

export async function getApiV2IncidentsConfigUserDefinedFieldsFieldId(
  args: InferRequestType<
    (typeof client.api.v2.incidents.config)['user-defined-fields'][':field_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.incidents.config['user-defined-fields'][':field_id'].$get(args, options),
  )
}

export async function deleteApiV2IncidentsConfigUserDefinedFieldsFieldId(
  args: InferRequestType<
    (typeof client.api.v2.incidents.config)['user-defined-fields'][':field_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.incidents.config['user-defined-fields'][':field_id'].$delete(args, options),
  )
}

export async function patchApiV2IncidentsConfigUserDefinedFieldsFieldId(
  args: InferRequestType<
    (typeof client.api.v2.incidents.config)['user-defined-fields'][':field_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.incidents.config['user-defined-fields'][':field_id'].$patch(args, options),
  )
}

export async function getApiV2IncidentsConfigUserDefinedRoles(
  args: InferRequestType<(typeof client.api.v2.incidents.config)['user-defined-roles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.incidents.config['user-defined-roles'].$get(args, options),
  )
}

export async function postApiV2IncidentsConfigUserDefinedRoles(
  args: InferRequestType<(typeof client.api.v2.incidents.config)['user-defined-roles']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.incidents.config['user-defined-roles'].$post(args, options),
  )
}

export async function getApiV2IncidentsConfigUserDefinedRolesRoleId(
  args: InferRequestType<
    (typeof client.api.v2.incidents.config)['user-defined-roles'][':role_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.incidents.config['user-defined-roles'][':role_id'].$get(args, options),
  )
}

export async function deleteApiV2IncidentsConfigUserDefinedRolesRoleId(
  args: InferRequestType<
    (typeof client.api.v2.incidents.config)['user-defined-roles'][':role_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.incidents.config['user-defined-roles'][':role_id'].$delete(args, options),
  )
}

export async function patchApiV2IncidentsConfigUserDefinedRolesRoleId(
  args: InferRequestType<
    (typeof client.api.v2.incidents.config)['user-defined-roles'][':role_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.incidents.config['user-defined-roles'][':role_id'].$patch(args, options),
  )
}

export async function postApiV2IncidentsImport(
  args: InferRequestType<typeof client.api.v2.incidents.import.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.incidents.import.$post(args, options))
}

export async function getApiV2IncidentsSearch(
  args: InferRequestType<typeof client.api.v2.incidents.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.incidents.search.$get(args, options))
}

export async function getApiV2IncidentsIncidentId(
  args: InferRequestType<(typeof client.api.v2.incidents)[':incident_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.incidents[':incident_id'].$get(args, options))
}

export async function deleteApiV2IncidentsIncidentId(
  args: InferRequestType<(typeof client.api.v2.incidents)[':incident_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.incidents[':incident_id'].$delete(args, options))
}

export async function patchApiV2IncidentsIncidentId(
  args: InferRequestType<(typeof client.api.v2.incidents)[':incident_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.incidents[':incident_id'].$patch(args, options))
}

export async function postApiV2IncidentsIncidentIdAiPostmortem(
  args: InferRequestType<
    (typeof client.api.v2.incidents)[':incident_id']['ai']['postmortem']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.incidents[':incident_id'].ai.postmortem.$post(args, options),
  )
}

export async function getApiV2IncidentsIncidentIdAttachments(
  args: InferRequestType<(typeof client.api.v2.incidents)[':incident_id']['attachments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.incidents[':incident_id'].attachments.$get(args, options),
  )
}

export async function postApiV2IncidentsIncidentIdAttachments(
  args: InferRequestType<(typeof client.api.v2.incidents)[':incident_id']['attachments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.incidents[':incident_id'].attachments.$post(args, options),
  )
}

export async function postApiV2IncidentsIncidentIdAttachmentsPostmortems(
  args: InferRequestType<
    (typeof client.api.v2.incidents)[':incident_id']['attachments']['postmortems']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.incidents[':incident_id'].attachments.postmortems.$post(args, options),
  )
}

export async function deleteApiV2IncidentsIncidentIdAttachmentsAttachmentId(
  args: InferRequestType<
    (typeof client.api.v2.incidents)[':incident_id']['attachments'][':attachment_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.incidents[':incident_id'].attachments[':attachment_id'].$delete(args, options),
  )
}

export async function patchApiV2IncidentsIncidentIdAttachmentsAttachmentId(
  args: InferRequestType<
    (typeof client.api.v2.incidents)[':incident_id']['attachments'][':attachment_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.incidents[':incident_id'].attachments[':attachment_id'].$patch(args, options),
  )
}

export async function postApiV2IncidentsIncidentIdCasesPage(
  args: InferRequestType<
    (typeof client.api.v2.incidents)[':incident_id']['cases']['page']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.incidents[':incident_id'].cases.page.$post(args, options),
  )
}

export async function postApiV2IncidentsIncidentIdConfigurations(
  args: InferRequestType<
    (typeof client.api.v2.incidents)[':incident_id']['configurations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.incidents[':incident_id'].configurations.$post(args, options),
  )
}

export async function patchApiV2IncidentsIncidentIdConfigurations(
  args: InferRequestType<
    (typeof client.api.v2.incidents)[':incident_id']['configurations']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.incidents[':incident_id'].configurations.$patch(args, options),
  )
}

export async function getApiV2IncidentsIncidentIdImpacts(
  args: InferRequestType<(typeof client.api.v2.incidents)[':incident_id']['impacts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.incidents[':incident_id'].impacts.$get(args, options))
}

export async function postApiV2IncidentsIncidentIdImpacts(
  args: InferRequestType<(typeof client.api.v2.incidents)[':incident_id']['impacts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.incidents[':incident_id'].impacts.$post(args, options))
}

export async function deleteApiV2IncidentsIncidentIdImpactsImpactId(
  args: InferRequestType<
    (typeof client.api.v2.incidents)[':incident_id']['impacts'][':impact_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.incidents[':incident_id'].impacts[':impact_id'].$delete(args, options),
  )
}

export async function patchApiV2IncidentsIncidentIdImpactsImpactId(
  args: InferRequestType<
    (typeof client.api.v2.incidents)[':incident_id']['impacts'][':impact_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.incidents[':incident_id'].impacts[':impact_id'].$patch(args, options),
  )
}

export async function postApiV2IncidentsIncidentIdPage(
  args: InferRequestType<(typeof client.api.v2.incidents)[':incident_id']['page']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.incidents[':incident_id'].page.$post(args, options))
}

export async function postApiV2IncidentsIncidentIdPagesLink(
  args: InferRequestType<
    (typeof client.api.v2.incidents)[':incident_id']['pages']['link']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.incidents[':incident_id'].pages.link.$post(args, options),
  )
}

export async function getApiV2IncidentsIncidentIdRelationshipsIntegrations(
  args: InferRequestType<
    (typeof client.api.v2.incidents)[':incident_id']['relationships']['integrations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.incidents[':incident_id'].relationships.integrations.$get(args, options),
  )
}

export async function postApiV2IncidentsIncidentIdRelationshipsIntegrations(
  args: InferRequestType<
    (typeof client.api.v2.incidents)[':incident_id']['relationships']['integrations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.incidents[':incident_id'].relationships.integrations.$post(args, options),
  )
}

export async function getApiV2IncidentsIncidentIdRelationshipsIntegrationsIntegrationMetadataId(
  args: InferRequestType<
    (typeof client.api.v2.incidents)[':incident_id']['relationships']['integrations'][':integration_metadata_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.incidents[':incident_id'].relationships.integrations[
      ':integration_metadata_id'
    ].$get(args, options),
  )
}

export async function deleteApiV2IncidentsIncidentIdRelationshipsIntegrationsIntegrationMetadataId(
  args: InferRequestType<
    (typeof client.api.v2.incidents)[':incident_id']['relationships']['integrations'][':integration_metadata_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.incidents[':incident_id'].relationships.integrations[
      ':integration_metadata_id'
    ].$delete(args, options),
  )
}

export async function patchApiV2IncidentsIncidentIdRelationshipsIntegrationsIntegrationMetadataId(
  args: InferRequestType<
    (typeof client.api.v2.incidents)[':incident_id']['relationships']['integrations'][':integration_metadata_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.incidents[':incident_id'].relationships.integrations[
      ':integration_metadata_id'
    ].$patch(args, options),
  )
}

export async function getApiV2IncidentsIncidentIdRelationshipsTodos(
  args: InferRequestType<
    (typeof client.api.v2.incidents)[':incident_id']['relationships']['todos']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.incidents[':incident_id'].relationships.todos.$get(args, options),
  )
}

export async function postApiV2IncidentsIncidentIdRelationshipsTodos(
  args: InferRequestType<
    (typeof client.api.v2.incidents)[':incident_id']['relationships']['todos']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.incidents[':incident_id'].relationships.todos.$post(args, options),
  )
}

export async function getApiV2IncidentsIncidentIdRelationshipsTodosTodoId(
  args: InferRequestType<
    (typeof client.api.v2.incidents)[':incident_id']['relationships']['todos'][':todo_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.incidents[':incident_id'].relationships.todos[':todo_id'].$get(args, options),
  )
}

export async function deleteApiV2IncidentsIncidentIdRelationshipsTodosTodoId(
  args: InferRequestType<
    (typeof client.api.v2.incidents)[':incident_id']['relationships']['todos'][':todo_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.incidents[':incident_id'].relationships.todos[':todo_id'].$delete(args, options),
  )
}

export async function patchApiV2IncidentsIncidentIdRelationshipsTodosTodoId(
  args: InferRequestType<
    (typeof client.api.v2.incidents)[':incident_id']['relationships']['todos'][':todo_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.incidents[':incident_id'].relationships.todos[':todo_id'].$patch(args, options),
  )
}

export async function getApiV2IncidentsIncidentIdResponders(
  args: InferRequestType<(typeof client.api.v2.incidents)[':incident_id']['responders']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.incidents[':incident_id'].responders.$get(args, options))
}

export async function postApiV2IncidentsIncidentIdResponders(
  args: InferRequestType<(typeof client.api.v2.incidents)[':incident_id']['responders']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.incidents[':incident_id'].responders.$post(args, options),
  )
}

export async function getApiV2IncidentsIncidentIdRespondersResponderId(
  args: InferRequestType<
    (typeof client.api.v2.incidents)[':incident_id']['responders'][':responder_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.incidents[':incident_id'].responders[':responder_id'].$get(args, options),
  )
}

export async function deleteApiV2IncidentsIncidentIdRespondersResponderId(
  args: InferRequestType<
    (typeof client.api.v2.incidents)[':incident_id']['responders'][':responder_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.incidents[':incident_id'].responders[':responder_id'].$delete(args, options),
  )
}

export async function postApiV2IncidentsIncidentIdServicenowRecords(
  args: InferRequestType<
    (typeof client.api.v2.incidents)[':incident_id']['servicenow-records']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.incidents[':incident_id']['servicenow-records'].$post(args, options),
  )
}

export async function getApiV2IncidentsIncidentIdTimestampOverrides(
  args: InferRequestType<
    (typeof client.api.v2.incidents)[':incident_id']['timestamp-overrides']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.incidents[':incident_id']['timestamp-overrides'].$get(args, options),
  )
}

export async function postApiV2IncidentsIncidentIdTimestampOverrides(
  args: InferRequestType<
    (typeof client.api.v2.incidents)[':incident_id']['timestamp-overrides']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.incidents[':incident_id']['timestamp-overrides'].$post(args, options),
  )
}

export async function deleteApiV2IncidentsIncidentIdTimestampOverridesId(
  args: InferRequestType<
    (typeof client.api.v2.incidents)[':incident_id']['timestamp-overrides'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.incidents[':incident_id']['timestamp-overrides'][':id'].$delete(args, options),
  )
}

export async function patchApiV2IncidentsIncidentIdTimestampOverridesId(
  args: InferRequestType<
    (typeof client.api.v2.incidents)[':incident_id']['timestamp-overrides'][':id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.incidents[':incident_id']['timestamp-overrides'][':id'].$patch(args, options),
  )
}

export async function getApiV2IntegrationInterfacesAnthropicUsageAndCostsAccounts(
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['integration-interfaces']['anthropic-usage-and-costs'].accounts.$get(
      undefined,
      options,
    ),
  )
}

export async function postApiV2IntegrationInterfacesAnthropicUsageAndCostsAccounts(
  args: InferRequestType<
    (typeof client.api.v2)['integration-interfaces']['anthropic-usage-and-costs']['accounts']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['integration-interfaces']['anthropic-usage-and-costs'].accounts.$post(
      args,
      options,
    ),
  )
}

export async function getApiV2IntegrationInterfacesAnthropicUsageAndCostsAccountsAccountId(
  args: InferRequestType<
    (typeof client.api.v2)['integration-interfaces']['anthropic-usage-and-costs']['accounts'][':account_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['integration-interfaces']['anthropic-usage-and-costs'].accounts[
      ':account_id'
    ].$get(args, options),
  )
}

export async function deleteApiV2IntegrationInterfacesAnthropicUsageAndCostsAccountsAccountId(
  args: InferRequestType<
    (typeof client.api.v2)['integration-interfaces']['anthropic-usage-and-costs']['accounts'][':account_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['integration-interfaces']['anthropic-usage-and-costs'].accounts[
      ':account_id'
    ].$delete(args, options),
  )
}

export async function patchApiV2IntegrationInterfacesAnthropicUsageAndCostsAccountsAccountId(
  args: InferRequestType<
    (typeof client.api.v2)['integration-interfaces']['anthropic-usage-and-costs']['accounts'][':account_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['integration-interfaces']['anthropic-usage-and-costs'].accounts[
      ':account_id'
    ].$patch(args, options),
  )
}

export async function getApiV2IntegrationInterfacesChatgptEnterpriseAccounts(
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['integration-interfaces']['chatgpt-enterprise'].accounts.$get(undefined, options),
  )
}

export async function postApiV2IntegrationInterfacesChatgptEnterpriseAccounts(
  args: InferRequestType<
    (typeof client.api.v2)['integration-interfaces']['chatgpt-enterprise']['accounts']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['integration-interfaces']['chatgpt-enterprise'].accounts.$post(args, options),
  )
}

export async function getApiV2IntegrationInterfacesChatgptEnterpriseAccountsAccountId(
  args: InferRequestType<
    (typeof client.api.v2)['integration-interfaces']['chatgpt-enterprise']['accounts'][':account_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['integration-interfaces']['chatgpt-enterprise'].accounts[':account_id'].$get(
      args,
      options,
    ),
  )
}

export async function deleteApiV2IntegrationInterfacesChatgptEnterpriseAccountsAccountId(
  args: InferRequestType<
    (typeof client.api.v2)['integration-interfaces']['chatgpt-enterprise']['accounts'][':account_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['integration-interfaces']['chatgpt-enterprise'].accounts[':account_id'].$delete(
      args,
      options,
    ),
  )
}

export async function patchApiV2IntegrationInterfacesChatgptEnterpriseAccountsAccountId(
  args: InferRequestType<
    (typeof client.api.v2)['integration-interfaces']['chatgpt-enterprise']['accounts'][':account_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['integration-interfaces']['chatgpt-enterprise'].accounts[':account_id'].$patch(
      args,
      options,
    ),
  )
}

export async function getApiV2IntegrationInterfacesClaudeComplianceAccounts(
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['integration-interfaces']['claude-compliance'].accounts.$get(undefined, options),
  )
}

export async function postApiV2IntegrationInterfacesClaudeComplianceAccounts(
  args: InferRequestType<
    (typeof client.api.v2)['integration-interfaces']['claude-compliance']['accounts']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['integration-interfaces']['claude-compliance'].accounts.$post(args, options),
  )
}

export async function getApiV2IntegrationInterfacesClaudeComplianceAccountsAccountId(
  args: InferRequestType<
    (typeof client.api.v2)['integration-interfaces']['claude-compliance']['accounts'][':account_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['integration-interfaces']['claude-compliance'].accounts[':account_id'].$get(
      args,
      options,
    ),
  )
}

export async function deleteApiV2IntegrationInterfacesClaudeComplianceAccountsAccountId(
  args: InferRequestType<
    (typeof client.api.v2)['integration-interfaces']['claude-compliance']['accounts'][':account_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['integration-interfaces']['claude-compliance'].accounts[':account_id'].$delete(
      args,
      options,
    ),
  )
}

export async function patchApiV2IntegrationInterfacesClaudeComplianceAccountsAccountId(
  args: InferRequestType<
    (typeof client.api.v2)['integration-interfaces']['claude-compliance']['accounts'][':account_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['integration-interfaces']['claude-compliance'].accounts[':account_id'].$patch(
      args,
      options,
    ),
  )
}

export async function getApiV2IntegrationInterfacesCoreweaveCloudAccounts(
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['integration-interfaces']['coreweave-cloud'].accounts.$get(undefined, options),
  )
}

export async function postApiV2IntegrationInterfacesCoreweaveCloudAccounts(
  args: InferRequestType<
    (typeof client.api.v2)['integration-interfaces']['coreweave-cloud']['accounts']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['integration-interfaces']['coreweave-cloud'].accounts.$post(args, options),
  )
}

export async function getApiV2IntegrationInterfacesCoreweaveCloudAccountsAccountId(
  args: InferRequestType<
    (typeof client.api.v2)['integration-interfaces']['coreweave-cloud']['accounts'][':account_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['integration-interfaces']['coreweave-cloud'].accounts[':account_id'].$get(
      args,
      options,
    ),
  )
}

export async function deleteApiV2IntegrationInterfacesCoreweaveCloudAccountsAccountId(
  args: InferRequestType<
    (typeof client.api.v2)['integration-interfaces']['coreweave-cloud']['accounts'][':account_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['integration-interfaces']['coreweave-cloud'].accounts[':account_id'].$delete(
      args,
      options,
    ),
  )
}

export async function patchApiV2IntegrationInterfacesCoreweaveCloudAccountsAccountId(
  args: InferRequestType<
    (typeof client.api.v2)['integration-interfaces']['coreweave-cloud']['accounts'][':account_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['integration-interfaces']['coreweave-cloud'].accounts[':account_id'].$patch(
      args,
      options,
    ),
  )
}

export async function getApiV2IntegrationInterfacesDatabricksAccounts(
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['integration-interfaces'].databricks.accounts.$get(undefined, options),
  )
}

export async function postApiV2IntegrationInterfacesDatabricksAccounts(
  args: InferRequestType<
    (typeof client.api.v2)['integration-interfaces']['databricks']['accounts']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['integration-interfaces'].databricks.accounts.$post(args, options),
  )
}

export async function getApiV2IntegrationInterfacesDatabricksAccountsAccountId(
  args: InferRequestType<
    (typeof client.api.v2)['integration-interfaces']['databricks']['accounts'][':account_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['integration-interfaces'].databricks.accounts[':account_id'].$get(args, options),
  )
}

export async function deleteApiV2IntegrationInterfacesDatabricksAccountsAccountId(
  args: InferRequestType<
    (typeof client.api.v2)['integration-interfaces']['databricks']['accounts'][':account_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['integration-interfaces'].databricks.accounts[':account_id'].$delete(
      args,
      options,
    ),
  )
}

export async function patchApiV2IntegrationInterfacesDatabricksAccountsAccountId(
  args: InferRequestType<
    (typeof client.api.v2)['integration-interfaces']['databricks']['accounts'][':account_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['integration-interfaces'].databricks.accounts[':account_id'].$patch(
      args,
      options,
    ),
  )
}

export async function getApiV2IntegrationInterfacesElasticCloudAccounts(
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['integration-interfaces']['elastic-cloud'].accounts.$get(undefined, options),
  )
}

export async function postApiV2IntegrationInterfacesElasticCloudAccounts(
  args: InferRequestType<
    (typeof client.api.v2)['integration-interfaces']['elastic-cloud']['accounts']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['integration-interfaces']['elastic-cloud'].accounts.$post(args, options),
  )
}

export async function getApiV2IntegrationInterfacesElasticCloudAccountsAccountId(
  args: InferRequestType<
    (typeof client.api.v2)['integration-interfaces']['elastic-cloud']['accounts'][':account_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['integration-interfaces']['elastic-cloud'].accounts[':account_id'].$get(
      args,
      options,
    ),
  )
}

export async function deleteApiV2IntegrationInterfacesElasticCloudAccountsAccountId(
  args: InferRequestType<
    (typeof client.api.v2)['integration-interfaces']['elastic-cloud']['accounts'][':account_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['integration-interfaces']['elastic-cloud'].accounts[':account_id'].$delete(
      args,
      options,
    ),
  )
}

export async function patchApiV2IntegrationInterfacesElasticCloudAccountsAccountId(
  args: InferRequestType<
    (typeof client.api.v2)['integration-interfaces']['elastic-cloud']['accounts'][':account_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['integration-interfaces']['elastic-cloud'].accounts[':account_id'].$patch(
      args,
      options,
    ),
  )
}

export async function getApiV2IntegrationInterfacesNebiusCloudAccounts(
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['integration-interfaces']['nebius-cloud'].accounts.$get(undefined, options),
  )
}

export async function postApiV2IntegrationInterfacesNebiusCloudAccounts(
  args: InferRequestType<
    (typeof client.api.v2)['integration-interfaces']['nebius-cloud']['accounts']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['integration-interfaces']['nebius-cloud'].accounts.$post(args, options),
  )
}

export async function getApiV2IntegrationInterfacesNebiusCloudAccountsAccountId(
  args: InferRequestType<
    (typeof client.api.v2)['integration-interfaces']['nebius-cloud']['accounts'][':account_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['integration-interfaces']['nebius-cloud'].accounts[':account_id'].$get(
      args,
      options,
    ),
  )
}

export async function deleteApiV2IntegrationInterfacesNebiusCloudAccountsAccountId(
  args: InferRequestType<
    (typeof client.api.v2)['integration-interfaces']['nebius-cloud']['accounts'][':account_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['integration-interfaces']['nebius-cloud'].accounts[':account_id'].$delete(
      args,
      options,
    ),
  )
}

export async function patchApiV2IntegrationInterfacesNebiusCloudAccountsAccountId(
  args: InferRequestType<
    (typeof client.api.v2)['integration-interfaces']['nebius-cloud']['accounts'][':account_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['integration-interfaces']['nebius-cloud'].accounts[':account_id'].$patch(
      args,
      options,
    ),
  )
}

export async function getApiV2IntegrationInterfacesOpenaiCodexAccounts(
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['integration-interfaces']['openai-codex'].accounts.$get(undefined, options),
  )
}

export async function postApiV2IntegrationInterfacesOpenaiCodexAccounts(
  args: InferRequestType<
    (typeof client.api.v2)['integration-interfaces']['openai-codex']['accounts']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['integration-interfaces']['openai-codex'].accounts.$post(args, options),
  )
}

export async function getApiV2IntegrationInterfacesOpenaiCodexAccountsAccountId(
  args: InferRequestType<
    (typeof client.api.v2)['integration-interfaces']['openai-codex']['accounts'][':account_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['integration-interfaces']['openai-codex'].accounts[':account_id'].$get(
      args,
      options,
    ),
  )
}

export async function deleteApiV2IntegrationInterfacesOpenaiCodexAccountsAccountId(
  args: InferRequestType<
    (typeof client.api.v2)['integration-interfaces']['openai-codex']['accounts'][':account_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['integration-interfaces']['openai-codex'].accounts[':account_id'].$delete(
      args,
      options,
    ),
  )
}

export async function patchApiV2IntegrationInterfacesOpenaiCodexAccountsAccountId(
  args: InferRequestType<
    (typeof client.api.v2)['integration-interfaces']['openai-codex']['accounts'][':account_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['integration-interfaces']['openai-codex'].accounts[':account_id'].$patch(
      args,
      options,
    ),
  )
}

export async function getApiV2IntegrationInterfacesSnowflakeAccounts(
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['integration-interfaces'].snowflake.accounts.$get(undefined, options),
  )
}

export async function postApiV2IntegrationInterfacesSnowflakeAccounts(
  args: InferRequestType<
    (typeof client.api.v2)['integration-interfaces']['snowflake']['accounts']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['integration-interfaces'].snowflake.accounts.$post(args, options),
  )
}

export async function getApiV2IntegrationInterfacesSnowflakeAccountsAccountId(
  args: InferRequestType<
    (typeof client.api.v2)['integration-interfaces']['snowflake']['accounts'][':account_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['integration-interfaces'].snowflake.accounts[':account_id'].$get(args, options),
  )
}

export async function deleteApiV2IntegrationInterfacesSnowflakeAccountsAccountId(
  args: InferRequestType<
    (typeof client.api.v2)['integration-interfaces']['snowflake']['accounts'][':account_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['integration-interfaces'].snowflake.accounts[':account_id'].$delete(
      args,
      options,
    ),
  )
}

export async function patchApiV2IntegrationInterfacesSnowflakeAccountsAccountId(
  args: InferRequestType<
    (typeof client.api.v2)['integration-interfaces']['snowflake']['accounts'][':account_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['integration-interfaces'].snowflake.accounts[':account_id'].$patch(args, options),
  )
}

export async function getApiV2IntegrationInterfacesTemporalCloudOpenmetricsAccounts(
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['integration-interfaces']['temporal-cloud-openmetrics'].accounts.$get(
      undefined,
      options,
    ),
  )
}

export async function postApiV2IntegrationInterfacesTemporalCloudOpenmetricsAccounts(
  args: InferRequestType<
    (typeof client.api.v2)['integration-interfaces']['temporal-cloud-openmetrics']['accounts']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['integration-interfaces']['temporal-cloud-openmetrics'].accounts.$post(
      args,
      options,
    ),
  )
}

export async function getApiV2IntegrationInterfacesTemporalCloudOpenmetricsAccountsAccountId(
  args: InferRequestType<
    (typeof client.api.v2)['integration-interfaces']['temporal-cloud-openmetrics']['accounts'][':account_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['integration-interfaces']['temporal-cloud-openmetrics'].accounts[
      ':account_id'
    ].$get(args, options),
  )
}

export async function deleteApiV2IntegrationInterfacesTemporalCloudOpenmetricsAccountsAccountId(
  args: InferRequestType<
    (typeof client.api.v2)['integration-interfaces']['temporal-cloud-openmetrics']['accounts'][':account_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['integration-interfaces']['temporal-cloud-openmetrics'].accounts[
      ':account_id'
    ].$delete(args, options),
  )
}

export async function patchApiV2IntegrationInterfacesTemporalCloudOpenmetricsAccountsAccountId(
  args: InferRequestType<
    (typeof client.api.v2)['integration-interfaces']['temporal-cloud-openmetrics']['accounts'][':account_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['integration-interfaces']['temporal-cloud-openmetrics'].accounts[
      ':account_id'
    ].$patch(args, options),
  )
}

export async function getApiV2IntegrationInterfacesTwilioAccounts(options?: ClientRequestOptions) {
  return await parseResponse(
    client.api.v2['integration-interfaces'].twilio.accounts.$get(undefined, options),
  )
}

export async function postApiV2IntegrationInterfacesTwilioAccounts(
  args: InferRequestType<
    (typeof client.api.v2)['integration-interfaces']['twilio']['accounts']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['integration-interfaces'].twilio.accounts.$post(args, options),
  )
}

export async function getApiV2IntegrationInterfacesTwilioAccountsAccountId(
  args: InferRequestType<
    (typeof client.api.v2)['integration-interfaces']['twilio']['accounts'][':account_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['integration-interfaces'].twilio.accounts[':account_id'].$get(args, options),
  )
}

export async function deleteApiV2IntegrationInterfacesTwilioAccountsAccountId(
  args: InferRequestType<
    (typeof client.api.v2)['integration-interfaces']['twilio']['accounts'][':account_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['integration-interfaces'].twilio.accounts[':account_id'].$delete(args, options),
  )
}

export async function patchApiV2IntegrationInterfacesTwilioAccountsAccountId(
  args: InferRequestType<
    (typeof client.api.v2)['integration-interfaces']['twilio']['accounts'][':account_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['integration-interfaces'].twilio.accounts[':account_id'].$patch(args, options),
  )
}

export async function getApiV2IntegrationAwsAccounts(
  args: InferRequestType<typeof client.api.v2.integration.aws.accounts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.integration.aws.accounts.$get(args, options))
}

export async function postApiV2IntegrationAwsAccounts(
  args: InferRequestType<typeof client.api.v2.integration.aws.accounts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.integration.aws.accounts.$post(args, options))
}

export async function getApiV2IntegrationAwsAccountsAwsAccountConfigId(
  args: InferRequestType<
    (typeof client.api.v2.integration.aws.accounts)[':aws_account_config_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.integration.aws.accounts[':aws_account_config_id'].$get(args, options),
  )
}

export async function deleteApiV2IntegrationAwsAccountsAwsAccountConfigId(
  args: InferRequestType<
    (typeof client.api.v2.integration.aws.accounts)[':aws_account_config_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.integration.aws.accounts[':aws_account_config_id'].$delete(args, options),
  )
}

export async function patchApiV2IntegrationAwsAccountsAwsAccountConfigId(
  args: InferRequestType<
    (typeof client.api.v2.integration.aws.accounts)[':aws_account_config_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.integration.aws.accounts[':aws_account_config_id'].$patch(args, options),
  )
}

export async function getApiV2IntegrationAwsAccountsAwsAccountConfigIdCcmConfig(
  args: InferRequestType<
    (typeof client.api.v2.integration.aws.accounts)[':aws_account_config_id']['ccm_config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.integration.aws.accounts[':aws_account_config_id'].ccm_config.$get(args, options),
  )
}

export async function postApiV2IntegrationAwsAccountsAwsAccountConfigIdCcmConfig(
  args: InferRequestType<
    (typeof client.api.v2.integration.aws.accounts)[':aws_account_config_id']['ccm_config']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.integration.aws.accounts[':aws_account_config_id'].ccm_config.$post(
      args,
      options,
    ),
  )
}

export async function deleteApiV2IntegrationAwsAccountsAwsAccountConfigIdCcmConfig(
  args: InferRequestType<
    (typeof client.api.v2.integration.aws.accounts)[':aws_account_config_id']['ccm_config']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.integration.aws.accounts[':aws_account_config_id'].ccm_config.$delete(
      args,
      options,
    ),
  )
}

export async function patchApiV2IntegrationAwsAccountsAwsAccountConfigIdCcmConfig(
  args: InferRequestType<
    (typeof client.api.v2.integration.aws.accounts)[':aws_account_config_id']['ccm_config']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.integration.aws.accounts[':aws_account_config_id'].ccm_config.$patch(
      args,
      options,
    ),
  )
}

export async function getApiV2IntegrationAwsAccountsAwsAccountConfigIdMetricNameFilterPreview(
  args: InferRequestType<
    (typeof client.api.v2.integration.aws.accounts)[':aws_account_config_id']['metric_name_filter_preview']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.integration.aws.accounts[
      ':aws_account_config_id'
    ].metric_name_filter_preview.$get(args, options),
  )
}

export async function postApiV2IntegrationAwsAccountsAwsAccountConfigIdMetricNameFilterPreview(
  args: InferRequestType<
    (typeof client.api.v2.integration.aws.accounts)[':aws_account_config_id']['metric_name_filter_preview']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.integration.aws.accounts[
      ':aws_account_config_id'
    ].metric_name_filter_preview.$post(args, options),
  )
}

export async function getApiV2IntegrationAwsAvailableNamespaces(options?: ClientRequestOptions) {
  return await parseResponse(
    client.api.v2.integration.aws.available_namespaces.$get(undefined, options),
  )
}

export async function getApiV2IntegrationAwsEventBridge(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.integration.aws.event_bridge.$get(undefined, options))
}

export async function postApiV2IntegrationAwsEventBridge(
  args: InferRequestType<typeof client.api.v2.integration.aws.event_bridge.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.integration.aws.event_bridge.$post(args, options))
}

export async function deleteApiV2IntegrationAwsEventBridge(
  args: InferRequestType<typeof client.api.v2.integration.aws.event_bridge.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.integration.aws.event_bridge.$delete(args, options))
}

export async function postApiV2IntegrationAwsGenerateNewExternalId(options?: ClientRequestOptions) {
  return await parseResponse(
    client.api.v2.integration.aws.generate_new_external_id.$post(undefined, options),
  )
}

export async function getApiV2IntegrationAwsIamPermissions(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.integration.aws.iam_permissions.$get(undefined, options))
}

export async function getApiV2IntegrationAwsIamPermissionsResourceCollection(
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.integration.aws.iam_permissions.resource_collection.$get(undefined, options),
  )
}

export async function getApiV2IntegrationAwsIamPermissionsStandard(options?: ClientRequestOptions) {
  return await parseResponse(
    client.api.v2.integration.aws.iam_permissions.standard.$get(undefined, options),
  )
}

export async function getApiV2IntegrationAwsLogsServices(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.integration.aws.logs.services.$get(undefined, options))
}

export async function postApiV2IntegrationAwsValidateCcmConfig(
  args: InferRequestType<typeof client.api.v2.integration.aws.validate_ccm_config.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.integration.aws.validate_ccm_config.$post(args, options))
}

export async function getApiV2IntegrationGcpAccounts(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.integration.gcp.accounts.$get(undefined, options))
}

export async function postApiV2IntegrationGcpAccounts(
  args: InferRequestType<typeof client.api.v2.integration.gcp.accounts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.integration.gcp.accounts.$post(args, options))
}

export async function deleteApiV2IntegrationGcpAccountsAccountId(
  args: InferRequestType<(typeof client.api.v2.integration.gcp.accounts)[':account_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.integration.gcp.accounts[':account_id'].$delete(args, options),
  )
}

export async function patchApiV2IntegrationGcpAccountsAccountId(
  args: InferRequestType<(typeof client.api.v2.integration.gcp.accounts)[':account_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.integration.gcp.accounts[':account_id'].$patch(args, options),
  )
}

export async function getApiV2IntegrationGcpStsDelegate(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.integration.gcp.sts_delegate.$get(undefined, options))
}

export async function postApiV2IntegrationGcpStsDelegate(
  args: InferRequestType<typeof client.api.v2.integration.gcp.sts_delegate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.integration.gcp.sts_delegate.$post(args, options))
}

export async function getApiV2IntegrationGoogleChatOrganizations(options?: ClientRequestOptions) {
  return await parseResponse(
    client.api.v2.integration['google-chat'].organizations.$get(undefined, options),
  )
}

export async function getApiV2IntegrationGoogleChatOrganizationsAppNamedSpacesDomainNameSpaceDisplayName(
  args: InferRequestType<
    (typeof client.api.v2.integration)['google-chat']['organizations']['app']['named-spaces'][':domain_name'][':space_display_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.integration['google-chat'].organizations.app['named-spaces'][':domain_name'][
      ':space_display_name'
    ].$get(args, options),
  )
}

export async function getApiV2IntegrationGoogleChatOrganizationsOrganizationBindingId(
  args: InferRequestType<
    (typeof client.api.v2.integration)['google-chat']['organizations'][':organization_binding_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.integration['google-chat'].organizations[':organization_binding_id'].$get(
      args,
      options,
    ),
  )
}

export async function deleteApiV2IntegrationGoogleChatOrganizationsOrganizationBindingId(
  args: InferRequestType<
    (typeof client.api.v2.integration)['google-chat']['organizations'][':organization_binding_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.integration['google-chat'].organizations[':organization_binding_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getApiV2IntegrationGoogleChatOrganizationsOrganizationBindingIdDelegatedUser(
  args: InferRequestType<
    (typeof client.api.v2.integration)['google-chat']['organizations'][':organization_binding_id']['delegated-user']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.integration['google-chat'].organizations[':organization_binding_id'][
      'delegated-user'
    ].$get(args, options),
  )
}

export async function deleteApiV2IntegrationGoogleChatOrganizationsOrganizationBindingIdDelegatedUser(
  args: InferRequestType<
    (typeof client.api.v2.integration)['google-chat']['organizations'][':organization_binding_id']['delegated-user']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.integration['google-chat'].organizations[':organization_binding_id'][
      'delegated-user'
    ].$delete(args, options),
  )
}

export async function getApiV2IntegrationGoogleChatOrganizationsOrganizationBindingIdOrganizationHandles(
  args: InferRequestType<
    (typeof client.api.v2.integration)['google-chat']['organizations'][':organization_binding_id']['organization-handles']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.integration['google-chat'].organizations[':organization_binding_id'][
      'organization-handles'
    ].$get(args, options),
  )
}

export async function postApiV2IntegrationGoogleChatOrganizationsOrganizationBindingIdOrganizationHandles(
  args: InferRequestType<
    (typeof client.api.v2.integration)['google-chat']['organizations'][':organization_binding_id']['organization-handles']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.integration['google-chat'].organizations[':organization_binding_id'][
      'organization-handles'
    ].$post(args, options),
  )
}

export async function getApiV2IntegrationGoogleChatOrganizationsOrganizationBindingIdOrganizationHandlesHandleId(
  args: InferRequestType<
    (typeof client.api.v2.integration)['google-chat']['organizations'][':organization_binding_id']['organization-handles'][':handle_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.integration['google-chat'].organizations[':organization_binding_id'][
      'organization-handles'
    ][':handle_id'].$get(args, options),
  )
}

export async function deleteApiV2IntegrationGoogleChatOrganizationsOrganizationBindingIdOrganizationHandlesHandleId(
  args: InferRequestType<
    (typeof client.api.v2.integration)['google-chat']['organizations'][':organization_binding_id']['organization-handles'][':handle_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.integration['google-chat'].organizations[':organization_binding_id'][
      'organization-handles'
    ][':handle_id'].$delete(args, options),
  )
}

export async function patchApiV2IntegrationGoogleChatOrganizationsOrganizationBindingIdOrganizationHandlesHandleId(
  args: InferRequestType<
    (typeof client.api.v2.integration)['google-chat']['organizations'][':organization_binding_id']['organization-handles'][':handle_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.integration['google-chat'].organizations[':organization_binding_id'][
      'organization-handles'
    ][':handle_id'].$patch(args, options),
  )
}

export async function getApiV2IntegrationGoogleChatOrganizationsOrganizationBindingIdTargetAudiences(
  args: InferRequestType<
    (typeof client.api.v2.integration)['google-chat']['organizations'][':organization_binding_id']['target-audiences']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.integration['google-chat'].organizations[':organization_binding_id'][
      'target-audiences'
    ].$get(args, options),
  )
}

export async function postApiV2IntegrationGoogleChatOrganizationsOrganizationBindingIdTargetAudiences(
  args: InferRequestType<
    (typeof client.api.v2.integration)['google-chat']['organizations'][':organization_binding_id']['target-audiences']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.integration['google-chat'].organizations[':organization_binding_id'][
      'target-audiences'
    ].$post(args, options),
  )
}

export async function getApiV2IntegrationGoogleChatOrganizationsOrganizationBindingIdTargetAudiencesTargetAudienceId(
  args: InferRequestType<
    (typeof client.api.v2.integration)['google-chat']['organizations'][':organization_binding_id']['target-audiences'][':target_audience_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.integration['google-chat'].organizations[':organization_binding_id'][
      'target-audiences'
    ][':target_audience_id'].$get(args, options),
  )
}

export async function deleteApiV2IntegrationGoogleChatOrganizationsOrganizationBindingIdTargetAudiencesTargetAudienceId(
  args: InferRequestType<
    (typeof client.api.v2.integration)['google-chat']['organizations'][':organization_binding_id']['target-audiences'][':target_audience_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.integration['google-chat'].organizations[':organization_binding_id'][
      'target-audiences'
    ][':target_audience_id'].$delete(args, options),
  )
}

export async function patchApiV2IntegrationGoogleChatOrganizationsOrganizationBindingIdTargetAudiencesTargetAudienceId(
  args: InferRequestType<
    (typeof client.api.v2.integration)['google-chat']['organizations'][':organization_binding_id']['target-audiences'][':target_audience_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.integration['google-chat'].organizations[':organization_binding_id'][
      'target-audiences'
    ][':target_audience_id'].$patch(args, options),
  )
}

export async function getApiV2IntegrationJiraAccounts(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.integration.jira.accounts.$get(undefined, options))
}

export async function deleteApiV2IntegrationJiraAccountsAccountId(
  args: InferRequestType<
    (typeof client.api.v2.integration.jira.accounts)[':account_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.integration.jira.accounts[':account_id'].$delete(args, options),
  )
}

export async function getApiV2IntegrationJiraIssueTemplates(options?: ClientRequestOptions) {
  return await parseResponse(
    client.api.v2.integration.jira['issue-templates'].$get(undefined, options),
  )
}

export async function postApiV2IntegrationJiraIssueTemplates(
  args: InferRequestType<(typeof client.api.v2.integration.jira)['issue-templates']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.integration.jira['issue-templates'].$post(args, options))
}

export async function getApiV2IntegrationJiraIssueTemplatesIssueTemplateId(
  args: InferRequestType<
    (typeof client.api.v2.integration.jira)['issue-templates'][':issue_template_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.integration.jira['issue-templates'][':issue_template_id'].$get(args, options),
  )
}

export async function deleteApiV2IntegrationJiraIssueTemplatesIssueTemplateId(
  args: InferRequestType<
    (typeof client.api.v2.integration.jira)['issue-templates'][':issue_template_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.integration.jira['issue-templates'][':issue_template_id'].$delete(args, options),
  )
}

export async function patchApiV2IntegrationJiraIssueTemplatesIssueTemplateId(
  args: InferRequestType<
    (typeof client.api.v2.integration.jira)['issue-templates'][':issue_template_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.integration.jira['issue-templates'][':issue_template_id'].$patch(args, options),
  )
}

export async function getApiV2IntegrationMsTeamsConfigurationChannelTenantNameTeamNameChannelName(
  args: InferRequestType<
    (typeof client.api.v2.integration)['ms-teams']['configuration']['channel'][':tenant_name'][':team_name'][':channel_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.integration['ms-teams'].configuration.channel[':tenant_name'][':team_name'][
      ':channel_name'
    ].$get(args, options),
  )
}

export async function getApiV2IntegrationMsTeamsConfigurationTenantBasedHandles(
  args: InferRequestType<
    (typeof client.api.v2.integration)['ms-teams']['configuration']['tenant-based-handles']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.integration['ms-teams'].configuration['tenant-based-handles'].$get(args, options),
  )
}

export async function postApiV2IntegrationMsTeamsConfigurationTenantBasedHandles(
  args: InferRequestType<
    (typeof client.api.v2.integration)['ms-teams']['configuration']['tenant-based-handles']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.integration['ms-teams'].configuration['tenant-based-handles'].$post(
      args,
      options,
    ),
  )
}

export async function getApiV2IntegrationMsTeamsConfigurationTenantBasedHandlesHandleId(
  args: InferRequestType<
    (typeof client.api.v2.integration)['ms-teams']['configuration']['tenant-based-handles'][':handle_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.integration['ms-teams'].configuration['tenant-based-handles'][':handle_id'].$get(
      args,
      options,
    ),
  )
}

export async function deleteApiV2IntegrationMsTeamsConfigurationTenantBasedHandlesHandleId(
  args: InferRequestType<
    (typeof client.api.v2.integration)['ms-teams']['configuration']['tenant-based-handles'][':handle_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.integration['ms-teams'].configuration['tenant-based-handles'][
      ':handle_id'
    ].$delete(args, options),
  )
}

export async function patchApiV2IntegrationMsTeamsConfigurationTenantBasedHandlesHandleId(
  args: InferRequestType<
    (typeof client.api.v2.integration)['ms-teams']['configuration']['tenant-based-handles'][':handle_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.integration['ms-teams'].configuration['tenant-based-handles'][
      ':handle_id'
    ].$patch(args, options),
  )
}

export async function deleteApiV2IntegrationMsTeamsConfigurationUserBindingTenantId(
  args: InferRequestType<
    (typeof client.api.v2.integration)['ms-teams']['configuration']['user-binding'][':tenant_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.integration['ms-teams'].configuration['user-binding'][':tenant_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getApiV2IntegrationMsTeamsConfigurationWorkflowsWebhookHandles(
  args: InferRequestType<
    (typeof client.api.v2.integration)['ms-teams']['configuration']['workflows-webhook-handles']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.integration['ms-teams'].configuration['workflows-webhook-handles'].$get(
      args,
      options,
    ),
  )
}

export async function postApiV2IntegrationMsTeamsConfigurationWorkflowsWebhookHandles(
  args: InferRequestType<
    (typeof client.api.v2.integration)['ms-teams']['configuration']['workflows-webhook-handles']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.integration['ms-teams'].configuration['workflows-webhook-handles'].$post(
      args,
      options,
    ),
  )
}

export async function getApiV2IntegrationMsTeamsConfigurationWorkflowsWebhookHandlesHandleId(
  args: InferRequestType<
    (typeof client.api.v2.integration)['ms-teams']['configuration']['workflows-webhook-handles'][':handle_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.integration['ms-teams'].configuration['workflows-webhook-handles'][
      ':handle_id'
    ].$get(args, options),
  )
}

export async function deleteApiV2IntegrationMsTeamsConfigurationWorkflowsWebhookHandlesHandleId(
  args: InferRequestType<
    (typeof client.api.v2.integration)['ms-teams']['configuration']['workflows-webhook-handles'][':handle_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.integration['ms-teams'].configuration['workflows-webhook-handles'][
      ':handle_id'
    ].$delete(args, options),
  )
}

export async function patchApiV2IntegrationMsTeamsConfigurationWorkflowsWebhookHandlesHandleId(
  args: InferRequestType<
    (typeof client.api.v2.integration)['ms-teams']['configuration']['workflows-webhook-handles'][':handle_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.integration['ms-teams'].configuration['workflows-webhook-handles'][
      ':handle_id'
    ].$patch(args, options),
  )
}

export async function getApiV2IntegrationOciProducts(
  args: InferRequestType<typeof client.api.v2.integration.oci.products.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.integration.oci.products.$get(args, options))
}

export async function getApiV2IntegrationOciTenancies(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.integration.oci.tenancies.$get(undefined, options))
}

export async function postApiV2IntegrationOciTenancies(
  args: InferRequestType<typeof client.api.v2.integration.oci.tenancies.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.integration.oci.tenancies.$post(args, options))
}

export async function getApiV2IntegrationOciTenanciesTenancyOcid(
  args: InferRequestType<(typeof client.api.v2.integration.oci.tenancies)[':tenancy_ocid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.integration.oci.tenancies[':tenancy_ocid'].$get(args, options),
  )
}

export async function deleteApiV2IntegrationOciTenanciesTenancyOcid(
  args: InferRequestType<
    (typeof client.api.v2.integration.oci.tenancies)[':tenancy_ocid']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.integration.oci.tenancies[':tenancy_ocid'].$delete(args, options),
  )
}

export async function patchApiV2IntegrationOciTenanciesTenancyOcid(
  args: InferRequestType<
    (typeof client.api.v2.integration.oci.tenancies)[':tenancy_ocid']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.integration.oci.tenancies[':tenancy_ocid'].$patch(args, options),
  )
}

export async function getApiV2IntegrationOpsgenieAccounts(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.integration.opsgenie.accounts.$get(undefined, options))
}

export async function postApiV2IntegrationOpsgenieAccounts(
  args: InferRequestType<typeof client.api.v2.integration.opsgenie.accounts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.integration.opsgenie.accounts.$post(args, options))
}

export async function deleteApiV2IntegrationOpsgenieAccountsAccountId(
  args: InferRequestType<
    (typeof client.api.v2.integration.opsgenie.accounts)[':account_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.integration.opsgenie.accounts[':account_id'].$delete(args, options),
  )
}

export async function patchApiV2IntegrationOpsgenieAccountsAccountId(
  args: InferRequestType<
    (typeof client.api.v2.integration.opsgenie.accounts)[':account_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.integration.opsgenie.accounts[':account_id'].$patch(args, options),
  )
}

export async function getApiV2IntegrationOpsgenieServices(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.integration.opsgenie.services.$get(undefined, options))
}

export async function postApiV2IntegrationOpsgenieServices(
  args: InferRequestType<typeof client.api.v2.integration.opsgenie.services.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.integration.opsgenie.services.$post(args, options))
}

export async function getApiV2IntegrationOpsgenieServicesIntegrationServiceId(
  args: InferRequestType<
    (typeof client.api.v2.integration.opsgenie.services)[':integration_service_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.integration.opsgenie.services[':integration_service_id'].$get(args, options),
  )
}

export async function deleteApiV2IntegrationOpsgenieServicesIntegrationServiceId(
  args: InferRequestType<
    (typeof client.api.v2.integration.opsgenie.services)[':integration_service_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.integration.opsgenie.services[':integration_service_id'].$delete(args, options),
  )
}

export async function patchApiV2IntegrationOpsgenieServicesIntegrationServiceId(
  args: InferRequestType<
    (typeof client.api.v2.integration.opsgenie.services)[':integration_service_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.integration.opsgenie.services[':integration_service_id'].$patch(args, options),
  )
}

export async function getApiV2IntegrationServicenowAssignmentGroupsInstanceId(
  args: InferRequestType<
    (typeof client.api.v2.integration.servicenow.assignment_groups)[':instance_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.integration.servicenow.assignment_groups[':instance_id'].$get(args, options),
  )
}

export async function getApiV2IntegrationServicenowBusinessServicesInstanceId(
  args: InferRequestType<
    (typeof client.api.v2.integration.servicenow.business_services)[':instance_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.integration.servicenow.business_services[':instance_id'].$get(args, options),
  )
}

export async function getApiV2IntegrationServicenowHandles(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.integration.servicenow.handles.$get(undefined, options))
}

export async function postApiV2IntegrationServicenowHandles(
  args: InferRequestType<typeof client.api.v2.integration.servicenow.handles.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.integration.servicenow.handles.$post(args, options))
}

export async function getApiV2IntegrationServicenowHandlesTemplateId(
  args: InferRequestType<
    (typeof client.api.v2.integration.servicenow.handles)[':template_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.integration.servicenow.handles[':template_id'].$get(args, options),
  )
}

export async function putApiV2IntegrationServicenowHandlesTemplateId(
  args: InferRequestType<
    (typeof client.api.v2.integration.servicenow.handles)[':template_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.integration.servicenow.handles[':template_id'].$put(args, options),
  )
}

export async function deleteApiV2IntegrationServicenowHandlesTemplateId(
  args: InferRequestType<
    (typeof client.api.v2.integration.servicenow.handles)[':template_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.integration.servicenow.handles[':template_id'].$delete(args, options),
  )
}

export async function getApiV2IntegrationServicenowInstances(options?: ClientRequestOptions) {
  return await parseResponse(
    client.api.v2.integration.servicenow.instances.$get(undefined, options),
  )
}

export async function getApiV2IntegrationServicenowUsersInstanceId(
  args: InferRequestType<
    (typeof client.api.v2.integration.servicenow.users)[':instance_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.integration.servicenow.users[':instance_id'].$get(args, options),
  )
}

export async function getApiV2IntegrationSlackUserBindings(
  args: InferRequestType<(typeof client.api.v2.integration.slack)['user-bindings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.integration.slack['user-bindings'].$get(args, options))
}

export async function getApiV2IntegrationStatuspageAccount(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.integration.statuspage.account.$get(undefined, options))
}

export async function postApiV2IntegrationStatuspageAccount(
  args: InferRequestType<typeof client.api.v2.integration.statuspage.account.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.integration.statuspage.account.$post(args, options))
}

export async function deleteApiV2IntegrationStatuspageAccount(options?: ClientRequestOptions) {
  return await parseResponse(
    client.api.v2.integration.statuspage.account.$delete(undefined, options),
  )
}

export async function patchApiV2IntegrationStatuspageAccount(
  args: InferRequestType<typeof client.api.v2.integration.statuspage.account.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.integration.statuspage.account.$patch(args, options))
}

export async function getApiV2IntegrationStatuspageUrlSettings(options?: ClientRequestOptions) {
  return await parseResponse(
    client.api.v2.integration.statuspage.url_settings.$get(undefined, options),
  )
}

export async function postApiV2IntegrationStatuspageUrlSettings(
  args: InferRequestType<typeof client.api.v2.integration.statuspage.url_settings.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.integration.statuspage.url_settings.$post(args, options))
}

export async function deleteApiV2IntegrationStatuspageUrlSettingsStatuspageUrlSettingId(
  args: InferRequestType<
    (typeof client.api.v2.integration.statuspage.url_settings)[':statuspage_url_setting_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.integration.statuspage.url_settings[':statuspage_url_setting_id'].$delete(
      args,
      options,
    ),
  )
}

export async function patchApiV2IntegrationStatuspageUrlSettingsStatuspageUrlSettingId(
  args: InferRequestType<
    (typeof client.api.v2.integration.statuspage.url_settings)[':statuspage_url_setting_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.integration.statuspage.url_settings[':statuspage_url_setting_id'].$patch(
      args,
      options,
    ),
  )
}

export async function getApiV2IntegrationWebhooksConfigurationAuthMethod(
  args: InferRequestType<
    (typeof client.api.v2.integration.webhooks.configuration)['auth-method']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.integration.webhooks.configuration['auth-method'].$get(args, options),
  )
}

export async function postApiV2IntegrationWebhooksConfigurationAuthMethodOauth2ClientCredentials(
  args: InferRequestType<
    (typeof client.api.v2.integration.webhooks.configuration)['auth-method']['oauth2-client-credentials']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.integration.webhooks.configuration['auth-method'][
      'oauth2-client-credentials'
    ].$post(args, options),
  )
}

export async function getApiV2IntegrationWebhooksConfigurationAuthMethodOauth2ClientCredentialsAuthMethodId(
  args: InferRequestType<
    (typeof client.api.v2.integration.webhooks.configuration)['auth-method']['oauth2-client-credentials'][':auth_method_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.integration.webhooks.configuration['auth-method']['oauth2-client-credentials'][
      ':auth_method_id'
    ].$get(args, options),
  )
}

export async function deleteApiV2IntegrationWebhooksConfigurationAuthMethodOauth2ClientCredentialsAuthMethodId(
  args: InferRequestType<
    (typeof client.api.v2.integration.webhooks.configuration)['auth-method']['oauth2-client-credentials'][':auth_method_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.integration.webhooks.configuration['auth-method']['oauth2-client-credentials'][
      ':auth_method_id'
    ].$delete(args, options),
  )
}

export async function patchApiV2IntegrationWebhooksConfigurationAuthMethodOauth2ClientCredentialsAuthMethodId(
  args: InferRequestType<
    (typeof client.api.v2.integration.webhooks.configuration)['auth-method']['oauth2-client-credentials'][':auth_method_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.integration.webhooks.configuration['auth-method']['oauth2-client-credentials'][
      ':auth_method_id'
    ].$patch(args, options),
  )
}

export async function getApiV2Integrations(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.integrations.$get(undefined, options))
}

export async function getApiV2IntegrationsCloudflareAccounts(options?: ClientRequestOptions) {
  return await parseResponse(
    client.api.v2.integrations.cloudflare.accounts.$get(undefined, options),
  )
}

export async function postApiV2IntegrationsCloudflareAccounts(
  args: InferRequestType<typeof client.api.v2.integrations.cloudflare.accounts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.integrations.cloudflare.accounts.$post(args, options))
}

export async function getApiV2IntegrationsCloudflareAccountsAccountId(
  args: InferRequestType<
    (typeof client.api.v2.integrations.cloudflare.accounts)[':account_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.integrations.cloudflare.accounts[':account_id'].$get(args, options),
  )
}

export async function deleteApiV2IntegrationsCloudflareAccountsAccountId(
  args: InferRequestType<
    (typeof client.api.v2.integrations.cloudflare.accounts)[':account_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.integrations.cloudflare.accounts[':account_id'].$delete(args, options),
  )
}

export async function patchApiV2IntegrationsCloudflareAccountsAccountId(
  args: InferRequestType<
    (typeof client.api.v2.integrations.cloudflare.accounts)[':account_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.integrations.cloudflare.accounts[':account_id'].$patch(args, options),
  )
}

export async function getApiV2IntegrationsConfluentCloudAccounts(options?: ClientRequestOptions) {
  return await parseResponse(
    client.api.v2.integrations['confluent-cloud'].accounts.$get(undefined, options),
  )
}

export async function postApiV2IntegrationsConfluentCloudAccounts(
  args: InferRequestType<
    (typeof client.api.v2.integrations)['confluent-cloud']['accounts']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.integrations['confluent-cloud'].accounts.$post(args, options),
  )
}

export async function getApiV2IntegrationsConfluentCloudAccountsAccountId(
  args: InferRequestType<
    (typeof client.api.v2.integrations)['confluent-cloud']['accounts'][':account_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.integrations['confluent-cloud'].accounts[':account_id'].$get(args, options),
  )
}

export async function deleteApiV2IntegrationsConfluentCloudAccountsAccountId(
  args: InferRequestType<
    (typeof client.api.v2.integrations)['confluent-cloud']['accounts'][':account_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.integrations['confluent-cloud'].accounts[':account_id'].$delete(args, options),
  )
}

export async function patchApiV2IntegrationsConfluentCloudAccountsAccountId(
  args: InferRequestType<
    (typeof client.api.v2.integrations)['confluent-cloud']['accounts'][':account_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.integrations['confluent-cloud'].accounts[':account_id'].$patch(args, options),
  )
}

export async function getApiV2IntegrationsConfluentCloudAccountsAccountIdResources(
  args: InferRequestType<
    (typeof client.api.v2.integrations)['confluent-cloud']['accounts'][':account_id']['resources']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.integrations['confluent-cloud'].accounts[':account_id'].resources.$get(
      args,
      options,
    ),
  )
}

export async function postApiV2IntegrationsConfluentCloudAccountsAccountIdResources(
  args: InferRequestType<
    (typeof client.api.v2.integrations)['confluent-cloud']['accounts'][':account_id']['resources']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.integrations['confluent-cloud'].accounts[':account_id'].resources.$post(
      args,
      options,
    ),
  )
}

export async function getApiV2IntegrationsConfluentCloudAccountsAccountIdResourcesResourceId(
  args: InferRequestType<
    (typeof client.api.v2.integrations)['confluent-cloud']['accounts'][':account_id']['resources'][':resource_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.integrations['confluent-cloud'].accounts[':account_id'].resources[
      ':resource_id'
    ].$get(args, options),
  )
}

export async function deleteApiV2IntegrationsConfluentCloudAccountsAccountIdResourcesResourceId(
  args: InferRequestType<
    (typeof client.api.v2.integrations)['confluent-cloud']['accounts'][':account_id']['resources'][':resource_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.integrations['confluent-cloud'].accounts[':account_id'].resources[
      ':resource_id'
    ].$delete(args, options),
  )
}

export async function patchApiV2IntegrationsConfluentCloudAccountsAccountIdResourcesResourceId(
  args: InferRequestType<
    (typeof client.api.v2.integrations)['confluent-cloud']['accounts'][':account_id']['resources'][':resource_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.integrations['confluent-cloud'].accounts[':account_id'].resources[
      ':resource_id'
    ].$patch(args, options),
  )
}

export async function getApiV2IntegrationsFastlyAccounts(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.integrations.fastly.accounts.$get(undefined, options))
}

export async function postApiV2IntegrationsFastlyAccounts(
  args: InferRequestType<typeof client.api.v2.integrations.fastly.accounts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.integrations.fastly.accounts.$post(args, options))
}

export async function getApiV2IntegrationsFastlyAccountsAccountId(
  args: InferRequestType<
    (typeof client.api.v2.integrations.fastly.accounts)[':account_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.integrations.fastly.accounts[':account_id'].$get(args, options),
  )
}

export async function deleteApiV2IntegrationsFastlyAccountsAccountId(
  args: InferRequestType<
    (typeof client.api.v2.integrations.fastly.accounts)[':account_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.integrations.fastly.accounts[':account_id'].$delete(args, options),
  )
}

export async function patchApiV2IntegrationsFastlyAccountsAccountId(
  args: InferRequestType<
    (typeof client.api.v2.integrations.fastly.accounts)[':account_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.integrations.fastly.accounts[':account_id'].$patch(args, options),
  )
}

export async function getApiV2IntegrationsFastlyAccountsAccountIdServices(
  args: InferRequestType<
    (typeof client.api.v2.integrations.fastly.accounts)[':account_id']['services']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.integrations.fastly.accounts[':account_id'].services.$get(args, options),
  )
}

export async function postApiV2IntegrationsFastlyAccountsAccountIdServices(
  args: InferRequestType<
    (typeof client.api.v2.integrations.fastly.accounts)[':account_id']['services']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.integrations.fastly.accounts[':account_id'].services.$post(args, options),
  )
}

export async function getApiV2IntegrationsFastlyAccountsAccountIdServicesServiceId(
  args: InferRequestType<
    (typeof client.api.v2.integrations.fastly.accounts)[':account_id']['services'][':service_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.integrations.fastly.accounts[':account_id'].services[':service_id'].$get(
      args,
      options,
    ),
  )
}

export async function deleteApiV2IntegrationsFastlyAccountsAccountIdServicesServiceId(
  args: InferRequestType<
    (typeof client.api.v2.integrations.fastly.accounts)[':account_id']['services'][':service_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.integrations.fastly.accounts[':account_id'].services[':service_id'].$delete(
      args,
      options,
    ),
  )
}

export async function patchApiV2IntegrationsFastlyAccountsAccountIdServicesServiceId(
  args: InferRequestType<
    (typeof client.api.v2.integrations.fastly.accounts)[':account_id']['services'][':service_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.integrations.fastly.accounts[':account_id'].services[':service_id'].$patch(
      args,
      options,
    ),
  )
}

export async function getApiV2IntegrationsOktaAccounts(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.integrations.okta.accounts.$get(undefined, options))
}

export async function postApiV2IntegrationsOktaAccounts(
  args: InferRequestType<typeof client.api.v2.integrations.okta.accounts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.integrations.okta.accounts.$post(args, options))
}

export async function getApiV2IntegrationsOktaAccountsAccountId(
  args: InferRequestType<(typeof client.api.v2.integrations.okta.accounts)[':account_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.integrations.okta.accounts[':account_id'].$get(args, options),
  )
}

export async function deleteApiV2IntegrationsOktaAccountsAccountId(
  args: InferRequestType<
    (typeof client.api.v2.integrations.okta.accounts)[':account_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.integrations.okta.accounts[':account_id'].$delete(args, options),
  )
}

export async function patchApiV2IntegrationsOktaAccountsAccountId(
  args: InferRequestType<
    (typeof client.api.v2.integrations.okta.accounts)[':account_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.integrations.okta.accounts[':account_id'].$patch(args, options),
  )
}

export async function getApiV2IpAllowlist(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.ip_allowlist.$get(undefined, options))
}

export async function patchApiV2IpAllowlist(
  args: InferRequestType<typeof client.api.v2.ip_allowlist.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.ip_allowlist.$patch(args, options))
}

export async function getApiV2LlmObsV1AnnotatedInteractions(
  args: InferRequestType<(typeof client.api.v2)['llm-obs']['v1']['annotated-interactions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['llm-obs'].v1['annotated-interactions'].$get(args, options),
  )
}

export async function getApiV2LlmObsV1AnnotationQueues(
  args: InferRequestType<(typeof client.api.v2)['llm-obs']['v1']['annotation-queues']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['llm-obs'].v1['annotation-queues'].$get(args, options))
}

export async function postApiV2LlmObsV1AnnotationQueues(
  args: InferRequestType<(typeof client.api.v2)['llm-obs']['v1']['annotation-queues']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['llm-obs'].v1['annotation-queues'].$post(args, options))
}

export async function deleteApiV2LlmObsV1AnnotationQueuesQueueId(
  args: InferRequestType<
    (typeof client.api.v2)['llm-obs']['v1']['annotation-queues'][':queue_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['llm-obs'].v1['annotation-queues'][':queue_id'].$delete(args, options),
  )
}

export async function patchApiV2LlmObsV1AnnotationQueuesQueueId(
  args: InferRequestType<
    (typeof client.api.v2)['llm-obs']['v1']['annotation-queues'][':queue_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['llm-obs'].v1['annotation-queues'][':queue_id'].$patch(args, options),
  )
}

export async function getApiV2LlmObsV1AnnotationQueuesQueueIdAnnotatedInteractions(
  args: InferRequestType<
    (typeof client.api.v2)['llm-obs']['v1']['annotation-queues'][':queue_id']['annotated-interactions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['llm-obs'].v1['annotation-queues'][':queue_id']['annotated-interactions'].$get(
      args,
      options,
    ),
  )
}

export async function getApiV2LlmObsV1AnnotationQueuesQueueIdAnnotatedInteractionsInteractionId(
  args: InferRequestType<
    (typeof client.api.v2)['llm-obs']['v1']['annotation-queues'][':queue_id']['annotated-interactions'][':interaction_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['llm-obs'].v1['annotation-queues'][':queue_id']['annotated-interactions'][
      ':interaction_id'
    ].$get(args, options),
  )
}

export async function postApiV2LlmObsV1AnnotationQueuesQueueIdAnnotations(
  args: InferRequestType<
    (typeof client.api.v2)['llm-obs']['v1']['annotation-queues'][':queue_id']['annotations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['llm-obs'].v1['annotation-queues'][':queue_id'].annotations.$post(args, options),
  )
}

export async function postApiV2LlmObsV1AnnotationQueuesQueueIdAnnotationsDelete(
  args: InferRequestType<
    (typeof client.api.v2)['llm-obs']['v1']['annotation-queues'][':queue_id']['annotations']['delete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['llm-obs'].v1['annotation-queues'][':queue_id'].annotations.delete.$post(
      args,
      options,
    ),
  )
}

export async function postApiV2LlmObsV1AnnotationQueuesQueueIdInteractions(
  args: InferRequestType<
    (typeof client.api.v2)['llm-obs']['v1']['annotation-queues'][':queue_id']['interactions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['llm-obs'].v1['annotation-queues'][':queue_id'].interactions.$post(args, options),
  )
}

export async function postApiV2LlmObsV1AnnotationQueuesQueueIdInteractionsDelete(
  args: InferRequestType<
    (typeof client.api.v2)['llm-obs']['v1']['annotation-queues'][':queue_id']['interactions']['delete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['llm-obs'].v1['annotation-queues'][':queue_id'].interactions.delete.$post(
      args,
      options,
    ),
  )
}

export async function getApiV2LlmObsV1AnnotationQueuesQueueIdLabelSchema(
  args: InferRequestType<
    (typeof client.api.v2)['llm-obs']['v1']['annotation-queues'][':queue_id']['label-schema']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['llm-obs'].v1['annotation-queues'][':queue_id']['label-schema'].$get(
      args,
      options,
    ),
  )
}

export async function putApiV2LlmObsV1AnnotationQueuesQueueIdLabelSchema(
  args: InferRequestType<
    (typeof client.api.v2)['llm-obs']['v1']['annotation-queues'][':queue_id']['label-schema']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['llm-obs'].v1['annotation-queues'][':queue_id']['label-schema'].$put(
      args,
      options,
    ),
  )
}

export async function postApiV2LlmObsV1ExperimentationAnalytics(
  args: InferRequestType<
    (typeof client.api.v2)['llm-obs']['v1']['experimentation']['analytics']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['llm-obs'].v1.experimentation.analytics.$post(args, options),
  )
}

export async function postApiV2LlmObsV1ExperimentationSearch(
  args: InferRequestType<
    (typeof client.api.v2)['llm-obs']['v1']['experimentation']['search']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['llm-obs'].v1.experimentation.search.$post(args, options),
  )
}

export async function postApiV2LlmObsV1ExperimentationSimpleSearch(
  args: InferRequestType<
    (typeof client.api.v2)['llm-obs']['v1']['experimentation']['simple-search']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['llm-obs'].v1.experimentation['simple-search'].$post(args, options),
  )
}

export async function getApiV2LlmObsV1Experiments(
  args: InferRequestType<(typeof client.api.v2)['llm-obs']['v1']['experiments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['llm-obs'].v1.experiments.$get(args, options))
}

export async function postApiV2LlmObsV1Experiments(
  args: InferRequestType<(typeof client.api.v2)['llm-obs']['v1']['experiments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['llm-obs'].v1.experiments.$post(args, options))
}

export async function postApiV2LlmObsV1ExperimentsDelete(
  args: InferRequestType<(typeof client.api.v2)['llm-obs']['v1']['experiments']['delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['llm-obs'].v1.experiments.delete.$post(args, options))
}

export async function patchApiV2LlmObsV1ExperimentsExperimentId(
  args: InferRequestType<
    (typeof client.api.v2)['llm-obs']['v1']['experiments'][':experiment_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['llm-obs'].v1.experiments[':experiment_id'].$patch(args, options),
  )
}

export async function getApiV2LlmObsV1ExperimentsExperimentIdEvents(
  args: InferRequestType<
    (typeof client.api.v2)['llm-obs']['v1']['experiments'][':experiment_id']['events']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['llm-obs'].v1.experiments[':experiment_id'].events.$get(args, options),
  )
}

export async function postApiV2LlmObsV1ExperimentsExperimentIdEvents(
  args: InferRequestType<
    (typeof client.api.v2)['llm-obs']['v1']['experiments'][':experiment_id']['events']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['llm-obs'].v1.experiments[':experiment_id'].events.$post(args, options),
  )
}

export async function getApiV2LlmObsV1IntegrationsIntegrationAccounts(
  args: InferRequestType<
    (typeof client.api.v2)['llm-obs']['v1']['integrations'][':integration']['accounts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['llm-obs'].v1.integrations[':integration'].accounts.$get(args, options),
  )
}

export async function postApiV2LlmObsV1IntegrationsIntegrationAccountIdInference(
  args: InferRequestType<
    (typeof client.api.v2)['llm-obs']['v1']['integrations'][':integration'][':account_id']['inference']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['llm-obs'].v1.integrations[':integration'][':account_id'].inference.$post(
      args,
      options,
    ),
  )
}

export async function getApiV2LlmObsV1IntegrationsIntegrationAccountIdModels(
  args: InferRequestType<
    (typeof client.api.v2)['llm-obs']['v1']['integrations'][':integration'][':account_id']['models']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['llm-obs'].v1.integrations[':integration'][':account_id'].models.$get(
      args,
      options,
    ),
  )
}

export async function getApiV2LlmObsV1Projects(
  args: InferRequestType<(typeof client.api.v2)['llm-obs']['v1']['projects']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['llm-obs'].v1.projects.$get(args, options))
}

export async function postApiV2LlmObsV1Projects(
  args: InferRequestType<(typeof client.api.v2)['llm-obs']['v1']['projects']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['llm-obs'].v1.projects.$post(args, options))
}

export async function postApiV2LlmObsV1ProjectsDelete(
  args: InferRequestType<(typeof client.api.v2)['llm-obs']['v1']['projects']['delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['llm-obs'].v1.projects.delete.$post(args, options))
}

export async function patchApiV2LlmObsV1ProjectsProjectId(
  args: InferRequestType<
    (typeof client.api.v2)['llm-obs']['v1']['projects'][':project_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['llm-obs'].v1.projects[':project_id'].$patch(args, options),
  )
}

export async function getApiV2LlmObsV1Prompts(
  args: InferRequestType<(typeof client.api.v2)['llm-obs']['v1']['prompts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['llm-obs'].v1.prompts.$get(args, options))
}

export async function postApiV2LlmObsV1Prompts(
  args: InferRequestType<(typeof client.api.v2)['llm-obs']['v1']['prompts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['llm-obs'].v1.prompts.$post(args, options))
}

export async function getApiV2LlmObsV1PromptsPromptId(
  args: InferRequestType<(typeof client.api.v2)['llm-obs']['v1']['prompts'][':prompt_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['llm-obs'].v1.prompts[':prompt_id'].$get(args, options))
}

export async function deleteApiV2LlmObsV1PromptsPromptId(
  args: InferRequestType<
    (typeof client.api.v2)['llm-obs']['v1']['prompts'][':prompt_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['llm-obs'].v1.prompts[':prompt_id'].$delete(args, options),
  )
}

export async function patchApiV2LlmObsV1PromptsPromptId(
  args: InferRequestType<
    (typeof client.api.v2)['llm-obs']['v1']['prompts'][':prompt_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['llm-obs'].v1.prompts[':prompt_id'].$patch(args, options),
  )
}

export async function getApiV2LlmObsV1PromptsPromptIdVersions(
  args: InferRequestType<
    (typeof client.api.v2)['llm-obs']['v1']['prompts'][':prompt_id']['versions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['llm-obs'].v1.prompts[':prompt_id'].versions.$get(args, options),
  )
}

export async function postApiV2LlmObsV1PromptsPromptIdVersions(
  args: InferRequestType<
    (typeof client.api.v2)['llm-obs']['v1']['prompts'][':prompt_id']['versions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['llm-obs'].v1.prompts[':prompt_id'].versions.$post(args, options),
  )
}

export async function getApiV2LlmObsV1PromptsPromptIdVersionsVersion(
  args: InferRequestType<
    (typeof client.api.v2)['llm-obs']['v1']['prompts'][':prompt_id']['versions'][':version']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['llm-obs'].v1.prompts[':prompt_id'].versions[':version'].$get(args, options),
  )
}

export async function patchApiV2LlmObsV1PromptsPromptIdVersionsVersion(
  args: InferRequestType<
    (typeof client.api.v2)['llm-obs']['v1']['prompts'][':prompt_id']['versions'][':version']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['llm-obs'].v1.prompts[':prompt_id'].versions[':version'].$patch(args, options),
  )
}

export async function getApiV2LlmObsV1SpansEvents(
  args: InferRequestType<(typeof client.api.v2)['llm-obs']['v1']['spans']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['llm-obs'].v1.spans.events.$get(args, options))
}

export async function postApiV2LlmObsV1SpansEventsSearch(
  args: InferRequestType<
    (typeof client.api.v2)['llm-obs']['v1']['spans']['events']['search']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['llm-obs'].v1.spans.events.search.$post(args, options))
}

export async function getApiV2LlmObsV1TopicDiscoveryClusteredPoints(
  args: InferRequestType<
    (typeof client.api.v2)['llm-obs']['v1']['topic-discovery-clustered-points']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['llm-obs'].v1['topic-discovery-clustered-points'].$get(args, options),
  )
}

export async function getApiV2LlmObsV1TopicDiscoveryConfigs(options?: ClientRequestOptions) {
  return await parseResponse(
    client.api.v2['llm-obs'].v1['topic-discovery-configs'].$get(undefined, options),
  )
}

export async function putApiV2LlmObsV1TopicDiscoveryConfigs(
  args: InferRequestType<
    (typeof client.api.v2)['llm-obs']['v1']['topic-discovery-configs']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['llm-obs'].v1['topic-discovery-configs'].$put(args, options),
  )
}

export async function getApiV2LlmObsV1TopicDiscoveryConfigsLatest(options?: ClientRequestOptions) {
  return await parseResponse(
    client.api.v2['llm-obs'].v1['topic-discovery-configs'].latest.$get(undefined, options),
  )
}

export async function deleteApiV2LlmObsV1TopicDiscoveryConfigsConfigId(
  args: InferRequestType<
    (typeof client.api.v2)['llm-obs']['v1']['topic-discovery-configs'][':config_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['llm-obs'].v1['topic-discovery-configs'][':config_id'].$delete(args, options),
  )
}

export async function getApiV2LlmObsV1TopicDiscoveryRuns(
  args: InferRequestType<(typeof client.api.v2)['llm-obs']['v1']['topic-discovery-runs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['llm-obs'].v1['topic-discovery-runs'].$get(args, options),
  )
}

export async function postApiV2LlmObsV1TopicDiscoveryRuns(
  args: InferRequestType<(typeof client.api.v2)['llm-obs']['v1']['topic-discovery-runs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['llm-obs'].v1['topic-discovery-runs'].$post(args, options),
  )
}

export async function getApiV2LlmObsV1TopicDiscoveryRunsStatus(
  args: InferRequestType<
    (typeof client.api.v2)['llm-obs']['v1']['topic-discovery-runs']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['llm-obs'].v1['topic-discovery-runs'].status.$get(args, options),
  )
}

export async function getApiV2LlmObsV1TopicDiscoveryTemplates(options?: ClientRequestOptions) {
  return await parseResponse(
    client.api.v2['llm-obs'].v1['topic-discovery-templates'].$get(undefined, options),
  )
}

export async function getApiV2LlmObsV1TopicDiscoveryTopics(
  args: InferRequestType<(typeof client.api.v2)['llm-obs']['v1']['topic-discovery-topics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['llm-obs'].v1['topic-discovery-topics'].$get(args, options),
  )
}

export async function getApiV2LlmObsV1TopicDiscoveryTopicsWithClusterPoints(
  args: InferRequestType<
    (typeof client.api.v2)['llm-obs']['v1']['topic-discovery-topics']['with-cluster-points']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['llm-obs'].v1['topic-discovery-topics']['with-cluster-points'].$get(
      args,
      options,
    ),
  )
}

export async function getApiV2LlmObsV1ProjectIdDatasets(
  args: InferRequestType<
    (typeof client.api.v2)['llm-obs']['v1'][':project_id']['datasets']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['llm-obs'].v1[':project_id'].datasets.$get(args, options),
  )
}

export async function postApiV2LlmObsV1ProjectIdDatasets(
  args: InferRequestType<
    (typeof client.api.v2)['llm-obs']['v1'][':project_id']['datasets']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['llm-obs'].v1[':project_id'].datasets.$post(args, options),
  )
}

export async function postApiV2LlmObsV1ProjectIdDatasetsDelete(
  args: InferRequestType<
    (typeof client.api.v2)['llm-obs']['v1'][':project_id']['datasets']['delete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['llm-obs'].v1[':project_id'].datasets.delete.$post(args, options),
  )
}

export async function patchApiV2LlmObsV1ProjectIdDatasetsDatasetId(
  args: InferRequestType<
    (typeof client.api.v2)['llm-obs']['v1'][':project_id']['datasets'][':dataset_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['llm-obs'].v1[':project_id'].datasets[':dataset_id'].$patch(args, options),
  )
}

export async function postApiV2LlmObsV1ProjectIdDatasetsDatasetIdBatchUpdate(
  args: InferRequestType<
    (typeof client.api.v2)['llm-obs']['v1'][':project_id']['datasets'][':dataset_id']['batch_update']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['llm-obs'].v1[':project_id'].datasets[':dataset_id'].batch_update.$post(
      args,
      options,
    ),
  )
}

export async function postApiV2LlmObsV1ProjectIdDatasetsDatasetIdClone(
  args: InferRequestType<
    (typeof client.api.v2)['llm-obs']['v1'][':project_id']['datasets'][':dataset_id']['clone']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['llm-obs'].v1[':project_id'].datasets[':dataset_id'].clone.$post(args, options),
  )
}

export async function getApiV2LlmObsV1ProjectIdDatasetsDatasetIdDraftState(
  args: InferRequestType<
    (typeof client.api.v2)['llm-obs']['v1'][':project_id']['datasets'][':dataset_id']['draft_state']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['llm-obs'].v1[':project_id'].datasets[':dataset_id'].draft_state.$get(
      args,
      options,
    ),
  )
}

export async function patchApiV2LlmObsV1ProjectIdDatasetsDatasetIdDraftStateLock(
  args: InferRequestType<
    (typeof client.api.v2)['llm-obs']['v1'][':project_id']['datasets'][':dataset_id']['draft_state']['lock']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['llm-obs'].v1[':project_id'].datasets[':dataset_id'].draft_state.lock.$patch(
      args,
      options,
    ),
  )
}

export async function patchApiV2LlmObsV1ProjectIdDatasetsDatasetIdDraftStateUnlock(
  args: InferRequestType<
    (typeof client.api.v2)['llm-obs']['v1'][':project_id']['datasets'][':dataset_id']['draft_state']['unlock']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['llm-obs'].v1[':project_id'].datasets[':dataset_id'].draft_state.unlock.$patch(
      args,
      options,
    ),
  )
}

export async function getApiV2LlmObsV1ProjectIdDatasetsDatasetIdExport(
  args: InferRequestType<
    (typeof client.api.v2)['llm-obs']['v1'][':project_id']['datasets'][':dataset_id']['export']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['llm-obs'].v1[':project_id'].datasets[':dataset_id'].export.$get(args, options),
  )
}

export async function getApiV2LlmObsV1ProjectIdDatasetsDatasetIdRecords(
  args: InferRequestType<
    (typeof client.api.v2)['llm-obs']['v1'][':project_id']['datasets'][':dataset_id']['records']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['llm-obs'].v1[':project_id'].datasets[':dataset_id'].records.$get(args, options),
  )
}

export async function postApiV2LlmObsV1ProjectIdDatasetsDatasetIdRecords(
  args: InferRequestType<
    (typeof client.api.v2)['llm-obs']['v1'][':project_id']['datasets'][':dataset_id']['records']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['llm-obs'].v1[':project_id'].datasets[':dataset_id'].records.$post(args, options),
  )
}

export async function patchApiV2LlmObsV1ProjectIdDatasetsDatasetIdRecords(
  args: InferRequestType<
    (typeof client.api.v2)['llm-obs']['v1'][':project_id']['datasets'][':dataset_id']['records']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['llm-obs'].v1[':project_id'].datasets[':dataset_id'].records.$patch(
      args,
      options,
    ),
  )
}

export async function postApiV2LlmObsV1ProjectIdDatasetsDatasetIdRecordsDelete(
  args: InferRequestType<
    (typeof client.api.v2)['llm-obs']['v1'][':project_id']['datasets'][':dataset_id']['records']['delete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['llm-obs'].v1[':project_id'].datasets[':dataset_id'].records.delete.$post(
      args,
      options,
    ),
  )
}

export async function postApiV2LlmObsV1ProjectIdDatasetsDatasetIdRestore(
  args: InferRequestType<
    (typeof client.api.v2)['llm-obs']['v1'][':project_id']['datasets'][':dataset_id']['restore']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['llm-obs'].v1[':project_id'].datasets[':dataset_id'].restore.$post(args, options),
  )
}

export async function getApiV2LlmObsV1ProjectIdDatasetsDatasetIdVersions(
  args: InferRequestType<
    (typeof client.api.v2)['llm-obs']['v1'][':project_id']['datasets'][':dataset_id']['versions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['llm-obs'].v1[':project_id'].datasets[':dataset_id'].versions.$get(args, options),
  )
}

export async function getApiV2LlmObsV2ExperimentsExperimentIdEvents(
  args: InferRequestType<
    (typeof client.api.v2)['llm-obs']['v2']['experiments'][':experiment_id']['events']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['llm-obs'].v2.experiments[':experiment_id'].events.$get(args, options),
  )
}

export async function postApiV2LlmObsV2ProjectIdDatasetsDatasetIdRecordsUpload(
  args: InferRequestType<
    (typeof client.api.v2)['llm-obs']['v2'][':project_id']['datasets'][':dataset_id']['records']['upload']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['llm-obs'].v2[':project_id'].datasets[':dataset_id'].records.upload.$post(
      args,
      options,
    ),
  )
}

export async function getApiV2LlmObsV3ExperimentsExperimentIdEvents(
  args: InferRequestType<
    (typeof client.api.v2)['llm-obs']['v3']['experiments'][':experiment_id']['events']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['llm-obs'].v3.experiments[':experiment_id'].events.$get(args, options),
  )
}

export async function putApiV2LoginOrgConfigsMaxSessionDuration(
  args: InferRequestType<typeof client.api.v2.login.org_configs.max_session_duration.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.login.org_configs.max_session_duration.$put(args, options),
  )
}

export async function postApiV2Logs(
  args: InferRequestType<typeof client.api.v2.logs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.logs.$post(args, options))
}

export async function postApiV2LogsAnalyticsAggregate(
  args: InferRequestType<typeof client.api.v2.logs.analytics.aggregate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.logs.analytics.aggregate.$post(args, options))
}

export async function getApiV2LogsArchiveSearches(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.logs.archive_searches.$get(undefined, options))
}

export async function postApiV2LogsArchiveSearches(
  args: InferRequestType<typeof client.api.v2.logs.archive_searches.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.logs.archive_searches.$post(args, options))
}

export async function getApiV2LogsArchiveSearchesArchiveSearchId(
  args: InferRequestType<
    (typeof client.api.v2.logs.archive_searches)[':archive_search_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.logs.archive_searches[':archive_search_id'].$get(args, options),
  )
}

export async function patchApiV2LogsArchiveSearchesArchiveSearchId(
  args: InferRequestType<
    (typeof client.api.v2.logs.archive_searches)[':archive_search_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.logs.archive_searches[':archive_search_id'].$patch(args, options),
  )
}

export async function postApiV2LogsArchiveSearchesArchiveSearchIdCancel(
  args: InferRequestType<
    (typeof client.api.v2.logs.archive_searches)[':archive_search_id']['cancel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.logs.archive_searches[':archive_search_id'].cancel.$post(args, options),
  )
}

export async function getApiV2LogsConfigArchiveOrder(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.logs.config['archive-order'].$get(undefined, options))
}

export async function putApiV2LogsConfigArchiveOrder(
  args: InferRequestType<(typeof client.api.v2.logs.config)['archive-order']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.logs.config['archive-order'].$put(args, options))
}

export async function getApiV2LogsConfigArchives(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.logs.config.archives.$get(undefined, options))
}

export async function postApiV2LogsConfigArchives(
  args: InferRequestType<typeof client.api.v2.logs.config.archives.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.logs.config.archives.$post(args, options))
}

export async function getApiV2LogsConfigArchivesArchiveId(
  args: InferRequestType<(typeof client.api.v2.logs.config.archives)[':archive_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.logs.config.archives[':archive_id'].$get(args, options))
}

export async function putApiV2LogsConfigArchivesArchiveId(
  args: InferRequestType<(typeof client.api.v2.logs.config.archives)[':archive_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.logs.config.archives[':archive_id'].$put(args, options))
}

export async function deleteApiV2LogsConfigArchivesArchiveId(
  args: InferRequestType<(typeof client.api.v2.logs.config.archives)[':archive_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.logs.config.archives[':archive_id'].$delete(args, options),
  )
}

export async function getApiV2LogsConfigArchivesArchiveIdReaders(
  args: InferRequestType<
    (typeof client.api.v2.logs.config.archives)[':archive_id']['readers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.logs.config.archives[':archive_id'].readers.$get(args, options),
  )
}

export async function postApiV2LogsConfigArchivesArchiveIdReaders(
  args: InferRequestType<
    (typeof client.api.v2.logs.config.archives)[':archive_id']['readers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.logs.config.archives[':archive_id'].readers.$post(args, options),
  )
}

export async function deleteApiV2LogsConfigArchivesArchiveIdReaders(
  args: InferRequestType<
    (typeof client.api.v2.logs.config.archives)[':archive_id']['readers']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.logs.config.archives[':archive_id'].readers.$delete(args, options),
  )
}

export async function getApiV2LogsConfigCustomDestinations(options?: ClientRequestOptions) {
  return await parseResponse(
    client.api.v2.logs.config['custom-destinations'].$get(undefined, options),
  )
}

export async function postApiV2LogsConfigCustomDestinations(
  args: InferRequestType<(typeof client.api.v2.logs.config)['custom-destinations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.logs.config['custom-destinations'].$post(args, options))
}

export async function getApiV2LogsConfigCustomDestinationsCustomDestinationId(
  args: InferRequestType<
    (typeof client.api.v2.logs.config)['custom-destinations'][':custom_destination_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.logs.config['custom-destinations'][':custom_destination_id'].$get(args, options),
  )
}

export async function deleteApiV2LogsConfigCustomDestinationsCustomDestinationId(
  args: InferRequestType<
    (typeof client.api.v2.logs.config)['custom-destinations'][':custom_destination_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.logs.config['custom-destinations'][':custom_destination_id'].$delete(
      args,
      options,
    ),
  )
}

export async function patchApiV2LogsConfigCustomDestinationsCustomDestinationId(
  args: InferRequestType<
    (typeof client.api.v2.logs.config)['custom-destinations'][':custom_destination_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.logs.config['custom-destinations'][':custom_destination_id'].$patch(
      args,
      options,
    ),
  )
}

export async function getApiV2LogsConfigMetrics(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.logs.config.metrics.$get(undefined, options))
}

export async function postApiV2LogsConfigMetrics(
  args: InferRequestType<typeof client.api.v2.logs.config.metrics.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.logs.config.metrics.$post(args, options))
}

export async function getApiV2LogsConfigMetricsMetricId(
  args: InferRequestType<(typeof client.api.v2.logs.config.metrics)[':metric_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.logs.config.metrics[':metric_id'].$get(args, options))
}

export async function deleteApiV2LogsConfigMetricsMetricId(
  args: InferRequestType<(typeof client.api.v2.logs.config.metrics)[':metric_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.logs.config.metrics[':metric_id'].$delete(args, options))
}

export async function patchApiV2LogsConfigMetricsMetricId(
  args: InferRequestType<(typeof client.api.v2.logs.config.metrics)[':metric_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.logs.config.metrics[':metric_id'].$patch(args, options))
}

export async function getApiV2LogsConfigRestrictionQueries(
  args: InferRequestType<typeof client.api.v2.logs.config.restriction_queries.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.logs.config.restriction_queries.$get(args, options))
}

export async function postApiV2LogsConfigRestrictionQueries(
  args: InferRequestType<typeof client.api.v2.logs.config.restriction_queries.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.logs.config.restriction_queries.$post(args, options))
}

export async function getApiV2LogsConfigRestrictionQueriesRoleRoleId(
  args: InferRequestType<
    (typeof client.api.v2.logs.config.restriction_queries.role)[':role_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.logs.config.restriction_queries.role[':role_id'].$get(args, options),
  )
}

export async function getApiV2LogsConfigRestrictionQueriesUserUserId(
  args: InferRequestType<
    (typeof client.api.v2.logs.config.restriction_queries.user)[':user_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.logs.config.restriction_queries.user[':user_id'].$get(args, options),
  )
}

export async function getApiV2LogsConfigRestrictionQueriesRestrictionQueryId(
  args: InferRequestType<
    (typeof client.api.v2.logs.config.restriction_queries)[':restriction_query_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.logs.config.restriction_queries[':restriction_query_id'].$get(args, options),
  )
}

export async function putApiV2LogsConfigRestrictionQueriesRestrictionQueryId(
  args: InferRequestType<
    (typeof client.api.v2.logs.config.restriction_queries)[':restriction_query_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.logs.config.restriction_queries[':restriction_query_id'].$put(args, options),
  )
}

export async function deleteApiV2LogsConfigRestrictionQueriesRestrictionQueryId(
  args: InferRequestType<
    (typeof client.api.v2.logs.config.restriction_queries)[':restriction_query_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.logs.config.restriction_queries[':restriction_query_id'].$delete(args, options),
  )
}

export async function patchApiV2LogsConfigRestrictionQueriesRestrictionQueryId(
  args: InferRequestType<
    (typeof client.api.v2.logs.config.restriction_queries)[':restriction_query_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.logs.config.restriction_queries[':restriction_query_id'].$patch(args, options),
  )
}

export async function getApiV2LogsConfigRestrictionQueriesRestrictionQueryIdRoles(
  args: InferRequestType<
    (typeof client.api.v2.logs.config.restriction_queries)[':restriction_query_id']['roles']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.logs.config.restriction_queries[':restriction_query_id'].roles.$get(
      args,
      options,
    ),
  )
}

export async function postApiV2LogsConfigRestrictionQueriesRestrictionQueryIdRoles(
  args: InferRequestType<
    (typeof client.api.v2.logs.config.restriction_queries)[':restriction_query_id']['roles']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.logs.config.restriction_queries[':restriction_query_id'].roles.$post(
      args,
      options,
    ),
  )
}

export async function deleteApiV2LogsConfigRestrictionQueriesRestrictionQueryIdRoles(
  args: InferRequestType<
    (typeof client.api.v2.logs.config.restriction_queries)[':restriction_query_id']['roles']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.logs.config.restriction_queries[':restriction_query_id'].roles.$delete(
      args,
      options,
    ),
  )
}

export async function getApiV2LogsEvents(
  args: InferRequestType<typeof client.api.v2.logs.events.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.logs.events.$get(args, options))
}

export async function postApiV2LogsEventsSearch(
  args: InferRequestType<typeof client.api.v2.logs.events.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.logs.events.search.$post(args, options))
}

export async function getApiV2MaintenanceWindows(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.maintenance_windows.$get(undefined, options))
}

export async function postApiV2MaintenanceWindows(
  args: InferRequestType<typeof client.api.v2.maintenance_windows.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.maintenance_windows.$post(args, options))
}

export async function putApiV2MaintenanceWindowsMaintenanceWindowId(
  args: InferRequestType<
    (typeof client.api.v2.maintenance_windows)[':maintenance_window_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.maintenance_windows[':maintenance_window_id'].$put(args, options),
  )
}

export async function deleteApiV2MaintenanceWindowsMaintenanceWindowId(
  args: InferRequestType<
    (typeof client.api.v2.maintenance_windows)[':maintenance_window_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.maintenance_windows[':maintenance_window_id'].$delete(args, options),
  )
}

export async function getApiV2Metrics(
  args: InferRequestType<typeof client.api.v2.metrics.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.metrics.$get(args, options))
}

export async function postApiV2MetricsDerivedMetrics(
  args: InferRequestType<(typeof client.api.v2.metrics)['derived-metrics']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.metrics['derived-metrics'].$post(args, options))
}

export async function getApiV2MetricsDerivedMetricsMetricName(
  args: InferRequestType<(typeof client.api.v2.metrics)['derived-metrics'][':metric_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.metrics['derived-metrics'][':metric_name'].$get(args, options),
  )
}

export async function putApiV2MetricsDerivedMetricsMetricName(
  args: InferRequestType<(typeof client.api.v2.metrics)['derived-metrics'][':metric_name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.metrics['derived-metrics'][':metric_name'].$put(args, options),
  )
}

export async function deleteApiV2MetricsDerivedMetricsMetricName(
  args: InferRequestType<
    (typeof client.api.v2.metrics)['derived-metrics'][':metric_name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.metrics['derived-metrics'][':metric_name'].$delete(args, options),
  )
}

export async function postApiV2MetricsHistoricalMetricsConfigurations(
  args: InferRequestType<
    (typeof client.api.v2.metrics)['historical-metrics-configurations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.metrics['historical-metrics-configurations'].$post(args, options),
  )
}

export async function getApiV2MetricsHistoricalMetricsConfigurationsMetricName(
  args: InferRequestType<
    (typeof client.api.v2.metrics)['historical-metrics-configurations'][':metric_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.metrics['historical-metrics-configurations'][':metric_name'].$get(args, options),
  )
}

export async function deleteApiV2MetricsHistoricalMetricsConfigurationsMetricName(
  args: InferRequestType<
    (typeof client.api.v2.metrics)['historical-metrics-configurations'][':metric_name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.metrics['historical-metrics-configurations'][':metric_name'].$delete(
      args,
      options,
    ),
  )
}

export async function getApiV2MetricsListTagIndexingRuleExemptions(
  args: InferRequestType<
    (typeof client.api.v2.metrics)['list-tag-indexing-rule-exemptions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.metrics['list-tag-indexing-rule-exemptions'].$get(args, options),
  )
}

export async function getApiV2MetricsTagIndexingRules(
  args: InferRequestType<(typeof client.api.v2.metrics)['tag-indexing-rules']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.metrics['tag-indexing-rules'].$get(args, options))
}

export async function postApiV2MetricsTagIndexingRules(
  args: InferRequestType<(typeof client.api.v2.metrics)['tag-indexing-rules']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.metrics['tag-indexing-rules'].$post(args, options))
}

export async function postApiV2MetricsTagIndexingRulesOrder(
  args: InferRequestType<(typeof client.api.v2.metrics)['tag-indexing-rules']['order']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.metrics['tag-indexing-rules'].order.$post(args, options))
}

export async function getApiV2MetricsTagIndexingRulesId(
  args: InferRequestType<(typeof client.api.v2.metrics)['tag-indexing-rules'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.metrics['tag-indexing-rules'][':id'].$get(args, options))
}

export async function putApiV2MetricsTagIndexingRulesId(
  args: InferRequestType<(typeof client.api.v2.metrics)['tag-indexing-rules'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.metrics['tag-indexing-rules'][':id'].$put(args, options))
}

export async function deleteApiV2MetricsTagIndexingRulesId(
  args: InferRequestType<(typeof client.api.v2.metrics)['tag-indexing-rules'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.metrics['tag-indexing-rules'][':id'].$delete(args, options),
  )
}

export async function getApiV2MetricsMetricNameActiveConfigurations(
  args: InferRequestType<
    (typeof client.api.v2.metrics)[':metric_name']['active-configurations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.metrics[':metric_name']['active-configurations'].$get(args, options),
  )
}

export async function getApiV2MetricsMetricNameAllTags(
  args: InferRequestType<(typeof client.api.v2.metrics)[':metric_name']['all-tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.metrics[':metric_name']['all-tags'].$get(args, options))
}

export async function getApiV2MetricsMetricNameAssets(
  args: InferRequestType<(typeof client.api.v2.metrics)[':metric_name']['assets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.metrics[':metric_name'].assets.$get(args, options))
}

export async function getApiV2MetricsMetricNameEstimate(
  args: InferRequestType<(typeof client.api.v2.metrics)[':metric_name']['estimate']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.metrics[':metric_name'].estimate.$get(args, options))
}

export async function getApiV2MetricsMetricNameTagCardinalities(
  args: InferRequestType<
    (typeof client.api.v2.metrics)[':metric_name']['tag-cardinalities']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.metrics[':metric_name']['tag-cardinalities'].$get(args, options),
  )
}

export async function getApiV2MetricsMetricNameTagIndexingRuleExemptions(
  args: InferRequestType<
    (typeof client.api.v2.metrics)[':metric_name']['tag-indexing-rule-exemptions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.metrics[':metric_name']['tag-indexing-rule-exemptions'].$get(args, options),
  )
}

export async function putApiV2MetricsMetricNameTagIndexingRuleExemptions(
  args: InferRequestType<
    (typeof client.api.v2.metrics)[':metric_name']['tag-indexing-rule-exemptions']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.metrics[':metric_name']['tag-indexing-rule-exemptions'].$put(args, options),
  )
}

export async function postApiV2MetricsMetricNameTagIndexingRuleExemptions(
  args: InferRequestType<
    (typeof client.api.v2.metrics)[':metric_name']['tag-indexing-rule-exemptions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.metrics[':metric_name']['tag-indexing-rule-exemptions'].$post(args, options),
  )
}

export async function deleteApiV2MetricsMetricNameTagIndexingRuleExemptions(
  args: InferRequestType<
    (typeof client.api.v2.metrics)[':metric_name']['tag-indexing-rule-exemptions']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.metrics[':metric_name']['tag-indexing-rule-exemptions'].$delete(args, options),
  )
}

export async function getApiV2MetricsMetricNameTagIndexingRules(
  args: InferRequestType<
    (typeof client.api.v2.metrics)[':metric_name']['tag-indexing-rules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.metrics[':metric_name']['tag-indexing-rules'].$get(args, options),
  )
}

export async function getApiV2MetricsMetricNameTags(
  args: InferRequestType<(typeof client.api.v2.metrics)[':metric_name']['tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.metrics[':metric_name'].tags.$get(args, options))
}

export async function postApiV2MetricsMetricNameTags(
  args: InferRequestType<(typeof client.api.v2.metrics)[':metric_name']['tags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.metrics[':metric_name'].tags.$post(args, options))
}

export async function deleteApiV2MetricsMetricNameTags(
  args: InferRequestType<(typeof client.api.v2.metrics)[':metric_name']['tags']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.metrics[':metric_name'].tags.$delete(args, options))
}

export async function patchApiV2MetricsMetricNameTags(
  args: InferRequestType<(typeof client.api.v2.metrics)[':metric_name']['tags']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.metrics[':metric_name'].tags.$patch(args, options))
}

export async function getApiV2MetricsMetricNameVolumes(
  args: InferRequestType<(typeof client.api.v2.metrics)[':metric_name']['volumes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.metrics[':metric_name'].volumes.$get(args, options))
}

export async function getApiV2ModelGroups(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2['model-groups'].$get(undefined, options))
}

export async function postApiV2ModelGroups(
  args: InferRequestType<(typeof client.api.v2)['model-groups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['model-groups'].$post(args, options))
}

export async function getApiV2ModelGroupsId(
  args: InferRequestType<(typeof client.api.v2)['model-groups'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['model-groups'][':id'].$get(args, options))
}

export async function deleteApiV2ModelGroupsId(
  args: InferRequestType<(typeof client.api.v2)['model-groups'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['model-groups'][':id'].$delete(args, options))
}

export async function patchApiV2ModelGroupsId(
  args: InferRequestType<(typeof client.api.v2)['model-groups'][':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['model-groups'][':id'].$patch(args, options))
}

export async function getApiV2ModelLabApiArtifactsContent(
  args: InferRequestType<(typeof client.api.v2)['model-lab-api']['artifacts']['content']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['model-lab-api'].artifacts.content.$get(args, options))
}

export async function getApiV2ModelLabApiFacetKeys(
  args: InferRequestType<(typeof client.api.v2)['model-lab-api']['facet-keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['model-lab-api']['facet-keys'].$get(args, options))
}

export async function getApiV2ModelLabApiFacetValues(
  args: InferRequestType<(typeof client.api.v2)['model-lab-api']['facet-values']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['model-lab-api']['facet-values'].$get(args, options))
}

export async function getApiV2ModelLabApiProjectFacetKeys(options?: ClientRequestOptions) {
  return await parseResponse(
    client.api.v2['model-lab-api']['project-facet-keys'].$get(undefined, options),
  )
}

export async function getApiV2ModelLabApiProjectFacetValues(
  args: InferRequestType<(typeof client.api.v2)['model-lab-api']['project-facet-values']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['model-lab-api']['project-facet-values'].$get(args, options),
  )
}

export async function getApiV2ModelLabApiProjects(
  args: InferRequestType<(typeof client.api.v2)['model-lab-api']['projects']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['model-lab-api'].projects.$get(args, options))
}

export async function getApiV2ModelLabApiProjectsProjectId(
  args: InferRequestType<
    (typeof client.api.v2)['model-lab-api']['projects'][':project_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['model-lab-api'].projects[':project_id'].$get(args, options),
  )
}

export async function getApiV2ModelLabApiProjectsProjectIdArtifacts(
  args: InferRequestType<
    (typeof client.api.v2)['model-lab-api']['projects'][':project_id']['artifacts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['model-lab-api'].projects[':project_id'].artifacts.$get(args, options),
  )
}

export async function postApiV2ModelLabApiProjectsProjectIdOwnersUserId(
  args: InferRequestType<
    (typeof client.api.v2)['model-lab-api']['projects'][':project_id']['owners'][':user_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['model-lab-api'].projects[':project_id'].owners[':user_id'].$post(args, options),
  )
}

export async function deleteApiV2ModelLabApiProjectsProjectIdOwnersUserId(
  args: InferRequestType<
    (typeof client.api.v2)['model-lab-api']['projects'][':project_id']['owners'][':user_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['model-lab-api'].projects[':project_id'].owners[':user_id'].$delete(
      args,
      options,
    ),
  )
}

export async function postApiV2ModelLabApiProjectsProjectIdStar(
  args: InferRequestType<
    (typeof client.api.v2)['model-lab-api']['projects'][':project_id']['star']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['model-lab-api'].projects[':project_id'].star.$post(args, options),
  )
}

export async function deleteApiV2ModelLabApiProjectsProjectIdStar(
  args: InferRequestType<
    (typeof client.api.v2)['model-lab-api']['projects'][':project_id']['star']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['model-lab-api'].projects[':project_id'].star.$delete(args, options),
  )
}

export async function getApiV2ModelLabApiRuns(
  args: InferRequestType<(typeof client.api.v2)['model-lab-api']['runs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['model-lab-api'].runs.$get(args, options))
}

export async function getApiV2ModelLabApiRunsRunId(
  args: InferRequestType<(typeof client.api.v2)['model-lab-api']['runs'][':run_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['model-lab-api'].runs[':run_id'].$get(args, options))
}

export async function deleteApiV2ModelLabApiRunsRunId(
  args: InferRequestType<(typeof client.api.v2)['model-lab-api']['runs'][':run_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['model-lab-api'].runs[':run_id'].$delete(args, options))
}

export async function getApiV2ModelLabApiRunsRunIdArtifacts(
  args: InferRequestType<
    (typeof client.api.v2)['model-lab-api']['runs'][':run_id']['artifacts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['model-lab-api'].runs[':run_id'].artifacts.$get(args, options),
  )
}

export async function postApiV2ModelLabApiRunsRunIdPin(
  args: InferRequestType<
    (typeof client.api.v2)['model-lab-api']['runs'][':run_id']['pin']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['model-lab-api'].runs[':run_id'].pin.$post(args, options),
  )
}

export async function deleteApiV2ModelLabApiRunsRunIdPin(
  args: InferRequestType<
    (typeof client.api.v2)['model-lab-api']['runs'][':run_id']['pin']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['model-lab-api'].runs[':run_id'].pin.$delete(args, options),
  )
}

export async function getApiV2Models(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.models.$get(undefined, options))
}

export async function getApiV2MonitorNotificationRule(
  args: InferRequestType<typeof client.api.v2.monitor.notification_rule.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.monitor.notification_rule.$get(args, options))
}

export async function postApiV2MonitorNotificationRule(
  args: InferRequestType<typeof client.api.v2.monitor.notification_rule.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.monitor.notification_rule.$post(args, options))
}

export async function getApiV2MonitorNotificationRuleRuleId(
  args: InferRequestType<(typeof client.api.v2.monitor.notification_rule)[':rule_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.monitor.notification_rule[':rule_id'].$get(args, options),
  )
}

export async function deleteApiV2MonitorNotificationRuleRuleId(
  args: InferRequestType<(typeof client.api.v2.monitor.notification_rule)[':rule_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.monitor.notification_rule[':rule_id'].$delete(args, options),
  )
}

export async function patchApiV2MonitorNotificationRuleRuleId(
  args: InferRequestType<(typeof client.api.v2.monitor.notification_rule)[':rule_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.monitor.notification_rule[':rule_id'].$patch(args, options),
  )
}

export async function getApiV2MonitorPolicy(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.monitor.policy.$get(undefined, options))
}

export async function postApiV2MonitorPolicy(
  args: InferRequestType<typeof client.api.v2.monitor.policy.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.monitor.policy.$post(args, options))
}

export async function getApiV2MonitorPolicyPolicyId(
  args: InferRequestType<(typeof client.api.v2.monitor.policy)[':policy_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.monitor.policy[':policy_id'].$get(args, options))
}

export async function deleteApiV2MonitorPolicyPolicyId(
  args: InferRequestType<(typeof client.api.v2.monitor.policy)[':policy_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.monitor.policy[':policy_id'].$delete(args, options))
}

export async function patchApiV2MonitorPolicyPolicyId(
  args: InferRequestType<(typeof client.api.v2.monitor.policy)[':policy_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.monitor.policy[':policy_id'].$patch(args, options))
}

export async function getApiV2MonitorTemplate(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.monitor.template.$get(undefined, options))
}

export async function postApiV2MonitorTemplate(
  args: InferRequestType<typeof client.api.v2.monitor.template.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.monitor.template.$post(args, options))
}

export async function postApiV2MonitorTemplateValidate(
  args: InferRequestType<typeof client.api.v2.monitor.template.validate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.monitor.template.validate.$post(args, options))
}

export async function getApiV2MonitorTemplateTemplateId(
  args: InferRequestType<(typeof client.api.v2.monitor.template)[':template_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.monitor.template[':template_id'].$get(args, options))
}

export async function putApiV2MonitorTemplateTemplateId(
  args: InferRequestType<(typeof client.api.v2.monitor.template)[':template_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.monitor.template[':template_id'].$put(args, options))
}

export async function deleteApiV2MonitorTemplateTemplateId(
  args: InferRequestType<(typeof client.api.v2.monitor.template)[':template_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.monitor.template[':template_id'].$delete(args, options))
}

export async function postApiV2MonitorTemplateTemplateIdValidate(
  args: InferRequestType<
    (typeof client.api.v2.monitor.template)[':template_id']['validate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.monitor.template[':template_id'].validate.$post(args, options),
  )
}

export async function getApiV2MonitorMonitorIdDowntimeMatches(
  args: InferRequestType<(typeof client.api.v2.monitor)[':monitor_id']['downtime_matches']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.monitor[':monitor_id'].downtime_matches.$get(args, options),
  )
}

export async function getApiV2NdmDevices(
  args: InferRequestType<typeof client.api.v2.ndm.devices.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.ndm.devices.$get(args, options))
}

export async function getApiV2NdmDevicesDeviceId(
  args: InferRequestType<(typeof client.api.v2.ndm.devices)[':device_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.ndm.devices[':device_id'].$get(args, options))
}

export async function getApiV2NdmInterfaces(
  args: InferRequestType<typeof client.api.v2.ndm.interfaces.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.ndm.interfaces.$get(args, options))
}

export async function getApiV2NdmTagsDevicesDeviceId(
  args: InferRequestType<(typeof client.api.v2.ndm.tags.devices)[':device_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.ndm.tags.devices[':device_id'].$get(args, options))
}

export async function patchApiV2NdmTagsDevicesDeviceId(
  args: InferRequestType<(typeof client.api.v2.ndm.tags.devices)[':device_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.ndm.tags.devices[':device_id'].$patch(args, options))
}

export async function getApiV2NdmTagsInterfacesInterfaceId(
  args: InferRequestType<(typeof client.api.v2.ndm.tags.interfaces)[':interface_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.ndm.tags.interfaces[':interface_id'].$get(args, options))
}

export async function patchApiV2NdmTagsInterfacesInterfaceId(
  args: InferRequestType<(typeof client.api.v2.ndm.tags.interfaces)[':interface_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.ndm.tags.interfaces[':interface_id'].$patch(args, options),
  )
}

export async function getApiV2NetworkConnectionsAggregate(
  args: InferRequestType<typeof client.api.v2.network.connections.aggregate.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.network.connections.aggregate.$get(args, options))
}

export async function getApiV2NetworkDnsAggregate(
  args: InferRequestType<typeof client.api.v2.network.dns.aggregate.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.network.dns.aggregate.$get(args, options))
}

export async function getApiV2Oauth2WellKnownOpenidConfiguration(options?: ClientRequestOptions) {
  return await parseResponse(
    client.api.v2.oauth2['.well-known']['openid-configuration'].$get(undefined, options),
  )
}

export async function getApiV2Oauth2WellKnownSites(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.oauth2['.well-known'].sites.$get(undefined, options))
}

export async function getApiV2Oauth2ClientsClientUuidScopesRestriction(
  args: InferRequestType<
    (typeof client.api.v2.oauth2.clients)[':client_uuid']['scopes_restriction']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.oauth2.clients[':client_uuid'].scopes_restriction.$get(args, options),
  )
}

export async function postApiV2Oauth2ClientsClientUuidScopesRestriction(
  args: InferRequestType<
    (typeof client.api.v2.oauth2.clients)[':client_uuid']['scopes_restriction']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.oauth2.clients[':client_uuid'].scopes_restriction.$post(args, options),
  )
}

export async function deleteApiV2Oauth2ClientsClientUuidScopesRestriction(
  args: InferRequestType<
    (typeof client.api.v2.oauth2.clients)[':client_uuid']['scopes_restriction']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.oauth2.clients[':client_uuid'].scopes_restriction.$delete(args, options),
  )
}

export async function postApiV2Oauth2Register(
  args: InferRequestType<typeof client.api.v2.oauth2.register.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.oauth2.register.$post(args, options))
}

export async function getApiV2ObsPipelinesPipelines(
  args: InferRequestType<(typeof client.api.v2)['obs-pipelines']['pipelines']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['obs-pipelines'].pipelines.$get(args, options))
}

export async function postApiV2ObsPipelinesPipelines(
  args: InferRequestType<(typeof client.api.v2)['obs-pipelines']['pipelines']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['obs-pipelines'].pipelines.$post(args, options))
}

export async function postApiV2ObsPipelinesPipelinesValidate(
  args: InferRequestType<(typeof client.api.v2)['obs-pipelines']['pipelines']['validate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['obs-pipelines'].pipelines.validate.$post(args, options))
}

export async function getApiV2ObsPipelinesPipelinesPipelineId(
  args: InferRequestType<
    (typeof client.api.v2)['obs-pipelines']['pipelines'][':pipeline_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['obs-pipelines'].pipelines[':pipeline_id'].$get(args, options),
  )
}

export async function putApiV2ObsPipelinesPipelinesPipelineId(
  args: InferRequestType<
    (typeof client.api.v2)['obs-pipelines']['pipelines'][':pipeline_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['obs-pipelines'].pipelines[':pipeline_id'].$put(args, options),
  )
}

export async function deleteApiV2ObsPipelinesPipelinesPipelineId(
  args: InferRequestType<
    (typeof client.api.v2)['obs-pipelines']['pipelines'][':pipeline_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['obs-pipelines'].pipelines[':pipeline_id'].$delete(args, options),
  )
}

export async function getApiV2OnCallEscalationPolicies(
  args: InferRequestType<(typeof client.api.v2)['on-call']['escalation-policies']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['on-call']['escalation-policies'].$get(args, options))
}

export async function postApiV2OnCallEscalationPolicies(
  args: InferRequestType<(typeof client.api.v2)['on-call']['escalation-policies']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['on-call']['escalation-policies'].$post(args, options))
}

export async function getApiV2OnCallEscalationPoliciesPolicyId(
  args: InferRequestType<
    (typeof client.api.v2)['on-call']['escalation-policies'][':policy_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['on-call']['escalation-policies'][':policy_id'].$get(args, options),
  )
}

export async function putApiV2OnCallEscalationPoliciesPolicyId(
  args: InferRequestType<
    (typeof client.api.v2)['on-call']['escalation-policies'][':policy_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['on-call']['escalation-policies'][':policy_id'].$put(args, options),
  )
}

export async function deleteApiV2OnCallEscalationPoliciesPolicyId(
  args: InferRequestType<
    (typeof client.api.v2)['on-call']['escalation-policies'][':policy_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['on-call']['escalation-policies'][':policy_id'].$delete(args, options),
  )
}

export async function getApiV2OnCallPages(
  args: InferRequestType<(typeof client.api.v2)['on-call']['pages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['on-call'].pages.$get(args, options))
}

export async function postApiV2OnCallPages(
  args: InferRequestType<(typeof client.api.v2)['on-call']['pages']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['on-call'].pages.$post(args, options))
}

export async function getApiV2OnCallPagesPageId(
  args: InferRequestType<(typeof client.api.v2)['on-call']['pages'][':page_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['on-call'].pages[':page_id'].$get(args, options))
}

export async function postApiV2OnCallPagesPageIdAcknowledge(
  args: InferRequestType<
    (typeof client.api.v2)['on-call']['pages'][':page_id']['acknowledge']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['on-call'].pages[':page_id'].acknowledge.$post(args, options),
  )
}

export async function postApiV2OnCallPagesPageIdComments(
  args: InferRequestType<
    (typeof client.api.v2)['on-call']['pages'][':page_id']['comments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['on-call'].pages[':page_id'].comments.$post(args, options),
  )
}

export async function postApiV2OnCallPagesPageIdEscalate(
  args: InferRequestType<
    (typeof client.api.v2)['on-call']['pages'][':page_id']['escalate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['on-call'].pages[':page_id'].escalate.$post(args, options),
  )
}

export async function postApiV2OnCallPagesPageIdReroute(
  args: InferRequestType<
    (typeof client.api.v2)['on-call']['pages'][':page_id']['reroute']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['on-call'].pages[':page_id'].reroute.$post(args, options),
  )
}

export async function postApiV2OnCallPagesPageIdResolve(
  args: InferRequestType<
    (typeof client.api.v2)['on-call']['pages'][':page_id']['resolve']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['on-call'].pages[':page_id'].resolve.$post(args, options),
  )
}

export async function getApiV2OnCallSchedules(
  args: InferRequestType<(typeof client.api.v2)['on-call']['schedules']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['on-call'].schedules.$get(args, options))
}

export async function postApiV2OnCallSchedules(
  args: InferRequestType<(typeof client.api.v2)['on-call']['schedules']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['on-call'].schedules.$post(args, options))
}

export async function getApiV2OnCallSchedulesScheduleId(
  args: InferRequestType<(typeof client.api.v2)['on-call']['schedules'][':schedule_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['on-call'].schedules[':schedule_id'].$get(args, options))
}

export async function putApiV2OnCallSchedulesScheduleId(
  args: InferRequestType<(typeof client.api.v2)['on-call']['schedules'][':schedule_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['on-call'].schedules[':schedule_id'].$put(args, options))
}

export async function deleteApiV2OnCallSchedulesScheduleId(
  args: InferRequestType<(typeof client.api.v2)['on-call']['schedules'][':schedule_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['on-call'].schedules[':schedule_id'].$delete(args, options),
  )
}

export async function getApiV2OnCallSchedulesScheduleIdOnCall(
  args: InferRequestType<
    (typeof client.api.v2)['on-call']['schedules'][':schedule_id']['on-call']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['on-call'].schedules[':schedule_id']['on-call'].$get(args, options),
  )
}

export async function getApiV2OnCallSchedulesScheduleIdOverrides(
  args: InferRequestType<
    (typeof client.api.v2)['on-call']['schedules'][':schedule_id']['overrides']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['on-call'].schedules[':schedule_id'].overrides.$get(args, options),
  )
}

export async function postApiV2OnCallSchedulesScheduleIdOverrides(
  args: InferRequestType<
    (typeof client.api.v2)['on-call']['schedules'][':schedule_id']['overrides']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['on-call'].schedules[':schedule_id'].overrides.$post(args, options),
  )
}

export async function deleteApiV2OnCallSchedulesScheduleIdOverridesOverrideId(
  args: InferRequestType<
    (typeof client.api.v2)['on-call']['schedules'][':schedule_id']['overrides'][':override_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['on-call'].schedules[':schedule_id'].overrides[':override_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getApiV2OnCallSchedulesScheduleIdResponders(
  args: InferRequestType<
    (typeof client.api.v2)['on-call']['schedules'][':schedule_id']['responders']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['on-call'].schedules[':schedule_id'].responders.$get(args, options),
  )
}

export async function getApiV2OnCallTeamsTeamIdOnCall(
  args: InferRequestType<(typeof client.api.v2)['on-call']['teams'][':team_id']['on-call']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['on-call'].teams[':team_id']['on-call'].$get(args, options),
  )
}

export async function getApiV2OnCallTeamsTeamIdRoutingRules(
  args: InferRequestType<
    (typeof client.api.v2)['on-call']['teams'][':team_id']['routing-rules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['on-call'].teams[':team_id']['routing-rules'].$get(args, options),
  )
}

export async function putApiV2OnCallTeamsTeamIdRoutingRules(
  args: InferRequestType<
    (typeof client.api.v2)['on-call']['teams'][':team_id']['routing-rules']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['on-call'].teams[':team_id']['routing-rules'].$put(args, options),
  )
}

export async function getApiV2OnCallUsersUserIdNotificationChannels(
  args: InferRequestType<
    (typeof client.api.v2)['on-call']['users'][':user_id']['notification-channels']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['on-call'].users[':user_id']['notification-channels'].$get(args, options),
  )
}

export async function postApiV2OnCallUsersUserIdNotificationChannels(
  args: InferRequestType<
    (typeof client.api.v2)['on-call']['users'][':user_id']['notification-channels']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['on-call'].users[':user_id']['notification-channels'].$post(args, options),
  )
}

export async function getApiV2OnCallUsersUserIdNotificationChannelsChannelId(
  args: InferRequestType<
    (typeof client.api.v2)['on-call']['users'][':user_id']['notification-channels'][':channel_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['on-call'].users[':user_id']['notification-channels'][':channel_id'].$get(
      args,
      options,
    ),
  )
}

export async function deleteApiV2OnCallUsersUserIdNotificationChannelsChannelId(
  args: InferRequestType<
    (typeof client.api.v2)['on-call']['users'][':user_id']['notification-channels'][':channel_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['on-call'].users[':user_id']['notification-channels'][':channel_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getApiV2OnCallUsersUserIdNotificationRules(
  args: InferRequestType<
    (typeof client.api.v2)['on-call']['users'][':user_id']['notification-rules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['on-call'].users[':user_id']['notification-rules'].$get(args, options),
  )
}

export async function postApiV2OnCallUsersUserIdNotificationRules(
  args: InferRequestType<
    (typeof client.api.v2)['on-call']['users'][':user_id']['notification-rules']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['on-call'].users[':user_id']['notification-rules'].$post(args, options),
  )
}

export async function getApiV2OnCallUsersUserIdNotificationRulesRuleId(
  args: InferRequestType<
    (typeof client.api.v2)['on-call']['users'][':user_id']['notification-rules'][':rule_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['on-call'].users[':user_id']['notification-rules'][':rule_id'].$get(
      args,
      options,
    ),
  )
}

export async function putApiV2OnCallUsersUserIdNotificationRulesRuleId(
  args: InferRequestType<
    (typeof client.api.v2)['on-call']['users'][':user_id']['notification-rules'][':rule_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['on-call'].users[':user_id']['notification-rules'][':rule_id'].$put(
      args,
      options,
    ),
  )
}

export async function deleteApiV2OnCallUsersUserIdNotificationRulesRuleId(
  args: InferRequestType<
    (typeof client.api.v2)['on-call']['users'][':user_id']['notification-rules'][':rule_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['on-call'].users[':user_id']['notification-rules'][':rule_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getApiV2Org(
  args: InferRequestType<typeof client.api.v2.org.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.org.$get(args, options))
}

export async function postApiV2OrgDisable(
  args: InferRequestType<typeof client.api.v2.org.disable.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.org.disable.$post(args, options))
}

export async function patchApiV2OrgSamlConfigurations(
  args: InferRequestType<typeof client.api.v2.org.saml_configurations.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.org.saml_configurations.$patch(args, options))
}

export async function getApiV2OrgAuthorizedClients(
  args: InferRequestType<typeof client.api.v2.org_authorized_clients.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.org_authorized_clients.$get(args, options))
}

export async function getApiV2OrgAuthorizedClientsOrgAuthorizedClientId(
  args: InferRequestType<
    (typeof client.api.v2.org_authorized_clients)[':org_authorized_client_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.org_authorized_clients[':org_authorized_client_id'].$get(args, options),
  )
}

export async function deleteApiV2OrgAuthorizedClientsOrgAuthorizedClientId(
  args: InferRequestType<
    (typeof client.api.v2.org_authorized_clients)[':org_authorized_client_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.org_authorized_clients[':org_authorized_client_id'].$delete(args, options),
  )
}

export async function patchApiV2OrgAuthorizedClientsOrgAuthorizedClientId(
  args: InferRequestType<
    (typeof client.api.v2.org_authorized_clients)[':org_authorized_client_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.org_authorized_clients[':org_authorized_client_id'].$patch(args, options),
  )
}

export async function deleteApiV2OrgAuthorizedClientsOrgAuthorizedClientIdUserUserId(
  args: InferRequestType<
    (typeof client.api.v2.org_authorized_clients)[':org_authorized_client_id']['user'][':user_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.org_authorized_clients[':org_authorized_client_id'].user[':user_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getApiV2OrgAuthorizedClientsOrgAuthorizedClientIdUserAuthorizedClients(
  args: InferRequestType<
    (typeof client.api.v2.org_authorized_clients)[':org_authorized_client_id']['user_authorized_clients']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.org_authorized_clients[':org_authorized_client_id'].user_authorized_clients.$get(
      args,
      options,
    ),
  )
}

export async function deleteApiV2OrgAuthorizedClientsOrgAuthorizedClientIdUserAuthorizedClientsUserAuthorizedClientId(
  args: InferRequestType<
    (typeof client.api.v2.org_authorized_clients)[':org_authorized_client_id']['user_authorized_clients'][':user_authorized_client_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.org_authorized_clients[':org_authorized_client_id'].user_authorized_clients[
      ':user_authorized_client_id'
    ].$delete(args, options),
  )
}

export async function getApiV2OrgConfigs(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.org_configs.$get(undefined, options))
}

export async function getApiV2OrgConfigsOrgConfigName(
  args: InferRequestType<(typeof client.api.v2.org_configs)[':org_config_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.org_configs[':org_config_name'].$get(args, options))
}

export async function patchApiV2OrgConfigsOrgConfigName(
  args: InferRequestType<(typeof client.api.v2.org_configs)[':org_config_name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.org_configs[':org_config_name'].$patch(args, options))
}

export async function getApiV2OrgConnections(
  args: InferRequestType<typeof client.api.v2.org_connections.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.org_connections.$get(args, options))
}

export async function postApiV2OrgConnections(
  args: InferRequestType<typeof client.api.v2.org_connections.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.org_connections.$post(args, options))
}

export async function deleteApiV2OrgConnectionsConnectionId(
  args: InferRequestType<(typeof client.api.v2.org_connections)[':connection_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.org_connections[':connection_id'].$delete(args, options))
}

export async function patchApiV2OrgConnectionsConnectionId(
  args: InferRequestType<(typeof client.api.v2.org_connections)[':connection_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.org_connections[':connection_id'].$patch(args, options))
}

export async function getApiV2OrgGroupMemberships(
  args: InferRequestType<typeof client.api.v2.org_group_memberships.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.org_group_memberships.$get(args, options))
}

export async function postApiV2OrgGroupMemberships(
  args: InferRequestType<typeof client.api.v2.org_group_memberships.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.org_group_memberships.$post(args, options))
}

export async function patchApiV2OrgGroupMembershipsBulk(
  args: InferRequestType<typeof client.api.v2.org_group_memberships.bulk.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.org_group_memberships.bulk.$patch(args, options))
}

export async function postApiV2OrgGroupMembershipsBulkDelete(
  args: InferRequestType<typeof client.api.v2.org_group_memberships.bulk_delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.org_group_memberships.bulk_delete.$post(args, options))
}

export async function getApiV2OrgGroupMembershipsOrgGroupMembershipId(
  args: InferRequestType<
    (typeof client.api.v2.org_group_memberships)[':org_group_membership_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.org_group_memberships[':org_group_membership_id'].$get(args, options),
  )
}

export async function deleteApiV2OrgGroupMembershipsOrgGroupMembershipId(
  args: InferRequestType<
    (typeof client.api.v2.org_group_memberships)[':org_group_membership_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.org_group_memberships[':org_group_membership_id'].$delete(args, options),
  )
}

export async function patchApiV2OrgGroupMembershipsOrgGroupMembershipId(
  args: InferRequestType<
    (typeof client.api.v2.org_group_memberships)[':org_group_membership_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.org_group_memberships[':org_group_membership_id'].$patch(args, options),
  )
}

export async function getApiV2OrgGroupPolicies(
  args: InferRequestType<typeof client.api.v2.org_group_policies.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.org_group_policies.$get(args, options))
}

export async function postApiV2OrgGroupPolicies(
  args: InferRequestType<typeof client.api.v2.org_group_policies.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.org_group_policies.$post(args, options))
}

export async function getApiV2OrgGroupPoliciesOrgGroupPolicyId(
  args: InferRequestType<(typeof client.api.v2.org_group_policies)[':org_group_policy_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.org_group_policies[':org_group_policy_id'].$get(args, options),
  )
}

export async function deleteApiV2OrgGroupPoliciesOrgGroupPolicyId(
  args: InferRequestType<
    (typeof client.api.v2.org_group_policies)[':org_group_policy_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.org_group_policies[':org_group_policy_id'].$delete(args, options),
  )
}

export async function patchApiV2OrgGroupPoliciesOrgGroupPolicyId(
  args: InferRequestType<
    (typeof client.api.v2.org_group_policies)[':org_group_policy_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.org_group_policies[':org_group_policy_id'].$patch(args, options),
  )
}

export async function getApiV2OrgGroupPolicyConfigs(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.org_group_policy_configs.$get(undefined, options))
}

export async function getApiV2OrgGroupPolicyOverrides(
  args: InferRequestType<typeof client.api.v2.org_group_policy_overrides.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.org_group_policy_overrides.$get(args, options))
}

export async function postApiV2OrgGroupPolicyOverrides(
  args: InferRequestType<typeof client.api.v2.org_group_policy_overrides.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.org_group_policy_overrides.$post(args, options))
}

export async function getApiV2OrgGroupPolicyOverridesOrgGroupPolicyOverrideId(
  args: InferRequestType<
    (typeof client.api.v2.org_group_policy_overrides)[':org_group_policy_override_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.org_group_policy_overrides[':org_group_policy_override_id'].$get(args, options),
  )
}

export async function deleteApiV2OrgGroupPolicyOverridesOrgGroupPolicyOverrideId(
  args: InferRequestType<
    (typeof client.api.v2.org_group_policy_overrides)[':org_group_policy_override_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.org_group_policy_overrides[':org_group_policy_override_id'].$delete(
      args,
      options,
    ),
  )
}

export async function patchApiV2OrgGroupPolicyOverridesOrgGroupPolicyOverrideId(
  args: InferRequestType<
    (typeof client.api.v2.org_group_policy_overrides)[':org_group_policy_override_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.org_group_policy_overrides[':org_group_policy_override_id'].$patch(args, options),
  )
}

export async function getApiV2OrgGroupPolicySuggestions(
  args: InferRequestType<typeof client.api.v2.org_group_policy_suggestions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.org_group_policy_suggestions.$get(args, options))
}

export async function getApiV2OrgGroups(
  args: InferRequestType<typeof client.api.v2.org_groups.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.org_groups.$get(args, options))
}

export async function postApiV2OrgGroups(
  args: InferRequestType<typeof client.api.v2.org_groups.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.org_groups.$post(args, options))
}

export async function getApiV2OrgGroupsOrgGroupId(
  args: InferRequestType<(typeof client.api.v2.org_groups)[':org_group_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.org_groups[':org_group_id'].$get(args, options))
}

export async function deleteApiV2OrgGroupsOrgGroupId(
  args: InferRequestType<(typeof client.api.v2.org_groups)[':org_group_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.org_groups[':org_group_id'].$delete(args, options))
}

export async function patchApiV2OrgGroupsOrgGroupId(
  args: InferRequestType<(typeof client.api.v2.org_groups)[':org_group_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.org_groups[':org_group_id'].$patch(args, options))
}

export async function getApiV2Permissions(
  args: InferRequestType<typeof client.api.v2.permissions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.permissions.$get(args, options))
}

export async function getApiV2PersonalAccessTokens(
  args: InferRequestType<typeof client.api.v2.personal_access_tokens.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.personal_access_tokens.$get(args, options))
}

export async function postApiV2PersonalAccessTokens(
  args: InferRequestType<typeof client.api.v2.personal_access_tokens.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.personal_access_tokens.$post(args, options))
}

export async function getApiV2PersonalAccessTokensTokenId(
  args: InferRequestType<(typeof client.api.v2.personal_access_tokens)[':token_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.personal_access_tokens[':token_id'].$get(args, options))
}

export async function deleteApiV2PersonalAccessTokensTokenId(
  args: InferRequestType<(typeof client.api.v2.personal_access_tokens)[':token_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.personal_access_tokens[':token_id'].$delete(args, options),
  )
}

export async function patchApiV2PersonalAccessTokensTokenId(
  args: InferRequestType<(typeof client.api.v2.personal_access_tokens)[':token_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.personal_access_tokens[':token_id'].$patch(args, options),
  )
}

export async function getApiV2Policies(
  args: InferRequestType<typeof client.api.v2.policies.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.policies.$get(args, options))
}

export async function postApiV2Policies(
  args: InferRequestType<typeof client.api.v2.policies.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.policies.$post(args, options))
}

export async function getApiV2PoliciesInbound(
  args: InferRequestType<(typeof client.api.v2.policies)[':inbound']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.policies[':inbound'].$get(args, options))
}

export async function deleteApiV2PoliciesInbound(
  args: InferRequestType<(typeof client.api.v2.policies)[':inbound']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.policies[':inbound'].$delete(args, options))
}

export async function getApiV2PostureManagementFindings(
  args: InferRequestType<typeof client.api.v2.posture_management.findings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.posture_management.findings.$get(args, options))
}

export async function getApiV2PostureManagementFindingsFindingId(
  args: InferRequestType<(typeof client.api.v2.posture_management.findings)[':finding_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.posture_management.findings[':finding_id'].$get(args, options),
  )
}

export async function getApiV2Powerpacks(
  args: InferRequestType<typeof client.api.v2.powerpacks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.powerpacks.$get(args, options))
}

export async function postApiV2Powerpacks(
  args: InferRequestType<typeof client.api.v2.powerpacks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.powerpacks.$post(args, options))
}

export async function getApiV2PowerpacksPowerpackId(
  args: InferRequestType<(typeof client.api.v2.powerpacks)[':powerpack_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.powerpacks[':powerpack_id'].$get(args, options))
}

export async function deleteApiV2PowerpacksPowerpackId(
  args: InferRequestType<(typeof client.api.v2.powerpacks)[':powerpack_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.powerpacks[':powerpack_id'].$delete(args, options))
}

export async function patchApiV2PowerpacksPowerpackId(
  args: InferRequestType<(typeof client.api.v2.powerpacks)[':powerpack_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.powerpacks[':powerpack_id'].$patch(args, options))
}

export async function getApiV2Processes(
  args: InferRequestType<typeof client.api.v2.processes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.processes.$get(args, options))
}

export async function postApiV2Prodlytics(
  args: InferRequestType<typeof client.api.v2.prodlytics.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.prodlytics.$post(args, options))
}

export async function postApiV2ProductAnalyticsAccountsFacetInfo(
  args: InferRequestType<
    (typeof client.api.v2)['product-analytics']['accounts']['facet_info']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['product-analytics'].accounts.facet_info.$post(args, options),
  )
}

export async function postApiV2ProductAnalyticsAccountsQuery(
  args: InferRequestType<(typeof client.api.v2)['product-analytics']['accounts']['query']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['product-analytics'].accounts.query.$post(args, options))
}

export async function postApiV2ProductAnalyticsAnalyticsList(
  args: InferRequestType<(typeof client.api.v2)['product-analytics']['analytics']['list']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['product-analytics'].analytics.list.$post(args, options))
}

export async function postApiV2ProductAnalyticsAnalyticsScalar(
  args: InferRequestType<
    (typeof client.api.v2)['product-analytics']['analytics']['scalar']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['product-analytics'].analytics.scalar.$post(args, options),
  )
}

export async function postApiV2ProductAnalyticsAnalyticsTimeseries(
  args: InferRequestType<
    (typeof client.api.v2)['product-analytics']['analytics']['timeseries']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['product-analytics'].analytics.timeseries.$post(args, options),
  )
}

export async function postApiV2ProductAnalyticsJourneyFunnel(
  args: InferRequestType<(typeof client.api.v2)['product-analytics']['journey']['funnel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['product-analytics'].journey.funnel.$post(args, options))
}

export async function postApiV2ProductAnalyticsJourneyList(
  args: InferRequestType<(typeof client.api.v2)['product-analytics']['journey']['list']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['product-analytics'].journey.list.$post(args, options))
}

export async function postApiV2ProductAnalyticsJourneyScalar(
  args: InferRequestType<(typeof client.api.v2)['product-analytics']['journey']['scalar']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['product-analytics'].journey.scalar.$post(args, options))
}

export async function postApiV2ProductAnalyticsJourneyTimeseries(
  args: InferRequestType<
    (typeof client.api.v2)['product-analytics']['journey']['timeseries']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['product-analytics'].journey.timeseries.$post(args, options),
  )
}

export async function postApiV2ProductAnalyticsRetentionGrid(
  args: InferRequestType<(typeof client.api.v2)['product-analytics']['retention']['grid']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['product-analytics'].retention.grid.$post(args, options))
}

export async function postApiV2ProductAnalyticsRetentionList(
  args: InferRequestType<(typeof client.api.v2)['product-analytics']['retention']['list']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['product-analytics'].retention.list.$post(args, options))
}

export async function postApiV2ProductAnalyticsRetentionScalar(
  args: InferRequestType<
    (typeof client.api.v2)['product-analytics']['retention']['scalar']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['product-analytics'].retention.scalar.$post(args, options),
  )
}

export async function postApiV2ProductAnalyticsRetentionTimeseries(
  args: InferRequestType<
    (typeof client.api.v2)['product-analytics']['retention']['timeseries']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['product-analytics'].retention.timeseries.$post(args, options),
  )
}

export async function postApiV2ProductAnalyticsSankey(
  args: InferRequestType<(typeof client.api.v2)['product-analytics']['sankey']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['product-analytics'].sankey.$post(args, options))
}

export async function postApiV2ProductAnalyticsUsersEventFilteredQuery(
  args: InferRequestType<
    (typeof client.api.v2)['product-analytics']['users']['event_filtered_query']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['product-analytics'].users.event_filtered_query.$post(args, options),
  )
}

export async function postApiV2ProductAnalyticsUsersFacetInfo(
  args: InferRequestType<
    (typeof client.api.v2)['product-analytics']['users']['facet_info']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['product-analytics'].users.facet_info.$post(args, options),
  )
}

export async function postApiV2ProductAnalyticsUsersQuery(
  args: InferRequestType<(typeof client.api.v2)['product-analytics']['users']['query']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['product-analytics'].users.query.$post(args, options))
}

export async function deleteApiV2ProductAnalyticsUsersUserId(
  args: InferRequestType<
    (typeof client.api.v2)['product-analytics']['users'][':user_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['product-analytics'].users[':user_id'].$delete(args, options),
  )
}

export async function getApiV2ProductAnalyticsEntityMapping(
  args: InferRequestType<(typeof client.api.v2)['product-analytics'][':entity']['mapping']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['product-analytics'][':entity'].mapping.$get(args, options),
  )
}

export async function putApiV2ProductAnalyticsEntityMappingConnection(
  args: InferRequestType<
    (typeof client.api.v2)['product-analytics'][':entity']['mapping']['connection']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['product-analytics'][':entity'].mapping.connection.$put(args, options),
  )
}

export async function postApiV2ProductAnalyticsEntityMappingConnection(
  args: InferRequestType<
    (typeof client.api.v2)['product-analytics'][':entity']['mapping']['connection']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['product-analytics'][':entity'].mapping.connection.$post(args, options),
  )
}

export async function deleteApiV2ProductAnalyticsEntityMappingConnectionId(
  args: InferRequestType<
    (typeof client.api.v2)['product-analytics'][':entity']['mapping']['connection'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['product-analytics'][':entity'].mapping.connection[':id'].$delete(args, options),
  )
}

export async function getApiV2ProductAnalyticsEntityMappingConnections(
  args: InferRequestType<
    (typeof client.api.v2)['product-analytics'][':entity']['mapping']['connections']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['product-analytics'][':entity'].mapping.connections.$get(args, options),
  )
}

export async function getApiV2ProductCatalogSkus(
  args: InferRequestType<(typeof client.api.v2)['product-catalog']['skus']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['product-catalog'].skus.$get(args, options))
}

export async function getApiV2ProviderModels(
  args: InferRequestType<(typeof client.api.v2)['provider-models']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['provider-models'].$get(args, options))
}

export async function getApiV2Providers(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.providers.$get(undefined, options))
}

export async function postApiV2Providers(
  args: InferRequestType<typeof client.api.v2.providers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.providers.$post(args, options))
}

export async function getApiV2ProvidersId(
  args: InferRequestType<(typeof client.api.v2.providers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.providers[':id'].$get(args, options))
}

export async function deleteApiV2ProvidersId(
  args: InferRequestType<(typeof client.api.v2.providers)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.providers[':id'].$delete(args, options))
}

export async function patchApiV2ProvidersId(
  args: InferRequestType<(typeof client.api.v2.providers)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.providers[':id'].$patch(args, options))
}

export async function getApiV2ProvidersProviderIdModels(
  args: InferRequestType<(typeof client.api.v2.providers)[':provider_id']['models']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.providers[':provider_id'].models.$get(args, options))
}

export async function postApiV2ProvidersProviderIdModels(
  args: InferRequestType<(typeof client.api.v2.providers)[':provider_id']['models']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.providers[':provider_id'].models.$post(args, options))
}

export async function postApiV2ProvidersProviderIdModelsBulk(
  args: InferRequestType<
    (typeof client.api.v2.providers)[':provider_id']['models']['bulk']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.providers[':provider_id'].models.bulk.$post(args, options),
  )
}

export async function deleteApiV2ProvidersProviderIdModelsCanonical(
  args: InferRequestType<
    (typeof client.api.v2.providers)[':provider_id']['models'][':canonical']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.providers[':provider_id'].models[':canonical'].$delete(args, options),
  )
}

export async function patchApiV2ProvidersProviderIdModelsCanonical(
  args: InferRequestType<
    (typeof client.api.v2.providers)[':provider_id']['models'][':canonical']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.providers[':provider_id'].models[':canonical'].$patch(args, options),
  )
}

export async function getApiV2ProvidersProviderIdModelsCanonicalPricing(
  args: InferRequestType<
    (typeof client.api.v2.providers)[':provider_id']['models'][':canonical']['pricing']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.providers[':provider_id'].models[':canonical'].pricing.$get(args, options),
  )
}

export async function putApiV2ProvidersProviderIdModelsCanonicalPricing(
  args: InferRequestType<
    (typeof client.api.v2.providers)[':provider_id']['models'][':canonical']['pricing']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.providers[':provider_id'].models[':canonical'].pricing.$put(args, options),
  )
}

export async function deleteApiV2ProvidersProviderIdModelsCanonicalPricing(
  args: InferRequestType<
    (typeof client.api.v2.providers)[':provider_id']['models'][':canonical']['pricing']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.providers[':provider_id'].models[':canonical'].pricing.$delete(args, options),
  )
}

export async function getApiV2PrunedTraceTraceId(
  args: InferRequestType<(typeof client.api.v2.pruned_trace)[':trace_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.pruned_trace[':trace_id'].$get(args, options))
}

export async function postApiV2QueryScalar(
  args: InferRequestType<typeof client.api.v2.query.scalar.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.query.scalar.$post(args, options))
}

export async function postApiV2QueryTimeseries(
  args: InferRequestType<typeof client.api.v2.query.timeseries.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.query.timeseries.$post(args, options))
}

export async function getApiV2RateLimits(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2['rate-limits'].$get(undefined, options))
}

export async function postApiV2RateLimits(
  args: InferRequestType<(typeof client.api.v2)['rate-limits']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['rate-limits'].$post(args, options))
}

export async function getApiV2RateLimitsInstancesSummary(options?: ClientRequestOptions) {
  return await parseResponse(
    client.api.v2['rate-limits'].instances.summary.$get(undefined, options),
  )
}

export async function getApiV2RateLimitsUsage(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2['rate-limits'].usage.$get(undefined, options))
}

export async function getApiV2RateLimitsId(
  args: InferRequestType<(typeof client.api.v2)['rate-limits'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['rate-limits'][':id'].$get(args, options))
}

export async function deleteApiV2RateLimitsId(
  args: InferRequestType<(typeof client.api.v2)['rate-limits'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['rate-limits'][':id'].$delete(args, options))
}

export async function patchApiV2RateLimitsId(
  args: InferRequestType<(typeof client.api.v2)['rate-limits'][':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['rate-limits'][':id'].$patch(args, options))
}

export async function getApiV2RateLimitsIdInstances(
  args: InferRequestType<(typeof client.api.v2)['rate-limits'][':id']['instances']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['rate-limits'][':id'].instances.$get(args, options))
}

export async function getApiV2RateLimitsIdInstancesSummary(
  args: InferRequestType<
    (typeof client.api.v2)['rate-limits'][':id']['instances']['summary']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['rate-limits'][':id'].instances.summary.$get(args, options),
  )
}

export async function postApiV2ReferenceTablesQueriesBatchRows(
  args: InferRequestType<
    (typeof client.api.v2)['reference-tables']['queries']['batch-rows']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['reference-tables'].queries['batch-rows'].$post(args, options),
  )
}

export async function getApiV2ReferenceTablesTables(
  args: InferRequestType<(typeof client.api.v2)['reference-tables']['tables']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['reference-tables'].tables.$get(args, options))
}

export async function postApiV2ReferenceTablesTables(
  args: InferRequestType<(typeof client.api.v2)['reference-tables']['tables']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['reference-tables'].tables.$post(args, options))
}

export async function getApiV2ReferenceTablesTablesId(
  args: InferRequestType<(typeof client.api.v2)['reference-tables']['tables'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['reference-tables'].tables[':id'].$get(args, options))
}

export async function deleteApiV2ReferenceTablesTablesId(
  args: InferRequestType<(typeof client.api.v2)['reference-tables']['tables'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['reference-tables'].tables[':id'].$delete(args, options))
}

export async function patchApiV2ReferenceTablesTablesId(
  args: InferRequestType<(typeof client.api.v2)['reference-tables']['tables'][':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['reference-tables'].tables[':id'].$patch(args, options))
}

export async function getApiV2ReferenceTablesTablesIdRows(
  args: InferRequestType<
    (typeof client.api.v2)['reference-tables']['tables'][':id']['rows']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['reference-tables'].tables[':id'].rows.$get(args, options),
  )
}

export async function postApiV2ReferenceTablesTablesIdRows(
  args: InferRequestType<
    (typeof client.api.v2)['reference-tables']['tables'][':id']['rows']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['reference-tables'].tables[':id'].rows.$post(args, options),
  )
}

export async function deleteApiV2ReferenceTablesTablesIdRows(
  args: InferRequestType<
    (typeof client.api.v2)['reference-tables']['tables'][':id']['rows']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['reference-tables'].tables[':id'].rows.$delete(args, options),
  )
}

export async function getApiV2ReferenceTablesTablesIdRowsList(
  args: InferRequestType<
    (typeof client.api.v2)['reference-tables']['tables'][':id']['rows']['list']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['reference-tables'].tables[':id'].rows.list.$get(args, options),
  )
}

export async function postApiV2ReferenceTablesUploads(
  args: InferRequestType<(typeof client.api.v2)['reference-tables']['uploads']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['reference-tables'].uploads.$post(args, options))
}

export async function getApiV2RemoteConfigProductsAsmWafCustomRules(
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.remote_config.products.asm.waf.custom_rules.$get(undefined, options),
  )
}

export async function postApiV2RemoteConfigProductsAsmWafCustomRules(
  args: InferRequestType<typeof client.api.v2.remote_config.products.asm.waf.custom_rules.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.remote_config.products.asm.waf.custom_rules.$post(args, options),
  )
}

export async function getApiV2RemoteConfigProductsAsmWafCustomRulesCustomRuleId(
  args: InferRequestType<
    (typeof client.api.v2.remote_config.products.asm.waf.custom_rules)[':custom_rule_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.remote_config.products.asm.waf.custom_rules[':custom_rule_id'].$get(
      args,
      options,
    ),
  )
}

export async function putApiV2RemoteConfigProductsAsmWafCustomRulesCustomRuleId(
  args: InferRequestType<
    (typeof client.api.v2.remote_config.products.asm.waf.custom_rules)[':custom_rule_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.remote_config.products.asm.waf.custom_rules[':custom_rule_id'].$put(
      args,
      options,
    ),
  )
}

export async function deleteApiV2RemoteConfigProductsAsmWafCustomRulesCustomRuleId(
  args: InferRequestType<
    (typeof client.api.v2.remote_config.products.asm.waf.custom_rules)[':custom_rule_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.remote_config.products.asm.waf.custom_rules[':custom_rule_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getApiV2RemoteConfigProductsAsmWafExclusionFilters(
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.remote_config.products.asm.waf.exclusion_filters.$get(undefined, options),
  )
}

export async function postApiV2RemoteConfigProductsAsmWafExclusionFilters(
  args: InferRequestType<
    typeof client.api.v2.remote_config.products.asm.waf.exclusion_filters.$post
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.remote_config.products.asm.waf.exclusion_filters.$post(args, options),
  )
}

export async function getApiV2RemoteConfigProductsAsmWafExclusionFiltersExclusionFilterId(
  args: InferRequestType<
    (typeof client.api.v2.remote_config.products.asm.waf.exclusion_filters)[':exclusion_filter_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.remote_config.products.asm.waf.exclusion_filters[':exclusion_filter_id'].$get(
      args,
      options,
    ),
  )
}

export async function putApiV2RemoteConfigProductsAsmWafExclusionFiltersExclusionFilterId(
  args: InferRequestType<
    (typeof client.api.v2.remote_config.products.asm.waf.exclusion_filters)[':exclusion_filter_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.remote_config.products.asm.waf.exclusion_filters[':exclusion_filter_id'].$put(
      args,
      options,
    ),
  )
}

export async function deleteApiV2RemoteConfigProductsAsmWafExclusionFiltersExclusionFilterId(
  args: InferRequestType<
    (typeof client.api.v2.remote_config.products.asm.waf.exclusion_filters)[':exclusion_filter_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.remote_config.products.asm.waf.exclusion_filters[':exclusion_filter_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getApiV2RemoteConfigProductsAsmWafPolicies(options?: ClientRequestOptions) {
  return await parseResponse(
    client.api.v2.remote_config.products.asm.waf.policies.$get(undefined, options),
  )
}

export async function postApiV2RemoteConfigProductsAsmWafPolicies(
  args: InferRequestType<typeof client.api.v2.remote_config.products.asm.waf.policies.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.remote_config.products.asm.waf.policies.$post(args, options),
  )
}

export async function getApiV2RemoteConfigProductsAsmWafPoliciesPolicyId(
  args: InferRequestType<
    (typeof client.api.v2.remote_config.products.asm.waf.policies)[':policy_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.remote_config.products.asm.waf.policies[':policy_id'].$get(args, options),
  )
}

export async function putApiV2RemoteConfigProductsAsmWafPoliciesPolicyId(
  args: InferRequestType<
    (typeof client.api.v2.remote_config.products.asm.waf.policies)[':policy_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.remote_config.products.asm.waf.policies[':policy_id'].$put(args, options),
  )
}

export async function deleteApiV2RemoteConfigProductsAsmWafPoliciesPolicyId(
  args: InferRequestType<
    (typeof client.api.v2.remote_config.products.asm.waf.policies)[':policy_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.remote_config.products.asm.waf.policies[':policy_id'].$delete(args, options),
  )
}

export async function getApiV2RemoteConfigProductsCwsAgentRules(
  args: InferRequestType<typeof client.api.v2.remote_config.products.cws.agent_rules.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.remote_config.products.cws.agent_rules.$get(args, options),
  )
}

export async function postApiV2RemoteConfigProductsCwsAgentRules(
  args: InferRequestType<typeof client.api.v2.remote_config.products.cws.agent_rules.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.remote_config.products.cws.agent_rules.$post(args, options),
  )
}

export async function getApiV2RemoteConfigProductsCwsAgentRulesAgentRuleId(
  args: InferRequestType<
    (typeof client.api.v2.remote_config.products.cws.agent_rules)[':agent_rule_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.remote_config.products.cws.agent_rules[':agent_rule_id'].$get(args, options),
  )
}

export async function deleteApiV2RemoteConfigProductsCwsAgentRulesAgentRuleId(
  args: InferRequestType<
    (typeof client.api.v2.remote_config.products.cws.agent_rules)[':agent_rule_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.remote_config.products.cws.agent_rules[':agent_rule_id'].$delete(args, options),
  )
}

export async function patchApiV2RemoteConfigProductsCwsAgentRulesAgentRuleId(
  args: InferRequestType<
    (typeof client.api.v2.remote_config.products.cws.agent_rules)[':agent_rule_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.remote_config.products.cws.agent_rules[':agent_rule_id'].$patch(args, options),
  )
}

export async function getApiV2RemoteConfigProductsCwsPolicy(options?: ClientRequestOptions) {
  return await parseResponse(
    client.api.v2.remote_config.products.cws.policy.$get(undefined, options),
  )
}

export async function postApiV2RemoteConfigProductsCwsPolicy(
  args: InferRequestType<typeof client.api.v2.remote_config.products.cws.policy.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.remote_config.products.cws.policy.$post(args, options))
}

export async function getApiV2RemoteConfigProductsCwsPolicyDownload(
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.remote_config.products.cws.policy.download.$get(undefined, options),
  )
}

export async function getApiV2RemoteConfigProductsCwsPolicyPolicyId(
  args: InferRequestType<
    (typeof client.api.v2.remote_config.products.cws.policy)[':policy_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.remote_config.products.cws.policy[':policy_id'].$get(args, options),
  )
}

export async function deleteApiV2RemoteConfigProductsCwsPolicyPolicyId(
  args: InferRequestType<
    (typeof client.api.v2.remote_config.products.cws.policy)[':policy_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.remote_config.products.cws.policy[':policy_id'].$delete(args, options),
  )
}

export async function patchApiV2RemoteConfigProductsCwsPolicyPolicyId(
  args: InferRequestType<
    (typeof client.api.v2.remote_config.products.cws.policy)[':policy_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.remote_config.products.cws.policy[':policy_id'].$patch(args, options),
  )
}

export async function getApiV2RemoteConfigProductsRumConfigsConfigId(
  args: InferRequestType<
    (typeof client.api.v2.remote_config.products.rum.configs)[':config_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.remote_config.products.rum.configs[':config_id'].$get(args, options),
  )
}

export async function putApiV2RemoteConfigProductsRumConfigsConfigId(
  args: InferRequestType<
    (typeof client.api.v2.remote_config.products.rum.configs)[':config_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.remote_config.products.rum.configs[':config_id'].$put(args, options),
  )
}

export async function getApiV2ReplayHeatmapSnapshots(
  args: InferRequestType<typeof client.api.v2.replay.heatmap.snapshots.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.replay.heatmap.snapshots.$get(args, options))
}

export async function postApiV2ReplayHeatmapSnapshots(
  args: InferRequestType<typeof client.api.v2.replay.heatmap.snapshots.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.replay.heatmap.snapshots.$post(args, options))
}

export async function deleteApiV2ReplayHeatmapSnapshotsSnapshotId(
  args: InferRequestType<
    (typeof client.api.v2.replay.heatmap.snapshots)[':snapshot_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.replay.heatmap.snapshots[':snapshot_id'].$delete(args, options),
  )
}

export async function patchApiV2ReplayHeatmapSnapshotsSnapshotId(
  args: InferRequestType<(typeof client.api.v2.replay.heatmap.snapshots)[':snapshot_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.replay.heatmap.snapshots[':snapshot_id'].$patch(args, options),
  )
}

export async function getApiV2ReportingDatasetDatasetIdSchedules(
  args: InferRequestType<
    (typeof client.api.v2.reporting.dataset)[':dataset_id']['schedules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.reporting.dataset[':dataset_id'].schedules.$get(args, options),
  )
}

export async function postApiV2ReportingPrint(
  args: InferRequestType<typeof client.api.v2.reporting.print.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.reporting.print.$post(args, options))
}

export async function postApiV2ReportingSchedule(
  args: InferRequestType<typeof client.api.v2.reporting.schedule.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.reporting.schedule.$post(args, options))
}

export async function getApiV2ReportingScheduleList(
  args: InferRequestType<typeof client.api.v2.reporting.schedule.list.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.reporting.schedule.list.$get(args, options))
}

export async function getApiV2ReportingScheduleResourceTypeResourceId(
  args: InferRequestType<
    (typeof client.api.v2.reporting.schedule)[':resource_type'][':resource_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.reporting.schedule[':resource_type'][':resource_id'].$get(args, options),
  )
}

export async function getApiV2ReportingScheduleScheduleUuid(
  args: InferRequestType<(typeof client.api.v2.reporting.schedule)[':schedule_uuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.reporting.schedule[':schedule_uuid'].$get(args, options))
}

export async function deleteApiV2ReportingScheduleScheduleUuid(
  args: InferRequestType<(typeof client.api.v2.reporting.schedule)[':schedule_uuid']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.reporting.schedule[':schedule_uuid'].$delete(args, options),
  )
}

export async function patchApiV2ReportingScheduleScheduleUuid(
  args: InferRequestType<(typeof client.api.v2.reporting.schedule)[':schedule_uuid']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.reporting.schedule[':schedule_uuid'].$patch(args, options),
  )
}

export async function patchApiV2ReportingScheduleScheduleUuidToggle(
  args: InferRequestType<
    (typeof client.api.v2.reporting.schedule)[':schedule_uuid']['toggle']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.reporting.schedule[':schedule_uuid'].toggle.$patch(args, options),
  )
}

export async function getApiV2RestrictionPolicyResourceId(
  args: InferRequestType<(typeof client.api.v2.restriction_policy)[':resource_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.restriction_policy[':resource_id'].$get(args, options))
}

export async function postApiV2RestrictionPolicyResourceId(
  args: InferRequestType<(typeof client.api.v2.restriction_policy)[':resource_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.restriction_policy[':resource_id'].$post(args, options))
}

export async function deleteApiV2RestrictionPolicyResourceId(
  args: InferRequestType<(typeof client.api.v2.restriction_policy)[':resource_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.restriction_policy[':resource_id'].$delete(args, options),
  )
}

export async function getApiV2Roles(
  args: InferRequestType<typeof client.api.v2.roles.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.roles.$get(args, options))
}

export async function postApiV2Roles(
  args: InferRequestType<typeof client.api.v2.roles.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.roles.$post(args, options))
}

export async function getApiV2RolesTemplates(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.roles.templates.$get(undefined, options))
}

export async function getApiV2RolesRoleId(
  args: InferRequestType<(typeof client.api.v2.roles)[':role_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.roles[':role_id'].$get(args, options))
}

export async function deleteApiV2RolesRoleId(
  args: InferRequestType<(typeof client.api.v2.roles)[':role_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.roles[':role_id'].$delete(args, options))
}

export async function patchApiV2RolesRoleId(
  args: InferRequestType<(typeof client.api.v2.roles)[':role_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.roles[':role_id'].$patch(args, options))
}

export async function postApiV2RolesRoleIdClone(
  args: InferRequestType<(typeof client.api.v2.roles)[':role_id']['clone']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.roles[':role_id'].clone.$post(args, options))
}

export async function getApiV2RolesRoleIdPermissions(
  args: InferRequestType<(typeof client.api.v2.roles)[':role_id']['permissions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.roles[':role_id'].permissions.$get(args, options))
}

export async function postApiV2RolesRoleIdPermissions(
  args: InferRequestType<(typeof client.api.v2.roles)[':role_id']['permissions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.roles[':role_id'].permissions.$post(args, options))
}

export async function deleteApiV2RolesRoleIdPermissions(
  args: InferRequestType<(typeof client.api.v2.roles)[':role_id']['permissions']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.roles[':role_id'].permissions.$delete(args, options))
}

export async function getApiV2RolesRoleIdUsers(
  args: InferRequestType<(typeof client.api.v2.roles)[':role_id']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.roles[':role_id'].users.$get(args, options))
}

export async function postApiV2RolesRoleIdUsers(
  args: InferRequestType<(typeof client.api.v2.roles)[':role_id']['users']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.roles[':role_id'].users.$post(args, options))
}

export async function deleteApiV2RolesRoleIdUsers(
  args: InferRequestType<(typeof client.api.v2.roles)[':role_id']['users']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.roles[':role_id'].users.$delete(args, options))
}

export async function getApiV2RoutingRules(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2['routing-rules'].$get(undefined, options))
}

export async function putApiV2RoutingRules(
  args: InferRequestType<(typeof client.api.v2)['routing-rules']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['routing-rules'].$put(args, options))
}

export async function postApiV2RoutingRules(
  args: InferRequestType<(typeof client.api.v2)['routing-rules']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['routing-rules'].$post(args, options))
}

export async function deleteApiV2RoutingRules(
  args: InferRequestType<(typeof client.api.v2)['routing-rules']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['routing-rules'].$delete(args, options))
}

export async function getApiV2RoutingRulesGet(
  args: InferRequestType<(typeof client.api.v2)['routing-rules']['get']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['routing-rules'].get.$get(args, options))
}

export async function postApiV2RumAnalyticsAggregate(
  args: InferRequestType<typeof client.api.v2.rum.analytics.aggregate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.rum.analytics.aggregate.$post(args, options))
}

export async function getApiV2RumApplications(
  args: InferRequestType<typeof client.api.v2.rum.applications.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.rum.applications.$get(args, options))
}

export async function postApiV2RumApplications(
  args: InferRequestType<typeof client.api.v2.rum.applications.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.rum.applications.$post(args, options))
}

export async function patchApiV2RumApplicationsAppIdRelationshipsRetentionFilters(
  args: InferRequestType<
    (typeof client.api.v2.rum.applications)[':app_id']['relationships']['retention_filters']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.rum.applications[':app_id'].relationships.retention_filters.$patch(args, options),
  )
}

export async function getApiV2RumApplicationsAppIdRetentionFilters(
  args: InferRequestType<
    (typeof client.api.v2.rum.applications)[':app_id']['retention_filters']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.rum.applications[':app_id'].retention_filters.$get(args, options),
  )
}

export async function postApiV2RumApplicationsAppIdRetentionFilters(
  args: InferRequestType<
    (typeof client.api.v2.rum.applications)[':app_id']['retention_filters']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.rum.applications[':app_id'].retention_filters.$post(args, options),
  )
}

export async function getApiV2RumApplicationsAppIdRetentionFiltersExclusion(
  args: InferRequestType<
    (typeof client.api.v2.rum.applications)[':app_id']['retention_filters']['exclusion']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.rum.applications[':app_id'].retention_filters.exclusion.$get(args, options),
  )
}

export async function postApiV2RumApplicationsAppIdRetentionFiltersExclusion(
  args: InferRequestType<
    (typeof client.api.v2.rum.applications)[':app_id']['retention_filters']['exclusion']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.rum.applications[':app_id'].retention_filters.exclusion.$post(args, options),
  )
}

export async function getApiV2RumApplicationsAppIdRetentionFiltersExclusionEfId(
  args: InferRequestType<
    (typeof client.api.v2.rum.applications)[':app_id']['retention_filters']['exclusion'][':ef_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.rum.applications[':app_id'].retention_filters.exclusion[':ef_id'].$get(
      args,
      options,
    ),
  )
}

export async function deleteApiV2RumApplicationsAppIdRetentionFiltersExclusionEfId(
  args: InferRequestType<
    (typeof client.api.v2.rum.applications)[':app_id']['retention_filters']['exclusion'][':ef_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.rum.applications[':app_id'].retention_filters.exclusion[':ef_id'].$delete(
      args,
      options,
    ),
  )
}

export async function patchApiV2RumApplicationsAppIdRetentionFiltersExclusionEfId(
  args: InferRequestType<
    (typeof client.api.v2.rum.applications)[':app_id']['retention_filters']['exclusion'][':ef_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.rum.applications[':app_id'].retention_filters.exclusion[':ef_id'].$patch(
      args,
      options,
    ),
  )
}

export async function getApiV2RumApplicationsAppIdRetentionFiltersPermanent(
  args: InferRequestType<
    (typeof client.api.v2.rum.applications)[':app_id']['retention_filters']['permanent']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.rum.applications[':app_id'].retention_filters.permanent.$get(args, options),
  )
}

export async function getApiV2RumApplicationsAppIdRetentionFiltersPermanentPermanentRfId(
  args: InferRequestType<
    (typeof client.api.v2.rum.applications)[':app_id']['retention_filters']['permanent'][':permanent_rf_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.rum.applications[':app_id'].retention_filters.permanent[':permanent_rf_id'].$get(
      args,
      options,
    ),
  )
}

export async function patchApiV2RumApplicationsAppIdRetentionFiltersPermanentPermanentRfId(
  args: InferRequestType<
    (typeof client.api.v2.rum.applications)[':app_id']['retention_filters']['permanent'][':permanent_rf_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.rum.applications[':app_id'].retention_filters.permanent[
      ':permanent_rf_id'
    ].$patch(args, options),
  )
}

export async function getApiV2RumApplicationsAppIdRetentionFiltersRfId(
  args: InferRequestType<
    (typeof client.api.v2.rum.applications)[':app_id']['retention_filters'][':rf_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.rum.applications[':app_id'].retention_filters[':rf_id'].$get(args, options),
  )
}

export async function deleteApiV2RumApplicationsAppIdRetentionFiltersRfId(
  args: InferRequestType<
    (typeof client.api.v2.rum.applications)[':app_id']['retention_filters'][':rf_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.rum.applications[':app_id'].retention_filters[':rf_id'].$delete(args, options),
  )
}

export async function patchApiV2RumApplicationsAppIdRetentionFiltersRfId(
  args: InferRequestType<
    (typeof client.api.v2.rum.applications)[':app_id']['retention_filters'][':rf_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.rum.applications[':app_id'].retention_filters[':rf_id'].$patch(args, options),
  )
}

export async function getApiV2RumApplicationsId(
  args: InferRequestType<(typeof client.api.v2.rum.applications)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.rum.applications[':id'].$get(args, options))
}

export async function deleteApiV2RumApplicationsId(
  args: InferRequestType<(typeof client.api.v2.rum.applications)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.rum.applications[':id'].$delete(args, options))
}

export async function patchApiV2RumApplicationsId(
  args: InferRequestType<(typeof client.api.v2.rum.applications)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.rum.applications[':id'].$patch(args, options))
}

export async function getApiV2RumConfig(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.rum.config.$get(undefined, options))
}

export async function postApiV2RumConfig(
  args: InferRequestType<typeof client.api.v2.rum.config.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.rum.config.$post(args, options))
}

export async function patchApiV2RumConfig(
  args: InferRequestType<typeof client.api.v2.rum.config.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.rum.config.$patch(args, options))
}

export async function getApiV2RumConfigArchive(
  args: InferRequestType<typeof client.api.v2.rum.config.archive.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.rum.config.archive.$get(args, options))
}

export async function getApiV2RumConfigArchiveAppId(
  args: InferRequestType<(typeof client.api.v2.rum.config.archive)[':app_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.rum.config.archive[':app_id'].$get(args, options))
}

export async function putApiV2RumConfigArchiveAppId(
  args: InferRequestType<(typeof client.api.v2.rum.config.archive)[':app_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.rum.config.archive[':app_id'].$put(args, options))
}

export async function deleteApiV2RumConfigArchiveAppId(
  args: InferRequestType<(typeof client.api.v2.rum.config.archive)[':app_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.rum.config.archive[':app_id'].$delete(args, options))
}

export async function getApiV2RumConfigMetrics(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.rum.config.metrics.$get(undefined, options))
}

export async function postApiV2RumConfigMetrics(
  args: InferRequestType<typeof client.api.v2.rum.config.metrics.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.rum.config.metrics.$post(args, options))
}

export async function getApiV2RumConfigMetricsMetricId(
  args: InferRequestType<(typeof client.api.v2.rum.config.metrics)[':metric_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.rum.config.metrics[':metric_id'].$get(args, options))
}

export async function deleteApiV2RumConfigMetricsMetricId(
  args: InferRequestType<(typeof client.api.v2.rum.config.metrics)[':metric_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.rum.config.metrics[':metric_id'].$delete(args, options))
}

export async function patchApiV2RumConfigMetricsMetricId(
  args: InferRequestType<(typeof client.api.v2.rum.config.metrics)[':metric_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.rum.config.metrics[':metric_id'].$patch(args, options))
}

export async function getApiV2RumConfigRetentionQuotaScopeTypeScopeId(
  args: InferRequestType<
    (typeof client.api.v2.rum.config)['retention-quota'][':scope_type'][':scope_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.rum.config['retention-quota'][':scope_type'][':scope_id'].$get(args, options),
  )
}

export async function putApiV2RumConfigRetentionQuotaScopeTypeScopeId(
  args: InferRequestType<
    (typeof client.api.v2.rum.config)['retention-quota'][':scope_type'][':scope_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.rum.config['retention-quota'][':scope_type'][':scope_id'].$put(args, options),
  )
}

export async function deleteApiV2RumConfigRetentionQuotaScopeTypeScopeId(
  args: InferRequestType<
    (typeof client.api.v2.rum.config)['retention-quota'][':scope_type'][':scope_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.rum.config['retention-quota'][':scope_type'][':scope_id'].$delete(args, options),
  )
}

export async function getApiV2RumConfigTeamsOwnershipMappings(
  args: InferRequestType<(typeof client.api.v2.rum.config)['teams-ownership']['mappings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.rum.config['teams-ownership'].mappings.$get(args, options),
  )
}

export async function postApiV2RumConfigTeamsOwnershipMappings(
  args: InferRequestType<(typeof client.api.v2.rum.config)['teams-ownership']['mappings']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.rum.config['teams-ownership'].mappings.$post(args, options),
  )
}

export async function postApiV2RumConfigTeamsOwnershipMappingsOperations(
  args: InferRequestType<
    (typeof client.api.v2.rum.config)['teams-ownership']['mappings']['operations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.rum.config['teams-ownership'].mappings.operations.$post(args, options),
  )
}

export async function getApiV2RumConfigTeamsOwnershipMappingsId(
  args: InferRequestType<
    (typeof client.api.v2.rum.config)['teams-ownership']['mappings'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.rum.config['teams-ownership'].mappings[':id'].$get(args, options),
  )
}

export async function deleteApiV2RumConfigTeamsOwnershipMappingsId(
  args: InferRequestType<
    (typeof client.api.v2.rum.config)['teams-ownership']['mappings'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.rum.config['teams-ownership'].mappings[':id'].$delete(args, options),
  )
}

export async function getApiV2RumConfigTeamsOwnershipRules(
  args: InferRequestType<(typeof client.api.v2.rum.config)['teams-ownership']['rules']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.rum.config['teams-ownership'].rules.$get(args, options))
}

export async function getApiV2RumEvents(
  args: InferRequestType<typeof client.api.v2.rum.events.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.rum.events.$get(args, options))
}

export async function postApiV2RumEventsSearch(
  args: InferRequestType<typeof client.api.v2.rum.events.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.rum.events.search.$post(args, options))
}

export async function postApiV2RumOperations(
  args: InferRequestType<typeof client.api.v2.rum.operations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.rum.operations.$post(args, options))
}

export async function getApiV2RumOperationsByNameName(
  args: InferRequestType<(typeof client.api.v2.rum.operations)['by-name'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.rum.operations['by-name'][':name'].$get(args, options))
}

export async function getApiV2RumOperationsSearch(
  args: InferRequestType<typeof client.api.v2.rum.operations.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.rum.operations.search.$get(args, options))
}

export async function getApiV2RumOperationsStrongLinks(
  args: InferRequestType<typeof client.api.v2.rum.operations.strong_links.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.rum.operations.strong_links.$get(args, options))
}

export async function postApiV2RumOperationsStrongLinks(
  args: InferRequestType<typeof client.api.v2.rum.operations.strong_links.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.rum.operations.strong_links.$post(args, options))
}

export async function putApiV2RumOperationsStrongLinksRumOperationIdFeatureId(
  args: InferRequestType<
    (typeof client.api.v2.rum.operations.strong_links)[':rum_operation_id'][':feature_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.rum.operations.strong_links[':rum_operation_id'][':feature_id'].$put(
      args,
      options,
    ),
  )
}

export async function deleteApiV2RumOperationsStrongLinksRumOperationIdFeatureId(
  args: InferRequestType<
    (typeof client.api.v2.rum.operations.strong_links)[':rum_operation_id'][':feature_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.rum.operations.strong_links[':rum_operation_id'][':feature_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getApiV2RumOperationsRumOperationId(
  args: InferRequestType<(typeof client.api.v2.rum.operations)[':rum_operation_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.rum.operations[':rum_operation_id'].$get(args, options))
}

export async function putApiV2RumOperationsRumOperationId(
  args: InferRequestType<(typeof client.api.v2.rum.operations)[':rum_operation_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.rum.operations[':rum_operation_id'].$put(args, options))
}

export async function deleteApiV2RumOperationsRumOperationId(
  args: InferRequestType<(typeof client.api.v2.rum.operations)[':rum_operation_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.rum.operations[':rum_operation_id'].$delete(args, options),
  )
}

export async function postApiV2RumQueryInsightAggregatedLongTasks(
  args: InferRequestType<typeof client.api.v2.rum.query.insight.aggregated_long_tasks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.rum.query.insight.aggregated_long_tasks.$post(args, options),
  )
}

export async function postApiV2RumQueryInsightAggregatedWaterfall(
  args: InferRequestType<typeof client.api.v2.rum.query.insight.aggregated_waterfall.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.rum.query.insight.aggregated_waterfall.$post(args, options),
  )
}

export async function postApiV2RumRecoverCount(
  args: InferRequestType<typeof client.api.v2.rum.recover.count.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.rum.recover.count.$post(args, options))
}

export async function getApiV2RumRecoverRequests(
  args: InferRequestType<typeof client.api.v2.rum.recover.requests.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.rum.recover.requests.$get(args, options))
}

export async function postApiV2RumRecoverRequests(
  args: InferRequestType<typeof client.api.v2.rum.recover.requests.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.rum.recover.requests.$post(args, options))
}

export async function getApiV2RumRecoverRequestsRequestId(
  args: InferRequestType<(typeof client.api.v2.rum.recover.requests)[':request_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.rum.recover.requests[':request_id'].$get(args, options))
}

export async function patchApiV2RumRecoverRequestsRequestId(
  args: InferRequestType<(typeof client.api.v2.rum.recover.requests)[':request_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.rum.recover.requests[':request_id'].$patch(args, options),
  )
}

export async function postApiV2RumRecoverSessions(
  args: InferRequestType<typeof client.api.v2.rum.recover.sessions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.rum.recover.sessions.$post(args, options))
}

export async function getApiV2RumReplayPlaylists(
  args: InferRequestType<typeof client.api.v2.rum.replay.playlists.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.rum.replay.playlists.$get(args, options))
}

export async function postApiV2RumReplayPlaylists(
  args: InferRequestType<typeof client.api.v2.rum.replay.playlists.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.rum.replay.playlists.$post(args, options))
}

export async function getApiV2RumReplayPlaylistsPlaylistId(
  args: InferRequestType<(typeof client.api.v2.rum.replay.playlists)[':playlist_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.rum.replay.playlists[':playlist_id'].$get(args, options))
}

export async function putApiV2RumReplayPlaylistsPlaylistId(
  args: InferRequestType<(typeof client.api.v2.rum.replay.playlists)[':playlist_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.rum.replay.playlists[':playlist_id'].$put(args, options))
}

export async function deleteApiV2RumReplayPlaylistsPlaylistId(
  args: InferRequestType<(typeof client.api.v2.rum.replay.playlists)[':playlist_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.rum.replay.playlists[':playlist_id'].$delete(args, options),
  )
}

export async function getApiV2RumReplayPlaylistsPlaylistIdSessions(
  args: InferRequestType<
    (typeof client.api.v2.rum.replay.playlists)[':playlist_id']['sessions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.rum.replay.playlists[':playlist_id'].sessions.$get(args, options),
  )
}

export async function deleteApiV2RumReplayPlaylistsPlaylistIdSessions(
  args: InferRequestType<
    (typeof client.api.v2.rum.replay.playlists)[':playlist_id']['sessions']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.rum.replay.playlists[':playlist_id'].sessions.$delete(args, options),
  )
}

export async function putApiV2RumReplayPlaylistsPlaylistIdSessionsSessionId(
  args: InferRequestType<
    (typeof client.api.v2.rum.replay.playlists)[':playlist_id']['sessions'][':session_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.rum.replay.playlists[':playlist_id'].sessions[':session_id'].$put(args, options),
  )
}

export async function deleteApiV2RumReplayPlaylistsPlaylistIdSessionsSessionId(
  args: InferRequestType<
    (typeof client.api.v2.rum.replay.playlists)[':playlist_id']['sessions'][':session_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.rum.replay.playlists[':playlist_id'].sessions[':session_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getApiV2RumReplaySessionsSessionIdViewsViewIdSegments(
  args: InferRequestType<
    (typeof client.api.v2.rum.replay.sessions)[':session_id']['views'][':view_id']['segments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.rum.replay.sessions[':session_id'].views[':view_id'].segments.$get(args, options),
  )
}

export async function getApiV2RumReplaySessionsSessionIdWatchers(
  args: InferRequestType<
    (typeof client.api.v2.rum.replay.sessions)[':session_id']['watchers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.rum.replay.sessions[':session_id'].watchers.$get(args, options),
  )
}

export async function postApiV2RumReplaySessionsSessionIdWatches(
  args: InferRequestType<
    (typeof client.api.v2.rum.replay.sessions)[':session_id']['watches']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.rum.replay.sessions[':session_id'].watches.$post(args, options),
  )
}

export async function deleteApiV2RumReplaySessionsSessionIdWatches(
  args: InferRequestType<
    (typeof client.api.v2.rum.replay.sessions)[':session_id']['watches']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.rum.replay.sessions[':session_id'].watches.$delete(args, options),
  )
}

export async function getApiV2RumReplayViewershipHistorySessions(
  args: InferRequestType<
    (typeof client.api.v2.rum.replay)['viewership-history']['sessions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.rum.replay['viewership-history'].sessions.$get(args, options),
  )
}

export async function getApiV2SamlConfigurations(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.saml_configurations.$get(undefined, options))
}

export async function postApiV2SamlConfigurationsIdpMetadata(
  args: InferRequestType<typeof client.api.v2.saml_configurations.idp_metadata.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.saml_configurations.idp_metadata.$post(args, options))
}

export async function getApiV2SamlConfigurationsSamlConfigUuid(
  args: InferRequestType<(typeof client.api.v2.saml_configurations)[':saml_config_uuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.saml_configurations[':saml_config_uuid'].$get(args, options),
  )
}

export async function patchApiV2SamlConfigurationsSamlConfigUuid(
  args: InferRequestType<(typeof client.api.v2.saml_configurations)[':saml_config_uuid']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.saml_configurations[':saml_config_uuid'].$patch(args, options),
  )
}

export async function getApiV2ScorecardCampaigns(
  args: InferRequestType<typeof client.api.v2.scorecard.campaigns.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.scorecard.campaigns.$get(args, options))
}

export async function postApiV2ScorecardCampaigns(
  args: InferRequestType<typeof client.api.v2.scorecard.campaigns.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.scorecard.campaigns.$post(args, options))
}

export async function getApiV2ScorecardCampaignsCampaignId(
  args: InferRequestType<(typeof client.api.v2.scorecard.campaigns)[':campaign_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.scorecard.campaigns[':campaign_id'].$get(args, options))
}

export async function putApiV2ScorecardCampaignsCampaignId(
  args: InferRequestType<(typeof client.api.v2.scorecard.campaigns)[':campaign_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.scorecard.campaigns[':campaign_id'].$put(args, options))
}

export async function deleteApiV2ScorecardCampaignsCampaignId(
  args: InferRequestType<(typeof client.api.v2.scorecard.campaigns)[':campaign_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.scorecard.campaigns[':campaign_id'].$delete(args, options),
  )
}

export async function getApiV2ScorecardOutcomes(
  args: InferRequestType<typeof client.api.v2.scorecard.outcomes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.scorecard.outcomes.$get(args, options))
}

export async function postApiV2ScorecardOutcomes(
  args: InferRequestType<typeof client.api.v2.scorecard.outcomes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.scorecard.outcomes.$post(args, options))
}

export async function postApiV2ScorecardOutcomesBatch(
  args: InferRequestType<typeof client.api.v2.scorecard.outcomes.batch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.scorecard.outcomes.batch.$post(args, options))
}

export async function getApiV2ScorecardRules(
  args: InferRequestType<typeof client.api.v2.scorecard.rules.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.scorecard.rules.$get(args, options))
}

export async function postApiV2ScorecardRules(
  args: InferRequestType<typeof client.api.v2.scorecard.rules.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.scorecard.rules.$post(args, options))
}

export async function putApiV2ScorecardRulesRuleId(
  args: InferRequestType<(typeof client.api.v2.scorecard.rules)[':rule_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.scorecard.rules[':rule_id'].$put(args, options))
}

export async function deleteApiV2ScorecardRulesRuleId(
  args: InferRequestType<(typeof client.api.v2.scorecard.rules)[':rule_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.scorecard.rules[':rule_id'].$delete(args, options))
}

export async function getApiV2ScorecardScorecards(
  args: InferRequestType<typeof client.api.v2.scorecard.scorecards.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.scorecard.scorecards.$get(args, options))
}

export async function getApiV2ScorecardScoresAggregation(
  args: InferRequestType<(typeof client.api.v2.scorecard.scores)[':aggregation']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.scorecard.scores[':aggregation'].$get(args, options))
}

export async function getApiV2SeatsUsers(
  args: InferRequestType<typeof client.api.v2.seats.users.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.seats.users.$get(args, options))
}

export async function postApiV2SeatsUsers(
  args: InferRequestType<typeof client.api.v2.seats.users.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.seats.users.$post(args, options))
}

export async function deleteApiV2SeatsUsers(
  args: InferRequestType<typeof client.api.v2.seats.users.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.seats.users.$delete(args, options))
}

export async function getApiV2SecurityEntitiesRiskScores(
  args: InferRequestType<(typeof client.api.v2)['security-entities']['risk-scores']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['security-entities']['risk-scores'].$get(args, options))
}

export async function getApiV2SecurityEntitiesRiskScoresEntityId(
  args: InferRequestType<
    (typeof client.api.v2)['security-entities']['risk-scores'][':entity_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['security-entities']['risk-scores'][':entity_id'].$get(args, options),
  )
}

export async function getApiV2SecurityAsmServicesServiceFilter(
  args: InferRequestType<(typeof client.api.v2.security.asm.services)[':service_filter']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security.asm.services[':service_filter'].$get(args, options),
  )
}

export async function getApiV2SecurityFindings(
  args: InferRequestType<typeof client.api.v2.security.findings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.security.findings.$get(args, options))
}

export async function patchApiV2SecurityFindingsAssignee(
  args: InferRequestType<typeof client.api.v2.security.findings.assignee.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.security.findings.assignee.$patch(args, options))
}

export async function getApiV2SecurityFindingsAutomationDefaultInboxRules(
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security.findings.automation.default_inbox_rules.$get(undefined, options),
  )
}

export async function getApiV2SecurityFindingsAutomationDefaultInboxRulesRuleId(
  args: InferRequestType<
    (typeof client.api.v2.security.findings.automation.default_inbox_rules)[':rule_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security.findings.automation.default_inbox_rules[':rule_id'].$get(args, options),
  )
}

export async function postApiV2SecurityFindingsAutomationDefaultInboxRulesRuleIdDisable(
  args: InferRequestType<
    (typeof client.api.v2.security.findings.automation.default_inbox_rules)[':rule_id']['disable']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security.findings.automation.default_inbox_rules[':rule_id'].disable.$post(
      args,
      options,
    ),
  )
}

export async function postApiV2SecurityFindingsAutomationDefaultInboxRulesRuleIdEnable(
  args: InferRequestType<
    (typeof client.api.v2.security.findings.automation.default_inbox_rules)[':rule_id']['enable']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security.findings.automation.default_inbox_rules[':rule_id'].enable.$post(
      args,
      options,
    ),
  )
}

export async function getApiV2SecurityFindingsAutomationDueDateRules(
  args: InferRequestType<typeof client.api.v2.security.findings.automation.due_date_rules.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security.findings.automation.due_date_rules.$get(args, options),
  )
}

export async function postApiV2SecurityFindingsAutomationDueDateRules(
  args: InferRequestType<typeof client.api.v2.security.findings.automation.due_date_rules.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security.findings.automation.due_date_rules.$post(args, options),
  )
}

export async function postApiV2SecurityFindingsAutomationDueDateRulesReorder(
  args: InferRequestType<
    typeof client.api.v2.security.findings.automation.due_date_rules.reorder.$post
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security.findings.automation.due_date_rules.reorder.$post(args, options),
  )
}

export async function getApiV2SecurityFindingsAutomationDueDateRulesRuleId(
  args: InferRequestType<
    (typeof client.api.v2.security.findings.automation.due_date_rules)[':rule_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security.findings.automation.due_date_rules[':rule_id'].$get(args, options),
  )
}

export async function putApiV2SecurityFindingsAutomationDueDateRulesRuleId(
  args: InferRequestType<
    (typeof client.api.v2.security.findings.automation.due_date_rules)[':rule_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security.findings.automation.due_date_rules[':rule_id'].$put(args, options),
  )
}

export async function deleteApiV2SecurityFindingsAutomationDueDateRulesRuleId(
  args: InferRequestType<
    (typeof client.api.v2.security.findings.automation.due_date_rules)[':rule_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security.findings.automation.due_date_rules[':rule_id'].$delete(args, options),
  )
}

export async function getApiV2SecurityFindingsAutomationInboxRules(
  args: InferRequestType<typeof client.api.v2.security.findings.automation.inbox_rules.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security.findings.automation.inbox_rules.$get(args, options),
  )
}

export async function postApiV2SecurityFindingsAutomationInboxRules(
  args: InferRequestType<typeof client.api.v2.security.findings.automation.inbox_rules.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security.findings.automation.inbox_rules.$post(args, options),
  )
}

export async function postApiV2SecurityFindingsAutomationInboxRulesReorder(
  args: InferRequestType<
    typeof client.api.v2.security.findings.automation.inbox_rules.reorder.$post
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security.findings.automation.inbox_rules.reorder.$post(args, options),
  )
}

export async function getApiV2SecurityFindingsAutomationInboxRulesRuleId(
  args: InferRequestType<
    (typeof client.api.v2.security.findings.automation.inbox_rules)[':rule_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security.findings.automation.inbox_rules[':rule_id'].$get(args, options),
  )
}

export async function putApiV2SecurityFindingsAutomationInboxRulesRuleId(
  args: InferRequestType<
    (typeof client.api.v2.security.findings.automation.inbox_rules)[':rule_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security.findings.automation.inbox_rules[':rule_id'].$put(args, options),
  )
}

export async function deleteApiV2SecurityFindingsAutomationInboxRulesRuleId(
  args: InferRequestType<
    (typeof client.api.v2.security.findings.automation.inbox_rules)[':rule_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security.findings.automation.inbox_rules[':rule_id'].$delete(args, options),
  )
}

export async function getApiV2SecurityFindingsAutomationMuteRules(
  args: InferRequestType<typeof client.api.v2.security.findings.automation.mute_rules.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security.findings.automation.mute_rules.$get(args, options),
  )
}

export async function postApiV2SecurityFindingsAutomationMuteRules(
  args: InferRequestType<typeof client.api.v2.security.findings.automation.mute_rules.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security.findings.automation.mute_rules.$post(args, options),
  )
}

export async function postApiV2SecurityFindingsAutomationMuteRulesReorder(
  args: InferRequestType<
    typeof client.api.v2.security.findings.automation.mute_rules.reorder.$post
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security.findings.automation.mute_rules.reorder.$post(args, options),
  )
}

export async function getApiV2SecurityFindingsAutomationMuteRulesRuleId(
  args: InferRequestType<
    (typeof client.api.v2.security.findings.automation.mute_rules)[':rule_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security.findings.automation.mute_rules[':rule_id'].$get(args, options),
  )
}

export async function putApiV2SecurityFindingsAutomationMuteRulesRuleId(
  args: InferRequestType<
    (typeof client.api.v2.security.findings.automation.mute_rules)[':rule_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security.findings.automation.mute_rules[':rule_id'].$put(args, options),
  )
}

export async function deleteApiV2SecurityFindingsAutomationMuteRulesRuleId(
  args: InferRequestType<
    (typeof client.api.v2.security.findings.automation.mute_rules)[':rule_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security.findings.automation.mute_rules[':rule_id'].$delete(args, options),
  )
}

export async function getApiV2SecurityFindingsAutomationSeverityModifierRules(
  args: InferRequestType<
    typeof client.api.v2.security.findings.automation.severity_modifier_rules.$get
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security.findings.automation.severity_modifier_rules.$get(args, options),
  )
}

export async function postApiV2SecurityFindingsAutomationSeverityModifierRules(
  args: InferRequestType<
    typeof client.api.v2.security.findings.automation.severity_modifier_rules.$post
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security.findings.automation.severity_modifier_rules.$post(args, options),
  )
}

export async function postApiV2SecurityFindingsAutomationSeverityModifierRulesReorder(
  args: InferRequestType<
    typeof client.api.v2.security.findings.automation.severity_modifier_rules.reorder.$post
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security.findings.automation.severity_modifier_rules.reorder.$post(args, options),
  )
}

export async function getApiV2SecurityFindingsAutomationSeverityModifierRulesRuleId(
  args: InferRequestType<
    (typeof client.api.v2.security.findings.automation.severity_modifier_rules)[':rule_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security.findings.automation.severity_modifier_rules[':rule_id'].$get(
      args,
      options,
    ),
  )
}

export async function putApiV2SecurityFindingsAutomationSeverityModifierRulesRuleId(
  args: InferRequestType<
    (typeof client.api.v2.security.findings.automation.severity_modifier_rules)[':rule_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security.findings.automation.severity_modifier_rules[':rule_id'].$put(
      args,
      options,
    ),
  )
}

export async function deleteApiV2SecurityFindingsAutomationSeverityModifierRulesRuleId(
  args: InferRequestType<
    (typeof client.api.v2.security.findings.automation.severity_modifier_rules)[':rule_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security.findings.automation.severity_modifier_rules[':rule_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getApiV2SecurityFindingsAutomationTicketCreationRules(
  args: InferRequestType<
    typeof client.api.v2.security.findings.automation.ticket_creation_rules.$get
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security.findings.automation.ticket_creation_rules.$get(args, options),
  )
}

export async function postApiV2SecurityFindingsAutomationTicketCreationRules(
  args: InferRequestType<
    typeof client.api.v2.security.findings.automation.ticket_creation_rules.$post
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security.findings.automation.ticket_creation_rules.$post(args, options),
  )
}

export async function postApiV2SecurityFindingsAutomationTicketCreationRulesReorder(
  args: InferRequestType<
    typeof client.api.v2.security.findings.automation.ticket_creation_rules.reorder.$post
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security.findings.automation.ticket_creation_rules.reorder.$post(args, options),
  )
}

export async function getApiV2SecurityFindingsAutomationTicketCreationRulesRuleId(
  args: InferRequestType<
    (typeof client.api.v2.security.findings.automation.ticket_creation_rules)[':rule_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security.findings.automation.ticket_creation_rules[':rule_id'].$get(
      args,
      options,
    ),
  )
}

export async function putApiV2SecurityFindingsAutomationTicketCreationRulesRuleId(
  args: InferRequestType<
    (typeof client.api.v2.security.findings.automation.ticket_creation_rules)[':rule_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security.findings.automation.ticket_creation_rules[':rule_id'].$put(
      args,
      options,
    ),
  )
}

export async function deleteApiV2SecurityFindingsAutomationTicketCreationRulesRuleId(
  args: InferRequestType<
    (typeof client.api.v2.security.findings.automation.ticket_creation_rules)[':rule_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security.findings.automation.ticket_creation_rules[':rule_id'].$delete(
      args,
      options,
    ),
  )
}

export async function postApiV2SecurityFindingsCases(
  args: InferRequestType<typeof client.api.v2.security.findings.cases.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.security.findings.cases.$post(args, options))
}

export async function deleteApiV2SecurityFindingsCases(
  args: InferRequestType<typeof client.api.v2.security.findings.cases.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.security.findings.cases.$delete(args, options))
}

export async function patchApiV2SecurityFindingsCasesCaseId(
  args: InferRequestType<(typeof client.api.v2.security.findings.cases)[':case_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security.findings.cases[':case_id'].$patch(args, options),
  )
}

export async function postApiV2SecurityFindingsJiraIssues(
  args: InferRequestType<typeof client.api.v2.security.findings.jira_issues.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.security.findings.jira_issues.$post(args, options))
}

export async function patchApiV2SecurityFindingsJiraIssues(
  args: InferRequestType<typeof client.api.v2.security.findings.jira_issues.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.security.findings.jira_issues.$patch(args, options))
}

export async function postApiV2SecurityFindingsLinearIssues(
  args: InferRequestType<typeof client.api.v2.security.findings.linear_issues.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.security.findings.linear_issues.$post(args, options))
}

export async function patchApiV2SecurityFindingsLinearIssues(
  args: InferRequestType<typeof client.api.v2.security.findings.linear_issues.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.security.findings.linear_issues.$patch(args, options))
}

export async function patchApiV2SecurityFindingsMute(
  args: InferRequestType<typeof client.api.v2.security.findings.mute.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.security.findings.mute.$patch(args, options))
}

export async function postApiV2SecurityFindingsSearch(
  args: InferRequestType<typeof client.api.v2.security.findings.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.security.findings.search.$post(args, options))
}

export async function postApiV2SecurityFindingsServicenowTickets(
  args: InferRequestType<typeof client.api.v2.security.findings.servicenow_tickets.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security.findings.servicenow_tickets.$post(args, options),
  )
}

export async function patchApiV2SecurityFindingsServicenowTickets(
  args: InferRequestType<typeof client.api.v2.security.findings.servicenow_tickets.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security.findings.servicenow_tickets.$patch(args, options),
  )
}

export async function patchApiV2SecurityFindingsSeverity(
  args: InferRequestType<typeof client.api.v2.security.findings.severity.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.security.findings.severity.$patch(args, options))
}

export async function getApiV2SecurityOwnershipResourceId(
  args: InferRequestType<(typeof client.api.v2.security.ownership)[':resource_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.security.ownership[':resource_id'].$get(args, options))
}

export async function getApiV2SecurityOwnershipResourceIdHistory(
  args: InferRequestType<
    (typeof client.api.v2.security.ownership)[':resource_id']['history']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security.ownership[':resource_id'].history.$get(args, options),
  )
}

export async function getApiV2SecurityOwnershipResourceIdOwnerType(
  args: InferRequestType<
    (typeof client.api.v2.security.ownership)[':resource_id'][':owner_type']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security.ownership[':resource_id'][':owner_type'].$get(args, options),
  )
}

export async function getApiV2SecurityOwnershipResourceIdOwnerTypeEvidence(
  args: InferRequestType<
    (typeof client.api.v2.security.ownership)[':resource_id'][':owner_type']['evidence']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security.ownership[':resource_id'][':owner_type'].evidence.$get(args, options),
  )
}

export async function postApiV2SecurityOwnershipResourceIdOwnerTypeFeedback(
  args: InferRequestType<
    (typeof client.api.v2.security.ownership)[':resource_id'][':owner_type']['feedback']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security.ownership[':resource_id'][':owner_type'].feedback.$post(args, options),
  )
}

export async function getApiV2SecurityOwnershipResourceIdOwnerTypeHistory(
  args: InferRequestType<
    (typeof client.api.v2.security.ownership)[':resource_id'][':owner_type']['history']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security.ownership[':resource_id'][':owner_type'].history.$get(args, options),
  )
}

export async function getApiV2SecurityRemediationGroups(
  args: InferRequestType<typeof client.api.v2.security.remediation_groups.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.security.remediation_groups.$get(args, options))
}

export async function getApiV2SecuritySboms(
  args: InferRequestType<typeof client.api.v2.security.sboms.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.security.sboms.$get(args, options))
}

export async function getApiV2SecuritySbomsAssetType(
  args: InferRequestType<(typeof client.api.v2.security.sboms)[':asset_type']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.security.sboms[':asset_type'].$get(args, options))
}

export async function getApiV2SecurityScannedAssetsMetadata(
  args: InferRequestType<(typeof client.api.v2.security)['scanned-assets-metadata']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.security['scanned-assets-metadata'].$get(args, options))
}

export async function getApiV2SecuritySiemIocExplorer(
  args: InferRequestType<(typeof client.api.v2.security.siem)['ioc-explorer']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.security.siem['ioc-explorer'].$get(args, options))
}

export async function getApiV2SecuritySiemIocExplorerIndicator(
  args: InferRequestType<(typeof client.api.v2.security.siem)['ioc-explorer']['indicator']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security.siem['ioc-explorer'].indicator.$get(args, options),
  )
}

export async function postApiV2SecuritySiemIocExplorerTriage(
  args: InferRequestType<(typeof client.api.v2.security.siem)['ioc-explorer']['triage']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security.siem['ioc-explorer'].triage.$post(args, options),
  )
}

export async function getApiV2SecuritySignalsNotificationRules(options?: ClientRequestOptions) {
  return await parseResponse(
    client.api.v2.security.signals.notification_rules.$get(undefined, options),
  )
}

export async function postApiV2SecuritySignalsNotificationRules(
  args: InferRequestType<typeof client.api.v2.security.signals.notification_rules.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.security.signals.notification_rules.$post(args, options))
}

export async function getApiV2SecuritySignalsNotificationRulesId(
  args: InferRequestType<(typeof client.api.v2.security.signals.notification_rules)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security.signals.notification_rules[':id'].$get(args, options),
  )
}

export async function deleteApiV2SecuritySignalsNotificationRulesId(
  args: InferRequestType<
    (typeof client.api.v2.security.signals.notification_rules)[':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security.signals.notification_rules[':id'].$delete(args, options),
  )
}

export async function patchApiV2SecuritySignalsNotificationRulesId(
  args: InferRequestType<
    (typeof client.api.v2.security.signals.notification_rules)[':id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security.signals.notification_rules[':id'].$patch(args, options),
  )
}

export async function postApiV2SecurityThreatIntelStix(
  args: InferRequestType<(typeof client.api.v2.security)['threat-intel']['stix']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.security['threat-intel'].stix.$post(args, options))
}

export async function getApiV2SecurityVulnerabilities(
  args: InferRequestType<typeof client.api.v2.security.vulnerabilities.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.security.vulnerabilities.$get(args, options))
}

export async function postApiV2SecurityVulnerabilities(
  args: InferRequestType<typeof client.api.v2.security.vulnerabilities.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.security.vulnerabilities.$post(args, options))
}

export async function getApiV2SecurityVulnerabilitiesNotificationRules(
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security.vulnerabilities.notification_rules.$get(undefined, options),
  )
}

export async function postApiV2SecurityVulnerabilitiesNotificationRules(
  args: InferRequestType<typeof client.api.v2.security.vulnerabilities.notification_rules.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security.vulnerabilities.notification_rules.$post(args, options),
  )
}

export async function getApiV2SecurityVulnerabilitiesNotificationRulesId(
  args: InferRequestType<
    (typeof client.api.v2.security.vulnerabilities.notification_rules)[':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security.vulnerabilities.notification_rules[':id'].$get(args, options),
  )
}

export async function deleteApiV2SecurityVulnerabilitiesNotificationRulesId(
  args: InferRequestType<
    (typeof client.api.v2.security.vulnerabilities.notification_rules)[':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security.vulnerabilities.notification_rules[':id'].$delete(args, options),
  )
}

export async function patchApiV2SecurityVulnerabilitiesNotificationRulesId(
  args: InferRequestType<
    (typeof client.api.v2.security.vulnerabilities.notification_rules)[':id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security.vulnerabilities.notification_rules[':id'].$patch(args, options),
  )
}

export async function getApiV2SecurityVulnerableAssets(
  args: InferRequestType<(typeof client.api.v2.security)['vulnerable-assets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.security['vulnerable-assets'].$get(args, options))
}

export async function getApiV2SecurityMonitoringBatchMigrations(
  args: InferRequestType<(typeof client.api.v2.security_monitoring)['batch-migrations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security_monitoring['batch-migrations'].$get(args, options),
  )
}

export async function postApiV2SecurityMonitoringBatchMigrations(
  args: InferRequestType<(typeof client.api.v2.security_monitoring)['batch-migrations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security_monitoring['batch-migrations'].$post(args, options),
  )
}

export async function deleteApiV2SecurityMonitoringBatchMigrationsBatchId(
  args: InferRequestType<
    (typeof client.api.v2.security_monitoring)['batch-migrations'][':batch_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security_monitoring['batch-migrations'][':batch_id'].$delete(args, options),
  )
}

export async function patchApiV2SecurityMonitoringBatchMigrationsBatchId(
  args: InferRequestType<
    (typeof client.api.v2.security_monitoring)['batch-migrations'][':batch_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security_monitoring['batch-migrations'][':batch_id'].$patch(args, options),
  )
}

export async function postApiV2SecurityMonitoringBatchMigrationsBatchIdCancel(
  args: InferRequestType<
    (typeof client.api.v2.security_monitoring)['batch-migrations'][':batch_id']['cancel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security_monitoring['batch-migrations'][':batch_id'].cancel.$post(args, options),
  )
}

export async function postApiV2SecurityMonitoringBatchMigrationsBatchIdPublish(
  args: InferRequestType<
    (typeof client.api.v2.security_monitoring)['batch-migrations'][':batch_id']['publish']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security_monitoring['batch-migrations'][':batch_id'].publish.$post(args, options),
  )
}

export async function getApiV2SecurityMonitoringBatchMigrationsBatchIdResources(
  args: InferRequestType<
    (typeof client.api.v2.security_monitoring)['batch-migrations'][':batch_id']['resources']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security_monitoring['batch-migrations'][':batch_id'].resources.$get(
      args,
      options,
    ),
  )
}

export async function postApiV2SecurityMonitoringBatchMigrationsBatchIdResources(
  args: InferRequestType<
    (typeof client.api.v2.security_monitoring)['batch-migrations'][':batch_id']['resources']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security_monitoring['batch-migrations'][':batch_id'].resources.$post(
      args,
      options,
    ),
  )
}

export async function deleteApiV2SecurityMonitoringBatchMigrationsBatchIdResources(
  args: InferRequestType<
    (typeof client.api.v2.security_monitoring)['batch-migrations'][':batch_id']['resources']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security_monitoring['batch-migrations'][':batch_id'].resources.$delete(
      args,
      options,
    ),
  )
}

export async function patchApiV2SecurityMonitoringBatchMigrationsBatchIdResourcesResourceId(
  args: InferRequestType<
    (typeof client.api.v2.security_monitoring)['batch-migrations'][':batch_id']['resources'][':resource_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security_monitoring['batch-migrations'][':batch_id'].resources[
      ':resource_id'
    ].$patch(args, options),
  )
}

export async function postApiV2SecurityMonitoringBatchMigrationsBatchIdStart(
  args: InferRequestType<
    (typeof client.api.v2.security_monitoring)['batch-migrations'][':batch_id']['start']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security_monitoring['batch-migrations'][':batch_id'].start.$post(args, options),
  )
}

export async function getApiV2SecurityMonitoringCloudWorkloadSecurityAgentRules(
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security_monitoring.cloud_workload_security.agent_rules.$get(undefined, options),
  )
}

export async function getApiV2SecurityMonitoringCloudWorkloadSecurityAgentRulesAgentRuleId(
  args: InferRequestType<
    (typeof client.api.v2.security_monitoring.cloud_workload_security.agent_rules)[':agent_rule_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security_monitoring.cloud_workload_security.agent_rules[':agent_rule_id'].$get(
      args,
      options,
    ),
  )
}

export async function getApiV2SecurityMonitoringConfigurationCriticalAssets(
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security_monitoring.configuration.critical_assets.$get(undefined, options),
  )
}

export async function postApiV2SecurityMonitoringConfigurationCriticalAssets(
  args: InferRequestType<
    typeof client.api.v2.security_monitoring.configuration.critical_assets.$post
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security_monitoring.configuration.critical_assets.$post(args, options),
  )
}

export async function getApiV2SecurityMonitoringConfigurationCriticalAssetsRulesRuleId(
  args: InferRequestType<
    (typeof client.api.v2.security_monitoring.configuration.critical_assets.rules)[':rule_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security_monitoring.configuration.critical_assets.rules[':rule_id'].$get(
      args,
      options,
    ),
  )
}

export async function getApiV2SecurityMonitoringConfigurationCriticalAssetsCriticalAssetId(
  args: InferRequestType<
    (typeof client.api.v2.security_monitoring.configuration.critical_assets)[':critical_asset_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security_monitoring.configuration.critical_assets[':critical_asset_id'].$get(
      args,
      options,
    ),
  )
}

export async function deleteApiV2SecurityMonitoringConfigurationCriticalAssetsCriticalAssetId(
  args: InferRequestType<
    (typeof client.api.v2.security_monitoring.configuration.critical_assets)[':critical_asset_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security_monitoring.configuration.critical_assets[':critical_asset_id'].$delete(
      args,
      options,
    ),
  )
}

export async function patchApiV2SecurityMonitoringConfigurationCriticalAssetsCriticalAssetId(
  args: InferRequestType<
    (typeof client.api.v2.security_monitoring.configuration.critical_assets)[':critical_asset_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security_monitoring.configuration.critical_assets[':critical_asset_id'].$patch(
      args,
      options,
    ),
  )
}

export async function getApiV2SecurityMonitoringConfigurationIntegrationConfig(
  args: InferRequestType<
    typeof client.api.v2.security_monitoring.configuration.integration_config.$get
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security_monitoring.configuration.integration_config.$get(args, options),
  )
}

export async function postApiV2SecurityMonitoringConfigurationIntegrationConfig(
  args: InferRequestType<
    typeof client.api.v2.security_monitoring.configuration.integration_config.$post
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security_monitoring.configuration.integration_config.$post(args, options),
  )
}

export async function getApiV2SecurityMonitoringConfigurationIntegrationConfigEntraIdAzureAppRegistrations(
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security_monitoring.configuration.integration_config.entra_id.azure_app_registrations.$get(
      undefined,
      options,
    ),
  )
}

export async function postApiV2SecurityMonitoringConfigurationIntegrationConfigValidate(
  args: InferRequestType<
    typeof client.api.v2.security_monitoring.configuration.integration_config.validate.$post
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security_monitoring.configuration.integration_config.validate.$post(
      args,
      options,
    ),
  )
}

export async function getApiV2SecurityMonitoringConfigurationIntegrationConfigIntegrationConfigId(
  args: InferRequestType<
    (typeof client.api.v2.security_monitoring.configuration.integration_config)[':integration_config_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security_monitoring.configuration.integration_config[
      ':integration_config_id'
    ].$get(args, options),
  )
}

export async function deleteApiV2SecurityMonitoringConfigurationIntegrationConfigIntegrationConfigId(
  args: InferRequestType<
    (typeof client.api.v2.security_monitoring.configuration.integration_config)[':integration_config_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security_monitoring.configuration.integration_config[
      ':integration_config_id'
    ].$delete(args, options),
  )
}

export async function patchApiV2SecurityMonitoringConfigurationIntegrationConfigIntegrationConfigId(
  args: InferRequestType<
    (typeof client.api.v2.security_monitoring.configuration.integration_config)[':integration_config_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security_monitoring.configuration.integration_config[
      ':integration_config_id'
    ].$patch(args, options),
  )
}

export async function postApiV2SecurityMonitoringConfigurationIntegrationConfigIntegrationConfigIdValidate(
  args: InferRequestType<
    (typeof client.api.v2.security_monitoring.configuration.integration_config)[':integration_config_id']['validate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security_monitoring.configuration.integration_config[
      ':integration_config_id'
    ].validate.$post(args, options),
  )
}

export async function postApiV2SecurityMonitoringConfigurationIntegrationConfigIntegrationTypeActivate(
  args: InferRequestType<
    (typeof client.api.v2.security_monitoring.configuration.integration_config)[':integration_type']['activate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security_monitoring.configuration.integration_config[
      ':integration_type'
    ].activate.$post(args, options),
  )
}

export async function postApiV2SecurityMonitoringConfigurationIntegrationConfigIntegrationTypeDeactivate(
  args: InferRequestType<
    (typeof client.api.v2.security_monitoring.configuration.integration_config)[':integration_type']['deactivate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security_monitoring.configuration.integration_config[
      ':integration_type'
    ].deactivate.$post(args, options),
  )
}

export async function postApiV2SecurityMonitoringConfigurationNotificationRulesSendNotificationPreview(
  args: InferRequestType<
    typeof client.api.v2.security_monitoring.configuration.notification_rules.send_notification_preview.$post
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security_monitoring.configuration.notification_rules.send_notification_preview.$post(
      args,
      options,
    ),
  )
}

export async function getApiV2SecurityMonitoringConfigurationSecurityFilters(
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security_monitoring.configuration.security_filters.$get(undefined, options),
  )
}

export async function postApiV2SecurityMonitoringConfigurationSecurityFilters(
  args: InferRequestType<
    typeof client.api.v2.security_monitoring.configuration.security_filters.$post
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security_monitoring.configuration.security_filters.$post(args, options),
  )
}

export async function getApiV2SecurityMonitoringConfigurationSecurityFiltersVersions(
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security_monitoring.configuration.security_filters.versions.$get(
      undefined,
      options,
    ),
  )
}

export async function getApiV2SecurityMonitoringConfigurationSecurityFiltersSecurityFilterId(
  args: InferRequestType<
    (typeof client.api.v2.security_monitoring.configuration.security_filters)[':security_filter_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security_monitoring.configuration.security_filters[':security_filter_id'].$get(
      args,
      options,
    ),
  )
}

export async function deleteApiV2SecurityMonitoringConfigurationSecurityFiltersSecurityFilterId(
  args: InferRequestType<
    (typeof client.api.v2.security_monitoring.configuration.security_filters)[':security_filter_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security_monitoring.configuration.security_filters[':security_filter_id'].$delete(
      args,
      options,
    ),
  )
}

export async function patchApiV2SecurityMonitoringConfigurationSecurityFiltersSecurityFilterId(
  args: InferRequestType<
    (typeof client.api.v2.security_monitoring.configuration.security_filters)[':security_filter_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security_monitoring.configuration.security_filters[':security_filter_id'].$patch(
      args,
      options,
    ),
  )
}

export async function getApiV2SecurityMonitoringConfigurationSuppressions(
  args: InferRequestType<typeof client.api.v2.security_monitoring.configuration.suppressions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security_monitoring.configuration.suppressions.$get(args, options),
  )
}

export async function postApiV2SecurityMonitoringConfigurationSuppressions(
  args: InferRequestType<typeof client.api.v2.security_monitoring.configuration.suppressions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security_monitoring.configuration.suppressions.$post(args, options),
  )
}

export async function postApiV2SecurityMonitoringConfigurationSuppressionsRules(
  args: InferRequestType<
    typeof client.api.v2.security_monitoring.configuration.suppressions.rules.$post
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security_monitoring.configuration.suppressions.rules.$post(args, options),
  )
}

export async function getApiV2SecurityMonitoringConfigurationSuppressionsRulesRuleId(
  args: InferRequestType<
    (typeof client.api.v2.security_monitoring.configuration.suppressions.rules)[':rule_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security_monitoring.configuration.suppressions.rules[':rule_id'].$get(
      args,
      options,
    ),
  )
}

export async function postApiV2SecurityMonitoringConfigurationSuppressionsValidation(
  args: InferRequestType<
    typeof client.api.v2.security_monitoring.configuration.suppressions.validation.$post
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security_monitoring.configuration.suppressions.validation.$post(args, options),
  )
}

export async function getApiV2SecurityMonitoringConfigurationSuppressionsSuppressionId(
  args: InferRequestType<
    (typeof client.api.v2.security_monitoring.configuration.suppressions)[':suppression_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security_monitoring.configuration.suppressions[':suppression_id'].$get(
      args,
      options,
    ),
  )
}

export async function deleteApiV2SecurityMonitoringConfigurationSuppressionsSuppressionId(
  args: InferRequestType<
    (typeof client.api.v2.security_monitoring.configuration.suppressions)[':suppression_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security_monitoring.configuration.suppressions[':suppression_id'].$delete(
      args,
      options,
    ),
  )
}

export async function patchApiV2SecurityMonitoringConfigurationSuppressionsSuppressionId(
  args: InferRequestType<
    (typeof client.api.v2.security_monitoring.configuration.suppressions)[':suppression_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security_monitoring.configuration.suppressions[':suppression_id'].$patch(
      args,
      options,
    ),
  )
}

export async function getApiV2SecurityMonitoringConfigurationSuppressionsSuppressionIdVersionHistory(
  args: InferRequestType<
    (typeof client.api.v2.security_monitoring.configuration.suppressions)[':suppression_id']['version_history']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security_monitoring.configuration.suppressions[
      ':suppression_id'
    ].version_history.$get(args, options),
  )
}

export async function getApiV2SecurityMonitoringContentPacksStates(options?: ClientRequestOptions) {
  return await parseResponse(
    client.api.v2.security_monitoring.content_packs.states.$get(undefined, options),
  )
}

export async function putApiV2SecurityMonitoringContentPacksContentPackIdActivate(
  args: InferRequestType<
    (typeof client.api.v2.security_monitoring.content_packs)[':content_pack_id']['activate']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security_monitoring.content_packs[':content_pack_id'].activate.$put(
      args,
      options,
    ),
  )
}

export async function putApiV2SecurityMonitoringContentPacksContentPackIdDeactivate(
  args: InferRequestType<
    (typeof client.api.v2.security_monitoring.content_packs)[':content_pack_id']['deactivate']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security_monitoring.content_packs[':content_pack_id'].deactivate.$put(
      args,
      options,
    ),
  )
}

export async function getApiV2SecurityMonitoringDatasets(
  args: InferRequestType<typeof client.api.v2.security_monitoring.datasets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.security_monitoring.datasets.$get(args, options))
}

export async function postApiV2SecurityMonitoringDatasets(
  args: InferRequestType<typeof client.api.v2.security_monitoring.datasets.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.security_monitoring.datasets.$post(args, options))
}

export async function postApiV2SecurityMonitoringDatasetsDependencies(
  args: InferRequestType<typeof client.api.v2.security_monitoring.datasets.dependencies.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security_monitoring.datasets.dependencies.$post(args, options),
  )
}

export async function getApiV2SecurityMonitoringDatasetsDatasetId(
  args: InferRequestType<
    (typeof client.api.v2.security_monitoring.datasets)[':dataset_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security_monitoring.datasets[':dataset_id'].$get(args, options),
  )
}

export async function deleteApiV2SecurityMonitoringDatasetsDatasetId(
  args: InferRequestType<
    (typeof client.api.v2.security_monitoring.datasets)[':dataset_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security_monitoring.datasets[':dataset_id'].$delete(args, options),
  )
}

export async function patchApiV2SecurityMonitoringDatasetsDatasetId(
  args: InferRequestType<
    (typeof client.api.v2.security_monitoring.datasets)[':dataset_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security_monitoring.datasets[':dataset_id'].$patch(args, options),
  )
}

export async function getApiV2SecurityMonitoringDatasetsDatasetIdVersionVersion(
  args: InferRequestType<
    (typeof client.api.v2.security_monitoring.datasets)[':dataset_id']['version'][':version']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security_monitoring.datasets[':dataset_id'].version[':version'].$get(
      args,
      options,
    ),
  )
}

export async function getApiV2SecurityMonitoringDatasetsDatasetIdVersionHistory(
  args: InferRequestType<
    (typeof client.api.v2.security_monitoring.datasets)[':dataset_id']['version_history']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security_monitoring.datasets[':dataset_id'].version_history.$get(args, options),
  )
}

export async function getApiV2SecurityMonitoringEntityContext(
  args: InferRequestType<typeof client.api.v2.security_monitoring.entity_context.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.security_monitoring.entity_context.$get(args, options))
}

export async function getApiV2SecurityMonitoringEntityContextRecentlyUpdated(
  args: InferRequestType<
    typeof client.api.v2.security_monitoring.entity_context.recently_updated.$get
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security_monitoring.entity_context.recently_updated.$get(args, options),
  )
}

export async function getApiV2SecurityMonitoringEntityContextId(
  args: InferRequestType<(typeof client.api.v2.security_monitoring.entity_context)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security_monitoring.entity_context[':id'].$get(args, options),
  )
}

export async function getApiV2SecurityMonitoringEventsEventIdMatchingSignals(
  args: InferRequestType<
    (typeof client.api.v2.security_monitoring.events)[':event_id']['matching_signals']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security_monitoring.events[':event_id'].matching_signals.$get(args, options),
  )
}

export async function getApiV2SecurityMonitoringRules(
  args: InferRequestType<typeof client.api.v2.security_monitoring.rules.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.security_monitoring.rules.$get(args, options))
}

export async function postApiV2SecurityMonitoringRules(
  args: InferRequestType<typeof client.api.v2.security_monitoring.rules.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.security_monitoring.rules.$post(args, options))
}

export async function deleteApiV2SecurityMonitoringRulesBulkDelete(
  args: InferRequestType<typeof client.api.v2.security_monitoring.rules.bulk_delete.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security_monitoring.rules.bulk_delete.$delete(args, options),
  )
}

export async function postApiV2SecurityMonitoringRulesBulkExport(
  args: InferRequestType<typeof client.api.v2.security_monitoring.rules.bulk_export.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security_monitoring.rules.bulk_export.$post(args, options),
  )
}

export async function postApiV2SecurityMonitoringRulesConvert(
  args: InferRequestType<typeof client.api.v2.security_monitoring.rules.convert.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.security_monitoring.rules.convert.$post(args, options))
}

export async function postApiV2SecurityMonitoringRulesConvertBulk(
  args: InferRequestType<typeof client.api.v2.security_monitoring.rules.convert.bulk.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security_monitoring.rules.convert.bulk.$post(args, options),
  )
}

export async function postApiV2SecurityMonitoringRulesProposals(
  args: InferRequestType<typeof client.api.v2.security_monitoring.rules.proposals.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.security_monitoring.rules.proposals.$post(args, options))
}

export async function getApiV2SecurityMonitoringRulesProposalsProposalId(
  args: InferRequestType<
    (typeof client.api.v2.security_monitoring.rules.proposals)[':proposal_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security_monitoring.rules.proposals[':proposal_id'].$get(args, options),
  )
}

export async function postApiV2SecurityMonitoringRulesTest(
  args: InferRequestType<typeof client.api.v2.security_monitoring.rules.test.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.security_monitoring.rules.test.$post(args, options))
}

export async function postApiV2SecurityMonitoringRulesValidation(
  args: InferRequestType<typeof client.api.v2.security_monitoring.rules.validation.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security_monitoring.rules.validation.$post(args, options),
  )
}

export async function getApiV2SecurityMonitoringRulesRuleId(
  args: InferRequestType<(typeof client.api.v2.security_monitoring.rules)[':rule_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security_monitoring.rules[':rule_id'].$get(args, options),
  )
}

export async function putApiV2SecurityMonitoringRulesRuleId(
  args: InferRequestType<(typeof client.api.v2.security_monitoring.rules)[':rule_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security_monitoring.rules[':rule_id'].$put(args, options),
  )
}

export async function deleteApiV2SecurityMonitoringRulesRuleId(
  args: InferRequestType<(typeof client.api.v2.security_monitoring.rules)[':rule_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security_monitoring.rules[':rule_id'].$delete(args, options),
  )
}

export async function getApiV2SecurityMonitoringRulesRuleIdConvert(
  args: InferRequestType<
    (typeof client.api.v2.security_monitoring.rules)[':rule_id']['convert']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security_monitoring.rules[':rule_id'].convert.$get(args, options),
  )
}

export async function postApiV2SecurityMonitoringRulesRuleIdRestoreVersion(
  args: InferRequestType<
    (typeof client.api.v2.security_monitoring.rules)[':rule_id']['restore'][':version']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security_monitoring.rules[':rule_id'].restore[':version'].$post(args, options),
  )
}

export async function postApiV2SecurityMonitoringRulesRuleIdTest(
  args: InferRequestType<
    (typeof client.api.v2.security_monitoring.rules)[':rule_id']['test']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security_monitoring.rules[':rule_id'].test.$post(args, options),
  )
}

export async function getApiV2SecurityMonitoringRulesRuleIdVersionHistory(
  args: InferRequestType<
    (typeof client.api.v2.security_monitoring.rules)[':rule_id']['version_history']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security_monitoring.rules[':rule_id'].version_history.$get(args, options),
  )
}

export async function getApiV2SecurityMonitoringSampleLogGenerationSubscriptions(
  args: InferRequestType<
    typeof client.api.v2.security_monitoring.sample_log_generation.subscriptions.$get
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security_monitoring.sample_log_generation.subscriptions.$get(args, options),
  )
}

export async function postApiV2SecurityMonitoringSampleLogGenerationSubscriptions(
  args: InferRequestType<
    typeof client.api.v2.security_monitoring.sample_log_generation.subscriptions.$post
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security_monitoring.sample_log_generation.subscriptions.$post(args, options),
  )
}

export async function postApiV2SecurityMonitoringSampleLogGenerationSubscriptionsBulk(
  args: InferRequestType<
    typeof client.api.v2.security_monitoring.sample_log_generation.subscriptions.bulk.$post
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security_monitoring.sample_log_generation.subscriptions.bulk.$post(args, options),
  )
}

export async function deleteApiV2SecurityMonitoringSampleLogGenerationSubscriptionsContentPackId(
  args: InferRequestType<
    (typeof client.api.v2.security_monitoring.sample_log_generation.subscriptions)[':content_pack_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security_monitoring.sample_log_generation.subscriptions[
      ':content_pack_id'
    ].$delete(args, options),
  )
}

export async function getApiV2SecurityMonitoringSecurityAgentInvestigations(
  args: InferRequestType<
    typeof client.api.v2.security_monitoring.security_agent.investigations.$get
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security_monitoring.security_agent.investigations.$get(args, options),
  )
}

export async function getApiV2SecurityMonitoringSecurityAgentInvestigationsCount(
  args: InferRequestType<
    typeof client.api.v2.security_monitoring.security_agent.investigations.count.$get
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security_monitoring.security_agent.investigations.count.$get(args, options),
  )
}

export async function getApiV2SecurityMonitoringSecurityAgentInvestigationsInvestigationId(
  args: InferRequestType<
    (typeof client.api.v2.security_monitoring.security_agent.investigations)[':investigation_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security_monitoring.security_agent.investigations[':investigation_id'].$get(
      args,
      options,
    ),
  )
}

export async function getApiV2SecurityMonitoringSignals(
  args: InferRequestType<typeof client.api.v2.security_monitoring.signals.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.security_monitoring.signals.$get(args, options))
}

export async function patchApiV2SecurityMonitoringSignalsBulkAssignee(
  args: InferRequestType<typeof client.api.v2.security_monitoring.signals.bulk.assignee.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security_monitoring.signals.bulk.assignee.$patch(args, options),
  )
}

export async function patchApiV2SecurityMonitoringSignalsBulkState(
  args: InferRequestType<typeof client.api.v2.security_monitoring.signals.bulk.state.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security_monitoring.signals.bulk.state.$patch(args, options),
  )
}

export async function patchApiV2SecurityMonitoringSignalsBulkUpdate(
  args: InferRequestType<typeof client.api.v2.security_monitoring.signals.bulk.update.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security_monitoring.signals.bulk.update.$patch(args, options),
  )
}

export async function postApiV2SecurityMonitoringSignalsSearch(
  args: InferRequestType<typeof client.api.v2.security_monitoring.signals.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.security_monitoring.signals.search.$post(args, options))
}

export async function getApiV2SecurityMonitoringSignalsSignalId(
  args: InferRequestType<(typeof client.api.v2.security_monitoring.signals)[':signal_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security_monitoring.signals[':signal_id'].$get(args, options),
  )
}

export async function patchApiV2SecurityMonitoringSignalsSignalIdAssignee(
  args: InferRequestType<
    (typeof client.api.v2.security_monitoring.signals)[':signal_id']['assignee']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security_monitoring.signals[':signal_id'].assignee.$patch(args, options),
  )
}

export async function getApiV2SecurityMonitoringSignalsSignalIdEntities(
  args: InferRequestType<
    (typeof client.api.v2.security_monitoring.signals)[':signal_id']['entities']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security_monitoring.signals[':signal_id'].entities.$get(args, options),
  )
}

export async function patchApiV2SecurityMonitoringSignalsSignalIdIncidents(
  args: InferRequestType<
    (typeof client.api.v2.security_monitoring.signals)[':signal_id']['incidents']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security_monitoring.signals[':signal_id'].incidents.$patch(args, options),
  )
}

export async function getApiV2SecurityMonitoringSignalsSignalIdInvestigationQueries(
  args: InferRequestType<
    (typeof client.api.v2.security_monitoring.signals)[':signal_id']['investigation_queries']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security_monitoring.signals[':signal_id'].investigation_queries.$get(
      args,
      options,
    ),
  )
}

export async function patchApiV2SecurityMonitoringSignalsSignalIdState(
  args: InferRequestType<
    (typeof client.api.v2.security_monitoring.signals)[':signal_id']['state']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security_monitoring.signals[':signal_id'].state.$patch(args, options),
  )
}

export async function getApiV2SecurityMonitoringSignalsSignalIdSuggestedActions(
  args: InferRequestType<
    (typeof client.api.v2.security_monitoring.signals)[':signal_id']['suggested_actions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security_monitoring.signals[':signal_id'].suggested_actions.$get(args, options),
  )
}

export async function patchApiV2SecurityMonitoringSignalsSignalIdUpdate(
  args: InferRequestType<
    (typeof client.api.v2.security_monitoring.signals)[':signal_id']['update']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security_monitoring.signals[':signal_id'].update.$patch(args, options),
  )
}

export async function postApiV2SecurityMonitoringTerraformResourceTypeBulk(
  args: InferRequestType<
    (typeof client.api.v2.security_monitoring.terraform)[':resource_type']['bulk']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security_monitoring.terraform[':resource_type'].bulk.$post(args, options),
  )
}

export async function postApiV2SecurityMonitoringTerraformResourceTypeConvert(
  args: InferRequestType<
    (typeof client.api.v2.security_monitoring.terraform)[':resource_type']['convert']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security_monitoring.terraform[':resource_type'].convert.$post(args, options),
  )
}

export async function getApiV2SecurityMonitoringTerraformResourceTypeResourceId(
  args: InferRequestType<
    (typeof client.api.v2.security_monitoring.terraform)[':resource_type'][':resource_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.security_monitoring.terraform[':resource_type'][':resource_id'].$get(
      args,
      options,
    ),
  )
}

export async function getApiV2SensitiveDataScannerConfig(options?: ClientRequestOptions) {
  return await parseResponse(
    client.api.v2['sensitive-data-scanner'].config.$get(undefined, options),
  )
}

export async function patchApiV2SensitiveDataScannerConfig(
  args: InferRequestType<(typeof client.api.v2)['sensitive-data-scanner']['config']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['sensitive-data-scanner'].config.$patch(args, options))
}

export async function postApiV2SensitiveDataScannerConfigGroups(
  args: InferRequestType<
    (typeof client.api.v2)['sensitive-data-scanner']['config']['groups']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['sensitive-data-scanner'].config.groups.$post(args, options),
  )
}

export async function deleteApiV2SensitiveDataScannerConfigGroupsGroupId(
  args: InferRequestType<
    (typeof client.api.v2)['sensitive-data-scanner']['config']['groups'][':group_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['sensitive-data-scanner'].config.groups[':group_id'].$delete(args, options),
  )
}

export async function patchApiV2SensitiveDataScannerConfigGroupsGroupId(
  args: InferRequestType<
    (typeof client.api.v2)['sensitive-data-scanner']['config']['groups'][':group_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['sensitive-data-scanner'].config.groups[':group_id'].$patch(args, options),
  )
}

export async function postApiV2SensitiveDataScannerConfigRules(
  args: InferRequestType<
    (typeof client.api.v2)['sensitive-data-scanner']['config']['rules']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['sensitive-data-scanner'].config.rules.$post(args, options),
  )
}

export async function deleteApiV2SensitiveDataScannerConfigRulesRuleId(
  args: InferRequestType<
    (typeof client.api.v2)['sensitive-data-scanner']['config']['rules'][':rule_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['sensitive-data-scanner'].config.rules[':rule_id'].$delete(args, options),
  )
}

export async function patchApiV2SensitiveDataScannerConfigRulesRuleId(
  args: InferRequestType<
    (typeof client.api.v2)['sensitive-data-scanner']['config']['rules'][':rule_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['sensitive-data-scanner'].config.rules[':rule_id'].$patch(args, options),
  )
}

export async function getApiV2SensitiveDataScannerConfigStandardPatterns(
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['sensitive-data-scanner'].config['standard-patterns'].$get(undefined, options),
  )
}

export async function postApiV2Series(
  args: InferRequestType<typeof client.api.v2.series.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.series.$post(args, options))
}

export async function postApiV2ServiceAccounts(
  args: InferRequestType<typeof client.api.v2.service_accounts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.service_accounts.$post(args, options))
}

export async function getApiV2ServiceAccountsServiceAccountIdAccessTokens(
  args: InferRequestType<
    (typeof client.api.v2.service_accounts)[':service_account_id']['access_tokens']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.service_accounts[':service_account_id'].access_tokens.$get(args, options),
  )
}

export async function postApiV2ServiceAccountsServiceAccountIdAccessTokens(
  args: InferRequestType<
    (typeof client.api.v2.service_accounts)[':service_account_id']['access_tokens']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.service_accounts[':service_account_id'].access_tokens.$post(args, options),
  )
}

export async function getApiV2ServiceAccountsServiceAccountIdAccessTokensTokenId(
  args: InferRequestType<
    (typeof client.api.v2.service_accounts)[':service_account_id']['access_tokens'][':token_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.service_accounts[':service_account_id'].access_tokens[':token_id'].$get(
      args,
      options,
    ),
  )
}

export async function deleteApiV2ServiceAccountsServiceAccountIdAccessTokensTokenId(
  args: InferRequestType<
    (typeof client.api.v2.service_accounts)[':service_account_id']['access_tokens'][':token_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.service_accounts[':service_account_id'].access_tokens[':token_id'].$delete(
      args,
      options,
    ),
  )
}

export async function patchApiV2ServiceAccountsServiceAccountIdAccessTokensTokenId(
  args: InferRequestType<
    (typeof client.api.v2.service_accounts)[':service_account_id']['access_tokens'][':token_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.service_accounts[':service_account_id'].access_tokens[':token_id'].$patch(
      args,
      options,
    ),
  )
}

export async function getApiV2ServiceAccountsServiceAccountIdApplicationKeys(
  args: InferRequestType<
    (typeof client.api.v2.service_accounts)[':service_account_id']['application_keys']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.service_accounts[':service_account_id'].application_keys.$get(args, options),
  )
}

export async function postApiV2ServiceAccountsServiceAccountIdApplicationKeys(
  args: InferRequestType<
    (typeof client.api.v2.service_accounts)[':service_account_id']['application_keys']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.service_accounts[':service_account_id'].application_keys.$post(args, options),
  )
}

export async function getApiV2ServiceAccountsServiceAccountIdApplicationKeysAppKeyId(
  args: InferRequestType<
    (typeof client.api.v2.service_accounts)[':service_account_id']['application_keys'][':app_key_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.service_accounts[':service_account_id'].application_keys[':app_key_id'].$get(
      args,
      options,
    ),
  )
}

export async function deleteApiV2ServiceAccountsServiceAccountIdApplicationKeysAppKeyId(
  args: InferRequestType<
    (typeof client.api.v2.service_accounts)[':service_account_id']['application_keys'][':app_key_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.service_accounts[':service_account_id'].application_keys[':app_key_id'].$delete(
      args,
      options,
    ),
  )
}

export async function patchApiV2ServiceAccountsServiceAccountIdApplicationKeysAppKeyId(
  args: InferRequestType<
    (typeof client.api.v2.service_accounts)[':service_account_id']['application_keys'][':app_key_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.service_accounts[':service_account_id'].application_keys[':app_key_id'].$patch(
      args,
      options,
    ),
  )
}

export async function getApiV2ServicesDefinitions(
  args: InferRequestType<typeof client.api.v2.services.definitions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.services.definitions.$get(args, options))
}

export async function postApiV2ServicesDefinitions(
  args: InferRequestType<typeof client.api.v2.services.definitions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.services.definitions.$post(args, options))
}

export async function getApiV2ServicesDefinitionsServiceName(
  args: InferRequestType<(typeof client.api.v2.services.definitions)[':service_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.services.definitions[':service_name'].$get(args, options),
  )
}

export async function deleteApiV2ServicesDefinitionsServiceName(
  args: InferRequestType<(typeof client.api.v2.services.definitions)[':service_name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.services.definitions[':service_name'].$delete(args, options),
  )
}

export async function getApiV2SiemHistoricalDetectionsHistsignals(
  args: InferRequestType<
    (typeof client.api.v2)['siem-historical-detections']['histsignals']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['siem-historical-detections'].histsignals.$get(args, options),
  )
}

export async function postApiV2SiemHistoricalDetectionsHistsignalsSearch(
  args: InferRequestType<
    (typeof client.api.v2)['siem-historical-detections']['histsignals']['search']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['siem-historical-detections'].histsignals.search.$post(args, options),
  )
}

export async function getApiV2SiemHistoricalDetectionsHistsignalsHistsignalId(
  args: InferRequestType<
    (typeof client.api.v2)['siem-historical-detections']['histsignals'][':histsignal_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['siem-historical-detections'].histsignals[':histsignal_id'].$get(args, options),
  )
}

export async function getApiV2SiemHistoricalDetectionsJobs(
  args: InferRequestType<(typeof client.api.v2)['siem-historical-detections']['jobs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['siem-historical-detections'].jobs.$get(args, options))
}

export async function postApiV2SiemHistoricalDetectionsJobs(
  args: InferRequestType<(typeof client.api.v2)['siem-historical-detections']['jobs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['siem-historical-detections'].jobs.$post(args, options))
}

export async function postApiV2SiemHistoricalDetectionsJobsSignalConvert(
  args: InferRequestType<
    (typeof client.api.v2)['siem-historical-detections']['jobs']['signal_convert']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['siem-historical-detections'].jobs.signal_convert.$post(args, options),
  )
}

export async function getApiV2SiemHistoricalDetectionsJobsJobId(
  args: InferRequestType<
    (typeof client.api.v2)['siem-historical-detections']['jobs'][':job_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['siem-historical-detections'].jobs[':job_id'].$get(args, options),
  )
}

export async function deleteApiV2SiemHistoricalDetectionsJobsJobId(
  args: InferRequestType<
    (typeof client.api.v2)['siem-historical-detections']['jobs'][':job_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['siem-historical-detections'].jobs[':job_id'].$delete(args, options),
  )
}

export async function patchApiV2SiemHistoricalDetectionsJobsJobIdCancel(
  args: InferRequestType<
    (typeof client.api.v2)['siem-historical-detections']['jobs'][':job_id']['cancel']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['siem-historical-detections'].jobs[':job_id'].cancel.$patch(args, options),
  )
}

export async function getApiV2SiemHistoricalDetectionsJobsJobIdHistsignals(
  args: InferRequestType<
    (typeof client.api.v2)['siem-historical-detections']['jobs'][':job_id']['histsignals']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['siem-historical-detections'].jobs[':job_id'].histsignals.$get(args, options),
  )
}

export async function postApiV2SloReport(
  args: InferRequestType<typeof client.api.v2.slo.report.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.slo.report.$post(args, options))
}

export async function getApiV2SloReportReportIdDownload(
  args: InferRequestType<(typeof client.api.v2.slo.report)[':report_id']['download']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.slo.report[':report_id'].download.$get(args, options))
}

export async function getApiV2SloReportReportIdStatus(
  args: InferRequestType<(typeof client.api.v2.slo.report)[':report_id']['status']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.slo.report[':report_id'].status.$get(args, options))
}

export async function getApiV2SloSloIdStatus(
  args: InferRequestType<(typeof client.api.v2.slo)[':slo_id']['status']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.slo[':slo_id'].status.$get(args, options))
}

export async function postApiV2Snapshot(
  args: InferRequestType<typeof client.api.v2.snapshot.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.snapshot.$post(args, options))
}

export async function getApiV2Sourcemaps(
  args: InferRequestType<typeof client.api.v2.sourcemaps.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.sourcemaps.$get(args, options))
}

export async function deleteApiV2Sourcemaps(
  args: InferRequestType<typeof client.api.v2.sourcemaps.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.sourcemaps.$delete(args, options))
}

export async function getApiV2SourcemapsList(
  args: InferRequestType<typeof client.api.v2.sourcemaps.list.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.sourcemaps.list.$get(args, options))
}

export async function patchApiV2SourcemapsRestore(
  args: InferRequestType<typeof client.api.v2.sourcemaps.restore.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.sourcemaps.restore.$patch(args, options))
}

export async function postApiV2SourcemapsServiceRepositoryInfo(
  args: InferRequestType<typeof client.api.v2.sourcemaps.service_repository_info.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.sourcemaps.service_repository_info.$post(args, options))
}

export async function postApiV2SpansAnalyticsAggregate(
  args: InferRequestType<typeof client.api.v2.spans.analytics.aggregate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.spans.analytics.aggregate.$post(args, options))
}

export async function getApiV2SpansEvents(
  args: InferRequestType<typeof client.api.v2.spans.events.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.spans.events.$get(args, options))
}

export async function postApiV2SpansEventsSearch(
  args: InferRequestType<typeof client.api.v2.spans.events.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.spans.events.search.$post(args, options))
}

export async function postApiV2StaticAnalysisScaDependencies(
  args: InferRequestType<(typeof client.api.v2)['static-analysis-sca']['dependencies']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['static-analysis-sca'].dependencies.$post(args, options))
}

export async function postApiV2StaticAnalysisScaDependenciesScan(
  args: InferRequestType<
    (typeof client.api.v2)['static-analysis-sca']['dependencies']['scan']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['static-analysis-sca'].dependencies.scan.$post(args, options),
  )
}

export async function getApiV2StaticAnalysisScaDependenciesScanJobId(
  args: InferRequestType<
    (typeof client.api.v2)['static-analysis-sca']['dependencies']['scan'][':job_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['static-analysis-sca'].dependencies.scan[':job_id'].$get(args, options),
  )
}

export async function getApiV2StaticAnalysisScaLicensesList(options?: ClientRequestOptions) {
  return await parseResponse(
    client.api.v2['static-analysis-sca'].licenses.list.$get(undefined, options),
  )
}

export async function postApiV2StaticAnalysisScaVulnerabilitiesResolveVulnerableSymbols(
  args: InferRequestType<
    (typeof client.api.v2)['static-analysis-sca']['vulnerabilities']['resolve-vulnerable-symbols']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['static-analysis-sca'].vulnerabilities['resolve-vulnerable-symbols'].$post(
      args,
      options,
    ),
  )
}

export async function getApiV2StaticAnalysisAiMemory(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2['static-analysis'].ai.memory.$get(undefined, options))
}

export async function postApiV2StaticAnalysisAiMemory(
  args: InferRequestType<(typeof client.api.v2)['static-analysis']['ai']['memory']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['static-analysis'].ai.memory.$post(args, options))
}

export async function deleteApiV2StaticAnalysisAiMemoryId(
  args: InferRequestType<
    (typeof client.api.v2)['static-analysis']['ai']['memory'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['static-analysis'].ai.memory[':id'].$delete(args, options),
  )
}

export async function getApiV2StaticAnalysisAiPrompts(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2['static-analysis'].ai.prompts.$get(undefined, options))
}

export async function getApiV2StaticAnalysisAiRulesets(
  args: InferRequestType<(typeof client.api.v2)['static-analysis']['ai']['rulesets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['static-analysis'].ai.rulesets.$get(args, options))
}

export async function postApiV2StaticAnalysisAiRulesets(
  args: InferRequestType<(typeof client.api.v2)['static-analysis']['ai']['rulesets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['static-analysis'].ai.rulesets.$post(args, options))
}

export async function getApiV2StaticAnalysisAiRulesetsRulesetName(
  args: InferRequestType<
    (typeof client.api.v2)['static-analysis']['ai']['rulesets'][':ruleset_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['static-analysis'].ai.rulesets[':ruleset_name'].$get(args, options),
  )
}

export async function deleteApiV2StaticAnalysisAiRulesetsRulesetName(
  args: InferRequestType<
    (typeof client.api.v2)['static-analysis']['ai']['rulesets'][':ruleset_name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['static-analysis'].ai.rulesets[':ruleset_name'].$delete(args, options),
  )
}

export async function patchApiV2StaticAnalysisAiRulesetsRulesetName(
  args: InferRequestType<
    (typeof client.api.v2)['static-analysis']['ai']['rulesets'][':ruleset_name']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['static-analysis'].ai.rulesets[':ruleset_name'].$patch(args, options),
  )
}

export async function postApiV2StaticAnalysisAiRulesetsRulesetNameRules(
  args: InferRequestType<
    (typeof client.api.v2)['static-analysis']['ai']['rulesets'][':ruleset_name']['rules']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['static-analysis'].ai.rulesets[':ruleset_name'].rules.$post(args, options),
  )
}

export async function getApiV2StaticAnalysisAiRulesetsRulesetNameRulesRuleName(
  args: InferRequestType<
    (typeof client.api.v2)['static-analysis']['ai']['rulesets'][':ruleset_name']['rules'][':rule_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['static-analysis'].ai.rulesets[':ruleset_name'].rules[':rule_name'].$get(
      args,
      options,
    ),
  )
}

export async function deleteApiV2StaticAnalysisAiRulesetsRulesetNameRulesRuleName(
  args: InferRequestType<
    (typeof client.api.v2)['static-analysis']['ai']['rulesets'][':ruleset_name']['rules'][':rule_name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['static-analysis'].ai.rulesets[':ruleset_name'].rules[':rule_name'].$delete(
      args,
      options,
    ),
  )
}

export async function getApiV2StaticAnalysisAiRulesetsRulesetNameRulesRuleNameRevisions(
  args: InferRequestType<
    (typeof client.api.v2)['static-analysis']['ai']['rulesets'][':ruleset_name']['rules'][':rule_name']['revisions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['static-analysis'].ai.rulesets[':ruleset_name'].rules[
      ':rule_name'
    ].revisions.$get(args, options),
  )
}

export async function postApiV2StaticAnalysisAiRulesetsRulesetNameRulesRuleNameRevisions(
  args: InferRequestType<
    (typeof client.api.v2)['static-analysis']['ai']['rulesets'][':ruleset_name']['rules'][':rule_name']['revisions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['static-analysis'].ai.rulesets[':ruleset_name'].rules[
      ':rule_name'
    ].revisions.$post(args, options),
  )
}

export async function getApiV2StaticAnalysisAiRulesetsRulesetNameRulesRuleNameRevisionsId(
  args: InferRequestType<
    (typeof client.api.v2)['static-analysis']['ai']['rulesets'][':ruleset_name']['rules'][':rule_name']['revisions'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['static-analysis'].ai.rulesets[':ruleset_name'].rules[':rule_name'].revisions[
      ':id'
    ].$get(args, options),
  )
}

export async function getApiV2StaticAnalysisCodegenRulesets(options?: ClientRequestOptions) {
  return await parseResponse(
    client.api.v2['static-analysis'].codegen.rulesets.$get(undefined, options),
  )
}

export async function getApiV2StaticAnalysisCustomRulesets(options?: ClientRequestOptions) {
  return await parseResponse(
    client.api.v2['static-analysis'].custom.rulesets.$get(undefined, options),
  )
}

export async function putApiV2StaticAnalysisCustomRulesets(
  args: InferRequestType<(typeof client.api.v2)['static-analysis']['custom']['rulesets']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['static-analysis'].custom.rulesets.$put(args, options))
}

export async function getApiV2StaticAnalysisCustomRulesetsRulesetName(
  args: InferRequestType<
    (typeof client.api.v2)['static-analysis']['custom']['rulesets'][':ruleset_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['static-analysis'].custom.rulesets[':ruleset_name'].$get(args, options),
  )
}

export async function deleteApiV2StaticAnalysisCustomRulesetsRulesetName(
  args: InferRequestType<
    (typeof client.api.v2)['static-analysis']['custom']['rulesets'][':ruleset_name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['static-analysis'].custom.rulesets[':ruleset_name'].$delete(args, options),
  )
}

export async function patchApiV2StaticAnalysisCustomRulesetsRulesetName(
  args: InferRequestType<
    (typeof client.api.v2)['static-analysis']['custom']['rulesets'][':ruleset_name']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['static-analysis'].custom.rulesets[':ruleset_name'].$patch(args, options),
  )
}

export async function putApiV2StaticAnalysisCustomRulesetsRulesetNameRules(
  args: InferRequestType<
    (typeof client.api.v2)['static-analysis']['custom']['rulesets'][':ruleset_name']['rules']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['static-analysis'].custom.rulesets[':ruleset_name'].rules.$put(args, options),
  )
}

export async function getApiV2StaticAnalysisCustomRulesetsRulesetNameRulesRuleName(
  args: InferRequestType<
    (typeof client.api.v2)['static-analysis']['custom']['rulesets'][':ruleset_name']['rules'][':rule_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['static-analysis'].custom.rulesets[':ruleset_name'].rules[':rule_name'].$get(
      args,
      options,
    ),
  )
}

export async function deleteApiV2StaticAnalysisCustomRulesetsRulesetNameRulesRuleName(
  args: InferRequestType<
    (typeof client.api.v2)['static-analysis']['custom']['rulesets'][':ruleset_name']['rules'][':rule_name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['static-analysis'].custom.rulesets[':ruleset_name'].rules[':rule_name'].$delete(
      args,
      options,
    ),
  )
}

export async function getApiV2StaticAnalysisCustomRulesetsRulesetNameRulesRuleNameRevisions(
  args: InferRequestType<
    (typeof client.api.v2)['static-analysis']['custom']['rulesets'][':ruleset_name']['rules'][':rule_name']['revisions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['static-analysis'].custom.rulesets[':ruleset_name'].rules[
      ':rule_name'
    ].revisions.$get(args, options),
  )
}

export async function putApiV2StaticAnalysisCustomRulesetsRulesetNameRulesRuleNameRevisions(
  args: InferRequestType<
    (typeof client.api.v2)['static-analysis']['custom']['rulesets'][':ruleset_name']['rules'][':rule_name']['revisions']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['static-analysis'].custom.rulesets[':ruleset_name'].rules[
      ':rule_name'
    ].revisions.$put(args, options),
  )
}

export async function postApiV2StaticAnalysisCustomRulesetsRulesetNameRulesRuleNameRevisionsRevert(
  args: InferRequestType<
    (typeof client.api.v2)['static-analysis']['custom']['rulesets'][':ruleset_name']['rules'][':rule_name']['revisions']['revert']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['static-analysis'].custom.rulesets[':ruleset_name'].rules[
      ':rule_name'
    ].revisions.revert.$post(args, options),
  )
}

export async function getApiV2StaticAnalysisCustomRulesetsRulesetNameRulesRuleNameRevisionsId(
  args: InferRequestType<
    (typeof client.api.v2)['static-analysis']['custom']['rulesets'][':ruleset_name']['rules'][':rule_name']['revisions'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['static-analysis'].custom.rulesets[':ruleset_name'].rules[':rule_name'].revisions[
      ':id'
    ].$get(args, options),
  )
}

export async function getApiV2StaticAnalysisDefaultRulesetsLanguage(
  args: InferRequestType<
    (typeof client.api.v2)['static-analysis']['default-rulesets'][':language']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['static-analysis']['default-rulesets'][':language'].$get(args, options),
  )
}

export async function postApiV2StaticAnalysisRulesets(
  args: InferRequestType<(typeof client.api.v2)['static-analysis']['rulesets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['static-analysis'].rulesets.$post(args, options))
}

export async function getApiV2StaticAnalysisRulesetsRulesetName(
  args: InferRequestType<
    (typeof client.api.v2)['static-analysis']['rulesets'][':ruleset_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['static-analysis'].rulesets[':ruleset_name'].$get(args, options),
  )
}

export async function getApiV2StaticAnalysisSecretsRules(options?: ClientRequestOptions) {
  return await parseResponse(
    client.api.v2['static-analysis'].secrets.rules.$get(undefined, options),
  )
}

export async function postApiV2StaticAnalysisStaticAnalysisServerAnalyze(
  args: InferRequestType<
    (typeof client.api.v2)['static-analysis']['static-analysis-server']['analyze']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['static-analysis']['static-analysis-server'].analyze.$post(args, options),
  )
}

export async function postApiV2StaticAnalysisStaticAnalysisServerGetAst(
  args: InferRequestType<
    (typeof client.api.v2)['static-analysis']['static-analysis-server']['get-ast']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['static-analysis']['static-analysis-server']['get-ast'].$post(args, options),
  )
}

export async function getApiV2StaticAnalysisStaticAnalysisServerNodeTypesLanguage(
  args: InferRequestType<
    (typeof client.api.v2)['static-analysis']['static-analysis-server']['node-types'][':language']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['static-analysis']['static-analysis-server']['node-types'][':language'].$get(
      args,
      options,
    ),
  )
}

export async function getApiV2StaticAnalysisStaticAnalysisServerTreeSitterWasmFile(
  args: InferRequestType<
    (typeof client.api.v2)['static-analysis']['static-analysis-server']['tree-sitter-wasm'][':file']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['static-analysis']['static-analysis-server']['tree-sitter-wasm'][':file'].$get(
      args,
      options,
    ),
  )
}

export async function getApiV2Statuspages(
  args: InferRequestType<typeof client.api.v2.statuspages.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.statuspages.$get(args, options))
}

export async function postApiV2Statuspages(
  args: InferRequestType<typeof client.api.v2.statuspages.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.statuspages.$post(args, options))
}

export async function getApiV2StatuspagesDegradations(
  args: InferRequestType<typeof client.api.v2.statuspages.degradations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.statuspages.degradations.$get(args, options))
}

export async function getApiV2StatuspagesMaintenances(
  args: InferRequestType<typeof client.api.v2.statuspages.maintenances.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.statuspages.maintenances.$get(args, options))
}

export async function getApiV2StatuspagesPageId(
  args: InferRequestType<(typeof client.api.v2.statuspages)[':page_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.statuspages[':page_id'].$get(args, options))
}

export async function deleteApiV2StatuspagesPageId(
  args: InferRequestType<(typeof client.api.v2.statuspages)[':page_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.statuspages[':page_id'].$delete(args, options))
}

export async function patchApiV2StatuspagesPageId(
  args: InferRequestType<(typeof client.api.v2.statuspages)[':page_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.statuspages[':page_id'].$patch(args, options))
}

export async function getApiV2StatuspagesPageIdAccessPoliciesEmail(
  args: InferRequestType<
    (typeof client.api.v2.statuspages)[':page_id']['access_policies']['email']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.statuspages[':page_id'].access_policies.email.$get(args, options),
  )
}

export async function postApiV2StatuspagesPageIdAccessPoliciesEmail(
  args: InferRequestType<
    (typeof client.api.v2.statuspages)[':page_id']['access_policies']['email']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.statuspages[':page_id'].access_policies.email.$post(args, options),
  )
}

export async function deleteApiV2StatuspagesPageIdAccessPoliciesEmailPolicyId(
  args: InferRequestType<
    (typeof client.api.v2.statuspages)[':page_id']['access_policies']['email'][':policy_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.statuspages[':page_id'].access_policies.email[':policy_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getApiV2StatuspagesPageIdComponents(
  args: InferRequestType<(typeof client.api.v2.statuspages)[':page_id']['components']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.statuspages[':page_id'].components.$get(args, options))
}

export async function postApiV2StatuspagesPageIdComponents(
  args: InferRequestType<(typeof client.api.v2.statuspages)[':page_id']['components']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.statuspages[':page_id'].components.$post(args, options))
}

export async function getApiV2StatuspagesPageIdComponentsComponentId(
  args: InferRequestType<
    (typeof client.api.v2.statuspages)[':page_id']['components'][':component_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.statuspages[':page_id'].components[':component_id'].$get(args, options),
  )
}

export async function deleteApiV2StatuspagesPageIdComponentsComponentId(
  args: InferRequestType<
    (typeof client.api.v2.statuspages)[':page_id']['components'][':component_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.statuspages[':page_id'].components[':component_id'].$delete(args, options),
  )
}

export async function patchApiV2StatuspagesPageIdComponentsComponentId(
  args: InferRequestType<
    (typeof client.api.v2.statuspages)[':page_id']['components'][':component_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.statuspages[':page_id'].components[':component_id'].$patch(args, options),
  )
}

export async function getApiV2StatuspagesPageIdDegradationTemplates(
  args: InferRequestType<
    (typeof client.api.v2.statuspages)[':page_id']['degradation_templates']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.statuspages[':page_id'].degradation_templates.$get(args, options),
  )
}

export async function postApiV2StatuspagesPageIdDegradationTemplates(
  args: InferRequestType<
    (typeof client.api.v2.statuspages)[':page_id']['degradation_templates']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.statuspages[':page_id'].degradation_templates.$post(args, options),
  )
}

export async function getApiV2StatuspagesPageIdDegradationTemplatesTemplateId(
  args: InferRequestType<
    (typeof client.api.v2.statuspages)[':page_id']['degradation_templates'][':template_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.statuspages[':page_id'].degradation_templates[':template_id'].$get(args, options),
  )
}

export async function deleteApiV2StatuspagesPageIdDegradationTemplatesTemplateId(
  args: InferRequestType<
    (typeof client.api.v2.statuspages)[':page_id']['degradation_templates'][':template_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.statuspages[':page_id'].degradation_templates[':template_id'].$delete(
      args,
      options,
    ),
  )
}

export async function patchApiV2StatuspagesPageIdDegradationTemplatesTemplateId(
  args: InferRequestType<
    (typeof client.api.v2.statuspages)[':page_id']['degradation_templates'][':template_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.statuspages[':page_id'].degradation_templates[':template_id'].$patch(
      args,
      options,
    ),
  )
}

export async function postApiV2StatuspagesPageIdDegradations(
  args: InferRequestType<(typeof client.api.v2.statuspages)[':page_id']['degradations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.statuspages[':page_id'].degradations.$post(args, options),
  )
}

export async function postApiV2StatuspagesPageIdDegradationsBackfill(
  args: InferRequestType<
    (typeof client.api.v2.statuspages)[':page_id']['degradations']['backfill']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.statuspages[':page_id'].degradations.backfill.$post(args, options),
  )
}

export async function getApiV2StatuspagesPageIdDegradationsDegradationId(
  args: InferRequestType<
    (typeof client.api.v2.statuspages)[':page_id']['degradations'][':degradation_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.statuspages[':page_id'].degradations[':degradation_id'].$get(args, options),
  )
}

export async function deleteApiV2StatuspagesPageIdDegradationsDegradationId(
  args: InferRequestType<
    (typeof client.api.v2.statuspages)[':page_id']['degradations'][':degradation_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.statuspages[':page_id'].degradations[':degradation_id'].$delete(args, options),
  )
}

export async function patchApiV2StatuspagesPageIdDegradationsDegradationId(
  args: InferRequestType<
    (typeof client.api.v2.statuspages)[':page_id']['degradations'][':degradation_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.statuspages[':page_id'].degradations[':degradation_id'].$patch(args, options),
  )
}

export async function deleteApiV2StatuspagesPageIdDegradationsDegradationIdUpdatesUpdateId(
  args: InferRequestType<
    (typeof client.api.v2.statuspages)[':page_id']['degradations'][':degradation_id']['updates'][':update_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.statuspages[':page_id'].degradations[':degradation_id'].updates[
      ':update_id'
    ].$delete(args, options),
  )
}

export async function patchApiV2StatuspagesPageIdDegradationsDegradationIdUpdatesUpdateId(
  args: InferRequestType<
    (typeof client.api.v2.statuspages)[':page_id']['degradations'][':degradation_id']['updates'][':update_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.statuspages[':page_id'].degradations[':degradation_id'].updates[
      ':update_id'
    ].$patch(args, options),
  )
}

export async function getApiV2StatuspagesPageIdMaintenanceTemplates(
  args: InferRequestType<
    (typeof client.api.v2.statuspages)[':page_id']['maintenance_templates']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.statuspages[':page_id'].maintenance_templates.$get(args, options),
  )
}

export async function postApiV2StatuspagesPageIdMaintenanceTemplates(
  args: InferRequestType<
    (typeof client.api.v2.statuspages)[':page_id']['maintenance_templates']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.statuspages[':page_id'].maintenance_templates.$post(args, options),
  )
}

export async function getApiV2StatuspagesPageIdMaintenanceTemplatesTemplateId(
  args: InferRequestType<
    (typeof client.api.v2.statuspages)[':page_id']['maintenance_templates'][':template_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.statuspages[':page_id'].maintenance_templates[':template_id'].$get(args, options),
  )
}

export async function deleteApiV2StatuspagesPageIdMaintenanceTemplatesTemplateId(
  args: InferRequestType<
    (typeof client.api.v2.statuspages)[':page_id']['maintenance_templates'][':template_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.statuspages[':page_id'].maintenance_templates[':template_id'].$delete(
      args,
      options,
    ),
  )
}

export async function patchApiV2StatuspagesPageIdMaintenanceTemplatesTemplateId(
  args: InferRequestType<
    (typeof client.api.v2.statuspages)[':page_id']['maintenance_templates'][':template_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.statuspages[':page_id'].maintenance_templates[':template_id'].$patch(
      args,
      options,
    ),
  )
}

export async function postApiV2StatuspagesPageIdMaintenances(
  args: InferRequestType<(typeof client.api.v2.statuspages)[':page_id']['maintenances']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.statuspages[':page_id'].maintenances.$post(args, options),
  )
}

export async function postApiV2StatuspagesPageIdMaintenancesBackfill(
  args: InferRequestType<
    (typeof client.api.v2.statuspages)[':page_id']['maintenances']['backfill']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.statuspages[':page_id'].maintenances.backfill.$post(args, options),
  )
}

export async function getApiV2StatuspagesPageIdMaintenancesMaintenanceId(
  args: InferRequestType<
    (typeof client.api.v2.statuspages)[':page_id']['maintenances'][':maintenance_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.statuspages[':page_id'].maintenances[':maintenance_id'].$get(args, options),
  )
}

export async function patchApiV2StatuspagesPageIdMaintenancesMaintenanceId(
  args: InferRequestType<
    (typeof client.api.v2.statuspages)[':page_id']['maintenances'][':maintenance_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.statuspages[':page_id'].maintenances[':maintenance_id'].$patch(args, options),
  )
}

export async function patchApiV2StatuspagesPageIdMaintenancesMaintenanceIdUpdatesUpdateId(
  args: InferRequestType<
    (typeof client.api.v2.statuspages)[':page_id']['maintenances'][':maintenance_id']['updates'][':update_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.statuspages[':page_id'].maintenances[':maintenance_id'].updates[
      ':update_id'
    ].$patch(args, options),
  )
}

export async function postApiV2StatuspagesPageIdPublish(
  args: InferRequestType<(typeof client.api.v2.statuspages)[':page_id']['publish']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.statuspages[':page_id'].publish.$post(args, options))
}

export async function postApiV2StatuspagesPageIdUnpublish(
  args: InferRequestType<(typeof client.api.v2.statuspages)[':page_id']['unpublish']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.statuspages[':page_id'].unpublish.$post(args, options))
}

export async function postApiV2StegadographyGetWidgets(
  args: InferRequestType<(typeof client.api.v2.stegadography)['get-widgets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.stegadography['get-widgets'].$post(args, options))
}

export async function getApiV2SyntheticsApiMultistepSubtestsPublicId(
  args: InferRequestType<
    (typeof client.api.v2.synthetics)['api-multistep']['subtests'][':public_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.synthetics['api-multistep'].subtests[':public_id'].$get(args, options),
  )
}

export async function getApiV2SyntheticsApiMultistepSubtestsPublicIdParents(
  args: InferRequestType<
    (typeof client.api.v2.synthetics)['api-multistep']['subtests'][':public_id']['parents']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.synthetics['api-multistep'].subtests[':public_id'].parents.$get(args, options),
  )
}

export async function getApiV2SyntheticsDowntimes(
  args: InferRequestType<typeof client.api.v2.synthetics.downtimes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.synthetics.downtimes.$get(args, options))
}

export async function postApiV2SyntheticsDowntimes(
  args: InferRequestType<typeof client.api.v2.synthetics.downtimes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.synthetics.downtimes.$post(args, options))
}

export async function getApiV2SyntheticsDowntimesDowntimeId(
  args: InferRequestType<(typeof client.api.v2.synthetics.downtimes)[':downtime_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.synthetics.downtimes[':downtime_id'].$get(args, options))
}

export async function putApiV2SyntheticsDowntimesDowntimeId(
  args: InferRequestType<(typeof client.api.v2.synthetics.downtimes)[':downtime_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.synthetics.downtimes[':downtime_id'].$put(args, options))
}

export async function deleteApiV2SyntheticsDowntimesDowntimeId(
  args: InferRequestType<(typeof client.api.v2.synthetics.downtimes)[':downtime_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.synthetics.downtimes[':downtime_id'].$delete(args, options),
  )
}

export async function putApiV2SyntheticsDowntimesDowntimeIdTestsTestId(
  args: InferRequestType<
    (typeof client.api.v2.synthetics.downtimes)[':downtime_id']['tests'][':test_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.synthetics.downtimes[':downtime_id'].tests[':test_id'].$put(args, options),
  )
}

export async function deleteApiV2SyntheticsDowntimesDowntimeIdTestsTestId(
  args: InferRequestType<
    (typeof client.api.v2.synthetics.downtimes)[':downtime_id']['tests'][':test_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.synthetics.downtimes[':downtime_id'].tests[':test_id'].$delete(args, options),
  )
}

export async function getApiV2SyntheticsSettingsOnDemandConcurrencyCap(
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.synthetics.settings.on_demand_concurrency_cap.$get(undefined, options),
  )
}

export async function postApiV2SyntheticsSettingsOnDemandConcurrencyCap(
  args: InferRequestType<typeof client.api.v2.synthetics.settings.on_demand_concurrency_cap.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.synthetics.settings.on_demand_concurrency_cap.$post(args, options),
  )
}

export async function postApiV2SyntheticsSuites(
  args: InferRequestType<typeof client.api.v2.synthetics.suites.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.synthetics.suites.$post(args, options))
}

export async function postApiV2SyntheticsSuitesBulkDelete(
  args: InferRequestType<(typeof client.api.v2.synthetics.suites)['bulk-delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.synthetics.suites['bulk-delete'].$post(args, options))
}

export async function getApiV2SyntheticsSuitesSearch(
  args: InferRequestType<typeof client.api.v2.synthetics.suites.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.synthetics.suites.search.$get(args, options))
}

export async function getApiV2SyntheticsSuitesPublicId(
  args: InferRequestType<(typeof client.api.v2.synthetics.suites)[':public_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.synthetics.suites[':public_id'].$get(args, options))
}

export async function putApiV2SyntheticsSuitesPublicId(
  args: InferRequestType<(typeof client.api.v2.synthetics.suites)[':public_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.synthetics.suites[':public_id'].$put(args, options))
}

export async function patchApiV2SyntheticsSuitesPublicIdJsonpatch(
  args: InferRequestType<
    (typeof client.api.v2.synthetics.suites)[':public_id']['jsonpatch']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.synthetics.suites[':public_id'].jsonpatch.$patch(args, options),
  )
}

export async function getApiV2SyntheticsTestsBrowserPublicIdResults(
  args: InferRequestType<
    (typeof client.api.v2.synthetics.tests.browser)[':public_id']['results']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.synthetics.tests.browser[':public_id'].results.$get(args, options),
  )
}

export async function getApiV2SyntheticsTestsBrowserPublicIdResultsResultId(
  args: InferRequestType<
    (typeof client.api.v2.synthetics.tests.browser)[':public_id']['results'][':result_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.synthetics.tests.browser[':public_id'].results[':result_id'].$get(args, options),
  )
}

export async function postApiV2SyntheticsTestsBulkDelete(
  args: InferRequestType<(typeof client.api.v2.synthetics.tests)['bulk-delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.synthetics.tests['bulk-delete'].$post(args, options))
}

export async function getApiV2SyntheticsTestsFastId(
  args: InferRequestType<(typeof client.api.v2.synthetics.tests.fast)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.synthetics.tests.fast[':id'].$get(args, options))
}

export async function postApiV2SyntheticsTestsNetwork(
  args: InferRequestType<typeof client.api.v2.synthetics.tests.network.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.synthetics.tests.network.$post(args, options))
}

export async function getApiV2SyntheticsTestsNetworkPublicId(
  args: InferRequestType<(typeof client.api.v2.synthetics.tests.network)[':public_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.synthetics.tests.network[':public_id'].$get(args, options),
  )
}

export async function putApiV2SyntheticsTestsNetworkPublicId(
  args: InferRequestType<(typeof client.api.v2.synthetics.tests.network)[':public_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.synthetics.tests.network[':public_id'].$put(args, options),
  )
}

export async function getApiV2SyntheticsTestsPollResults(
  args: InferRequestType<typeof client.api.v2.synthetics.tests.poll_results.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.synthetics.tests.poll_results.$get(args, options))
}

export async function postApiV2SyntheticsTestsPublicIdFilesDownload(
  args: InferRequestType<
    (typeof client.api.v2.synthetics.tests)[':public_id']['files']['download']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.synthetics.tests[':public_id'].files.download.$post(args, options),
  )
}

export async function postApiV2SyntheticsTestsPublicIdFilesMultipartPresignedUrls(
  args: InferRequestType<
    (typeof client.api.v2.synthetics.tests)[':public_id']['files']['multipart-presigned-urls']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.synthetics.tests[':public_id'].files['multipart-presigned-urls'].$post(
      args,
      options,
    ),
  )
}

export async function postApiV2SyntheticsTestsPublicIdFilesMultipartUploadAbort(
  args: InferRequestType<
    (typeof client.api.v2.synthetics.tests)[':public_id']['files']['multipart-upload-abort']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.synthetics.tests[':public_id'].files['multipart-upload-abort'].$post(
      args,
      options,
    ),
  )
}

export async function postApiV2SyntheticsTestsPublicIdFilesMultipartUploadComplete(
  args: InferRequestType<
    (typeof client.api.v2.synthetics.tests)[':public_id']['files']['multipart-upload-complete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.synthetics.tests[':public_id'].files['multipart-upload-complete'].$post(
      args,
      options,
    ),
  )
}

export async function getApiV2SyntheticsTestsPublicIdParentSuites(
  args: InferRequestType<
    (typeof client.api.v2.synthetics.tests)[':public_id']['parent-suites']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.synthetics.tests[':public_id']['parent-suites'].$get(args, options),
  )
}

export async function getApiV2SyntheticsTestsPublicIdResults(
  args: InferRequestType<(typeof client.api.v2.synthetics.tests)[':public_id']['results']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.synthetics.tests[':public_id'].results.$get(args, options),
  )
}

export async function getApiV2SyntheticsTestsPublicIdResultsResultId(
  args: InferRequestType<
    (typeof client.api.v2.synthetics.tests)[':public_id']['results'][':result_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.synthetics.tests[':public_id'].results[':result_id'].$get(args, options),
  )
}

export async function getApiV2SyntheticsTestsPublicIdVersionHistory(
  args: InferRequestType<
    (typeof client.api.v2.synthetics.tests)[':public_id']['version_history']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.synthetics.tests[':public_id'].version_history.$get(args, options),
  )
}

export async function getApiV2SyntheticsTestsPublicIdVersionHistoryVersionNumber(
  args: InferRequestType<
    (typeof client.api.v2.synthetics.tests)[':public_id']['version_history'][':version_number']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.synthetics.tests[':public_id'].version_history[':version_number'].$get(
      args,
      options,
    ),
  )
}

export async function patchApiV2SyntheticsVariablesVariableIdJsonpatch(
  args: InferRequestType<
    (typeof client.api.v2.synthetics.variables)[':variable_id']['jsonpatch']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.synthetics.variables[':variable_id'].jsonpatch.$patch(args, options),
  )
}

export async function getApiV2TagsEnrichment(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.tags.enrichment.$get(undefined, options))
}

export async function postApiV2TagsEnrichment(
  args: InferRequestType<typeof client.api.v2.tags.enrichment.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.tags.enrichment.$post(args, options))
}

export async function postApiV2TagsEnrichmentReorder(
  args: InferRequestType<typeof client.api.v2.tags.enrichment.reorder.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.tags.enrichment.reorder.$post(args, options))
}

export async function getApiV2TagsEnrichmentStatus(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.tags.enrichment.status.$get(undefined, options))
}

export async function postApiV2TagsEnrichmentValidateQuery(
  args: InferRequestType<(typeof client.api.v2.tags.enrichment)['validate-query']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.tags.enrichment['validate-query'].$post(args, options))
}

export async function getApiV2TagsEnrichmentRulesetId(
  args: InferRequestType<(typeof client.api.v2.tags.enrichment)[':ruleset_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.tags.enrichment[':ruleset_id'].$get(args, options))
}

export async function deleteApiV2TagsEnrichmentRulesetId(
  args: InferRequestType<(typeof client.api.v2.tags.enrichment)[':ruleset_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.tags.enrichment[':ruleset_id'].$delete(args, options))
}

export async function patchApiV2TagsEnrichmentRulesetId(
  args: InferRequestType<(typeof client.api.v2.tags.enrichment)[':ruleset_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.tags.enrichment[':ruleset_id'].$patch(args, options))
}

export async function getApiV2Team(
  args: InferRequestType<typeof client.api.v2.team.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.team.$get(args, options))
}

export async function postApiV2Team(
  args: InferRequestType<typeof client.api.v2.team.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.team.$post(args, options))
}

export async function getApiV2TeamHierarchyLinks(
  args: InferRequestType<(typeof client.api.v2)['team-hierarchy-links']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['team-hierarchy-links'].$get(args, options))
}

export async function postApiV2TeamHierarchyLinks(
  args: InferRequestType<(typeof client.api.v2)['team-hierarchy-links']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['team-hierarchy-links'].$post(args, options))
}

export async function getApiV2TeamHierarchyLinksLinkId(
  args: InferRequestType<(typeof client.api.v2)['team-hierarchy-links'][':link_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['team-hierarchy-links'][':link_id'].$get(args, options))
}

export async function deleteApiV2TeamHierarchyLinksLinkId(
  args: InferRequestType<(typeof client.api.v2)['team-hierarchy-links'][':link_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['team-hierarchy-links'][':link_id'].$delete(args, options),
  )
}

export async function getApiV2TeamConnections(
  args: InferRequestType<typeof client.api.v2.team.connections.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.team.connections.$get(args, options))
}

export async function postApiV2TeamConnections(
  args: InferRequestType<typeof client.api.v2.team.connections.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.team.connections.$post(args, options))
}

export async function deleteApiV2TeamConnections(
  args: InferRequestType<typeof client.api.v2.team.connections.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.team.connections.$delete(args, options))
}

export async function getApiV2TeamSync(
  args: InferRequestType<typeof client.api.v2.team.sync.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.team.sync.$get(args, options))
}

export async function postApiV2TeamSync(
  args: InferRequestType<typeof client.api.v2.team.sync.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.team.sync.$post(args, options))
}

export async function getApiV2TeamSuperTeamIdMemberTeams(
  args: InferRequestType<(typeof client.api.v2.team)[':super_team_id']['member_teams']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.team[':super_team_id'].member_teams.$get(args, options))
}

export async function postApiV2TeamSuperTeamIdMemberTeams(
  args: InferRequestType<(typeof client.api.v2.team)[':super_team_id']['member_teams']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.team[':super_team_id'].member_teams.$post(args, options))
}

export async function deleteApiV2TeamSuperTeamIdMemberTeamsMemberTeamId(
  args: InferRequestType<
    (typeof client.api.v2.team)[':super_team_id']['member_teams'][':member_team_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.team[':super_team_id'].member_teams[':member_team_id'].$delete(args, options),
  )
}

export async function getApiV2TeamTeamId(
  args: InferRequestType<(typeof client.api.v2.team)[':team_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.team[':team_id'].$get(args, options))
}

export async function deleteApiV2TeamTeamId(
  args: InferRequestType<(typeof client.api.v2.team)[':team_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.team[':team_id'].$delete(args, options))
}

export async function patchApiV2TeamTeamId(
  args: InferRequestType<(typeof client.api.v2.team)[':team_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.team[':team_id'].$patch(args, options))
}

export async function getApiV2TeamTeamIdLinks(
  args: InferRequestType<(typeof client.api.v2.team)[':team_id']['links']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.team[':team_id'].links.$get(args, options))
}

export async function postApiV2TeamTeamIdLinks(
  args: InferRequestType<(typeof client.api.v2.team)[':team_id']['links']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.team[':team_id'].links.$post(args, options))
}

export async function getApiV2TeamTeamIdLinksLinkId(
  args: InferRequestType<(typeof client.api.v2.team)[':team_id']['links'][':link_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.team[':team_id'].links[':link_id'].$get(args, options))
}

export async function deleteApiV2TeamTeamIdLinksLinkId(
  args: InferRequestType<(typeof client.api.v2.team)[':team_id']['links'][':link_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.team[':team_id'].links[':link_id'].$delete(args, options),
  )
}

export async function patchApiV2TeamTeamIdLinksLinkId(
  args: InferRequestType<(typeof client.api.v2.team)[':team_id']['links'][':link_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.team[':team_id'].links[':link_id'].$patch(args, options))
}

export async function getApiV2TeamTeamIdMembers(
  args: InferRequestType<(typeof client.api.v2.team)[':team_id']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.team[':team_id'].members.$get(args, options))
}

export async function getApiV2TeamTeamIdMemberships(
  args: InferRequestType<(typeof client.api.v2.team)[':team_id']['memberships']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.team[':team_id'].memberships.$get(args, options))
}

export async function postApiV2TeamTeamIdMemberships(
  args: InferRequestType<(typeof client.api.v2.team)[':team_id']['memberships']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.team[':team_id'].memberships.$post(args, options))
}

export async function deleteApiV2TeamTeamIdMembershipsUserId(
  args: InferRequestType<
    (typeof client.api.v2.team)[':team_id']['memberships'][':user_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.team[':team_id'].memberships[':user_id'].$delete(args, options),
  )
}

export async function patchApiV2TeamTeamIdMembershipsUserId(
  args: InferRequestType<
    (typeof client.api.v2.team)[':team_id']['memberships'][':user_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.team[':team_id'].memberships[':user_id'].$patch(args, options),
  )
}

export async function getApiV2TeamTeamIdNotificationRules(
  args: InferRequestType<(typeof client.api.v2.team)[':team_id']['notification-rules']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.team[':team_id']['notification-rules'].$get(args, options),
  )
}

export async function postApiV2TeamTeamIdNotificationRules(
  args: InferRequestType<(typeof client.api.v2.team)[':team_id']['notification-rules']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.team[':team_id']['notification-rules'].$post(args, options),
  )
}

export async function getApiV2TeamTeamIdNotificationRulesRuleId(
  args: InferRequestType<
    (typeof client.api.v2.team)[':team_id']['notification-rules'][':rule_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.team[':team_id']['notification-rules'][':rule_id'].$get(args, options),
  )
}

export async function putApiV2TeamTeamIdNotificationRulesRuleId(
  args: InferRequestType<
    (typeof client.api.v2.team)[':team_id']['notification-rules'][':rule_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.team[':team_id']['notification-rules'][':rule_id'].$put(args, options),
  )
}

export async function deleteApiV2TeamTeamIdNotificationRulesRuleId(
  args: InferRequestType<
    (typeof client.api.v2.team)[':team_id']['notification-rules'][':rule_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.team[':team_id']['notification-rules'][':rule_id'].$delete(args, options),
  )
}

export async function getApiV2TeamTeamIdPermissionSettings(
  args: InferRequestType<(typeof client.api.v2.team)[':team_id']['permission-settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.team[':team_id']['permission-settings'].$get(args, options),
  )
}

export async function putApiV2TeamTeamIdPermissionSettingsAction(
  args: InferRequestType<
    (typeof client.api.v2.team)[':team_id']['permission-settings'][':action']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.team[':team_id']['permission-settings'][':action'].$put(args, options),
  )
}

export async function postApiV2TestFlakyTestManagementTests(
  args: InferRequestType<(typeof client.api.v2.test)['flaky-test-management']['tests']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.test['flaky-test-management'].tests.$post(args, options))
}

export async function patchApiV2TestFlakyTestManagementTests(
  args: InferRequestType<(typeof client.api.v2.test)['flaky-test-management']['tests']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.test['flaky-test-management'].tests.$patch(args, options),
  )
}

export async function postApiV2TimeseriesAnomalyInvestigations(
  args: InferRequestType<(typeof client.api.v2)['timeseries-anomaly-investigations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['timeseries-anomaly-investigations'].$post(args, options),
  )
}

export async function getApiV2TraceTraceId(
  args: InferRequestType<(typeof client.api.v2.trace)[':trace_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.trace[':trace_id'].$get(args, options))
}

export async function getApiV2UsageAdminTemporaryGrantRequests(
  args: InferRequestType<(typeof client.api.v2.usage.admin)['temporary-grant-requests']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.usage.admin['temporary-grant-requests'].$get(args, options),
  )
}

export async function getApiV2UsageAdminTemporaryGrantRequestsRequestId(
  args: InferRequestType<
    (typeof client.api.v2.usage.admin)['temporary-grant-requests'][':request_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.usage.admin['temporary-grant-requests'][':request_id'].$get(args, options),
  )
}

export async function postApiV2UsageAdminTemporaryGrantRequestsRequestIdDecision(
  args: InferRequestType<
    (typeof client.api.v2.usage.admin)['temporary-grant-requests'][':request_id']['decision']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.usage.admin['temporary-grant-requests'][':request_id'].decision.$post(
      args,
      options,
    ),
  )
}

export async function deleteApiV2UsageAdminTemporaryGrantRequestsRequestIdGrant(
  args: InferRequestType<
    (typeof client.api.v2.usage.admin)['temporary-grant-requests'][':request_id']['grant']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.usage.admin['temporary-grant-requests'][':request_id'].grant.$delete(
      args,
      options,
    ),
  )
}

export async function getApiV2UsageApplicationSecurity(
  args: InferRequestType<typeof client.api.v2.usage.application_security.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.usage.application_security.$get(args, options))
}

export async function getApiV2UsageBillingDimensionMapping(
  args: InferRequestType<typeof client.api.v2.usage.billing_dimension_mapping.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.usage.billing_dimension_mapping.$get(args, options))
}

export async function getApiV2UsageCostByOrg(
  args: InferRequestType<typeof client.api.v2.usage.cost_by_org.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.usage.cost_by_org.$get(args, options))
}

export async function getApiV2UsageEstimatedCost(
  args: InferRequestType<typeof client.api.v2.usage.estimated_cost.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.usage.estimated_cost.$get(args, options))
}

export async function getApiV2UsageHistoricalCost(
  args: InferRequestType<typeof client.api.v2.usage.historical_cost.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.usage.historical_cost.$get(args, options))
}

export async function getApiV2UsageHourlyUsage(
  args: InferRequestType<typeof client.api.v2.usage.hourly_usage.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.usage.hourly_usage.$get(args, options))
}

export async function getApiV2UsageLambdaTracedInvocations(
  args: InferRequestType<typeof client.api.v2.usage.lambda_traced_invocations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.usage.lambda_traced_invocations.$get(args, options))
}

export async function getApiV2UsageMonthlyResources(
  args: InferRequestType<typeof client.api.v2.usage.monthly_resources.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.usage.monthly_resources.$get(args, options))
}

export async function getApiV2UsageObservabilityPipelines(
  args: InferRequestType<typeof client.api.v2.usage.observability_pipelines.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.usage.observability_pipelines.$get(args, options))
}

export async function getApiV2UsageProjectedCost(
  args: InferRequestType<typeof client.api.v2.usage.projected_cost.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.usage.projected_cost.$get(args, options))
}

export async function getApiV2UsageQuotasQuotaNamespace(
  args: InferRequestType<(typeof client.api.v2.usage.quotas)[':quota_namespace']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.usage.quotas[':quota_namespace'].$get(args, options))
}

export async function postApiV2UsageQuotasQuotaNamespace(
  args: InferRequestType<(typeof client.api.v2.usage.quotas)[':quota_namespace']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.usage.quotas[':quota_namespace'].$post(args, options))
}

export async function getApiV2UsageQuotasQuotaNamespaceId(
  args: InferRequestType<(typeof client.api.v2.usage.quotas)[':quota_namespace'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.usage.quotas[':quota_namespace'][':id'].$get(args, options),
  )
}

export async function deleteApiV2UsageQuotasQuotaNamespaceId(
  args: InferRequestType<(typeof client.api.v2.usage.quotas)[':quota_namespace'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.usage.quotas[':quota_namespace'][':id'].$delete(args, options),
  )
}

export async function patchApiV2UsageQuotasQuotaNamespaceId(
  args: InferRequestType<(typeof client.api.v2.usage.quotas)[':quota_namespace'][':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.usage.quotas[':quota_namespace'][':id'].$patch(args, options),
  )
}

export async function deleteApiV2UsageQuotasQuotaNamespaceIdPending(
  args: InferRequestType<
    (typeof client.api.v2.usage.quotas)[':quota_namespace'][':id']['pending']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.usage.quotas[':quota_namespace'][':id'].pending.$delete(args, options),
  )
}

export async function getApiV2UsageSummaryAvailableFields(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.usage.summary.available_fields.$get(undefined, options))
}

export async function getApiV2UsageTemporaryGrantRequests(
  args: InferRequestType<(typeof client.api.v2.usage)['temporary-grant-requests']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.usage['temporary-grant-requests'].$get(args, options))
}

export async function postApiV2UsageTemporaryGrantRequests(
  args: InferRequestType<(typeof client.api.v2.usage)['temporary-grant-requests']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.usage['temporary-grant-requests'].$post(args, options))
}

export async function getApiV2UsageTemporaryGrantRequestsRequestId(
  args: InferRequestType<
    (typeof client.api.v2.usage)['temporary-grant-requests'][':request_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.usage['temporary-grant-requests'][':request_id'].$get(args, options),
  )
}

export async function deleteApiV2UsageTemporaryGrantRequestsRequestId(
  args: InferRequestType<
    (typeof client.api.v2.usage)['temporary-grant-requests'][':request_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.usage['temporary-grant-requests'][':request_id'].$delete(args, options),
  )
}

export async function getApiV2UsageUsageAttributionTypes(options?: ClientRequestOptions) {
  return await parseResponse(
    client.api.v2.usage['usage-attribution-types'].$get(undefined, options),
  )
}

export async function getApiV2UserAuthorizedClients(
  args: InferRequestType<typeof client.api.v2.user_authorized_clients.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.user_authorized_clients.$get(args, options))
}

export async function deleteApiV2UserAuthorizedClientsClientClientId(
  args: InferRequestType<
    (typeof client.api.v2.user_authorized_clients.client)[':client_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.user_authorized_clients.client[':client_id'].$delete(args, options),
  )
}

export async function getApiV2UserAuthorizedClientsUserAuthorizedClientId(
  args: InferRequestType<
    (typeof client.api.v2.user_authorized_clients)[':user_authorized_client_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.user_authorized_clients[':user_authorized_client_id'].$get(args, options),
  )
}

export async function deleteApiV2UserAuthorizedClientsUserAuthorizedClientId(
  args: InferRequestType<
    (typeof client.api.v2.user_authorized_clients)[':user_authorized_client_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.user_authorized_clients[':user_authorized_client_id'].$delete(args, options),
  )
}

export async function postApiV2UserInvitations(
  args: InferRequestType<typeof client.api.v2.user_invitations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.user_invitations.$post(args, options))
}

export async function getApiV2UserInvitationsUserInvitationUuid(
  args: InferRequestType<(typeof client.api.v2.user_invitations)[':user_invitation_uuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.user_invitations[':user_invitation_uuid'].$get(args, options),
  )
}

export async function getApiV2Users(
  args: InferRequestType<typeof client.api.v2.users.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.users.$get(args, options))
}

export async function postApiV2Users(
  args: InferRequestType<typeof client.api.v2.users.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.users.$post(args, options))
}

export async function getApiV2UsersUserId(
  args: InferRequestType<(typeof client.api.v2.users)[':user_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.users[':user_id'].$get(args, options))
}

export async function deleteApiV2UsersUserId(
  args: InferRequestType<(typeof client.api.v2.users)[':user_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.users[':user_id'].$delete(args, options))
}

export async function patchApiV2UsersUserId(
  args: InferRequestType<(typeof client.api.v2.users)[':user_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.users[':user_id'].$patch(args, options))
}

export async function getApiV2UsersUserIdIdentityProviders(
  args: InferRequestType<(typeof client.api.v2.users)[':user_id']['identity_providers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.users[':user_id'].identity_providers.$get(args, options))
}

export async function deleteApiV2UsersUserIdInvitations(
  args: InferRequestType<(typeof client.api.v2.users)[':user_id']['invitations']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.users[':user_id'].invitations.$delete(args, options))
}

export async function getApiV2UsersUserIdOrgs(
  args: InferRequestType<(typeof client.api.v2.users)[':user_id']['orgs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.users[':user_id'].orgs.$get(args, options))
}

export async function getApiV2UsersUserIdPermissions(
  args: InferRequestType<(typeof client.api.v2.users)[':user_id']['permissions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.users[':user_id'].permissions.$get(args, options))
}

export async function patchApiV2UsersUserIdRelationshipsIdentityProviders(
  args: InferRequestType<
    (typeof client.api.v2.users)[':user_id']['relationships']['identity_providers']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.users[':user_id'].relationships.identity_providers.$patch(args, options),
  )
}

export async function getApiV2UsersUserUuidMemberships(
  args: InferRequestType<(typeof client.api.v2.users)[':user_uuid']['memberships']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.users[':user_uuid'].memberships.$get(args, options))
}

export async function getApiV2Validate(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.validate.$get(undefined, options))
}

export async function getApiV2ValidateKeys(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.validate_keys.$get(undefined, options))
}

export async function getApiV2WebIntegrationsIntegrationNameAccounts(
  args: InferRequestType<
    (typeof client.api.v2)['web-integrations'][':integration_name']['accounts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['web-integrations'][':integration_name'].accounts.$get(args, options),
  )
}

export async function postApiV2WebIntegrationsIntegrationNameAccounts(
  args: InferRequestType<
    (typeof client.api.v2)['web-integrations'][':integration_name']['accounts']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['web-integrations'][':integration_name'].accounts.$post(args, options),
  )
}

export async function getApiV2WebIntegrationsIntegrationNameAccountsAccountId(
  args: InferRequestType<
    (typeof client.api.v2)['web-integrations'][':integration_name']['accounts'][':account_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['web-integrations'][':integration_name'].accounts[':account_id'].$get(
      args,
      options,
    ),
  )
}

export async function deleteApiV2WebIntegrationsIntegrationNameAccountsAccountId(
  args: InferRequestType<
    (typeof client.api.v2)['web-integrations'][':integration_name']['accounts'][':account_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['web-integrations'][':integration_name'].accounts[':account_id'].$delete(
      args,
      options,
    ),
  )
}

export async function patchApiV2WebIntegrationsIntegrationNameAccountsAccountId(
  args: InferRequestType<
    (typeof client.api.v2)['web-integrations'][':integration_name']['accounts'][':account_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['web-integrations'][':integration_name'].accounts[':account_id'].$patch(
      args,
      options,
    ),
  )
}

export async function getApiV2WidgetsExperienceType(
  args: InferRequestType<(typeof client.api.v2.widgets)[':experience_type']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.widgets[':experience_type'].$get(args, options))
}

export async function postApiV2WidgetsExperienceType(
  args: InferRequestType<(typeof client.api.v2.widgets)[':experience_type']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.widgets[':experience_type'].$post(args, options))
}

export async function getApiV2WidgetsExperienceTypeUuid(
  args: InferRequestType<(typeof client.api.v2.widgets)[':experience_type'][':uuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.widgets[':experience_type'][':uuid'].$get(args, options))
}

export async function putApiV2WidgetsExperienceTypeUuid(
  args: InferRequestType<(typeof client.api.v2.widgets)[':experience_type'][':uuid']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.widgets[':experience_type'][':uuid'].$put(args, options))
}

export async function deleteApiV2WidgetsExperienceTypeUuid(
  args: InferRequestType<(typeof client.api.v2.widgets)[':experience_type'][':uuid']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.widgets[':experience_type'][':uuid'].$delete(args, options),
  )
}

export async function getApiV2WifAwsIntakeMapping(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.wif.aws.intake_mapping.$get(undefined, options))
}

export async function postApiV2WifAwsIntakeMapping(
  args: InferRequestType<typeof client.api.v2.wif.aws.intake_mapping.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.wif.aws.intake_mapping.$post(args, options))
}

export async function getApiV2WifAwsIntakeMappingIntakeMappingId(
  args: InferRequestType<
    (typeof client.api.v2.wif.aws.intake_mapping)[':intake_mapping_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.wif.aws.intake_mapping[':intake_mapping_id'].$get(args, options),
  )
}

export async function deleteApiV2WifAwsIntakeMappingIntakeMappingId(
  args: InferRequestType<
    (typeof client.api.v2.wif.aws.intake_mapping)[':intake_mapping_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.wif.aws.intake_mapping[':intake_mapping_id'].$delete(args, options),
  )
}

export async function getApiV2WifAwsPersonaMapping(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.wif.aws.persona_mapping.$get(undefined, options))
}

export async function postApiV2WifAwsPersonaMapping(
  args: InferRequestType<typeof client.api.v2.wif.aws.persona_mapping.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.wif.aws.persona_mapping.$post(args, options))
}

export async function getApiV2WifAwsPersonaMappingPersonaMappingId(
  args: InferRequestType<
    (typeof client.api.v2.wif.aws.persona_mapping)[':persona_mapping_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.wif.aws.persona_mapping[':persona_mapping_id'].$get(args, options),
  )
}

export async function deleteApiV2WifAwsPersonaMappingPersonaMappingId(
  args: InferRequestType<
    (typeof client.api.v2.wif.aws.persona_mapping)[':persona_mapping_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.wif.aws.persona_mapping[':persona_mapping_id'].$delete(args, options),
  )
}

export async function getApiV2WifGithubIntakeMapping(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.wif.github.intake_mapping.$get(undefined, options))
}

export async function postApiV2WifGithubIntakeMapping(
  args: InferRequestType<typeof client.api.v2.wif.github.intake_mapping.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.wif.github.intake_mapping.$post(args, options))
}

export async function getApiV2WifGithubIntakeMappingIntakeMappingId(
  args: InferRequestType<
    (typeof client.api.v2.wif.github.intake_mapping)[':intake_mapping_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.wif.github.intake_mapping[':intake_mapping_id'].$get(args, options),
  )
}

export async function deleteApiV2WifGithubIntakeMappingIntakeMappingId(
  args: InferRequestType<
    (typeof client.api.v2.wif.github.intake_mapping)[':intake_mapping_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.wif.github.intake_mapping[':intake_mapping_id'].$delete(args, options),
  )
}

export async function getApiV2WifGithubPersonaMapping(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.wif.github.persona_mapping.$get(undefined, options))
}

export async function postApiV2WifGithubPersonaMapping(
  args: InferRequestType<typeof client.api.v2.wif.github.persona_mapping.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.wif.github.persona_mapping.$post(args, options))
}

export async function getApiV2WifGithubPersonaMappingPersonaMappingId(
  args: InferRequestType<
    (typeof client.api.v2.wif.github.persona_mapping)[':persona_mapping_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.wif.github.persona_mapping[':persona_mapping_id'].$get(args, options),
  )
}

export async function deleteApiV2WifGithubPersonaMappingPersonaMappingId(
  args: InferRequestType<
    (typeof client.api.v2.wif.github.persona_mapping)[':persona_mapping_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.wif.github.persona_mapping[':persona_mapping_id'].$delete(args, options),
  )
}

export async function getApiV2WifOidcPersonaMapping(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.wif.oidc.persona_mapping.$get(undefined, options))
}

export async function postApiV2WifOidcPersonaMapping(
  args: InferRequestType<typeof client.api.v2.wif.oidc.persona_mapping.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.wif.oidc.persona_mapping.$post(args, options))
}

export async function getApiV2WifOidcPersonaMappingPersonaMappingId(
  args: InferRequestType<
    (typeof client.api.v2.wif.oidc.persona_mapping)[':persona_mapping_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.wif.oidc.persona_mapping[':persona_mapping_id'].$get(args, options),
  )
}

export async function deleteApiV2WifOidcPersonaMappingPersonaMappingId(
  args: InferRequestType<
    (typeof client.api.v2.wif.oidc.persona_mapping)[':persona_mapping_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.wif.oidc.persona_mapping[':persona_mapping_id'].$delete(args, options),
  )
}

export async function getApiV2WifOidcProvider(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.wif.oidc.provider.$get(undefined, options))
}

export async function postApiV2WifOidcProvider(
  args: InferRequestType<typeof client.api.v2.wif.oidc.provider.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.wif.oidc.provider.$post(args, options))
}

export async function getApiV2WifOidcProviderProviderId(
  args: InferRequestType<(typeof client.api.v2.wif.oidc.provider)[':provider_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.wif.oidc.provider[':provider_id'].$get(args, options))
}

export async function deleteApiV2WifOidcProviderProviderId(
  args: InferRequestType<(typeof client.api.v2.wif.oidc.provider)[':provider_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.wif.oidc.provider[':provider_id'].$delete(args, options))
}

export async function getApiV2WifTerraformPersonaMapping(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.wif.terraform.persona_mapping.$get(undefined, options))
}

export async function postApiV2WifTerraformPersonaMapping(
  args: InferRequestType<typeof client.api.v2.wif.terraform.persona_mapping.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.wif.terraform.persona_mapping.$post(args, options))
}

export async function getApiV2WifTerraformPersonaMappingPersonaMappingId(
  args: InferRequestType<
    (typeof client.api.v2.wif.terraform.persona_mapping)[':persona_mapping_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.wif.terraform.persona_mapping[':persona_mapping_id'].$get(args, options),
  )
}

export async function deleteApiV2WifTerraformPersonaMappingPersonaMappingId(
  args: InferRequestType<
    (typeof client.api.v2.wif.terraform.persona_mapping)[':persona_mapping_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.wif.terraform.persona_mapping[':persona_mapping_id'].$delete(args, options),
  )
}

export async function getApiV2Workflows(
  args: InferRequestType<typeof client.api.v2.workflows.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.workflows.$get(args, options))
}

export async function postApiV2Workflows(
  args: InferRequestType<typeof client.api.v2.workflows.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.workflows.$post(args, options))
}

export async function getApiV2WorkflowsWorkflowId(
  args: InferRequestType<(typeof client.api.v2.workflows)[':workflow_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.workflows[':workflow_id'].$get(args, options))
}

export async function deleteApiV2WorkflowsWorkflowId(
  args: InferRequestType<(typeof client.api.v2.workflows)[':workflow_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.workflows[':workflow_id'].$delete(args, options))
}

export async function patchApiV2WorkflowsWorkflowId(
  args: InferRequestType<(typeof client.api.v2.workflows)[':workflow_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.workflows[':workflow_id'].$patch(args, options))
}

export async function getApiV2WorkflowsWorkflowIdInstances(
  args: InferRequestType<(typeof client.api.v2.workflows)[':workflow_id']['instances']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.workflows[':workflow_id'].instances.$get(args, options))
}

export async function postApiV2WorkflowsWorkflowIdInstances(
  args: InferRequestType<(typeof client.api.v2.workflows)[':workflow_id']['instances']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.workflows[':workflow_id'].instances.$post(args, options))
}

export async function getApiV2WorkflowsWorkflowIdInstancesInstanceId(
  args: InferRequestType<
    (typeof client.api.v2.workflows)[':workflow_id']['instances'][':instance_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.workflows[':workflow_id'].instances[':instance_id'].$get(args, options),
  )
}

export async function putApiV2WorkflowsWorkflowIdInstancesInstanceIdCancel(
  args: InferRequestType<
    (typeof client.api.v2.workflows)[':workflow_id']['instances'][':instance_id']['cancel']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.workflows[':workflow_id'].instances[':instance_id'].cancel.$put(args, options),
  )
}
