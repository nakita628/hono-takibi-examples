import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getEmails(
  args: InferRequestType<typeof client.emails.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.emails.$get(args, options))
}

export async function postEmails(
  args: InferRequestType<typeof client.emails.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.emails.$post(args, options))
}

export async function getEmailsEmailId(
  args: InferRequestType<(typeof client.emails)[':email_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.emails[':email_id'].$get(args, options))
}

export async function patchEmailsEmailId(
  args: InferRequestType<(typeof client.emails)[':email_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.emails[':email_id'].$patch(args, options))
}

export async function postEmailsEmailIdCancel(
  args: InferRequestType<(typeof client.emails)[':email_id']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.emails[':email_id'].cancel.$post(args, options))
}

export async function postEmailsEmailIdShare(
  args: InferRequestType<(typeof client.emails)[':email_id']['share']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.emails[':email_id'].share.$post(args, options))
}

export async function postEmailsBatch(
  args: InferRequestType<typeof client.emails.batch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.emails.batch.$post(args, options))
}

export async function getEmailsEmailIdAttachments(
  args: InferRequestType<(typeof client.emails)[':email_id']['attachments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.emails[':email_id'].attachments.$get(args, options))
}

export async function getEmailsEmailIdAttachmentsAttachmentId(
  args: InferRequestType<
    (typeof client.emails)[':email_id']['attachments'][':attachment_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.emails[':email_id'].attachments[':attachment_id'].$get(args, options),
  )
}

export async function getEmailsReceiving(
  args: InferRequestType<typeof client.emails.receiving.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.emails.receiving.$get(args, options))
}

export async function getEmailsReceivingEmailId(
  args: InferRequestType<(typeof client.emails.receiving)[':email_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.emails.receiving[':email_id'].$get(args, options))
}

export async function getEmailsReceivingEmailIdAttachments(
  args: InferRequestType<(typeof client.emails.receiving)[':email_id']['attachments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.emails.receiving[':email_id'].attachments.$get(args, options))
}

export async function getEmailsReceivingEmailIdAttachmentsAttachmentId(
  args: InferRequestType<
    (typeof client.emails.receiving)[':email_id']['attachments'][':attachment_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.emails.receiving[':email_id'].attachments[':attachment_id'].$get(args, options),
  )
}

export async function getEmailsMetrics(
  args: InferRequestType<typeof client.emails.metrics.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.emails.metrics.$get(args, options))
}

export async function getDomains(
  args: InferRequestType<typeof client.domains.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.domains.$get(args, options))
}

export async function postDomains(
  args: InferRequestType<typeof client.domains.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.domains.$post(args, options))
}

export async function getDomainsDomainId(
  args: InferRequestType<(typeof client.domains)[':domain_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.domains[':domain_id'].$get(args, options))
}

export async function deleteDomainsDomainId(
  args: InferRequestType<(typeof client.domains)[':domain_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.domains[':domain_id'].$delete(args, options))
}

export async function patchDomainsDomainId(
  args: InferRequestType<(typeof client.domains)[':domain_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.domains[':domain_id'].$patch(args, options))
}

export async function postDomainsDomainIdVerify(
  args: InferRequestType<(typeof client.domains)[':domain_id']['verify']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.domains[':domain_id'].verify.$post(args, options))
}

export async function postDomainsDomainIdForge(
  args: InferRequestType<(typeof client.domains)[':domain_id']['forge']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.domains[':domain_id'].forge.$post(args, options))
}

export async function postDomainsClaim(
  args: InferRequestType<typeof client.domains.claim.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.domains.claim.$post(args, options))
}

export async function getDomainsDomainIdClaim(
  args: InferRequestType<(typeof client.domains)[':domain_id']['claim']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.domains[':domain_id'].claim.$get(args, options))
}

export async function postDomainsDomainIdClaimVerify(
  args: InferRequestType<(typeof client.domains)[':domain_id']['claim']['verify']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.domains[':domain_id'].claim.verify.$post(args, options))
}

