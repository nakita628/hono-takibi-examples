import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postEntityTypeIdChangeTags(
  args: InferRequestType<(typeof client)[':entity_type'][':id']['change_tags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':entity_type'][':id'].change_tags.$post(args, options))
}

export async function getEntityTypeIdTags(
  args: InferRequestType<(typeof client)[':entity_type'][':id']['tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':entity_type'][':id'].tags.$get(args, options))
}

export async function getAbilities(
  args: InferRequestType<typeof client.abilities.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.abilities.$get(args, options))
}

export async function getAbilitiesId(
  args: InferRequestType<(typeof client.abilities)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.abilities[':id'].$get(args, options))
}

export async function getAddons(
  args: InferRequestType<typeof client.addons.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.addons.$get(args, options))
}

export async function postAddons(
  args: InferRequestType<typeof client.addons.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.addons.$post(args, options))
}

export async function getAddonsId(
  args: InferRequestType<(typeof client.addons)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.addons[':id'].$get(args, options))
}

export async function putAddonsId(
  args: InferRequestType<(typeof client.addons)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.addons[':id'].$put(args, options))
}

export async function deleteAddonsId(
  args: InferRequestType<(typeof client.addons)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.addons[':id'].$delete(args, options))
}

export async function getAlertGroupingSettings(
  args: InferRequestType<typeof client.alert_grouping_settings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.alert_grouping_settings.$get(args, options))
}

export async function postAlertGroupingSettings(
  args: InferRequestType<typeof client.alert_grouping_settings.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.alert_grouping_settings.$post(args, options))
}

export async function getAlertGroupingSettingsId(
  args: InferRequestType<(typeof client.alert_grouping_settings)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.alert_grouping_settings[':id'].$get(args, options))
}

export async function putAlertGroupingSettingsId(
  args: InferRequestType<(typeof client.alert_grouping_settings)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.alert_grouping_settings[':id'].$put(args, options))
}

export async function deleteAlertGroupingSettingsId(
  args: InferRequestType<(typeof client.alert_grouping_settings)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.alert_grouping_settings[':id'].$delete(args, options))
}

export async function postAnalyticsMetricsIncidentsAll(
  args: InferRequestType<typeof client.analytics.metrics.incidents.all.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.analytics.metrics.incidents.all.$post(args, options))
}

export async function postAnalyticsMetricsIncidentsEscalationPolicies(
  args: InferRequestType<typeof client.analytics.metrics.incidents.escalation_policies.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.analytics.metrics.incidents.escalation_policies.$post(args, options),
  )
}

export async function postAnalyticsMetricsIncidentsEscalationPoliciesAll(
  args: InferRequestType<typeof client.analytics.metrics.incidents.escalation_policies.all.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.analytics.metrics.incidents.escalation_policies.all.$post(args, options),
  )
}

export async function postAnalyticsMetricsIncidentsServices(
  args: InferRequestType<typeof client.analytics.metrics.incidents.services.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.analytics.metrics.incidents.services.$post(args, options))
}

export async function postAnalyticsMetricsIncidentsServicesAll(
  args: InferRequestType<typeof client.analytics.metrics.incidents.services.all.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.analytics.metrics.incidents.services.all.$post(args, options))
}

export async function postAnalyticsMetricsIncidentsTeams(
  args: InferRequestType<typeof client.analytics.metrics.incidents.teams.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.analytics.metrics.incidents.teams.$post(args, options))
}

export async function postAnalyticsMetricsIncidentsTeamsAll(
  args: InferRequestType<typeof client.analytics.metrics.incidents.teams.all.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.analytics.metrics.incidents.teams.all.$post(args, options))
}

export async function postAnalyticsMetricsPdAdvanceUsageFeatures(
  args: InferRequestType<typeof client.analytics.metrics.pd_advance_usage.features.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.analytics.metrics.pd_advance_usage.features.$post(args, options),
  )
}

export async function postAnalyticsMetricsRespondersAll(
  args: InferRequestType<typeof client.analytics.metrics.responders.all.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.analytics.metrics.responders.all.$post(args, options))
}

export async function postAnalyticsMetricsRespondersTeams(
  args: InferRequestType<typeof client.analytics.metrics.responders.teams.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.analytics.metrics.responders.teams.$post(args, options))
}

export async function postAnalyticsMetricsUsersAll(
  args: InferRequestType<typeof client.analytics.metrics.users.all.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.analytics.metrics.users.all.$post(args, options))
}

export async function postAnalyticsRawIncidents(
  args: InferRequestType<typeof client.analytics.raw.incidents.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.analytics.raw.incidents.$post(args, options))
}

export async function getAnalyticsRawIncidentsId(
  args: InferRequestType<(typeof client.analytics.raw.incidents)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.analytics.raw.incidents[':id'].$get(args, options))
}

export async function getAnalyticsRawIncidentsIdResponses(
  args: InferRequestType<(typeof client.analytics.raw.incidents)[':id']['responses']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.analytics.raw.incidents[':id'].responses.$get(args, options))
}

export async function postAnalyticsRawRespondersResponderIdIncidents(
  args: InferRequestType<
    (typeof client.analytics.raw.responders)[':responder_id']['incidents']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.analytics.raw.responders[':responder_id'].incidents.$post(args, options),
  )
}

export async function postAnalyticsRawUsers(
  args: InferRequestType<typeof client.analytics.raw.users.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.analytics.raw.users.$post(args, options))
}

export async function getAuditRecords(
  args: InferRequestType<typeof client.audit.records.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.audit.records.$get(args, options))
}

export async function getAutomationActionsActions(
  args: InferRequestType<typeof client.automation_actions.actions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.automation_actions.actions.$get(args, options))
}

export async function postAutomationActionsActions(
  args: InferRequestType<typeof client.automation_actions.actions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.automation_actions.actions.$post(args, options))
}

export async function getAutomationActionsActionsId(
  args: InferRequestType<(typeof client.automation_actions.actions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.automation_actions.actions[':id'].$get(args, options))
}

export async function putAutomationActionsActionsId(
  args: InferRequestType<(typeof client.automation_actions.actions)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.automation_actions.actions[':id'].$put(args, options))
}

export async function deleteAutomationActionsActionsId(
  args: InferRequestType<(typeof client.automation_actions.actions)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.automation_actions.actions[':id'].$delete(args, options))
}

export async function postAutomationActionsActionsIdInvocations(
  args: InferRequestType<(typeof client.automation_actions.actions)[':id']['invocations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.automation_actions.actions[':id'].invocations.$post(args, options),
  )
}

export async function getAutomationActionsActionsIdServices(
  args: InferRequestType<(typeof client.automation_actions.actions)[':id']['services']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.automation_actions.actions[':id'].services.$get(args, options))
}

export async function postAutomationActionsActionsIdServices(
  args: InferRequestType<(typeof client.automation_actions.actions)[':id']['services']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.automation_actions.actions[':id'].services.$post(args, options))
}

export async function getAutomationActionsActionsIdServicesServiceId(
  args: InferRequestType<
    (typeof client.automation_actions.actions)[':id']['services'][':service_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.automation_actions.actions[':id'].services[':service_id'].$get(args, options),
  )
}

export async function deleteAutomationActionsActionsIdServicesServiceId(
  args: InferRequestType<
    (typeof client.automation_actions.actions)[':id']['services'][':service_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.automation_actions.actions[':id'].services[':service_id'].$delete(args, options),
  )
}

export async function getAutomationActionsActionsIdTeams(
  args: InferRequestType<(typeof client.automation_actions.actions)[':id']['teams']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.automation_actions.actions[':id'].teams.$get(args, options))
}

export async function postAutomationActionsActionsIdTeams(
  args: InferRequestType<(typeof client.automation_actions.actions)[':id']['teams']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.automation_actions.actions[':id'].teams.$post(args, options))
}

export async function getAutomationActionsActionsIdTeamsTeamId(
  args: InferRequestType<
    (typeof client.automation_actions.actions)[':id']['teams'][':team_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.automation_actions.actions[':id'].teams[':team_id'].$get(args, options),
  )
}

export async function deleteAutomationActionsActionsIdTeamsTeamId(
  args: InferRequestType<
    (typeof client.automation_actions.actions)[':id']['teams'][':team_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.automation_actions.actions[':id'].teams[':team_id'].$delete(args, options),
  )
}

export async function getAutomationActionsInvocations(
  args: InferRequestType<typeof client.automation_actions.invocations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.automation_actions.invocations.$get(args, options))
}

export async function getAutomationActionsInvocationsId(
  args: InferRequestType<(typeof client.automation_actions.invocations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.automation_actions.invocations[':id'].$get(args, options))
}

export async function getAutomationActionsRunners(
  args: InferRequestType<typeof client.automation_actions.runners.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.automation_actions.runners.$get(args, options))
}

export async function postAutomationActionsRunners(
  args: InferRequestType<typeof client.automation_actions.runners.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.automation_actions.runners.$post(args, options))
}

export async function getAutomationActionsRunnersId(
  args: InferRequestType<(typeof client.automation_actions.runners)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.automation_actions.runners[':id'].$get(args, options))
}

export async function putAutomationActionsRunnersId(
  args: InferRequestType<(typeof client.automation_actions.runners)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.automation_actions.runners[':id'].$put(args, options))
}

export async function deleteAutomationActionsRunnersId(
  args: InferRequestType<(typeof client.automation_actions.runners)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.automation_actions.runners[':id'].$delete(args, options))
}

export async function getAutomationActionsRunnersIdTeams(
  args: InferRequestType<(typeof client.automation_actions.runners)[':id']['teams']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.automation_actions.runners[':id'].teams.$get(args, options))
}

export async function postAutomationActionsRunnersIdTeams(
  args: InferRequestType<(typeof client.automation_actions.runners)[':id']['teams']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.automation_actions.runners[':id'].teams.$post(args, options))
}

export async function getAutomationActionsRunnersIdTeamsTeamId(
  args: InferRequestType<
    (typeof client.automation_actions.runners)[':id']['teams'][':team_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.automation_actions.runners[':id'].teams[':team_id'].$get(args, options),
  )
}

export async function deleteAutomationActionsRunnersIdTeamsTeamId(
  args: InferRequestType<
    (typeof client.automation_actions.runners)[':id']['teams'][':team_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.automation_actions.runners[':id'].teams[':team_id'].$delete(args, options),
  )
}

export async function getBusinessServices(
  args: InferRequestType<typeof client.business_services.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.business_services.$get(args, options))
}

export async function postBusinessServices(
  args: InferRequestType<typeof client.business_services.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.business_services.$post(args, options))
}

export async function getBusinessServicesId(
  args: InferRequestType<(typeof client.business_services)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.business_services[':id'].$get(args, options))
}

export async function putBusinessServicesId(
  args: InferRequestType<(typeof client.business_services)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.business_services[':id'].$put(args, options))
}

export async function deleteBusinessServicesId(
  args: InferRequestType<(typeof client.business_services)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.business_services[':id'].$delete(args, options))
}

export async function postBusinessServicesIdAccountSubscription(
  args: InferRequestType<(typeof client.business_services)[':id']['account_subscription']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.business_services[':id'].account_subscription.$post(args, options),
  )
}

export async function deleteBusinessServicesIdAccountSubscription(
  args: InferRequestType<
    (typeof client.business_services)[':id']['account_subscription']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.business_services[':id'].account_subscription.$delete(args, options),
  )
}

