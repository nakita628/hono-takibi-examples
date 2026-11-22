import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetRoute53DomainsV20140515AcceptDomainTransferFromAnotherAwsAccount(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Domains_v20140515.AcceptDomainTransferFromAnotherAwsAccount']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=Route53Domains_v20140515.AcceptDomainTransferFromAnotherAwsAccount'
    ].$post(args, options),
  )
}

export async function postXAmzTargetRoute53DomainsV20140515AssociateDelegationSignerToDomain(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Domains_v20140515.AssociateDelegationSignerToDomain']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Domains_v20140515.AssociateDelegationSignerToDomain'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetRoute53DomainsV20140515CancelDomainTransferToAnotherAwsAccount(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Domains_v20140515.CancelDomainTransferToAnotherAwsAccount']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Domains_v20140515.CancelDomainTransferToAnotherAwsAccount'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetRoute53DomainsV20140515CheckDomainAvailability(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Domains_v20140515.CheckDomainAvailability']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Domains_v20140515.CheckDomainAvailability'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53DomainsV20140515CheckDomainTransferability(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Domains_v20140515.CheckDomainTransferability']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Domains_v20140515.CheckDomainTransferability'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetRoute53DomainsV20140515DeleteDomain(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Domains_v20140515.DeleteDomain']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Domains_v20140515.DeleteDomain'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53DomainsV20140515DeleteTagsForDomain(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Domains_v20140515.DeleteTagsForDomain']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Domains_v20140515.DeleteTagsForDomain'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53DomainsV20140515DisableDomainAutoRenew(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Domains_v20140515.DisableDomainAutoRenew']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Domains_v20140515.DisableDomainAutoRenew'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53DomainsV20140515DisableDomainTransferLock(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Domains_v20140515.DisableDomainTransferLock']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Domains_v20140515.DisableDomainTransferLock'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53DomainsV20140515DisassociateDelegationSignerFromDomain(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Domains_v20140515.DisassociateDelegationSignerFromDomain']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Domains_v20140515.DisassociateDelegationSignerFromDomain'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetRoute53DomainsV20140515EnableDomainAutoRenew(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Domains_v20140515.EnableDomainAutoRenew']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Domains_v20140515.EnableDomainAutoRenew'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53DomainsV20140515EnableDomainTransferLock(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Domains_v20140515.EnableDomainTransferLock']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Domains_v20140515.EnableDomainTransferLock'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53DomainsV20140515GetContactReachabilityStatus(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Domains_v20140515.GetContactReachabilityStatus']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Domains_v20140515.GetContactReachabilityStatus'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetRoute53DomainsV20140515GetDomainDetail(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Domains_v20140515.GetDomainDetail']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Domains_v20140515.GetDomainDetail'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53DomainsV20140515GetDomainSuggestions(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Domains_v20140515.GetDomainSuggestions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Domains_v20140515.GetDomainSuggestions'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53DomainsV20140515GetOperationDetail(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Domains_v20140515.GetOperationDetail']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Domains_v20140515.GetOperationDetail'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53DomainsV20140515ListDomains(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Domains_v20140515.ListDomains']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Domains_v20140515.ListDomains'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53DomainsV20140515ListOperations(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Domains_v20140515.ListOperations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Domains_v20140515.ListOperations'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53DomainsV20140515ListPrices(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Domains_v20140515.ListPrices']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Domains_v20140515.ListPrices'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53DomainsV20140515ListTagsForDomain(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Domains_v20140515.ListTagsForDomain']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Domains_v20140515.ListTagsForDomain'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53DomainsV20140515PushDomain(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Domains_v20140515.PushDomain']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Domains_v20140515.PushDomain'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53DomainsV20140515RegisterDomain(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Domains_v20140515.RegisterDomain']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Domains_v20140515.RegisterDomain'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53DomainsV20140515RejectDomainTransferFromAnotherAwsAccount(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Domains_v20140515.RejectDomainTransferFromAnotherAwsAccount']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=Route53Domains_v20140515.RejectDomainTransferFromAnotherAwsAccount'
    ].$post(args, options),
  )
}

export async function postXAmzTargetRoute53DomainsV20140515RenewDomain(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Domains_v20140515.RenewDomain']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Domains_v20140515.RenewDomain'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53DomainsV20140515ResendContactReachabilityEmail(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Domains_v20140515.ResendContactReachabilityEmail']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Domains_v20140515.ResendContactReachabilityEmail'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetRoute53DomainsV20140515ResendOperationAuthorization(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Domains_v20140515.ResendOperationAuthorization']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Domains_v20140515.ResendOperationAuthorization'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetRoute53DomainsV20140515RetrieveDomainAuthCode(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Domains_v20140515.RetrieveDomainAuthCode']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Domains_v20140515.RetrieveDomainAuthCode'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53DomainsV20140515TransferDomain(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Domains_v20140515.TransferDomain']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Domains_v20140515.TransferDomain'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53DomainsV20140515TransferDomainToAnotherAwsAccount(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Domains_v20140515.TransferDomainToAnotherAwsAccount']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Domains_v20140515.TransferDomainToAnotherAwsAccount'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetRoute53DomainsV20140515UpdateDomainContact(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Domains_v20140515.UpdateDomainContact']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Domains_v20140515.UpdateDomainContact'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53DomainsV20140515UpdateDomainContactPrivacy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Domains_v20140515.UpdateDomainContactPrivacy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Domains_v20140515.UpdateDomainContactPrivacy'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetRoute53DomainsV20140515UpdateDomainNameservers(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Domains_v20140515.UpdateDomainNameservers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Domains_v20140515.UpdateDomainNameservers'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53DomainsV20140515UpdateTagsForDomain(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Domains_v20140515.UpdateTagsForDomain']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Domains_v20140515.UpdateTagsForDomain'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53DomainsV20140515ViewBilling(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53Domains_v20140515.ViewBilling']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53Domains_v20140515.ViewBilling'].$post(args, options),
  )
}