export async function getApiKeys(
  args: InferRequestType<(typeof client)['api-keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['api-keys'].$get(args, options))
}

export async function postApiKeys(
  args: InferRequestType<(typeof client)['api-keys']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['api-keys'].$post(args, options))
}

export async function deleteApiKeysApiKeyId(
  args: InferRequestType<(typeof client)['api-keys'][':api_key_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['api-keys'][':api_key_id'].$delete(args, options))
}

export async function patchApiKeysApiKeyId(
  args: InferRequestType<(typeof client)['api-keys'][':api_key_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['api-keys'][':api_key_id'].$patch(args, options))
}

export async function getOauthGrants(
  args: InferRequestType<typeof client.oauth.grants.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth.grants.$get(args, options))
}

export async function deleteOauthGrantsOauthGrantId(
  args: InferRequestType<(typeof client.oauth.grants)[':oauth_grant_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth.grants[':oauth_grant_id'].$delete(args, options))
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

export async function deleteTemplatesId(
  args: InferRequestType<(typeof client.templates)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates[':id'].$delete(args, options))
}

export async function patchTemplatesId(
  args: InferRequestType<(typeof client.templates)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates[':id'].$patch(args, options))
}

export async function postTemplatesIdPublish(
  args: InferRequestType<(typeof client.templates)[':id']['publish']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates[':id'].publish.$post(args, options))
}

export async function postTemplatesIdDuplicate(
  args: InferRequestType<(typeof client.templates)[':id']['duplicate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates[':id'].duplicate.$post(args, options))
}

export async function getAudiences(options?: ClientRequestOptions) {
  return await parseResponse(client.audiences.$get(undefined, options))
}

export async function postAudiences(
  args: InferRequestType<typeof client.audiences.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.audiences.$post(args, options))
}

export async function getAudiencesId(
  args: InferRequestType<(typeof client.audiences)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.audiences[':id'].$get(args, options))
}

export async function deleteAudiencesId(
  args: InferRequestType<(typeof client.audiences)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.audiences[':id'].$delete(args, options))
}

export async function getContacts(
  args: InferRequestType<typeof client.contacts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts.$get(args, options))
}

export async function postContacts(
  args: InferRequestType<typeof client.contacts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts.$post(args, options))
}

export async function getContactsImports(
  args: InferRequestType<typeof client.contacts.imports.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts.imports.$get(args, options))
}

export async function postContactsImports(
  args: InferRequestType<typeof client.contacts.imports.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts.imports.$post(args, options))
}

export async function getContactsImportsId(
  args: InferRequestType<(typeof client.contacts.imports)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts.imports[':id'].$get(args, options))
}

export async function getContactsId(
  args: InferRequestType<(typeof client.contacts)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts[':id'].$get(args, options))
}

export async function deleteContactsId(
  args: InferRequestType<(typeof client.contacts)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts[':id'].$delete(args, options))
}

export async function patchContactsId(
  args: InferRequestType<(typeof client.contacts)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts[':id'].$patch(args, options))
}

export async function getBroadcasts(
  args: InferRequestType<typeof client.broadcasts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.broadcasts.$get(args, options))
}

export async function postBroadcasts(
  args: InferRequestType<typeof client.broadcasts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.broadcasts.$post(args, options))
}

export async function getBroadcastsId(
  args: InferRequestType<(typeof client.broadcasts)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.broadcasts[':id'].$get(args, options))
}

export async function deleteBroadcastsId(
  args: InferRequestType<(typeof client.broadcasts)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.broadcasts[':id'].$delete(args, options))
}

export async function patchBroadcastsId(
  args: InferRequestType<(typeof client.broadcasts)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.broadcasts[':id'].$patch(args, options))
}

export async function postBroadcastsIdSend(
  args: InferRequestType<(typeof client.broadcasts)[':id']['send']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.broadcasts[':id'].send.$post(args, options))
}