export async function getBusinessServicesIdSubscribers(
  args: InferRequestType<(typeof client.business_services)[':id']['subscribers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.business_services[':id'].subscribers.$get(args, options))
}

export async function postBusinessServicesIdSubscribers(
  args: InferRequestType<(typeof client.business_services)[':id']['subscribers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.business_services[':id'].subscribers.$post(args, options))
}

export async function getBusinessServicesIdSupportingServicesImpacts(
  args: InferRequestType<
    (typeof client.business_services)[':id']['supporting_services']['impacts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.business_services[':id'].supporting_services.impacts.$get(args, options),
  )
}

export async function postBusinessServicesIdUnsubscribe(
  args: InferRequestType<(typeof client.business_services)[':id']['unsubscribe']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.business_services[':id'].unsubscribe.$post(args, options))
}

export async function getBusinessServicesImpactors(
  args: InferRequestType<typeof client.business_services.impactors.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.business_services.impactors.$get(args, options))
}

export async function getBusinessServicesImpacts(
  args: InferRequestType<typeof client.business_services.impacts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.business_services.impacts.$get(args, options))
}

export async function getBusinessServicesPriorityThresholds(
  args: InferRequestType<typeof client.business_services.priority_thresholds.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.business_services.priority_thresholds.$get(args, options))
}

export async function putBusinessServicesPriorityThresholds(
  args: InferRequestType<typeof client.business_services.priority_thresholds.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.business_services.priority_thresholds.$put(args, options))
}

export async function deleteBusinessServicesPriorityThresholds(
  args: InferRequestType<typeof client.business_services.priority_thresholds.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.business_services.priority_thresholds.$delete(args, options))
}

export async function getChangeEvents(
  args: InferRequestType<typeof client.change_events.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.change_events.$get(args, options))
}

export async function postChangeEvents(
  args: InferRequestType<typeof client.change_events.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.change_events.$post(args, options))
}

export async function getChangeEventsId(
  args: InferRequestType<(typeof client.change_events)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.change_events[':id'].$get(args, options))
}

export async function putChangeEventsId(
  args: InferRequestType<(typeof client.change_events)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.change_events[':id'].$put(args, options))
}

export async function getEnrichmentIntegrationsServicenow(
  args: InferRequestType<typeof client.enrichment.integrations.servicenow.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.enrichment.integrations.servicenow.$get(args, options))
}

export async function postEnrichmentIntegrationsServicenow(
  args: InferRequestType<typeof client.enrichment.integrations.servicenow.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.enrichment.integrations.servicenow.$post(args, options))
}

export async function getEnrichmentIntegrationsServicenowIntegrationId(
  args: InferRequestType<
    (typeof client.enrichment.integrations.servicenow)[':integration_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.enrichment.integrations.servicenow[':integration_id'].$get(args, options),
  )
}

export async function deleteEnrichmentIntegrationsServicenowIntegrationId(
  args: InferRequestType<
    (typeof client.enrichment.integrations.servicenow)[':integration_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.enrichment.integrations.servicenow[':integration_id'].$delete(args, options),
  )
}

export async function postEnrichmentIntegrationsServicenowIntegrationIdTables(
  args: InferRequestType<
    (typeof client.enrichment.integrations.servicenow)[':integration_id']['tables']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.enrichment.integrations.servicenow[':integration_id'].tables.$post(args, options),
  )
}

export async function putEnrichmentIntegrationsServicenowIntegrationIdTablesTableId(
  args: InferRequestType<
    (typeof client.enrichment.integrations.servicenow)[':integration_id']['tables'][':table_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.enrichment.integrations.servicenow[':integration_id'].tables[':table_id'].$put(
      args,
      options,
    ),
  )
}

export async function deleteEnrichmentIntegrationsServicenowIntegrationIdTablesTableId(
  args: InferRequestType<
    (typeof client.enrichment.integrations.servicenow)[':integration_id']['tables'][':table_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.enrichment.integrations.servicenow[':integration_id'].tables[':table_id'].$delete(
      args,
      options,
    ),
  )
}

export async function postEnrichmentIntegrationsServicenowIntegrationIdTablesTableIdEnable(
  args: InferRequestType<
    (typeof client.enrichment.integrations.servicenow)[':integration_id']['tables'][':table_id']['enable']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.enrichment.integrations.servicenow[':integration_id'].tables[':table_id'].enable.$post(
      args,
      options,
    ),
  )
}

export async function getEnrichmentIntegrationsServicenowIntegrationIdTablesTableIdTest(
  args: InferRequestType<
    (typeof client.enrichment.integrations.servicenow)[':integration_id']['tables'][':table_id']['test']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.enrichment.integrations.servicenow[':integration_id'].tables[':table_id'].test.$get(
      args,
      options,
    ),
  )
}

export async function postEnrichmentIntegrationsServicenowCredentials(
  args: InferRequestType<typeof client.enrichment.integrations.servicenow.credentials.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.enrichment.integrations.servicenow.credentials.$post(args, options),
  )
}

export async function getEnrichmentIntegrationsServicenowCredentialsCredentialsId(
  args: InferRequestType<
    (typeof client.enrichment.integrations.servicenow.credentials)[':credentials_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.enrichment.integrations.servicenow.credentials[':credentials_id'].$get(args, options),
  )
}

export async function putEnrichmentIntegrationsServicenowCredentialsCredentialsId(
  args: InferRequestType<
    (typeof client.enrichment.integrations.servicenow.credentials)[':credentials_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.enrichment.integrations.servicenow.credentials[':credentials_id'].$put(args, options),
  )
}

export async function deleteEnrichmentIntegrationsServicenowCredentialsCredentialsId(
  args: InferRequestType<
    (typeof client.enrichment.integrations.servicenow.credentials)[':credentials_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.enrichment.integrations.servicenow.credentials[':credentials_id'].$delete(args, options),
  )
}

export async function postEnrichmentQuery(
  args: InferRequestType<typeof client.enrichment.query.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.enrichment.query.$post(args, options))
}

export async function getEnrichmentSchemas(
  args: InferRequestType<typeof client.enrichment.schemas.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.enrichment.schemas.$get(args, options))
}

export async function postEnrichmentSchemas(
  args: InferRequestType<typeof client.enrichment.schemas.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.enrichment.schemas.$post(args, options))
}

export async function getEnrichmentSchemasSchemaId(
  args: InferRequestType<(typeof client.enrichment.schemas)[':schema_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.enrichment.schemas[':schema_id'].$get(args, options))
}

export async function putEnrichmentSchemasSchemaId(
  args: InferRequestType<(typeof client.enrichment.schemas)[':schema_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.enrichment.schemas[':schema_id'].$put(args, options))
}

export async function deleteEnrichmentSchemasSchemaId(
  args: InferRequestType<(typeof client.enrichment.schemas)[':schema_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.enrichment.schemas[':schema_id'].$delete(args, options))
}

export async function getEnrichmentSchemasSchemaIdRecords(
  args: InferRequestType<(typeof client.enrichment.schemas)[':schema_id']['records']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.enrichment.schemas[':schema_id'].records.$get(args, options))
}

export async function postEnrichmentSchemasSchemaIdRecords(
  args: InferRequestType<(typeof client.enrichment.schemas)[':schema_id']['records']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.enrichment.schemas[':schema_id'].records.$post(args, options))
}

export async function deleteEnrichmentSchemasSchemaIdRecordsRecordId(
  args: InferRequestType<
    (typeof client.enrichment.schemas)[':schema_id']['records'][':record_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.enrichment.schemas[':schema_id'].records[':record_id'].$delete(args, options),
  )
}

export async function getEscalationPolicies(
  args: InferRequestType<typeof client.escalation_policies.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.escalation_policies.$get(args, options))
}

export async function postEscalationPolicies(
  args: InferRequestType<typeof client.escalation_policies.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.escalation_policies.$post(args, options))
}

export async function getEscalationPoliciesId(
  args: InferRequestType<(typeof client.escalation_policies)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.escalation_policies[':id'].$get(args, options))
}

export async function putEscalationPoliciesId(
  args: InferRequestType<(typeof client.escalation_policies)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.escalation_policies[':id'].$put(args, options))
}

export async function deleteEscalationPoliciesId(
  args: InferRequestType<(typeof client.escalation_policies)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.escalation_policies[':id'].$delete(args, options))
}

export async function getEscalationPoliciesIdAuditRecords(
  args: InferRequestType<(typeof client.escalation_policies)[':id']['audit']['records']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.escalation_policies[':id'].audit.records.$get(args, options))
}

export async function getEventOrchestrations(
  args: InferRequestType<typeof client.event_orchestrations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.event_orchestrations.$get(args, options))
}

export async function postEventOrchestrations(
  args: InferRequestType<typeof client.event_orchestrations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.event_orchestrations.$post(args, options))
}

export async function getEventOrchestrationsId(
  args: InferRequestType<(typeof client.event_orchestrations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.event_orchestrations[':id'].$get(args, options))
}

export async function putEventOrchestrationsId(
  args: InferRequestType<(typeof client.event_orchestrations)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.event_orchestrations[':id'].$put(args, options))
}

export async function deleteEventOrchestrationsId(
  args: InferRequestType<(typeof client.event_orchestrations)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.event_orchestrations[':id'].$delete(args, options))
}

export async function getEventOrchestrationsIdIntegrations(
  args: InferRequestType<(typeof client.event_orchestrations)[':id']['integrations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.event_orchestrations[':id'].integrations.$get(args, options))
}

export async function postEventOrchestrationsIdIntegrations(
  args: InferRequestType<(typeof client.event_orchestrations)[':id']['integrations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.event_orchestrations[':id'].integrations.$post(args, options))
}

export async function getEventOrchestrationsIdIntegrationsIntegrationId(
  args: InferRequestType<
    (typeof client.event_orchestrations)[':id']['integrations'][':integration_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.event_orchestrations[':id'].integrations[':integration_id'].$get(args, options),
  )
}

export async function putEventOrchestrationsIdIntegrationsIntegrationId(
  args: InferRequestType<
    (typeof client.event_orchestrations)[':id']['integrations'][':integration_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.event_orchestrations[':id'].integrations[':integration_id'].$put(args, options),
  )
}

export async function deleteEventOrchestrationsIdIntegrationsIntegrationId(
  args: InferRequestType<
    (typeof client.event_orchestrations)[':id']['integrations'][':integration_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.event_orchestrations[':id'].integrations[':integration_id'].$delete(args, options),
  )
}

export async function postEventOrchestrationsIdIntegrationsMigration(
  args: InferRequestType<
    (typeof client.event_orchestrations)[':id']['integrations']['migration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.event_orchestrations[':id'].integrations.migration.$post(args, options),
  )
}

export async function getEventOrchestrationsIdGlobal(
  args: InferRequestType<(typeof client.event_orchestrations)[':id']['global']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.event_orchestrations[':id'].global.$get(args, options))
}

export async function putEventOrchestrationsIdGlobal(
  args: InferRequestType<(typeof client.event_orchestrations)[':id']['global']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.event_orchestrations[':id'].global.$put(args, options))
}

export async function getEventOrchestrationsIdRouter(
  args: InferRequestType<(typeof client.event_orchestrations)[':id']['router']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.event_orchestrations[':id'].router.$get(args, options))
}

export async function putEventOrchestrationsIdRouter(
  args: InferRequestType<(typeof client.event_orchestrations)[':id']['router']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.event_orchestrations[':id'].router.$put(args, options))
}

export async function getEventOrchestrationsIdUnrouted(
  args: InferRequestType<(typeof client.event_orchestrations)[':id']['unrouted']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.event_orchestrations[':id'].unrouted.$get(args, options))
}

export async function putEventOrchestrationsIdUnrouted(
  args: InferRequestType<(typeof client.event_orchestrations)[':id']['unrouted']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.event_orchestrations[':id'].unrouted.$put(args, options))
}

