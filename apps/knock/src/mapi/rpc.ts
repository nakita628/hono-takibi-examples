import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1VariablesKey(
  args: InferRequestType<(typeof client.v1.variables)[':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.variables[':key'].$get(args, options))
}

export async function putV1VariablesKey(
  args: InferRequestType<(typeof client.v1.variables)[':key']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.variables[':key'].$put(args, options))
}

export async function deleteV1VariablesKey(
  args: InferRequestType<(typeof client.v1.variables)[':key']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.variables[':key'].$delete(args, options))
}

export async function getV1Goals(
  args: InferRequestType<typeof client.v1.goals.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.goals.$get(args, options))
}

export async function getV1WorkflowsWorkflowKey(
  args: InferRequestType<(typeof client.v1.workflows)[':workflow_key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workflows[':workflow_key'].$get(args, options))
}

export async function putV1WorkflowsWorkflowKey(
  args: InferRequestType<(typeof client.v1.workflows)[':workflow_key']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workflows[':workflow_key'].$put(args, options))
}

export async function deleteV1WorkflowsWorkflowKey(
  args: InferRequestType<(typeof client.v1.workflows)[':workflow_key']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workflows[':workflow_key'].$delete(args, options))
}

export async function getV1CommitsId(
  args: InferRequestType<(typeof client.v1.commits)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.commits[':id'].$get(args, options))
}

export async function getV1SourcesKeyStatus(
  args: InferRequestType<(typeof client.v1.sources)[':key']['status']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.sources[':key'].status.$get(args, options))
}

export async function putV1PartialsPartialKeyValidate(
  args: InferRequestType<(typeof client.v1.partials)[':partial_key']['validate']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.partials[':partial_key'].validate.$put(args, options))
}

export async function getV1Whoami(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.whoami.$get(undefined, options))
}

export async function getV1Sources(
  args: InferRequestType<typeof client.v1.sources.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.sources.$get(args, options))
}

export async function postV1EmailLayoutsPreview(
  args: InferRequestType<typeof client.v1.email_layouts.preview.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.email_layouts.preview.$post(args, options))
}

export async function putV1WorkflowsWorkflowKeyValidate(
  args: InferRequestType<(typeof client.v1.workflows)[':workflow_key']['validate']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workflows[':workflow_key'].validate.$put(args, options))
}

export async function getV1MessageTypes(
  args: InferRequestType<typeof client.v1.message_types.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.message_types.$get(args, options))
}

export async function getV1GoalsGoalKey(
  args: InferRequestType<(typeof client.v1.goals)[':goal_key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.goals[':goal_key'].$get(args, options))
}

export async function putV1GoalsGoalKey(
  args: InferRequestType<(typeof client.v1.goals)[':goal_key']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.goals[':goal_key'].$put(args, options))
}

export async function deleteV1GoalsGoalKey(
  args: InferRequestType<(typeof client.v1.goals)[':goal_key']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.goals[':goal_key'].$delete(args, options))
}

export async function getV1Environments(
  args: InferRequestType<typeof client.v1.environments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.environments.$get(args, options))
}

export async function deleteV1AssetsAssetId(
  args: InferRequestType<(typeof client.v1.assets)[':asset_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.assets[':asset_id'].$delete(args, options))
}

export async function getV1Assets(
  args: InferRequestType<typeof client.v1.assets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.assets.$get(args, options))
}

export async function postV1Assets(
  args: InferRequestType<typeof client.v1.assets.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.assets.$post(args, options))
}

export async function getV1BroadcastsBroadcastKey(
  args: InferRequestType<(typeof client.v1.broadcasts)[':broadcast_key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.broadcasts[':broadcast_key'].$get(args, options))
}

export async function putV1BroadcastsBroadcastKey(
  args: InferRequestType<(typeof client.v1.broadcasts)[':broadcast_key']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.broadcasts[':broadcast_key'].$put(args, options))
}

export async function postV1Feedback(
  args: InferRequestType<typeof client.v1.feedback.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.feedback.$post(args, options))
}

export async function postV1TemplatesPreview(
  args: InferRequestType<typeof client.v1.templates.preview.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.templates.preview.$post(args, options))
}

