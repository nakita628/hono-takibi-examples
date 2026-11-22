import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getActionCloneReceiptRuleSet(
  args: InferRequestType<(typeof client)['#Action=CloneReceiptRuleSet']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CloneReceiptRuleSet'].$get(args, options))
}

export async function postActionCloneReceiptRuleSet(
  args: InferRequestType<(typeof client)['#Action=CloneReceiptRuleSet']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CloneReceiptRuleSet'].$post(args, options))
}

export async function getActionCreateConfigurationSet(
  args: InferRequestType<(typeof client)['#Action=CreateConfigurationSet']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateConfigurationSet'].$get(args, options))
}

export async function postActionCreateConfigurationSet(
  args: InferRequestType<(typeof client)['#Action=CreateConfigurationSet']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateConfigurationSet'].$post(args, options))
}

export async function getActionCreateConfigurationSetEventDestination(
  args: InferRequestType<(typeof client)['#Action=CreateConfigurationSetEventDestination']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=CreateConfigurationSetEventDestination'].$get(args, options),
  )
}

export async function postActionCreateConfigurationSetEventDestination(
  args: InferRequestType<
    (typeof client)['#Action=CreateConfigurationSetEventDestination']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=CreateConfigurationSetEventDestination'].$post(args, options),
  )
}

export async function getActionCreateConfigurationSetTrackingOptions(
  args: InferRequestType<(typeof client)['#Action=CreateConfigurationSetTrackingOptions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=CreateConfigurationSetTrackingOptions'].$get(args, options),
  )
}

export async function postActionCreateConfigurationSetTrackingOptions(
  args: InferRequestType<(typeof client)['#Action=CreateConfigurationSetTrackingOptions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=CreateConfigurationSetTrackingOptions'].$post(args, options),
  )
}

export async function getActionCreateCustomVerificationEmailTemplate(
  args: InferRequestType<(typeof client)['#Action=CreateCustomVerificationEmailTemplate']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=CreateCustomVerificationEmailTemplate'].$get(args, options),
  )
}

export async function postActionCreateCustomVerificationEmailTemplate(
  args: InferRequestType<(typeof client)['#Action=CreateCustomVerificationEmailTemplate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=CreateCustomVerificationEmailTemplate'].$post(args, options),
  )
}

export async function getActionCreateReceiptFilter(
  args: InferRequestType<(typeof client)['#Action=CreateReceiptFilter']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateReceiptFilter'].$get(args, options))
}

export async function postActionCreateReceiptFilter(
  args: InferRequestType<(typeof client)['#Action=CreateReceiptFilter']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateReceiptFilter'].$post(args, options))
}

export async function getActionCreateReceiptRule(
  args: InferRequestType<(typeof client)['#Action=CreateReceiptRule']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateReceiptRule'].$get(args, options))
}

export async function postActionCreateReceiptRule(
  args: InferRequestType<(typeof client)['#Action=CreateReceiptRule']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateReceiptRule'].$post(args, options))
}

export async function getActionCreateReceiptRuleSet(
  args: InferRequestType<(typeof client)['#Action=CreateReceiptRuleSet']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateReceiptRuleSet'].$get(args, options))
}

export async function postActionCreateReceiptRuleSet(
  args: InferRequestType<(typeof client)['#Action=CreateReceiptRuleSet']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateReceiptRuleSet'].$post(args, options))
}

export async function getActionCreateTemplate(
  args: InferRequestType<(typeof client)['#Action=CreateTemplate']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateTemplate'].$get(args, options))
}

export async function postActionCreateTemplate(
  args: InferRequestType<(typeof client)['#Action=CreateTemplate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateTemplate'].$post(args, options))
}

export async function getActionDeleteConfigurationSet(
  args: InferRequestType<(typeof client)['#Action=DeleteConfigurationSet']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteConfigurationSet'].$get(args, options))
}

export async function postActionDeleteConfigurationSet(
  args: InferRequestType<(typeof client)['#Action=DeleteConfigurationSet']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteConfigurationSet'].$post(args, options))
}

