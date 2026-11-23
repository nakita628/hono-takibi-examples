import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiV2TargetTypeTargetIdRelationshipFieldsFieldIdSourceType(
  args: InferRequestType<
    (typeof client.api.v2)[':target_type'][':target_id']['relationship_fields'][':field_id'][':source_type']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2[':target_type'][':target_id'].relationship_fields[':field_id'][
      ':source_type'
    ].$get(args, options),
  )
}

export async function getApiV2AccountEmailSettings(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.account.email_settings.$get(undefined, options))
}

export async function putApiV2AccountEmailSettings(
  args: InferRequestType<typeof client.api.v2.account.email_settings.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.account.email_settings.$put(args, options))
}

export async function getApiV2AccountSettings(
  args: InferRequestType<typeof client.api.v2.account.settings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.account.settings.$get(args, options))
}

export async function putApiV2AccountSettings(
  args: InferRequestType<typeof client.api.v2.account.settings.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.account.settings.$put(args, options))
}

export async function postApiV2Accounts(
  args: InferRequestType<typeof client.api.v2.accounts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.accounts.$post(args, options))
}

export async function getApiV2AccountsAvailable(
  args: InferRequestType<typeof client.api.v2.accounts.available.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.accounts.available.$get(args, options))
}

export async function getApiV2Activities(
  args: InferRequestType<typeof client.api.v2.activities.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.activities.$get(args, options))
}

export async function getApiV2ActivitiesActivityId(
  args: InferRequestType<(typeof client.api.v2.activities)[':activity_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.activities[':activity_id'].$get(args, options))
}

export async function getApiV2ActivitiesCount(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.activities.count.$get(undefined, options))
}

export async function postApiV2AnyChannelChannelbackReportError(options?: ClientRequestOptions) {
  return await parseResponse(
    client.api.v2.any_channel.channelback.report_error.$post(undefined, options),
  )
}

export async function postApiV2AnyChannelPush(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.any_channel.push.$post(undefined, options))
}

export async function postApiV2AnyChannelValidateToken(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.any_channel.validate_token.$post(undefined, options))
}

export async function getApiV2ApiTokens(
  args: InferRequestType<typeof client.api.v2.api_tokens.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.api_tokens.$get(args, options))
}

export async function postApiV2ApiTokens(
  args: InferRequestType<typeof client.api.v2.api_tokens.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.api_tokens.$post(args, options))
}

export async function putApiV2ApiTokensId(
  args: InferRequestType<(typeof client.api.v2.api_tokens)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.api_tokens[':id'].$put(args, options))
}

export async function deleteApiV2ApiTokensId(
  args: InferRequestType<(typeof client.api.v2.api_tokens)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.api_tokens[':id'].$delete(args, options))
}

export async function postApiV2ApprovalClarificationFlowMessages(
  args: InferRequestType<typeof client.api.v2.approval_clarification_flow_messages.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.approval_clarification_flow_messages.$post(args, options),
  )
}

export async function getApiV2ApprovalClarificationFlowMessagesApprovalRequestId(
  args: InferRequestType<
    (typeof client.api.v2.approval_clarification_flow_messages)[':approval_request_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.approval_clarification_flow_messages[':approval_request_id'].$get(args, options),
  )
}

export async function getApiV2ApprovalRequests(
  args: InferRequestType<typeof client.api.v2.approval_requests.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.approval_requests.$get(args, options))
}

export async function postApiV2ApprovalRequests(
  args: InferRequestType<typeof client.api.v2.approval_requests.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.approval_requests.$post(args, options))
}

export async function getApiV2ApprovalWorkflowInstancesWorkflowInstanceIdApprovalRequestsId(
  args: InferRequestType<
    (typeof client.api.v2.approval_workflow_instances)[':workflow_instance_id']['approval_requests'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.approval_workflow_instances[':workflow_instance_id'].approval_requests[
      ':id'
    ].$get(args, options),
  )
}

export async function patchApiV2ApprovalWorkflowInstancesWorkflowInstanceIdApprovalRequestsIdDecision(
  args: InferRequestType<
    (typeof client.api.v2.approval_workflow_instances)[':workflow_instance_id']['approval_requests'][':id']['decision']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.approval_workflow_instances[':workflow_instance_id'].approval_requests[
      ':id'
    ].decision.$patch(args, options),
  )
}

export async function patchApiV2ApprovalWorkflowInstancesWorkflowInstanceIdWithdraw(
  args: InferRequestType<
    (typeof client.api.v2.approval_workflow_instances)[':workflow_instance_id']['withdraw']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.approval_workflow_instances[':workflow_instance_id'].withdraw.$patch(
      args,
      options,
    ),
  )
}

export async function getApiV2AttachmentsAttachmentId(
  args: InferRequestType<(typeof client.api.v2.attachments)[':attachment_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.attachments[':attachment_id'].$get(args, options))
}

export async function putApiV2AttachmentsAttachmentId(
  args: InferRequestType<(typeof client.api.v2.attachments)[':attachment_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.attachments[':attachment_id'].$put(args, options))
}

export async function deleteApiV2AttachmentsAttachmentId(
  args: InferRequestType<(typeof client.api.v2.attachments)[':attachment_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.attachments[':attachment_id'].$delete(args, options))
}

export async function getApiV2AuditLogs(
  args: InferRequestType<typeof client.api.v2.audit_logs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.audit_logs.$get(args, options))
}

export async function getApiV2AuditLogsAuditLogId(
  args: InferRequestType<(typeof client.api.v2.audit_logs)[':audit_log_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.audit_logs[':audit_log_id'].$get(args, options))
}

export async function postApiV2AuditLogsExport(
  args: InferRequestType<typeof client.api.v2.audit_logs.export.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.audit_logs.export.$post(args, options))
}

export async function getApiV2AutocompleteTags(
  args: InferRequestType<typeof client.api.v2.autocomplete.tags.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.autocomplete.tags.$get(args, options))
}

export async function postApiV2AutocompleteTags(
  args: InferRequestType<typeof client.api.v2.autocomplete.tags.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.autocomplete.tags.$post(args, options))
}

export async function getApiV2Automations(
  args: InferRequestType<typeof client.api.v2.automations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.automations.$get(args, options))
}

export async function postApiV2Automations(
  args: InferRequestType<typeof client.api.v2.automations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.automations.$post(args, options))
}

export async function getApiV2AutomationsAutomationId(
  args: InferRequestType<(typeof client.api.v2.automations)[':automation_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.automations[':automation_id'].$get(args, options))
}

export async function putApiV2AutomationsAutomationId(
  args: InferRequestType<(typeof client.api.v2.automations)[':automation_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.automations[':automation_id'].$put(args, options))
}

export async function deleteApiV2AutomationsAutomationId(
  args: InferRequestType<(typeof client.api.v2.automations)[':automation_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.automations[':automation_id'].$delete(args, options))
}

export async function getApiV2AutomationsActive(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.automations.active.$get(undefined, options))
}

export async function deleteApiV2AutomationsDestroyMany(
  args: InferRequestType<typeof client.api.v2.automations.destroy_many.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.automations.destroy_many.$delete(args, options))
}

export async function getApiV2AutomationsSearch(
  args: InferRequestType<typeof client.api.v2.automations.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.automations.search.$get(args, options))
}

export async function putApiV2AutomationsUpdateMany(
  args: InferRequestType<typeof client.api.v2.automations.update_many.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.automations.update_many.$put(args, options))
}

export async function getApiV2Bookmarks(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.bookmarks.$get(undefined, options))
}

export async function postApiV2Bookmarks(
  args: InferRequestType<typeof client.api.v2.bookmarks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.bookmarks.$post(args, options))
}

export async function deleteApiV2BookmarksBookmarkId(
  args: InferRequestType<(typeof client.api.v2.bookmarks)[':bookmark_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.bookmarks[':bookmark_id'].$delete(args, options))
}

export async function getApiV2BrandAgents(
  args: InferRequestType<typeof client.api.v2.brand_agents.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.brand_agents.$get(args, options))
}

export async function postApiV2BrandAgents(
  args: InferRequestType<typeof client.api.v2.brand_agents.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.brand_agents.$post(args, options))
}

export async function getApiV2BrandAgentsBrandAgentId(
  args: InferRequestType<(typeof client.api.v2.brand_agents)[':brand_agent_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.brand_agents[':brand_agent_id'].$get(args, options))
}

export async function deleteApiV2BrandAgentsBrandAgentId(
  args: InferRequestType<(typeof client.api.v2.brand_agents)[':brand_agent_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.brand_agents[':brand_agent_id'].$delete(args, options))
}

export async function getApiV2Brands(
  args: InferRequestType<typeof client.api.v2.brands.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.brands.$get(args, options))
}

export async function postApiV2Brands(
  args: InferRequestType<typeof client.api.v2.brands.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.brands.$post(args, options))
}

export async function getApiV2BrandsBrandId(
  args: InferRequestType<(typeof client.api.v2.brands)[':brand_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.brands[':brand_id'].$get(args, options))
}

export async function putApiV2BrandsBrandId(
  args: InferRequestType<(typeof client.api.v2.brands)[':brand_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.brands[':brand_id'].$put(args, options))
}

export async function deleteApiV2BrandsBrandId(
  args: InferRequestType<(typeof client.api.v2.brands)[':brand_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.brands[':brand_id'].$delete(args, options))
}

export async function getApiV2BrandsBrandIdAgents(
  args: InferRequestType<(typeof client.api.v2.brands)[':brand_id']['agents']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.brands[':brand_id'].agents.$get(args, options))
}

export async function getApiV2BrandsBrandIdCheckHostMapping(
  args: InferRequestType<(typeof client.api.v2.brands)[':brand_id']['check_host_mapping']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.brands[':brand_id'].check_host_mapping.$get(args, options),
  )
}

export async function putApiV2BrandsBrandIdLogo(
  args: InferRequestType<(typeof client.api.v2.brands)[':brand_id']['logo']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.brands[':brand_id'].logo.$put(args, options))
}

export async function deleteApiV2BrandsBrandIdLogo(
  args: InferRequestType<(typeof client.api.v2.brands)[':brand_id']['logo']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.brands[':brand_id'].logo.$delete(args, options))
}

export async function getApiV2BrandsBrandIdUserMigrations(
  args: InferRequestType<(typeof client.api.v2.brands)[':brand_id']['user_migrations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.brands[':brand_id'].user_migrations.$get(args, options))
}

export async function postApiV2BrandsBrandIdUserMigrations(
  args: InferRequestType<(typeof client.api.v2.brands)[':brand_id']['user_migrations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.brands[':brand_id'].user_migrations.$post(args, options))
}

export async function getApiV2BrandsBrandIdUserMigrationsMigrationId(
  args: InferRequestType<
    (typeof client.api.v2.brands)[':brand_id']['user_migrations'][':migration_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.brands[':brand_id'].user_migrations[':migration_id'].$get(args, options),
  )
}

export async function getApiV2BrandsCheckHostMapping(
  args: InferRequestType<typeof client.api.v2.brands.check_host_mapping.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.brands.check_host_mapping.$get(args, options))
}

export async function getApiV2ChannelsTwitterMonitoredTwitterHandles(
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.channels.twitter.monitored_twitter_handles.$get(undefined, options),
  )
}

export async function getApiV2ChannelsTwitterMonitoredTwitterHandlesMonitoredTwitterHandleId(
  args: InferRequestType<
    (typeof client.api.v2.channels.twitter.monitored_twitter_handles)[':monitored_twitter_handle_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.channels.twitter.monitored_twitter_handles[':monitored_twitter_handle_id'].$get(
      args,
      options,
    ),
  )
}

export async function postApiV2ChannelsTwitterTickets(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.channels.twitter.tickets.$post(undefined, options))
}

export async function getApiV2ChannelsTwitterTicketsCommentIdStatuses(
  args: InferRequestType<
    (typeof client.api.v2.channels.twitter.tickets)[':comment_id']['statuses']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.channels.twitter.tickets[':comment_id'].statuses.$get(args, options),
  )
}

export async function postApiV2ChannelsVoiceAgentsAgentIdTicketsTicketIdDisplay(
  args: InferRequestType<
    (typeof client.api.v2.channels.voice.agents)[':agent_id']['tickets'][':ticket_id']['display']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.channels.voice.agents[':agent_id'].tickets[':ticket_id'].display.$post(
      args,
      options,
    ),
  )
}

export async function postApiV2ChannelsVoiceAgentsAgentIdUsersUserIdDisplay(
  args: InferRequestType<
    (typeof client.api.v2.channels.voice.agents)[':agent_id']['users'][':user_id']['display']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.channels.voice.agents[':agent_id'].users[':user_id'].display.$post(args, options),
  )
}

export async function postApiV2ChannelsVoiceTickets(
  args: InferRequestType<typeof client.api.v2.channels.voice.tickets.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.channels.voice.tickets.$post(args, options))
}

export async function getApiV2ChannelsWhatsappTemplates(
  args: InferRequestType<typeof client.api.v2.channels.whatsapp_templates.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.channels.whatsapp_templates.$get(args, options))
}

export async function putApiV2ChannelsWhatsappTemplatesTemplateIdToggle(
  args: InferRequestType<
    (typeof client.api.v2.channels.whatsapp_templates)[':template_id']['toggle']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.channels.whatsapp_templates[':template_id'].toggle.$put(args, options),
  )
}

export async function getApiV2ChannelsWhatsappTemplatesLanguages(
  args: InferRequestType<typeof client.api.v2.channels.whatsapp_templates.languages.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.channels.whatsapp_templates.languages.$get(args, options),
  )
}

export async function putApiV2ChannelsWhatsappTemplatesToggleMany(
  args: InferRequestType<typeof client.api.v2.channels.whatsapp_templates.toggle_many.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.channels.whatsapp_templates.toggle_many.$put(args, options),
  )
}

export async function putApiV2ChatFileRedactionsTicketId(
  args: InferRequestType<(typeof client.api.v2.chat_file_redactions)[':ticket_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.chat_file_redactions[':ticket_id'].$put(args, options))
}

export async function putApiV2ChatRedactionsTicketId(
  args: InferRequestType<(typeof client.api.v2.chat_redactions)[':ticket_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.chat_redactions[':ticket_id'].$put(args, options))
}

export async function putApiV2CommentRedactionsTicketCommentId(
  args: InferRequestType<(typeof client.api.v2.comment_redactions)[':ticket_comment_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.comment_redactions[':ticket_comment_id'].$put(args, options),
  )
}

export async function getApiV2CountriesJson(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2['countries.json'].$get(undefined, options))
}

export async function getApiV2CountriesIdJson(
  args: InferRequestType<(typeof client.api.v2.countries)[':id.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.countries[':id.json'].$get(args, options))
}

export async function getApiV2CustomObjects(
  args: InferRequestType<typeof client.api.v2.custom_objects.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.custom_objects.$get(args, options))
}

export async function postApiV2CustomObjects(
  args: InferRequestType<typeof client.api.v2.custom_objects.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.custom_objects.$post(args, options))
}

export async function getApiV2CustomObjectsCustomObjectKey(
  args: InferRequestType<(typeof client.api.v2.custom_objects)[':custom_object_key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.custom_objects[':custom_object_key'].$get(args, options))
}

export async function deleteApiV2CustomObjectsCustomObjectKey(
  args: InferRequestType<(typeof client.api.v2.custom_objects)[':custom_object_key']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.custom_objects[':custom_object_key'].$delete(args, options),
  )
}

export async function patchApiV2CustomObjectsCustomObjectKey(
  args: InferRequestType<(typeof client.api.v2.custom_objects)[':custom_object_key']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.custom_objects[':custom_object_key'].$patch(args, options),
  )
}

export async function getApiV2CustomObjectsCustomObjectKeyAccessRules(
  args: InferRequestType<
    (typeof client.api.v2.custom_objects)[':custom_object_key']['access_rules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.custom_objects[':custom_object_key'].access_rules.$get(args, options),
  )
}

export async function postApiV2CustomObjectsCustomObjectKeyAccessRules(
  args: InferRequestType<
    (typeof client.api.v2.custom_objects)[':custom_object_key']['access_rules']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.custom_objects[':custom_object_key'].access_rules.$post(args, options),
  )
}

export async function getApiV2CustomObjectsCustomObjectKeyAccessRulesId(
  args: InferRequestType<
    (typeof client.api.v2.custom_objects)[':custom_object_key']['access_rules'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.custom_objects[':custom_object_key'].access_rules[':id'].$get(args, options),
  )
}

export async function deleteApiV2CustomObjectsCustomObjectKeyAccessRulesId(
  args: InferRequestType<
    (typeof client.api.v2.custom_objects)[':custom_object_key']['access_rules'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.custom_objects[':custom_object_key'].access_rules[':id'].$delete(args, options),
  )
}

export async function patchApiV2CustomObjectsCustomObjectKeyAccessRulesId(
  args: InferRequestType<
    (typeof client.api.v2.custom_objects)[':custom_object_key']['access_rules'][':id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.custom_objects[':custom_object_key'].access_rules[':id'].$patch(args, options),
  )
}