export async function putV1GuidesGuideKeyActivate(
  args: InferRequestType<(typeof client.v1.guides)[':guide_key']['activate']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.guides[':guide_key'].activate.$put(args, options))
}

export async function putV1CommitsPromote(
  args: InferRequestType<typeof client.v1.commits.promote.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.commits.promote.$put(args, options))
}

export async function putV1WarehouseSyncsWarehouseSyncKeyRun(
  args: InferRequestType<(typeof client.v1.warehouse_syncs)[':warehouse_sync_key']['run']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.warehouse_syncs[':warehouse_sync_key'].run.$put(args, options),
  )
}

export async function getV1Guides(
  args: InferRequestType<typeof client.v1.guides.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.guides.$get(args, options))
}

export async function postV1HeadlessAccounts(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.headless_accounts.$post(undefined, options))
}

export async function getV1Audiences(
  args: InferRequestType<typeof client.v1.audiences.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.audiences.$get(args, options))
}

export async function getV1Translations(
  args: InferRequestType<typeof client.v1.translations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.translations.$get(args, options))
}

export async function getV1TranslationsLocaleCode(
  args: InferRequestType<(typeof client.v1.translations)[':locale_code']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.translations[':locale_code'].$get(args, options))
}

export async function putV1TranslationsLocaleCode(
  args: InferRequestType<(typeof client.v1.translations)[':locale_code']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.translations[':locale_code'].$put(args, options))
}

export async function putV1GoalsGoalKeyValidate(
  args: InferRequestType<(typeof client.v1.goals)[':goal_key']['validate']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.goals[':goal_key'].validate.$put(args, options))
}

export async function putV1TagsName(
  args: InferRequestType<(typeof client.v1.tags)[':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.tags[':name'].$put(args, options))
}

export async function deleteV1TagsName(
  args: InferRequestType<(typeof client.v1.tags)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.tags[':name'].$delete(args, options))
}

export async function postV1SourcesKeyRehearse(
  args: InferRequestType<(typeof client.v1.sources)[':key']['rehearse']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.sources[':key'].rehearse.$post(args, options))
}

export async function getV1Schemas(
  args: InferRequestType<typeof client.v1.schemas.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.schemas.$get(args, options))
}

export async function getV1ChannelGroups(
  args: InferRequestType<typeof client.v1.channel_groups.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.channel_groups.$get(args, options))
}

export async function getV1PartialsPartialKey(
  args: InferRequestType<(typeof client.v1.partials)[':partial_key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.partials[':partial_key'].$get(args, options))
}

export async function putV1PartialsPartialKey(
  args: InferRequestType<(typeof client.v1.partials)[':partial_key']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.partials[':partial_key'].$put(args, options))
}

export async function deleteV1PartialsPartialKey(
  args: InferRequestType<(typeof client.v1.partials)[':partial_key']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.partials[':partial_key'].$delete(args, options))
}

export async function getV1Variables(
  args: InferRequestType<typeof client.v1.variables.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.variables.$get(args, options))
}

export async function getV1GuidesGuideKey(
  args: InferRequestType<(typeof client.v1.guides)[':guide_key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.guides[':guide_key'].$get(args, options))
}

export async function putV1GuidesGuideKey(
  args: InferRequestType<(typeof client.v1.guides)[':guide_key']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.guides[':guide_key'].$put(args, options))
}

export async function deleteV1GuidesGuideKey(
  args: InferRequestType<(typeof client.v1.guides)[':guide_key']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.guides[':guide_key'].$delete(args, options))
}

export async function getV1SourcesKey(
  args: InferRequestType<(typeof client.v1.sources)[':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.sources[':key'].$get(args, options))
}

export async function putV1SourcesKey(
  args: InferRequestType<(typeof client.v1.sources)[':key']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.sources[':key'].$put(args, options))
}

export async function putV1ReusableRequestsReusableRequestKeyValidate(
  args: InferRequestType<
    (typeof client.v1.reusable_requests)[':reusable_request_key']['validate']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.reusable_requests[':reusable_request_key'].validate.$put(args, options),
  )
}

export async function putV1CommitsIdPromote(
  args: InferRequestType<(typeof client.v1.commits)[':id']['promote']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.commits[':id'].promote.$put(args, options))
}