export async function getActionDeleteConfigurationSetEventDestination(
  args: InferRequestType<(typeof client)['#Action=DeleteConfigurationSetEventDestination']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DeleteConfigurationSetEventDestination'].$get(args, options),
  )
}

export async function postActionDeleteConfigurationSetEventDestination(
  args: InferRequestType<
    (typeof client)['#Action=DeleteConfigurationSetEventDestination']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DeleteConfigurationSetEventDestination'].$post(args, options),
  )
}

export async function getActionDeleteConfigurationSetTrackingOptions(
  args: InferRequestType<(typeof client)['#Action=DeleteConfigurationSetTrackingOptions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DeleteConfigurationSetTrackingOptions'].$get(args, options),
  )
}

export async function postActionDeleteConfigurationSetTrackingOptions(
  args: InferRequestType<(typeof client)['#Action=DeleteConfigurationSetTrackingOptions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DeleteConfigurationSetTrackingOptions'].$post(args, options),
  )
}

export async function getActionDeleteCustomVerificationEmailTemplate(
  args: InferRequestType<(typeof client)['#Action=DeleteCustomVerificationEmailTemplate']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DeleteCustomVerificationEmailTemplate'].$get(args, options),
  )
}

export async function postActionDeleteCustomVerificationEmailTemplate(
  args: InferRequestType<(typeof client)['#Action=DeleteCustomVerificationEmailTemplate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DeleteCustomVerificationEmailTemplate'].$post(args, options),
  )
}

export async function getActionDeleteIdentity(
  args: InferRequestType<(typeof client)['#Action=DeleteIdentity']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteIdentity'].$get(args, options))
}

export async function postActionDeleteIdentity(
  args: InferRequestType<(typeof client)['#Action=DeleteIdentity']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteIdentity'].$post(args, options))
}

export async function getActionDeleteIdentityPolicy(
  args: InferRequestType<(typeof client)['#Action=DeleteIdentityPolicy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteIdentityPolicy'].$get(args, options))
}

export async function postActionDeleteIdentityPolicy(
  args: InferRequestType<(typeof client)['#Action=DeleteIdentityPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteIdentityPolicy'].$post(args, options))
}

export async function getActionDeleteReceiptFilter(
  args: InferRequestType<(typeof client)['#Action=DeleteReceiptFilter']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteReceiptFilter'].$get(args, options))
}

export async function postActionDeleteReceiptFilter(
  args: InferRequestType<(typeof client)['#Action=DeleteReceiptFilter']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteReceiptFilter'].$post(args, options))
}

export async function getActionDeleteReceiptRule(
  args: InferRequestType<(typeof client)['#Action=DeleteReceiptRule']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteReceiptRule'].$get(args, options))
}

export async function postActionDeleteReceiptRule(
  args: InferRequestType<(typeof client)['#Action=DeleteReceiptRule']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteReceiptRule'].$post(args, options))
}

export async function getActionDeleteReceiptRuleSet(
  args: InferRequestType<(typeof client)['#Action=DeleteReceiptRuleSet']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteReceiptRuleSet'].$get(args, options))
}

export async function postActionDeleteReceiptRuleSet(
  args: InferRequestType<(typeof client)['#Action=DeleteReceiptRuleSet']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteReceiptRuleSet'].$post(args, options))
}

export async function getActionDeleteTemplate(
  args: InferRequestType<(typeof client)['#Action=DeleteTemplate']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteTemplate'].$get(args, options))
}

export async function postActionDeleteTemplate(
  args: InferRequestType<(typeof client)['#Action=DeleteTemplate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteTemplate'].$post(args, options))
}

export async function getActionDeleteVerifiedEmailAddress(
  args: InferRequestType<(typeof client)['#Action=DeleteVerifiedEmailAddress']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteVerifiedEmailAddress'].$get(args, options))
}

export async function postActionDeleteVerifiedEmailAddress(
  args: InferRequestType<(typeof client)['#Action=DeleteVerifiedEmailAddress']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteVerifiedEmailAddress'].$post(args, options))
}

