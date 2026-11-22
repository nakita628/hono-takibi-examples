import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1EmailConfigurationSets(
  args: InferRequestType<(typeof client.v1.email)['configuration-sets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.email['configuration-sets'].$get(args, options))
}

export async function postV1EmailConfigurationSets(
  args: InferRequestType<(typeof client.v1.email)['configuration-sets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.email['configuration-sets'].$post(args, options))
}

export async function getV1EmailConfigurationSetsConfigurationSetNameEventDestinations(
  args: InferRequestType<
    (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['event-destinations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.email['configuration-sets'][':ConfigurationSetName']['event-destinations'].$get(
      args,
      options,
    ),
  )
}

export async function postV1EmailConfigurationSetsConfigurationSetNameEventDestinations(
  args: InferRequestType<
    (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['event-destinations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.email['configuration-sets'][':ConfigurationSetName']['event-destinations'].$post(
      args,
      options,
    ),
  )
}

export async function getV1EmailDedicatedIpPools(
  args: InferRequestType<(typeof client.v1.email)['dedicated-ip-pools']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.email['dedicated-ip-pools'].$get(args, options))
}

export async function postV1EmailDedicatedIpPools(
  args: InferRequestType<(typeof client.v1.email)['dedicated-ip-pools']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.email['dedicated-ip-pools'].$post(args, options))
}

export async function postV1EmailDeliverabilityDashboardTest(
  args: InferRequestType<(typeof client.v1.email)['deliverability-dashboard']['test']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.email['deliverability-dashboard'].test.$post(args, options))
}

export async function getV1EmailIdentities(
  args: InferRequestType<typeof client.v1.email.identities.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.email.identities.$get(args, options))
}

export async function postV1EmailIdentities(
  args: InferRequestType<typeof client.v1.email.identities.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.email.identities.$post(args, options))
}

export async function getV1EmailConfigurationSetsConfigurationSetName(
  args: InferRequestType<
    (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.email['configuration-sets'][':ConfigurationSetName'].$get(args, options),
  )
}

export async function deleteV1EmailConfigurationSetsConfigurationSetName(
  args: InferRequestType<
    (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.email['configuration-sets'][':ConfigurationSetName'].$delete(args, options),
  )
}

export async function putV1EmailConfigurationSetsConfigurationSetNameEventDestinationsEventDestinationName(
  args: InferRequestType<
    (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['event-destinations'][':EventDestinationName']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.email['configuration-sets'][':ConfigurationSetName']['event-destinations'][
      ':EventDestinationName'
    ].$put(args, options),
  )
}

export async function deleteV1EmailConfigurationSetsConfigurationSetNameEventDestinationsEventDestinationName(
  args: InferRequestType<
    (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['event-destinations'][':EventDestinationName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.email['configuration-sets'][':ConfigurationSetName']['event-destinations'][
      ':EventDestinationName'
    ].$delete(args, options),
  )
}

export async function deleteV1EmailDedicatedIpPoolsPoolName(
  args: InferRequestType<(typeof client.v1.email)['dedicated-ip-pools'][':PoolName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.email['dedicated-ip-pools'][':PoolName'].$delete(args, options),
  )
}

export async function getV1EmailIdentitiesEmailIdentity(
  args: InferRequestType<(typeof client.v1.email.identities)[':EmailIdentity']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.email.identities[':EmailIdentity'].$get(args, options))
}

export async function deleteV1EmailIdentitiesEmailIdentity(
  args: InferRequestType<(typeof client.v1.email.identities)[':EmailIdentity']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.email.identities[':EmailIdentity'].$delete(args, options))
}

export async function getV1EmailAccount(
  args: InferRequestType<typeof client.v1.email.account.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.email.account.$get(args, options))
}

export async function getV1EmailDeliverabilityDashboardBlacklistReportBlacklistItemNames(
  args: InferRequestType<
    (typeof client.v1.email)['deliverability-dashboard']['blacklist-report#BlacklistItemNames']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.email['deliverability-dashboard']['blacklist-report#BlacklistItemNames'].$get(
      args,
      options,
    ),
  )
}

export async function getV1EmailDedicatedIpsIP(
  args: InferRequestType<(typeof client.v1.email)['dedicated-ips'][':IP']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.email['dedicated-ips'][':IP'].$get(args, options))
}

export async function getV1EmailDedicatedIps(
  args: InferRequestType<(typeof client.v1.email)['dedicated-ips']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.email['dedicated-ips'].$get(args, options))
}

export async function getV1EmailDeliverabilityDashboard(
  args: InferRequestType<(typeof client.v1.email)['deliverability-dashboard']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.email['deliverability-dashboard'].$get(args, options))
}

export async function putV1EmailDeliverabilityDashboard(
  args: InferRequestType<(typeof client.v1.email)['deliverability-dashboard']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.email['deliverability-dashboard'].$put(args, options))
}