export async function getApiV2CustomObjectsCustomObjectKeyAccessRulesDefinitions(
  args: InferRequestType<
    (typeof client.api.v2.custom_objects)[':custom_object_key']['access_rules']['definitions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.custom_objects[':custom_object_key'].access_rules.definitions.$get(args, options),
  )
}

export async function getApiV2CustomObjectsCustomObjectKeyFields(
  args: InferRequestType<
    (typeof client.api.v2.custom_objects)[':custom_object_key']['fields']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.custom_objects[':custom_object_key'].fields.$get(args, options),
  )
}

export async function postApiV2CustomObjectsCustomObjectKeyFields(
  args: InferRequestType<
    (typeof client.api.v2.custom_objects)[':custom_object_key']['fields']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.custom_objects[':custom_object_key'].fields.$post(args, options),
  )
}

export async function getApiV2CustomObjectsCustomObjectKeyFieldsCustomObjectFieldKeyOrId(
  args: InferRequestType<
    (typeof client.api.v2.custom_objects)[':custom_object_key']['fields'][':custom_object_field_key_or_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.custom_objects[':custom_object_key'].fields[
      ':custom_object_field_key_or_id'
    ].$get(args, options),
  )
}

export async function deleteApiV2CustomObjectsCustomObjectKeyFieldsCustomObjectFieldKeyOrId(
  args: InferRequestType<
    (typeof client.api.v2.custom_objects)[':custom_object_key']['fields'][':custom_object_field_key_or_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.custom_objects[':custom_object_key'].fields[
      ':custom_object_field_key_or_id'
    ].$delete(args, options),
  )
}

export async function patchApiV2CustomObjectsCustomObjectKeyFieldsCustomObjectFieldKeyOrId(
  args: InferRequestType<
    (typeof client.api.v2.custom_objects)[':custom_object_key']['fields'][':custom_object_field_key_or_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.custom_objects[':custom_object_key'].fields[
      ':custom_object_field_key_or_id'
    ].$patch(args, options),
  )
}

export async function putApiV2CustomObjectsCustomObjectKeyFieldsReorder(
  args: InferRequestType<
    (typeof client.api.v2.custom_objects)[':custom_object_key']['fields']['reorder']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.custom_objects[':custom_object_key'].fields.reorder.$put(args, options),
  )
}

export async function postApiV2CustomObjectsCustomObjectKeyJobs(
  args: InferRequestType<
    (typeof client.api.v2.custom_objects)[':custom_object_key']['jobs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.custom_objects[':custom_object_key'].jobs.$post(args, options),
  )
}

export async function getApiV2CustomObjectsCustomObjectKeyLimitsFieldLimit(
  args: InferRequestType<
    (typeof client.api.v2.custom_objects)[':custom_object_key']['limits']['field_limit']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.custom_objects[':custom_object_key'].limits.field_limit.$get(args, options),
  )
}

export async function getApiV2CustomObjectsCustomObjectKeyPermissionPolicies(
  args: InferRequestType<
    (typeof client.api.v2.custom_objects)[':custom_object_key']['permission_policies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.custom_objects[':custom_object_key'].permission_policies.$get(args, options),
  )
}

export async function getApiV2CustomObjectsCustomObjectKeyPermissionPoliciesId(
  args: InferRequestType<
    (typeof client.api.v2.custom_objects)[':custom_object_key']['permission_policies'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.custom_objects[':custom_object_key'].permission_policies[':id'].$get(
      args,
      options,
    ),
  )
}

export async function patchApiV2CustomObjectsCustomObjectKeyPermissionPoliciesId(
  args: InferRequestType<
    (typeof client.api.v2.custom_objects)[':custom_object_key']['permission_policies'][':id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.custom_objects[':custom_object_key'].permission_policies[':id'].$patch(
      args,
      options,
    ),
  )
}

export async function getApiV2CustomObjectsCustomObjectKeyRecords(
  args: InferRequestType<
    (typeof client.api.v2.custom_objects)[':custom_object_key']['records']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.custom_objects[':custom_object_key'].records.$get(args, options),
  )
}

export async function postApiV2CustomObjectsCustomObjectKeyRecords(
  args: InferRequestType<
    (typeof client.api.v2.custom_objects)[':custom_object_key']['records']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.custom_objects[':custom_object_key'].records.$post(args, options),
  )
}

export async function deleteApiV2CustomObjectsCustomObjectKeyRecords(
  args: InferRequestType<
    (typeof client.api.v2.custom_objects)[':custom_object_key']['records']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.custom_objects[':custom_object_key'].records.$delete(args, options),
  )
}

export async function patchApiV2CustomObjectsCustomObjectKeyRecords(
  args: InferRequestType<
    (typeof client.api.v2.custom_objects)[':custom_object_key']['records']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.custom_objects[':custom_object_key'].records.$patch(args, options),
  )
}

export async function getApiV2CustomObjectsCustomObjectKeyRecordsCustomObjectRecordId(
  args: InferRequestType<
    (typeof client.api.v2.custom_objects)[':custom_object_key']['records'][':custom_object_record_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.custom_objects[':custom_object_key'].records[':custom_object_record_id'].$get(
      args,
      options,
    ),
  )
}

export async function deleteApiV2CustomObjectsCustomObjectKeyRecordsCustomObjectRecordId(
  args: InferRequestType<
    (typeof client.api.v2.custom_objects)[':custom_object_key']['records'][':custom_object_record_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.custom_objects[':custom_object_key'].records[':custom_object_record_id'].$delete(
      args,
      options,
    ),
  )
}

export async function patchApiV2CustomObjectsCustomObjectKeyRecordsCustomObjectRecordId(
  args: InferRequestType<
    (typeof client.api.v2.custom_objects)[':custom_object_key']['records'][':custom_object_record_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.custom_objects[':custom_object_key'].records[':custom_object_record_id'].$patch(
      args,
      options,
    ),
  )
}

export async function getApiV2CustomObjectsCustomObjectKeyRecordsRecordIdAttachments(
  args: InferRequestType<
    (typeof client.api.v2.custom_objects)[':custom_object_key']['records'][':record_id']['attachments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.custom_objects[':custom_object_key'].records[':record_id'].attachments.$get(
      args,
      options,
    ),
  )
}

export async function postApiV2CustomObjectsCustomObjectKeyRecordsRecordIdAttachments(
  args: InferRequestType<
    (typeof client.api.v2.custom_objects)[':custom_object_key']['records'][':record_id']['attachments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.custom_objects[':custom_object_key'].records[':record_id'].attachments.$post(
      args,
      options,
    ),
  )
}

export async function putApiV2CustomObjectsCustomObjectKeyRecordsRecordIdAttachmentsId(
  args: InferRequestType<
    (typeof client.api.v2.custom_objects)[':custom_object_key']['records'][':record_id']['attachments'][':id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.custom_objects[':custom_object_key'].records[':record_id'].attachments[
      ':id'
    ].$put(args, options),
  )
}

export async function deleteApiV2CustomObjectsCustomObjectKeyRecordsRecordIdAttachmentsId(
  args: InferRequestType<
    (typeof client.api.v2.custom_objects)[':custom_object_key']['records'][':record_id']['attachments'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.custom_objects[':custom_object_key'].records[':record_id'].attachments[
      ':id'
    ].$delete(args, options),
  )
}

export async function getApiV2CustomObjectsCustomObjectKeyRecordsRecordIdAttachmentsIdDownload(
  args: InferRequestType<
    (typeof client.api.v2.custom_objects)[':custom_object_key']['records'][':record_id']['attachments'][':id']['download']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.custom_objects[':custom_object_key'].records[':record_id'].attachments[
      ':id'
    ].download.$get(args, options),
  )
}

export async function getApiV2CustomObjectsCustomObjectKeyRecordsAutocomplete(
  args: InferRequestType<
    (typeof client.api.v2.custom_objects)[':custom_object_key']['records']['autocomplete']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.custom_objects[':custom_object_key'].records.autocomplete.$get(args, options),
  )
}

export async function getApiV2CustomObjectsCustomObjectKeyRecordsCount(
  args: InferRequestType<
    (typeof client.api.v2.custom_objects)[':custom_object_key']['records']['count']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.custom_objects[':custom_object_key'].records.count.$get(args, options),
  )
}

export async function getApiV2CustomObjectsCustomObjectKeyRecordsSearch(
  args: InferRequestType<
    (typeof client.api.v2.custom_objects)[':custom_object_key']['records']['search']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.custom_objects[':custom_object_key'].records.search.$get(args, options),
  )
}

export async function postApiV2CustomObjectsCustomObjectKeyRecordsSearch(
  args: InferRequestType<
    (typeof client.api.v2.custom_objects)[':custom_object_key']['records']['search']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.custom_objects[':custom_object_key'].records.search.$post(args, options),
  )
}

export async function getApiV2CustomObjectsCustomObjectKeyRecordsShowByUniqueIdentifier(
  args: InferRequestType<
    (typeof client.api.v2.custom_objects)[':custom_object_key']['records']['show_by_unique_identifier']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.custom_objects[':custom_object_key'].records.show_by_unique_identifier.$get(
      args,
      options,
    ),
  )
}

export async function putApiV2CustomObjectsCustomObjectKeyRecordsUpdateByUniqueIdentifier(
  args: InferRequestType<
    (typeof client.api.v2.custom_objects)[':custom_object_key']['records']['update_by_unique_identifier']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.custom_objects[':custom_object_key'].records.update_by_unique_identifier.$put(
      args,
      options,
    ),
  )
}

export async function patchApiV2CustomObjectsCustomObjectKeyRecordsUpdateByUniqueIdentifier(
  args: InferRequestType<
    (typeof client.api.v2.custom_objects)[':custom_object_key']['records']['update_by_unique_identifier']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.custom_objects[':custom_object_key'].records.update_by_unique_identifier.$patch(
      args,
      options,
    ),
  )
}

export async function getApiV2CustomObjectsCustomObjectKeyTriggers(
  args: InferRequestType<
    (typeof client.api.v2.custom_objects)[':custom_object_key']['triggers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.custom_objects[':custom_object_key'].triggers.$get(args, options),
  )
}

export async function postApiV2CustomObjectsCustomObjectKeyTriggers(
  args: InferRequestType<
    (typeof client.api.v2.custom_objects)[':custom_object_key']['triggers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.custom_objects[':custom_object_key'].triggers.$post(args, options),
  )
}

export async function getApiV2CustomObjectsCustomObjectKeyTriggersTriggerId(
  args: InferRequestType<
    (typeof client.api.v2.custom_objects)[':custom_object_key']['triggers'][':trigger_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.custom_objects[':custom_object_key'].triggers[':trigger_id'].$get(args, options),
  )
}

export async function putApiV2CustomObjectsCustomObjectKeyTriggersTriggerId(
  args: InferRequestType<
    (typeof client.api.v2.custom_objects)[':custom_object_key']['triggers'][':trigger_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.custom_objects[':custom_object_key'].triggers[':trigger_id'].$put(args, options),
  )
}

export async function deleteApiV2CustomObjectsCustomObjectKeyTriggersTriggerId(
  args: InferRequestType<
    (typeof client.api.v2.custom_objects)[':custom_object_key']['triggers'][':trigger_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.custom_objects[':custom_object_key'].triggers[':trigger_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getApiV2CustomObjectsCustomObjectKeyTriggersActive(
  args: InferRequestType<
    (typeof client.api.v2.custom_objects)[':custom_object_key']['triggers']['active']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.custom_objects[':custom_object_key'].triggers.active.$get(args, options),
  )
}

export async function getApiV2CustomObjectsCustomObjectKeyTriggersDefinitions(
  args: InferRequestType<
    (typeof client.api.v2.custom_objects)[':custom_object_key']['triggers']['definitions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.custom_objects[':custom_object_key'].triggers.definitions.$get(args, options),
  )
}

export async function deleteApiV2CustomObjectsCustomObjectKeyTriggersDestroyMany(
  args: InferRequestType<
    (typeof client.api.v2.custom_objects)[':custom_object_key']['triggers']['destroy_many']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.custom_objects[':custom_object_key'].triggers.destroy_many.$delete(args, options),
  )
}

export async function getApiV2CustomObjectsCustomObjectKeyTriggersSearch(
  args: InferRequestType<
    (typeof client.api.v2.custom_objects)[':custom_object_key']['triggers']['search']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.custom_objects[':custom_object_key'].triggers.search.$get(args, options),
  )
}

export async function putApiV2CustomObjectsCustomObjectKeyTriggersUpdateMany(
  args: InferRequestType<
    (typeof client.api.v2.custom_objects)[':custom_object_key']['triggers']['update_many']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.custom_objects[':custom_object_key'].triggers.update_many.$put(args, options),
  )
}

export async function getApiV2CustomObjectsLimitsObjectLimit(options?: ClientRequestOptions) {
  return await parseResponse(
    client.api.v2.custom_objects.limits.object_limit.$get(undefined, options),
  )
}

export async function getApiV2CustomObjectsLimitsRecordLimit(options?: ClientRequestOptions) {
  return await parseResponse(
    client.api.v2.custom_objects.limits.record_limit.$get(undefined, options),
  )
}

export async function getApiV2CustomRoles(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.custom_roles.$get(undefined, options))
}

export async function postApiV2CustomRoles(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.custom_roles.$post(undefined, options))
}

export async function getApiV2CustomRolesCustomRoleId(
  args: InferRequestType<(typeof client.api.v2.custom_roles)[':custom_role_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.custom_roles[':custom_role_id'].$get(args, options))
}

export async function putApiV2CustomRolesCustomRoleId(
  args: InferRequestType<(typeof client.api.v2.custom_roles)[':custom_role_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.custom_roles[':custom_role_id'].$put(args, options))
}

export async function deleteApiV2CustomRolesCustomRoleId(
  args: InferRequestType<(typeof client.api.v2.custom_roles)[':custom_role_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.custom_roles[':custom_role_id'].$delete(args, options))
}

export async function putApiV2CustomStatusDefault(
  args: InferRequestType<typeof client.api.v2.custom_status.default.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.custom_status.default.$put(args, options))
}

export async function getApiV2CustomStatuses(
  args: InferRequestType<typeof client.api.v2.custom_statuses.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.custom_statuses.$get(args, options))
}

export async function postApiV2CustomStatuses(
  args: InferRequestType<typeof client.api.v2.custom_statuses.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.custom_statuses.$post(args, options))
}

export async function getApiV2CustomStatusesCustomStatusId(
  args: InferRequestType<(typeof client.api.v2.custom_statuses)[':custom_status_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.custom_statuses[':custom_status_id'].$get(args, options))
}

export async function putApiV2CustomStatusesCustomStatusId(
  args: InferRequestType<(typeof client.api.v2.custom_statuses)[':custom_status_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.custom_statuses[':custom_status_id'].$put(args, options))
}

export async function deleteApiV2CustomStatusesCustomStatusId(
  args: InferRequestType<(typeof client.api.v2.custom_statuses)[':custom_status_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.custom_statuses[':custom_status_id'].$delete(args, options),
  )
}

export async function postApiV2CustomStatusesCustomStatusIdTicketFormStatuses(
  args: InferRequestType<
    (typeof client.api.v2.custom_statuses)[':custom_status_id']['ticket_form_statuses']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.custom_statuses[':custom_status_id'].ticket_form_statuses.$post(args, options),
  )
}

export async function getApiV2CustomStatusesShowMany(
  args: InferRequestType<typeof client.api.v2.custom_statuses.show_many.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.custom_statuses.show_many.$get(args, options))
}

export async function getApiV2DeletedTickets(
  args: InferRequestType<typeof client.api.v2.deleted_tickets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.deleted_tickets.$get(args, options))
}

export async function deleteApiV2DeletedTicketsTicketId(
  args: InferRequestType<(typeof client.api.v2.deleted_tickets)[':ticket_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.deleted_tickets[':ticket_id'].$delete(args, options))
}

export async function putApiV2DeletedTicketsTicketIdRestore(
  args: InferRequestType<(typeof client.api.v2.deleted_tickets)[':ticket_id']['restore']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.deleted_tickets[':ticket_id'].restore.$put(args, options),
  )
}

export async function deleteApiV2DeletedTicketsDestroyMany(
  args: InferRequestType<typeof client.api.v2.deleted_tickets.destroy_many.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.deleted_tickets.destroy_many.$delete(args, options))
}

export async function putApiV2DeletedTicketsRestoreMany(
  args: InferRequestType<typeof client.api.v2.deleted_tickets.restore_many.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.deleted_tickets.restore_many.$put(args, options))
}

export async function getApiV2DeletedUsers(
  args: InferRequestType<typeof client.api.v2.deleted_users.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.deleted_users.$get(args, options))
}

export async function getApiV2DeletedUsersDeletedUserId(
  args: InferRequestType<(typeof client.api.v2.deleted_users)[':deleted_user_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.deleted_users[':deleted_user_id'].$get(args, options))
}

export async function deleteApiV2DeletedUsersDeletedUserId(
  args: InferRequestType<(typeof client.api.v2.deleted_users)[':deleted_user_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.deleted_users[':deleted_user_id'].$delete(args, options))
}

export async function getApiV2DeletedUsersCount(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.deleted_users.count.$get(undefined, options))
}

export async function getApiV2DeletionSchedules(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.deletion_schedules.$get(undefined, options))
}

