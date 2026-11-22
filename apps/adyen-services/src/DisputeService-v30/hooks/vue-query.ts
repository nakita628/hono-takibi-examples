import { useMutation, mutationOptions } from '@tanstack/vue-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/vue-query'
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

export function getPostAcceptDisputeMutationKey() {
  return ['acceptDispute', '/acceptDispute', 'POST'] as const
}

export function getPostAcceptDisputeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.acceptDispute.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.acceptDispute.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAcceptDisputeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.acceptDispute.$post>) {
      return parseResponse(client.acceptDispute.$post(args, options))
    },
  })
}

export function usePostAcceptDispute<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.acceptDispute.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.acceptDispute.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAcceptDisputeMutationOptions<TError, TOnMutateResult>(
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

export function getPostDefendDisputeMutationKey() {
  return ['defendDispute', '/defendDispute', 'POST'] as const
}

export function getPostDefendDisputeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.defendDispute.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.defendDispute.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDefendDisputeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.defendDispute.$post>) {
      return parseResponse(client.defendDispute.$post(args, options))
    },
  })
}

export function usePostDefendDispute<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.defendDispute.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.defendDispute.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDefendDisputeMutationOptions<TError, TOnMutateResult>(
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

export function getPostDeleteDisputeDefenseDocumentMutationKey() {
  return ['deleteDisputeDefenseDocument', '/deleteDisputeDefenseDocument', 'POST'] as const
}

export function getPostDeleteDisputeDefenseDocumentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.deleteDisputeDefenseDocument.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.deleteDisputeDefenseDocument.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDeleteDisputeDefenseDocumentMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.deleteDisputeDefenseDocument.$post>) {
      return parseResponse(client.deleteDisputeDefenseDocument.$post(args, options))
    },
  })
}

export function usePostDeleteDisputeDefenseDocument<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.deleteDisputeDefenseDocument.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.deleteDisputeDefenseDocument.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDeleteDisputeDefenseDocumentMutationOptions<
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

export function getPostRetrieveApplicableDefenseReasonsMutationKey() {
  return ['retrieveApplicableDefenseReasons', '/retrieveApplicableDefenseReasons', 'POST'] as const
}

export function getPostRetrieveApplicableDefenseReasonsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.retrieveApplicableDefenseReasons.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.retrieveApplicableDefenseReasons.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRetrieveApplicableDefenseReasonsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.retrieveApplicableDefenseReasons.$post>) {
      return parseResponse(client.retrieveApplicableDefenseReasons.$post(args, options))
    },
  })
}

export function usePostRetrieveApplicableDefenseReasons<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.retrieveApplicableDefenseReasons.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.retrieveApplicableDefenseReasons.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRetrieveApplicableDefenseReasonsMutationOptions<
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

export function getPostSupplyDefenseDocumentMutationKey() {
  return ['supplyDefenseDocument', '/supplyDefenseDocument', 'POST'] as const
}

export function getPostSupplyDefenseDocumentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.supplyDefenseDocument.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.supplyDefenseDocument.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSupplyDefenseDocumentMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.supplyDefenseDocument.$post>) {
      return parseResponse(client.supplyDefenseDocument.$post(args, options))
    },
  })
}

export function usePostSupplyDefenseDocument<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.supplyDefenseDocument.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.supplyDefenseDocument.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSupplyDefenseDocumentMutationOptions<TError, TOnMutateResult>(
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