export async function getActionDescribeActiveReceiptRuleSet(
  args: InferRequestType<(typeof client)['#Action=DescribeActiveReceiptRuleSet']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeActiveReceiptRuleSet'].$get(args, options))
}

export async function postActionDescribeActiveReceiptRuleSet(
  args: InferRequestType<(typeof client)['#Action=DescribeActiveReceiptRuleSet']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeActiveReceiptRuleSet'].$post(args, options))
}

export async function getActionDescribeConfigurationSet(
  args: InferRequestType<(typeof client)['#Action=DescribeConfigurationSet']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeConfigurationSet'].$get(args, options))
}

export async function postActionDescribeConfigurationSet(
  args: InferRequestType<(typeof client)['#Action=DescribeConfigurationSet']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeConfigurationSet'].$post(args, options))
}

export async function getActionDescribeReceiptRule(
  args: InferRequestType<(typeof client)['#Action=DescribeReceiptRule']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeReceiptRule'].$get(args, options))
}

export async function postActionDescribeReceiptRule(
  args: InferRequestType<(typeof client)['#Action=DescribeReceiptRule']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeReceiptRule'].$post(args, options))
}

export async function getActionDescribeReceiptRuleSet(
  args: InferRequestType<(typeof client)['#Action=DescribeReceiptRuleSet']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeReceiptRuleSet'].$get(args, options))
}

export async function postActionDescribeReceiptRuleSet(
  args: InferRequestType<(typeof client)['#Action=DescribeReceiptRuleSet']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeReceiptRuleSet'].$post(args, options))
}

export async function getActionGetAccountSendingEnabled(
  args: InferRequestType<(typeof client)['#Action=GetAccountSendingEnabled']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetAccountSendingEnabled'].$get(args, options))
}

export async function postActionGetAccountSendingEnabled(
  args: InferRequestType<(typeof client)['#Action=GetAccountSendingEnabled']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetAccountSendingEnabled'].$post(args, options))
}

export async function getActionGetCustomVerificationEmailTemplate(
  args: InferRequestType<(typeof client)['#Action=GetCustomVerificationEmailTemplate']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=GetCustomVerificationEmailTemplate'].$get(args, options),
  )
}

export async function postActionGetCustomVerificationEmailTemplate(
  args: InferRequestType<(typeof client)['#Action=GetCustomVerificationEmailTemplate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=GetCustomVerificationEmailTemplate'].$post(args, options),
  )
}

export async function getActionGetIdentityDkimAttributes(
  args: InferRequestType<(typeof client)['#Action=GetIdentityDkimAttributes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetIdentityDkimAttributes'].$get(args, options))
}

export async function postActionGetIdentityDkimAttributes(
  args: InferRequestType<(typeof client)['#Action=GetIdentityDkimAttributes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetIdentityDkimAttributes'].$post(args, options))
}

export async function getActionGetIdentityMailFromDomainAttributes(
  args: InferRequestType<(typeof client)['#Action=GetIdentityMailFromDomainAttributes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=GetIdentityMailFromDomainAttributes'].$get(args, options),
  )
}

export async function postActionGetIdentityMailFromDomainAttributes(
  args: InferRequestType<(typeof client)['#Action=GetIdentityMailFromDomainAttributes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=GetIdentityMailFromDomainAttributes'].$post(args, options),
  )
}

export async function getActionGetIdentityNotificationAttributes(
  args: InferRequestType<(typeof client)['#Action=GetIdentityNotificationAttributes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=GetIdentityNotificationAttributes'].$get(args, options),
  )
}

export async function postActionGetIdentityNotificationAttributes(
  args: InferRequestType<(typeof client)['#Action=GetIdentityNotificationAttributes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=GetIdentityNotificationAttributes'].$post(args, options),
  )
}

export async function getActionGetIdentityPolicies(
  args: InferRequestType<(typeof client)['#Action=GetIdentityPolicies']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetIdentityPolicies'].$get(args, options))
}

export async function postActionGetIdentityPolicies(
  args: InferRequestType<(typeof client)['#Action=GetIdentityPolicies']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetIdentityPolicies'].$post(args, options))
}