export async function postApiV2DeletionSchedules(
  args: InferRequestType<typeof client.api.v2.deletion_schedules.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.deletion_schedules.$post(args, options))
}

export async function getApiV2DeletionSchedulesDeletionScheduleId(
  args: InferRequestType<
    (typeof client.api.v2.deletion_schedules)[':deletion_schedule_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.deletion_schedules[':deletion_schedule_id'].$get(args, options),
  )
}

export async function putApiV2DeletionSchedulesDeletionScheduleId(
  args: InferRequestType<
    (typeof client.api.v2.deletion_schedules)[':deletion_schedule_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.deletion_schedules[':deletion_schedule_id'].$put(args, options),
  )
}

export async function deleteApiV2DeletionSchedulesDeletionScheduleId(
  args: InferRequestType<
    (typeof client.api.v2.deletion_schedules)[':deletion_schedule_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.deletion_schedules[':deletion_schedule_id'].$delete(args, options),
  )
}

export async function getApiV2DynamicContentItems(
  args: InferRequestType<typeof client.api.v2.dynamic_content.items.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.dynamic_content.items.$get(args, options))
}

export async function postApiV2DynamicContentItems(
  args: InferRequestType<typeof client.api.v2.dynamic_content.items.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.dynamic_content.items.$post(args, options))
}

export async function getApiV2DynamicContentItemsDynamicContentItemId(
  args: InferRequestType<
    (typeof client.api.v2.dynamic_content.items)[':dynamic_content_item_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.dynamic_content.items[':dynamic_content_item_id'].$get(args, options),
  )
}

export async function putApiV2DynamicContentItemsDynamicContentItemId(
  args: InferRequestType<
    (typeof client.api.v2.dynamic_content.items)[':dynamic_content_item_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.dynamic_content.items[':dynamic_content_item_id'].$put(args, options),
  )
}

export async function deleteApiV2DynamicContentItemsDynamicContentItemId(
  args: InferRequestType<
    (typeof client.api.v2.dynamic_content.items)[':dynamic_content_item_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.dynamic_content.items[':dynamic_content_item_id'].$delete(args, options),
  )
}

export async function getApiV2DynamicContentItemsDynamicContentItemIdVariants(
  args: InferRequestType<
    (typeof client.api.v2.dynamic_content.items)[':dynamic_content_item_id']['variants']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.dynamic_content.items[':dynamic_content_item_id'].variants.$get(args, options),
  )
}

export async function postApiV2DynamicContentItemsDynamicContentItemIdVariants(
  args: InferRequestType<
    (typeof client.api.v2.dynamic_content.items)[':dynamic_content_item_id']['variants']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.dynamic_content.items[':dynamic_content_item_id'].variants.$post(args, options),
  )
}

export async function getApiV2DynamicContentItemsDynamicContentItemIdVariantsDynamicContentVariantId(
  args: InferRequestType<
    (typeof client.api.v2.dynamic_content.items)[':dynamic_content_item_id']['variants'][':dynamic_content_variant_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.dynamic_content.items[':dynamic_content_item_id'].variants[
      ':dynamic_content_variant_id'
    ].$get(args, options),
  )
}

export async function putApiV2DynamicContentItemsDynamicContentItemIdVariantsDynamicContentVariantId(
  args: InferRequestType<
    (typeof client.api.v2.dynamic_content.items)[':dynamic_content_item_id']['variants'][':dynamic_content_variant_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.dynamic_content.items[':dynamic_content_item_id'].variants[
      ':dynamic_content_variant_id'
    ].$put(args, options),
  )
}

export async function deleteApiV2DynamicContentItemsDynamicContentItemIdVariantsDynamicContentVariantId(
  args: InferRequestType<
    (typeof client.api.v2.dynamic_content.items)[':dynamic_content_item_id']['variants'][':dynamic_content_variant_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.dynamic_content.items[':dynamic_content_item_id'].variants[
      ':dynamic_content_variant_id'
    ].$delete(args, options),
  )
}

export async function postApiV2DynamicContentItemsDynamicContentItemIdVariantsCreateMany(
  args: InferRequestType<
    (typeof client.api.v2.dynamic_content.items)[':dynamic_content_item_id']['variants']['create_many']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.dynamic_content.items[':dynamic_content_item_id'].variants.create_many.$post(
      args,
      options,
    ),
  )
}

export async function putApiV2DynamicContentItemsDynamicContentItemIdVariantsUpdateMany(
  args: InferRequestType<
    (typeof client.api.v2.dynamic_content.items)[':dynamic_content_item_id']['variants']['update_many']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.dynamic_content.items[':dynamic_content_item_id'].variants.update_many.$put(
      args,
      options,
    ),
  )
}

export async function getApiV2DynamicContentItemsShowMany(
  args: InferRequestType<typeof client.api.v2.dynamic_content.items.show_many.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.dynamic_content.items.show_many.$get(args, options))
}

export async function getApiV2EmailNotifications(
  args: InferRequestType<typeof client.api.v2.email_notifications.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.email_notifications.$get(args, options))
}

export async function getApiV2EmailNotificationsNotificationId(
  args: InferRequestType<(typeof client.api.v2.email_notifications)[':notification_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.email_notifications[':notification_id'].$get(args, options),
  )
}

export async function getApiV2EmailNotificationsShowMany(
  args: InferRequestType<typeof client.api.v2.email_notifications.show_many.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.email_notifications.show_many.$get(args, options))
}

export async function getApiV2EndUsersUserIdIdentities(
  args: InferRequestType<(typeof client.api.v2.end_users)[':user_id']['identities']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.end_users[':user_id'].identities.$get(args, options))
}

export async function postApiV2EndUsersUserIdIdentities(
  args: InferRequestType<(typeof client.api.v2.end_users)[':user_id']['identities']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.end_users[':user_id'].identities.$post(args, options))
}

export async function getApiV2EndUsersUserIdIdentitiesUserIdentityId(
  args: InferRequestType<
    (typeof client.api.v2.end_users)[':user_id']['identities'][':user_identity_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.end_users[':user_id'].identities[':user_identity_id'].$get(args, options),
  )
}

export async function deleteApiV2EndUsersUserIdIdentitiesUserIdentityId(
  args: InferRequestType<
    (typeof client.api.v2.end_users)[':user_id']['identities'][':user_identity_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.end_users[':user_id'].identities[':user_identity_id'].$delete(args, options),
  )
}

export async function putApiV2EndUsersUserIdIdentitiesUserIdentityIdMakePrimary(
  args: InferRequestType<
    (typeof client.api.v2.end_users)[':user_id']['identities'][':user_identity_id']['make_primary']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.end_users[':user_id'].identities[':user_identity_id'].make_primary.$put(
      args,
      options,
    ),
  )
}

export async function putApiV2EndUsersUserIdIdentitiesUserIdentityIdRequestVerification(
  args: InferRequestType<
    (typeof client.api.v2.end_users)[':user_id']['identities'][':user_identity_id']['request_verification']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.end_users[':user_id'].identities[':user_identity_id'].request_verification.$put(
      args,
      options,
    ),
  )
}

export async function getApiV2GroupMemberships(
  args: InferRequestType<typeof client.api.v2.group_memberships.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.group_memberships.$get(args, options))
}

export async function postApiV2GroupMemberships(
  args: InferRequestType<typeof client.api.v2.group_memberships.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.group_memberships.$post(args, options))
}

export async function getApiV2GroupMembershipsGroupMembershipId(
  args: InferRequestType<(typeof client.api.v2.group_memberships)[':group_membership_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.group_memberships[':group_membership_id'].$get(args, options),
  )
}

export async function deleteApiV2GroupMembershipsGroupMembershipId(
  args: InferRequestType<
    (typeof client.api.v2.group_memberships)[':group_membership_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.group_memberships[':group_membership_id'].$delete(args, options),
  )
}

export async function getApiV2GroupMembershipsAssignable(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.group_memberships.assignable.$get(undefined, options))
}

export async function postApiV2GroupMembershipsCreateMany(
  args: InferRequestType<typeof client.api.v2.group_memberships.create_many.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.group_memberships.create_many.$post(args, options))
}

export async function deleteApiV2GroupMembershipsDestroyMany(
  args: InferRequestType<typeof client.api.v2.group_memberships.destroy_many.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.group_memberships.destroy_many.$delete(args, options))
}

export async function getApiV2GroupSlasPolicies(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.group_slas.policies.$get(undefined, options))
}

export async function postApiV2GroupSlasPolicies(
  args: InferRequestType<typeof client.api.v2.group_slas.policies.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.group_slas.policies.$post(args, options))
}

export async function getApiV2GroupSlasPoliciesGroupSlaPolicyId(
  args: InferRequestType<
    (typeof client.api.v2.group_slas.policies)[':group_sla_policy_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.group_slas.policies[':group_sla_policy_id'].$get(args, options),
  )
}

export async function putApiV2GroupSlasPoliciesGroupSlaPolicyId(
  args: InferRequestType<
    (typeof client.api.v2.group_slas.policies)[':group_sla_policy_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.group_slas.policies[':group_sla_policy_id'].$put(args, options),
  )
}

export async function deleteApiV2GroupSlasPoliciesGroupSlaPolicyId(
  args: InferRequestType<
    (typeof client.api.v2.group_slas.policies)[':group_sla_policy_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.group_slas.policies[':group_sla_policy_id'].$delete(args, options),
  )
}

export async function getApiV2GroupSlasPoliciesDefinitions(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.group_slas.policies.definitions.$get(undefined, options))
}

export async function putApiV2GroupSlasPoliciesReorder(
  args: InferRequestType<typeof client.api.v2.group_slas.policies.reorder.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.group_slas.policies.reorder.$put(args, options))
}

export async function getApiV2Groups(
  args: InferRequestType<typeof client.api.v2.groups.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.groups.$get(args, options))
}

export async function postApiV2Groups(
  args: InferRequestType<typeof client.api.v2.groups.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.groups.$post(args, options))
}

export async function getApiV2GroupsGroupId(
  args: InferRequestType<(typeof client.api.v2.groups)[':group_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.groups[':group_id'].$get(args, options))
}

export async function putApiV2GroupsGroupId(
  args: InferRequestType<(typeof client.api.v2.groups)[':group_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.groups[':group_id'].$put(args, options))
}

export async function deleteApiV2GroupsGroupId(
  args: InferRequestType<(typeof client.api.v2.groups)[':group_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.groups[':group_id'].$delete(args, options))
}

export async function getApiV2GroupsGroupIdMemberships(
  args: InferRequestType<(typeof client.api.v2.groups)[':group_id']['memberships']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.groups[':group_id'].memberships.$get(args, options))
}

export async function getApiV2GroupsGroupIdMembershipsAssignable(
  args: InferRequestType<
    (typeof client.api.v2.groups)[':group_id']['memberships']['assignable']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.groups[':group_id'].memberships.assignable.$get(args, options),
  )
}

export async function getApiV2GroupsGroupIdUsers(
  args: InferRequestType<(typeof client.api.v2.groups)[':group_id']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.groups[':group_id'].users.$get(args, options))
}

export async function getApiV2GroupsGroupIdUsersCount(
  args: InferRequestType<(typeof client.api.v2.groups)[':group_id']['users']['count']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.groups[':group_id'].users.count.$get(args, options))
}

export async function getApiV2GroupsAssignable(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.groups.assignable.$get(undefined, options))
}

export async function getApiV2GroupsAutocomplete(
  args: InferRequestType<typeof client.api.v2.groups.autocomplete.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.groups.autocomplete.$get(args, options))
}

export async function getApiV2GroupsAvailableAgents(
  args: InferRequestType<typeof client.api.v2.groups.available_agents.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.groups.available_agents.$get(args, options))
}

export async function getApiV2GroupsCount(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.groups.count.$get(undefined, options))
}

export async function getApiV2GroupsDefault(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.groups.default.$get(undefined, options))
}

export async function postApiV2ImportsTickets(
  args: InferRequestType<typeof client.api.v2.imports.tickets.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.imports.tickets.$post(args, options))
}

export async function postApiV2ImportsTicketsCreateMany(
  args: InferRequestType<typeof client.api.v2.imports.tickets.create_many.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.imports.tickets.create_many.$post(args, options))
}

export async function getApiV2IncrementalIncrementalResourceSample(
  args: InferRequestType<
    (typeof client.api.v2.incremental)[':incremental_resource']['sample']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.incremental[':incremental_resource'].sample.$get(args, options),
  )
}

export async function getApiV2IncrementalCustomObjectsCustomObjectKeyCursor(
  args: InferRequestType<
    (typeof client.api.v2.incremental.custom_objects)[':custom_object_key']['cursor']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.incremental.custom_objects[':custom_object_key'].cursor.$get(args, options),
  )
}

export async function getApiV2IncrementalOrganizations(
  args: InferRequestType<typeof client.api.v2.incremental.organizations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.incremental.organizations.$get(args, options))
}

export async function getApiV2IncrementalRoutingAttributeValues(options?: ClientRequestOptions) {
  return await parseResponse(
    client.api.v2.incremental.routing.attribute_values.$get(undefined, options),
  )
}

export async function getApiV2IncrementalRoutingAttributes(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.incremental.routing.attributes.$get(undefined, options))
}

export async function getApiV2IncrementalRoutingInstanceValues(options?: ClientRequestOptions) {
  return await parseResponse(
    client.api.v2.incremental.routing.instance_values.$get(undefined, options),
  )
}

export async function getApiV2IncrementalTicketEvents(
  args: InferRequestType<typeof client.api.v2.incremental.ticket_events.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.incremental.ticket_events.$get(args, options))
}

export async function getApiV2IncrementalTicketMetricEvents(
  args: InferRequestType<typeof client.api.v2.incremental.ticket_metric_events.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.incremental.ticket_metric_events.$get(args, options))
}

export async function getApiV2IncrementalTickets(
  args: InferRequestType<typeof client.api.v2.incremental.tickets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.incremental.tickets.$get(args, options))
}

export async function getApiV2IncrementalTicketsCursor(
  args: InferRequestType<typeof client.api.v2.incremental.tickets.cursor.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.incremental.tickets.cursor.$get(args, options))
}

export async function getApiV2IncrementalUsers(
  args: InferRequestType<typeof client.api.v2.incremental.users.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.incremental.users.$get(args, options))
}

export async function getApiV2IncrementalUsersCursor(
  args: InferRequestType<typeof client.api.v2.incremental.users.cursor.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.incremental.users.cursor.$get(args, options))
}

export async function getApiV2ItAssetManagementAssetTypes(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.it_asset_management.asset_types.$get(undefined, options))
}

export async function postApiV2ItAssetManagementAssetTypes(
  args: InferRequestType<typeof client.api.v2.it_asset_management.asset_types.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.it_asset_management.asset_types.$post(args, options))
}

export async function getApiV2ItAssetManagementAssetTypesAssetTypeId(
  args: InferRequestType<
    (typeof client.api.v2.it_asset_management.asset_types)[':asset_type_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.it_asset_management.asset_types[':asset_type_id'].$get(args, options),
  )
}

export async function deleteApiV2ItAssetManagementAssetTypesAssetTypeId(
  args: InferRequestType<
    (typeof client.api.v2.it_asset_management.asset_types)[':asset_type_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.it_asset_management.asset_types[':asset_type_id'].$delete(args, options),
  )
}

export async function patchApiV2ItAssetManagementAssetTypesAssetTypeId(
  args: InferRequestType<
    (typeof client.api.v2.it_asset_management.asset_types)[':asset_type_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.it_asset_management.asset_types[':asset_type_id'].$patch(args, options),
  )
}

export async function getApiV2ItAssetManagementAssetTypesAssetTypeIdFields(
  args: InferRequestType<
    (typeof client.api.v2.it_asset_management.asset_types)[':asset_type_id']['fields']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.it_asset_management.asset_types[':asset_type_id'].fields.$get(args, options),
  )
}

export async function getApiV2ItAssetManagementAssetTypesAssetTypeIdFieldsAssetTypeFieldId(
  args: InferRequestType<
    (typeof client.api.v2.it_asset_management.asset_types)[':asset_type_id']['fields'][':asset_type_field_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.it_asset_management.asset_types[':asset_type_id'].fields[
      ':asset_type_field_id'
    ].$get(args, options),
  )
}

export async function getApiV2ItAssetManagementAssets(
  args: InferRequestType<typeof client.api.v2.it_asset_management.assets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.it_asset_management.assets.$get(args, options))
}

export async function postApiV2ItAssetManagementAssets(
  args: InferRequestType<typeof client.api.v2.it_asset_management.assets.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.it_asset_management.assets.$post(args, options))
}

export async function getApiV2ItAssetManagementAssetsAssetId(
  args: InferRequestType<(typeof client.api.v2.it_asset_management.assets)[':asset_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.it_asset_management.assets[':asset_id'].$get(args, options),
  )
}

export async function deleteApiV2ItAssetManagementAssetsAssetId(
  args: InferRequestType<(typeof client.api.v2.it_asset_management.assets)[':asset_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.it_asset_management.assets[':asset_id'].$delete(args, options),
  )
}