export async function getV1HeadlessAccountsStatus(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.headless_accounts.status.$get(undefined, options))
}

export async function putV1MessageTypesMessageTypeKeyValidate(
  args: InferRequestType<(typeof client.v1.message_types)[':message_type_key']['validate']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.message_types[':message_type_key'].validate.$put(args, options),
  )
}

export async function putV1WorkflowsWorkflowKeyUnarchive(
  args: InferRequestType<(typeof client.v1.workflows)[':workflow_key']['unarchive']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workflows[':workflow_key'].unarchive.$put(args, options))
}

export async function getV1Channels(
  args: InferRequestType<typeof client.v1.channels.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.channels.$get(args, options))
}

export async function getV1EnvironmentsEnvironmentSlug(
  args: InferRequestType<(typeof client.v1.environments)[':environment_slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.environments[':environment_slug'].$get(args, options))
}

export async function getV1Partials(
  args: InferRequestType<typeof client.v1.partials.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.partials.$get(args, options))
}

export async function putV1WarehouseSyncsWarehouseSyncKeySettings(
  args: InferRequestType<
    (typeof client.v1.warehouse_syncs)[':warehouse_sync_key']['settings']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.warehouse_syncs[':warehouse_sync_key'].settings.$put(args, options),
  )
}

export async function getV1MessageTypesMessageTypeKey(
  args: InferRequestType<(typeof client.v1.message_types)[':message_type_key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.message_types[':message_type_key'].$get(args, options))
}

export async function putV1MessageTypesMessageTypeKey(
  args: InferRequestType<(typeof client.v1.message_types)[':message_type_key']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.message_types[':message_type_key'].$put(args, options))
}

export async function getV1MembersId(
  args: InferRequestType<(typeof client.v1.members)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.members[':id'].$get(args, options))
}

export async function deleteV1MembersId(
  args: InferRequestType<(typeof client.v1.members)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.members[':id'].$delete(args, options))
}

export async function getV1AudiencesAudienceKey(
  args: InferRequestType<(typeof client.v1.audiences)[':audience_key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.audiences[':audience_key'].$get(args, options))
}

export async function putV1AudiencesAudienceKey(
  args: InferRequestType<(typeof client.v1.audiences)[':audience_key']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.audiences[':audience_key'].$put(args, options))
}

export async function deleteV1AudiencesAudienceKey(
  args: InferRequestType<(typeof client.v1.audiences)[':audience_key']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.audiences[':audience_key'].$delete(args, options))
}

export async function getV1Webhooks(
  args: InferRequestType<typeof client.v1.webhooks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.webhooks.$get(args, options))
}

export async function postV1Webhooks(
  args: InferRequestType<typeof client.v1.webhooks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.webhooks.$post(args, options))
}

export async function putV1PartialsPartialKeyDiscard(
  args: InferRequestType<(typeof client.v1.partials)[':partial_key']['discard']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.partials[':partial_key'].discard.$put(args, options))
}

export async function getV1PreferenceCenter(
  args: InferRequestType<typeof client.v1.preference_center.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.preference_center.$get(args, options))
}

export async function putV1PreferenceCenter(
  args: InferRequestType<typeof client.v1.preference_center.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.preference_center.$put(args, options))
}

export async function getV1Commits(
  args: InferRequestType<typeof client.v1.commits.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.commits.$get(args, options))
}

export async function putV1Commits(
  args: InferRequestType<typeof client.v1.commits.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.commits.$put(args, options))
}

export async function postV1HeadlessAccountsClaim(
  args: InferRequestType<typeof client.v1.headless_accounts.claim.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.headless_accounts.claim.$post(args, options))
}

export async function getV1WarehousesWarehouseKey(
  args: InferRequestType<(typeof client.v1.warehouses)[':warehouse_key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.warehouses[':warehouse_key'].$get(args, options))
}

export async function getV1BillingSummary(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.billing.summary.$get(undefined, options))
}

export async function getV1WarehouseSyncs(
  args: InferRequestType<typeof client.v1.warehouse_syncs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.warehouse_syncs.$get(args, options))
}

