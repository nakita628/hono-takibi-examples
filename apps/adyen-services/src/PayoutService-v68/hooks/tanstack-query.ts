import { useMutation, mutationOptions } from '@tanstack/react-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getConfirmThirdPartyKey() {
  return ['confirmThirdParty'] as const
}

export function getDeclineThirdPartyKey() {
  return ['declineThirdParty'] as const
}

export function getPayoutKey() {
  return ['payout'] as const
}

export function getStoreDetailKey() {
  return ['storeDetail'] as const
}

export function getStoreDetailAndSubmitThirdPartyKey() {
  return ['storeDetailAndSubmitThirdParty'] as const
}

export function getSubmitThirdPartyKey() {
  return ['submitThirdParty'] as const
}

export function getPostConfirmThirdPartyMutationKey() {
  return ['confirmThirdParty', '/confirmThirdParty', 'POST'] as const
}

export function getPostConfirmThirdPartyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.confirmThirdParty.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.confirmThirdParty.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostConfirmThirdPartyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.confirmThirdParty.$post>) {
      return parseResponse(client.confirmThirdParty.$post(args, options))
    },
  })
}

export function usePostConfirmThirdParty<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.confirmThirdParty.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.confirmThirdParty.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostConfirmThirdPartyMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostDeclineThirdPartyMutationKey() {
  return ['declineThirdParty', '/declineThirdParty', 'POST'] as const
}

export function getPostDeclineThirdPartyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.declineThirdParty.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.declineThirdParty.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDeclineThirdPartyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.declineThirdParty.$post>) {
      return parseResponse(client.declineThirdParty.$post(args, options))
    },
  })
}

export function usePostDeclineThirdParty<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.declineThirdParty.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.declineThirdParty.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDeclineThirdPartyMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostPayoutMutationKey() {
  return ['payout', '/payout', 'POST'] as const
}

export function getPostPayoutMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payout.$post>>>>>,
    TError,
    InferRequestType<typeof client.payout.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPayoutMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.payout.$post>) {
      return parseResponse(client.payout.$post(args, options))
    },
  })
}

export function usePostPayout<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payout.$post>>>>>,
        TError,
        InferRequestType<typeof client.payout.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPayoutMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostStoreDetailMutationKey() {
  return ['storeDetail', '/storeDetail', 'POST'] as const
}

export function getPostStoreDetailMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.storeDetail.$post>>>>>,
    TError,
    InferRequestType<typeof client.storeDetail.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostStoreDetailMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.storeDetail.$post>) {
      return parseResponse(client.storeDetail.$post(args, options))
    },
  })
}

export function usePostStoreDetail<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.storeDetail.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.storeDetail.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostStoreDetailMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostStoreDetailAndSubmitThirdPartyMutationKey() {
  return ['storeDetailAndSubmitThirdParty', '/storeDetailAndSubmitThirdParty', 'POST'] as const
}

export function getPostStoreDetailAndSubmitThirdPartyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.storeDetailAndSubmitThirdParty.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.storeDetailAndSubmitThirdParty.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostStoreDetailAndSubmitThirdPartyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.storeDetailAndSubmitThirdParty.$post>) {
      return parseResponse(client.storeDetailAndSubmitThirdParty.$post(args, options))
    },
  })
}

export function usePostStoreDetailAndSubmitThirdParty<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.storeDetailAndSubmitThirdParty.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.storeDetailAndSubmitThirdParty.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostStoreDetailAndSubmitThirdPartyMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostSubmitThirdPartyMutationKey() {
  return ['submitThirdParty', '/submitThirdParty', 'POST'] as const
}

export function getPostSubmitThirdPartyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.submitThirdParty.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.submitThirdParty.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSubmitThirdPartyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.submitThirdParty.$post>) {
      return parseResponse(client.submitThirdParty.$post(args, options))
    },
  })
}

export function usePostSubmitThirdParty<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.submitThirdParty.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.submitThirdParty.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSubmitThirdPartyMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
