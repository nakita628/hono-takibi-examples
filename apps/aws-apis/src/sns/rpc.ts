import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getActionAddPermission(
  args: InferRequestType<(typeof client)['#Action=AddPermission']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AddPermission'].$get(args, options))
}

export async function postActionAddPermission(
  args: InferRequestType<(typeof client)['#Action=AddPermission']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AddPermission'].$post(args, options))
}

export async function getActionCheckIfPhoneNumberIsOptedOut(
  args: InferRequestType<(typeof client)['#Action=CheckIfPhoneNumberIsOptedOut']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CheckIfPhoneNumberIsOptedOut'].$get(args, options))
}

export async function postActionCheckIfPhoneNumberIsOptedOut(
  args: InferRequestType<(typeof client)['#Action=CheckIfPhoneNumberIsOptedOut']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CheckIfPhoneNumberIsOptedOut'].$post(args, options))
}

export async function getActionConfirmSubscription(
  args: InferRequestType<(typeof client)['#Action=ConfirmSubscription']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ConfirmSubscription'].$get(args, options))
}

export async function postActionConfirmSubscription(
  args: InferRequestType<(typeof client)['#Action=ConfirmSubscription']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ConfirmSubscription'].$post(args, options))
}

export async function getActionCreatePlatformApplication(
  args: InferRequestType<(typeof client)['#Action=CreatePlatformApplication']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreatePlatformApplication'].$get(args, options))
}

export async function postActionCreatePlatformApplication(
  args: InferRequestType<(typeof client)['#Action=CreatePlatformApplication']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreatePlatformApplication'].$post(args, options))
}

export async function getActionCreatePlatformEndpoint(
  args: InferRequestType<(typeof client)['#Action=CreatePlatformEndpoint']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreatePlatformEndpoint'].$get(args, options))
}

export async function postActionCreatePlatformEndpoint(
  args: InferRequestType<(typeof client)['#Action=CreatePlatformEndpoint']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreatePlatformEndpoint'].$post(args, options))
}

export async function getActionCreateSMSSandboxPhoneNumber(
  args: InferRequestType<(typeof client)['#Action=CreateSMSSandboxPhoneNumber']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateSMSSandboxPhoneNumber'].$get(args, options))
}

export async function postActionCreateSMSSandboxPhoneNumber(
  args: InferRequestType<(typeof client)['#Action=CreateSMSSandboxPhoneNumber']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateSMSSandboxPhoneNumber'].$post(args, options))
}

export async function getActionCreateTopic(
  args: InferRequestType<(typeof client)['#Action=CreateTopic']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateTopic'].$get(args, options))
}

export async function postActionCreateTopic(
  args: InferRequestType<(typeof client)['#Action=CreateTopic']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateTopic'].$post(args, options))
}

export async function getActionDeleteEndpoint(
  args: InferRequestType<(typeof client)['#Action=DeleteEndpoint']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteEndpoint'].$get(args, options))
}

export async function postActionDeleteEndpoint(
  args: InferRequestType<(typeof client)['#Action=DeleteEndpoint']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteEndpoint'].$post(args, options))
}

export async function getActionDeletePlatformApplication(
  args: InferRequestType<(typeof client)['#Action=DeletePlatformApplication']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeletePlatformApplication'].$get(args, options))
}

export async function postActionDeletePlatformApplication(
  args: InferRequestType<(typeof client)['#Action=DeletePlatformApplication']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeletePlatformApplication'].$post(args, options))
}

export async function getActionDeleteSMSSandboxPhoneNumber(
  args: InferRequestType<(typeof client)['#Action=DeleteSMSSandboxPhoneNumber']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteSMSSandboxPhoneNumber'].$get(args, options))
}

export async function postActionDeleteSMSSandboxPhoneNumber(
  args: InferRequestType<(typeof client)['#Action=DeleteSMSSandboxPhoneNumber']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteSMSSandboxPhoneNumber'].$post(args, options))
}

