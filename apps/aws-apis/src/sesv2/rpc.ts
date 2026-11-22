import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV2EmailMetricsBatch(
  args: InferRequestType<typeof client.v2.email.metrics.batch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.email.metrics.batch.$post(args, options))
}

export async function getV2EmailConfigurationSets(
  args: InferRequestType<(typeof client.v2.email)['configuration-sets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.email['configuration-sets'].$get(args, options))
}

export async function postV2EmailConfigurationSets(
  args: InferRequestType<(typeof client.v2.email)['configuration-sets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.email['configuration-sets'].$post(args, options))
}

export async function getV2EmailConfigurationSetsConfigurationSetNameEventDestinations(
  args: InferRequestType<
    (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['event-destinations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.email['configuration-sets'][':ConfigurationSetName']['event-destinations'].$get(
      args,
      options,
    ),
  )
}

export async function postV2EmailConfigurationSetsConfigurationSetNameEventDestinations(
  args: InferRequestType<
    (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['event-destinations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.email['configuration-sets'][':ConfigurationSetName']['event-destinations'].$post(
      args,
      options,
    ),
  )
}

export async function getV2EmailContactListsContactListNameContacts(
  args: InferRequestType<
    (typeof client.v2.email)['contact-lists'][':ContactListName']['contacts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.email['contact-lists'][':ContactListName'].contacts.$get(args, options),
  )
}

export async function postV2EmailContactListsContactListNameContacts(
  args: InferRequestType<
    (typeof client.v2.email)['contact-lists'][':ContactListName']['contacts']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.email['contact-lists'][':ContactListName'].contacts.$post(args, options),
  )
}

export async function getV2EmailContactLists(
  args: InferRequestType<(typeof client.v2.email)['contact-lists']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.email['contact-lists'].$get(args, options))
}

export async function postV2EmailContactLists(
  args: InferRequestType<(typeof client.v2.email)['contact-lists']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.email['contact-lists'].$post(args, options))
}

export async function getV2EmailCustomVerificationEmailTemplates(
  args: InferRequestType<(typeof client.v2.email)['custom-verification-email-templates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.email['custom-verification-email-templates'].$get(args, options),
  )
}

export async function postV2EmailCustomVerificationEmailTemplates(
  args: InferRequestType<(typeof client.v2.email)['custom-verification-email-templates']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.email['custom-verification-email-templates'].$post(args, options),
  )
}

export async function getV2EmailDedicatedIpPools(
  args: InferRequestType<(typeof client.v2.email)['dedicated-ip-pools']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.email['dedicated-ip-pools'].$get(args, options))
}

export async function postV2EmailDedicatedIpPools(
  args: InferRequestType<(typeof client.v2.email)['dedicated-ip-pools']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.email['dedicated-ip-pools'].$post(args, options))
}

export async function postV2EmailDeliverabilityDashboardTest(
  args: InferRequestType<(typeof client.v2.email)['deliverability-dashboard']['test']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.email['deliverability-dashboard'].test.$post(args, options))
}

export async function getV2EmailIdentities(
  args: InferRequestType<typeof client.v2.email.identities.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.email.identities.$get(args, options))
}

export async function postV2EmailIdentities(
  args: InferRequestType<typeof client.v2.email.identities.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.email.identities.$post(args, options))
}

export async function putV2EmailIdentitiesEmailIdentityPoliciesPolicyName(
  args: InferRequestType<
    (typeof client.v2.email.identities)[':EmailIdentity']['policies'][':PolicyName']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.email.identities[':EmailIdentity'].policies[':PolicyName'].$put(args, options),
  )
}

export async function postV2EmailIdentitiesEmailIdentityPoliciesPolicyName(
  args: InferRequestType<
    (typeof client.v2.email.identities)[':EmailIdentity']['policies'][':PolicyName']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.email.identities[':EmailIdentity'].policies[':PolicyName'].$post(args, options),
  )
}

export async function deleteV2EmailIdentitiesEmailIdentityPoliciesPolicyName(
  args: InferRequestType<
    (typeof client.v2.email.identities)[':EmailIdentity']['policies'][':PolicyName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.email.identities[':EmailIdentity'].policies[':PolicyName'].$delete(args, options),
  )
}

