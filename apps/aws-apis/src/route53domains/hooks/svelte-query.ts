import { createMutation, mutationOptions } from '@tanstack/svelte-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
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

export function getPostXAmzTargetRoute53DomainsV20140515AcceptDomainTransferFromAnotherAwsAccountMutationKey() {
  return [
    '#X-Amz-Target=Route53Domains_v20140515.AcceptDomainTransferFromAnotherAwsAccount',
    '/#X-Amz-Target=Route53Domains_v20140515.AcceptDomainTransferFromAnotherAwsAccount',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53DomainsV20140515AcceptDomainTransferFromAnotherAwsAccountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Domains_v20140515.AcceptDomainTransferFromAnotherAwsAccount']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetRoute53DomainsV20140515AcceptDomainTransferFromAnotherAwsAccountMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Domains_v20140515.AcceptDomainTransferFromAnotherAwsAccount']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=Route53Domains_v20140515.AcceptDomainTransferFromAnotherAwsAccount'
        ].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetRoute53DomainsV20140515AcceptDomainTransferFromAnotherAwsAccount<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Domains_v20140515.AcceptDomainTransferFromAnotherAwsAccount']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetRoute53DomainsV20140515AcceptDomainTransferFromAnotherAwsAccountMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetRoute53DomainsV20140515AssociateDelegationSignerToDomainMutationKey() {
  return [
    '#X-Amz-Target=Route53Domains_v20140515.AssociateDelegationSignerToDomain',
    '/#X-Amz-Target=Route53Domains_v20140515.AssociateDelegationSignerToDomain',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53DomainsV20140515AssociateDelegationSignerToDomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Domains_v20140515.AssociateDelegationSignerToDomain']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetRoute53DomainsV20140515AssociateDelegationSignerToDomainMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Domains_v20140515.AssociateDelegationSignerToDomain']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53Domains_v20140515.AssociateDelegationSignerToDomain'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetRoute53DomainsV20140515AssociateDelegationSignerToDomain<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Domains_v20140515.AssociateDelegationSignerToDomain']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetRoute53DomainsV20140515AssociateDelegationSignerToDomainMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetRoute53DomainsV20140515CancelDomainTransferToAnotherAwsAccountMutationKey() {
  return [
    '#X-Amz-Target=Route53Domains_v20140515.CancelDomainTransferToAnotherAwsAccount',
    '/#X-Amz-Target=Route53Domains_v20140515.CancelDomainTransferToAnotherAwsAccount',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53DomainsV20140515CancelDomainTransferToAnotherAwsAccountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Domains_v20140515.CancelDomainTransferToAnotherAwsAccount']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetRoute53DomainsV20140515CancelDomainTransferToAnotherAwsAccountMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Domains_v20140515.CancelDomainTransferToAnotherAwsAccount']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=Route53Domains_v20140515.CancelDomainTransferToAnotherAwsAccount'
        ].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetRoute53DomainsV20140515CancelDomainTransferToAnotherAwsAccount<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Domains_v20140515.CancelDomainTransferToAnotherAwsAccount']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetRoute53DomainsV20140515CancelDomainTransferToAnotherAwsAccountMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetRoute53DomainsV20140515CheckDomainAvailabilityMutationKey() {
  return [
    '#X-Amz-Target=Route53Domains_v20140515.CheckDomainAvailability',
    '/#X-Amz-Target=Route53Domains_v20140515.CheckDomainAvailability',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53DomainsV20140515CheckDomainAvailabilityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Domains_v20140515.CheckDomainAvailability']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53DomainsV20140515CheckDomainAvailabilityMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Domains_v20140515.CheckDomainAvailability']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53Domains_v20140515.CheckDomainAvailability'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetRoute53DomainsV20140515CheckDomainAvailability<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Domains_v20140515.CheckDomainAvailability']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetRoute53DomainsV20140515CheckDomainAvailabilityMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetRoute53DomainsV20140515CheckDomainTransferabilityMutationKey() {
  return [
    '#X-Amz-Target=Route53Domains_v20140515.CheckDomainTransferability',
    '/#X-Amz-Target=Route53Domains_v20140515.CheckDomainTransferability',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53DomainsV20140515CheckDomainTransferabilityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Domains_v20140515.CheckDomainTransferability']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53DomainsV20140515CheckDomainTransferabilityMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Domains_v20140515.CheckDomainTransferability']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53Domains_v20140515.CheckDomainTransferability'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetRoute53DomainsV20140515CheckDomainTransferability<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Domains_v20140515.CheckDomainTransferability']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetRoute53DomainsV20140515CheckDomainTransferabilityMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetRoute53DomainsV20140515DeleteDomainMutationKey() {
  return [
    '#X-Amz-Target=Route53Domains_v20140515.DeleteDomain',
    '/#X-Amz-Target=Route53Domains_v20140515.DeleteDomain',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53DomainsV20140515DeleteDomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Domains_v20140515.DeleteDomain']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53DomainsV20140515DeleteDomainMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Domains_v20140515.DeleteDomain']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53Domains_v20140515.DeleteDomain'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetRoute53DomainsV20140515DeleteDomain<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Domains_v20140515.DeleteDomain']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetRoute53DomainsV20140515DeleteDomainMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetRoute53DomainsV20140515DeleteTagsForDomainMutationKey() {
  return [
    '#X-Amz-Target=Route53Domains_v20140515.DeleteTagsForDomain',
    '/#X-Amz-Target=Route53Domains_v20140515.DeleteTagsForDomain',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53DomainsV20140515DeleteTagsForDomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Domains_v20140515.DeleteTagsForDomain']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53DomainsV20140515DeleteTagsForDomainMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Domains_v20140515.DeleteTagsForDomain']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53Domains_v20140515.DeleteTagsForDomain'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetRoute53DomainsV20140515DeleteTagsForDomain<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Domains_v20140515.DeleteTagsForDomain']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetRoute53DomainsV20140515DeleteTagsForDomainMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetRoute53DomainsV20140515DisableDomainAutoRenewMutationKey() {
  return [
    '#X-Amz-Target=Route53Domains_v20140515.DisableDomainAutoRenew',
    '/#X-Amz-Target=Route53Domains_v20140515.DisableDomainAutoRenew',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53DomainsV20140515DisableDomainAutoRenewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Domains_v20140515.DisableDomainAutoRenew']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53DomainsV20140515DisableDomainAutoRenewMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Domains_v20140515.DisableDomainAutoRenew']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53Domains_v20140515.DisableDomainAutoRenew'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetRoute53DomainsV20140515DisableDomainAutoRenew<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Domains_v20140515.DisableDomainAutoRenew']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetRoute53DomainsV20140515DisableDomainAutoRenewMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetRoute53DomainsV20140515DisableDomainTransferLockMutationKey() {
  return [
    '#X-Amz-Target=Route53Domains_v20140515.DisableDomainTransferLock',
    '/#X-Amz-Target=Route53Domains_v20140515.DisableDomainTransferLock',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53DomainsV20140515DisableDomainTransferLockMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Domains_v20140515.DisableDomainTransferLock']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53DomainsV20140515DisableDomainTransferLockMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Domains_v20140515.DisableDomainTransferLock']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53Domains_v20140515.DisableDomainTransferLock'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetRoute53DomainsV20140515DisableDomainTransferLock<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Domains_v20140515.DisableDomainTransferLock']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetRoute53DomainsV20140515DisableDomainTransferLockMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetRoute53DomainsV20140515DisassociateDelegationSignerFromDomainMutationKey() {
  return [
    '#X-Amz-Target=Route53Domains_v20140515.DisassociateDelegationSignerFromDomain',
    '/#X-Amz-Target=Route53Domains_v20140515.DisassociateDelegationSignerFromDomain',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53DomainsV20140515DisassociateDelegationSignerFromDomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Domains_v20140515.DisassociateDelegationSignerFromDomain']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetRoute53DomainsV20140515DisassociateDelegationSignerFromDomainMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Domains_v20140515.DisassociateDelegationSignerFromDomain']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=Route53Domains_v20140515.DisassociateDelegationSignerFromDomain'
        ].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetRoute53DomainsV20140515DisassociateDelegationSignerFromDomain<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Domains_v20140515.DisassociateDelegationSignerFromDomain']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetRoute53DomainsV20140515DisassociateDelegationSignerFromDomainMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetRoute53DomainsV20140515EnableDomainAutoRenewMutationKey() {
  return [
    '#X-Amz-Target=Route53Domains_v20140515.EnableDomainAutoRenew',
    '/#X-Amz-Target=Route53Domains_v20140515.EnableDomainAutoRenew',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53DomainsV20140515EnableDomainAutoRenewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Domains_v20140515.EnableDomainAutoRenew']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53DomainsV20140515EnableDomainAutoRenewMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Domains_v20140515.EnableDomainAutoRenew']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53Domains_v20140515.EnableDomainAutoRenew'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetRoute53DomainsV20140515EnableDomainAutoRenew<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Domains_v20140515.EnableDomainAutoRenew']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetRoute53DomainsV20140515EnableDomainAutoRenewMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetRoute53DomainsV20140515EnableDomainTransferLockMutationKey() {
  return [
    '#X-Amz-Target=Route53Domains_v20140515.EnableDomainTransferLock',
    '/#X-Amz-Target=Route53Domains_v20140515.EnableDomainTransferLock',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53DomainsV20140515EnableDomainTransferLockMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Domains_v20140515.EnableDomainTransferLock']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53DomainsV20140515EnableDomainTransferLockMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Domains_v20140515.EnableDomainTransferLock']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53Domains_v20140515.EnableDomainTransferLock'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetRoute53DomainsV20140515EnableDomainTransferLock<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Domains_v20140515.EnableDomainTransferLock']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetRoute53DomainsV20140515EnableDomainTransferLockMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetRoute53DomainsV20140515GetContactReachabilityStatusMutationKey() {
  return [
    '#X-Amz-Target=Route53Domains_v20140515.GetContactReachabilityStatus',
    '/#X-Amz-Target=Route53Domains_v20140515.GetContactReachabilityStatus',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53DomainsV20140515GetContactReachabilityStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Domains_v20140515.GetContactReachabilityStatus']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53DomainsV20140515GetContactReachabilityStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Domains_v20140515.GetContactReachabilityStatus']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53Domains_v20140515.GetContactReachabilityStatus'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetRoute53DomainsV20140515GetContactReachabilityStatus<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Domains_v20140515.GetContactReachabilityStatus']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetRoute53DomainsV20140515GetContactReachabilityStatusMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetRoute53DomainsV20140515GetDomainDetailMutationKey() {
  return [
    '#X-Amz-Target=Route53Domains_v20140515.GetDomainDetail',
    '/#X-Amz-Target=Route53Domains_v20140515.GetDomainDetail',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53DomainsV20140515GetDomainDetailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Domains_v20140515.GetDomainDetail']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53DomainsV20140515GetDomainDetailMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Domains_v20140515.GetDomainDetail']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53Domains_v20140515.GetDomainDetail'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetRoute53DomainsV20140515GetDomainDetail<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Domains_v20140515.GetDomainDetail']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetRoute53DomainsV20140515GetDomainDetailMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetRoute53DomainsV20140515GetDomainSuggestionsMutationKey() {
  return [
    '#X-Amz-Target=Route53Domains_v20140515.GetDomainSuggestions',
    '/#X-Amz-Target=Route53Domains_v20140515.GetDomainSuggestions',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53DomainsV20140515GetDomainSuggestionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Domains_v20140515.GetDomainSuggestions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53DomainsV20140515GetDomainSuggestionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Domains_v20140515.GetDomainSuggestions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53Domains_v20140515.GetDomainSuggestions'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetRoute53DomainsV20140515GetDomainSuggestions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Domains_v20140515.GetDomainSuggestions']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetRoute53DomainsV20140515GetDomainSuggestionsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetRoute53DomainsV20140515GetOperationDetailMutationKey() {
  return [
    '#X-Amz-Target=Route53Domains_v20140515.GetOperationDetail',
    '/#X-Amz-Target=Route53Domains_v20140515.GetOperationDetail',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53DomainsV20140515GetOperationDetailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Domains_v20140515.GetOperationDetail']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53DomainsV20140515GetOperationDetailMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Domains_v20140515.GetOperationDetail']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53Domains_v20140515.GetOperationDetail'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetRoute53DomainsV20140515GetOperationDetail<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Domains_v20140515.GetOperationDetail']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetRoute53DomainsV20140515GetOperationDetailMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetRoute53DomainsV20140515ListDomainsMutationKey() {
  return [
    '#X-Amz-Target=Route53Domains_v20140515.ListDomains',
    '/#X-Amz-Target=Route53Domains_v20140515.ListDomains',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53DomainsV20140515ListDomainsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Domains_v20140515.ListDomains']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53DomainsV20140515ListDomainsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Domains_v20140515.ListDomains']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53Domains_v20140515.ListDomains'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetRoute53DomainsV20140515ListDomains<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Domains_v20140515.ListDomains']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetRoute53DomainsV20140515ListDomainsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetRoute53DomainsV20140515ListOperationsMutationKey() {
  return [
    '#X-Amz-Target=Route53Domains_v20140515.ListOperations',
    '/#X-Amz-Target=Route53Domains_v20140515.ListOperations',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53DomainsV20140515ListOperationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Domains_v20140515.ListOperations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53DomainsV20140515ListOperationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Domains_v20140515.ListOperations']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53Domains_v20140515.ListOperations'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetRoute53DomainsV20140515ListOperations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Domains_v20140515.ListOperations']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetRoute53DomainsV20140515ListOperationsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetRoute53DomainsV20140515ListPricesMutationKey() {
  return [
    '#X-Amz-Target=Route53Domains_v20140515.ListPrices',
    '/#X-Amz-Target=Route53Domains_v20140515.ListPrices',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53DomainsV20140515ListPricesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=Route53Domains_v20140515.ListPrices']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53DomainsV20140515ListPricesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Domains_v20140515.ListPrices']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53Domains_v20140515.ListPrices'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetRoute53DomainsV20140515ListPrices<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Domains_v20140515.ListPrices']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetRoute53DomainsV20140515ListPricesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetRoute53DomainsV20140515ListTagsForDomainMutationKey() {
  return [
    '#X-Amz-Target=Route53Domains_v20140515.ListTagsForDomain',
    '/#X-Amz-Target=Route53Domains_v20140515.ListTagsForDomain',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53DomainsV20140515ListTagsForDomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Domains_v20140515.ListTagsForDomain']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53DomainsV20140515ListTagsForDomainMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Domains_v20140515.ListTagsForDomain']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53Domains_v20140515.ListTagsForDomain'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetRoute53DomainsV20140515ListTagsForDomain<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Domains_v20140515.ListTagsForDomain']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetRoute53DomainsV20140515ListTagsForDomainMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetRoute53DomainsV20140515PushDomainMutationKey() {
  return [
    '#X-Amz-Target=Route53Domains_v20140515.PushDomain',
    '/#X-Amz-Target=Route53Domains_v20140515.PushDomain',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53DomainsV20140515PushDomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=Route53Domains_v20140515.PushDomain']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53DomainsV20140515PushDomainMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Domains_v20140515.PushDomain']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53Domains_v20140515.PushDomain'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetRoute53DomainsV20140515PushDomain<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Domains_v20140515.PushDomain']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetRoute53DomainsV20140515PushDomainMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetRoute53DomainsV20140515RegisterDomainMutationKey() {
  return [
    '#X-Amz-Target=Route53Domains_v20140515.RegisterDomain',
    '/#X-Amz-Target=Route53Domains_v20140515.RegisterDomain',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53DomainsV20140515RegisterDomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Domains_v20140515.RegisterDomain']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53DomainsV20140515RegisterDomainMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Domains_v20140515.RegisterDomain']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53Domains_v20140515.RegisterDomain'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetRoute53DomainsV20140515RegisterDomain<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Domains_v20140515.RegisterDomain']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetRoute53DomainsV20140515RegisterDomainMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetRoute53DomainsV20140515RejectDomainTransferFromAnotherAwsAccountMutationKey() {
  return [
    '#X-Amz-Target=Route53Domains_v20140515.RejectDomainTransferFromAnotherAwsAccount',
    '/#X-Amz-Target=Route53Domains_v20140515.RejectDomainTransferFromAnotherAwsAccount',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53DomainsV20140515RejectDomainTransferFromAnotherAwsAccountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Domains_v20140515.RejectDomainTransferFromAnotherAwsAccount']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetRoute53DomainsV20140515RejectDomainTransferFromAnotherAwsAccountMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Domains_v20140515.RejectDomainTransferFromAnotherAwsAccount']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=Route53Domains_v20140515.RejectDomainTransferFromAnotherAwsAccount'
        ].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetRoute53DomainsV20140515RejectDomainTransferFromAnotherAwsAccount<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Domains_v20140515.RejectDomainTransferFromAnotherAwsAccount']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetRoute53DomainsV20140515RejectDomainTransferFromAnotherAwsAccountMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetRoute53DomainsV20140515RenewDomainMutationKey() {
  return [
    '#X-Amz-Target=Route53Domains_v20140515.RenewDomain',
    '/#X-Amz-Target=Route53Domains_v20140515.RenewDomain',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53DomainsV20140515RenewDomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Domains_v20140515.RenewDomain']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53DomainsV20140515RenewDomainMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Domains_v20140515.RenewDomain']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53Domains_v20140515.RenewDomain'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetRoute53DomainsV20140515RenewDomain<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Domains_v20140515.RenewDomain']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetRoute53DomainsV20140515RenewDomainMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetRoute53DomainsV20140515ResendContactReachabilityEmailMutationKey() {
  return [
    '#X-Amz-Target=Route53Domains_v20140515.ResendContactReachabilityEmail',
    '/#X-Amz-Target=Route53Domains_v20140515.ResendContactReachabilityEmail',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53DomainsV20140515ResendContactReachabilityEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Domains_v20140515.ResendContactReachabilityEmail']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetRoute53DomainsV20140515ResendContactReachabilityEmailMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Domains_v20140515.ResendContactReachabilityEmail']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53Domains_v20140515.ResendContactReachabilityEmail'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetRoute53DomainsV20140515ResendContactReachabilityEmail<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Domains_v20140515.ResendContactReachabilityEmail']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetRoute53DomainsV20140515ResendContactReachabilityEmailMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetRoute53DomainsV20140515ResendOperationAuthorizationMutationKey() {
  return [
    '#X-Amz-Target=Route53Domains_v20140515.ResendOperationAuthorization',
    '/#X-Amz-Target=Route53Domains_v20140515.ResendOperationAuthorization',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53DomainsV20140515ResendOperationAuthorizationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Domains_v20140515.ResendOperationAuthorization']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53DomainsV20140515ResendOperationAuthorizationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Domains_v20140515.ResendOperationAuthorization']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53Domains_v20140515.ResendOperationAuthorization'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetRoute53DomainsV20140515ResendOperationAuthorization<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Domains_v20140515.ResendOperationAuthorization']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetRoute53DomainsV20140515ResendOperationAuthorizationMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetRoute53DomainsV20140515RetrieveDomainAuthCodeMutationKey() {
  return [
    '#X-Amz-Target=Route53Domains_v20140515.RetrieveDomainAuthCode',
    '/#X-Amz-Target=Route53Domains_v20140515.RetrieveDomainAuthCode',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53DomainsV20140515RetrieveDomainAuthCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Domains_v20140515.RetrieveDomainAuthCode']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53DomainsV20140515RetrieveDomainAuthCodeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Domains_v20140515.RetrieveDomainAuthCode']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53Domains_v20140515.RetrieveDomainAuthCode'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetRoute53DomainsV20140515RetrieveDomainAuthCode<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Domains_v20140515.RetrieveDomainAuthCode']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetRoute53DomainsV20140515RetrieveDomainAuthCodeMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetRoute53DomainsV20140515TransferDomainMutationKey() {
  return [
    '#X-Amz-Target=Route53Domains_v20140515.TransferDomain',
    '/#X-Amz-Target=Route53Domains_v20140515.TransferDomain',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53DomainsV20140515TransferDomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Domains_v20140515.TransferDomain']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53DomainsV20140515TransferDomainMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Domains_v20140515.TransferDomain']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53Domains_v20140515.TransferDomain'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetRoute53DomainsV20140515TransferDomain<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Domains_v20140515.TransferDomain']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetRoute53DomainsV20140515TransferDomainMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetRoute53DomainsV20140515TransferDomainToAnotherAwsAccountMutationKey() {
  return [
    '#X-Amz-Target=Route53Domains_v20140515.TransferDomainToAnotherAwsAccount',
    '/#X-Amz-Target=Route53Domains_v20140515.TransferDomainToAnotherAwsAccount',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53DomainsV20140515TransferDomainToAnotherAwsAccountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Domains_v20140515.TransferDomainToAnotherAwsAccount']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetRoute53DomainsV20140515TransferDomainToAnotherAwsAccountMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Domains_v20140515.TransferDomainToAnotherAwsAccount']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53Domains_v20140515.TransferDomainToAnotherAwsAccount'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetRoute53DomainsV20140515TransferDomainToAnotherAwsAccount<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Domains_v20140515.TransferDomainToAnotherAwsAccount']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetRoute53DomainsV20140515TransferDomainToAnotherAwsAccountMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetRoute53DomainsV20140515UpdateDomainContactMutationKey() {
  return [
    '#X-Amz-Target=Route53Domains_v20140515.UpdateDomainContact',
    '/#X-Amz-Target=Route53Domains_v20140515.UpdateDomainContact',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53DomainsV20140515UpdateDomainContactMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Domains_v20140515.UpdateDomainContact']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53DomainsV20140515UpdateDomainContactMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Domains_v20140515.UpdateDomainContact']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53Domains_v20140515.UpdateDomainContact'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetRoute53DomainsV20140515UpdateDomainContact<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Domains_v20140515.UpdateDomainContact']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetRoute53DomainsV20140515UpdateDomainContactMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetRoute53DomainsV20140515UpdateDomainContactPrivacyMutationKey() {
  return [
    '#X-Amz-Target=Route53Domains_v20140515.UpdateDomainContactPrivacy',
    '/#X-Amz-Target=Route53Domains_v20140515.UpdateDomainContactPrivacy',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53DomainsV20140515UpdateDomainContactPrivacyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Domains_v20140515.UpdateDomainContactPrivacy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53DomainsV20140515UpdateDomainContactPrivacyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Domains_v20140515.UpdateDomainContactPrivacy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53Domains_v20140515.UpdateDomainContactPrivacy'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetRoute53DomainsV20140515UpdateDomainContactPrivacy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Domains_v20140515.UpdateDomainContactPrivacy']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetRoute53DomainsV20140515UpdateDomainContactPrivacyMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetRoute53DomainsV20140515UpdateDomainNameserversMutationKey() {
  return [
    '#X-Amz-Target=Route53Domains_v20140515.UpdateDomainNameservers',
    '/#X-Amz-Target=Route53Domains_v20140515.UpdateDomainNameservers',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53DomainsV20140515UpdateDomainNameserversMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Domains_v20140515.UpdateDomainNameservers']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53DomainsV20140515UpdateDomainNameserversMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Domains_v20140515.UpdateDomainNameservers']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53Domains_v20140515.UpdateDomainNameservers'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetRoute53DomainsV20140515UpdateDomainNameservers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Domains_v20140515.UpdateDomainNameservers']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetRoute53DomainsV20140515UpdateDomainNameserversMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetRoute53DomainsV20140515UpdateTagsForDomainMutationKey() {
  return [
    '#X-Amz-Target=Route53Domains_v20140515.UpdateTagsForDomain',
    '/#X-Amz-Target=Route53Domains_v20140515.UpdateTagsForDomain',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53DomainsV20140515UpdateTagsForDomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Domains_v20140515.UpdateTagsForDomain']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53DomainsV20140515UpdateTagsForDomainMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Domains_v20140515.UpdateTagsForDomain']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53Domains_v20140515.UpdateTagsForDomain'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetRoute53DomainsV20140515UpdateTagsForDomain<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Domains_v20140515.UpdateTagsForDomain']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetRoute53DomainsV20140515UpdateTagsForDomainMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetRoute53DomainsV20140515ViewBillingMutationKey() {
  return [
    '#X-Amz-Target=Route53Domains_v20140515.ViewBilling',
    '/#X-Amz-Target=Route53Domains_v20140515.ViewBilling',
    'POST',
  ] as const
}

export function getPostXAmzTargetRoute53DomainsV20140515ViewBillingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53Domains_v20140515.ViewBilling']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRoute53DomainsV20140515ViewBillingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Route53Domains_v20140515.ViewBilling']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Route53Domains_v20140515.ViewBilling'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetRoute53DomainsV20140515ViewBilling<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=Route53Domains_v20140515.ViewBilling']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetRoute53DomainsV20140515ViewBillingMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