export async function getActionDeleteTopic(
  args: InferRequestType<(typeof client)['#Action=DeleteTopic']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteTopic'].$get(args, options))
}

export async function postActionDeleteTopic(
  args: InferRequestType<(typeof client)['#Action=DeleteTopic']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteTopic'].$post(args, options))
}

export async function getActionGetDataProtectionPolicy(
  args: InferRequestType<(typeof client)['#Action=GetDataProtectionPolicy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetDataProtectionPolicy'].$get(args, options))
}

export async function postActionGetDataProtectionPolicy(
  args: InferRequestType<(typeof client)['#Action=GetDataProtectionPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetDataProtectionPolicy'].$post(args, options))
}

export async function getActionGetEndpointAttributes(
  args: InferRequestType<(typeof client)['#Action=GetEndpointAttributes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetEndpointAttributes'].$get(args, options))
}

export async function postActionGetEndpointAttributes(
  args: InferRequestType<(typeof client)['#Action=GetEndpointAttributes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetEndpointAttributes'].$post(args, options))
}

export async function getActionGetPlatformApplicationAttributes(
  args: InferRequestType<(typeof client)['#Action=GetPlatformApplicationAttributes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetPlatformApplicationAttributes'].$get(args, options))
}

export async function postActionGetPlatformApplicationAttributes(
  args: InferRequestType<(typeof client)['#Action=GetPlatformApplicationAttributes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=GetPlatformApplicationAttributes'].$post(args, options),
  )
}

export async function getActionGetSMSAttributes(
  args: InferRequestType<(typeof client)['#Action=GetSMSAttributes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetSMSAttributes'].$get(args, options))
}

export async function postActionGetSMSAttributes(
  args: InferRequestType<(typeof client)['#Action=GetSMSAttributes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetSMSAttributes'].$post(args, options))
}

export async function getActionGetSMSSandboxAccountStatus(
  args: InferRequestType<(typeof client)['#Action=GetSMSSandboxAccountStatus']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetSMSSandboxAccountStatus'].$get(args, options))
}

export async function postActionGetSMSSandboxAccountStatus(
  args: InferRequestType<(typeof client)['#Action=GetSMSSandboxAccountStatus']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetSMSSandboxAccountStatus'].$post(args, options))
}

export async function getActionGetSubscriptionAttributes(
  args: InferRequestType<(typeof client)['#Action=GetSubscriptionAttributes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetSubscriptionAttributes'].$get(args, options))
}

export async function postActionGetSubscriptionAttributes(
  args: InferRequestType<(typeof client)['#Action=GetSubscriptionAttributes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetSubscriptionAttributes'].$post(args, options))
}

export async function getActionGetTopicAttributes(
  args: InferRequestType<(typeof client)['#Action=GetTopicAttributes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetTopicAttributes'].$get(args, options))
}

export async function postActionGetTopicAttributes(
  args: InferRequestType<(typeof client)['#Action=GetTopicAttributes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetTopicAttributes'].$post(args, options))
}

export async function getActionListEndpointsByPlatformApplication(
  args: InferRequestType<(typeof client)['#Action=ListEndpointsByPlatformApplication']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=ListEndpointsByPlatformApplication'].$get(args, options),
  )
}

export async function postActionListEndpointsByPlatformApplication(
  args: InferRequestType<(typeof client)['#Action=ListEndpointsByPlatformApplication']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=ListEndpointsByPlatformApplication'].$post(args, options),
  )
}

export async function getActionListOriginationNumbers(
  args: InferRequestType<(typeof client)['#Action=ListOriginationNumbers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListOriginationNumbers'].$get(args, options))
}

export async function postActionListOriginationNumbers(
  args: InferRequestType<(typeof client)['#Action=ListOriginationNumbers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListOriginationNumbers'].$post(args, options))
}