export async function getV2EmailTemplates(
  args: InferRequestType<typeof client.v2.email.templates.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.email.templates.$get(args, options))
}

export async function postV2EmailTemplates(
  args: InferRequestType<typeof client.v2.email.templates.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.email.templates.$post(args, options))
}

export async function getV2EmailImportJobs(
  args: InferRequestType<(typeof client.v2.email)['import-jobs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.email['import-jobs'].$get(args, options))
}

export async function postV2EmailImportJobs(
  args: InferRequestType<(typeof client.v2.email)['import-jobs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.email['import-jobs'].$post(args, options))
}

export async function getV2EmailConfigurationSetsConfigurationSetName(
  args: InferRequestType<
    (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.email['configuration-sets'][':ConfigurationSetName'].$get(args, options),
  )
}

export async function deleteV2EmailConfigurationSetsConfigurationSetName(
  args: InferRequestType<
    (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.email['configuration-sets'][':ConfigurationSetName'].$delete(args, options),
  )
}

export async function putV2EmailConfigurationSetsConfigurationSetNameEventDestinationsEventDestinationName(
  args: InferRequestType<
    (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['event-destinations'][':EventDestinationName']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.email['configuration-sets'][':ConfigurationSetName']['event-destinations'][
      ':EventDestinationName'
    ].$put(args, options),
  )
}

export async function deleteV2EmailConfigurationSetsConfigurationSetNameEventDestinationsEventDestinationName(
  args: InferRequestType<
    (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['event-destinations'][':EventDestinationName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.email['configuration-sets'][':ConfigurationSetName']['event-destinations'][
      ':EventDestinationName'
    ].$delete(args, options),
  )
}

export async function getV2EmailContactListsContactListNameContactsEmailAddress(
  args: InferRequestType<
    (typeof client.v2.email)['contact-lists'][':ContactListName']['contacts'][':EmailAddress']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.email['contact-lists'][':ContactListName'].contacts[':EmailAddress'].$get(
      args,
      options,
    ),
  )
}

export async function putV2EmailContactListsContactListNameContactsEmailAddress(
  args: InferRequestType<
    (typeof client.v2.email)['contact-lists'][':ContactListName']['contacts'][':EmailAddress']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.email['contact-lists'][':ContactListName'].contacts[':EmailAddress'].$put(
      args,
      options,
    ),
  )
}

export async function deleteV2EmailContactListsContactListNameContactsEmailAddress(
  args: InferRequestType<
    (typeof client.v2.email)['contact-lists'][':ContactListName']['contacts'][':EmailAddress']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.email['contact-lists'][':ContactListName'].contacts[':EmailAddress'].$delete(
      args,
      options,
    ),
  )
}

export async function getV2EmailContactListsContactListName(
  args: InferRequestType<(typeof client.v2.email)['contact-lists'][':ContactListName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.email['contact-lists'][':ContactListName'].$get(args, options),
  )
}

export async function putV2EmailContactListsContactListName(
  args: InferRequestType<(typeof client.v2.email)['contact-lists'][':ContactListName']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.email['contact-lists'][':ContactListName'].$put(args, options),
  )
}

export async function deleteV2EmailContactListsContactListName(
  args: InferRequestType<(typeof client.v2.email)['contact-lists'][':ContactListName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.email['contact-lists'][':ContactListName'].$delete(args, options),
  )
}

export async function getV2EmailCustomVerificationEmailTemplatesTemplateName(
  args: InferRequestType<
    (typeof client.v2.email)['custom-verification-email-templates'][':TemplateName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.email['custom-verification-email-templates'][':TemplateName'].$get(args, options),
  )
}

export async function putV2EmailCustomVerificationEmailTemplatesTemplateName(
  args: InferRequestType<
    (typeof client.v2.email)['custom-verification-email-templates'][':TemplateName']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.email['custom-verification-email-templates'][':TemplateName'].$put(args, options),
  )
}