export async function getActionGetIdentityVerificationAttributes(
  args: InferRequestType<(typeof client)['#Action=GetIdentityVerificationAttributes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=GetIdentityVerificationAttributes'].$get(args, options),
  )
}

export async function postActionGetIdentityVerificationAttributes(
  args: InferRequestType<(typeof client)['#Action=GetIdentityVerificationAttributes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=GetIdentityVerificationAttributes'].$post(args, options),
  )
}

export async function getActionGetSendQuota(
  args: InferRequestType<(typeof client)['#Action=GetSendQuota']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetSendQuota'].$get(args, options))
}

export async function postActionGetSendQuota(
  args: InferRequestType<(typeof client)['#Action=GetSendQuota']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetSendQuota'].$post(args, options))
}

export async function getActionGetSendStatistics(
  args: InferRequestType<(typeof client)['#Action=GetSendStatistics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetSendStatistics'].$get(args, options))
}

export async function postActionGetSendStatistics(
  args: InferRequestType<(typeof client)['#Action=GetSendStatistics']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetSendStatistics'].$post(args, options))
}

export async function getActionGetTemplate(
  args: InferRequestType<(typeof client)['#Action=GetTemplate']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetTemplate'].$get(args, options))
}

export async function postActionGetTemplate(
  args: InferRequestType<(typeof client)['#Action=GetTemplate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetTemplate'].$post(args, options))
}

export async function getActionListConfigurationSets(
  args: InferRequestType<(typeof client)['#Action=ListConfigurationSets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListConfigurationSets'].$get(args, options))
}

export async function postActionListConfigurationSets(
  args: InferRequestType<(typeof client)['#Action=ListConfigurationSets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListConfigurationSets'].$post(args, options))
}

export async function getActionListCustomVerificationEmailTemplates(
  args: InferRequestType<(typeof client)['#Action=ListCustomVerificationEmailTemplates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=ListCustomVerificationEmailTemplates'].$get(args, options),
  )
}

export async function postActionListCustomVerificationEmailTemplates(
  args: InferRequestType<(typeof client)['#Action=ListCustomVerificationEmailTemplates']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=ListCustomVerificationEmailTemplates'].$post(args, options),
  )
}

export async function getActionListIdentities(
  args: InferRequestType<(typeof client)['#Action=ListIdentities']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListIdentities'].$get(args, options))
}

export async function postActionListIdentities(
  args: InferRequestType<(typeof client)['#Action=ListIdentities']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListIdentities'].$post(args, options))
}

export async function getActionListIdentityPolicies(
  args: InferRequestType<(typeof client)['#Action=ListIdentityPolicies']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListIdentityPolicies'].$get(args, options))
}

export async function postActionListIdentityPolicies(
  args: InferRequestType<(typeof client)['#Action=ListIdentityPolicies']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListIdentityPolicies'].$post(args, options))
}

export async function getActionListReceiptFilters(
  args: InferRequestType<(typeof client)['#Action=ListReceiptFilters']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListReceiptFilters'].$get(args, options))
}

export async function postActionListReceiptFilters(
  args: InferRequestType<(typeof client)['#Action=ListReceiptFilters']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListReceiptFilters'].$post(args, options))
}

export async function getActionListReceiptRuleSets(
  args: InferRequestType<(typeof client)['#Action=ListReceiptRuleSets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListReceiptRuleSets'].$get(args, options))
}

export async function postActionListReceiptRuleSets(
  args: InferRequestType<(typeof client)['#Action=ListReceiptRuleSets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListReceiptRuleSets'].$post(args, options))
}

export async function getActionListTemplates(
  args: InferRequestType<(typeof client)['#Action=ListTemplates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListTemplates'].$get(args, options))
}

export async function postActionListTemplates(
  args: InferRequestType<(typeof client)['#Action=ListTemplates']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListTemplates'].$post(args, options))
}

export async function getActionListVerifiedEmailAddresses(
  args: InferRequestType<(typeof client)['#Action=ListVerifiedEmailAddresses']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListVerifiedEmailAddresses'].$get(args, options))
}