export async function getActionListPhoneNumbersOptedOut(
  args: InferRequestType<(typeof client)['#Action=ListPhoneNumbersOptedOut']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListPhoneNumbersOptedOut'].$get(args, options))
}

export async function postActionListPhoneNumbersOptedOut(
  args: InferRequestType<(typeof client)['#Action=ListPhoneNumbersOptedOut']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListPhoneNumbersOptedOut'].$post(args, options))
}

export async function getActionListPlatformApplications(
  args: InferRequestType<(typeof client)['#Action=ListPlatformApplications']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListPlatformApplications'].$get(args, options))
}

export async function postActionListPlatformApplications(
  args: InferRequestType<(typeof client)['#Action=ListPlatformApplications']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListPlatformApplications'].$post(args, options))
}

export async function getActionListSMSSandboxPhoneNumbers(
  args: InferRequestType<(typeof client)['#Action=ListSMSSandboxPhoneNumbers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListSMSSandboxPhoneNumbers'].$get(args, options))
}

export async function postActionListSMSSandboxPhoneNumbers(
  args: InferRequestType<(typeof client)['#Action=ListSMSSandboxPhoneNumbers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListSMSSandboxPhoneNumbers'].$post(args, options))
}

export async function getActionListSubscriptions(
  args: InferRequestType<(typeof client)['#Action=ListSubscriptions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListSubscriptions'].$get(args, options))
}

export async function postActionListSubscriptions(
  args: InferRequestType<(typeof client)['#Action=ListSubscriptions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListSubscriptions'].$post(args, options))
}

export async function getActionListSubscriptionsByTopic(
  args: InferRequestType<(typeof client)['#Action=ListSubscriptionsByTopic']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListSubscriptionsByTopic'].$get(args, options))
}

export async function postActionListSubscriptionsByTopic(
  args: InferRequestType<(typeof client)['#Action=ListSubscriptionsByTopic']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListSubscriptionsByTopic'].$post(args, options))
}

export async function getActionListTagsForResource(
  args: InferRequestType<(typeof client)['#Action=ListTagsForResource']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListTagsForResource'].$get(args, options))
}

export async function postActionListTagsForResource(
  args: InferRequestType<(typeof client)['#Action=ListTagsForResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListTagsForResource'].$post(args, options))
}

export async function getActionListTopics(
  args: InferRequestType<(typeof client)['#Action=ListTopics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListTopics'].$get(args, options))
}

export async function postActionListTopics(
  args: InferRequestType<(typeof client)['#Action=ListTopics']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListTopics'].$post(args, options))
}

export async function getActionOptInPhoneNumber(
  args: InferRequestType<(typeof client)['#Action=OptInPhoneNumber']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=OptInPhoneNumber'].$get(args, options))
}

export async function postActionOptInPhoneNumber(
  args: InferRequestType<(typeof client)['#Action=OptInPhoneNumber']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=OptInPhoneNumber'].$post(args, options))
}

export async function getActionPublish(
  args: InferRequestType<(typeof client)['#Action=Publish']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=Publish'].$get(args, options))
}

export async function postActionPublish(
  args: InferRequestType<(typeof client)['#Action=Publish']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=Publish'].$post(args, options))
}

export async function getActionPublishBatch(
  args: InferRequestType<(typeof client)['#Action=PublishBatch']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=PublishBatch'].$get(args, options))
}

export async function postActionPublishBatch(
  args: InferRequestType<(typeof client)['#Action=PublishBatch']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=PublishBatch'].$post(args, options))
}

export async function getActionPutDataProtectionPolicy(
  args: InferRequestType<(typeof client)['#Action=PutDataProtectionPolicy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=PutDataProtectionPolicy'].$get(args, options))
}

export async function postActionPutDataProtectionPolicy(
  args: InferRequestType<(typeof client)['#Action=PutDataProtectionPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=PutDataProtectionPolicy'].$post(args, options))
}