export async function getEventOrchestrationsServicesServiceId(
  args: InferRequestType<(typeof client.event_orchestrations.services)[':service_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.event_orchestrations.services[':service_id'].$get(args, options),
  )
}

export async function putEventOrchestrationsServicesServiceId(
  args: InferRequestType<(typeof client.event_orchestrations.services)[':service_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.event_orchestrations.services[':service_id'].$put(args, options),
  )
}

export async function getEventOrchestrationsServicesServiceIdActive(
  args: InferRequestType<
    (typeof client.event_orchestrations.services)[':service_id']['active']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.event_orchestrations.services[':service_id'].active.$get(args, options),
  )
}

export async function putEventOrchestrationsServicesServiceIdActive(
  args: InferRequestType<
    (typeof client.event_orchestrations.services)[':service_id']['active']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.event_orchestrations.services[':service_id'].active.$put(args, options),
  )
}

export async function getEventOrchestrationsIdCacheVariables(
  args: InferRequestType<(typeof client.event_orchestrations)[':id']['cache_variables']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.event_orchestrations[':id'].cache_variables.$get(args, options))
}

export async function postEventOrchestrationsIdCacheVariables(
  args: InferRequestType<(typeof client.event_orchestrations)[':id']['cache_variables']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.event_orchestrations[':id'].cache_variables.$post(args, options),
  )
}

export async function getEventOrchestrationsIdCacheVariablesCacheVariableId(
  args: InferRequestType<
    (typeof client.event_orchestrations)[':id']['cache_variables'][':cache_variable_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.event_orchestrations[':id'].cache_variables[':cache_variable_id'].$get(args, options),
  )
}

export async function putEventOrchestrationsIdCacheVariablesCacheVariableId(
  args: InferRequestType<
    (typeof client.event_orchestrations)[':id']['cache_variables'][':cache_variable_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.event_orchestrations[':id'].cache_variables[':cache_variable_id'].$put(args, options),
  )
}

export async function deleteEventOrchestrationsIdCacheVariablesCacheVariableId(
  args: InferRequestType<
    (typeof client.event_orchestrations)[':id']['cache_variables'][':cache_variable_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.event_orchestrations[':id'].cache_variables[':cache_variable_id'].$delete(args, options),
  )
}

export async function getEventOrchestrationsIdCacheVariablesCacheVariableIdData(
  args: InferRequestType<
    (typeof client.event_orchestrations)[':id']['cache_variables'][':cache_variable_id']['data']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.event_orchestrations[':id'].cache_variables[':cache_variable_id'].data.$get(
      args,
      options,
    ),
  )
}

export async function putEventOrchestrationsIdCacheVariablesCacheVariableIdData(
  args: InferRequestType<
    (typeof client.event_orchestrations)[':id']['cache_variables'][':cache_variable_id']['data']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.event_orchestrations[':id'].cache_variables[':cache_variable_id'].data.$put(
      args,
      options,
    ),
  )
}

export async function deleteEventOrchestrationsIdCacheVariablesCacheVariableIdData(
  args: InferRequestType<
    (typeof client.event_orchestrations)[':id']['cache_variables'][':cache_variable_id']['data']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.event_orchestrations[':id'].cache_variables[':cache_variable_id'].data.$delete(
      args,
      options,
    ),
  )
}

export async function getEventOrchestrationsServicesServiceIdCacheVariables(
  args: InferRequestType<
    (typeof client.event_orchestrations.services)[':service_id']['cache_variables']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.event_orchestrations.services[':service_id'].cache_variables.$get(args, options),
  )
}

export async function postEventOrchestrationsServicesServiceIdCacheVariables(
  args: InferRequestType<
    (typeof client.event_orchestrations.services)[':service_id']['cache_variables']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.event_orchestrations.services[':service_id'].cache_variables.$post(args, options),
  )
}

export async function getEventOrchestrationsServicesServiceIdCacheVariablesCacheVariableId(
  args: InferRequestType<
    (typeof client.event_orchestrations.services)[':service_id']['cache_variables'][':cache_variable_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.event_orchestrations.services[':service_id'].cache_variables[':cache_variable_id'].$get(
      args,
      options,
    ),
  )
}

export async function putEventOrchestrationsServicesServiceIdCacheVariablesCacheVariableId(
  args: InferRequestType<
    (typeof client.event_orchestrations.services)[':service_id']['cache_variables'][':cache_variable_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.event_orchestrations.services[':service_id'].cache_variables[':cache_variable_id'].$put(
      args,
      options,
    ),
  )
}

export async function deleteEventOrchestrationsServicesServiceIdCacheVariablesCacheVariableId(
  args: InferRequestType<
    (typeof client.event_orchestrations.services)[':service_id']['cache_variables'][':cache_variable_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.event_orchestrations.services[':service_id'].cache_variables[
      ':cache_variable_id'
    ].$delete(args, options),
  )
}

export async function getEventOrchestrationsServicesServiceIdCacheVariablesCacheVariableIdData(
  args: InferRequestType<
    (typeof client.event_orchestrations.services)[':service_id']['cache_variables'][':cache_variable_id']['data']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.event_orchestrations.services[':service_id'].cache_variables[
      ':cache_variable_id'
    ].data.$get(args, options),
  )
}

export async function putEventOrchestrationsServicesServiceIdCacheVariablesCacheVariableIdData(
  args: InferRequestType<
    (typeof client.event_orchestrations.services)[':service_id']['cache_variables'][':cache_variable_id']['data']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.event_orchestrations.services[':service_id'].cache_variables[
      ':cache_variable_id'
    ].data.$put(args, options),
  )
}

export async function deleteEventOrchestrationsServicesServiceIdCacheVariablesCacheVariableIdData(
  args: InferRequestType<
    (typeof client.event_orchestrations.services)[':service_id']['cache_variables'][':cache_variable_id']['data']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.event_orchestrations.services[':service_id'].cache_variables[
      ':cache_variable_id'
    ].data.$delete(args, options),
  )
}

export async function getEventOrchestrationsIdEnablements(
  args: InferRequestType<(typeof client.event_orchestrations)[':id']['enablements']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.event_orchestrations[':id'].enablements.$get(args, options))
}

export async function putEventOrchestrationsIdEnablementsFeatureName(
  args: InferRequestType<
    (typeof client.event_orchestrations)[':id']['enablements'][':feature_name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.event_orchestrations[':id'].enablements[':feature_name'].$put(args, options),
  )
}

export async function getExtensionSchemas(
  args: InferRequestType<typeof client.extension_schemas.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extension_schemas.$get(args, options))
}

export async function getEnrichmentEventEnrichments(
  args: InferRequestType<typeof client.enrichment.event_enrichments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.enrichment.event_enrichments.$get(args, options))
}

export async function postEnrichmentEventEnrichments(
  args: InferRequestType<typeof client.enrichment.event_enrichments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.enrichment.event_enrichments.$post(args, options))
}

export async function getEnrichmentEventEnrichmentsDefault(
  args: InferRequestType<typeof client.enrichment.event_enrichments.default.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.enrichment.event_enrichments.default.$get(args, options))
}

export async function putEnrichmentEventEnrichmentsDefault(
  args: InferRequestType<typeof client.enrichment.event_enrichments.default.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.enrichment.event_enrichments.default.$put(args, options))
}

export async function getEnrichmentEventEnrichmentsId(
  args: InferRequestType<(typeof client.enrichment.event_enrichments)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.enrichment.event_enrichments[':id'].$get(args, options))
}

export async function putEnrichmentEventEnrichmentsId(
  args: InferRequestType<(typeof client.enrichment.event_enrichments)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.enrichment.event_enrichments[':id'].$put(args, options))
}

export async function deleteEnrichmentEventEnrichmentsId(
  args: InferRequestType<(typeof client.enrichment.event_enrichments)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.enrichment.event_enrichments[':id'].$delete(args, options))
}

export async function getEnrichmentEventEnrichmentsIdAssociations(
  args: InferRequestType<
    (typeof client.enrichment.event_enrichments)[':id']['associations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.enrichment.event_enrichments[':id'].associations.$get(args, options),
  )
}

export async function postEnrichmentEventEnrichmentsIdAssociations(
  args: InferRequestType<
    (typeof client.enrichment.event_enrichments)[':id']['associations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.enrichment.event_enrichments[':id'].associations.$post(args, options),
  )
}

export async function deleteEnrichmentEventEnrichmentsIdAssociations(
  args: InferRequestType<
    (typeof client.enrichment.event_enrichments)[':id']['associations']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.enrichment.event_enrichments[':id'].associations.$delete(args, options),
  )
}

export async function getEnrichmentEventEnrichmentsIdRules(
  args: InferRequestType<(typeof client.enrichment.event_enrichments)[':id']['rules']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.enrichment.event_enrichments[':id'].rules.$get(args, options))
}

export async function putEnrichmentEventEnrichmentsIdRules(
  args: InferRequestType<(typeof client.enrichment.event_enrichments)[':id']['rules']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.enrichment.event_enrichments[':id'].rules.$put(args, options))
}

export async function getExtensionSchemasId(
  args: InferRequestType<(typeof client.extension_schemas)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extension_schemas[':id'].$get(args, options))
}

export async function getExtensions(
  args: InferRequestType<typeof client.extensions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extensions.$get(args, options))
}

export async function postExtensions(
  args: InferRequestType<typeof client.extensions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extensions.$post(args, options))
}

export async function getExtensionsId(
  args: InferRequestType<(typeof client.extensions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extensions[':id'].$get(args, options))
}

export async function putExtensionsId(
  args: InferRequestType<(typeof client.extensions)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extensions[':id'].$put(args, options))
}

export async function deleteExtensionsId(
  args: InferRequestType<(typeof client.extensions)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extensions[':id'].$delete(args, options))
}

export async function postExtensionsIdEnable(
  args: InferRequestType<(typeof client.extensions)[':id']['enable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extensions[':id'].enable.$post(args, options))
}

export async function getIncidentWorkflows(
  args: InferRequestType<typeof client.incident_workflows.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.incident_workflows.$get(args, options))
}

export async function postIncidentWorkflows(
  args: InferRequestType<typeof client.incident_workflows.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.incident_workflows.$post(args, options))
}

export async function getIncidentWorkflowsId(
  args: InferRequestType<(typeof client.incident_workflows)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.incident_workflows[':id'].$get(args, options))
}

export async function putIncidentWorkflowsId(
  args: InferRequestType<(typeof client.incident_workflows)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.incident_workflows[':id'].$put(args, options))
}

export async function deleteIncidentWorkflowsId(
  args: InferRequestType<(typeof client.incident_workflows)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.incident_workflows[':id'].$delete(args, options))
}

export async function postIncidentWorkflowsIdInstances(
  args: InferRequestType<(typeof client.incident_workflows)[':id']['instances']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.incident_workflows[':id'].instances.$post(args, options))
}

export async function getIncidentWorkflowsActions(
  args: InferRequestType<typeof client.incident_workflows.actions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.incident_workflows.actions.$get(args, options))
}

export async function getIncidentWorkflowsActionsId(
  args: InferRequestType<(typeof client.incident_workflows.actions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.incident_workflows.actions[':id'].$get(args, options))
}

export async function getIncidentWorkflowsTriggers(
  args: InferRequestType<typeof client.incident_workflows.triggers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.incident_workflows.triggers.$get(args, options))
}

export async function postIncidentWorkflowsTriggers(
  args: InferRequestType<typeof client.incident_workflows.triggers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.incident_workflows.triggers.$post(args, options))
}