export async function patchApiV2ItAssetManagementAssetsAssetId(
  args: InferRequestType<(typeof client.api.v2.it_asset_management.assets)[':asset_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.it_asset_management.assets[':asset_id'].$patch(args, options),
  )
}

export async function postApiV2ItAssetManagementAssetsJobs(
  args: InferRequestType<typeof client.api.v2.it_asset_management.assets.jobs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.it_asset_management.assets.jobs.$post(args, options))
}

export async function getApiV2ItAssetManagementAssetsSearch(
  args: InferRequestType<typeof client.api.v2.it_asset_management.assets.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.it_asset_management.assets.search.$get(args, options))
}

export async function postApiV2ItAssetManagementAssetsSearch(
  args: InferRequestType<typeof client.api.v2.it_asset_management.assets.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.it_asset_management.assets.search.$post(args, options))
}

export async function getApiV2ItAssetManagementFields(
  args: InferRequestType<typeof client.api.v2.it_asset_management.fields.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.it_asset_management.fields.$get(args, options))
}

export async function postApiV2ItAssetManagementFields(
  args: InferRequestType<typeof client.api.v2.it_asset_management.fields.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.it_asset_management.fields.$post(args, options))
}

export async function getApiV2ItAssetManagementFieldsId(
  args: InferRequestType<(typeof client.api.v2.it_asset_management.fields)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.it_asset_management.fields[':id'].$get(args, options))
}

export async function deleteApiV2ItAssetManagementFieldsId(
  args: InferRequestType<(typeof client.api.v2.it_asset_management.fields)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.it_asset_management.fields[':id'].$delete(args, options))
}

export async function patchApiV2ItAssetManagementFieldsId(
  args: InferRequestType<(typeof client.api.v2.it_asset_management.fields)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.it_asset_management.fields[':id'].$patch(args, options))
}

export async function getApiV2ItAssetManagementLocations(
  args: InferRequestType<typeof client.api.v2.it_asset_management.locations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.it_asset_management.locations.$get(args, options))
}

export async function postApiV2ItAssetManagementLocations(
  args: InferRequestType<typeof client.api.v2.it_asset_management.locations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.it_asset_management.locations.$post(args, options))
}

export async function getApiV2ItAssetManagementLocationsLocationId(
  args: InferRequestType<
    (typeof client.api.v2.it_asset_management.locations)[':location_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.it_asset_management.locations[':location_id'].$get(args, options),
  )
}

export async function deleteApiV2ItAssetManagementLocationsLocationId(
  args: InferRequestType<
    (typeof client.api.v2.it_asset_management.locations)[':location_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.it_asset_management.locations[':location_id'].$delete(args, options),
  )
}

export async function patchApiV2ItAssetManagementLocationsLocationId(
  args: InferRequestType<
    (typeof client.api.v2.it_asset_management.locations)[':location_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.it_asset_management.locations[':location_id'].$patch(args, options),
  )
}

export async function getApiV2ItAssetManagementStatuses(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.it_asset_management.statuses.$get(undefined, options))
}

export async function postApiV2ItAssetManagementStatuses(
  args: InferRequestType<typeof client.api.v2.it_asset_management.statuses.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.it_asset_management.statuses.$post(args, options))
}

export async function getApiV2ItAssetManagementStatusesStatusId(
  args: InferRequestType<(typeof client.api.v2.it_asset_management.statuses)[':status_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.it_asset_management.statuses[':status_id'].$get(args, options),
  )
}

export async function deleteApiV2ItAssetManagementStatusesStatusId(
  args: InferRequestType<
    (typeof client.api.v2.it_asset_management.statuses)[':status_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.it_asset_management.statuses[':status_id'].$delete(args, options),
  )
}

export async function patchApiV2ItAssetManagementStatusesStatusId(
  args: InferRequestType<
    (typeof client.api.v2.it_asset_management.statuses)[':status_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.it_asset_management.statuses[':status_id'].$patch(args, options),
  )
}

export async function getApiV2JobStatuses(
  args: InferRequestType<typeof client.api.v2.job_statuses.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.job_statuses.$get(args, options))
}

export async function getApiV2JobStatusesJobStatusId(
  args: InferRequestType<(typeof client.api.v2.job_statuses)[':job_status_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.job_statuses[':job_status_id'].$get(args, options))
}

export async function getApiV2JobStatusesShowMany(
  args: InferRequestType<typeof client.api.v2.job_statuses.show_many.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.job_statuses.show_many.$get(args, options))
}

export async function getApiV2Locales(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.locales.$get(undefined, options))
}

export async function getApiV2LocalesLocaleId(
  args: InferRequestType<(typeof client.api.v2.locales)[':locale_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.locales[':locale_id'].$get(args, options))
}

export async function getApiV2LocalesAgent(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.locales.agent.$get(undefined, options))
}

export async function getApiV2LocalesCurrent(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.locales.current.$get(undefined, options))
}

export async function getApiV2LocalesDetectBestLocale(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.locales.detect_best_locale.$get(undefined, options))
}

export async function getApiV2LocalesPublic(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.locales.public.$get(undefined, options))
}

export async function getApiV2Macros(
  args: InferRequestType<typeof client.api.v2.macros.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.macros.$get(args, options))
}

export async function postApiV2Macros(
  args: InferRequestType<typeof client.api.v2.macros.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.macros.$post(args, options))
}

export async function getApiV2MacrosMacroId(
  args: InferRequestType<(typeof client.api.v2.macros)[':macro_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.macros[':macro_id'].$get(args, options))
}

export async function putApiV2MacrosMacroId(
  args: InferRequestType<(typeof client.api.v2.macros)[':macro_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.macros[':macro_id'].$put(args, options))
}

export async function deleteApiV2MacrosMacroId(
  args: InferRequestType<(typeof client.api.v2.macros)[':macro_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.macros[':macro_id'].$delete(args, options))
}

export async function getApiV2MacrosMacroIdApply(
  args: InferRequestType<(typeof client.api.v2.macros)[':macro_id']['apply']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.macros[':macro_id'].apply.$get(args, options))
}

export async function getApiV2MacrosMacroIdAttachments(
  args: InferRequestType<(typeof client.api.v2.macros)[':macro_id']['attachments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.macros[':macro_id'].attachments.$get(args, options))
}

export async function postApiV2MacrosMacroIdAttachments(
  args: InferRequestType<(typeof client.api.v2.macros)[':macro_id']['attachments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.macros[':macro_id'].attachments.$post(args, options))
}

export async function getApiV2MacrosActions(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.macros.actions.$get(undefined, options))
}

export async function getApiV2MacrosActive(
  args: InferRequestType<typeof client.api.v2.macros.active.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.macros.active.$get(args, options))
}

export async function postApiV2MacrosAttachments(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.macros.attachments.$post(undefined, options))
}

export async function getApiV2MacrosAttachmentsAttachmentId(
  args: InferRequestType<(typeof client.api.v2.macros.attachments)[':attachment_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.macros.attachments[':attachment_id'].$get(args, options))
}

export async function getApiV2MacrosAttachmentsAttachmentIdContent(
  args: InferRequestType<
    (typeof client.api.v2.macros.attachments)[':attachment_id']['content']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.macros.attachments[':attachment_id'].content.$get(args, options),
  )
}

export async function getApiV2MacrosCategories(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.macros.categories.$get(undefined, options))
}

export async function getApiV2MacrosDefinitions(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.macros.definitions.$get(undefined, options))
}

export async function deleteApiV2MacrosDestroyMany(
  args: InferRequestType<typeof client.api.v2.macros.destroy_many.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.macros.destroy_many.$delete(args, options))
}

export async function getApiV2MacrosGroups(
  args: InferRequestType<typeof client.api.v2.macros.groups.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.macros.groups.$get(args, options))
}

export async function getApiV2MacrosMostUsed(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.macros.most_used.$get(undefined, options))
}

export async function getApiV2MacrosNew(
  args: InferRequestType<typeof client.api.v2.macros.new.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.macros.new.$get(args, options))
}

export async function getApiV2MacrosSearch(
  args: InferRequestType<typeof client.api.v2.macros.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.macros.search.$get(args, options))
}

export async function putApiV2MacrosUpdateMany(
  args: InferRequestType<typeof client.api.v2.macros.update_many.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.macros.update_many.$put(args, options))
}

export async function getApiV2OauthClients(
  args: InferRequestType<typeof client.api.v2.oauth.clients.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.oauth.clients.$get(args, options))
}

export async function postApiV2OauthClients(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.oauth.clients.$post(undefined, options))
}

export async function getApiV2OauthClientsOauthClientId(
  args: InferRequestType<(typeof client.api.v2.oauth.clients)[':oauth_client_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.oauth.clients[':oauth_client_id'].$get(args, options))
}

export async function putApiV2OauthClientsOauthClientId(
  args: InferRequestType<(typeof client.api.v2.oauth.clients)[':oauth_client_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.oauth.clients[':oauth_client_id'].$put(args, options))
}

export async function deleteApiV2OauthClientsOauthClientId(
  args: InferRequestType<(typeof client.api.v2.oauth.clients)[':oauth_client_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.oauth.clients[':oauth_client_id'].$delete(args, options))
}

export async function putApiV2OauthClientsOauthClientIdGenerateSecret(
  args: InferRequestType<
    (typeof client.api.v2.oauth.clients)[':oauth_client_id']['generate_secret']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.oauth.clients[':oauth_client_id'].generate_secret.$put(args, options),
  )
}

export async function getApiV2OauthGlobalClients(
  args: InferRequestType<typeof client.api.v2.oauth.global_clients.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.oauth.global_clients.$get(args, options))
}

export async function getApiV2OauthGlobalClientsGlobalClientId(
  args: InferRequestType<(typeof client.api.v2.oauth.global_clients)[':global_client_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.oauth.global_clients[':global_client_id'].$get(args, options),
  )
}

export async function getApiV2OauthGlobalClientsTokenSummary(
  args: InferRequestType<typeof client.api.v2.oauth.global_clients.token_summary.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.oauth.global_clients.token_summary.$get(args, options))
}

export async function getApiV2OauthTokens(
  args: InferRequestType<typeof client.api.v2.oauth.tokens.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.oauth.tokens.$get(args, options))
}

export async function getApiV2OauthTokensOauthTokenId(
  args: InferRequestType<(typeof client.api.v2.oauth.tokens)[':oauth_token_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.oauth.tokens[':oauth_token_id'].$get(args, options))
}

export async function deleteApiV2OauthTokensOauthTokenId(
  args: InferRequestType<(typeof client.api.v2.oauth.tokens)[':oauth_token_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.oauth.tokens[':oauth_token_id'].$delete(args, options))
}

export async function getApiV2OauthTokensCurrent(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.oauth.tokens.current.$get(undefined, options))
}

export async function deleteApiV2OauthTokensCurrent(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.oauth.tokens.current.$delete(undefined, options))
}

export async function postApiV2OauthTokensDeleteMany(
  args: InferRequestType<typeof client.api.v2.oauth.tokens.delete_many.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.oauth.tokens.delete_many.$post(args, options))
}

export async function getApiV2OrganizationFields(
  args: InferRequestType<typeof client.api.v2.organization_fields.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.organization_fields.$get(args, options))
}

export async function postApiV2OrganizationFields(
  args: InferRequestType<typeof client.api.v2.organization_fields.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.organization_fields.$post(args, options))
}

export async function getApiV2OrganizationFieldsOrganizationFieldId(
  args: InferRequestType<
    (typeof client.api.v2.organization_fields)[':organization_field_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.organization_fields[':organization_field_id'].$get(args, options),
  )
}

export async function putApiV2OrganizationFieldsOrganizationFieldId(
  args: InferRequestType<
    (typeof client.api.v2.organization_fields)[':organization_field_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.organization_fields[':organization_field_id'].$put(args, options),
  )
}

export async function deleteApiV2OrganizationFieldsOrganizationFieldId(
  args: InferRequestType<
    (typeof client.api.v2.organization_fields)[':organization_field_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.organization_fields[':organization_field_id'].$delete(args, options),
  )
}

export async function putApiV2OrganizationFieldsReorder(
  args: InferRequestType<typeof client.api.v2.organization_fields.reorder.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.organization_fields.reorder.$put(args, options))
}

export async function getApiV2OrganizationMemberships(
  args: InferRequestType<typeof client.api.v2.organization_memberships.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.organization_memberships.$get(args, options))
}

export async function postApiV2OrganizationMemberships(
  args: InferRequestType<typeof client.api.v2.organization_memberships.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.organization_memberships.$post(args, options))
}

export async function getApiV2OrganizationMembershipsOrganizationMembershipId(
  args: InferRequestType<
    (typeof client.api.v2.organization_memberships)[':organization_membership_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.organization_memberships[':organization_membership_id'].$get(args, options),
  )
}

export async function deleteApiV2OrganizationMembershipsOrganizationMembershipId(
  args: InferRequestType<
    (typeof client.api.v2.organization_memberships)[':organization_membership_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.organization_memberships[':organization_membership_id'].$delete(args, options),
  )
}

export async function postApiV2OrganizationMembershipsCreateMany(
  args: InferRequestType<typeof client.api.v2.organization_memberships.create_many.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.organization_memberships.create_many.$post(args, options),
  )
}

export async function deleteApiV2OrganizationMembershipsDestroyMany(
  args: InferRequestType<typeof client.api.v2.organization_memberships.destroy_many.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.organization_memberships.destroy_many.$delete(args, options),
  )
}

export async function getApiV2OrganizationMergesOrganizationMergeId(
  args: InferRequestType<
    (typeof client.api.v2.organization_merges)[':organization_merge_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.organization_merges[':organization_merge_id'].$get(args, options),
  )
}

export async function getApiV2OrganizationSubscriptions(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.organization_subscriptions.$get(undefined, options))
}

export async function postApiV2OrganizationSubscriptions(
  args: InferRequestType<typeof client.api.v2.organization_subscriptions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.organization_subscriptions.$post(args, options))
}

export async function getApiV2OrganizationSubscriptionsOrganizationSubscriptionId(
  args: InferRequestType<
    (typeof client.api.v2.organization_subscriptions)[':organization_subscription_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.organization_subscriptions[':organization_subscription_id'].$get(args, options),
  )
}

export async function deleteApiV2OrganizationSubscriptionsOrganizationSubscriptionId(
  args: InferRequestType<
    (typeof client.api.v2.organization_subscriptions)[':organization_subscription_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.organization_subscriptions[':organization_subscription_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getApiV2Organizations(
  args: InferRequestType<typeof client.api.v2.organizations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.organizations.$get(args, options))
}

export async function postApiV2Organizations(
  args: InferRequestType<typeof client.api.v2.organizations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.organizations.$post(args, options))
}

export async function getApiV2OrganizationsOrganizationId(
  args: InferRequestType<(typeof client.api.v2.organizations)[':organization_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.organizations[':organization_id'].$get(args, options))
}

export async function putApiV2OrganizationsOrganizationId(
  args: InferRequestType<(typeof client.api.v2.organizations)[':organization_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.organizations[':organization_id'].$put(args, options))
}

export async function deleteApiV2OrganizationsOrganizationId(
  args: InferRequestType<(typeof client.api.v2.organizations)[':organization_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.organizations[':organization_id'].$delete(args, options))
}

export async function postApiV2OrganizationsOrganizationIdMerge(
  args: InferRequestType<
    (typeof client.api.v2.organizations)[':organization_id']['merge']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.organizations[':organization_id'].merge.$post(args, options),
  )
}

export async function getApiV2OrganizationsOrganizationIdMerges(
  args: InferRequestType<
    (typeof client.api.v2.organizations)[':organization_id']['merges']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.organizations[':organization_id'].merges.$get(args, options),
  )
}

export async function getApiV2OrganizationsOrganizationIdOrganizationMemberships(
  args: InferRequestType<
    (typeof client.api.v2.organizations)[':organization_id']['organization_memberships']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.organizations[':organization_id'].organization_memberships.$get(args, options),
  )
}

export async function getApiV2OrganizationsOrganizationIdRelated(
  args: InferRequestType<
    (typeof client.api.v2.organizations)[':organization_id']['related']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.organizations[':organization_id'].related.$get(args, options),
  )
}

export async function getApiV2OrganizationsOrganizationIdRequests(
  args: InferRequestType<
    (typeof client.api.v2.organizations)[':organization_id']['requests']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.organizations[':organization_id'].requests.$get(args, options),
  )
}

export async function getApiV2OrganizationsOrganizationIdSubscriptions(
  args: InferRequestType<
    (typeof client.api.v2.organizations)[':organization_id']['subscriptions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.organizations[':organization_id'].subscriptions.$get(args, options),
  )
}

export async function getApiV2OrganizationsOrganizationIdTags(
  args: InferRequestType<(typeof client.api.v2.organizations)[':organization_id']['tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.organizations[':organization_id'].tags.$get(args, options),
  )
}

export async function putApiV2OrganizationsOrganizationIdTags(
  args: InferRequestType<(typeof client.api.v2.organizations)[':organization_id']['tags']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.organizations[':organization_id'].tags.$put(args, options),
  )
}

