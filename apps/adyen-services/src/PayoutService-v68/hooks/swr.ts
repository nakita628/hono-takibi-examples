import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getPostConfirmThirdPartyKey() {
  return ['confirmThirdParty', '/confirmThirdParty', 'POST'] as const
}

export function usePostConfirmThirdParty<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.confirmThirdParty.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.confirmThirdParty.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConfirmThirdPartyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.confirmThirdParty.$post> }) =>
        parseResponse(client.confirmThirdParty.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDeclineThirdPartyKey() {
  return ['declineThirdParty', '/declineThirdParty', 'POST'] as const
}

export function usePostDeclineThirdParty<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.declineThirdParty.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.declineThirdParty.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeclineThirdPartyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.declineThirdParty.$post> }) =>
        parseResponse(client.declineThirdParty.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPayoutKey() {
  return ['payout', '/payout', 'POST'] as const
}

export function usePostPayout<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payout.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.payout.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPayoutKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.payout.$post> }) =>
        parseResponse(client.payout.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostStoreDetailKey() {
  return ['storeDetail', '/storeDetail', 'POST'] as const
}

export function usePostStoreDetail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.storeDetail.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.storeDetail.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStoreDetailKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.storeDetail.$post> }) =>
        parseResponse(client.storeDetail.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostStoreDetailAndSubmitThirdPartyKey() {
  return ['storeDetailAndSubmitThirdParty', '/storeDetailAndSubmitThirdParty', 'POST'] as const
}

export function usePostStoreDetailAndSubmitThirdParty<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.storeDetailAndSubmitThirdParty.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.storeDetailAndSubmitThirdParty.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStoreDetailAndSubmitThirdPartyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.storeDetailAndSubmitThirdParty.$post> },
      ) => parseResponse(client.storeDetailAndSubmitThirdParty.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSubmitThirdPartyKey() {
  return ['submitThirdParty', '/submitThirdParty', 'POST'] as const
}

export function usePostSubmitThirdParty<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.submitThirdParty.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.submitThirdParty.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSubmitThirdPartyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.submitThirdParty.$post> }) =>
        parseResponse(client.submitThirdParty.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