export async function deleteV2EmailCustomVerificationEmailTemplatesTemplateName(
  args: InferRequestType<
    (typeof client.v2.email)['custom-verification-email-templates'][':TemplateName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.email['custom-verification-email-templates'][':TemplateName'].$delete(args, options),
  )
}

export async function getV2EmailDedicatedIpPoolsPoolName(
  args: InferRequestType<(typeof client.v2.email)['dedicated-ip-pools'][':PoolName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.email['dedicated-ip-pools'][':PoolName'].$get(args, options))
}

export async function deleteV2EmailDedicatedIpPoolsPoolName(
  args: InferRequestType<(typeof client.v2.email)['dedicated-ip-pools'][':PoolName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.email['dedicated-ip-pools'][':PoolName'].$delete(args, options),
  )
}

export async function getV2EmailIdentitiesEmailIdentity(
  args: InferRequestType<(typeof client.v2.email.identities)[':EmailIdentity']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.email.identities[':EmailIdentity'].$get(args, options))
}

export async function deleteV2EmailIdentitiesEmailIdentity(
  args: InferRequestType<(typeof client.v2.email.identities)[':EmailIdentity']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.email.identities[':EmailIdentity'].$delete(args, options))
}

export async function getV2EmailTemplatesTemplateName(
  args: InferRequestType<(typeof client.v2.email.templates)[':TemplateName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.email.templates[':TemplateName'].$get(args, options))
}

export async function putV2EmailTemplatesTemplateName(
  args: InferRequestType<(typeof client.v2.email.templates)[':TemplateName']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.email.templates[':TemplateName'].$put(args, options))
}

export async function deleteV2EmailTemplatesTemplateName(
  args: InferRequestType<(typeof client.v2.email.templates)[':TemplateName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.email.templates[':TemplateName'].$delete(args, options))
}

export async function getV2EmailSuppressionAddressesEmailAddress(
  args: InferRequestType<(typeof client.v2.email.suppression.addresses)[':EmailAddress']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.email.suppression.addresses[':EmailAddress'].$get(args, options),
  )
}

export async function deleteV2EmailSuppressionAddressesEmailAddress(
  args: InferRequestType<
    (typeof client.v2.email.suppression.addresses)[':EmailAddress']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.email.suppression.addresses[':EmailAddress'].$delete(args, options),
  )
}

export async function getV2EmailAccount(
  args: InferRequestType<typeof client.v2.email.account.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.email.account.$get(args, options))
}

export async function getV2EmailDeliverabilityDashboardBlacklistReportBlacklistItemNames(
  args: InferRequestType<
    (typeof client.v2.email)['deliverability-dashboard']['blacklist-report#BlacklistItemNames']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.email['deliverability-dashboard']['blacklist-report#BlacklistItemNames'].$get(
      args,
      options,
    ),
  )
}

export async function getV2EmailDedicatedIpsIP(
  args: InferRequestType<(typeof client.v2.email)['dedicated-ips'][':IP']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.email['dedicated-ips'][':IP'].$get(args, options))
}

export async function getV2EmailDedicatedIps(
  args: InferRequestType<(typeof client.v2.email)['dedicated-ips']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.email['dedicated-ips'].$get(args, options))
}

export async function getV2EmailDeliverabilityDashboard(
  args: InferRequestType<(typeof client.v2.email)['deliverability-dashboard']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.email['deliverability-dashboard'].$get(args, options))
}

export async function putV2EmailDeliverabilityDashboard(
  args: InferRequestType<(typeof client.v2.email)['deliverability-dashboard']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.email['deliverability-dashboard'].$put(args, options))
}

export async function getV2EmailDeliverabilityDashboardTestReportsReportId(
  args: InferRequestType<
    (typeof client.v2.email)['deliverability-dashboard']['test-reports'][':ReportId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.email['deliverability-dashboard']['test-reports'][':ReportId'].$get(args, options),
  )
}

export async function getV2EmailDeliverabilityDashboardCampaignsCampaignId(
  args: InferRequestType<
    (typeof client.v2.email)['deliverability-dashboard']['campaigns'][':CampaignId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.email['deliverability-dashboard'].campaigns[':CampaignId'].$get(args, options),
  )
}