export async function postActionListVerifiedEmailAddresses(
  args: InferRequestType<(typeof client)['#Action=ListVerifiedEmailAddresses']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListVerifiedEmailAddresses'].$post(args, options))
}

export async function getActionPutConfigurationSetDeliveryOptions(
  args: InferRequestType<(typeof client)['#Action=PutConfigurationSetDeliveryOptions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=PutConfigurationSetDeliveryOptions'].$get(args, options),
  )
}

export async function postActionPutConfigurationSetDeliveryOptions(
  args: InferRequestType<(typeof client)['#Action=PutConfigurationSetDeliveryOptions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=PutConfigurationSetDeliveryOptions'].$post(args, options),
  )
}

export async function getActionPutIdentityPolicy(
  args: InferRequestType<(typeof client)['#Action=PutIdentityPolicy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=PutIdentityPolicy'].$get(args, options))
}

export async function postActionPutIdentityPolicy(
  args: InferRequestType<(typeof client)['#Action=PutIdentityPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=PutIdentityPolicy'].$post(args, options))
}

export async function getActionReorderReceiptRuleSet(
  args: InferRequestType<(typeof client)['#Action=ReorderReceiptRuleSet']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ReorderReceiptRuleSet'].$get(args, options))
}

export async function postActionReorderReceiptRuleSet(
  args: InferRequestType<(typeof client)['#Action=ReorderReceiptRuleSet']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ReorderReceiptRuleSet'].$post(args, options))
}

export async function getActionSendBounce(
  args: InferRequestType<(typeof client)['#Action=SendBounce']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=SendBounce'].$get(args, options))
}

export async function postActionSendBounce(
  args: InferRequestType<(typeof client)['#Action=SendBounce']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=SendBounce'].$post(args, options))
}

export async function getActionSendBulkTemplatedEmail(
  args: InferRequestType<(typeof client)['#Action=SendBulkTemplatedEmail']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=SendBulkTemplatedEmail'].$get(args, options))
}

export async function postActionSendBulkTemplatedEmail(
  args: InferRequestType<(typeof client)['#Action=SendBulkTemplatedEmail']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=SendBulkTemplatedEmail'].$post(args, options))
}

export async function getActionSendCustomVerificationEmail(
  args: InferRequestType<(typeof client)['#Action=SendCustomVerificationEmail']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=SendCustomVerificationEmail'].$get(args, options))
}

export async function postActionSendCustomVerificationEmail(
  args: InferRequestType<(typeof client)['#Action=SendCustomVerificationEmail']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=SendCustomVerificationEmail'].$post(args, options))
}

export async function getActionSendEmail(
  args: InferRequestType<(typeof client)['#Action=SendEmail']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=SendEmail'].$get(args, options))
}

export async function postActionSendEmail(
  args: InferRequestType<(typeof client)['#Action=SendEmail']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=SendEmail'].$post(args, options))
}

export async function getActionSendRawEmail(
  args: InferRequestType<(typeof client)['#Action=SendRawEmail']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=SendRawEmail'].$get(args, options))
}

export async function postActionSendRawEmail(
  args: InferRequestType<(typeof client)['#Action=SendRawEmail']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=SendRawEmail'].$post(args, options))
}

export async function getActionSendTemplatedEmail(
  args: InferRequestType<(typeof client)['#Action=SendTemplatedEmail']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=SendTemplatedEmail'].$get(args, options))
}

export async function postActionSendTemplatedEmail(
  args: InferRequestType<(typeof client)['#Action=SendTemplatedEmail']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=SendTemplatedEmail'].$post(args, options))
}

export async function getActionSetActiveReceiptRuleSet(
  args: InferRequestType<(typeof client)['#Action=SetActiveReceiptRuleSet']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=SetActiveReceiptRuleSet'].$get(args, options))
}

export async function postActionSetActiveReceiptRuleSet(
  args: InferRequestType<(typeof client)['#Action=SetActiveReceiptRuleSet']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=SetActiveReceiptRuleSet'].$post(args, options))
}

export async function getActionSetIdentityDkimEnabled(
  args: InferRequestType<(typeof client)['#Action=SetIdentityDkimEnabled']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=SetIdentityDkimEnabled'].$get(args, options))
}