export async function getV1EmailDeliverabilityDashboardTestReportsReportId(
  args: InferRequestType<
    (typeof client.v1.email)['deliverability-dashboard']['test-reports'][':ReportId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.email['deliverability-dashboard']['test-reports'][':ReportId'].$get(args, options),
  )
}

export async function getV1EmailDeliverabilityDashboardCampaignsCampaignId(
  args: InferRequestType<
    (typeof client.v1.email)['deliverability-dashboard']['campaigns'][':CampaignId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.email['deliverability-dashboard'].campaigns[':CampaignId'].$get(args, options),
  )
}

export async function getV1EmailDeliverabilityDashboardStatisticsReportDomainStartDateEndDate(
  args: InferRequestType<
    (typeof client.v1.email)['deliverability-dashboard']['statistics-report'][':Domain#StartDate&EndDate']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.email['deliverability-dashboard']['statistics-report'][
      ':Domain#StartDate&EndDate'
    ].$get(args, options),
  )
}

export async function getV1EmailDeliverabilityDashboardTestReports(
  args: InferRequestType<
    (typeof client.v1.email)['deliverability-dashboard']['test-reports']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.email['deliverability-dashboard']['test-reports'].$get(args, options),
  )
}

export async function getV1EmailDeliverabilityDashboardDomainsSubscribedDomainCampaignsStartDateEndDate(
  args: InferRequestType<
    (typeof client.v1.email)['deliverability-dashboard']['domains'][':SubscribedDomain']['campaigns#StartDate&EndDate']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.email['deliverability-dashboard'].domains[':SubscribedDomain'][
      'campaigns#StartDate&EndDate'
    ].$get(args, options),
  )
}

export async function getV1EmailTagsResourceArn(
  args: InferRequestType<(typeof client.v1.email)['tags#ResourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.email['tags#ResourceArn'].$get(args, options))
}

export async function putV1EmailAccountDedicatedIpsWarmup(
  args: InferRequestType<(typeof client.v1.email.account)['dedicated-ips']['warmup']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.email.account['dedicated-ips'].warmup.$put(args, options))
}

export async function putV1EmailAccountSending(
  args: InferRequestType<typeof client.v1.email.account.sending.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.email.account.sending.$put(args, options))
}

export async function putV1EmailConfigurationSetsConfigurationSetNameDeliveryOptions(
  args: InferRequestType<
    (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['delivery-options']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.email['configuration-sets'][':ConfigurationSetName']['delivery-options'].$put(
      args,
      options,
    ),
  )
}

export async function putV1EmailConfigurationSetsConfigurationSetNameReputationOptions(
  args: InferRequestType<
    (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['reputation-options']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.email['configuration-sets'][':ConfigurationSetName']['reputation-options'].$put(
      args,
      options,
    ),
  )
}

export async function putV1EmailConfigurationSetsConfigurationSetNameSending(
  args: InferRequestType<
    (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['sending']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.email['configuration-sets'][':ConfigurationSetName'].sending.$put(args, options),
  )
}

export async function putV1EmailConfigurationSetsConfigurationSetNameTrackingOptions(
  args: InferRequestType<
    (typeof client.v1.email)['configuration-sets'][':ConfigurationSetName']['tracking-options']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.email['configuration-sets'][':ConfigurationSetName']['tracking-options'].$put(
      args,
      options,
    ),
  )
}

export async function putV1EmailDedicatedIpsIPPool(
  args: InferRequestType<(typeof client.v1.email)['dedicated-ips'][':IP']['pool']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.email['dedicated-ips'][':IP'].pool.$put(args, options))
}

export async function putV1EmailDedicatedIpsIPWarmup(
  args: InferRequestType<(typeof client.v1.email)['dedicated-ips'][':IP']['warmup']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.email['dedicated-ips'][':IP'].warmup.$put(args, options))
}

export async function putV1EmailIdentitiesEmailIdentityDkim(
  args: InferRequestType<(typeof client.v1.email.identities)[':EmailIdentity']['dkim']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.email.identities[':EmailIdentity'].dkim.$put(args, options))
}

export async function putV1EmailIdentitiesEmailIdentityFeedback(
  args: InferRequestType<(typeof client.v1.email.identities)[':EmailIdentity']['feedback']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.email.identities[':EmailIdentity'].feedback.$put(args, options),
  )
}

export async function putV1EmailIdentitiesEmailIdentityMailFrom(
  args: InferRequestType<
    (typeof client.v1.email.identities)[':EmailIdentity']['mail-from']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.email.identities[':EmailIdentity']['mail-from'].$put(args, options),
  )
}

export async function postV1EmailOutboundEmails(
  args: InferRequestType<(typeof client.v1.email)['outbound-emails']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.email['outbound-emails'].$post(args, options))
}

export async function postV1EmailTags(
  args: InferRequestType<typeof client.v1.email.tags.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.email.tags.$post(args, options))
}

export async function deleteV1EmailTagsResourceArnTagKeys(
  args: InferRequestType<(typeof client.v1.email)['tags#ResourceArn&TagKeys']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.email['tags#ResourceArn&TagKeys'].$delete(args, options))
}