export async function postApiV2OrganizationsOrganizationIdTags(
  args: InferRequestType<(typeof client.api.v2.organizations)[':organization_id']['tags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.organizations[':organization_id'].tags.$post(args, options),
  )
}

export async function deleteApiV2OrganizationsOrganizationIdTags(
  args: InferRequestType<
    (typeof client.api.v2.organizations)[':organization_id']['tags']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.organizations[':organization_id'].tags.$delete(args, options),
  )
}

export async function getApiV2OrganizationsOrganizationIdTickets(
  args: InferRequestType<
    (typeof client.api.v2.organizations)[':organization_id']['tickets']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.organizations[':organization_id'].tickets.$get(args, options),
  )
}

export async function getApiV2OrganizationsOrganizationIdTicketsCount(
  args: InferRequestType<
    (typeof client.api.v2.organizations)[':organization_id']['tickets']['count']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.organizations[':organization_id'].tickets.count.$get(args, options),
  )
}

export async function getApiV2OrganizationsOrganizationIdUsers(
  args: InferRequestType<(typeof client.api.v2.organizations)[':organization_id']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.organizations[':organization_id'].users.$get(args, options),
  )
}

export async function getApiV2OrganizationsOrganizationIdUsersCount(
  args: InferRequestType<
    (typeof client.api.v2.organizations)[':organization_id']['users']['count']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.organizations[':organization_id'].users.count.$get(args, options),
  )
}

export async function getApiV2OrganizationsAutocomplete(
  args: InferRequestType<typeof client.api.v2.organizations.autocomplete.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.organizations.autocomplete.$get(args, options))
}

export async function getApiV2OrganizationsCount(
  args: InferRequestType<typeof client.api.v2.organizations.count.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.organizations.count.$get(args, options))
}

export async function postApiV2OrganizationsCreateMany(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.organizations.create_many.$post(undefined, options))
}

export async function postApiV2OrganizationsCreateOrUpdate(
  args: InferRequestType<typeof client.api.v2.organizations.create_or_update.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.organizations.create_or_update.$post(args, options))
}

export async function deleteApiV2OrganizationsDestroyMany(
  args: InferRequestType<typeof client.api.v2.organizations.destroy_many.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.organizations.destroy_many.$delete(args, options))
}

export async function getApiV2OrganizationsSearch(
  args: InferRequestType<typeof client.api.v2.organizations.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.organizations.search.$get(args, options))
}

export async function getApiV2OrganizationsShowMany(
  args: InferRequestType<typeof client.api.v2.organizations.show_many.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.organizations.show_many.$get(args, options))
}

export async function putApiV2OrganizationsUpdateMany(
  args: InferRequestType<typeof client.api.v2.organizations.update_many.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.organizations.update_many.$put(args, options))
}

export async function getApiV2Problems(
  args: InferRequestType<typeof client.api.v2.problems.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.problems.$get(args, options))
}

export async function postApiV2ProblemsAutocomplete(
  args: InferRequestType<typeof client.api.v2.problems.autocomplete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.problems.autocomplete.$post(args, options))
}

export async function postApiV2PushNotificationDevicesDestroyMany(
  args: InferRequestType<typeof client.api.v2.push_notification_devices.destroy_many.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.push_notification_devices.destroy_many.$post(args, options),
  )
}

export async function getApiV2Queues(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.queues.$get(undefined, options))
}

export async function postApiV2Queues(
  args: InferRequestType<typeof client.api.v2.queues.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.queues.$post(args, options))
}

export async function getApiV2QueuesQueueId(
  args: InferRequestType<(typeof client.api.v2.queues)[':queue_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.queues[':queue_id'].$get(args, options))
}

export async function putApiV2QueuesQueueId(
  args: InferRequestType<(typeof client.api.v2.queues)[':queue_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.queues[':queue_id'].$put(args, options))
}

export async function deleteApiV2QueuesQueueId(
  args: InferRequestType<(typeof client.api.v2.queues)[':queue_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.queues[':queue_id'].$delete(args, options))
}

export async function getApiV2QueuesDefinitions(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.queues.definitions.$get(undefined, options))
}

export async function patchApiV2QueuesOrder(
  args: InferRequestType<typeof client.api.v2.queues.order.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.queues.order.$patch(args, options))
}

export async function getApiV2RecipientAddresses(
  args: InferRequestType<typeof client.api.v2.recipient_addresses.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.recipient_addresses.$get(args, options))
}

export async function postApiV2RecipientAddresses(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.recipient_addresses.$post(undefined, options))
}

export async function getApiV2RecipientAddressesSupportAddressId(
  args: InferRequestType<(typeof client.api.v2.recipient_addresses)[':support_address_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.recipient_addresses[':support_address_id'].$get(args, options),
  )
}

export async function putApiV2RecipientAddressesSupportAddressId(
  args: InferRequestType<(typeof client.api.v2.recipient_addresses)[':support_address_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.recipient_addresses[':support_address_id'].$put(args, options),
  )
}

export async function deleteApiV2RecipientAddressesSupportAddressId(
  args: InferRequestType<
    (typeof client.api.v2.recipient_addresses)[':support_address_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.recipient_addresses[':support_address_id'].$delete(args, options),
  )
}

export async function putApiV2RecipientAddressesSupportAddressIdVerify(
  args: InferRequestType<
    (typeof client.api.v2.recipient_addresses)[':support_address_id']['verify']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.recipient_addresses[':support_address_id'].verify.$put(args, options),
  )
}

export async function getApiV2RelationshipsDefinitionsTargetType(
  args: InferRequestType<(typeof client.api.v2.relationships.definitions)[':target_type']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.relationships.definitions[':target_type'].$get(args, options),
  )
}

export async function getApiV2RemoteAuthentications(
  args: InferRequestType<typeof client.api.v2.remote_authentications.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.remote_authentications.$get(args, options))
}

export async function getApiV2Requests(
  args: InferRequestType<typeof client.api.v2.requests.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.requests.$get(args, options))
}

export async function postApiV2Requests(
  args: InferRequestType<typeof client.api.v2.requests.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.requests.$post(args, options))
}

export async function getApiV2RequestsRequestId(
  args: InferRequestType<(typeof client.api.v2.requests)[':request_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.requests[':request_id'].$get(args, options))
}

export async function putApiV2RequestsRequestId(
  args: InferRequestType<(typeof client.api.v2.requests)[':request_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.requests[':request_id'].$put(args, options))
}

export async function getApiV2RequestsRequestIdComments(
  args: InferRequestType<(typeof client.api.v2.requests)[':request_id']['comments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.requests[':request_id'].comments.$get(args, options))
}

export async function getApiV2RequestsRequestIdCommentsTicketCommentId(
  args: InferRequestType<
    (typeof client.api.v2.requests)[':request_id']['comments'][':ticket_comment_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.requests[':request_id'].comments[':ticket_comment_id'].$get(args, options),
  )
}

export async function getApiV2RequestsCcd(
  args: InferRequestType<typeof client.api.v2.requests.ccd.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.requests.ccd.$get(args, options))
}

export async function getApiV2RequestsOpen(
  args: InferRequestType<typeof client.api.v2.requests.open.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.requests.open.$get(args, options))
}

export async function getApiV2RequestsSearch(
  args: InferRequestType<typeof client.api.v2.requests.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.requests.search.$get(args, options))
}

export async function getApiV2RequestsSolved(
  args: InferRequestType<typeof client.api.v2.requests.solved.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.requests.solved.$get(args, options))
}

export async function getApiV2ResourceCollections(
  args: InferRequestType<typeof client.api.v2.resource_collections.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.resource_collections.$get(args, options))
}

export async function postApiV2ResourceCollections(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.resource_collections.$post(undefined, options))
}

export async function getApiV2ResourceCollectionsResourceCollectionId(
  args: InferRequestType<
    (typeof client.api.v2.resource_collections)[':resource_collection_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.resource_collections[':resource_collection_id'].$get(args, options),
  )
}

export async function putApiV2ResourceCollectionsResourceCollectionId(
  args: InferRequestType<
    (typeof client.api.v2.resource_collections)[':resource_collection_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.resource_collections[':resource_collection_id'].$put(args, options),
  )
}

export async function deleteApiV2ResourceCollectionsResourceCollectionId(
  args: InferRequestType<
    (typeof client.api.v2.resource_collections)[':resource_collection_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.resource_collections[':resource_collection_id'].$delete(args, options),
  )
}

export async function getApiV2RoutingAgentsUserIdInstanceValues(
  args: InferRequestType<
    (typeof client.api.v2.routing.agents)[':user_id']['instance_values']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.routing.agents[':user_id'].instance_values.$get(args, options),
  )
}

export async function postApiV2RoutingAgentsUserIdInstanceValues(
  args: InferRequestType<
    (typeof client.api.v2.routing.agents)[':user_id']['instance_values']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.routing.agents[':user_id'].instance_values.$post(args, options),
  )
}

export async function getApiV2RoutingAgentsInstanceValues(
  args: InferRequestType<typeof client.api.v2.routing.agents.instance_values.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.routing.agents.instance_values.$get(args, options))
}

export async function postApiV2RoutingAgentsInstanceValuesJobs(
  args: InferRequestType<typeof client.api.v2.routing.agents.instance_values.jobs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.routing.agents.instance_values.jobs.$post(args, options))
}

export async function getApiV2RoutingAttributes(
  args: InferRequestType<typeof client.api.v2.routing.attributes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.routing.attributes.$get(args, options))
}

export async function postApiV2RoutingAttributes(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.routing.attributes.$post(undefined, options))
}

export async function getApiV2RoutingAttributesAttributeId(
  args: InferRequestType<(typeof client.api.v2.routing.attributes)[':attribute_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.routing.attributes[':attribute_id'].$get(args, options))
}

export async function putApiV2RoutingAttributesAttributeId(
  args: InferRequestType<(typeof client.api.v2.routing.attributes)[':attribute_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.routing.attributes[':attribute_id'].$put(args, options))
}

export async function deleteApiV2RoutingAttributesAttributeId(
  args: InferRequestType<(typeof client.api.v2.routing.attributes)[':attribute_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.routing.attributes[':attribute_id'].$delete(args, options),
  )
}

export async function getApiV2RoutingAttributesAttributeIdValues(
  args: InferRequestType<
    (typeof client.api.v2.routing.attributes)[':attribute_id']['values']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.routing.attributes[':attribute_id'].values.$get(args, options),
  )
}

export async function postApiV2RoutingAttributesAttributeIdValues(
  args: InferRequestType<
    (typeof client.api.v2.routing.attributes)[':attribute_id']['values']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.routing.attributes[':attribute_id'].values.$post(args, options),
  )
}

export async function getApiV2RoutingAttributesAttributeIdValuesAttributeValueId(
  args: InferRequestType<
    (typeof client.api.v2.routing.attributes)[':attribute_id']['values'][':attribute_value_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.routing.attributes[':attribute_id'].values[':attribute_value_id'].$get(
      args,
      options,
    ),
  )
}

export async function putApiV2RoutingAttributesAttributeIdValuesAttributeValueId(
  args: InferRequestType<
    (typeof client.api.v2.routing.attributes)[':attribute_id']['values'][':attribute_value_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.routing.attributes[':attribute_id'].values[':attribute_value_id'].$put(
      args,
      options,
    ),
  )
}

export async function deleteApiV2RoutingAttributesAttributeIdValuesAttributeValueId(
  args: InferRequestType<
    (typeof client.api.v2.routing.attributes)[':attribute_id']['values'][':attribute_value_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.routing.attributes[':attribute_id'].values[':attribute_value_id'].$delete(
      args,
      options,
    ),
  )
}

export async function patchApiV2RoutingAttributesAttributeIdValuesAttributeValueId(
  args: InferRequestType<
    (typeof client.api.v2.routing.attributes)[':attribute_id']['values'][':attribute_value_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.routing.attributes[':attribute_id'].values[':attribute_value_id'].$patch(
      args,
      options,
    ),
  )
}

export async function getApiV2RoutingAttributesDefinitions(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.routing.attributes.definitions.$get(undefined, options))
}

export async function getApiV2RoutingRequirementsFulfilled(
  args: InferRequestType<typeof client.api.v2.routing.requirements.fulfilled.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.routing.requirements.fulfilled.$get(args, options))
}

export async function getApiV2RoutingTicketsTicketIdInstanceValues(
  args: InferRequestType<
    (typeof client.api.v2.routing.tickets)[':ticket_id']['instance_values']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.routing.tickets[':ticket_id'].instance_values.$get(args, options),
  )
}

export async function postApiV2RoutingTicketsTicketIdInstanceValues(
  args: InferRequestType<
    (typeof client.api.v2.routing.tickets)[':ticket_id']['instance_values']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.routing.tickets[':ticket_id'].instance_values.$post(args, options),
  )
}

export async function getApiV2SatisfactionRatings(
  args: InferRequestType<typeof client.api.v2.satisfaction_ratings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.satisfaction_ratings.$get(args, options))
}

export async function getApiV2SatisfactionRatingsSatisfactionRatingId(
  args: InferRequestType<
    (typeof client.api.v2.satisfaction_ratings)[':satisfaction_rating_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.satisfaction_ratings[':satisfaction_rating_id'].$get(args, options),
  )
}

export async function getApiV2SatisfactionRatingsCount(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.satisfaction_ratings.count.$get(undefined, options))
}

export async function getApiV2SatisfactionReasons(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.satisfaction_reasons.$get(undefined, options))
}

export async function getApiV2SatisfactionReasonsSatisfactionReasonId(
  args: InferRequestType<
    (typeof client.api.v2.satisfaction_reasons)[':satisfaction_reason_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.satisfaction_reasons[':satisfaction_reason_id'].$get(args, options),
  )
}

export async function getApiV2SavedSearches(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.saved_searches.$get(undefined, options))
}

export async function postApiV2SavedSearches(
  args: InferRequestType<typeof client.api.v2.saved_searches.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.saved_searches.$post(args, options))
}

export async function putApiV2SavedSearchesId(
  args: InferRequestType<(typeof client.api.v2.saved_searches)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.saved_searches[':id'].$put(args, options))
}

export async function deleteApiV2SavedSearchesId(
  args: InferRequestType<(typeof client.api.v2.saved_searches)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.saved_searches[':id'].$delete(args, options))
}

export async function getApiV2Search(
  args: InferRequestType<typeof client.api.v2.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.search.$get(args, options))
}

export async function getApiV2SearchCount(
  args: InferRequestType<typeof client.api.v2.search.count.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.search.count.$get(args, options))
}

export async function getApiV2SearchExport(
  args: InferRequestType<typeof client.api.v2.search.export.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.search.export.$get(args, options))
}

export async function getApiV2SecuritySettings(
  args: InferRequestType<typeof client.api.v2.security_settings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.security_settings.$get(args, options))
}

export async function getApiV2Sessions(
  args: InferRequestType<typeof client.api.v2.sessions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.sessions.$get(args, options))
}

export async function getApiV2SharingAgreements(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.sharing_agreements.$get(undefined, options))
}

export async function postApiV2SharingAgreements(
  args: InferRequestType<typeof client.api.v2.sharing_agreements.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.sharing_agreements.$post(args, options))
}

export async function getApiV2SharingAgreementsSharingAgreementId(
  args: InferRequestType<
    (typeof client.api.v2.sharing_agreements)[':sharing_agreement_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.sharing_agreements[':sharing_agreement_id'].$get(args, options),
  )
}

export async function putApiV2SharingAgreementsSharingAgreementId(
  args: InferRequestType<
    (typeof client.api.v2.sharing_agreements)[':sharing_agreement_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.sharing_agreements[':sharing_agreement_id'].$put(args, options),
  )
}

export async function deleteApiV2SharingAgreementsSharingAgreementId(
  args: InferRequestType<
    (typeof client.api.v2.sharing_agreements)[':sharing_agreement_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.sharing_agreements[':sharing_agreement_id'].$delete(args, options),
  )
}

export async function getApiV2Skips(
  args: InferRequestType<typeof client.api.v2.skips.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.skips.$get(args, options))
}

export async function postApiV2Skips(
  args: InferRequestType<typeof client.api.v2.skips.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.skips.$post(args, options))
}

export async function getApiV2SlasPolicies(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.slas.policies.$get(undefined, options))
}

export async function postApiV2SlasPolicies(
  args: InferRequestType<typeof client.api.v2.slas.policies.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.slas.policies.$post(args, options))
}

export async function getApiV2SlasPoliciesSlaPolicyId(
  args: InferRequestType<(typeof client.api.v2.slas.policies)[':sla_policy_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.slas.policies[':sla_policy_id'].$get(args, options))
}

export async function putApiV2SlasPoliciesSlaPolicyId(
  args: InferRequestType<(typeof client.api.v2.slas.policies)[':sla_policy_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.slas.policies[':sla_policy_id'].$put(args, options))
}

export async function deleteApiV2SlasPoliciesSlaPolicyId(
  args: InferRequestType<(typeof client.api.v2.slas.policies)[':sla_policy_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.slas.policies[':sla_policy_id'].$delete(args, options))
}

export async function getApiV2SlasPoliciesDefinitions(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.slas.policies.definitions.$get(undefined, options))
}

export async function putApiV2SlasPoliciesReorder(
  args: InferRequestType<typeof client.api.v2.slas.policies.reorder.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.slas.policies.reorder.$put(args, options))
}

export async function getApiV2SuspendedTickets(
  args: InferRequestType<typeof client.api.v2.suspended_tickets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.suspended_tickets.$get(args, options))
}