export async function getV2EmailDeliverabilityDashboardStatisticsReportDomainStartDateEndDate(
  args: InferRequestType<
    (typeof client.v2.email)['deliverability-dashboard']['statistics-report'][':Domain#StartDate&EndDate']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.email['deliverability-dashboard']['statistics-report'][
      ':Domain#StartDate&EndDate'
    ].$get(args, options),
  )
}

export async function getV2EmailIdentitiesEmailIdentityPolicies(
  args: InferRequestType<(typeof client.v2.email.identities)[':EmailIdentity']['policies']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.email.identities[':EmailIdentity'].policies.$get(args, options),
  )
}

export async function getV2EmailImportJobsJobId(
  args: InferRequestType<(typeof client.v2.email)['import-jobs'][':JobId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.email['import-jobs'][':JobId'].$get(args, options))
}

export async function getV2EmailDeliverabilityDashboardTestReports(
  args: InferRequestType<
    (typeof client.v2.email)['deliverability-dashboard']['test-reports']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.email['deliverability-dashboard']['test-reports'].$get(args, options),
  )
}

export async function getV2EmailDeliverabilityDashboardDomainsSubscribedDomainCampaignsStartDateEndDate(
  args: InferRequestType<
    (typeof client.v2.email)['deliverability-dashboard']['domains'][':SubscribedDomain']['campaigns#StartDate&EndDate']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.email['deliverability-dashboard'].domains[':SubscribedDomain'][
      'campaigns#StartDate&EndDate'
    ].$get(args, options),
  )
}

export async function postV2EmailVdmRecommendations(
  args: InferRequestType<typeof client.v2.email.vdm.recommendations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.email.vdm.recommendations.$post(args, options))
}

export async function getV2EmailSuppressionAddresses(
  args: InferRequestType<typeof client.v2.email.suppression.addresses.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.email.suppression.addresses.$get(args, options))
}

export async function putV2EmailSuppressionAddresses(
  args: InferRequestType<typeof client.v2.email.suppression.addresses.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.email.suppression.addresses.$put(args, options))
}

export async function getV2EmailTagsResourceArn(
  args: InferRequestType<(typeof client.v2.email)['tags#ResourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.email['tags#ResourceArn'].$get(args, options))
}

export async function putV2EmailAccountDedicatedIpsWarmup(
  args: InferRequestType<(typeof client.v2.email.account)['dedicated-ips']['warmup']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.email.account['dedicated-ips'].warmup.$put(args, options))
}

export async function postV2EmailAccountDetails(
  args: InferRequestType<typeof client.v2.email.account.details.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.email.account.details.$post(args, options))
}

export async function putV2EmailAccountSending(
  args: InferRequestType<typeof client.v2.email.account.sending.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.email.account.sending.$put(args, options))
}

export async function putV2EmailAccountSuppression(
  args: InferRequestType<typeof client.v2.email.account.suppression.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.email.account.suppression.$put(args, options))
}

export async function putV2EmailAccountVdm(
  args: InferRequestType<typeof client.v2.email.account.vdm.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.email.account.vdm.$put(args, options))
}

export async function putV2EmailConfigurationSetsConfigurationSetNameDeliveryOptions(
  args: InferRequestType<
    (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['delivery-options']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.email['configuration-sets'][':ConfigurationSetName']['delivery-options'].$put(
      args,
      options,
    ),
  )
}

export async function putV2EmailConfigurationSetsConfigurationSetNameReputationOptions(
  args: InferRequestType<
    (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['reputation-options']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.email['configuration-sets'][':ConfigurationSetName']['reputation-options'].$put(
      args,
      options,
    ),
  )
}

export async function putV2EmailConfigurationSetsConfigurationSetNameSending(
  args: InferRequestType<
    (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['sending']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.email['configuration-sets'][':ConfigurationSetName'].sending.$put(args, options),
  )
}

