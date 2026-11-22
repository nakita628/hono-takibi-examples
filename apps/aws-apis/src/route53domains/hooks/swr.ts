import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetRoute53DomainsV20140515AcceptDomainTransferFromAnotherAwsAccountKey() {
  return [
    '#X-Amz-Target=Route53Domains_v20140515.AcceptDomainTransferFromAnotherAwsAccount',
  ] as const
}

export function getXAmzTargetRoute53DomainsV20140515AssociateDelegationSignerToDomainKey() {
  return ['#X-Amz-Target=Route53Domains_v20140515.AssociateDelegationSignerToDomain'] as const
}

export function getXAmzTargetRoute53DomainsV20140515CancelDomainTransferToAnotherAwsAccountKey() {
  return ['#X-Amz-Target=Route53Domains_v20140515.CancelDomainTransferToAnotherAwsAccount'] as const
}

export function getXAmzTargetRoute53DomainsV20140515CheckDomainAvailabilityKey() {
  return ['#X-Amz-Target=Route53Domains_v20140515.CheckDomainAvailability'] as const
}

export function getXAmzTargetRoute53DomainsV20140515CheckDomainTransferabilityKey() {
  return ['#X-Amz-Target=Route53Domains_v20140515.CheckDomainTransferability'] as const
}

export function getXAmzTargetRoute53DomainsV20140515DeleteDomainKey() {
  return ['#X-Amz-Target=Route53Domains_v20140515.DeleteDomain'] as const
}

export function getXAmzTargetRoute53DomainsV20140515DeleteTagsForDomainKey() {
  return ['#X-Amz-Target=Route53Domains_v20140515.DeleteTagsForDomain'] as const
}

export function getXAmzTargetRoute53DomainsV20140515DisableDomainAutoRenewKey() {
  return ['#X-Amz-Target=Route53Domains_v20140515.DisableDomainAutoRenew'] as const
}

export function getXAmzTargetRoute53DomainsV20140515DisableDomainTransferLockKey() {
  return ['#X-Amz-Target=Route53Domains_v20140515.DisableDomainTransferLock'] as const
}

export function getXAmzTargetRoute53DomainsV20140515DisassociateDelegationSignerFromDomainKey() {
  return ['#X-Amz-Target=Route53Domains_v20140515.DisassociateDelegationSignerFromDomain'] as const
}

export function getXAmzTargetRoute53DomainsV20140515EnableDomainAutoRenewKey() {
  return ['#X-Amz-Target=Route53Domains_v20140515.EnableDomainAutoRenew'] as const
}

export function getXAmzTargetRoute53DomainsV20140515EnableDomainTransferLockKey() {
  return ['#X-Amz-Target=Route53Domains_v20140515.EnableDomainTransferLock'] as const
}

export function getXAmzTargetRoute53DomainsV20140515GetContactReachabilityStatusKey() {
  return ['#X-Amz-Target=Route53Domains_v20140515.GetContactReachabilityStatus'] as const
}

export function getXAmzTargetRoute53DomainsV20140515GetDomainDetailKey() {
  return ['#X-Amz-Target=Route53Domains_v20140515.GetDomainDetail'] as const
}

export function getXAmzTargetRoute53DomainsV20140515GetDomainSuggestionsKey() {
  return ['#X-Amz-Target=Route53Domains_v20140515.GetDomainSuggestions'] as const
}

export function getXAmzTargetRoute53DomainsV20140515GetOperationDetailKey() {
  return ['#X-Amz-Target=Route53Domains_v20140515.GetOperationDetail'] as const
}

export function getXAmzTargetRoute53DomainsV20140515ListDomainsKey() {
  return ['#X-Amz-Target=Route53Domains_v20140515.ListDomains'] as const
}

export function getXAmzTargetRoute53DomainsV20140515ListOperationsKey() {
  return ['#X-Amz-Target=Route53Domains_v20140515.ListOperations'] as const
}