export async function getApiV2SuspendedTicketsId(
  args: InferRequestType<(typeof client.api.v2.suspended_tickets)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.suspended_tickets[':id'].$get(args, options))
}

export async function deleteApiV2SuspendedTicketsId(
  args: InferRequestType<(typeof client.api.v2.suspended_tickets)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.suspended_tickets[':id'].$delete(args, options))
}

export async function putApiV2SuspendedTicketsIdRecover(
  args: InferRequestType<(typeof client.api.v2.suspended_tickets)[':id']['recover']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.suspended_tickets[':id'].recover.$put(args, options))
}

export async function postApiV2SuspendedTicketsAttachments(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.suspended_tickets.attachments.$post(undefined, options))
}

export async function putApiV2SuspendedTicketsBulkRecover(
  args: InferRequestType<typeof client.api.v2.suspended_tickets.bulk_recover.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.suspended_tickets.bulk_recover.$put(args, options))
}

export async function deleteApiV2SuspendedTicketsDestroyMany(
  args: InferRequestType<typeof client.api.v2.suspended_tickets.destroy_many.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.suspended_tickets.destroy_many.$delete(args, options))
}

export async function postApiV2SuspendedTicketsExport(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.suspended_tickets.export.$post(undefined, options))
}

export async function putApiV2SuspendedTicketsRecoverMany(
  args: InferRequestType<typeof client.api.v2.suspended_tickets.recover_many.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.suspended_tickets.recover_many.$put(args, options))
}

export async function getApiV2Tags(
  args: InferRequestType<typeof client.api.v2.tags.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.tags.$get(args, options))
}

export async function getApiV2TagsCount(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.tags.count.$get(undefined, options))
}

export async function getApiV2TargetFailures(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.target_failures.$get(undefined, options))
}

export async function getApiV2TargetFailuresTargetFailureId(
  args: InferRequestType<(typeof client.api.v2.target_failures)[':target_failure_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.target_failures[':target_failure_id'].$get(args, options),
  )
}

export async function getApiV2Targets(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.targets.$get(undefined, options))
}

export async function postApiV2Targets(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.targets.$post(undefined, options))
}

export async function getApiV2TargetsTargetId(
  args: InferRequestType<(typeof client.api.v2.targets)[':target_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.targets[':target_id'].$get(args, options))
}

export async function putApiV2TargetsTargetId(
  args: InferRequestType<(typeof client.api.v2.targets)[':target_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.targets[':target_id'].$put(args, options))
}

export async function deleteApiV2TargetsTargetId(
  args: InferRequestType<(typeof client.api.v2.targets)[':target_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.targets[':target_id'].$delete(args, options))
}

export async function getApiV2TaskListTemplates(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.task_list_templates.$get(undefined, options))
}

export async function postApiV2TaskListTemplates(
  args: InferRequestType<typeof client.api.v2.task_list_templates.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.task_list_templates.$post(args, options))
}

export async function getApiV2TaskListTemplatesTaskListTemplateId(
  args: InferRequestType<
    (typeof client.api.v2.task_list_templates)[':task_list_template_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.task_list_templates[':task_list_template_id'].$get(args, options),
  )
}

export async function putApiV2TaskListTemplatesTaskListTemplateId(
  args: InferRequestType<
    (typeof client.api.v2.task_list_templates)[':task_list_template_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.task_list_templates[':task_list_template_id'].$put(args, options),
  )
}

export async function deleteApiV2TaskListTemplatesTaskListTemplateId(
  args: InferRequestType<
    (typeof client.api.v2.task_list_templates)[':task_list_template_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.task_list_templates[':task_list_template_id'].$delete(args, options),
  )
}

export async function getApiV2TaskListTemplatesTaskListTemplateIdTasks(
  args: InferRequestType<
    (typeof client.api.v2.task_list_templates)[':task_list_template_id']['tasks']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.task_list_templates[':task_list_template_id'].tasks.$get(args, options),
  )
}

export async function getApiV2TaskListsTaskListId(
  args: InferRequestType<(typeof client.api.v2.task_lists)[':task_list_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.task_lists[':task_list_id'].$get(args, options))
}

export async function putApiV2TaskListsTaskListId(
  args: InferRequestType<(typeof client.api.v2.task_lists)[':task_list_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.task_lists[':task_list_id'].$put(args, options))
}

export async function deleteApiV2TaskListsTaskListId(
  args: InferRequestType<(typeof client.api.v2.task_lists)[':task_list_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.task_lists[':task_list_id'].$delete(args, options))
}

export async function getApiV2TaskListsTaskListIdTaskItems(
  args: InferRequestType<(typeof client.api.v2.task_lists)[':task_list_id']['task_items']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.task_lists[':task_list_id'].task_items.$get(args, options),
  )
}

export async function postApiV2TaskListsTaskListIdTaskItems(
  args: InferRequestType<(typeof client.api.v2.task_lists)[':task_list_id']['task_items']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.task_lists[':task_list_id'].task_items.$post(args, options),
  )
}

export async function getApiV2TaskListsTaskListIdTaskItemsTaskItemId(
  args: InferRequestType<
    (typeof client.api.v2.task_lists)[':task_list_id']['task_items'][':task_item_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.task_lists[':task_list_id'].task_items[':task_item_id'].$get(args, options),
  )
}

export async function putApiV2TaskListsTaskListIdTaskItemsTaskItemId(
  args: InferRequestType<
    (typeof client.api.v2.task_lists)[':task_list_id']['task_items'][':task_item_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.task_lists[':task_list_id'].task_items[':task_item_id'].$put(args, options),
  )
}

export async function deleteApiV2TaskListsTaskListIdTaskItemsTaskItemId(
  args: InferRequestType<
    (typeof client.api.v2.task_lists)[':task_list_id']['task_items'][':task_item_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.task_lists[':task_list_id'].task_items[':task_item_id'].$delete(args, options),
  )
}

export async function getApiV2TicketAudits(
  args: InferRequestType<typeof client.api.v2.ticket_audits.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.ticket_audits.$get(args, options))
}

export async function getApiV2TicketContentPins(
  args: InferRequestType<typeof client.api.v2.ticket_content_pins.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.ticket_content_pins.$get(args, options))
}

export async function postApiV2TicketContentPins(
  args: InferRequestType<typeof client.api.v2.ticket_content_pins.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.ticket_content_pins.$post(args, options))
}

export async function deleteApiV2TicketContentPinsContentPinId(
  args: InferRequestType<(typeof client.api.v2.ticket_content_pins)[':content_pin_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.ticket_content_pins[':content_pin_id'].$delete(args, options),
  )
}

export async function getApiV2TicketFields(
  args: InferRequestType<typeof client.api.v2.ticket_fields.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.ticket_fields.$get(args, options))
}

export async function postApiV2TicketFields(
  args: InferRequestType<typeof client.api.v2.ticket_fields.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.ticket_fields.$post(args, options))
}

export async function getApiV2TicketFieldsTicketFieldId(
  args: InferRequestType<(typeof client.api.v2.ticket_fields)[':ticket_field_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.ticket_fields[':ticket_field_id'].$get(args, options))
}

export async function putApiV2TicketFieldsTicketFieldId(
  args: InferRequestType<(typeof client.api.v2.ticket_fields)[':ticket_field_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.ticket_fields[':ticket_field_id'].$put(args, options))
}

export async function deleteApiV2TicketFieldsTicketFieldId(
  args: InferRequestType<(typeof client.api.v2.ticket_fields)[':ticket_field_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.ticket_fields[':ticket_field_id'].$delete(args, options))
}

export async function getApiV2TicketFieldsTicketFieldIdOptions(
  args: InferRequestType<
    (typeof client.api.v2.ticket_fields)[':ticket_field_id']['options']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.ticket_fields[':ticket_field_id'].options.$get(args, options),
  )
}

export async function postApiV2TicketFieldsTicketFieldIdOptions(
  args: InferRequestType<
    (typeof client.api.v2.ticket_fields)[':ticket_field_id']['options']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.ticket_fields[':ticket_field_id'].options.$post(args, options),
  )
}

export async function getApiV2TicketFieldsTicketFieldIdOptionsTicketFieldOptionId(
  args: InferRequestType<
    (typeof client.api.v2.ticket_fields)[':ticket_field_id']['options'][':ticket_field_option_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.ticket_fields[':ticket_field_id'].options[':ticket_field_option_id'].$get(
      args,
      options,
    ),
  )
}

export async function deleteApiV2TicketFieldsTicketFieldIdOptionsTicketFieldOptionId(
  args: InferRequestType<
    (typeof client.api.v2.ticket_fields)[':ticket_field_id']['options'][':ticket_field_option_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.ticket_fields[':ticket_field_id'].options[':ticket_field_option_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getApiV2TicketFieldsCount(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.ticket_fields.count.$get(undefined, options))
}

export async function putApiV2TicketFieldsReorder(
  args: InferRequestType<typeof client.api.v2.ticket_fields.reorder.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.ticket_fields.reorder.$put(args, options))
}

export async function getApiV2TicketFieldsShowMany(
  args: InferRequestType<typeof client.api.v2.ticket_fields.show_many.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.ticket_fields.show_many.$get(args, options))
}

export async function getApiV2TicketFormStatuses(
  args: InferRequestType<typeof client.api.v2.ticket_form_statuses.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.ticket_form_statuses.$get(args, options))
}

export async function getApiV2TicketFormStatusesShowMany(
  args: InferRequestType<typeof client.api.v2.ticket_form_statuses.show_many.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.ticket_form_statuses.show_many.$get(args, options))
}

export async function getApiV2TicketForms(
  args: InferRequestType<typeof client.api.v2.ticket_forms.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.ticket_forms.$get(args, options))
}

export async function postApiV2TicketForms(
  args: InferRequestType<typeof client.api.v2.ticket_forms.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.ticket_forms.$post(args, options))
}

export async function getApiV2TicketFormsTicketFormId(
  args: InferRequestType<(typeof client.api.v2.ticket_forms)[':ticket_form_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.ticket_forms[':ticket_form_id'].$get(args, options))
}

export async function putApiV2TicketFormsTicketFormId(
  args: InferRequestType<(typeof client.api.v2.ticket_forms)[':ticket_form_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.ticket_forms[':ticket_form_id'].$put(args, options))
}

export async function deleteApiV2TicketFormsTicketFormId(
  args: InferRequestType<(typeof client.api.v2.ticket_forms)[':ticket_form_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.ticket_forms[':ticket_form_id'].$delete(args, options))
}

export async function postApiV2TicketFormsTicketFormIdClone(
  args: InferRequestType<(typeof client.api.v2.ticket_forms)[':ticket_form_id']['clone']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.ticket_forms[':ticket_form_id'].clone.$post(args, options),
  )
}

export async function getApiV2TicketFormsTicketFormIdTicketFormStatuses(
  args: InferRequestType<
    (typeof client.api.v2.ticket_forms)[':ticket_form_id']['ticket_form_statuses']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.ticket_forms[':ticket_form_id'].ticket_form_statuses.$get(args, options),
  )
}

export async function putApiV2TicketFormsTicketFormIdTicketFormStatuses(
  args: InferRequestType<
    (typeof client.api.v2.ticket_forms)[':ticket_form_id']['ticket_form_statuses']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.ticket_forms[':ticket_form_id'].ticket_form_statuses.$put(args, options),
  )
}

export async function postApiV2TicketFormsTicketFormIdTicketFormStatuses(
  args: InferRequestType<
    (typeof client.api.v2.ticket_forms)[':ticket_form_id']['ticket_form_statuses']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.ticket_forms[':ticket_form_id'].ticket_form_statuses.$post(args, options),
  )
}

export async function deleteApiV2TicketFormsTicketFormIdTicketFormStatuses(
  args: InferRequestType<
    (typeof client.api.v2.ticket_forms)[':ticket_form_id']['ticket_form_statuses']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.ticket_forms[':ticket_form_id'].ticket_form_statuses.$delete(args, options),
  )
}

export async function putApiV2TicketFormsTicketFormIdTicketFormStatusesTicketFormStatusId(
  args: InferRequestType<
    (typeof client.api.v2.ticket_forms)[':ticket_form_id']['ticket_form_statuses'][':ticket_form_status_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.ticket_forms[':ticket_form_id'].ticket_form_statuses[
      ':ticket_form_status_id'
    ].$put(args, options),
  )
}

export async function deleteApiV2TicketFormsTicketFormIdTicketFormStatusesTicketFormStatusId(
  args: InferRequestType<
    (typeof client.api.v2.ticket_forms)[':ticket_form_id']['ticket_form_statuses'][':ticket_form_status_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.ticket_forms[':ticket_form_id'].ticket_form_statuses[
      ':ticket_form_status_id'
    ].$delete(args, options),
  )
}

export async function putApiV2TicketFormsReorder(
  args: InferRequestType<typeof client.api.v2.ticket_forms.reorder.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.ticket_forms.reorder.$put(args, options))
}

export async function getApiV2TicketFormsShowMany(
  args: InferRequestType<typeof client.api.v2.ticket_forms.show_many.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.ticket_forms.show_many.$get(args, options))
}

export async function getApiV2TicketMetrics(
  args: InferRequestType<typeof client.api.v2.ticket_metrics.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.ticket_metrics.$get(args, options))
}

export async function getApiV2TicketMetricsTicketMetricId(
  args: InferRequestType<(typeof client.api.v2.ticket_metrics)[':ticket_metric_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.ticket_metrics[':ticket_metric_id'].$get(args, options))
}

export async function getApiV2Tickets(
  args: InferRequestType<typeof client.api.v2.tickets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.tickets.$get(args, options))
}

export async function postApiV2Tickets(
  args: InferRequestType<typeof client.api.v2.tickets.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.tickets.$post(args, options))
}

export async function getApiV2TicketsTicketId(
  args: InferRequestType<(typeof client.api.v2.tickets)[':ticket_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.tickets[':ticket_id'].$get(args, options))
}

export async function putApiV2TicketsTicketId(
  args: InferRequestType<(typeof client.api.v2.tickets)[':ticket_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.tickets[':ticket_id'].$put(args, options))
}

export async function deleteApiV2TicketsTicketId(
  args: InferRequestType<(typeof client.api.v2.tickets)[':ticket_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.tickets[':ticket_id'].$delete(args, options))
}

export async function getApiV2TicketsTicketIdAudits(
  args: InferRequestType<(typeof client.api.v2.tickets)[':ticket_id']['audits']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.tickets[':ticket_id'].audits.$get(args, options))
}

export async function getApiV2TicketsTicketIdAuditsTicketAuditId(
  args: InferRequestType<
    (typeof client.api.v2.tickets)[':ticket_id']['audits'][':ticket_audit_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.tickets[':ticket_id'].audits[':ticket_audit_id'].$get(args, options),
  )
}

export async function putApiV2TicketsTicketIdAuditsTicketAuditIdMakePrivate(
  args: InferRequestType<
    (typeof client.api.v2.tickets)[':ticket_id']['audits'][':ticket_audit_id']['make_private']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.tickets[':ticket_id'].audits[':ticket_audit_id'].make_private.$put(args, options),
  )
}

export async function getApiV2TicketsTicketIdAuditsCount(
  args: InferRequestType<(typeof client.api.v2.tickets)[':ticket_id']['audits']['count']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.tickets[':ticket_id'].audits.count.$get(args, options))
}

export async function getApiV2TicketsTicketIdCollaborators(
  args: InferRequestType<(typeof client.api.v2.tickets)[':ticket_id']['collaborators']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.tickets[':ticket_id'].collaborators.$get(args, options))
}

export async function getApiV2TicketsTicketIdComments(
  args: InferRequestType<(typeof client.api.v2.tickets)[':ticket_id']['comments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.tickets[':ticket_id'].comments.$get(args, options))
}

export async function putApiV2TicketsTicketIdCommentsCommentIdAttachmentsAttachmentIdRedact(
  args: InferRequestType<
    (typeof client.api.v2.tickets)[':ticket_id']['comments'][':comment_id']['attachments'][':attachment_id']['redact']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.tickets[':ticket_id'].comments[':comment_id'].attachments[
      ':attachment_id'
    ].redact.$put(args, options),
  )
}

export async function putApiV2TicketsTicketIdCommentsTicketCommentIdMakePrivate(
  args: InferRequestType<
    (typeof client.api.v2.tickets)[':ticket_id']['comments'][':ticket_comment_id']['make_private']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.tickets[':ticket_id'].comments[':ticket_comment_id'].make_private.$put(
      args,
      options,
    ),
  )
}

export async function putApiV2TicketsTicketIdCommentsTicketCommentIdRedact(
  args: InferRequestType<
    (typeof client.api.v2.tickets)[':ticket_id']['comments'][':ticket_comment_id']['redact']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.tickets[':ticket_id'].comments[':ticket_comment_id'].redact.$put(args, options),
  )
}