export async function getV1SchemasItemType(
  args: InferRequestType<(typeof client.v1.schemas)[':item_type']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.schemas[':item_type'].$get(args, options))
}

export async function putV1SchemasItemType(
  args: InferRequestType<(typeof client.v1.schemas)[':item_type']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.schemas[':item_type'].$put(args, options))
}

export async function putV1BroadcastsBroadcastKeyCancel(
  args: InferRequestType<(typeof client.v1.broadcasts)[':broadcast_key']['cancel']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.broadcasts[':broadcast_key'].cancel.$put(args, options))
}

export async function getV1ReusableRequests(
  args: InferRequestType<typeof client.v1.reusable_requests.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.reusable_requests.$get(args, options))
}

export async function getV1EnvironmentsEnvironmentSlugDefaults(
  args: InferRequestType<(typeof client.v1.environments)[':environment_slug']['defaults']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.environments[':environment_slug'].defaults.$get(args, options),
  )
}

export async function putV1EnvironmentsEnvironmentSlugDefaults(
  args: InferRequestType<(typeof client.v1.environments)[':environment_slug']['defaults']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.environments[':environment_slug'].defaults.$put(args, options),
  )
}

export async function getV1Branches(
  args: InferRequestType<typeof client.v1.branches.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.branches.$get(args, options))
}

export async function putV1PartialsPartialKeyUnarchive(
  args: InferRequestType<(typeof client.v1.partials)[':partial_key']['unarchive']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.partials[':partial_key'].unarchive.$put(args, options))
}

export async function getV1ReusableRequestsReusableRequestKey(
  args: InferRequestType<(typeof client.v1.reusable_requests)[':reusable_request_key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.reusable_requests[':reusable_request_key'].$get(args, options),
  )
}

export async function putV1ReusableRequestsReusableRequestKey(
  args: InferRequestType<(typeof client.v1.reusable_requests)[':reusable_request_key']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.reusable_requests[':reusable_request_key'].$put(args, options),
  )
}

export async function deleteV1ReusableRequestsReusableRequestKey(
  args: InferRequestType<(typeof client.v1.reusable_requests)[':reusable_request_key']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.reusable_requests[':reusable_request_key'].$delete(args, options),
  )
}

export async function getV1PreferenceCategories(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.preference_categories.$get(undefined, options))
}

export async function getV1AuditLogs(
  args: InferRequestType<typeof client.v1.audit_logs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.audit_logs.$get(args, options))
}

export async function getV1EmailLayoutsEmailLayoutKey(
  args: InferRequestType<(typeof client.v1.email_layouts)[':email_layout_key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.email_layouts[':email_layout_key'].$get(args, options))
}

export async function putV1EmailLayoutsEmailLayoutKey(
  args: InferRequestType<(typeof client.v1.email_layouts)[':email_layout_key']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.email_layouts[':email_layout_key'].$put(args, options))
}

export async function putV1GoalsGoalKeyAttachmentsResourceTypeResourceKey(
  args: InferRequestType<
    (typeof client.v1.goals)[':goal_key']['attachments'][':resource_type'][':resource_key']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.goals[':goal_key'].attachments[':resource_type'][':resource_key'].$put(args, options),
  )
}

export async function deleteV1GoalsGoalKeyAttachmentsResourceTypeResourceKey(
  args: InferRequestType<
    (typeof client.v1.goals)[':goal_key']['attachments'][':resource_type'][':resource_key']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.goals[':goal_key'].attachments[':resource_type'][':resource_key'].$delete(
      args,
      options,
    ),
  )
}

export async function putV1BroadcastsBroadcastKeyRun(
  args: InferRequestType<(typeof client.v1.broadcasts)[':broadcast_key']['run']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.broadcasts[':broadcast_key'].run.$put(args, options))
}

export async function postV1PartialsPreview(
  args: InferRequestType<typeof client.v1.partials.preview.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.partials.preview.$post(args, options))
}

export async function postV1AssetsUploads(
  args: InferRequestType<typeof client.v1.assets.uploads.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.assets.uploads.$post(args, options))
}

export async function getV1Warehouses(
  args: InferRequestType<typeof client.v1.warehouses.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.warehouses.$get(args, options))
}