export async function getIncidentWorkflowsTriggersId(
  args: InferRequestType<(typeof client.incident_workflows.triggers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.incident_workflows.triggers[':id'].$get(args, options))
}

export async function putIncidentWorkflowsTriggersId(
  args: InferRequestType<(typeof client.incident_workflows.triggers)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.incident_workflows.triggers[':id'].$put(args, options))
}

export async function deleteIncidentWorkflowsTriggersId(
  args: InferRequestType<(typeof client.incident_workflows.triggers)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.incident_workflows.triggers[':id'].$delete(args, options))
}

export async function postIncidentWorkflowsTriggersIdServices(
  args: InferRequestType<(typeof client.incident_workflows.triggers)[':id']['services']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.incident_workflows.triggers[':id'].services.$post(args, options),
  )
}

export async function deleteIncidentWorkflowsTriggersTriggerIdServicesServiceId(
  args: InferRequestType<
    (typeof client.incident_workflows.triggers)[':trigger_id']['services'][':service_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.incident_workflows.triggers[':trigger_id'].services[':service_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getIncidents(
  args: InferRequestType<typeof client.incidents.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.incidents.$get(args, options))
}

export async function putIncidents(
  args: InferRequestType<typeof client.incidents.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.incidents.$put(args, options))
}

export async function postIncidents(
  args: InferRequestType<typeof client.incidents.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.incidents.$post(args, options))
}

export async function getIncidentsId(
  args: InferRequestType<(typeof client.incidents)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.incidents[':id'].$get(args, options))
}

export async function putIncidentsId(
  args: InferRequestType<(typeof client.incidents)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.incidents[':id'].$put(args, options))
}

export async function getIncidentsIdAlerts(
  args: InferRequestType<(typeof client.incidents)[':id']['alerts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.incidents[':id'].alerts.$get(args, options))
}

export async function putIncidentsIdAlerts(
  args: InferRequestType<(typeof client.incidents)[':id']['alerts']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.incidents[':id'].alerts.$put(args, options))
}

export async function getIncidentsIdAlertsAlertId(
  args: InferRequestType<(typeof client.incidents)[':id']['alerts'][':alert_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.incidents[':id'].alerts[':alert_id'].$get(args, options))
}

export async function putIncidentsIdAlertsAlertId(
  args: InferRequestType<(typeof client.incidents)[':id']['alerts'][':alert_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.incidents[':id'].alerts[':alert_id'].$put(args, options))
}

export async function putIncidentsIdBusinessServicesBusinessServiceIdImpacts(
  args: InferRequestType<
    (typeof client.incidents)[':id']['business_services'][':business_service_id']['impacts']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.incidents[':id'].business_services[':business_service_id'].impacts.$put(args, options),
  )
}

export async function getIncidentsIdBusinessServicesImpacts(
  args: InferRequestType<(typeof client.incidents)[':id']['business_services']['impacts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.incidents[':id'].business_services.impacts.$get(args, options))
}

export async function getIncidentsIdCustomFieldsValues(
  args: InferRequestType<(typeof client.incidents)[':id']['custom_fields']['values']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.incidents[':id'].custom_fields.values.$get(args, options))
}

export async function putIncidentsIdCustomFieldsValues(
  args: InferRequestType<(typeof client.incidents)[':id']['custom_fields']['values']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.incidents[':id'].custom_fields.values.$put(args, options))
}

export async function getIncidentsIdLogEntries(
  args: InferRequestType<(typeof client.incidents)[':id']['log_entries']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.incidents[':id'].log_entries.$get(args, options))
}

export async function putIncidentsIdMerge(
  args: InferRequestType<(typeof client.incidents)[':id']['merge']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.incidents[':id'].merge.$put(args, options))
}

export async function getIncidentsIdNotes(
  args: InferRequestType<(typeof client.incidents)[':id']['notes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.incidents[':id'].notes.$get(args, options))
}

export async function postIncidentsIdNotes(
  args: InferRequestType<(typeof client.incidents)[':id']['notes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.incidents[':id'].notes.$post(args, options))
}

export async function putIncidentsIdNotesNoteId(
  args: InferRequestType<(typeof client.incidents)[':id']['notes'][':note_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.incidents[':id'].notes[':note_id'].$put(args, options))
}

export async function deleteIncidentsIdNotesNoteId(
  args: InferRequestType<(typeof client.incidents)[':id']['notes'][':note_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.incidents[':id'].notes[':note_id'].$delete(args, options))
}

export async function getIncidentsIdOutlierIncident(
  args: InferRequestType<(typeof client.incidents)[':id']['outlier_incident']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.incidents[':id'].outlier_incident.$get(args, options))
}

export async function getIncidentsIdPastIncidents(
  args: InferRequestType<(typeof client.incidents)[':id']['past_incidents']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.incidents[':id'].past_incidents.$get(args, options))
}

export async function getIncidentsIdRelatedChangeEvents(
  args: InferRequestType<(typeof client.incidents)[':id']['related_change_events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.incidents[':id'].related_change_events.$get(args, options))
}

export async function getIncidentsIdRelatedIncidents(
  args: InferRequestType<(typeof client.incidents)[':id']['related_incidents']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.incidents[':id'].related_incidents.$get(args, options))
}

export async function postIncidentsIdResponderRequests(
  args: InferRequestType<(typeof client.incidents)[':id']['responder_requests']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.incidents[':id'].responder_requests.$post(args, options))
}

export async function putIncidentsIdResponderRequestsCancel(
  args: InferRequestType<(typeof client.incidents)[':id']['responder_requests']['cancel']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.incidents[':id'].responder_requests.cancel.$put(args, options))
}

export async function getIncidentsReviews(
  args: InferRequestType<typeof client.incidents.reviews.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.incidents.reviews.$get(args, options))
}

export async function getIncidentsReviewsActionItems(
  args: InferRequestType<typeof client.incidents.reviews.action_items.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.incidents.reviews.action_items.$get(args, options))
}

export async function getIncidentsIdReview(
  args: InferRequestType<(typeof client.incidents)[':id']['review']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.incidents[':id'].review.$get(args, options))
}

export async function putIncidentsIdReview(
  args: InferRequestType<(typeof client.incidents)[':id']['review']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.incidents[':id'].review.$put(args, options))
}

export async function postIncidentsIdReview(
  args: InferRequestType<(typeof client.incidents)[':id']['review']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.incidents[':id'].review.$post(args, options))
}

export async function getIncidentsIdReviewActionItems(
  args: InferRequestType<(typeof client.incidents)[':id']['review']['action_items']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.incidents[':id'].review.action_items.$get(args, options))
}

export async function postIncidentsIdReviewMarkers(
  args: InferRequestType<(typeof client.incidents)[':id']['review']['markers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.incidents[':id'].review.markers.$post(args, options))
}

export async function getIncidentsIdScribeTranscripts(
  args: InferRequestType<(typeof client.incidents)[':id']['scribe_transcripts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.incidents[':id'].scribe_transcripts.$get(args, options))
}

export async function postIncidentsIdSnooze(
  args: InferRequestType<(typeof client.incidents)[':id']['snooze']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.incidents[':id'].snooze.$post(args, options))
}

export async function postIncidentsIdStatusUpdates(
  args: InferRequestType<(typeof client.incidents)[':id']['status_updates']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.incidents[':id'].status_updates.$post(args, options))
}

export async function getIncidentsIdStatusUpdatesSubscribers(
  args: InferRequestType<(typeof client.incidents)[':id']['status_updates']['subscribers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.incidents[':id'].status_updates.subscribers.$get(args, options))
}

export async function postIncidentsIdStatusUpdatesSubscribers(
  args: InferRequestType<
    (typeof client.incidents)[':id']['status_updates']['subscribers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.incidents[':id'].status_updates.subscribers.$post(args, options),
  )
}

export async function postIncidentsIdStatusUpdatesUnsubscribe(
  args: InferRequestType<
    (typeof client.incidents)[':id']['status_updates']['unsubscribe']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.incidents[':id'].status_updates.unsubscribe.$post(args, options),
  )
}

export async function getIncidentsTypes(
  args: InferRequestType<typeof client.incidents.types.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.incidents.types.$get(args, options))
}

export async function postIncidentsTypes(
  args: InferRequestType<typeof client.incidents.types.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.incidents.types.$post(args, options))
}

export async function getIncidentsTypesTypeIdOrName(
  args: InferRequestType<(typeof client.incidents.types)[':type_id_or_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.incidents.types[':type_id_or_name'].$get(args, options))
}

export async function putIncidentsTypesTypeIdOrName(
  args: InferRequestType<(typeof client.incidents.types)[':type_id_or_name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.incidents.types[':type_id_or_name'].$put(args, options))
}

export async function getIncidentsTypesTypeIdOrNameCustomFields(
  args: InferRequestType<
    (typeof client.incidents.types)[':type_id_or_name']['custom_fields']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.incidents.types[':type_id_or_name'].custom_fields.$get(args, options),
  )
}

export async function postIncidentsTypesTypeIdOrNameCustomFields(
  args: InferRequestType<
    (typeof client.incidents.types)[':type_id_or_name']['custom_fields']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.incidents.types[':type_id_or_name'].custom_fields.$post(args, options),
  )
}

export async function getIncidentsTypesTypeIdOrNameCustomFieldsFieldId(
  args: InferRequestType<
    (typeof client.incidents.types)[':type_id_or_name']['custom_fields'][':field_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.incidents.types[':type_id_or_name'].custom_fields[':field_id'].$get(args, options),
  )
}

export async function putIncidentsTypesTypeIdOrNameCustomFieldsFieldId(
  args: InferRequestType<
    (typeof client.incidents.types)[':type_id_or_name']['custom_fields'][':field_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.incidents.types[':type_id_or_name'].custom_fields[':field_id'].$put(args, options),
  )
}

export async function deleteIncidentsTypesTypeIdOrNameCustomFieldsFieldId(
  args: InferRequestType<
    (typeof client.incidents.types)[':type_id_or_name']['custom_fields'][':field_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.incidents.types[':type_id_or_name'].custom_fields[':field_id'].$delete(args, options),
  )
}

export async function getIncidentsTypesTypeIdOrNameCustomFieldsFieldIdFieldOptions(
  args: InferRequestType<
    (typeof client.incidents.types)[':type_id_or_name']['custom_fields'][':field_id']['field_options']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.incidents.types[':type_id_or_name'].custom_fields[':field_id'].field_options.$get(
      args,
      options,
    ),
  )
}

export async function postIncidentsTypesTypeIdOrNameCustomFieldsFieldIdFieldOptions(
  args: InferRequestType<
    (typeof client.incidents.types)[':type_id_or_name']['custom_fields'][':field_id']['field_options']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.incidents.types[':type_id_or_name'].custom_fields[':field_id'].field_options.$post(
      args,
      options,
    ),
  )
}

export async function getIncidentsTypesTypeIdOrNameCustomFieldsFieldIdFieldOptionsFieldOptionId(
  args: InferRequestType<
    (typeof client.incidents.types)[':type_id_or_name']['custom_fields'][':field_id']['field_options'][':field_option_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.incidents.types[':type_id_or_name'].custom_fields[':field_id'].field_options[
      ':field_option_id'
    ].$get(args, options),
  )
}

export async function putIncidentsTypesTypeIdOrNameCustomFieldsFieldIdFieldOptionsFieldOptionId(
  args: InferRequestType<
    (typeof client.incidents.types)[':type_id_or_name']['custom_fields'][':field_id']['field_options'][':field_option_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.incidents.types[':type_id_or_name'].custom_fields[':field_id'].field_options[
      ':field_option_id'
    ].$put(args, options),
  )
}