export async function postBroadcastsIdCancel(
  args: InferRequestType<(typeof client.broadcasts)[':id']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.broadcasts[':id'].cancel.$post(args, options))
}

export async function postBroadcastsIdDuplicate(
  args: InferRequestType<(typeof client.broadcasts)[':id']['duplicate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.broadcasts[':id'].duplicate.$post(args, options))
}

export async function getBroadcastsIdRecipients(
  args: InferRequestType<(typeof client.broadcasts)[':id']['recipients']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.broadcasts[':id'].recipients.$get(args, options))
}

export async function getBroadcastsIdClickedLinks(
  args: InferRequestType<(typeof client.broadcasts)[':id']['clicked-links']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.broadcasts[':id']['clicked-links'].$get(args, options))
}

export async function getWebhooks(
  args: InferRequestType<typeof client.webhooks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks.$get(args, options))
}

export async function postWebhooks(
  args: InferRequestType<typeof client.webhooks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks.$post(args, options))
}

export async function getWebhooksWebhookId(
  args: InferRequestType<(typeof client.webhooks)[':webhook_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks[':webhook_id'].$get(args, options))
}

export async function deleteWebhooksWebhookId(
  args: InferRequestType<(typeof client.webhooks)[':webhook_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks[':webhook_id'].$delete(args, options))
}

export async function patchWebhooksWebhookId(
  args: InferRequestType<(typeof client.webhooks)[':webhook_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks[':webhook_id'].$patch(args, options))
}

export async function postWebhooksWebhookIdSigningSecretRotate(
  args: InferRequestType<
    (typeof client.webhooks)[':webhook_id']['signing-secret']['rotate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.webhooks[':webhook_id']['signing-secret'].rotate.$post(args, options),
  )
}

export async function getWebhooksWebhookIdEvents(
  args: InferRequestType<(typeof client.webhooks)[':webhook_id']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks[':webhook_id'].events.$get(args, options))
}

export async function getWebhooksWebhookIdEventsEventId(
  args: InferRequestType<(typeof client.webhooks)[':webhook_id']['events'][':event_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks[':webhook_id'].events[':event_id'].$get(args, options))
}

export async function postWebhooksWebhookIdEventsEventIdReplay(
  args: InferRequestType<
    (typeof client.webhooks)[':webhook_id']['events'][':event_id']['replay']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.webhooks[':webhook_id'].events[':event_id'].replay.$post(args, options),
  )
}

export async function getWebhooksWebhookIdEventsEventIdAttempts(
  args: InferRequestType<
    (typeof client.webhooks)[':webhook_id']['events'][':event_id']['attempts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.webhooks[':webhook_id'].events[':event_id'].attempts.$get(args, options),
  )
}

export async function getSegments(
  args: InferRequestType<typeof client.segments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.segments.$get(args, options))
}

export async function postSegments(
  args: InferRequestType<typeof client.segments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.segments.$post(args, options))
}

export async function getSegmentsId(
  args: InferRequestType<(typeof client.segments)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.segments[':id'].$get(args, options))
}

export async function deleteSegmentsId(
  args: InferRequestType<(typeof client.segments)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.segments[':id'].$delete(args, options))
}

export async function patchSegmentsId(
  args: InferRequestType<(typeof client.segments)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.segments[':id'].$patch(args, options))
}

export async function getSegmentsIdContacts(
  args: InferRequestType<(typeof client.segments)[':id']['contacts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.segments[':id'].contacts.$get(args, options))
}

export async function getTopics(
  args: InferRequestType<typeof client.topics.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.topics.$get(args, options))
}

export async function postTopics(
  args: InferRequestType<typeof client.topics.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.topics.$post(args, options))
}

export async function getTopicsId(
  args: InferRequestType<(typeof client.topics)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.topics[':id'].$get(args, options))
}

export async function deleteTopicsId(
  args: InferRequestType<(typeof client.topics)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.topics[':id'].$delete(args, options))
}

export async function patchTopicsId(
  args: InferRequestType<(typeof client.topics)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.topics[':id'].$patch(args, options))
}