export function getXAmzTargetRoute53DomainsV20140515ListPricesKey() {
  return ['#X-Amz-Target=Route53Domains_v20140515.ListPrices'] as const
}

export function getXAmzTargetRoute53DomainsV20140515ListTagsForDomainKey() {
  return ['#X-Amz-Target=Route53Domains_v20140515.ListTagsForDomain'] as const
}

export function getXAmzTargetRoute53DomainsV20140515PushDomainKey() {
  return ['#X-Amz-Target=Route53Domains_v20140515.PushDomain'] as const
}

export function getXAmzTargetRoute53DomainsV20140515RegisterDomainKey() {
  return ['#X-Amz-Target=Route53Domains_v20140515.RegisterDomain'] as const
}

export function getXAmzTargetRoute53DomainsV20140515RejectDomainTransferFromAnotherAwsAccountKey() {
  return [
    '#X-Amz-Target=Route53Domains_v20140515.RejectDomainTransferFromAnotherAwsAccount',
  ] as const
}

export function getXAmzTargetRoute53DomainsV20140515RenewDomainKey() {
  return ['#X-Amz-Target=Route53Domains_v20140515.RenewDomain'] as const
}

export function getXAmzTargetRoute53DomainsV20140515ResendContactReachabilityEmailKey() {
  return ['#X-Amz-Target=Route53Domains_v20140515.ResendContactReachabilityEmail'] as const
}

export function getXAmzTargetRoute53DomainsV20140515ResendOperationAuthorizationKey() {
  return ['#X-Amz-Target=Route53Domains_v20140515.ResendOperationAuthorization'] as const
}

export function getXAmzTargetRoute53DomainsV20140515RetrieveDomainAuthCodeKey() {
  return ['#X-Amz-Target=Route53Domains_v20140515.RetrieveDomainAuthCode'] as const
}

export function getXAmzTargetRoute53DomainsV20140515TransferDomainKey() {
  return ['#X-Amz-Target=Route53Domains_v20140515.TransferDomain'] as const
}

export function getXAmzTargetRoute53DomainsV20140515TransferDomainToAnotherAwsAccountKey() {
  return ['#X-Amz-Target=Route53Domains_v20140515.TransferDomainToAnotherAwsAccount'] as const
}

export function getXAmzTargetRoute53DomainsV20140515UpdateDomainContactKey() {
  return ['#X-Amz-Target=Route53Domains_v20140515.UpdateDomainContact'] as const
}

export function getXAmzTargetRoute53DomainsV20140515UpdateDomainContactPrivacyKey() {
  return ['#X-Amz-Target=Route53Domains_v20140515.UpdateDomainContactPrivacy'] as const
}

export function getXAmzTargetRoute53DomainsV20140515UpdateDomainNameserversKey() {
  return ['#X-Amz-Target=Route53Domains_v20140515.UpdateDomainNameservers'] as const
}

export function getXAmzTargetRoute53DomainsV20140515UpdateTagsForDomainKey() {
  return ['#X-Amz-Target=Route53Domains_v20140515.UpdateTagsForDomain'] as const
}

export function getXAmzTargetRoute53DomainsV20140515ViewBillingKey() {
  return ['#X-Amz-Target=Route53Domains_v20140515.ViewBilling'] as const
}