export async function deleteIncidentsTypesTypeIdOrNameCustomFieldsFieldIdFieldOptionsFieldOptionId(
  args: InferRequestType<
    (typeof client.incidents.types)[':type_id_or_name']['custom_fields'][':field_id']['field_options'][':field_option_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.incidents.types[':type_id_or_name'].custom_fields[':field_id'].field_options[
      ':field_option_id'
    ].$delete(args, options),
  )
}

export async function getIncidentsCustomFields(
  args: InferRequestType<typeof client.incidents.custom_fields.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.incidents.custom_fields.$get(args, options))
}

export async function postIncidentsCustomFields(
  args: InferRequestType<typeof client.incidents.custom_fields.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.incidents.custom_fields.$post(args, options))
}

export async function getIncidentsCustomFieldsFieldId(
  args: InferRequestType<(typeof client.incidents.custom_fields)[':field_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.incidents.custom_fields[':field_id'].$get(args, options))
}

export async function putIncidentsCustomFieldsFieldId(
  args: InferRequestType<(typeof client.incidents.custom_fields)[':field_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.incidents.custom_fields[':field_id'].$put(args, options))
}

export async function deleteIncidentsCustomFieldsFieldId(
  args: InferRequestType<(typeof client.incidents.custom_fields)[':field_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.incidents.custom_fields[':field_id'].$delete(args, options))
}

export async function getIncidentsCustomFieldsFieldIdFieldOptions(
  args: InferRequestType<
    (typeof client.incidents.custom_fields)[':field_id']['field_options']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.incidents.custom_fields[':field_id'].field_options.$get(args, options),
  )
}

export async function postIncidentsCustomFieldsFieldIdFieldOptions(
  args: InferRequestType<
    (typeof client.incidents.custom_fields)[':field_id']['field_options']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.incidents.custom_fields[':field_id'].field_options.$post(args, options),
  )
}

export async function putIncidentsCustomFieldsFieldIdFieldOptionsFieldOptionId(
  args: InferRequestType<
    (typeof client.incidents.custom_fields)[':field_id']['field_options'][':field_option_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.incidents.custom_fields[':field_id'].field_options[':field_option_id'].$put(
      args,
      options,
    ),
  )
}

export async function deleteIncidentsCustomFieldsFieldIdFieldOptionsFieldOptionId(
  args: InferRequestType<
    (typeof client.incidents.custom_fields)[':field_id']['field_options'][':field_option_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.incidents.custom_fields[':field_id'].field_options[':field_option_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getIpAllowLists(
  args: InferRequestType<typeof client.ip_allow_lists.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ip_allow_lists.$get(args, options))
}

export async function postIpAllowLists(
  args: InferRequestType<typeof client.ip_allow_lists.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ip_allow_lists.$post(args, options))
}

export async function getIpAllowListsId(
  args: InferRequestType<(typeof client.ip_allow_lists)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ip_allow_lists[':id'].$get(args, options))
}

export async function putIpAllowListsId(
  args: InferRequestType<(typeof client.ip_allow_lists)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ip_allow_lists[':id'].$put(args, options))
}

export async function deleteIpAllowListsId(
  args: InferRequestType<(typeof client.ip_allow_lists)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ip_allow_lists[':id'].$delete(args, options))
}

export async function getIpAllowListsIdAuditRecords(
  args: InferRequestType<(typeof client.ip_allow_lists)[':id']['audit']['records']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ip_allow_lists[':id'].audit.records.$get(args, options))
}

export async function getLicenseAllocations(
  args: InferRequestType<typeof client.license_allocations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.license_allocations.$get(args, options))
}

export async function getLicenses(
  args: InferRequestType<typeof client.licenses.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.licenses.$get(args, options))
}

export async function getLogEntries(
  args: InferRequestType<typeof client.log_entries.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.log_entries.$get(args, options))
}

export async function getLogEntriesId(
  args: InferRequestType<(typeof client.log_entries)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.log_entries[':id'].$get(args, options))
}

export async function putLogEntriesIdChannel(
  args: InferRequestType<(typeof client.log_entries)[':id']['channel']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.log_entries[':id'].channel.$put(args, options))
}

export async function getMaintenanceWindows(
  args: InferRequestType<typeof client.maintenance_windows.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.maintenance_windows.$get(args, options))
}

export async function postMaintenanceWindows(
  args: InferRequestType<typeof client.maintenance_windows.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.maintenance_windows.$post(args, options))
}

export async function getMaintenanceWindowsId(
  args: InferRequestType<(typeof client.maintenance_windows)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.maintenance_windows[':id'].$get(args, options))
}

export async function putMaintenanceWindowsId(
  args: InferRequestType<(typeof client.maintenance_windows)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.maintenance_windows[':id'].$put(args, options))
}

export async function deleteMaintenanceWindowsId(
  args: InferRequestType<(typeof client.maintenance_windows)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.maintenance_windows[':id'].$delete(args, options))
}

export async function getNotifications(
  args: InferRequestType<typeof client.notifications.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifications.$get(args, options))
}

export async function deleteOauthDelegations(
  args: InferRequestType<typeof client.oauth_delegations.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth_delegations.$delete(args, options))
}

export async function getOauthDelegationsRevocationRequestsStatus(
  args: InferRequestType<typeof client.oauth_delegations.revocation_requests.status.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.oauth_delegations.revocation_requests.status.$get(args, options),
  )
}

export async function getOncalls(
  args: InferRequestType<typeof client.oncalls.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oncalls.$get(args, options))
}

export async function getPausedIncidentReportsAlerts(
  args: InferRequestType<typeof client.paused_incident_reports.alerts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.paused_incident_reports.alerts.$get(args, options))
}

export async function getPausedIncidentReportsCounts(
  args: InferRequestType<typeof client.paused_incident_reports.counts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.paused_incident_reports.counts.$get(args, options))
}

export async function getPriorities(
  args: InferRequestType<typeof client.priorities.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.priorities.$get(args, options))
}

export async function getRulesets(
  args: InferRequestType<typeof client.rulesets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rulesets.$get(args, options))
}

export async function postRulesets(
  args: InferRequestType<typeof client.rulesets.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rulesets.$post(args, options))
}

export async function getRulesetsId(
  args: InferRequestType<(typeof client.rulesets)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rulesets[':id'].$get(args, options))
}

export async function putRulesetsId(
  args: InferRequestType<(typeof client.rulesets)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rulesets[':id'].$put(args, options))
}

export async function deleteRulesetsId(
  args: InferRequestType<(typeof client.rulesets)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rulesets[':id'].$delete(args, options))
}

export async function getRulesetsIdRules(
  args: InferRequestType<(typeof client.rulesets)[':id']['rules']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rulesets[':id'].rules.$get(args, options))
}

export async function postRulesetsIdRules(
  args: InferRequestType<(typeof client.rulesets)[':id']['rules']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rulesets[':id'].rules.$post(args, options))
}

export async function getRulesetsIdRulesRuleId(
  args: InferRequestType<(typeof client.rulesets)[':id']['rules'][':rule_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rulesets[':id'].rules[':rule_id'].$get(args, options))
}

export async function putRulesetsIdRulesRuleId(
  args: InferRequestType<(typeof client.rulesets)[':id']['rules'][':rule_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rulesets[':id'].rules[':rule_id'].$put(args, options))
}

export async function deleteRulesetsIdRulesRuleId(
  args: InferRequestType<(typeof client.rulesets)[':id']['rules'][':rule_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rulesets[':id'].rules[':rule_id'].$delete(args, options))
}

export async function getSchedules(
  args: InferRequestType<typeof client.schedules.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.schedules.$get(args, options))
}

export async function postSchedules(
  args: InferRequestType<typeof client.schedules.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.schedules.$post(args, options))
}

export async function getSchedulesId(
  args: InferRequestType<(typeof client.schedules)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.schedules[':id'].$get(args, options))
}

export async function putSchedulesId(
  args: InferRequestType<(typeof client.schedules)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.schedules[':id'].$put(args, options))
}

export async function deleteSchedulesId(
  args: InferRequestType<(typeof client.schedules)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.schedules[':id'].$delete(args, options))
}

export async function getSchedulesIdAuditRecords(
  args: InferRequestType<(typeof client.schedules)[':id']['audit']['records']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.schedules[':id'].audit.records.$get(args, options))
}

export async function getSchedulesIdOverrides(
  args: InferRequestType<(typeof client.schedules)[':id']['overrides']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.schedules[':id'].overrides.$get(args, options))
}

export async function postSchedulesIdOverrides(
  args: InferRequestType<(typeof client.schedules)[':id']['overrides']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.schedules[':id'].overrides.$post(args, options))
}

export async function deleteSchedulesIdOverridesOverrideId(
  args: InferRequestType<(typeof client.schedules)[':id']['overrides'][':override_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.schedules[':id'].overrides[':override_id'].$delete(args, options),
  )
}

export async function getSchedulesIdUsers(
  args: InferRequestType<(typeof client.schedules)[':id']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.schedules[':id'].users.$get(args, options))
}

export async function postSchedulesPreview(
  args: InferRequestType<typeof client.schedules.preview.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.schedules.preview.$post(args, options))
}

export async function postServiceDependenciesAssociate(
  args: InferRequestType<typeof client.service_dependencies.associate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.service_dependencies.associate.$post(args, options))
}

export async function getServiceDependenciesBusinessServicesId(
  args: InferRequestType<(typeof client.service_dependencies.business_services)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.service_dependencies.business_services[':id'].$get(args, options),
  )
}

export async function postServiceDependenciesDisassociate(
  args: InferRequestType<typeof client.service_dependencies.disassociate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.service_dependencies.disassociate.$post(args, options))
}

export async function getServiceDependenciesTechnicalServicesId(
  args: InferRequestType<(typeof client.service_dependencies.technical_services)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.service_dependencies.technical_services[':id'].$get(args, options),
  )
}

export async function getServices(
  args: InferRequestType<typeof client.services.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.$get(args, options))
}

export async function postServices(
  args: InferRequestType<typeof client.services.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.$post(args, options))
}

export async function getServicesId(
  args: InferRequestType<(typeof client.services)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services[':id'].$get(args, options))
}

export async function putServicesId(
  args: InferRequestType<(typeof client.services)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services[':id'].$put(args, options))
}

export async function deleteServicesId(
  args: InferRequestType<(typeof client.services)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services[':id'].$delete(args, options))
}

export async function getServicesIdAuditRecords(
  args: InferRequestType<(typeof client.services)[':id']['audit']['records']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services[':id'].audit.records.$get(args, options))
}

export async function getServicesIdChangeEvents(
  args: InferRequestType<(typeof client.services)[':id']['change_events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services[':id'].change_events.$get(args, options))
}

export async function postServicesIdIntegrations(
  args: InferRequestType<(typeof client.services)[':id']['integrations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services[':id'].integrations.$post(args, options))
}

export async function getServicesIdIntegrationsIntegrationId(
  args: InferRequestType<
    (typeof client.services)[':id']['integrations'][':integration_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services[':id'].integrations[':integration_id'].$get(args, options),
  )
}

export async function putServicesIdIntegrationsIntegrationId(
  args: InferRequestType<
    (typeof client.services)[':id']['integrations'][':integration_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services[':id'].integrations[':integration_id'].$put(args, options),
  )
}

export async function getServicesIdRules(
  args: InferRequestType<(typeof client.services)[':id']['rules']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services[':id'].rules.$get(args, options))
}

export async function postServicesIdRules(
  args: InferRequestType<(typeof client.services)[':id']['rules']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services[':id'].rules.$post(args, options))
}

export async function postServicesIdRulesConvert(
  args: InferRequestType<(typeof client.services)[':id']['rules']['convert']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services[':id'].rules.convert.$post(args, options))
}