export async function getContactProperties(
  args: InferRequestType<(typeof client)['contact-properties']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['contact-properties'].$get(args, options))
}

export async function postContactProperties(
  args: InferRequestType<(typeof client)['contact-properties']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['contact-properties'].$post(args, options))
}

export async function getContactPropertiesId(
  args: InferRequestType<(typeof client)['contact-properties'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['contact-properties'][':id'].$get(args, options))
}

export async function deleteContactPropertiesId(
  args: InferRequestType<(typeof client)['contact-properties'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['contact-properties'][':id'].$delete(args, options))
}

export async function patchContactPropertiesId(
  args: InferRequestType<(typeof client)['contact-properties'][':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['contact-properties'][':id'].$patch(args, options))
}

export async function getContactsContactIdSegments(
  args: InferRequestType<(typeof client.contacts)[':contact_id']['segments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts[':contact_id'].segments.$get(args, options))
}

export async function postContactsContactIdSegmentsSegmentId(
  args: InferRequestType<
    (typeof client.contacts)[':contact_id']['segments'][':segment_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.contacts[':contact_id'].segments[':segment_id'].$post(args, options),
  )
}

export async function deleteContactsContactIdSegmentsSegmentId(
  args: InferRequestType<
    (typeof client.contacts)[':contact_id']['segments'][':segment_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.contacts[':contact_id'].segments[':segment_id'].$delete(args, options),
  )
}

export async function getContactsContactIdTopics(
  args: InferRequestType<(typeof client.contacts)[':contact_id']['topics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts[':contact_id'].topics.$get(args, options))
}

export async function patchContactsContactIdTopics(
  args: InferRequestType<(typeof client.contacts)[':contact_id']['topics']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts[':contact_id'].topics.$patch(args, options))
}

export async function getLogs(
  args: InferRequestType<typeof client.logs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.logs.$get(args, options))
}

export async function getLogsLogId(
  args: InferRequestType<(typeof client.logs)[':log_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.logs[':log_id'].$get(args, options))
}

export async function getAutomations(
  args: InferRequestType<typeof client.automations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.automations.$get(args, options))
}

export async function postAutomations(
  args: InferRequestType<typeof client.automations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.automations.$post(args, options))
}

export async function getAutomationsAutomationId(
  args: InferRequestType<(typeof client.automations)[':automation_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.automations[':automation_id'].$get(args, options))
}

export async function deleteAutomationsAutomationId(
  args: InferRequestType<(typeof client.automations)[':automation_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.automations[':automation_id'].$delete(args, options))
}

export async function patchAutomationsAutomationId(
  args: InferRequestType<(typeof client.automations)[':automation_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.automations[':automation_id'].$patch(args, options))
}

export async function postAutomationsAutomationIdDuplicate(
  args: InferRequestType<(typeof client.automations)[':automation_id']['duplicate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.automations[':automation_id'].duplicate.$post(args, options))
}

export async function postAutomationsAutomationIdStop(
  args: InferRequestType<(typeof client.automations)[':automation_id']['stop']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.automations[':automation_id'].stop.$post(args, options))
}

export async function getAutomationsAutomationIdRuns(
  args: InferRequestType<(typeof client.automations)[':automation_id']['runs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.automations[':automation_id'].runs.$get(args, options))
}

export async function getAutomationsAutomationIdRunsRunId(
  args: InferRequestType<(typeof client.automations)[':automation_id']['runs'][':run_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.automations[':automation_id'].runs[':run_id'].$get(args, options),
  )
}

export async function postAutomationsAutomationIdRunsRunIdCancel(
  args: InferRequestType<
    (typeof client.automations)[':automation_id']['runs'][':run_id']['cancel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.automations[':automation_id'].runs[':run_id'].cancel.$post(args, options),
  )
}

export async function getEvents(
  args: InferRequestType<typeof client.events.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.$get(args, options))
}

export async function postEvents(
  args: InferRequestType<typeof client.events.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.$post(args, options))
}

export async function postEventsSend(
  args: InferRequestType<typeof client.events.send.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.send.$post(args, options))
}

export async function getEventsIdentifier(
  args: InferRequestType<(typeof client.events)[':identifier']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events[':identifier'].$get(args, options))
}

