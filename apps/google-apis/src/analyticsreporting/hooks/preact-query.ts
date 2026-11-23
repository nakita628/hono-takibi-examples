import { useMutation, mutationOptions } from '@tanstack/preact-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV4Key() {
  return ['v4'] as const
}

export function getPostV4ReportsBatchGetMutationKey() {
  return ['v4', '/v4/reports:batchGet', 'POST'] as const
}

export function getPostV4ReportsBatchGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v4)['reports:batchGet']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v4)['reports:batchGet']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV4ReportsBatchGetMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v4)['reports:batchGet']['$post']>) {
      return parseResponse(client.v4['reports:batchGet'].$post(args, options))
    },
  })
}

export function usePostV4ReportsBatchGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v4)['reports:batchGet']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v4)['reports:batchGet']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV4ReportsBatchGetMutationOptions<TError, TOnMutateResult>(
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

export function getPostV4UserActivitySearchMutationKey() {
  return ['v4', '/v4/userActivity:search', 'POST'] as const
}

export function getPostV4UserActivitySearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4)['userActivity:search']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v4)['userActivity:search']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV4UserActivitySearchMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v4)['userActivity:search']['$post']>) {
      return parseResponse(client.v4['userActivity:search'].$post(args, options))
    },
  })
}

export function usePostV4UserActivitySearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v4)['userActivity:search']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v4)['userActivity:search']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV4UserActivitySearchMutationOptions<TError, TOnMutateResult>(
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