export async function getServicesIdRulesRuleId(
  args: InferRequestType<(typeof client.services)[':id']['rules'][':rule_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services[':id'].rules[':rule_id'].$get(args, options))
}

export async function putServicesIdRulesRuleId(
  args: InferRequestType<(typeof client.services)[':id']['rules'][':rule_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services[':id'].rules[':rule_id'].$put(args, options))
}

export async function deleteServicesIdRulesRuleId(
  args: InferRequestType<(typeof client.services)[':id']['rules'][':rule_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services[':id'].rules[':rule_id'].$delete(args, options))
}

export async function getServicesCustomFields(
  args: InferRequestType<typeof client.services.custom_fields.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.custom_fields.$get(args, options))
}

export async function postServicesCustomFields(
  args: InferRequestType<typeof client.services.custom_fields.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.custom_fields.$post(args, options))
}

export async function getServicesCustomFieldsFieldId(
  args: InferRequestType<(typeof client.services.custom_fields)[':field_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.custom_fields[':field_id'].$get(args, options))
}

export async function putServicesCustomFieldsFieldId(
  args: InferRequestType<(typeof client.services.custom_fields)[':field_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.custom_fields[':field_id'].$put(args, options))
}

export async function deleteServicesCustomFieldsFieldId(
  args: InferRequestType<(typeof client.services.custom_fields)[':field_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.custom_fields[':field_id'].$delete(args, options))
}

export async function getServicesCustomFieldsFieldIdFieldOptions(
  args: InferRequestType<
    (typeof client.services.custom_fields)[':field_id']['field_options']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.custom_fields[':field_id'].field_options.$get(args, options),
  )
}

export async function postServicesCustomFieldsFieldIdFieldOptions(
  args: InferRequestType<
    (typeof client.services.custom_fields)[':field_id']['field_options']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.custom_fields[':field_id'].field_options.$post(args, options),
  )
}

export async function getServicesCustomFieldsFieldIdFieldOptionsFieldOptionId(
  args: InferRequestType<
    (typeof client.services.custom_fields)[':field_id']['field_options'][':field_option_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.custom_fields[':field_id'].field_options[':field_option_id'].$get(
      args,
      options,
    ),
  )
}

export async function putServicesCustomFieldsFieldIdFieldOptionsFieldOptionId(
  args: InferRequestType<
    (typeof client.services.custom_fields)[':field_id']['field_options'][':field_option_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.custom_fields[':field_id'].field_options[':field_option_id'].$put(
      args,
      options,
    ),
  )
}

export async function deleteServicesCustomFieldsFieldIdFieldOptionsFieldOptionId(
  args: InferRequestType<
    (typeof client.services.custom_fields)[':field_id']['field_options'][':field_option_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services.custom_fields[':field_id'].field_options[':field_option_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getServicesIdCustomFieldsValues(
  args: InferRequestType<(typeof client.services)[':id']['custom_fields']['values']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services[':id'].custom_fields.values.$get(args, options))
}

export async function putServicesIdCustomFieldsValues(
  args: InferRequestType<(typeof client.services)[':id']['custom_fields']['values']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services[':id'].custom_fields.values.$put(args, options))
}

export async function getServicesIdEnablements(
  args: InferRequestType<(typeof client.services)[':id']['enablements']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services[':id'].enablements.$get(args, options))
}

export async function putServicesIdEnablementsFeatureName(
  args: InferRequestType<(typeof client.services)[':id']['enablements'][':feature_name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services[':id'].enablements[':feature_name'].$put(args, options),
  )
}

export async function getSessionConfigurations(
  args: InferRequestType<typeof client.session_configurations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.session_configurations.$get(args, options))
}

export async function putSessionConfigurations(
  args: InferRequestType<typeof client.session_configurations.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.session_configurations.$put(args, options))
}

export async function deleteSessionConfigurations(
  args: InferRequestType<typeof client.session_configurations.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.session_configurations.$delete(args, options))
}

export async function getStandards(
  args: InferRequestType<typeof client.standards.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.standards.$get(args, options))
}

export async function putStandardsId(
  args: InferRequestType<(typeof client.standards)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.standards[':id'].$put(args, options))
}

export async function getStandardsScoresResourceType(
  args: InferRequestType<(typeof client.standards.scores)[':resource_type']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.standards.scores[':resource_type'].$get(args, options))
}

export async function getStandardsScoresResourceTypeId(
  args: InferRequestType<(typeof client.standards.scores)[':resource_type'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.standards.scores[':resource_type'][':id'].$get(args, options))
}

export async function getStatusDashboards(
  args: InferRequestType<typeof client.status_dashboards.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.status_dashboards.$get(args, options))
}

export async function getStatusDashboardsId(
  args: InferRequestType<(typeof client.status_dashboards)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.status_dashboards[':id'].$get(args, options))
}

export async function getStatusDashboardsIdServiceImpacts(
  args: InferRequestType<(typeof client.status_dashboards)[':id']['service_impacts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.status_dashboards[':id'].service_impacts.$get(args, options))
}

export async function getStatusDashboardsUrlSlugsUrlSlug(
  args: InferRequestType<(typeof client.status_dashboards.url_slugs)[':url_slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.status_dashboards.url_slugs[':url_slug'].$get(args, options))
}

export async function getStatusDashboardsUrlSlugsUrlSlugServiceImpacts(
  args: InferRequestType<
    (typeof client.status_dashboards.url_slugs)[':url_slug']['service_impacts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.status_dashboards.url_slugs[':url_slug'].service_impacts.$get(args, options),
  )
}

export async function getStatusPages(
  args: InferRequestType<typeof client.status_pages.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.status_pages.$get(args, options))
}

export async function getStatusPagesIdImpacts(
  args: InferRequestType<(typeof client.status_pages)[':id']['impacts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.status_pages[':id'].impacts.$get(args, options))
}

export async function getStatusPagesIdImpactsImpactId(
  args: InferRequestType<(typeof client.status_pages)[':id']['impacts'][':impact_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.status_pages[':id'].impacts[':impact_id'].$get(args, options))
}

export async function getStatusPagesIdServices(
  args: InferRequestType<(typeof client.status_pages)[':id']['services']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.status_pages[':id'].services.$get(args, options))
}

export async function getStatusPagesIdServicesServiceId(
  args: InferRequestType<(typeof client.status_pages)[':id']['services'][':service_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.status_pages[':id'].services[':service_id'].$get(args, options))
}

export async function getStatusPagesIdSeverities(
  args: InferRequestType<(typeof client.status_pages)[':id']['severities']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.status_pages[':id'].severities.$get(args, options))
}

export async function getStatusPagesIdSeveritiesSeverityId(
  args: InferRequestType<(typeof client.status_pages)[':id']['severities'][':severity_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.status_pages[':id'].severities[':severity_id'].$get(args, options),
  )
}

export async function getStatusPagesIdStatuses(
  args: InferRequestType<(typeof client.status_pages)[':id']['statuses']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.status_pages[':id'].statuses.$get(args, options))
}

export async function getStatusPagesIdStatusesStatusId(
  args: InferRequestType<(typeof client.status_pages)[':id']['statuses'][':status_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.status_pages[':id'].statuses[':status_id'].$get(args, options))
}

export async function getStatusPagesIdPosts(
  args: InferRequestType<(typeof client.status_pages)[':id']['posts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.status_pages[':id'].posts.$get(args, options))
}

export async function postStatusPagesIdPosts(
  args: InferRequestType<(typeof client.status_pages)[':id']['posts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.status_pages[':id'].posts.$post(args, options))
}

export async function getStatusPagesIdPostsPostId(
  args: InferRequestType<(typeof client.status_pages)[':id']['posts'][':post_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.status_pages[':id'].posts[':post_id'].$get(args, options))
}

export async function putStatusPagesIdPostsPostId(
  args: InferRequestType<(typeof client.status_pages)[':id']['posts'][':post_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.status_pages[':id'].posts[':post_id'].$put(args, options))
}

export async function deleteStatusPagesIdPostsPostId(
  args: InferRequestType<(typeof client.status_pages)[':id']['posts'][':post_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.status_pages[':id'].posts[':post_id'].$delete(args, options))
}

export async function getStatusPagesIdPostsPostIdPostUpdates(
  args: InferRequestType<
    (typeof client.status_pages)[':id']['posts'][':post_id']['post_updates']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.status_pages[':id'].posts[':post_id'].post_updates.$get(args, options),
  )
}

export async function postStatusPagesIdPostsPostIdPostUpdates(
  args: InferRequestType<
    (typeof client.status_pages)[':id']['posts'][':post_id']['post_updates']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.status_pages[':id'].posts[':post_id'].post_updates.$post(args, options),
  )
}

export async function getStatusPagesIdPostsPostIdPostUpdatesPostUpdateId(
  args: InferRequestType<
    (typeof client.status_pages)[':id']['posts'][':post_id']['post_updates'][':post_update_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.status_pages[':id'].posts[':post_id'].post_updates[':post_update_id'].$get(
      args,
      options,
    ),
  )
}

export async function putStatusPagesIdPostsPostIdPostUpdatesPostUpdateId(
  args: InferRequestType<
    (typeof client.status_pages)[':id']['posts'][':post_id']['post_updates'][':post_update_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.status_pages[':id'].posts[':post_id'].post_updates[':post_update_id'].$put(
      args,
      options,
    ),
  )
}

export async function deleteStatusPagesIdPostsPostIdPostUpdatesPostUpdateId(
  args: InferRequestType<
    (typeof client.status_pages)[':id']['posts'][':post_id']['post_updates'][':post_update_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.status_pages[':id'].posts[':post_id'].post_updates[':post_update_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getStatusPagesIdPostsPostIdPostmortem(
  args: InferRequestType<
    (typeof client.status_pages)[':id']['posts'][':post_id']['postmortem']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.status_pages[':id'].posts[':post_id'].postmortem.$get(args, options),
  )
}

export async function putStatusPagesIdPostsPostIdPostmortem(
  args: InferRequestType<
    (typeof client.status_pages)[':id']['posts'][':post_id']['postmortem']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.status_pages[':id'].posts[':post_id'].postmortem.$put(args, options),
  )
}

export async function deleteStatusPagesIdPostsPostIdPostmortem(
  args: InferRequestType<
    (typeof client.status_pages)[':id']['posts'][':post_id']['postmortem']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.status_pages[':id'].posts[':post_id'].postmortem.$delete(args, options),
  )
}

export async function getStatusPagesIdSubscriptions(
  args: InferRequestType<(typeof client.status_pages)[':id']['subscriptions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.status_pages[':id'].subscriptions.$get(args, options))
}

export async function postStatusPagesIdSubscriptions(
  args: InferRequestType<(typeof client.status_pages)[':id']['subscriptions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.status_pages[':id'].subscriptions.$post(args, options))
}

export async function getStatusPagesIdSubscriptionsSubscriptionId(
  args: InferRequestType<
    (typeof client.status_pages)[':id']['subscriptions'][':subscription_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.status_pages[':id'].subscriptions[':subscription_id'].$get(args, options),
  )
}

export async function deleteStatusPagesIdSubscriptionsSubscriptionId(
  args: InferRequestType<
    (typeof client.status_pages)[':id']['subscriptions'][':subscription_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.status_pages[':id'].subscriptions[':subscription_id'].$delete(args, options),
  )
}

export async function getSreAgentMemories(
  args: InferRequestType<typeof client.sre_agent.memories.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sre_agent.memories.$get(args, options))
}

export async function putSreAgentMemoriesId(
  args: InferRequestType<(typeof client.sre_agent.memories)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sre_agent.memories[':id'].$put(args, options))
}

export async function deleteSreAgentMemoriesId(
  args: InferRequestType<(typeof client.sre_agent.memories)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sre_agent.memories[':id'].$delete(args, options))
}

export async function getTags(
  args: InferRequestType<typeof client.tags.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags.$get(args, options))
}