export async function deleteEventsIdentifier(
  args: InferRequestType<(typeof client.events)[':identifier']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events[':identifier'].$delete(args, options))
}

export async function patchEventsIdentifier(
  args: InferRequestType<(typeof client.events)[':identifier']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events[':identifier'].$patch(args, options))
}

export async function getSuppressions(
  args: InferRequestType<typeof client.suppressions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.suppressions.$get(args, options))
}

export async function postSuppressions(
  args: InferRequestType<typeof client.suppressions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.suppressions.$post(args, options))
}

export async function postSuppressionsBatchAdd(
  args: InferRequestType<typeof client.suppressions.batch.add.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.suppressions.batch.add.$post(args, options))
}

export async function postSuppressionsBatchRemove(
  args: InferRequestType<typeof client.suppressions.batch.remove.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.suppressions.batch.remove.$post(args, options))
}

export async function getSuppressionsSuppression(
  args: InferRequestType<(typeof client.suppressions)[':suppression']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.suppressions[':suppression'].$get(args, options))
}

export async function deleteSuppressionsSuppression(
  args: InferRequestType<(typeof client.suppressions)[':suppression']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.suppressions[':suppression'].$delete(args, options))
}

export async function getUsage(options?: ClientRequestOptions) {
  return await parseResponse(client.usage.$get(undefined, options))
}

export async function getInboxes(
  args: InferRequestType<typeof client.inboxes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.inboxes.$get(args, options))
}

export async function postInboxes(
  args: InferRequestType<typeof client.inboxes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.inboxes.$post(args, options))
}

export async function getInboxesInboxId(
  args: InferRequestType<(typeof client.inboxes)[':inbox_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.inboxes[':inbox_id'].$get(args, options))
}

export async function deleteInboxesInboxId(
  args: InferRequestType<(typeof client.inboxes)[':inbox_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.inboxes[':inbox_id'].$delete(args, options))
}

export async function patchInboxesInboxId(
  args: InferRequestType<(typeof client.inboxes)[':inbox_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.inboxes[':inbox_id'].$patch(args, options))
}

export async function getInboxesInboxIdAgent(
  args: InferRequestType<(typeof client.inboxes)[':inbox_id']['agent']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.inboxes[':inbox_id'].agent.$get(args, options))
}

export async function patchInboxesInboxIdAgent(
  args: InferRequestType<(typeof client.inboxes)[':inbox_id']['agent']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.inboxes[':inbox_id'].agent.$patch(args, options))
}

export async function getInboxesInboxIdLabels(
  args: InferRequestType<(typeof client.inboxes)[':inbox_id']['labels']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.inboxes[':inbox_id'].labels.$get(args, options))
}

export async function postInboxesInboxIdLabels(
  args: InferRequestType<(typeof client.inboxes)[':inbox_id']['labels']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.inboxes[':inbox_id'].labels.$post(args, options))
}