export async function getApiV2TicketsTicketIdCommentsCount(
  args: InferRequestType<(typeof client.api.v2.tickets)[':ticket_id']['comments']['count']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.tickets[':ticket_id'].comments.count.$get(args, options))
}

export async function getApiV2TicketsTicketIdConversationLog(
  args: InferRequestType<(typeof client.api.v2.tickets)[':ticket_id']['conversation_log']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.tickets[':ticket_id'].conversation_log.$get(args, options),
  )
}

export async function getApiV2TicketsTicketIdEmailCcs(
  args: InferRequestType<(typeof client.api.v2.tickets)[':ticket_id']['email_ccs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.tickets[':ticket_id'].email_ccs.$get(args, options))
}

export async function getApiV2TicketsTicketIdFollowers(
  args: InferRequestType<(typeof client.api.v2.tickets)[':ticket_id']['followers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.tickets[':ticket_id'].followers.$get(args, options))
}

export async function getApiV2TicketsTicketIdGroupSlasPolicyMetrics(
  args: InferRequestType<
    (typeof client.api.v2.tickets)[':ticket_id']['group_slas']['policy_metrics']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.tickets[':ticket_id'].group_slas.policy_metrics.$get(args, options),
  )
}

export async function getApiV2TicketsTicketIdIncidents(
  args: InferRequestType<(typeof client.api.v2.tickets)[':ticket_id']['incidents']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.tickets[':ticket_id'].incidents.$get(args, options))
}

export async function getApiV2TicketsTicketIdMacrosMacroIdApply(
  args: InferRequestType<
    (typeof client.api.v2.tickets)[':ticket_id']['macros'][':macro_id']['apply']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.tickets[':ticket_id'].macros[':macro_id'].apply.$get(args, options),
  )
}

export async function putApiV2TicketsTicketIdMarkAsSpam(
  args: InferRequestType<(typeof client.api.v2.tickets)[':ticket_id']['mark_as_spam']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.tickets[':ticket_id'].mark_as_spam.$put(args, options))
}

export async function postApiV2TicketsTicketIdMerge(
  args: InferRequestType<(typeof client.api.v2.tickets)[':ticket_id']['merge']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.tickets[':ticket_id'].merge.$post(args, options))
}

export async function getApiV2TicketsTicketIdMetricEvents(
  args: InferRequestType<(typeof client.api.v2.tickets)[':ticket_id']['metric_events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.tickets[':ticket_id'].metric_events.$get(args, options))
}

export async function getApiV2TicketsTicketIdMetrics(
  args: InferRequestType<(typeof client.api.v2.tickets)[':ticket_id']['metrics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.tickets[':ticket_id'].metrics.$get(args, options))
}

export async function getApiV2TicketsTicketIdParentTicketTasks(
  args: InferRequestType<
    (typeof client.api.v2.tickets)[':ticket_id']['parent_ticket_tasks']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.tickets[':ticket_id'].parent_ticket_tasks.$get(args, options),
  )
}

export async function getApiV2TicketsTicketIdRelated(
  args: InferRequestType<(typeof client.api.v2.tickets)[':ticket_id']['related']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.tickets[':ticket_id'].related.$get(args, options))
}

export async function postApiV2TicketsTicketIdSatisfactionRating(
  args: InferRequestType<
    (typeof client.api.v2.tickets)[':ticket_id']['satisfaction_rating']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.tickets[':ticket_id'].satisfaction_rating.$post(args, options),
  )
}

export async function getApiV2TicketsTicketIdSkips(
  args: InferRequestType<(typeof client.api.v2.tickets)[':ticket_id']['skips']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.tickets[':ticket_id'].skips.$get(args, options))
}

export async function getApiV2TicketsTicketIdSlasPolicyMetrics(
  args: InferRequestType<
    (typeof client.api.v2.tickets)[':ticket_id']['slas']['policy_metrics']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.tickets[':ticket_id'].slas.policy_metrics.$get(args, options),
  )
}

export async function getApiV2TicketsTicketIdTags(
  args: InferRequestType<(typeof client.api.v2.tickets)[':ticket_id']['tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.tickets[':ticket_id'].tags.$get(args, options))
}

export async function putApiV2TicketsTicketIdTags(
  args: InferRequestType<(typeof client.api.v2.tickets)[':ticket_id']['tags']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.tickets[':ticket_id'].tags.$put(args, options))
}

export async function postApiV2TicketsTicketIdTags(
  args: InferRequestType<(typeof client.api.v2.tickets)[':ticket_id']['tags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.tickets[':ticket_id'].tags.$post(args, options))
}

export async function deleteApiV2TicketsTicketIdTags(
  args: InferRequestType<(typeof client.api.v2.tickets)[':ticket_id']['tags']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.tickets[':ticket_id'].tags.$delete(args, options))
}

export async function postApiV2TicketsTicketIdTaskItemsTaskItemIdSubticket(
  args: InferRequestType<
    (typeof client.api.v2.tickets)[':ticket_id']['task_items'][':task_item_id']['subticket']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.tickets[':ticket_id'].task_items[':task_item_id'].subticket.$post(args, options),
  )
}

export async function getApiV2TicketsTicketIdTaskItemsTaskItemIdTaskLinks(
  args: InferRequestType<
    (typeof client.api.v2.tickets)[':ticket_id']['task_items'][':task_item_id']['task_links']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.tickets[':ticket_id'].task_items[':task_item_id'].task_links.$get(args, options),
  )
}

export async function postApiV2TicketsTicketIdTaskItemsTaskItemIdTaskLinks(
  args: InferRequestType<
    (typeof client.api.v2.tickets)[':ticket_id']['task_items'][':task_item_id']['task_links']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.tickets[':ticket_id'].task_items[':task_item_id'].task_links.$post(args, options),
  )
}

export async function deleteApiV2TicketsTicketIdTaskItemsTaskItemIdTaskLinksTaskObjectLinkId(
  args: InferRequestType<
    (typeof client.api.v2.tickets)[':ticket_id']['task_items'][':task_item_id']['task_links'][':task_object_link_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.tickets[':ticket_id'].task_items[':task_item_id'].task_links[
      ':task_object_link_id'
    ].$delete(args, options),
  )
}

export async function getApiV2TicketsTicketIdTaskLists(
  args: InferRequestType<(typeof client.api.v2.tickets)[':ticket_id']['task_lists']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.tickets[':ticket_id'].task_lists.$get(args, options))
}

export async function postApiV2TicketsTicketIdTaskLists(
  args: InferRequestType<(typeof client.api.v2.tickets)[':ticket_id']['task_lists']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.tickets[':ticket_id'].task_lists.$post(args, options))
}

export async function getApiV2TicketsAutocomplete(
  args: InferRequestType<typeof client.api.v2.tickets.autocomplete.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.tickets.autocomplete.$get(args, options))
}

export async function getApiV2TicketsCount(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.tickets.count.$get(undefined, options))
}

export async function postApiV2TicketsCreateMany(
  args: InferRequestType<typeof client.api.v2.tickets.create_many.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.tickets.create_many.$post(args, options))
}

export async function deleteApiV2TicketsDestroyMany(
  args: InferRequestType<typeof client.api.v2.tickets.destroy_many.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.tickets.destroy_many.$delete(args, options))
}

export async function putApiV2TicketsMarkManyAsSpam(
  args: InferRequestType<typeof client.api.v2.tickets.mark_many_as_spam.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.tickets.mark_many_as_spam.$put(args, options))
}

export async function getApiV2TicketsMessagingConversationsConversationIdTicket(
  args: InferRequestType<
    (typeof client.api.v2.tickets.messaging.conversations)[':conversation_id']['ticket']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.tickets.messaging.conversations[':conversation_id'].ticket.$get(args, options),
  )
}

export async function getApiV2TicketsRecent(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.tickets.recent.$get(undefined, options))
}

export async function getApiV2TicketsShowMany(
  args: InferRequestType<typeof client.api.v2.tickets.show_many.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.tickets.show_many.$get(args, options))
}

export async function putApiV2TicketsUpdateMany(
  args: InferRequestType<typeof client.api.v2.tickets.update_many.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.tickets.update_many.$put(args, options))
}

export async function getApiV2TriggerCategories(
  args: InferRequestType<typeof client.api.v2.trigger_categories.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.trigger_categories.$get(args, options))
}

export async function postApiV2TriggerCategories(
  args: InferRequestType<typeof client.api.v2.trigger_categories.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.trigger_categories.$post(args, options))
}

export async function getApiV2TriggerCategoriesTriggerCategoryId(
  args: InferRequestType<(typeof client.api.v2.trigger_categories)[':trigger_category_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.trigger_categories[':trigger_category_id'].$get(args, options),
  )
}

export async function deleteApiV2TriggerCategoriesTriggerCategoryId(
  args: InferRequestType<
    (typeof client.api.v2.trigger_categories)[':trigger_category_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.trigger_categories[':trigger_category_id'].$delete(args, options),
  )
}

export async function patchApiV2TriggerCategoriesTriggerCategoryId(
  args: InferRequestType<
    (typeof client.api.v2.trigger_categories)[':trigger_category_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.trigger_categories[':trigger_category_id'].$patch(args, options),
  )
}

export async function postApiV2TriggerCategoriesJobs(
  args: InferRequestType<typeof client.api.v2.trigger_categories.jobs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.trigger_categories.jobs.$post(args, options))
}

export async function getApiV2Triggers(
  args: InferRequestType<typeof client.api.v2.triggers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.triggers.$get(args, options))
}

export async function postApiV2Triggers(
  args: InferRequestType<typeof client.api.v2.triggers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.triggers.$post(args, options))
}

export async function getApiV2TriggersTriggerId(
  args: InferRequestType<(typeof client.api.v2.triggers)[':trigger_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.triggers[':trigger_id'].$get(args, options))
}

export async function putApiV2TriggersTriggerId(
  args: InferRequestType<(typeof client.api.v2.triggers)[':trigger_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.triggers[':trigger_id'].$put(args, options))
}

export async function deleteApiV2TriggersTriggerId(
  args: InferRequestType<(typeof client.api.v2.triggers)[':trigger_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.triggers[':trigger_id'].$delete(args, options))
}

export async function getApiV2TriggersTriggerIdRevisions(
  args: InferRequestType<(typeof client.api.v2.triggers)[':trigger_id']['revisions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.triggers[':trigger_id'].revisions.$get(args, options))
}

export async function getApiV2TriggersTriggerIdRevisionsTriggerRevisionId(
  args: InferRequestType<
    (typeof client.api.v2.triggers)[':trigger_id']['revisions'][':trigger_revision_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.triggers[':trigger_id'].revisions[':trigger_revision_id'].$get(args, options),
  )
}

export async function getApiV2TriggersActive(
  args: InferRequestType<typeof client.api.v2.triggers.active.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.triggers.active.$get(args, options))
}

export async function getApiV2TriggersDefinitions(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.triggers.definitions.$get(undefined, options))
}

export async function deleteApiV2TriggersDestroyMany(
  args: InferRequestType<typeof client.api.v2.triggers.destroy_many.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.triggers.destroy_many.$delete(args, options))
}

export async function getApiV2TriggersLimits(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.triggers.limits.$get(undefined, options))
}

export async function putApiV2TriggersReorder(
  args: InferRequestType<typeof client.api.v2.triggers.reorder.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.triggers.reorder.$put(args, options))
}

export async function getApiV2TriggersSearch(
  args: InferRequestType<typeof client.api.v2.triggers.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.triggers.search.$get(args, options))
}

export async function putApiV2TriggersUpdateMany(
  args: InferRequestType<typeof client.api.v2.triggers.update_many.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.triggers.update_many.$put(args, options))
}

export async function postApiV2TriggersValidate(
  args: InferRequestType<typeof client.api.v2.triggers.validate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.triggers.validate.$post(args, options))
}

export async function postApiV2Uploads(
  args: InferRequestType<typeof client.api.v2.uploads.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.uploads.$post(args, options))
}

export async function deleteApiV2UploadsToken(
  args: InferRequestType<(typeof client.api.v2.uploads)[':token']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.uploads[':token'].$delete(args, options))
}

export async function getApiV2UserFields(
  args: InferRequestType<typeof client.api.v2.user_fields.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.user_fields.$get(args, options))
}

export async function postApiV2UserFields(
  args: InferRequestType<typeof client.api.v2.user_fields.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.user_fields.$post(args, options))
}

export async function getApiV2UserFieldsUserFieldId(
  args: InferRequestType<(typeof client.api.v2.user_fields)[':user_field_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.user_fields[':user_field_id'].$get(args, options))
}

export async function putApiV2UserFieldsUserFieldId(
  args: InferRequestType<(typeof client.api.v2.user_fields)[':user_field_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.user_fields[':user_field_id'].$put(args, options))
}

export async function deleteApiV2UserFieldsUserFieldId(
  args: InferRequestType<(typeof client.api.v2.user_fields)[':user_field_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.user_fields[':user_field_id'].$delete(args, options))
}

export async function getApiV2UserFieldsUserFieldIdOptions(
  args: InferRequestType<(typeof client.api.v2.user_fields)[':user_field_id']['options']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.user_fields[':user_field_id'].options.$get(args, options),
  )
}

export async function postApiV2UserFieldsUserFieldIdOptions(
  args: InferRequestType<(typeof client.api.v2.user_fields)[':user_field_id']['options']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.user_fields[':user_field_id'].options.$post(args, options),
  )
}

export async function getApiV2UserFieldsUserFieldIdOptionsUserFieldOptionId(
  args: InferRequestType<
    (typeof client.api.v2.user_fields)[':user_field_id']['options'][':user_field_option_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.user_fields[':user_field_id'].options[':user_field_option_id'].$get(
      args,
      options,
    ),
  )
}

export async function deleteApiV2UserFieldsUserFieldIdOptionsUserFieldOptionId(
  args: InferRequestType<
    (typeof client.api.v2.user_fields)[':user_field_id']['options'][':user_field_option_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.user_fields[':user_field_id'].options[':user_field_option_id'].$delete(
      args,
      options,
    ),
  )
}

export async function putApiV2UserFieldsReorder(
  args: InferRequestType<typeof client.api.v2.user_fields.reorder.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.user_fields.reorder.$put(args, options))
}

export async function getApiV2UserFieldsShowMany(
  args: InferRequestType<typeof client.api.v2.user_fields.show_many.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.user_fields.show_many.$get(args, options))
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

export async function putApiV2UsersUserId(
  args: InferRequestType<(typeof client.api.v2.users)[':user_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.users[':user_id'].$put(args, options))
}

export async function deleteApiV2UsersUserId(
  args: InferRequestType<(typeof client.api.v2.users)[':user_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.users[':user_id'].$delete(args, options))
}

export async function getApiV2UsersUserIdBrandAgents(
  args: InferRequestType<(typeof client.api.v2.users)[':user_id']['brand_agents']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.users[':user_id'].brand_agents.$get(args, options))
}

export async function getApiV2UsersUserIdBrandAgentsBrandAgentId(
  args: InferRequestType<
    (typeof client.api.v2.users)[':user_id']['brand_agents'][':brand_agent_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.users[':user_id'].brand_agents[':brand_agent_id'].$get(args, options),
  )
}

export async function getApiV2UsersUserIdComplianceDeletionStatuses(
  args: InferRequestType<
    (typeof client.api.v2.users)[':user_id']['compliance_deletion_statuses']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.users[':user_id'].compliance_deletion_statuses.$get(args, options),
  )
}

export async function getApiV2UsersUserIdEntitlementsFull(
  args: InferRequestType<(typeof client.api.v2.users)[':user_id']['entitlements']['full']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.users[':user_id'].entitlements.full.$get(args, options))
}

export async function getApiV2UsersUserIdGroupMemberships(
  args: InferRequestType<(typeof client.api.v2.users)[':user_id']['group_memberships']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.users[':user_id'].group_memberships.$get(args, options))
}

export async function postApiV2UsersUserIdGroupMemberships(
  args: InferRequestType<(typeof client.api.v2.users)[':user_id']['group_memberships']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.users[':user_id'].group_memberships.$post(args, options))
}

export async function getApiV2UsersUserIdGroupMembershipsGroupMembershipId(
  args: InferRequestType<
    (typeof client.api.v2.users)[':user_id']['group_memberships'][':group_membership_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.users[':user_id'].group_memberships[':group_membership_id'].$get(args, options),
  )
}

export async function deleteApiV2UsersUserIdGroupMembershipsGroupMembershipId(
  args: InferRequestType<
    (typeof client.api.v2.users)[':user_id']['group_memberships'][':group_membership_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.users[':user_id'].group_memberships[':group_membership_id'].$delete(
      args,
      options,
    ),
  )
}

export async function putApiV2UsersUserIdGroupMembershipsGroupMembershipIdMakeDefault(
  args: InferRequestType<
    (typeof client.api.v2.users)[':user_id']['group_memberships'][':group_membership_id']['make_default']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.users[':user_id'].group_memberships[':group_membership_id'].make_default.$put(
      args,
      options,
    ),
  )
}