export function getPostXAmzTargetRoute53DomainsV20140515AcceptDomainTransferFromAnotherAwsAccountKey() {
  return [
    '#X-Amz-Target=Route53Domains_v20140515.AcceptDomainTransferFromAnotherAwsAccount',
    '/#X-Amz-Target=Route53Domains_v20140515.AcceptDomainTransferFromAnotherAwsAccount',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53DomainsV20140515AcceptDomainTransferFromAnotherAwsAccount<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53Domains_v20140515.AcceptDomainTransferFromAnotherAwsAccount']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Domains_v20140515.AcceptDomainTransferFromAnotherAwsAccount']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetRoute53DomainsV20140515AcceptDomainTransferFromAnotherAwsAccountKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=Route53Domains_v20140515.AcceptDomainTransferFromAnotherAwsAccount']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=Route53Domains_v20140515.AcceptDomainTransferFromAnotherAwsAccount'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53DomainsV20140515AssociateDelegationSignerToDomainKey() {
  return [
    '#X-Amz-Target=Route53Domains_v20140515.AssociateDelegationSignerToDomain',
    '/#X-Amz-Target=Route53Domains_v20140515.AssociateDelegationSignerToDomain',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53DomainsV20140515AssociateDelegationSignerToDomain<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53Domains_v20140515.AssociateDelegationSignerToDomain']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Domains_v20140515.AssociateDelegationSignerToDomain']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetRoute53DomainsV20140515AssociateDelegationSignerToDomainKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=Route53Domains_v20140515.AssociateDelegationSignerToDomain']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Domains_v20140515.AssociateDelegationSignerToDomain'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53DomainsV20140515CancelDomainTransferToAnotherAwsAccountKey() {
  return [
    '#X-Amz-Target=Route53Domains_v20140515.CancelDomainTransferToAnotherAwsAccount',
    '/#X-Amz-Target=Route53Domains_v20140515.CancelDomainTransferToAnotherAwsAccount',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53DomainsV20140515CancelDomainTransferToAnotherAwsAccount<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53Domains_v20140515.CancelDomainTransferToAnotherAwsAccount']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Domains_v20140515.CancelDomainTransferToAnotherAwsAccount']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetRoute53DomainsV20140515CancelDomainTransferToAnotherAwsAccountKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=Route53Domains_v20140515.CancelDomainTransferToAnotherAwsAccount']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=Route53Domains_v20140515.CancelDomainTransferToAnotherAwsAccount'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53DomainsV20140515CheckDomainAvailabilityKey() {
  return [
    '#X-Amz-Target=Route53Domains_v20140515.CheckDomainAvailability',
    '/#X-Amz-Target=Route53Domains_v20140515.CheckDomainAvailability',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53DomainsV20140515CheckDomainAvailability<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53Domains_v20140515.CheckDomainAvailability']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Domains_v20140515.CheckDomainAvailability']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53DomainsV20140515CheckDomainAvailabilityKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=Route53Domains_v20140515.CheckDomainAvailability']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Domains_v20140515.CheckDomainAvailability'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53DomainsV20140515CheckDomainTransferabilityKey() {
  return [
    '#X-Amz-Target=Route53Domains_v20140515.CheckDomainTransferability',
    '/#X-Amz-Target=Route53Domains_v20140515.CheckDomainTransferability',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53DomainsV20140515CheckDomainTransferability<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53Domains_v20140515.CheckDomainTransferability']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Domains_v20140515.CheckDomainTransferability']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetRoute53DomainsV20140515CheckDomainTransferabilityKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=Route53Domains_v20140515.CheckDomainTransferability']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Domains_v20140515.CheckDomainTransferability'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53DomainsV20140515DeleteDomainKey() {
  return [
    '#X-Amz-Target=Route53Domains_v20140515.DeleteDomain',
    '/#X-Amz-Target=Route53Domains_v20140515.DeleteDomain',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53DomainsV20140515DeleteDomain<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53Domains_v20140515.DeleteDomain']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Domains_v20140515.DeleteDomain']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53DomainsV20140515DeleteDomainKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=Route53Domains_v20140515.DeleteDomain']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Domains_v20140515.DeleteDomain'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53DomainsV20140515DeleteTagsForDomainKey() {
  return [
    '#X-Amz-Target=Route53Domains_v20140515.DeleteTagsForDomain',
    '/#X-Amz-Target=Route53Domains_v20140515.DeleteTagsForDomain',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53DomainsV20140515DeleteTagsForDomain<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53Domains_v20140515.DeleteTagsForDomain']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Domains_v20140515.DeleteTagsForDomain']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53DomainsV20140515DeleteTagsForDomainKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=Route53Domains_v20140515.DeleteTagsForDomain']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Domains_v20140515.DeleteTagsForDomain'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53DomainsV20140515DisableDomainAutoRenewKey() {
  return [
    '#X-Amz-Target=Route53Domains_v20140515.DisableDomainAutoRenew',
    '/#X-Amz-Target=Route53Domains_v20140515.DisableDomainAutoRenew',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53DomainsV20140515DisableDomainAutoRenew<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53Domains_v20140515.DisableDomainAutoRenew']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Domains_v20140515.DisableDomainAutoRenew']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53DomainsV20140515DisableDomainAutoRenewKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=Route53Domains_v20140515.DisableDomainAutoRenew']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Domains_v20140515.DisableDomainAutoRenew'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53DomainsV20140515DisableDomainTransferLockKey() {
  return [
    '#X-Amz-Target=Route53Domains_v20140515.DisableDomainTransferLock',
    '/#X-Amz-Target=Route53Domains_v20140515.DisableDomainTransferLock',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53DomainsV20140515DisableDomainTransferLock<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53Domains_v20140515.DisableDomainTransferLock']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Domains_v20140515.DisableDomainTransferLock']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53DomainsV20140515DisableDomainTransferLockKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=Route53Domains_v20140515.DisableDomainTransferLock']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Domains_v20140515.DisableDomainTransferLock'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53DomainsV20140515DisassociateDelegationSignerFromDomainKey() {
  return [
    '#X-Amz-Target=Route53Domains_v20140515.DisassociateDelegationSignerFromDomain',
    '/#X-Amz-Target=Route53Domains_v20140515.DisassociateDelegationSignerFromDomain',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53DomainsV20140515DisassociateDelegationSignerFromDomain<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53Domains_v20140515.DisassociateDelegationSignerFromDomain']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Domains_v20140515.DisassociateDelegationSignerFromDomain']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetRoute53DomainsV20140515DisassociateDelegationSignerFromDomainKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=Route53Domains_v20140515.DisassociateDelegationSignerFromDomain']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=Route53Domains_v20140515.DisassociateDelegationSignerFromDomain'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53DomainsV20140515EnableDomainAutoRenewKey() {
  return [
    '#X-Amz-Target=Route53Domains_v20140515.EnableDomainAutoRenew',
    '/#X-Amz-Target=Route53Domains_v20140515.EnableDomainAutoRenew',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53DomainsV20140515EnableDomainAutoRenew<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53Domains_v20140515.EnableDomainAutoRenew']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Domains_v20140515.EnableDomainAutoRenew']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53DomainsV20140515EnableDomainAutoRenewKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=Route53Domains_v20140515.EnableDomainAutoRenew']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Domains_v20140515.EnableDomainAutoRenew'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53DomainsV20140515EnableDomainTransferLockKey() {
  return [
    '#X-Amz-Target=Route53Domains_v20140515.EnableDomainTransferLock',
    '/#X-Amz-Target=Route53Domains_v20140515.EnableDomainTransferLock',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53DomainsV20140515EnableDomainTransferLock<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53Domains_v20140515.EnableDomainTransferLock']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Domains_v20140515.EnableDomainTransferLock']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53DomainsV20140515EnableDomainTransferLockKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=Route53Domains_v20140515.EnableDomainTransferLock']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Domains_v20140515.EnableDomainTransferLock'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53DomainsV20140515GetContactReachabilityStatusKey() {
  return [
    '#X-Amz-Target=Route53Domains_v20140515.GetContactReachabilityStatus',
    '/#X-Amz-Target=Route53Domains_v20140515.GetContactReachabilityStatus',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53DomainsV20140515GetContactReachabilityStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53Domains_v20140515.GetContactReachabilityStatus']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Domains_v20140515.GetContactReachabilityStatus']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetRoute53DomainsV20140515GetContactReachabilityStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=Route53Domains_v20140515.GetContactReachabilityStatus']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Domains_v20140515.GetContactReachabilityStatus'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53DomainsV20140515GetDomainDetailKey() {
  return [
    '#X-Amz-Target=Route53Domains_v20140515.GetDomainDetail',
    '/#X-Amz-Target=Route53Domains_v20140515.GetDomainDetail',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53DomainsV20140515GetDomainDetail<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53Domains_v20140515.GetDomainDetail']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Domains_v20140515.GetDomainDetail']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53DomainsV20140515GetDomainDetailKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=Route53Domains_v20140515.GetDomainDetail']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Domains_v20140515.GetDomainDetail'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53DomainsV20140515GetDomainSuggestionsKey() {
  return [
    '#X-Amz-Target=Route53Domains_v20140515.GetDomainSuggestions',
    '/#X-Amz-Target=Route53Domains_v20140515.GetDomainSuggestions',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53DomainsV20140515GetDomainSuggestions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53Domains_v20140515.GetDomainSuggestions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Domains_v20140515.GetDomainSuggestions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53DomainsV20140515GetDomainSuggestionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=Route53Domains_v20140515.GetDomainSuggestions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Domains_v20140515.GetDomainSuggestions'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53DomainsV20140515GetOperationDetailKey() {
  return [
    '#X-Amz-Target=Route53Domains_v20140515.GetOperationDetail',
    '/#X-Amz-Target=Route53Domains_v20140515.GetOperationDetail',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53DomainsV20140515GetOperationDetail<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53Domains_v20140515.GetOperationDetail']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Domains_v20140515.GetOperationDetail']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53DomainsV20140515GetOperationDetailKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=Route53Domains_v20140515.GetOperationDetail']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Domains_v20140515.GetOperationDetail'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53DomainsV20140515ListDomainsKey() {
  return [
    '#X-Amz-Target=Route53Domains_v20140515.ListDomains',
    '/#X-Amz-Target=Route53Domains_v20140515.ListDomains',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53DomainsV20140515ListDomains<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53Domains_v20140515.ListDomains']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Route53Domains_v20140515.ListDomains']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53DomainsV20140515ListDomainsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=Route53Domains_v20140515.ListDomains']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Domains_v20140515.ListDomains'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53DomainsV20140515ListOperationsKey() {
  return [
    '#X-Amz-Target=Route53Domains_v20140515.ListOperations',
    '/#X-Amz-Target=Route53Domains_v20140515.ListOperations',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53DomainsV20140515ListOperations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53Domains_v20140515.ListOperations']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Domains_v20140515.ListOperations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53DomainsV20140515ListOperationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=Route53Domains_v20140515.ListOperations']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Domains_v20140515.ListOperations'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53DomainsV20140515ListPricesKey() {
  return [
    '#X-Amz-Target=Route53Domains_v20140515.ListPrices',
    '/#X-Amz-Target=Route53Domains_v20140515.ListPrices',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53DomainsV20140515ListPrices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53Domains_v20140515.ListPrices']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Route53Domains_v20140515.ListPrices']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53DomainsV20140515ListPricesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=Route53Domains_v20140515.ListPrices']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Domains_v20140515.ListPrices'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53DomainsV20140515ListTagsForDomainKey() {
  return [
    '#X-Amz-Target=Route53Domains_v20140515.ListTagsForDomain',
    '/#X-Amz-Target=Route53Domains_v20140515.ListTagsForDomain',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53DomainsV20140515ListTagsForDomain<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53Domains_v20140515.ListTagsForDomain']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Domains_v20140515.ListTagsForDomain']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53DomainsV20140515ListTagsForDomainKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=Route53Domains_v20140515.ListTagsForDomain']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Domains_v20140515.ListTagsForDomain'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53DomainsV20140515PushDomainKey() {
  return [
    '#X-Amz-Target=Route53Domains_v20140515.PushDomain',
    '/#X-Amz-Target=Route53Domains_v20140515.PushDomain',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53DomainsV20140515PushDomain<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53Domains_v20140515.PushDomain']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Route53Domains_v20140515.PushDomain']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53DomainsV20140515PushDomainKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=Route53Domains_v20140515.PushDomain']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Domains_v20140515.PushDomain'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53DomainsV20140515RegisterDomainKey() {
  return [
    '#X-Amz-Target=Route53Domains_v20140515.RegisterDomain',
    '/#X-Amz-Target=Route53Domains_v20140515.RegisterDomain',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53DomainsV20140515RegisterDomain<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53Domains_v20140515.RegisterDomain']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Domains_v20140515.RegisterDomain']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53DomainsV20140515RegisterDomainKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=Route53Domains_v20140515.RegisterDomain']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Domains_v20140515.RegisterDomain'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53DomainsV20140515RejectDomainTransferFromAnotherAwsAccountKey() {
  return [
    '#X-Amz-Target=Route53Domains_v20140515.RejectDomainTransferFromAnotherAwsAccount',
    '/#X-Amz-Target=Route53Domains_v20140515.RejectDomainTransferFromAnotherAwsAccount',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53DomainsV20140515RejectDomainTransferFromAnotherAwsAccount<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53Domains_v20140515.RejectDomainTransferFromAnotherAwsAccount']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Domains_v20140515.RejectDomainTransferFromAnotherAwsAccount']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetRoute53DomainsV20140515RejectDomainTransferFromAnotherAwsAccountKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=Route53Domains_v20140515.RejectDomainTransferFromAnotherAwsAccount']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=Route53Domains_v20140515.RejectDomainTransferFromAnotherAwsAccount'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53DomainsV20140515RenewDomainKey() {
  return [
    '#X-Amz-Target=Route53Domains_v20140515.RenewDomain',
    '/#X-Amz-Target=Route53Domains_v20140515.RenewDomain',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53DomainsV20140515RenewDomain<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53Domains_v20140515.RenewDomain']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Route53Domains_v20140515.RenewDomain']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53DomainsV20140515RenewDomainKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=Route53Domains_v20140515.RenewDomain']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Domains_v20140515.RenewDomain'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53DomainsV20140515ResendContactReachabilityEmailKey() {
  return [
    '#X-Amz-Target=Route53Domains_v20140515.ResendContactReachabilityEmail',
    '/#X-Amz-Target=Route53Domains_v20140515.ResendContactReachabilityEmail',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53DomainsV20140515ResendContactReachabilityEmail<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53Domains_v20140515.ResendContactReachabilityEmail']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Domains_v20140515.ResendContactReachabilityEmail']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetRoute53DomainsV20140515ResendContactReachabilityEmailKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=Route53Domains_v20140515.ResendContactReachabilityEmail']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Domains_v20140515.ResendContactReachabilityEmail'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53DomainsV20140515ResendOperationAuthorizationKey() {
  return [
    '#X-Amz-Target=Route53Domains_v20140515.ResendOperationAuthorization',
    '/#X-Amz-Target=Route53Domains_v20140515.ResendOperationAuthorization',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53DomainsV20140515ResendOperationAuthorization<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53Domains_v20140515.ResendOperationAuthorization']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Domains_v20140515.ResendOperationAuthorization']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetRoute53DomainsV20140515ResendOperationAuthorizationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=Route53Domains_v20140515.ResendOperationAuthorization']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Domains_v20140515.ResendOperationAuthorization'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53DomainsV20140515RetrieveDomainAuthCodeKey() {
  return [
    '#X-Amz-Target=Route53Domains_v20140515.RetrieveDomainAuthCode',
    '/#X-Amz-Target=Route53Domains_v20140515.RetrieveDomainAuthCode',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53DomainsV20140515RetrieveDomainAuthCode<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53Domains_v20140515.RetrieveDomainAuthCode']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Domains_v20140515.RetrieveDomainAuthCode']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53DomainsV20140515RetrieveDomainAuthCodeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=Route53Domains_v20140515.RetrieveDomainAuthCode']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Domains_v20140515.RetrieveDomainAuthCode'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53DomainsV20140515TransferDomainKey() {
  return [
    '#X-Amz-Target=Route53Domains_v20140515.TransferDomain',
    '/#X-Amz-Target=Route53Domains_v20140515.TransferDomain',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53DomainsV20140515TransferDomain<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53Domains_v20140515.TransferDomain']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Domains_v20140515.TransferDomain']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53DomainsV20140515TransferDomainKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=Route53Domains_v20140515.TransferDomain']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Domains_v20140515.TransferDomain'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53DomainsV20140515TransferDomainToAnotherAwsAccountKey() {
  return [
    '#X-Amz-Target=Route53Domains_v20140515.TransferDomainToAnotherAwsAccount',
    '/#X-Amz-Target=Route53Domains_v20140515.TransferDomainToAnotherAwsAccount',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53DomainsV20140515TransferDomainToAnotherAwsAccount<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53Domains_v20140515.TransferDomainToAnotherAwsAccount']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Domains_v20140515.TransferDomainToAnotherAwsAccount']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetRoute53DomainsV20140515TransferDomainToAnotherAwsAccountKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=Route53Domains_v20140515.TransferDomainToAnotherAwsAccount']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Domains_v20140515.TransferDomainToAnotherAwsAccount'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53DomainsV20140515UpdateDomainContactKey() {
  return [
    '#X-Amz-Target=Route53Domains_v20140515.UpdateDomainContact',
    '/#X-Amz-Target=Route53Domains_v20140515.UpdateDomainContact',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53DomainsV20140515UpdateDomainContact<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53Domains_v20140515.UpdateDomainContact']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Domains_v20140515.UpdateDomainContact']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53DomainsV20140515UpdateDomainContactKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=Route53Domains_v20140515.UpdateDomainContact']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Domains_v20140515.UpdateDomainContact'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53DomainsV20140515UpdateDomainContactPrivacyKey() {
  return [
    '#X-Amz-Target=Route53Domains_v20140515.UpdateDomainContactPrivacy',
    '/#X-Amz-Target=Route53Domains_v20140515.UpdateDomainContactPrivacy',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53DomainsV20140515UpdateDomainContactPrivacy<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53Domains_v20140515.UpdateDomainContactPrivacy']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Domains_v20140515.UpdateDomainContactPrivacy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetRoute53DomainsV20140515UpdateDomainContactPrivacyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=Route53Domains_v20140515.UpdateDomainContactPrivacy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Domains_v20140515.UpdateDomainContactPrivacy'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53DomainsV20140515UpdateDomainNameserversKey() {
  return [
    '#X-Amz-Target=Route53Domains_v20140515.UpdateDomainNameservers',
    '/#X-Amz-Target=Route53Domains_v20140515.UpdateDomainNameservers',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53DomainsV20140515UpdateDomainNameservers<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53Domains_v20140515.UpdateDomainNameservers']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Domains_v20140515.UpdateDomainNameservers']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53DomainsV20140515UpdateDomainNameserversKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=Route53Domains_v20140515.UpdateDomainNameservers']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Domains_v20140515.UpdateDomainNameservers'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53DomainsV20140515UpdateTagsForDomainKey() {
  return [
    '#X-Amz-Target=Route53Domains_v20140515.UpdateTagsForDomain',
    '/#X-Amz-Target=Route53Domains_v20140515.UpdateTagsForDomain',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53DomainsV20140515UpdateTagsForDomain<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53Domains_v20140515.UpdateTagsForDomain']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Domains_v20140515.UpdateTagsForDomain']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53DomainsV20140515UpdateTagsForDomainKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=Route53Domains_v20140515.UpdateTagsForDomain']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Domains_v20140515.UpdateTagsForDomain'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53DomainsV20140515ViewBillingKey() {
  return [
    '#X-Amz-Target=Route53Domains_v20140515.ViewBilling',
    '/#X-Amz-Target=Route53Domains_v20140515.ViewBilling',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53DomainsV20140515ViewBilling<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53Domains_v20140515.ViewBilling']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Route53Domains_v20140515.ViewBilling']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53DomainsV20140515ViewBillingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=Route53Domains_v20140515.ViewBilling']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53Domains_v20140515.ViewBilling'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
