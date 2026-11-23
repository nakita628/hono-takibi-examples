import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetSSMContactsAcceptPage(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.AcceptPage']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SSMContacts.AcceptPage'].$post(args, options))
}

export async function postXAmzTargetSSMContactsActivateContactChannel(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SSMContacts.ActivateContactChannel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SSMContacts.ActivateContactChannel'].$post(args, options),
  )
}

export async function postXAmzTargetSSMContactsCreateContact(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.CreateContact']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SSMContacts.CreateContact'].$post(args, options))
}

export async function postXAmzTargetSSMContactsCreateContactChannel(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SSMContacts.CreateContactChannel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SSMContacts.CreateContactChannel'].$post(args, options),
  )
}

export async function postXAmzTargetSSMContactsCreateRotation(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.CreateRotation']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SSMContacts.CreateRotation'].$post(args, options),
  )
}

export async function postXAmzTargetSSMContactsCreateRotationOverride(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SSMContacts.CreateRotationOverride']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SSMContacts.CreateRotationOverride'].$post(args, options),
  )
}

export async function postXAmzTargetSSMContactsDeactivateContactChannel(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SSMContacts.DeactivateContactChannel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SSMContacts.DeactivateContactChannel'].$post(args, options),
  )
}

export async function postXAmzTargetSSMContactsDeleteContact(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.DeleteContact']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SSMContacts.DeleteContact'].$post(args, options))
}

export async function postXAmzTargetSSMContactsDeleteContactChannel(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SSMContacts.DeleteContactChannel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SSMContacts.DeleteContactChannel'].$post(args, options),
  )
}

export async function postXAmzTargetSSMContactsDeleteRotation(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.DeleteRotation']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SSMContacts.DeleteRotation'].$post(args, options),
  )
}

export async function postXAmzTargetSSMContactsDeleteRotationOverride(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SSMContacts.DeleteRotationOverride']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SSMContacts.DeleteRotationOverride'].$post(args, options),
  )
}

export async function postXAmzTargetSSMContactsDescribeEngagement(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.DescribeEngagement']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SSMContacts.DescribeEngagement'].$post(args, options),
  )
}

export async function postXAmzTargetSSMContactsDescribePage(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.DescribePage']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SSMContacts.DescribePage'].$post(args, options))
}

export async function postXAmzTargetSSMContactsGetContact(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.GetContact']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SSMContacts.GetContact'].$post(args, options))
}

export async function postXAmzTargetSSMContactsGetContactChannel(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.GetContactChannel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SSMContacts.GetContactChannel'].$post(args, options),
  )
}

export async function postXAmzTargetSSMContactsGetContactPolicy(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.GetContactPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SSMContacts.GetContactPolicy'].$post(args, options),
  )
}

export async function postXAmzTargetSSMContactsGetRotation(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.GetRotation']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SSMContacts.GetRotation'].$post(args, options))
}

export async function postXAmzTargetSSMContactsGetRotationOverride(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.GetRotationOverride']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SSMContacts.GetRotationOverride'].$post(args, options),
  )
}

export async function postXAmzTargetSSMContactsListContactChannels(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.ListContactChannels']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SSMContacts.ListContactChannels'].$post(args, options),
  )
}

export async function postXAmzTargetSSMContactsListContacts(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.ListContacts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SSMContacts.ListContacts'].$post(args, options))
}

export async function postXAmzTargetSSMContactsListEngagements(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.ListEngagements']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SSMContacts.ListEngagements'].$post(args, options),
  )
}

export async function postXAmzTargetSSMContactsListPageReceipts(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.ListPageReceipts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SSMContacts.ListPageReceipts'].$post(args, options),
  )
}

export async function postXAmzTargetSSMContactsListPageResolutions(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.ListPageResolutions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SSMContacts.ListPageResolutions'].$post(args, options),
  )
}

export async function postXAmzTargetSSMContactsListPagesByContact(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.ListPagesByContact']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SSMContacts.ListPagesByContact'].$post(args, options),
  )
}

export async function postXAmzTargetSSMContactsListPagesByEngagement(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SSMContacts.ListPagesByEngagement']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SSMContacts.ListPagesByEngagement'].$post(args, options),
  )
}

export async function postXAmzTargetSSMContactsListPreviewRotationShifts(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SSMContacts.ListPreviewRotationShifts']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SSMContacts.ListPreviewRotationShifts'].$post(args, options),
  )
}

export async function postXAmzTargetSSMContactsListRotationOverrides(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SSMContacts.ListRotationOverrides']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SSMContacts.ListRotationOverrides'].$post(args, options),
  )
}

export async function postXAmzTargetSSMContactsListRotationShifts(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.ListRotationShifts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SSMContacts.ListRotationShifts'].$post(args, options),
  )
}

export async function postXAmzTargetSSMContactsListRotations(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.ListRotations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SSMContacts.ListRotations'].$post(args, options))
}

export async function postXAmzTargetSSMContactsListTagsForResource(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.ListTagsForResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SSMContacts.ListTagsForResource'].$post(args, options),
  )
}

export async function postXAmzTargetSSMContactsPutContactPolicy(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.PutContactPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SSMContacts.PutContactPolicy'].$post(args, options),
  )
}

export async function postXAmzTargetSSMContactsSendActivationCode(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.SendActivationCode']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SSMContacts.SendActivationCode'].$post(args, options),
  )
}

export async function postXAmzTargetSSMContactsStartEngagement(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.StartEngagement']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SSMContacts.StartEngagement'].$post(args, options),
  )
}

export async function postXAmzTargetSSMContactsStopEngagement(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.StopEngagement']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SSMContacts.StopEngagement'].$post(args, options),
  )
}

export async function postXAmzTargetSSMContactsTagResource(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.TagResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SSMContacts.TagResource'].$post(args, options))
}

export async function postXAmzTargetSSMContactsUntagResource(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.UntagResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SSMContacts.UntagResource'].$post(args, options))
}

export async function postXAmzTargetSSMContactsUpdateContact(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.UpdateContact']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=SSMContacts.UpdateContact'].$post(args, options))
}

export async function postXAmzTargetSSMContactsUpdateContactChannel(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SSMContacts.UpdateContactChannel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SSMContacts.UpdateContactChannel'].$post(args, options),
  )
}

export async function postXAmzTargetSSMContactsUpdateRotation(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SSMContacts.UpdateRotation']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SSMContacts.UpdateRotation'].$post(args, options),
  )
}