export async function postActionSetIdentityDkimEnabled(
  args: InferRequestType<(typeof client)['#Action=SetIdentityDkimEnabled']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=SetIdentityDkimEnabled'].$post(args, options))
}

export async function getActionSetIdentityFeedbackForwardingEnabled(
  args: InferRequestType<(typeof client)['#Action=SetIdentityFeedbackForwardingEnabled']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=SetIdentityFeedbackForwardingEnabled'].$get(args, options),
  )
}

export async function postActionSetIdentityFeedbackForwardingEnabled(
  args: InferRequestType<(typeof client)['#Action=SetIdentityFeedbackForwardingEnabled']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=SetIdentityFeedbackForwardingEnabled'].$post(args, options),
  )
}

export async function getActionSetIdentityHeadersInNotificationsEnabled(
  args: InferRequestType<
    (typeof client)['#Action=SetIdentityHeadersInNotificationsEnabled']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=SetIdentityHeadersInNotificationsEnabled'].$get(args, options),
  )
}

export async function postActionSetIdentityHeadersInNotificationsEnabled(
  args: InferRequestType<
    (typeof client)['#Action=SetIdentityHeadersInNotificationsEnabled']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=SetIdentityHeadersInNotificationsEnabled'].$post(args, options),
  )
}

export async function getActionSetIdentityMailFromDomain(
  args: InferRequestType<(typeof client)['#Action=SetIdentityMailFromDomain']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=SetIdentityMailFromDomain'].$get(args, options))
}

export async function postActionSetIdentityMailFromDomain(
  args: InferRequestType<(typeof client)['#Action=SetIdentityMailFromDomain']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=SetIdentityMailFromDomain'].$post(args, options))
}

export async function getActionSetIdentityNotificationTopic(
  args: InferRequestType<(typeof client)['#Action=SetIdentityNotificationTopic']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=SetIdentityNotificationTopic'].$get(args, options))
}

export async function postActionSetIdentityNotificationTopic(
  args: InferRequestType<(typeof client)['#Action=SetIdentityNotificationTopic']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=SetIdentityNotificationTopic'].$post(args, options))
}

export async function getActionSetReceiptRulePosition(
  args: InferRequestType<(typeof client)['#Action=SetReceiptRulePosition']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=SetReceiptRulePosition'].$get(args, options))
}

export async function postActionSetReceiptRulePosition(
  args: InferRequestType<(typeof client)['#Action=SetReceiptRulePosition']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=SetReceiptRulePosition'].$post(args, options))
}

export async function getActionTestRenderTemplate(
  args: InferRequestType<(typeof client)['#Action=TestRenderTemplate']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=TestRenderTemplate'].$get(args, options))
}

export async function postActionTestRenderTemplate(
  args: InferRequestType<(typeof client)['#Action=TestRenderTemplate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=TestRenderTemplate'].$post(args, options))
}

export async function getActionUpdateAccountSendingEnabled(
  args: InferRequestType<(typeof client)['#Action=UpdateAccountSendingEnabled']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UpdateAccountSendingEnabled'].$get(args, options))
}

export async function postActionUpdateAccountSendingEnabled(
  args: InferRequestType<(typeof client)['#Action=UpdateAccountSendingEnabled']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UpdateAccountSendingEnabled'].$post(args, options))
}

export async function getActionUpdateConfigurationSetEventDestination(
  args: InferRequestType<(typeof client)['#Action=UpdateConfigurationSetEventDestination']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=UpdateConfigurationSetEventDestination'].$get(args, options),
  )
}

export async function postActionUpdateConfigurationSetEventDestination(
  args: InferRequestType<
    (typeof client)['#Action=UpdateConfigurationSetEventDestination']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=UpdateConfigurationSetEventDestination'].$post(args, options),
  )
}

export async function getActionUpdateConfigurationSetReputationMetricsEnabled(
  args: InferRequestType<
    (typeof client)['#Action=UpdateConfigurationSetReputationMetricsEnabled']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=UpdateConfigurationSetReputationMetricsEnabled'].$get(args, options),
  )
}