export async function putV1EmailLayoutsEmailLayoutKeyValidate(
  args: InferRequestType<(typeof client.v1.email_layouts)[':email_layout_key']['validate']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.email_layouts[':email_layout_key'].validate.$put(args, options),
  )
}

export async function putV1ReusableRequestsReusableRequestKeyUnarchive(
  args: InferRequestType<
    (typeof client.v1.reusable_requests)[':reusable_request_key']['unarchive']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.reusable_requests[':reusable_request_key'].unarchive.$put(args, options),
  )
}

export async function getV1Members(
  args: InferRequestType<typeof client.v1.members.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.members.$get(args, options))
}

export async function postV1WorkflowsWorkflowKeyStepsStepRefPreviewTemplate(
  args: InferRequestType<
    (typeof client.v1.workflows)[':workflow_key']['steps'][':step_ref']['preview_template']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workflows[':workflow_key'].steps[':step_ref'].preview_template.$post(args, options),
  )
}

export async function putV1TranslationsLocaleCodeValidate(
  args: InferRequestType<(typeof client.v1.translations)[':locale_code']['validate']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.translations[':locale_code'].validate.$put(args, options))
}

export async function getV1WarehouseSyncsWarehouseSyncKeyRuns(
  args: InferRequestType<(typeof client.v1.warehouse_syncs)[':warehouse_sync_key']['runs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.warehouse_syncs[':warehouse_sync_key'].runs.$get(args, options),
  )
}

export async function putV1PreferenceCategoriesName(
  args: InferRequestType<(typeof client.v1.preference_categories)[':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.preference_categories[':name'].$put(args, options))
}

export async function deleteV1PreferenceCategoriesName(
  args: InferRequestType<(typeof client.v1.preference_categories)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.preference_categories[':name'].$delete(args, options))
}

export async function putV1BranchesBranchSlugRebase(
  args: InferRequestType<(typeof client.v1.branches)[':branch_slug']['rebase']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.branches[':branch_slug'].rebase.$put(args, options))
}

export async function getV1Broadcasts(
  args: InferRequestType<typeof client.v1.broadcasts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.broadcasts.$get(args, options))
}

export async function getV1Workflows(
  args: InferRequestType<typeof client.v1.workflows.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workflows.$get(args, options))
}

export async function putV1WorkflowsWorkflowKeyDiscard(
  args: InferRequestType<(typeof client.v1.workflows)[':workflow_key']['discard']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workflows[':workflow_key'].discard.$put(args, options))
}

export async function putV1GuidesGuideKeyValidate(
  args: InferRequestType<(typeof client.v1.guides)[':guide_key']['validate']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.guides[':guide_key'].validate.$put(args, options))
}

export async function putV1WorkflowsWorkflowKeyRun(
  args: InferRequestType<(typeof client.v1.workflows)[':workflow_key']['run']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workflows[':workflow_key'].run.$put(args, options))
}

export async function putV1BroadcastsBroadcastKeySend(
  args: InferRequestType<(typeof client.v1.broadcasts)[':broadcast_key']['send']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.broadcasts[':broadcast_key'].send.$put(args, options))
}

export async function putV1BroadcastsBroadcastKeyValidate(
  args: InferRequestType<(typeof client.v1.broadcasts)[':broadcast_key']['validate']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.broadcasts[':broadcast_key'].validate.$put(args, options))
}

export async function putV1GuidesGuideKeyUnarchive(
  args: InferRequestType<(typeof client.v1.guides)[':guide_key']['unarchive']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.guides[':guide_key'].unarchive.$put(args, options))
}

export async function putV1SchemasItemTypeValidate(
  args: InferRequestType<(typeof client.v1.schemas)[':item_type']['validate']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.schemas[':item_type'].validate.$put(args, options))
}

export async function getV1ChannelGroupsChannelGroupKey(
  args: InferRequestType<(typeof client.v1.channel_groups)[':channel_group_key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.channel_groups[':channel_group_key'].$get(args, options))
}

export async function putV1ChannelGroupsChannelGroupKey(
  args: InferRequestType<(typeof client.v1.channel_groups)[':channel_group_key']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.channel_groups[':channel_group_key'].$put(args, options))
}