export async function getApiV2UsersUserIdGroups(
  args: InferRequestType<(typeof client.api.v2.users)[':user_id']['groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.users[':user_id'].groups.$get(args, options))
}

export async function getApiV2UsersUserIdGroupsCount(
  args: InferRequestType<(typeof client.api.v2.users)[':user_id']['groups']['count']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.users[':user_id'].groups.count.$get(args, options))
}

export async function getApiV2UsersUserIdIdentities(
  args: InferRequestType<(typeof client.api.v2.users)[':user_id']['identities']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.users[':user_id'].identities.$get(args, options))
}

export async function postApiV2UsersUserIdIdentities(
  args: InferRequestType<(typeof client.api.v2.users)[':user_id']['identities']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.users[':user_id'].identities.$post(args, options))
}

export async function getApiV2UsersUserIdIdentitiesUserIdentityId(
  args: InferRequestType<
    (typeof client.api.v2.users)[':user_id']['identities'][':user_identity_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.users[':user_id'].identities[':user_identity_id'].$get(args, options),
  )
}

export async function putApiV2UsersUserIdIdentitiesUserIdentityId(
  args: InferRequestType<
    (typeof client.api.v2.users)[':user_id']['identities'][':user_identity_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.users[':user_id'].identities[':user_identity_id'].$put(args, options),
  )
}

export async function deleteApiV2UsersUserIdIdentitiesUserIdentityId(
  args: InferRequestType<
    (typeof client.api.v2.users)[':user_id']['identities'][':user_identity_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.users[':user_id'].identities[':user_identity_id'].$delete(args, options),
  )
}

export async function putApiV2UsersUserIdIdentitiesUserIdentityIdMakePrimary(
  args: InferRequestType<
    (typeof client.api.v2.users)[':user_id']['identities'][':user_identity_id']['make_primary']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.users[':user_id'].identities[':user_identity_id'].make_primary.$put(
      args,
      options,
    ),
  )
}

export async function putApiV2UsersUserIdIdentitiesUserIdentityIdRequestVerification(
  args: InferRequestType<
    (typeof client.api.v2.users)[':user_id']['identities'][':user_identity_id']['request_verification']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.users[':user_id'].identities[':user_identity_id'].request_verification.$put(
      args,
      options,
    ),
  )
}

export async function putApiV2UsersUserIdIdentitiesUserIdentityIdVerify(
  args: InferRequestType<
    (typeof client.api.v2.users)[':user_id']['identities'][':user_identity_id']['verify']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.users[':user_id'].identities[':user_identity_id'].verify.$put(args, options),
  )
}

export async function putApiV2UsersUserIdMerge(
  args: InferRequestType<(typeof client.api.v2.users)[':user_id']['merge']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.users[':user_id'].merge.$put(args, options))
}

export async function getApiV2UsersUserIdOrganizationMemberships(
  args: InferRequestType<
    (typeof client.api.v2.users)[':user_id']['organization_memberships']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.users[':user_id'].organization_memberships.$get(args, options),
  )
}

export async function postApiV2UsersUserIdOrganizationMemberships(
  args: InferRequestType<
    (typeof client.api.v2.users)[':user_id']['organization_memberships']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.users[':user_id'].organization_memberships.$post(args, options),
  )
}

export async function getApiV2UsersUserIdOrganizationMembershipsOrganizationMembershipId(
  args: InferRequestType<
    (typeof client.api.v2.users)[':user_id']['organization_memberships'][':organization_membership_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.users[':user_id'].organization_memberships[':organization_membership_id'].$get(
      args,
      options,
    ),
  )
}

export async function deleteApiV2UsersUserIdOrganizationMembershipsOrganizationMembershipId(
  args: InferRequestType<
    (typeof client.api.v2.users)[':user_id']['organization_memberships'][':organization_membership_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.users[':user_id'].organization_memberships[':organization_membership_id'].$delete(
      args,
      options,
    ),
  )
}

export async function putApiV2UsersUserIdOrganizationMembershipsOrganizationMembershipIdMakeDefault(
  args: InferRequestType<
    (typeof client.api.v2.users)[':user_id']['organization_memberships'][':organization_membership_id']['make_default']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.users[':user_id'].organization_memberships[
      ':organization_membership_id'
    ].make_default.$put(args, options),
  )
}

export async function getApiV2UsersUserIdOrganizationSubscriptions(
  args: InferRequestType<
    (typeof client.api.v2.users)[':user_id']['organization_subscriptions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.users[':user_id'].organization_subscriptions.$get(args, options),
  )
}

export async function getApiV2UsersUserIdOrganizations(
  args: InferRequestType<(typeof client.api.v2.users)[':user_id']['organizations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.users[':user_id'].organizations.$get(args, options))
}

export async function deleteApiV2UsersUserIdOrganizationsOrganizationId(
  args: InferRequestType<
    (typeof client.api.v2.users)[':user_id']['organizations'][':organization_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.users[':user_id'].organizations[':organization_id'].$delete(args, options),
  )
}

export async function putApiV2UsersUserIdOrganizationsOrganizationIdMakeDefault(
  args: InferRequestType<
    (typeof client.api.v2.users)[':user_id']['organizations'][':organization_id']['make_default']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.users[':user_id'].organizations[':organization_id'].make_default.$put(
      args,
      options,
    ),
  )
}

export async function getApiV2UsersUserIdOrganizationsCount(
  args: InferRequestType<
    (typeof client.api.v2.users)[':user_id']['organizations']['count']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.users[':user_id'].organizations.count.$get(args, options),
  )
}

export async function putApiV2UsersUserIdPassword(
  args: InferRequestType<(typeof client.api.v2.users)[':user_id']['password']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.users[':user_id'].password.$put(args, options))
}

export async function postApiV2UsersUserIdPassword(
  args: InferRequestType<(typeof client.api.v2.users)[':user_id']['password']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.users[':user_id'].password.$post(args, options))
}

export async function getApiV2UsersUserIdPasswordRequirements(
  args: InferRequestType<
    (typeof client.api.v2.users)[':user_id']['password']['requirements']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.users[':user_id'].password.requirements.$get(args, options),
  )
}

export async function getApiV2UsersUserIdRelated(
  args: InferRequestType<(typeof client.api.v2.users)[':user_id']['related']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.users[':user_id'].related.$get(args, options))
}

export async function getApiV2UsersUserIdRequests(
  args: InferRequestType<(typeof client.api.v2.users)[':user_id']['requests']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.users[':user_id'].requests.$get(args, options))
}

export async function getApiV2UsersUserIdSessions(
  args: InferRequestType<(typeof client.api.v2.users)[':user_id']['sessions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.users[':user_id'].sessions.$get(args, options))
}

export async function deleteApiV2UsersUserIdSessions(
  args: InferRequestType<(typeof client.api.v2.users)[':user_id']['sessions']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.users[':user_id'].sessions.$delete(args, options))
}

export async function getApiV2UsersUserIdSessionsSessionId(
  args: InferRequestType<
    (typeof client.api.v2.users)[':user_id']['sessions'][':session_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.users[':user_id'].sessions[':session_id'].$get(args, options),
  )
}

export async function deleteApiV2UsersUserIdSessionsSessionId(
  args: InferRequestType<
    (typeof client.api.v2.users)[':user_id']['sessions'][':session_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.users[':user_id'].sessions[':session_id'].$delete(args, options),
  )
}

export async function getApiV2UsersUserIdSkips(
  args: InferRequestType<(typeof client.api.v2.users)[':user_id']['skips']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.users[':user_id'].skips.$get(args, options))
}

export async function getApiV2UsersUserIdSuspension(
  args: InferRequestType<(typeof client.api.v2.users)[':user_id']['suspension']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.users[':user_id'].suspension.$get(args, options))
}

export async function putApiV2UsersUserIdSuspension(
  args: InferRequestType<(typeof client.api.v2.users)[':user_id']['suspension']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.users[':user_id'].suspension.$put(args, options))
}

export async function postApiV2UsersUserIdSuspension(
  args: InferRequestType<(typeof client.api.v2.users)[':user_id']['suspension']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.users[':user_id'].suspension.$post(args, options))
}

export async function deleteApiV2UsersUserIdSuspension(
  args: InferRequestType<(typeof client.api.v2.users)[':user_id']['suspension']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.users[':user_id'].suspension.$delete(args, options))
}

export async function getApiV2UsersUserIdTags(
  args: InferRequestType<(typeof client.api.v2.users)[':user_id']['tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.users[':user_id'].tags.$get(args, options))
}

export async function putApiV2UsersUserIdTags(
  args: InferRequestType<(typeof client.api.v2.users)[':user_id']['tags']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.users[':user_id'].tags.$put(args, options))
}

export async function postApiV2UsersUserIdTags(
  args: InferRequestType<(typeof client.api.v2.users)[':user_id']['tags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.users[':user_id'].tags.$post(args, options))
}

export async function deleteApiV2UsersUserIdTags(
  args: InferRequestType<(typeof client.api.v2.users)[':user_id']['tags']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.users[':user_id'].tags.$delete(args, options))
}

export async function getApiV2UsersUserIdTicketsAssigned(
  args: InferRequestType<(typeof client.api.v2.users)[':user_id']['tickets']['assigned']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.users[':user_id'].tickets.assigned.$get(args, options))
}

export async function getApiV2UsersUserIdTicketsAssignedCount(
  args: InferRequestType<
    (typeof client.api.v2.users)[':user_id']['tickets']['assigned']['count']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.users[':user_id'].tickets.assigned.count.$get(args, options),
  )
}

export async function getApiV2UsersUserIdTicketsCcd(
  args: InferRequestType<(typeof client.api.v2.users)[':user_id']['tickets']['ccd']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.users[':user_id'].tickets.ccd.$get(args, options))
}

export async function getApiV2UsersUserIdTicketsCcdCount(
  args: InferRequestType<
    (typeof client.api.v2.users)[':user_id']['tickets']['ccd']['count']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.users[':user_id'].tickets.ccd.count.$get(args, options))
}

export async function getApiV2UsersUserIdTicketsFollowed(
  args: InferRequestType<(typeof client.api.v2.users)[':user_id']['tickets']['followed']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.users[':user_id'].tickets.followed.$get(args, options))
}

export async function getApiV2UsersUserIdTicketsRequested(
  args: InferRequestType<(typeof client.api.v2.users)[':user_id']['tickets']['requested']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.users[':user_id'].tickets.requested.$get(args, options))
}

export async function getApiV2UsersAutocomplete(
  args: InferRequestType<typeof client.api.v2.users.autocomplete.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.users.autocomplete.$get(args, options))
}

export async function postApiV2UsersAutocomplete(
  args: InferRequestType<typeof client.api.v2.users.autocomplete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.users.autocomplete.$post(args, options))
}

export async function getApiV2UsersCount(
  args: InferRequestType<typeof client.api.v2.users.count.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.users.count.$get(args, options))
}

export async function postApiV2UsersCreateMany(
  args: InferRequestType<typeof client.api.v2.users.create_many.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.users.create_many.$post(args, options))
}

export async function postApiV2UsersCreateOrUpdate(
  args: InferRequestType<typeof client.api.v2.users.create_or_update.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.users.create_or_update.$post(args, options))
}

export async function postApiV2UsersCreateOrUpdateMany(
  args: InferRequestType<typeof client.api.v2.users.create_or_update_many.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.users.create_or_update_many.$post(args, options))
}

export async function deleteApiV2UsersDestroyMany(
  args: InferRequestType<typeof client.api.v2.users.destroy_many.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.users.destroy_many.$delete(args, options))
}

export async function postApiV2UsersLogoutMany(
  args: InferRequestType<typeof client.api.v2.users.logout_many.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.users.logout_many.$post(args, options))
}

export async function getApiV2UsersMe(
  args: InferRequestType<typeof client.api.v2.users.me.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.users.me.$get(args, options))
}

export async function deleteApiV2UsersMeLogout(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.users.me.logout.$delete(undefined, options))
}

export async function getApiV2UsersMeOauthClients(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.users.me.oauth.clients.$get(undefined, options))
}

export async function getApiV2UsersMeSession(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.users.me.session.$get(undefined, options))
}

export async function getApiV2UsersMeSessionRenew(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.users.me.session.renew.$get(undefined, options))
}

export async function getApiV2UsersMeSettings(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.users.me.settings.$get(undefined, options))
}

export async function putApiV2UsersMeSettings(
  args: InferRequestType<typeof client.api.v2.users.me.settings.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.users.me.settings.$put(args, options))
}

export async function postApiV2UsersRequestCreate(
  args: InferRequestType<typeof client.api.v2.users.request_create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.users.request_create.$post(args, options))
}

export async function getApiV2UsersSearch(
  args: InferRequestType<typeof client.api.v2.users.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.users.search.$get(args, options))
}

export async function getApiV2UsersShowMany(
  args: InferRequestType<typeof client.api.v2.users.show_many.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.users.show_many.$get(args, options))
}

export async function putApiV2UsersUpdateMany(
  args: InferRequestType<typeof client.api.v2.users.update_many.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.users.update_many.$put(args, options))
}

export async function getApiV2Views(
  args: InferRequestType<typeof client.api.v2.views.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.views.$get(args, options))
}

export async function postApiV2Views(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.views.$post(undefined, options))
}

export async function getApiV2ViewsViewId(
  args: InferRequestType<(typeof client.api.v2.views)[':view_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.views[':view_id'].$get(args, options))
}

export async function putApiV2ViewsViewId(
  args: InferRequestType<(typeof client.api.v2.views)[':view_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.views[':view_id'].$put(args, options))
}

export async function deleteApiV2ViewsViewId(
  args: InferRequestType<(typeof client.api.v2.views)[':view_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.views[':view_id'].$delete(args, options))
}

export async function getApiV2ViewsViewIdCount(
  args: InferRequestType<(typeof client.api.v2.views)[':view_id']['count']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.views[':view_id'].count.$get(args, options))
}

export async function getApiV2ViewsViewIdExecute(
  args: InferRequestType<(typeof client.api.v2.views)[':view_id']['execute']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.views[':view_id'].execute.$get(args, options))
}

export async function getApiV2ViewsViewIdExport(
  args: InferRequestType<(typeof client.api.v2.views)[':view_id']['export']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.views[':view_id'].export.$get(args, options))
}

export async function getApiV2ViewsViewIdTickets(
  args: InferRequestType<(typeof client.api.v2.views)[':view_id']['tickets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.views[':view_id'].tickets.$get(args, options))
}

export async function getApiV2ViewsActive(
  args: InferRequestType<typeof client.api.v2.views.active.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.views.active.$get(args, options))
}

export async function getApiV2ViewsCompact(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.views.compact.$get(undefined, options))
}

export async function getApiV2ViewsCount(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.views.count.$get(undefined, options))
}

export async function getApiV2ViewsCountMany(
  args: InferRequestType<typeof client.api.v2.views.count_many.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.views.count_many.$get(args, options))
}

export async function getApiV2ViewsDefinitions(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.views.definitions.$get(undefined, options))
}

export async function deleteApiV2ViewsDestroyMany(
  args: InferRequestType<typeof client.api.v2.views.destroy_many.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.views.destroy_many.$delete(args, options))
}

export async function postApiV2ViewsPreview(
  args: InferRequestType<typeof client.api.v2.views.preview.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.views.preview.$post(args, options))
}

export async function postApiV2ViewsPreviewCount(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.views.preview.count.$post(undefined, options))
}

export async function getApiV2ViewsSearch(
  args: InferRequestType<typeof client.api.v2.views.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.views.search.$get(args, options))
}

export async function getApiV2ViewsShowMany(
  args: InferRequestType<typeof client.api.v2.views.show_many.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.views.show_many.$get(args, options))
}

export async function putApiV2ViewsUpdateMany(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.views.update_many.$put(undefined, options))
}

export async function getApiV2Workspaces(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.workspaces.$get(undefined, options))
}

export async function postApiV2Workspaces(
  args: InferRequestType<typeof client.api.v2.workspaces.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.workspaces.$post(args, options))
}

export async function getApiV2WorkspacesWorkspaceId(
  args: InferRequestType<(typeof client.api.v2.workspaces)[':workspace_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.workspaces[':workspace_id'].$get(args, options))
}

export async function putApiV2WorkspacesWorkspaceId(
  args: InferRequestType<(typeof client.api.v2.workspaces)[':workspace_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.workspaces[':workspace_id'].$put(args, options))
}

export async function deleteApiV2WorkspacesWorkspaceId(
  args: InferRequestType<(typeof client.api.v2.workspaces)[':workspace_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.workspaces[':workspace_id'].$delete(args, options))
}

export async function deleteApiV2WorkspacesDestroyMany(
  args: InferRequestType<typeof client.api.v2.workspaces.destroy_many.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.workspaces.destroy_many.$delete(args, options))
}

export async function putApiV2WorkspacesReorder(
  args: InferRequestType<typeof client.api.v2.workspaces.reorder.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.workspaces.reorder.$put(args, options))
}

export async function postOauthTokens(options?: ClientRequestOptions) {
  return await parseResponse(client.oauth.tokens.$post(undefined, options))
}