export async function putV2EmailConfigurationSetsConfigurationSetNameSuppressionOptions(
  args: InferRequestType<
    (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['suppression-options']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.email['configuration-sets'][':ConfigurationSetName']['suppression-options'].$put(
      args,
      options,
    ),
  )
}

export async function putV2EmailConfigurationSetsConfigurationSetNameTrackingOptions(
  args: InferRequestType<
    (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['tracking-options']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.email['configuration-sets'][':ConfigurationSetName']['tracking-options'].$put(
      args,
      options,
    ),
  )
}

export async function putV2EmailConfigurationSetsConfigurationSetNameVdmOptions(
  args: InferRequestType<
    (typeof client.v2.email)['configuration-sets'][':ConfigurationSetName']['vdm-options']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.email['configuration-sets'][':ConfigurationSetName']['vdm-options'].$put(
      args,
      options,
    ),
  )
}

export async function putV2EmailDedicatedIpsIPPool(
  args: InferRequestType<(typeof client.v2.email)['dedicated-ips'][':IP']['pool']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.email['dedicated-ips'][':IP'].pool.$put(args, options))
}

export async function putV2EmailDedicatedIpPoolsPoolNameScaling(
  args: InferRequestType<
    (typeof client.v2.email)['dedicated-ip-pools'][':PoolName']['scaling']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.email['dedicated-ip-pools'][':PoolName'].scaling.$put(args, options),
  )
}

export async function putV2EmailDedicatedIpsIPWarmup(
  args: InferRequestType<(typeof client.v2.email)['dedicated-ips'][':IP']['warmup']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.email['dedicated-ips'][':IP'].warmup.$put(args, options))
}

export async function putV2EmailIdentitiesEmailIdentityConfigurationSet(
  args: InferRequestType<
    (typeof client.v2.email.identities)[':EmailIdentity']['configuration-set']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.email.identities[':EmailIdentity']['configuration-set'].$put(args, options),
  )
}

export async function putV2EmailIdentitiesEmailIdentityDkim(
  args: InferRequestType<(typeof client.v2.email.identities)[':EmailIdentity']['dkim']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.email.identities[':EmailIdentity'].dkim.$put(args, options))
}

export async function putV1EmailIdentitiesEmailIdentityDkimSigning(
  args: InferRequestType<
    (typeof client.v1.email.identities)[':EmailIdentity']['dkim']['signing']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.email.identities[':EmailIdentity'].dkim.signing.$put(args, options),
  )
}

export async function putV2EmailIdentitiesEmailIdentityFeedback(
  args: InferRequestType<(typeof client.v2.email.identities)[':EmailIdentity']['feedback']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.email.identities[':EmailIdentity'].feedback.$put(args, options),
  )
}

export async function putV2EmailIdentitiesEmailIdentityMailFrom(
  args: InferRequestType<
    (typeof client.v2.email.identities)[':EmailIdentity']['mail-from']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.email.identities[':EmailIdentity']['mail-from'].$put(args, options),
  )
}

export async function postV2EmailOutboundBulkEmails(
  args: InferRequestType<(typeof client.v2.email)['outbound-bulk-emails']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.email['outbound-bulk-emails'].$post(args, options))
}

export async function postV2EmailOutboundCustomVerificationEmails(
  args: InferRequestType<(typeof client.v2.email)['outbound-custom-verification-emails']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.email['outbound-custom-verification-emails'].$post(args, options),
  )
}

export async function postV2EmailOutboundEmails(
  args: InferRequestType<(typeof client.v2.email)['outbound-emails']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.email['outbound-emails'].$post(args, options))
}

export async function postV2EmailTags(
  args: InferRequestType<typeof client.v2.email.tags.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.email.tags.$post(args, options))
}

export async function postV2EmailTemplatesTemplateNameRender(
  args: InferRequestType<(typeof client.v2.email.templates)[':TemplateName']['render']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.email.templates[':TemplateName'].render.$post(args, options))
}

export async function deleteV2EmailTagsResourceArnTagKeys(
  args: InferRequestType<(typeof client.v2.email)['tags#ResourceArn&TagKeys']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.email['tags#ResourceArn&TagKeys'].$delete(args, options))
}