export async function getActionRemovePermission(
  args: InferRequestType<(typeof client)['#Action=RemovePermission']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RemovePermission'].$get(args, options))
}

export async function postActionRemovePermission(
  args: InferRequestType<(typeof client)['#Action=RemovePermission']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RemovePermission'].$post(args, options))
}

export async function getActionSetEndpointAttributes(
  args: InferRequestType<(typeof client)['#Action=SetEndpointAttributes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=SetEndpointAttributes'].$get(args, options))
}

export async function postActionSetEndpointAttributes(
  args: InferRequestType<(typeof client)['#Action=SetEndpointAttributes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=SetEndpointAttributes'].$post(args, options))
}

export async function getActionSetPlatformApplicationAttributes(
  args: InferRequestType<(typeof client)['#Action=SetPlatformApplicationAttributes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=SetPlatformApplicationAttributes'].$get(args, options))
}

export async function postActionSetPlatformApplicationAttributes(
  args: InferRequestType<(typeof client)['#Action=SetPlatformApplicationAttributes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=SetPlatformApplicationAttributes'].$post(args, options),
  )
}

export async function getActionSetSMSAttributes(
  args: InferRequestType<(typeof client)['#Action=SetSMSAttributes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=SetSMSAttributes'].$get(args, options))
}

export async function postActionSetSMSAttributes(
  args: InferRequestType<(typeof client)['#Action=SetSMSAttributes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=SetSMSAttributes'].$post(args, options))
}

export async function getActionSetSubscriptionAttributes(
  args: InferRequestType<(typeof client)['#Action=SetSubscriptionAttributes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=SetSubscriptionAttributes'].$get(args, options))
}

export async function postActionSetSubscriptionAttributes(
  args: InferRequestType<(typeof client)['#Action=SetSubscriptionAttributes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=SetSubscriptionAttributes'].$post(args, options))
}

export async function getActionSetTopicAttributes(
  args: InferRequestType<(typeof client)['#Action=SetTopicAttributes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=SetTopicAttributes'].$get(args, options))
}

export async function postActionSetTopicAttributes(
  args: InferRequestType<(typeof client)['#Action=SetTopicAttributes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=SetTopicAttributes'].$post(args, options))
}

export async function getActionSubscribe(
  args: InferRequestType<(typeof client)['#Action=Subscribe']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=Subscribe'].$get(args, options))
}

export async function postActionSubscribe(
  args: InferRequestType<(typeof client)['#Action=Subscribe']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=Subscribe'].$post(args, options))
}

export async function getActionTagResource(
  args: InferRequestType<(typeof client)['#Action=TagResource']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=TagResource'].$get(args, options))
}

export async function postActionTagResource(
  args: InferRequestType<(typeof client)['#Action=TagResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=TagResource'].$post(args, options))
}

export async function getActionUnsubscribe(
  args: InferRequestType<(typeof client)['#Action=Unsubscribe']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=Unsubscribe'].$get(args, options))
}

export async function postActionUnsubscribe(
  args: InferRequestType<(typeof client)['#Action=Unsubscribe']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=Unsubscribe'].$post(args, options))
}

export async function getActionUntagResource(
  args: InferRequestType<(typeof client)['#Action=UntagResource']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UntagResource'].$get(args, options))
}

export async function postActionUntagResource(
  args: InferRequestType<(typeof client)['#Action=UntagResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UntagResource'].$post(args, options))
}

export async function getActionVerifySMSSandboxPhoneNumber(
  args: InferRequestType<(typeof client)['#Action=VerifySMSSandboxPhoneNumber']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=VerifySMSSandboxPhoneNumber'].$get(args, options))
}

export async function postActionVerifySMSSandboxPhoneNumber(
  args: InferRequestType<(typeof client)['#Action=VerifySMSSandboxPhoneNumber']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=VerifySMSSandboxPhoneNumber'].$post(args, options))
}