export async function postTags(
  args: InferRequestType<typeof client.tags.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags.$post(args, options))
}

export async function getTagsId(
  args: InferRequestType<(typeof client.tags)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':id'].$get(args, options))
}

export async function deleteTagsId(
  args: InferRequestType<(typeof client.tags)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':id'].$delete(args, options))
}

export async function getTagsIdEntityType(
  args: InferRequestType<(typeof client.tags)[':id'][':entity_type']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':id'][':entity_type'].$get(args, options))
}

export async function getTeams(
  args: InferRequestType<typeof client.teams.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams.$get(args, options))
}

export async function postTeams(
  args: InferRequestType<typeof client.teams.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams.$post(args, options))
}

export async function getTeamsId(
  args: InferRequestType<(typeof client.teams)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':id'].$get(args, options))
}

export async function putTeamsId(
  args: InferRequestType<(typeof client.teams)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':id'].$put(args, options))
}

export async function deleteTeamsId(
  args: InferRequestType<(typeof client.teams)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':id'].$delete(args, options))
}

export async function getTeamsIdAuditRecords(
  args: InferRequestType<(typeof client.teams)[':id']['audit']['records']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':id'].audit.records.$get(args, options))
}

export async function putTeamsIdEscalationPoliciesEscalationPolicyId(
  args: InferRequestType<
    (typeof client.teams)[':id']['escalation_policies'][':escalation_policy_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.teams[':id'].escalation_policies[':escalation_policy_id'].$put(args, options),
  )
}

export async function deleteTeamsIdEscalationPoliciesEscalationPolicyId(
  args: InferRequestType<
    (typeof client.teams)[':id']['escalation_policies'][':escalation_policy_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.teams[':id'].escalation_policies[':escalation_policy_id'].$delete(args, options),
  )
}

export async function getTeamsIdMembers(
  args: InferRequestType<(typeof client.teams)[':id']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':id'].members.$get(args, options))
}

export async function getTeamsIdNotificationSubscriptions(
  args: InferRequestType<(typeof client.teams)[':id']['notification_subscriptions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':id'].notification_subscriptions.$get(args, options))
}

export async function postTeamsIdNotificationSubscriptions(
  args: InferRequestType<(typeof client.teams)[':id']['notification_subscriptions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':id'].notification_subscriptions.$post(args, options))
}

export async function postTeamsIdNotificationSubscriptionsUnsubscribe(
  args: InferRequestType<
    (typeof client.teams)[':id']['notification_subscriptions']['unsubscribe']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.teams[':id'].notification_subscriptions.unsubscribe.$post(args, options),
  )
}

export async function putTeamsIdUsersUserId(
  args: InferRequestType<(typeof client.teams)[':id']['users'][':user_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':id'].users[':user_id'].$put(args, options))
}

export async function deleteTeamsIdUsersUserId(
  args: InferRequestType<(typeof client.teams)[':id']['users'][':user_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':id'].users[':user_id'].$delete(args, options))
}

export async function getTemplates(
  args: InferRequestType<typeof client.templates.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates.$get(args, options))
}

export async function postTemplates(
  args: InferRequestType<typeof client.templates.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates.$post(args, options))
}

export async function getTemplatesId(
  args: InferRequestType<(typeof client.templates)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates[':id'].$get(args, options))
}

export async function putTemplatesId(
  args: InferRequestType<(typeof client.templates)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates[':id'].$put(args, options))
}

export async function deleteTemplatesId(
  args: InferRequestType<(typeof client.templates)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates[':id'].$delete(args, options))
}

export async function postTemplatesIdRender(
  args: InferRequestType<(typeof client.templates)[':id']['render']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates[':id'].render.$post(args, options))
}

export async function getTemplatesFields(
  args: InferRequestType<typeof client.templates.fields.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates.fields.$get(args, options))
}

export async function getUsers(
  args: InferRequestType<typeof client.users.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.$get(args, options))
}

export async function postUsers(
  args: InferRequestType<typeof client.users.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.$post(args, options))
}

export async function getUsersId(
  args: InferRequestType<(typeof client.users)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].$get(args, options))
}

export async function putUsersId(
  args: InferRequestType<(typeof client.users)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].$put(args, options))
}

export async function deleteUsersId(
  args: InferRequestType<(typeof client.users)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].$delete(args, options))
}

export async function getUsersIdAuditRecords(
  args: InferRequestType<(typeof client.users)[':id']['audit']['records']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].audit.records.$get(args, options))
}

export async function getUsersIdContactMethods(
  args: InferRequestType<(typeof client.users)[':id']['contact_methods']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].contact_methods.$get(args, options))
}

export async function postUsersIdContactMethods(
  args: InferRequestType<(typeof client.users)[':id']['contact_methods']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].contact_methods.$post(args, options))
}

export async function getUsersIdContactMethodsContactMethodId(
  args: InferRequestType<
    (typeof client.users)[':id']['contact_methods'][':contact_method_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':id'].contact_methods[':contact_method_id'].$get(args, options),
  )
}

export async function putUsersIdContactMethodsContactMethodId(
  args: InferRequestType<
    (typeof client.users)[':id']['contact_methods'][':contact_method_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':id'].contact_methods[':contact_method_id'].$put(args, options),
  )
}

export async function deleteUsersIdContactMethodsContactMethodId(
  args: InferRequestType<
    (typeof client.users)[':id']['contact_methods'][':contact_method_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':id'].contact_methods[':contact_method_id'].$delete(args, options),
  )
}

export async function getUsersIdOauthDelegations(
  args: InferRequestType<(typeof client.users)[':id']['oauth_delegations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].oauth_delegations.$get(args, options))
}

export async function getUsersIdOauthDelegationsDelegationId(
  args: InferRequestType<
    (typeof client.users)[':id']['oauth_delegations'][':delegation_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':id'].oauth_delegations[':delegation_id'].$get(args, options),
  )
}

export async function getUsersIdLicense(
  args: InferRequestType<(typeof client.users)[':id']['license']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].license.$get(args, options))
}

export async function getUsersIdNotificationRules(
  args: InferRequestType<(typeof client.users)[':id']['notification_rules']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].notification_rules.$get(args, options))
}

export async function postUsersIdNotificationRules(
  args: InferRequestType<(typeof client.users)[':id']['notification_rules']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].notification_rules.$post(args, options))
}

export async function getUsersIdNotificationRulesNotificationRuleId(
  args: InferRequestType<
    (typeof client.users)[':id']['notification_rules'][':notification_rule_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':id'].notification_rules[':notification_rule_id'].$get(args, options),
  )
}

export async function putUsersIdNotificationRulesNotificationRuleId(
  args: InferRequestType<
    (typeof client.users)[':id']['notification_rules'][':notification_rule_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':id'].notification_rules[':notification_rule_id'].$put(args, options),
  )
}

export async function deleteUsersIdNotificationRulesNotificationRuleId(
  args: InferRequestType<
    (typeof client.users)[':id']['notification_rules'][':notification_rule_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':id'].notification_rules[':notification_rule_id'].$delete(args, options),
  )
}

export async function getUsersIdNotificationSubscriptions(
  args: InferRequestType<(typeof client.users)[':id']['notification_subscriptions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].notification_subscriptions.$get(args, options))
}

export async function postUsersIdNotificationSubscriptions(
  args: InferRequestType<(typeof client.users)[':id']['notification_subscriptions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].notification_subscriptions.$post(args, options))
}

export async function postUsersIdNotificationSubscriptionsUnsubscribe(
  args: InferRequestType<
    (typeof client.users)[':id']['notification_subscriptions']['unsubscribe']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':id'].notification_subscriptions.unsubscribe.$post(args, options),
  )
}

export async function getUsersIdOncallHandoffNotificationRules(
  args: InferRequestType<(typeof client.users)[':id']['oncall_handoff_notification_rules']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':id'].oncall_handoff_notification_rules.$get(args, options),
  )
}

export async function postUsersIdOncallHandoffNotificationRules(
  args: InferRequestType<
    (typeof client.users)[':id']['oncall_handoff_notification_rules']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':id'].oncall_handoff_notification_rules.$post(args, options),
  )
}

export async function getUsersIdOncallHandoffNotificationRulesOncallHandoffNotificationRuleId(
  args: InferRequestType<
    (typeof client.users)[':id']['oncall_handoff_notification_rules'][':oncall_handoff_notification_rule_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':id'].oncall_handoff_notification_rules[
      ':oncall_handoff_notification_rule_id'
    ].$get(args, options),
  )
}

export async function putUsersIdOncallHandoffNotificationRulesOncallHandoffNotificationRuleId(
  args: InferRequestType<
    (typeof client.users)[':id']['oncall_handoff_notification_rules'][':oncall_handoff_notification_rule_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':id'].oncall_handoff_notification_rules[
      ':oncall_handoff_notification_rule_id'
    ].$put(args, options),
  )
}

export async function deleteUsersIdOncallHandoffNotificationRulesOncallHandoffNotificationRuleId(
  args: InferRequestType<
    (typeof client.users)[':id']['oncall_handoff_notification_rules'][':oncall_handoff_notification_rule_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':id'].oncall_handoff_notification_rules[
      ':oncall_handoff_notification_rule_id'
    ].$delete(args, options),
  )
}

export async function getUsersIdSessions(
  args: InferRequestType<(typeof client.users)[':id']['sessions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].sessions.$get(args, options))
}

export async function deleteUsersIdSessions(
  args: InferRequestType<(typeof client.users)[':id']['sessions']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].sessions.$delete(args, options))
}

export async function getUsersIdSessionsTypeSessionId(
  args: InferRequestType<(typeof client.users)[':id']['sessions'][':type'][':session_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':id'].sessions[':type'][':session_id'].$get(args, options),
  )
}

export async function deleteUsersIdSessionsTypeSessionId(
  args: InferRequestType<
    (typeof client.users)[':id']['sessions'][':type'][':session_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':id'].sessions[':type'][':session_id'].$delete(args, options),
  )
}

export async function getUsersIdStatusUpdateNotificationRules(
  args: InferRequestType<(typeof client.users)[':id']['status_update_notification_rules']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':id'].status_update_notification_rules.$get(args, options),
  )
}

export async function postUsersIdStatusUpdateNotificationRules(
  args: InferRequestType<(typeof client.users)[':id']['status_update_notification_rules']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':id'].status_update_notification_rules.$post(args, options),
  )
}

export async function getUsersIdStatusUpdateNotificationRulesStatusUpdateNotificationRuleId(
  args: InferRequestType<
    (typeof client.users)[':id']['status_update_notification_rules'][':status_update_notification_rule_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':id'].status_update_notification_rules[
      ':status_update_notification_rule_id'
    ].$get(args, options),
  )
}

export async function putUsersIdStatusUpdateNotificationRulesStatusUpdateNotificationRuleId(
  args: InferRequestType<
    (typeof client.users)[':id']['status_update_notification_rules'][':status_update_notification_rule_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':id'].status_update_notification_rules[
      ':status_update_notification_rule_id'
    ].$put(args, options),
  )
}

export async function deleteUsersIdStatusUpdateNotificationRulesStatusUpdateNotificationRuleId(
  args: InferRequestType<
    (typeof client.users)[':id']['status_update_notification_rules'][':status_update_notification_rule_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':id'].status_update_notification_rules[
      ':status_update_notification_rule_id'
    ].$delete(args, options),
  )
}

