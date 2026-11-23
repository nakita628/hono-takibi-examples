import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAcceptDisputeKey() {
  return ['acceptDispute'] as const
}

export function getDefendDisputeKey() {
  return ['defendDispute'] as const
}

export function getDeleteDisputeDefenseDocumentKey() {
  return ['deleteDisputeDefenseDocument'] as const
}

export function getRetrieveApplicableDefenseReasonsKey() {
  return ['retrieveApplicableDefenseReasons'] as const
}

export function getSupplyDefenseDocumentKey() {
  return ['supplyDefenseDocument'] as const
}

export function getPostAcceptDisputeKey() {
  return ['acceptDispute', '/acceptDispute', 'POST'] as const
}

export function usePostAcceptDispute<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.acceptDispute.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.acceptDispute.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAcceptDisputeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.acceptDispute.$post> }) =>
        parseResponse(client.acceptDispute.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDefendDisputeKey() {
  return ['defendDispute', '/defendDispute', 'POST'] as const
}

export function usePostDefendDispute<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.defendDispute.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.defendDispute.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDefendDisputeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.defendDispute.$post> }) =>
        parseResponse(client.defendDispute.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDeleteDisputeDefenseDocumentKey() {
  return ['deleteDisputeDefenseDocument', '/deleteDisputeDefenseDocument', 'POST'] as const
}

export function usePostDeleteDisputeDefenseDocument<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.deleteDisputeDefenseDocument.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.deleteDisputeDefenseDocument.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeleteDisputeDefenseDocumentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.deleteDisputeDefenseDocument.$post> },
      ) => parseResponse(client.deleteDisputeDefenseDocument.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRetrieveApplicableDefenseReasonsKey() {
  return ['retrieveApplicableDefenseReasons', '/retrieveApplicableDefenseReasons', 'POST'] as const
}

export function usePostRetrieveApplicableDefenseReasons<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.retrieveApplicableDefenseReasons.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.retrieveApplicableDefenseReasons.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRetrieveApplicableDefenseReasonsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.retrieveApplicableDefenseReasons.$post> },
      ) => parseResponse(client.retrieveApplicableDefenseReasons.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSupplyDefenseDocumentKey() {
  return ['supplyDefenseDocument', '/supplyDefenseDocument', 'POST'] as const
}

export function usePostSupplyDefenseDocument<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.supplyDefenseDocument.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.supplyDefenseDocument.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSupplyDefenseDocumentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.supplyDefenseDocument.$post> },
      ) => parseResponse(client.supplyDefenseDocument.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