export async function deleteInboxesInboxIdLabelsLabelId(
  args: InferRequestType<(typeof client.inboxes)[':inbox_id']['labels'][':label_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.inboxes[':inbox_id'].labels[':label_id'].$delete(args, options))
}

export async function patchInboxesInboxIdLabelsLabelId(
  args: InferRequestType<(typeof client.inboxes)[':inbox_id']['labels'][':label_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.inboxes[':inbox_id'].labels[':label_id'].$patch(args, options))
}

export async function getInboxesInboxIdThreads(
  args: InferRequestType<(typeof client.inboxes)[':inbox_id']['threads']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.inboxes[':inbox_id'].threads.$get(args, options))
}

export async function getInboxesInboxIdThreadsSearch(
  args: InferRequestType<(typeof client.inboxes)[':inbox_id']['threads']['search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.inboxes[':inbox_id'].threads.search.$get(args, options))
}

export async function getInboxesInboxIdThreadsThreadId(
  args: InferRequestType<(typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.inboxes[':inbox_id'].threads[':thread_id'].$get(args, options))
}

export async function deleteInboxesInboxIdThreadsThreadId(
  args: InferRequestType<(typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.inboxes[':inbox_id'].threads[':thread_id'].$delete(args, options),
  )
}

export async function patchInboxesInboxIdThreadsThreadId(
  args: InferRequestType<(typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.inboxes[':inbox_id'].threads[':thread_id'].$patch(args, options),
  )
}

export async function putInboxesInboxIdThreadsThreadIdLabels(
  args: InferRequestType<
    (typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['labels']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.inboxes[':inbox_id'].threads[':thread_id'].labels.$put(args, options),
  )
}

export async function postInboxesInboxIdThreadsThreadIdLabels(
  args: InferRequestType<
    (typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['labels']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.inboxes[':inbox_id'].threads[':thread_id'].labels.$post(args, options),
  )
}

export async function deleteInboxesInboxIdThreadsThreadIdLabelsLabelId(
  args: InferRequestType<
    (typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['labels'][':label_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.inboxes[':inbox_id'].threads[':thread_id'].labels[':label_id'].$delete(args, options),
  )
}

export async function getInboxesInboxIdThreadsThreadIdEmails(
  args: InferRequestType<
    (typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['emails']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.inboxes[':inbox_id'].threads[':thread_id'].emails.$get(args, options),
  )
}

export async function getInboxesInboxIdThreadsThreadIdEmailsEmailId(
  args: InferRequestType<
    (typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['emails'][':email_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.inboxes[':inbox_id'].threads[':thread_id'].emails[':email_id'].$get(args, options),
  )
}

export async function postInboxesInboxIdThreadsThreadIdEmailsEmailIdReply(
  args: InferRequestType<
    (typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['emails'][':email_id']['reply']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.inboxes[':inbox_id'].threads[':thread_id'].emails[':email_id'].reply.$post(
      args,
      options,
    ),
  )
}

export async function postInboxesInboxIdThreadsThreadIdEmailsEmailIdForward(
  args: InferRequestType<
    (typeof client.inboxes)[':inbox_id']['threads'][':thread_id']['emails'][':email_id']['forward']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.inboxes[':inbox_id'].threads[':thread_id'].emails[':email_id'].forward.$post(
      args,
      options,
    ),
  )
}

export async function getInboxesInboxIdDrafts(
  args: InferRequestType<(typeof client.inboxes)[':inbox_id']['drafts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.inboxes[':inbox_id'].drafts.$get(args, options))
}

export async function postInboxesInboxIdDrafts(
  args: InferRequestType<(typeof client.inboxes)[':inbox_id']['drafts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.inboxes[':inbox_id'].drafts.$post(args, options))
}

export async function getInboxesInboxIdDraftsDraftId(
  args: InferRequestType<(typeof client.inboxes)[':inbox_id']['drafts'][':draft_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.inboxes[':inbox_id'].drafts[':draft_id'].$get(args, options))
}

export async function deleteInboxesInboxIdDraftsDraftId(
  args: InferRequestType<(typeof client.inboxes)[':inbox_id']['drafts'][':draft_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.inboxes[':inbox_id'].drafts[':draft_id'].$delete(args, options))
}

export async function patchInboxesInboxIdDraftsDraftId(
  args: InferRequestType<(typeof client.inboxes)[':inbox_id']['drafts'][':draft_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.inboxes[':inbox_id'].drafts[':draft_id'].$patch(args, options))
}

export async function postInboxesInboxIdDraftsDraftIdSend(
  args: InferRequestType<
    (typeof client.inboxes)[':inbox_id']['drafts'][':draft_id']['send']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.inboxes[':inbox_id'].drafts[':draft_id'].send.$post(args, options),
  )
}