export async function postUsersIdRegeneratePrivateUrlKey(
  args: InferRequestType<(typeof client.users)[':id']['regenerate_private_url_key']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].regenerate_private_url_key.$post(args, options))
}

export async function getUsersMe(
  args: InferRequestType<typeof client.users.me.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.me.$get(args, options))
}

export async function getVendors(
  args: InferRequestType<typeof client.vendors.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vendors.$get(args, options))
}

export async function getV3Schedules(
  args: InferRequestType<typeof client.v3.schedules.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.schedules.$get(args, options))
}

export async function postV3Schedules(
  args: InferRequestType<typeof client.v3.schedules.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.schedules.$post(args, options))
}

export async function getV3SchedulesId(
  args: InferRequestType<(typeof client.v3.schedules)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.schedules[':id'].$get(args, options))
}

export async function putV3SchedulesId(
  args: InferRequestType<(typeof client.v3.schedules)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.schedules[':id'].$put(args, options))
}

export async function deleteV3SchedulesId(
  args: InferRequestType<(typeof client.v3.schedules)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.schedules[':id'].$delete(args, options))
}

export async function getV3SchedulesIdAuditRecords(
  args: InferRequestType<(typeof client.v3.schedules)[':id']['audit']['records']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.schedules[':id'].audit.records.$get(args, options))
}

export async function getV3SchedulesIdCustomShifts(
  args: InferRequestType<(typeof client.v3.schedules)[':id']['custom_shifts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.schedules[':id'].custom_shifts.$get(args, options))
}

export async function postV3SchedulesIdCustomShifts(
  args: InferRequestType<(typeof client.v3.schedules)[':id']['custom_shifts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.schedules[':id'].custom_shifts.$post(args, options))
}

export async function getV3SchedulesIdCustomShiftsCustomShiftId(
  args: InferRequestType<
    (typeof client.v3.schedules)[':id']['custom_shifts'][':custom_shift_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v3.schedules[':id'].custom_shifts[':custom_shift_id'].$get(args, options),
  )
}

export async function putV3SchedulesIdCustomShiftsCustomShiftId(
  args: InferRequestType<
    (typeof client.v3.schedules)[':id']['custom_shifts'][':custom_shift_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v3.schedules[':id'].custom_shifts[':custom_shift_id'].$put(args, options),
  )
}

export async function deleteV3SchedulesIdCustomShiftsCustomShiftId(
  args: InferRequestType<
    (typeof client.v3.schedules)[':id']['custom_shifts'][':custom_shift_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v3.schedules[':id'].custom_shifts[':custom_shift_id'].$delete(args, options),
  )
}

export async function getV3SchedulesIdOverrides(
  args: InferRequestType<(typeof client.v3.schedules)[':id']['overrides']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.schedules[':id'].overrides.$get(args, options))
}

export async function postV3SchedulesIdOverrides(
  args: InferRequestType<(typeof client.v3.schedules)[':id']['overrides']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.schedules[':id'].overrides.$post(args, options))
}

export async function getV3SchedulesIdOverridesOverrideId(
  args: InferRequestType<(typeof client.v3.schedules)[':id']['overrides'][':override_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v3.schedules[':id'].overrides[':override_id'].$get(args, options),
  )
}

export async function putV3SchedulesIdOverridesOverrideId(
  args: InferRequestType<(typeof client.v3.schedules)[':id']['overrides'][':override_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v3.schedules[':id'].overrides[':override_id'].$put(args, options),
  )
}

export async function deleteV3SchedulesIdOverridesOverrideId(
  args: InferRequestType<
    (typeof client.v3.schedules)[':id']['overrides'][':override_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v3.schedules[':id'].overrides[':override_id'].$delete(args, options),
  )
}

export async function getV3SchedulesIdRotations(
  args: InferRequestType<(typeof client.v3.schedules)[':id']['rotations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.schedules[':id'].rotations.$get(args, options))
}

export async function postV3SchedulesIdRotations(
  args: InferRequestType<(typeof client.v3.schedules)[':id']['rotations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.schedules[':id'].rotations.$post(args, options))
}

export async function getV3SchedulesIdRotationsRotationId(
  args: InferRequestType<(typeof client.v3.schedules)[':id']['rotations'][':rotation_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v3.schedules[':id'].rotations[':rotation_id'].$get(args, options),
  )
}

export async function deleteV3SchedulesIdRotationsRotationId(
  args: InferRequestType<
    (typeof client.v3.schedules)[':id']['rotations'][':rotation_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v3.schedules[':id'].rotations[':rotation_id'].$delete(args, options),
  )
}

export async function getV3SchedulesIdRotationsRotationIdEvents(
  args: InferRequestType<
    (typeof client.v3.schedules)[':id']['rotations'][':rotation_id']['events']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v3.schedules[':id'].rotations[':rotation_id'].events.$get(args, options),
  )
}

export async function postV3SchedulesIdRotationsRotationIdEvents(
  args: InferRequestType<
    (typeof client.v3.schedules)[':id']['rotations'][':rotation_id']['events']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v3.schedules[':id'].rotations[':rotation_id'].events.$post(args, options),
  )
}

export async function getV3SchedulesIdRotationsRotationIdEventsEventId(
  args: InferRequestType<
    (typeof client.v3.schedules)[':id']['rotations'][':rotation_id']['events'][':event_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v3.schedules[':id'].rotations[':rotation_id'].events[':event_id'].$get(args, options),
  )
}

export async function putV3SchedulesIdRotationsRotationIdEventsEventId(
  args: InferRequestType<
    (typeof client.v3.schedules)[':id']['rotations'][':rotation_id']['events'][':event_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v3.schedules[':id'].rotations[':rotation_id'].events[':event_id'].$put(args, options),
  )
}

export async function deleteV3SchedulesIdRotationsRotationIdEventsEventId(
  args: InferRequestType<
    (typeof client.v3.schedules)[':id']['rotations'][':rotation_id']['events'][':event_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v3.schedules[':id'].rotations[':rotation_id'].events[':event_id'].$delete(args, options),
  )
}

export async function getVendorsId(
  args: InferRequestType<(typeof client.vendors)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vendors[':id'].$get(args, options))
}

export async function getWebhookSubscriptions(
  args: InferRequestType<typeof client.webhook_subscriptions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhook_subscriptions.$get(args, options))
}

export async function postWebhookSubscriptions(
  args: InferRequestType<typeof client.webhook_subscriptions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhook_subscriptions.$post(args, options))
}

export async function getWebhookSubscriptionsId(
  args: InferRequestType<(typeof client.webhook_subscriptions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhook_subscriptions[':id'].$get(args, options))
}

export async function putWebhookSubscriptionsId(
  args: InferRequestType<(typeof client.webhook_subscriptions)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhook_subscriptions[':id'].$put(args, options))
}

export async function deleteWebhookSubscriptionsId(
  args: InferRequestType<(typeof client.webhook_subscriptions)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhook_subscriptions[':id'].$delete(args, options))
}

export async function postWebhookSubscriptionsIdEnable(
  args: InferRequestType<(typeof client.webhook_subscriptions)[':id']['enable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhook_subscriptions[':id'].enable.$post(args, options))
}

export async function postWebhookSubscriptionsIdPing(
  args: InferRequestType<(typeof client.webhook_subscriptions)[':id']['ping']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhook_subscriptions[':id'].ping.$post(args, options))
}

export async function getWebhookSubscriptionsOauthClients(
  args: InferRequestType<typeof client.webhook_subscriptions.oauth_clients.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhook_subscriptions.oauth_clients.$get(args, options))
}

export async function postWebhookSubscriptionsOauthClients(
  args: InferRequestType<typeof client.webhook_subscriptions.oauth_clients.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhook_subscriptions.oauth_clients.$post(args, options))
}

export async function getWebhookSubscriptionsOauthClientsId(
  args: InferRequestType<(typeof client.webhook_subscriptions.oauth_clients)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhook_subscriptions.oauth_clients[':id'].$get(args, options))
}

export async function putWebhookSubscriptionsOauthClientsId(
  args: InferRequestType<(typeof client.webhook_subscriptions.oauth_clients)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhook_subscriptions.oauth_clients[':id'].$put(args, options))
}

export async function deleteWebhookSubscriptionsOauthClientsId(
  args: InferRequestType<(typeof client.webhook_subscriptions.oauth_clients)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.webhook_subscriptions.oauth_clients[':id'].$delete(args, options),
  )
}

export async function getWorkflowsIntegrations(
  args: InferRequestType<typeof client.workflows.integrations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workflows.integrations.$get(args, options))
}

export async function getWorkflowsIntegrationsId(
  args: InferRequestType<(typeof client.workflows.integrations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workflows.integrations[':id'].$get(args, options))
}

export async function getWorkflowsIntegrationsConnections(
  args: InferRequestType<typeof client.workflows.integrations.connections.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workflows.integrations.connections.$get(args, options))
}

export async function getWorkflowsIntegrationsIntegrationIdConnections(
  args: InferRequestType<
    (typeof client.workflows.integrations)[':integration_id']['connections']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.workflows.integrations[':integration_id'].connections.$get(args, options),
  )
}

export async function postWorkflowsIntegrationsIntegrationIdConnections(
  args: InferRequestType<
    (typeof client.workflows.integrations)[':integration_id']['connections']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.workflows.integrations[':integration_id'].connections.$post(args, options),
  )
}

export async function getWorkflowsIntegrationsIntegrationIdConnectionsId(
  args: InferRequestType<
    (typeof client.workflows.integrations)[':integration_id']['connections'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.workflows.integrations[':integration_id'].connections[':id'].$get(args, options),
  )
}

export async function deleteWorkflowsIntegrationsIntegrationIdConnectionsId(
  args: InferRequestType<
    (typeof client.workflows.integrations)[':integration_id']['connections'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.workflows.integrations[':integration_id'].connections[':id'].$delete(args, options),
  )
}

export async function patchWorkflowsIntegrationsIntegrationIdConnectionsId(
  args: InferRequestType<
    (typeof client.workflows.integrations)[':integration_id']['connections'][':id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.workflows.integrations[':integration_id'].connections[':id'].$patch(args, options),
  )
}

export async function getRecommendationsEventOrchestrationsRules(
  args: InferRequestType<typeof client.recommendations.event_orchestrations.rules.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recommendations.event_orchestrations.rules.$get(args, options))
}

export async function postRecommendationsEventOrchestrationsServicesServiceIdRulesRecommendationIdDismiss(
  args: InferRequestType<
    (typeof client.recommendations.event_orchestrations.services)[':service_id']['rules'][':recommendation_id']['dismiss']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.recommendations.event_orchestrations.services[':service_id'].rules[
      ':recommendation_id'
    ].dismiss.$post(args, options),
  )
}

export async function postRecommendationsEventOrchestrationsServicesServiceIdRulesRecommendationIdAccept(
  args: InferRequestType<
    (typeof client.recommendations.event_orchestrations.services)[':service_id']['rules'][':recommendation_id']['accept']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.recommendations.event_orchestrations.services[':service_id'].rules[
      ':recommendation_id'
    ].accept.$post(args, options),
  )
}

export async function deleteRecommendationsEventOrchestrationsServicesServiceIdAcceptedRulesRuleId(
  args: InferRequestType<
    (typeof client.recommendations.event_orchestrations.services)[':service_id']['accepted_rules'][':rule_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.recommendations.event_orchestrations.services[':service_id'].accepted_rules[
      ':rule_id'
    ].$delete(args, options),
  )
}