export async function postActionUpdateConfigurationSetReputationMetricsEnabled(
  args: InferRequestType<
    (typeof client)['#Action=UpdateConfigurationSetReputationMetricsEnabled']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=UpdateConfigurationSetReputationMetricsEnabled'].$post(args, options),
  )
}

export async function getActionUpdateConfigurationSetSendingEnabled(
  args: InferRequestType<(typeof client)['#Action=UpdateConfigurationSetSendingEnabled']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=UpdateConfigurationSetSendingEnabled'].$get(args, options),
  )
}

export async function postActionUpdateConfigurationSetSendingEnabled(
  args: InferRequestType<(typeof client)['#Action=UpdateConfigurationSetSendingEnabled']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=UpdateConfigurationSetSendingEnabled'].$post(args, options),
  )
}

export async function getActionUpdateConfigurationSetTrackingOptions(
  args: InferRequestType<(typeof client)['#Action=UpdateConfigurationSetTrackingOptions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=UpdateConfigurationSetTrackingOptions'].$get(args, options),
  )
}

export async function postActionUpdateConfigurationSetTrackingOptions(
  args: InferRequestType<(typeof client)['#Action=UpdateConfigurationSetTrackingOptions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=UpdateConfigurationSetTrackingOptions'].$post(args, options),
  )
}

export async function getActionUpdateCustomVerificationEmailTemplate(
  args: InferRequestType<(typeof client)['#Action=UpdateCustomVerificationEmailTemplate']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=UpdateCustomVerificationEmailTemplate'].$get(args, options),
  )
}

export async function postActionUpdateCustomVerificationEmailTemplate(
  args: InferRequestType<(typeof client)['#Action=UpdateCustomVerificationEmailTemplate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=UpdateCustomVerificationEmailTemplate'].$post(args, options),
  )
}

export async function getActionUpdateReceiptRule(
  args: InferRequestType<(typeof client)['#Action=UpdateReceiptRule']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UpdateReceiptRule'].$get(args, options))
}

export async function postActionUpdateReceiptRule(
  args: InferRequestType<(typeof client)['#Action=UpdateReceiptRule']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UpdateReceiptRule'].$post(args, options))
}

export async function getActionUpdateTemplate(
  args: InferRequestType<(typeof client)['#Action=UpdateTemplate']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UpdateTemplate'].$get(args, options))
}

export async function postActionUpdateTemplate(
  args: InferRequestType<(typeof client)['#Action=UpdateTemplate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UpdateTemplate'].$post(args, options))
}

export async function getActionVerifyDomainDkim(
  args: InferRequestType<(typeof client)['#Action=VerifyDomainDkim']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=VerifyDomainDkim'].$get(args, options))
}

export async function postActionVerifyDomainDkim(
  args: InferRequestType<(typeof client)['#Action=VerifyDomainDkim']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=VerifyDomainDkim'].$post(args, options))
}

export async function getActionVerifyDomainIdentity(
  args: InferRequestType<(typeof client)['#Action=VerifyDomainIdentity']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=VerifyDomainIdentity'].$get(args, options))
}

export async function postActionVerifyDomainIdentity(
  args: InferRequestType<(typeof client)['#Action=VerifyDomainIdentity']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=VerifyDomainIdentity'].$post(args, options))
}

export async function getActionVerifyEmailAddress(
  args: InferRequestType<(typeof client)['#Action=VerifyEmailAddress']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=VerifyEmailAddress'].$get(args, options))
}

export async function postActionVerifyEmailAddress(
  args: InferRequestType<(typeof client)['#Action=VerifyEmailAddress']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=VerifyEmailAddress'].$post(args, options))
}

export async function getActionVerifyEmailIdentity(
  args: InferRequestType<(typeof client)['#Action=VerifyEmailIdentity']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=VerifyEmailIdentity'].$get(args, options))
}

export async function postActionVerifyEmailIdentity(
  args: InferRequestType<(typeof client)['#Action=VerifyEmailIdentity']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=VerifyEmailIdentity'].$post(args, options))
}