export async function deleteV1ChannelGroupsChannelGroupKey(
  args: InferRequestType<(typeof client.v1.channel_groups)[':channel_group_key']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.channel_groups[':channel_group_key'].$delete(args, options))
}

export async function getV1SourcesKeyEvents(
  args: InferRequestType<(typeof client.v1.sources)[':key']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.sources[':key'].events.$get(args, options))
}

export async function putV1WarehouseSyncsWarehouseSyncKeyValidate(
  args: InferRequestType<
    (typeof client.v1.warehouse_syncs)[':warehouse_sync_key']['validate']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.warehouse_syncs[':warehouse_sync_key'].validate.$put(args, options),
  )
}

export async function getV1SourceProviders(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.source_providers.$get(undefined, options))
}

export async function putV1AudiencesAudienceKeyValidate(
  args: InferRequestType<(typeof client.v1.audiences)[':audience_key']['validate']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.audiences[':audience_key'].validate.$put(args, options))
}

export async function getV1Tags(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.tags.$get(undefined, options))
}

export async function putV1PreferenceCenterReset(
  args: InferRequestType<typeof client.v1.preference_center.reset.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.preference_center.reset.$put(args, options))
}

export async function postV1ApiKeysExchange(
  args: InferRequestType<typeof client.v1.api_keys.exchange.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.api_keys.exchange.$post(args, options))
}

export async function getV1WebhooksId(
  args: InferRequestType<(typeof client.v1.webhooks)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.webhooks[':id'].$get(args, options))
}

export async function putV1WebhooksId(
  args: InferRequestType<(typeof client.v1.webhooks)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.webhooks[':id'].$put(args, options))
}

export async function deleteV1WebhooksId(
  args: InferRequestType<(typeof client.v1.webhooks)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.webhooks[':id'].$delete(args, options))
}

export async function getV1WarehouseSyncsWarehouseSyncKey(
  args: InferRequestType<(typeof client.v1.warehouse_syncs)[':warehouse_sync_key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.warehouse_syncs[':warehouse_sync_key'].$get(args, options))
}

export async function putV1WarehouseSyncsWarehouseSyncKey(
  args: InferRequestType<(typeof client.v1.warehouse_syncs)[':warehouse_sync_key']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.warehouse_syncs[':warehouse_sync_key'].$put(args, options))
}

export async function postV1GoalsGoalKeyClone(
  args: InferRequestType<(typeof client.v1.goals)[':goal_key']['clone']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.goals[':goal_key'].clone.$post(args, options))
}

export async function putV1WorkflowsWorkflowKeyActivate(
  args: InferRequestType<(typeof client.v1.workflows)[':workflow_key']['activate']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workflows[':workflow_key'].activate.$put(args, options))
}

export async function getV1ChannelsChannelKey(
  args: InferRequestType<(typeof client.v1.channels)[':channel_key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.channels[':channel_key'].$get(args, options))
}

export async function getV1EmailLayouts(
  args: InferRequestType<typeof client.v1.email_layouts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.email_layouts.$get(args, options))
}

export async function getV1SourceProvidersKey(
  args: InferRequestType<(typeof client.v1.source_providers)[':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.source_providers[':key'].$get(args, options))
}

export async function getV1BranchesBranchSlug(
  args: InferRequestType<(typeof client.v1.branches)[':branch_slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.branches[':branch_slug'].$get(args, options))
}

export async function postV1BranchesBranchSlug(
  args: InferRequestType<(typeof client.v1.branches)[':branch_slug']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.branches[':branch_slug'].$post(args, options))
}

export async function deleteV1BranchesBranchSlug(
  args: InferRequestType<(typeof client.v1.branches)[':branch_slug']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.branches[':branch_slug'].$delete(args, options))
}

export async function getV1SourcesKeyLogs(
  args: InferRequestType<(typeof client.v1.sources)[':key']['logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.sources[':key'].logs.$get(args, options))
}

export async function getV1GoalsGoalKeyAttachments(
  args: InferRequestType<(typeof client.v1.goals)[':goal_key']['attachments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.goals[':goal_key'].attachments.$get(args, options))
}
